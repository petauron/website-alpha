# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Developers, builders, and self-hosting practitioners evaluating Petauron's open-source work, its engineering approach, and whether a project is relevant to their infrastructure.

## Product Purpose

Petauron is an open-source technology organization that builds and shares practical software. The website explains the organization, makes its projects discoverable, and gives visitors a direct path to verified project information and source repositories.

## Positioning

Petauron openly treats AI as part of the engineering process: substantial portions of code across its projects are written and reviewed with AI capabilities, while the resulting work remains inspectable and open source.

## Operating Context

Visitors arrive to understand the organization, inspect its only current product Vastora, read verified updates, and continue to GitHub. Vastora is a centralized server management platform built on a Center–Agent architecture. Its public products are Vastora Center and Vastora Agent; managed machines are Nodes, and the management layer is the Control Plane.

## Capabilities and Constraints

- The website is bilingual in English and Simplified Chinese.
- The website remains fully static and uses Astro content collections.
- Vastora is Petauron's current and only product.
- Social presence is limited to GitHub, X, and Telegram in the website interface.
- Product data belongs in `src/content/projects`; updates belong in `src/content/updates`.
- No SSR, API routes, databases, authentication, analytics, or tracking scripts.
- Do not publish private roadmap information or unverified claims.

## Brand Commitments

- The organization name is Petauron, a coined name derived from the sugar glider's scientific name, _Petaurus breviceps_.
- The established color commitment is a light visual world led by white and cobalt blue.
- English uses Geist Sans for headings, navigation, and body copy; technical labels, versions, and status use Geist Mono; Chinese uses Noto Sans SC.
- English display tracking stays between `-0.01em` and `0`; monospace and serif type are not used for large headlines.
- The final logo and wordmark are still being designed. The website may use explicit placeholders, but must not present a temporary invention as final identity.
- Voice is direct, technically literate, restrained, and transparent about what is known.
- The website deliberately follows the familiar developer-site standard rather than an experimental metaphor. Vercel sets the finish and typographic restraint bar, Tailscale sets the clarity bar for network relationships, and Astro sets the open-source project-storytelling bar; none is a visual template to copy.

## Evidence on Hand

- Existing bilingual organization and project copy in `src/data/i18n.ts` and `src/content/`.
- Existing social links in `src/data/social.ts`.
- Existing logo and image experiments in `public/brand/`, `public/art/`, and `public/social/`; these are references or placeholders, not automatically approved final assets.
- The Petauron GitHub organization is linked from the site.
- No verified customer counts, adoption metrics, testimonials, performance benchmarks, or community-size claims are available and none may be fabricated.

## Product Principles

1. Make open-source work easy to inspect and reach.
2. State product scope and project status plainly.
3. Treat AI-assisted engineering as a transparent practice, not an inflated claim.
4. Prefer portable, static, low-dependency implementation.
5. Preserve clarity and control as the organization adopts new technology.

## Accessibility & Inclusion

The public website must remain keyboard operable, readable at narrow widths, compatible with reduced-motion preferences, and maintain accessible text and interaction contrast in both languages.
