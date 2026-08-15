import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const projectStatus = z.enum(["planned", "development", "preview", "stable", "archived"]);

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: projectStatus.optional(),
  featured: z.boolean().default(false),
  order: z.number().int().nonnegative(),
  repository: z.url().optional(),
  technologies: z.array(z.string()).default([]),
  publishedAt: z.coerce.date(),
});

const updateSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.coerce.date(),
  kind: z.enum(["announcement", "release", "development-log"]),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: projectSchema,
});

const projectsZh = defineCollection({
  loader: glob({ base: "./src/content/projects-zh", pattern: "**/*.md" }),
  schema: projectSchema,
});

const updates = defineCollection({
  loader: glob({ base: "./src/content/updates", pattern: "**/*.md" }),
  schema: updateSchema,
});

const updatesZh = defineCollection({
  loader: glob({ base: "./src/content/updates-zh", pattern: "**/*.md" }),
  schema: updateSchema,
});

export const collections = { projects, projectsZh, updates, updatesZh };
