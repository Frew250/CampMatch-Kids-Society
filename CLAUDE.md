# CLAUDE.md

Guidance for Claude when working in this repo.

## What this is

Marketing website for **Camp Match Kids Society** — a nonprofit that connects
families, camp partners, and donors so more children can access summer camp.
It's a single-page static site.

## Stack

- **Vite** (vanilla JS — no framework)
- Entry: `index.html` → `src/main.js` → `src/style.css`
- The whole page is rendered as a template string in `src/main.js`
  (`#app`.innerHTML). Edit that string to change page content/structure.
- Styles live in `src/style.css`. Static assets in `public/`.

## Commands

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Local dev server (live reload) | `npm run dev` |
| Production build → `dist/` | `npm run build` |
| Preview the production build | `npm run preview` |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
deploys to **GitHub Pages**.

- Live URL: https://frew250.github.io/CampMatch-Kids-Society/
- The Vite `base` in `vite.config.js` MUST match the repo name
  (`/CampMatch-Kids-Society/`) or assets 404 in production. If the repo is
  renamed or moved to a custom domain, update `base`.

## Design system — clean teal + orange charity site

Hand-designed (the `impeccable` plugin is installed but intentionally NOT used to
drive design — the user asked to override it). Light, airy, premium: teal as the
anchor, orange used sparingly for CTAs/emphasis, real photography in offset
frames, subtle fade-up motion only.

- **Brand**: name stays "Camp Match Kids Society". Logo is a teal backpack +
  orange map-pin (related to campmatch.ca). Logo file pending — see below.
- **Palette** (CSS vars in `:root`): `--teal #2c8a80` (brand), `--orange #e3793c`
  (accent/CTA), `--teal-ink #163b37` (headings/dark band), `--ink #1d2b29`
  (body), `--muted #5b6b68`, `--bg #ffffff`, `--surface #f4f8f7` (tint sections).
- **Type**: Bricolage Grotesque (display) + Hanken Grotesk (body), loaded via
  `<link>` in `index.html`.
- Hero = split layout, photo in an offset frame (`.hero-figure::before/after`).
  One dark teal "promise" band for contrast. Sticky blurred nav.
- **Logo TODO**: when `public/logo.png` exists, swap the inline `.brand-mark`
  SVG (in `src/main.js`, header + footer) for `<img class="brand-logo">` and set
  it as favicon in `index.html`.
- **Photography**: real Unsplash photos in `src/main.js` via the `img()` helper.
  Currently used (all verified to resolve): `1606092195730-5d7b9af1efc5`
  (hero parachute), `1638202951770-2240942c7d1c` (mission hammock),
  `1517164850305-99a3e65bb47e` (tug-of-war). **Always HTTP-verify a new
  Unsplash ID before referencing it** — guessed IDs 404 and ship as broken
  images.
- Motion only inside `@media (prefers-reduced-motion: no-preference)` — content
  is visible by default (never gate visibility on a reveal class).

## Conventions / notes

- Keep it framework-free and lightweight — the value here is a fast, simple site.
- Placeholder content to replace before going live: the
  `hello@campmatchkidssociety.org` mailto links in `src/main.js` and the footer
  note about replacing them.
- Keep the repo lean — local tooling config (`.claude/`, `.mcp.json*`) is
  git-ignored; don't commit secrets or experiment files.
