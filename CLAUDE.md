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

## Design system — "Sunset Campfire"

Redesigned with the `impeccable` plugin to avoid AI-slop tells (no cream bg, no
glassmorphism, no per-section eyebrows, no 01/02/03 markers, no identical card
grids).

- **Palette** (CSS vars in `:root`): `--terracotta #c1492b` (brand), `--ember
  #f4a14e` (accent), `--dusk #2f4858` (secondary), `--ink #2b1a13` (text),
  `--bg #f5f3f0` (near-neutral off-white — deliberately NOT warm cream).
- **Type**: Young Serif (display headings) + Hanken Grotesk (body), loaded via
  `<link>` in `index.html`. Avoid the impeccable font ban list (Fraunces,
  Newsreader, Inter, Space Grotesk, etc.) when changing fonts.
- Hero is a drenched terracotta band with an inline SVG sunset scene.
- Motion only inside `@media (prefers-reduced-motion: no-preference)` — content
  is visible by default (never gate visibility on a reveal class).

## Conventions / notes

- Keep it framework-free and lightweight — the value here is a fast, simple site.
- Placeholder content to replace before going live: the
  `hello@campmatchkidssociety.org` mailto links in `src/main.js` and the footer
  note about replacing them.
- Keep the repo lean — local tooling config (`.claude/`, `.mcp.json*`) is
  git-ignored; don't commit secrets or experiment files.
