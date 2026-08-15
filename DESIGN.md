---
name: "Petauron Website"
description: "A restrained, organization-first developer site for Petauron and Vastora."
colors:
  canvas: "#ffffff"
  elevated-canvas: "#f5f8fd"
  surface: "#f4f7fc"
  blue-surface: "#eef4ff"
  ink: "#07152d"
  muted-ink: "#44546e"
  dim-ink: "#596a82"
  line: "#d8e0ec"
  strong-line: "#aebdd2"
  cobalt: "#0759d9"
  cobalt-strong: "#0645aa"
  cobalt-soft: "#e7f0ff"
  link: "#31445f"
  link-hover: "#0759d9"
  preview: "#1478ff"
  danger: "#b4233b"
  diagram-field: "#f8fbff"
  social-default: "#64748b"
  github: "#181717"
  x: "#000000"
  telegram: "#229ed9"
typography:
  display:
    fontFamily: "Geist Variable, Noto Sans SC Variable, ui-sans-serif, sans-serif"
    fontSize: "clamp(4rem, 7.7vw, 6rem)"
    fontWeight: 610
    lineHeight: 0.94
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Geist Variable, Noto Sans SC Variable, ui-sans-serif, sans-serif"
    fontSize: "clamp(2.4rem, 4.2vw, 4.7rem)"
    fontWeight: 580
    lineHeight: 1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Geist Variable, Noto Sans SC Variable, ui-sans-serif, sans-serif"
    fontSize: "clamp(1.55rem, 2.5vw, 2.15rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist Variable, Noto Sans SC Variable, ui-sans-serif, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Mono Variable, Noto Sans SC Variable, ui-monospace, monospace"
    fontSize: "0.76rem"
    fontWeight: 590
    lineHeight: 1
    letterSpacing: "0.02em"
  control:
    fontFamily: "Geist Variable, Noto Sans SC Variable, ui-sans-serif, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0"
  display-mobile:
    fontFamily: "Geist Variable, Noto Sans SC Variable, ui-sans-serif, sans-serif"
    fontSize: "clamp(3rem, 14.5vw, 4rem)"
  lede:
    fontFamily: "Geist Variable, Noto Sans SC Variable, ui-sans-serif, sans-serif"
    fontSize: "clamp(1.08rem, 1.7vw, 1.35rem)"
  supporting:
    fontFamily: "Geist Variable, Noto Sans SC Variable, ui-sans-serif, sans-serif"
    fontSize: "0.95rem"
  brand-compact:
    fontFamily: "Geist Variable, Noto Sans SC Variable, ui-sans-serif, sans-serif"
    fontSize: "0.86rem"
  project-title:
    fontFamily: "Geist Variable, Noto Sans SC Variable, ui-sans-serif, sans-serif"
    fontSize: "clamp(3.1rem, 4.2vw, 4.15rem)"
  project-description:
    fontFamily: "Geist Variable, Noto Sans SC Variable, ui-sans-serif, sans-serif"
    fontSize: "clamp(1.05rem, 1.5vw, 1.22rem)"
  principle-copy:
    fontFamily: "Geist Variable, Noto Sans SC Variable, ui-sans-serif, sans-serif"
    fontSize: "0.84rem"
  diagram-caption:
    fontFamily: "Geist Mono Variable, Noto Sans SC Variable, ui-monospace, monospace"
    fontSize: "11px"
  diagram-node:
    fontFamily: "Geist Mono Variable, Noto Sans SC Variable, ui-monospace, monospace"
    fontSize: "15px"
  diagram-agent:
    fontFamily: "Geist Mono Variable, Noto Sans SC Variable, ui-monospace, monospace"
    fontSize: "10px"
  diagram-mobile-center:
    fontFamily: "Geist Mono Variable, Noto Sans SC Variable, ui-monospace, monospace"
    fontSize: "0.72rem"
  diagram-mobile-plane:
    fontFamily: "Geist Mono Variable, Noto Sans SC Variable, ui-monospace, monospace"
    fontSize: "0.66rem"
  diagram-mobile-agent:
    fontFamily: "Geist Mono Variable, Noto Sans SC Variable, ui-monospace, monospace"
    fontSize: "0.7rem"
rounded:
  focus: "3px"
  brand-placeholder: "6px"
  diagram: "7px"
  social: "8px"
  control: "9px"
  surface: "12px"
  pill: "999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  "2xl": "3rem"
  section: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.canvas}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 1rem 0 1.15rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-strong}"
    textColor: "{colors.canvas}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 1rem 0 1.15rem"
    height: "3rem"
  button-secondary-hover:
    backgroundColor: "{colors.cobalt-soft}"
    textColor: "{colors.link-hover}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
  current-project-plate:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "0"
  diagram-node:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.cobalt}"
    typography: "{typography.label}"
    rounded: "{rounded.diagram}"
---

# Design System: Petauron Website

## Overview

**Creative North Star: "Organization First"**

