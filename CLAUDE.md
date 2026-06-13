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

## Design & brand — READ `docs/` FIRST (source of truth)

Before writing copy or designing anything, read the committed guideline docs. They
exist so we **stop guessing the tone/style each session**:

- **[docs/brand-guidelines.md](docs/brand-guidelines.md)** — who we are, the two
  entities, audience, voice/register, dignity-first rules, legal guardrails.
- **[docs/design-system.md](docs/design-system.md)** — palette tokens (teal/orange,
  light warm base), typography (Hanken Grotesk + Caveat), spacing, components,
  photography rules, motion, and the **anti-patterns to avoid**.
- **[docs/content-guide.md](docs/content-guide.md)** — approved one-liners, headline
  options, the honest "this is real" facts, CTA wording, the footer legal line.

Quick pointers (full detail in the docs):
- Hand-design with own judgment; the `impeccable` plugin is installed but the user
  asked NOT to let it drive design here.
- Direction is LOCKED: light/warm, photo-led, teal + orange, one orange accent word,
  joyful camp photography, honest facts (no invented stats), "Keep me posted" capture
  (no donate ask yet). Don't re-litigate the style.
- Rejected directions (don't reach for these): cream "KIDS-style", dark GFC-style with
  animated rings, playful Kiddoz cartoon (doodles + scalloped photo).
- Logo at `public/logo.png` (full lockup). Square favicon still TODO; keep `favicon.svg`.
- Verified Unsplash photos (HTTP-checked): `1606092195730-5d7b9af1efc5` (parachute),
  `1638202951770-2240942c7d1c` (hammock), `1517164850305-99a3e65bb47e` (tug-of-war).
  Always HTTP-verify a new ID before use — guessed IDs 404.
- Motion only inside `@media (prefers-reduced-motion: no-preference)`; content visible
  by default (never gate visibility on a reveal class).

## Conventions / notes

- Keep it framework-free and lightweight — the value here is a fast, simple site.
- Placeholder content to replace before going live: the
  `hello@campmatchkidssociety.org` mailto links in `src/main.js` and the footer
  note about replacing them.
- Keep the repo lean — local tooling config (`.claude/`, `.mcp.json*`) is
  git-ignored; don't commit secrets or experiment files.
