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

## Design system — friendly, photo-led charity style

Inspired by kids.org.uk: white base, big rounded shapes, chunky pill buttons,
real photography, warm accent palette. Passes the `impeccable` detector (no
cream bg, glassmorphism, per-section eyebrows, 01/02/03 markers, or identical
card grids).

- **Palette** (CSS vars in `:root`): `--terracotta #c1492b` (brand), `--ember
  #f4a14e` (accent), `--dusk #2f4858` (secondary), `--ink #2b1a13` (text),
  `--bg #ffffff` (white), `--tint #fdeee2` (soft section blocks).
- **Type**: Fredoka (display headings) + Hanken Grotesk (body), loaded via
  `<link>` in `index.html`. Avoid impeccable's font ban list (Fraunces,
  Newsreader, Inter, DM Sans, Space Grotesk, Outfit, Plus Jakarta…) when
  changing fonts.
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
