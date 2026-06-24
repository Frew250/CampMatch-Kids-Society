# CLAUDE.md

Guidance for Claude when working in this repo. **Read `docs/` first** for brand,
voice, and design decisions — it's the source of truth so we stop re-guessing.

## What this is

A single-page marketing/credibility site for **Camp Match Kids Society** — a BC
nonprofit (incorporating) that helps kids whose families can't afford it get to
summer camp. It is the charitable sibling of, but separate from, the for-profit
**CampMatch.ca**. Pre-launch; the site's job is to convey real traction and
capture interest (not take donations yet).

## Stack

- **Vite** (vanilla JS — page rendered as a template string in `src/main.js`).
- **Tailwind CSS v4** via `@tailwindcss/vite`. Brand tokens live in `src/style.css`
  under `@theme` (e.g. `bg-cream`, `text-teal`, `text-orange`, `font-sans`).
- Fonts: **Nunito** (shared with CampMatch.ca) via `<link>` in `index.html`.
- Deployed to **GitHub Pages** via `.github/workflows/deploy.yml` on push to `main`.

## Commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Production build → `dist/` | `npm run build` |
| Preview build | `npm run preview` |

Live URL: https://frew250.github.io/CampMatch-Kids-Society/ — the Vite `base` in
`vite.config.js` must match the repo name or assets 404 in production.

## Design & brand — READ `docs/` FIRST

- **[docs/brand-guidelines.md](docs/brand-guidelines.md)** — who we are, the two
  distinct entities, audience, voice/register (warm but grown-up & credible),
  dignity-first rules, legal guardrails.
- **[docs/design-system.md](docs/design-system.md)** — palette, type, components,
  photography, anti-patterns. (NOTE: its "agreed direction" describes earlier
  explorations; the current build is a clean light Tailwind one-pager — update this
  doc to match as the design settles.)
- **[docs/content-guide.md](docs/content-guide.md)** — approved copy, the honest
  "this is real" facts (NO invented stats), CTA wording, the footer legal line,
  words to avoid.

## Working notes

- Hand-design with own judgment; build in small, approved steps. The `impeccable`
  plugin was removed at the user's request — don't reinstall or reference it.
- Capture is `mailto:` for now (no backend). A real form needs a service like
  Formspree/Netlify — that's a later step.
- Verified Unsplash photo IDs (HTTP-checked; also backed up in the local, git-ignored
  `DO Not Delete/` folder): `1533222481259-ce20eda1e20b`, `1638202951770-2240942c7d1c`,
  `1517164850305-99a3e65bb47e`, `1472745942893-4b9f730c7668`, `1617347549597-f941ea222ff9`.
  Always HTTP-verify a new ID before using it — guessed IDs 404.
- Placeholders to replace before launch: the `hello@campmatchkidssociety.org` email
  and the stock photos (swap for real consented camp photos).
