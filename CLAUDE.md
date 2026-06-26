# CLAUDE.md

Guidance for Claude when working in this repo. **Read `docs/` first** for brand,
voice, and design decisions — it's the source of truth so we stop re-guessing.

## How to talk to me

I love tech but I'm **not a developer** — I have real gaps in my understanding,
so talk in plain human language, not jargon.

- Explain things like you're talking to a smart non-coder. When you must use a
  technical term, define it in a few words the first time.
- Don't assume I know why a step matters — say what it does and why, briefly.
- When there's a decision to make, give me the plain-English tradeoff and a
  recommendation, not just options.
- It's fine to flag when I'm about to do something risky or based on a
  misunderstanding — I'd rather know.
- Keep it concise and concrete. Skip the wall of caveats.

## What this is

A single-page marketing/credibility site for **CampMatch Kids Society** — a BC
nonprofit (incorporating) that helps kids whose families can't afford it get to
summer camp. It is the charitable sibling of, but separate from, the for-profit
**CampMatch.ca**. Pre-launch; the site's job is to convey real traction and
capture interest (not take donations yet).

### Entity guardrails (highest-risk — get this right)

- The two entities are **separate**: the for-profit **CampMatch.ca** and the
  nonprofit **CampMatch Kids Society**. Never blur them or imply the Society's
  traction belongs to the for-profit (or vice versa).
- The Society is **incorporating, not yet a registered charity**. Never imply
  charitable-registration status, never promise or reference tax receipts, and
  don't use "donate"/donation-capture language — the site captures interest only.
- When in doubt on entity, legal, or donation wording, stop and ask. See
  **[docs/brand-guidelines.md](docs/brand-guidelines.md)** for the full rules.

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
  photography, anti-patterns. (See the stale-direction note at the top of that
  file; the current build is a clean light Tailwind one-pager.)
- **[docs/content-guide.md](docs/content-guide.md)** — approved copy, the honest
  "this is real" facts (NO invented stats), CTA wording, the footer legal line,
  words to avoid.

## Workflow & collaboration

### Working with Codex

- **Codex is installed in this environment.** Use it to get the best possible
  coding and design outcomes — Claude decides per-task which tool fits, reaching
  for Codex on heavier implementation work and handling design/copy/review
  directly where that's the better call.

### Commit & push policy

- **Don't ask permission to push small things.** Copy, content, and style tweaks:
  commit and push automatically.
- **Wait for an explicit go-ahead** before pushing **new sections or layout
  changes** (and any large feature or large edit).
- **Never auto-push, regardless of size**, anything that touches:
  - legal / entity / donation copy, or
  - the `docs/` source-of-truth files.

  These always require explicit sign-off.
- **Commit messages:** plain short imperative — e.g. "Add hero section",
  "Fix footer spacing".
- **After any auto-commit/push, post a brief summary** of what was pushed.

## Working notes

- Hand-design with own judgment; build in small, approved steps. The `impeccable`
  plugin was removed at the user's request — don't reinstall or reference it.
- Capture is `mailto:` for now (no backend). A real form needs a service like
  Formspree/Netlify — that's a later step.
- **Photos:** verified Unsplash IDs are backed up in the local, git-ignored
  `DO Not Delete/` folder — treat that as the source. Always HTTP-verify any new
  ID before using it; guessed IDs 404.
- Placeholders to replace before launch: the `hello@campmatchkidssociety.org`
  email and the stock photos (swap for real consented camp photos).