Petauron uses a familiar, high-finish developer-site language: generous white space, precise sans-serif typography, cobalt rules, pale-blue support fields, and diagrams that explain real system relationships. The hierarchy introduces the open-source organization before its only current product. The implementation follows direction contract seed `b683a8ea`; it is calm, direct, technical, and deliberately free of spectacle.

Vastora is a centralized server management platform built on a Center–Agent architecture. Its public components are **Vastora Center** and **Vastora Agent**; a managed machine is a **Node**, and the management layer is the **Control Plane**. These names are binding in copy, diagrams, metadata, and localization.

The final Petauron logo and wordmark remain pending. The current crosshair mark, text wordmark, favicon, Apple touch icon, and Open Graph image are neutral placeholders, never final identity.

**Key Characteristics:**

- Organization-scale statements followed by inspectable product proof.
- Flat white and pale-blue surfaces structured with cobalt and hairline borders.
- Geist Sans for communication, Geist Mono for technical metadata, and Noto Sans SC for Chinese.
- Semantic, bilingual, fully static Astro with no tracking or application back end.

## Colors

The palette is a bright technical neutral field with cobalt used for action, state, and system structure. Canonical values live in the frontmatter and mirror `src/styles/global.css`.

### Primary

- **Petauron Cobalt** (`cobalt`): primary actions, active navigation, proof icons, diagram line work, focus outlines, and important rules.
- **Deep Cobalt** (`cobalt-strong`): primary-button hover state.
- **Cobalt Wash** (`cobalt-soft`): restrained secondary-action hover fill.

### Secondary

- **Signal Blue** (`preview`): preview-status signal only; do not use it as a competing brand accent.
- **Alert Red** (`danger`): archived or destructive status only.

### Neutral

- **True White** (`canvas`): page canvas, controls, and primary panels.
- **Cool Support Fields** (`elevated-canvas`, `surface`, `blue-surface`): footer, hover fields, diagram field, and quiet grouping.
- **Deep Navy** (`ink`): headings and primary copy; **Muted Navy** (`muted-ink`) and **Dim Navy** (`dim-ink`) step down supporting copy and metadata.
- **Hairline Blue-Gray** (`line`) and **Strong Blue-Gray** (`strong-line`): layout divisions, outlines, and stronger control borders.
- **Quiet Link Navy** (`link`) moves to `link-hover` on hover.

**The Cobalt Signal Rule.** Cobalt marks action, state, or topology; it is not a decorative wash across large areas.

**The White Field Rule.** Preserve the light world. Do not introduce dark-mode sections, gradients, glass, or ornamental color fields.

## Typography

- **Display Font:** Geist Variable, with Noto Sans SC and system sans-serif fallbacks
- **Body Font:** Geist Variable; Chinese body copy leads with Noto Sans SC Variable
- **Technical Font:** Geist Mono Variable, with Noto Sans SC and system monospace fallbacks

**Character:** The system is typographically restrained and developer-native. Large headlines stay sans serif and confident; monospace appears only where the information is genuinely technical.

### Hierarchy

- **Display:** the homepage organization statement. English uses tight leading and slight negative tracking; Chinese uses Noto Sans SC at a heavier weight, zero tracking, and relaxed leading.
- **Headline:** major section introductions and page-level statements, balanced across lines without turning into poster typography.
- **Title:** article and content hierarchy below section level.
- **Body:** default copy begins at `1rem`; marketing ledes scale modestly, and long prose stays within roughly `68–72ch`.
- **Label:** Geist Mono for status, versions, Control Plane labels, Node identifiers, and other machine-like metadata. Small editorial kickers may remain Geist Sans when they are not technical data.
- **Control:** compact, semibold Geist Sans for navigation and buttons.

**The Technical-Type Rule.** Do not use monospace or serif type for large headlines. Reserve Geist Mono for status and system notation.

**The Bilingual Rhythm Rule.** English display tracking stays between `-0.01em` and `0`; Simplified Chinese uses zero tracking, heavier heading weight, and more generous line height.

## Layout

The shared container is capped at `1408px`. Its horizontal gutter is `40px` per side until the cap is reached, `24px` at `900px` and below, and `16px` at `560px` and below. Standard inner pages use `7rem` vertical padding, reducing to `5.75rem` and then `4.75rem` at those same breakpoints.

The homepage uses a deliberately dense editorial composition: a full-width hero, a proof/action split with inset content and a fine separator before its wide actions, a wide two-part Vastora plate, a four-item principles band, and a compact latest-update row form one continuous desktop reading board. The principles heading remains semantic but visually recedes so the product plate flows directly into the four organization principles. The project plate stacks below `850px`; principles move from four columns to two below `980px` and one below `560px`. The sticky header becomes two rows below `900px`; its text wordmark becomes visually hidden only below `360px` while the home link remains labeled.

Mobile follows DOM reading order and does not hide substantive content. The English display size steps down enough for the longest unbroken headline word to fit, primary actions become a full-width stack, metadata moves below titles, and the topology diagram switches from its desktop SVG layout to a two-column Node layout at `560px` while preserving the same accessible description.

