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

## Design system — playful kindergarten style (Kiddoz-inspired)

Hand-designed (the `impeccable` plugin is installed but intentionally NOT used to
drive design — the user asked to override it). Warm, joyful, kid-focused: cream
canvas inside a rounded `.frame`, floating pill nav, hand-drawn doodle stickers,
a scalloped hero photo, multicolour soft cards.

- **Brand**: name stays "Camp Match Kids Society". Logo is a teal backpack +
  orange map-pin (related to campmatch.ca). Logo file pending — see below.
- **Palette** (CSS vars in `:root`): `--cream #fdf6ec` (canvas), `--frame #e7dcc9`
  (outer matte), `--ink #2c2747` (text), `--pink #f43f8e` (primary CTA), plus
  multicolour accents `--green #2fae7a`, `--purple #8b5cf6`, `--blue #38b0e3`,
  `--yellow #f6b73c`, `--orange #e3793c`.
- **Type**: Fredoka (display) + Hanken Grotesk (body) + Caveat (script eyebrows/
  kickers), loaded via `<link>` in `index.html`.
- **Scalloped photo**: `.hero-photo img` uses a CSS `mask` recipe (linear body +
  two repeating radial-gradients) for the convex cloud-bump top/bottom edges.
  Tune bump size via the `--r` variable.
- **Doodles**: inline SVG stickers in `src/main.js` (`.doodle` elements),
  absolutely positioned, gentle `bob` float; hidden under 620px.
- **Placeholder data**: the `.stats` numbers (120+, 40+, 12, 100%) are
  placeholders — replace with real figures.
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
