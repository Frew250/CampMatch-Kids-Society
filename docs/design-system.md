# Design System — Camp Match Kids Society

The single source of truth for **how the site looks**. The CSS in `src/style.css`
implements these tokens via `:root` variables — this doc is the *why*, the CSS is the
*what*. Keep them in sync.

> Companion docs: [brand-guidelines.md](./brand-guidelines.md) (who/voice),
> [content-guide.md](./content-guide.md) (words).

---

## The agreed direction (locked)

Light, warm, clean, **photo-led**. A confident headline with **one orange accent word**.
A large, joyful **kids-at-camp** photo as the centrepiece. Teal + orange. A small
**script** touch for warmth. An honest **"this is real" strip** (facts, not invented
stats). Generous whitespace, zero clutter.

This came from dissecting references the client liked (bold, photo-led charity heroes
with real joyful kids) and disliked (see anti-patterns). **Build to this; don't
re-litigate the style each session.**

## Colour

Teal is the anchor; orange is the accent, used **sparingly** (CTAs + one accent word).

| Token | Hex | Use |
|-------|-----|-----|
| `--teal` | `#2c8a80` | brand anchor, headings accent, icons |
| `--teal-deep` | `#1f6b63` | hovers, deep teal text |
| `--teal-ink` | `#14322e` | headings / darkest text |
| `--orange` | `#e3793c` | primary CTA, the one accent word |
| `--orange-deep` | `#c8632b` | CTA hover |
| `--ink` | `#1c2b29` | body text |
| `--muted` | `#5b6b68` | secondary text (keep ≥4.5:1 on bg) |
| `--bg` | `#fcfaf6` | warm off-white canvas (LIGHT, not dark) |
| `--surface` | `#eef5f3` | soft teal-tint alt sections / strips |
| `--line` | `#e6ece9` | hairline borders |

Colours come straight from the logo (teal + orange). Light warm base — **not** a dark
hero (client chose light), and **not** heavy cream/cartoon.

## Typography

- **Headings/UI:** `Hanken Grotesk` — use heavy weights (700–800) for confident,
  grown-up display. Clean and modern; restraint here = credibility.
- **Body:** `Hanken Grotesk` 400–500.
- **Script accent only:** `Caveat` 600–700 — small warm eyebrows/kickers ONLY, never
  body or headlines.
- Loaded via `<link>` in `index.html`. Scale uses fluid `clamp()`; h1 ≈
  `clamp(2.4rem, 5vw, 3.8rem)`.

## Spacing, radius, shadow

- Container max-width ~1140px; section padding fluid `clamp(56px, 8vw, 104px)`.
- Radius: `--radius 16px`, `--radius-lg 26px`, `--radius-xl 40px` (photos).
- Shadows soft and warm-tinted, never harsh black.
- **Generous whitespace** is a feature, not waste — it reads as calm/credible.

## Photography

- Real, **joyful kids at camp** (parachutes, canoes, campfires, outdoors). Warm light.
- **Never** poverty/savior imagery, and **never** generic stock (landscapes, handshakes).
- Launch uses **verified** Unsplash IDs (HTTP-checked): `1606092195730-5d7b9af1efc5`
  (parachute), `1638202951770-2240942c7d1c` (hammock), `1517164850305-99a3e65bb47e`
  (tug-of-war). **HTTP-verify any new ID before use** — guessed IDs 404.
- Swap for real consented camp photos when available (biggest lever for "real").

## Motion

- Subtle only: gentle fade/translate-up on load. Respect
  `@media (prefers-reduced-motion)`. No spinning rings, no gimmicks.
- Content visible by default — never gate visibility on a reveal class.

## Components

- **Buttons:** pill, weight 700. Primary = orange fill / white text. Secondary = teal
  outline on white.
- **Photo frames:** large rounded rectangles, soft shadow; an offset tint block behind
  is OK as a quiet accent.
- **"This is real" strip:** 3 honest facts with small teal icons — replaces a stats bar.
- **Logo:** `public/logo.png` (full lockup). Header ~48–52px tall. A dedicated square
  favicon is still TODO (lockup too detailed at 16px; keep `favicon.svg` for now).

## Anti-patterns — do NOT do these (from client's disliked refs)

- ❌ Cluttered layouts, sidebars, carousels.
- ❌ Generic imagery (resort/landscape/handshake) instead of real kid faces.
- ❌ Walls of body text; weak hierarchy; dated/DIY execution.
- ❌ Cartoon/kindergarten styling (doodles, scalloped clouds) — wrong register.
- ❌ Shouty ALL-CAPS disaster-appeal headlines; savior/poverty framing.
- ❌ Invented stats or fake trust badges.
