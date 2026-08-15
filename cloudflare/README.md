# Cloudflare Pages API configuration

This directory configures the Git-integrated Cloudflare Pages project for the public
`petauron/website-alpha` repository. It does not use Pages Functions, SSR, a database,
or a direct-upload deployment.

`pages.project.json` is the reviewable source of truth for the Pages project:

- project: `website-alpha`
- production branch: `main`
- build: `pnpm build` into `dist`
- preview deployments: enabled for all non-production branches
- Node: `22.16.0`
- pnpm: `11.19.0`

## Prerequisites

Before the first API run, install the **Cloudflare Workers and Pages** GitHub App for
the `petauron` organization and restrict it to the `website-alpha` repository. Cloudflare
must authorize the GitHub repository before it can create a Git-integrated Pages project.

Create a scoped Cloudflare API token with **Pages: Write** for the target account. Keep
the token out of files, Git, and chat history. The account ID is not secret, but it is
also read only from the process environment.

## Configure or repair Pages

Run a dry run first:

```bash
CLOUDFLARE_ACCOUNT_ID="your-account-id" \
CLOUDFLARE_API_TOKEN="your-temporary-token" \
node cloudflare/configure-pages.mjs
```

Then make the idempotent API request:

```bash
CLOUDFLARE_ACCOUNT_ID="your-account-id" \
CLOUDFLARE_API_TOKEN="your-temporary-token" \
node cloudflare/configure-pages.mjs --apply
```

The script first discovers any existing Pages project already connected to
`petauron/website-alpha`, regardless of its Cloudflare project name. If none exists, it
creates `website-alpha`. It refuses to overwrite a project linked to another repository
or a direct-upload project.

## After the first successful deployment

Add `petauron.com` from the Pages project's **Custom domains** section. This repository
already generates canonical URLs and a sitemap for `https://petauron.com`; bind the
domain before treating the `*.pages.dev` URL as the public website.

Do not add DNS records manually before associating the custom domain in the Pages
dashboard. For an apex domain, the zone must be managed by the same Cloudflare account.
