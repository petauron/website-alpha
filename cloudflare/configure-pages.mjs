#!/usr/bin/env node

import { readFile } from "node:fs/promises";

const configUrl = new URL("./pages.project.json", import.meta.url);
const config = JSON.parse(await readFile(configUrl, "utf8"));
const args = new Set(process.argv.slice(2));

if (![...args].every((argument) => argument === "--apply" || argument === "--help")) {
  console.error("Usage: node cloudflare/configure-pages.mjs [--apply]");
  process.exit(1);
}

if (args.has("--help")) {
  console.log("Use --apply to create or update the configured Cloudflare Pages project.");
  process.exit(0);
}

const token = process.env.CLOUDFLARE_API_TOKEN;
const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;

if (!token || !accountId) {
  console.error("CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID must be set for this process.");
  console.error(
    "The API token is read only from the environment and is never written to disk.",
  );
  process.exit(1);
}

const apiBase = `https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(accountId)}`;
const projectsEndpoint = `${apiBase}/pages/projects`;

function projectEndpoint(projectName) {
  return `${projectsEndpoint}/${encodeURIComponent(projectName)}`;
}

function messagesFrom(body) {
  const messages = [...(body?.errors ?? []), ...(body?.messages ?? [])]
    .map((entry) => entry.message)
    .filter(Boolean);
  return messages.join("; ") || "No API error detail was returned.";
}

async function cloudflareRequest(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(options.headers ?? {}),
    },
  });
  const body = await response.json().catch(() => null);

  if (!response.ok || body?.success === false) {
    throw new Error(`Cloudflare API ${response.status}: ${messagesFrom(body)}`);
  }

  return body.result;
}

async function githubRepository() {
  const repositoryUrl = `https://api.github.com/repos/${encodeURIComponent(config.source.config.owner)}/${encodeURIComponent(config.source.config.repo_name)}`;
  const response = await fetch(repositoryUrl, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "petauron-pages-configurator",
    },
  });

  if (!response.ok) {
    throw new Error(
      `GitHub API ${response.status}: unable to resolve the configured repository.`,
    );
  }

  const repository = await response.json();
  if (
    repository.owner?.login !== config.source.config.owner ||
    repository.name !== config.source.config.repo_name
  ) {
    throw new Error(
      "GitHub returned a repository that does not match cloudflare/pages.project.json.",
    );
  }

  return repository;
}

function projectPayload(repository) {
  return {
    ...config,
    source: {
      ...config.source,
      config: {
        ...config.source.config,
        owner_id: String(repository.owner.id),
        repo_id: String(repository.id),
      },
    },
  };
}

function assertCompatible(existing) {
  const source = existing.source;
  const sourceConfig = source?.config;
  const expected = `${config.source.config.owner}/${config.source.config.repo_name}`;
  const actual = sourceConfig
    ? `${sourceConfig.owner}/${sourceConfig.repo_name}`
    : "no Git source";

  if (source?.type !== "github" || actual !== expected) {
    throw new Error(
      `Refusing to overwrite Pages project \"${config.name}\": it is connected to ${actual}. Expected ${expected}.`,
    );
  }
}

async function existingProject() {
  const projects = await cloudflareRequest(`${projectsEndpoint}?per_page=100`);
  const matchingProjects = projects.filter((project) => {
    const sourceConfig = project.source?.config;
    return (
      project.source?.type === "github" &&
      sourceConfig?.owner === config.source.config.owner &&
      sourceConfig?.repo_name === config.source.config.repo_name
    );
  });

  if (matchingProjects.length > 1) {
    throw new Error(
      `More than one Pages project is linked to ${config.source.config.owner}/${config.source.config.repo_name}. Resolve this in Cloudflare before running the configurator.`,
    );
  }

  if (matchingProjects.length === 1) {
    return matchingProjects[0];
  }

  const nameCollision = projects.find((project) => project.name === config.name);
  if (nameCollision) {
    throw new Error(
      `Pages project \"${config.name}\" already exists but is not linked to ${config.source.config.owner}/${config.source.config.repo_name}. Refusing to overwrite it.`,
    );
  }

  return null;
}

const repository = await githubRepository();
const payload = projectPayload(repository);
const existing = await existingProject();
const operation = existing ? "update" : "create";

if (existing) {
  assertCompatible(existing);
}

console.log(
  `${operation === "create" ? "Create" : "Update"} Cloudflare Pages project: ${payload.name}`,
);
console.log(`Repository: ${payload.source.config.owner}/${payload.source.config.repo_name}`);
console.log(`Production branch: ${payload.production_branch}`);
console.log(
  `Build: ${payload.build_config.build_command} -> ${payload.build_config.destination_dir}`,
);

if (!args.has("--apply")) {
  console.log("Dry run only. Re-run with --apply to make the API request.");
  process.exit(0);
}

const result = await cloudflareRequest(
  existing ? projectEndpoint(existing.name) : projectsEndpoint,
  {
    method: existing ? "PATCH" : "POST",
    body: JSON.stringify(
      existing
        ? (() => {
            const { name: _name, ...updatePayload } = payload;
            return updatePayload;
          })()
        : payload,
    ),
  },
);

console.log(`Configured: https://${result.subdomain}`);
