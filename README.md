# Petauron Website

The official, fully static website for [Petauron](https://petauron.com).

## Stack

- Astro + TypeScript Strict
- Tailwind CSS 4 and component-scoped CSS
- Markdown content collections
- Cloudflare Pages-compatible static output

## Local development

```bash
pnpm install
pnpm dev
```

Run the production checks with:

```bash
pnpm build
```

## Deployment

Deploy to Cloudflare Pages with:

- Build command: `pnpm build`
- Build output directory: `dist`
- Production branch: `main`

This project intentionally has no server runtime, API routes, or Pages Functions.