**The Wide Proof Rule.** Use breadth for one verified idea at a time; do not subdivide pages into dense bento-card mosaics.

## Elevation & Depth

This is a flat system with no decorative shadows. Depth comes from tonal changes between white and cool support fields, `1px` hairline borders, the `2px` cobalt hero rule, and spatial separation. Hover states change color or shift an arrow by `3px`; they do not lift whole surfaces.

**The Flat-by-Default Rule.** Do not add box shadows, glow, glass blur, or simulated 3D depth. Use border, tone, and spacing to establish hierarchy.

## Shapes

Geometry is restrained and functional. Major plates use gently rounded corners (`surface`); buttons and proof icons use compact corners (`control`); diagram Nodes, social controls, and placeholder-brand framing use the smaller documented radii. Status signals are circular, and the scrollbar thumb is the only pill-like neutral shape.

Borders are usually solid hairlines. The crosshair brand placeholder alone uses a dashed enclosure so its provisional status remains visible. Inline icons use authored, rounded-cap line SVGs rather than filled illustration systems.

**The Restrained-Corner Rule.** Keep product surfaces within the implemented `6–12px` family; do not turn every container into a pill.

## Components

### Buttons

- **Shape:** semantic anchors with compact rounded corners (`control`), a minimum height of `3rem`, and an inline right arrow.
- **Primary:** solid `cobalt` with white text; hover moves to `cobalt-strong`.
- **Secondary:** white with `strong-line`; hover changes border to cobalt and fills with `cobalt-soft`.
- **Focus:** the shared visible focus treatment is a `3px` cobalt outline with `4px` offset. Never remove it.

### Navigation

The header is sticky with a near-opaque white field and a hairline bottom border. Active links use cobalt text and a `2px` underline; language links underline the active locale. Navigation and social targets remain at least `2.75rem` high or square. Social links are limited to GitHub, X, and Telegram.

### Current Project Plate

The signature product surface pairs factual project copy with the Center–Agent topology. It uses one `12px` outer radius, a white content field, a near-white blue diagram field, and a hairline divider. The plate presents Vastora as the current product without metrics, invented UI, or promotional proof.

### Center–Agent Diagram

The diagram is authored interface content, not decoration. It shows **Vastora Center** connected through the **Control Plane** to **Vastora Agent** instances inside named **Nodes**. The Control Plane remains explicit in the semantic description and product copy rather than appearing as a visible midpoint label. Use cobalt line work, white Node boxes, Geist Mono labels, a semantic figure, and a complete text alternative. Never revert to the legacy “Master” terminology.

### Status, Project, and Update Rows

Statuses pair uppercase technical labels with a colored dot. Project and update rows are full-width, border-led links; hover changes text/background and nudges the arrow by `3px`. Keep the whole row keyboard reachable and retain visible focus.

### Interaction and Accessibility

Transitions are short (`160–180ms`) and limited to color, underline, border, or a small arrow translation. `prefers-reduced-motion: reduce` disables transitions, animations, and smooth scrolling. Preserve semantic landmarks, labeled navigation, `aria-current`, descriptive external-link labels, keyboard operation, readable narrow layouts, and accessible contrast in both languages.

## Do's and Don'ts

### Do

- **Do** preserve the organization-first sequence: organization promise, verified AI-assisted practice, current product, build principles, then public updates.
- **Do** use the binding Vastora terminology exactly: Vastora Center, Vastora Agent, Node, Control Plane, and Center–Agent architecture.
- **Do** keep English and Simplified Chinese surfaces in parity; update shared translation/content sources instead of embedding divergent page copy.
- **Do** keep the site fully static Astro. Product data belongs in `src/content/projects` and `src/content/projects-zh`; updates belong in `src/content/updates` and `src/content/updates-zh`; social links belong in `src/data/social.ts`.
- **Do** route every public page through `BaseLayout.astro` with title, description, canonical URL, and Open Graph metadata.
- **Do** update reusable primitives in `src/styles/global.css` first, then update this document in the same change when tokens or component rules move.
- **Do** keep provenance beside any raster assets that are approved for publication; prefer authored inline SVG for diagrams and icons. Treat local design-review archives and staging assets as non-shipping material.
- **Do** run `pnpm build` after changes and verify English/Chinese desktop and narrow layouts, keyboard focus, reduced motion, and the Center–Agent text alternative.

### Don't

- **Don't** present the crosshair mark, text wordmark, favicon, Apple touch icon, or Open Graph artwork as final brand identity; replace the placeholder set together only after final logo/wordmark approval.
- **Don't** restore or ship archived legacy artwork without explicit review and provenance.
- **Don't** publish “Master,” “Master + Node,” fabricated metrics, customers, testimonials, benchmarks, features, roadmap details, or other unverified claims.
- **Don't** add SSR adapters, API routes, Cloudflare Pages Functions, databases, authentication, analytics, tracking scripts, or React unless a future requirement explicitly needs client-side interaction.
- **Don't** add dark sections, gradients, glass effects, decorative shadows, 3D server imagery, mascots, experimental navigation, serif display type, or giant monospace headlines.
