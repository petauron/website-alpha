# Website Agent Rules

- The website must remain fully static.
- Do not add SSR adapters, API routes, Cloudflare Pages Functions, databases, authentication, analytics, or tracking scripts.
- Do not add React unless a task explicitly requires client-side interaction.
- Product data belongs in `src/content/projects`; updates belong in `src/content/updates`.
- Social links belong in `src/data/social.ts`.
- Every public page must include title, description, canonical URL, and Open Graph metadata via `BaseLayout.astro`.
- Never commit secrets, private roadmap information, or unverified public claims.
- All changes must pass `pnpm build`.
