// Shared building blocks for every page (home, mission, get involved, FAQ),
// so header/footer/CTA/FAQ never drift between pages.

export const base = import.meta.env.BASE_URL
export const mail = (s) => `mailto:hello@campmatchkidssociety.ca?subject=${encodeURIComponent(s)}`

// ---- Icons ---------------------------------------------------------------
export const svg = (p) =>
  `<svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`
export const svg30 = (p) =>
  `<svg aria-hidden="true" viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`
export const I_CHECK = svg('<path d="M20 6 9 17l-5-5"/>')
export const I_MENU = svg('<path d="M4 6h16M4 12h16M4 18h16"/>')
export const I_HEART = svg('<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>')
export const I_TENT = svg('<path d="M3 20h18M12 4 4 20M12 4l8 16M12 9l-6 11M12 9l6 11"/>')
export const I_DOOR = svg('<path d="M14 3H5a2 2 0 0 0-2 2v16h11V3ZM14 3l5 2v16h-5M10 12h.01"/>')
export const I_USERS = svg('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>')
export const I_GIFT = svg('<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8M16.5 8a2.5 2.5 0 0 0 0-5C13 3 12 8 12 8"/>')
export const I_SHARE = svg('<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5 8.6 10.5"/>')
export const I_BUILDING = svg30('<path d="M3 21h18M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M10 8h.01M14 8h.01M10 12h.01M14 12h.01M10 16h3"/>')
export const I_TENT_W = svg30('<path d="M3 20h18M12 4 4 20M12 4l8 16M12 9l-6 11M12 9l6 11"/>')
export const I_HEART_W = svg30('<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>')
export const I_CHEV = `<svg aria-hidden="true" class="chev shrink-0" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`

// ---- Style atoms ---------------------------------------------------------
export const wrap = 'mx-auto max-w-[1180px] px-5 md:px-12'
export const sectionY = 'py-12 md:py-[104px]'
export const eyebrow = 'font-display text-[14px] font-extrabold uppercase tracking-[0.18em]'
export const h2cls = 'text-4xl leading-[1.08] md:text-[46px]'
export const btnPrimary =
  'inline-flex items-center justify-center rounded-full bg-orange px-[34px] py-[17px] font-display font-extrabold text-white shadow-lg shadow-orange/30 transition hover:-translate-y-0.5 hover:bg-orange-deep'
export const btnGhostDark =
  'inline-flex items-center justify-center rounded-full border-[1.5px] border-white/45 px-[34px] py-[17px] font-display font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/10'
export const btnGhostLight =
  'inline-flex items-center justify-center rounded-full border-[1.5px] border-ink/20 px-[34px] py-[17px] font-display font-extrabold text-ink transition hover:-translate-y-0.5 hover:bg-ink/5'

const skipLink = `<a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-display focus:font-bold focus:text-ink">Skip to content</a>`

// Primary nav, shared by the home hero and the sub-page header.
const NAV = [
  ['home', 'Home', `${base}`],
  ['mission', 'Our mission', `${base}mission/`],
  ['involved', 'Get involved', `${base}involved/`],
  ['faq', 'FAQ', `${base}faq/`],
]

// Desktop nav markup — all plain text links so every page reads as a navigable option.
export function navLinks(active = '') {
  const cur = (k) => (active === k ? ' aria-current="page"' : '')
  return NAV.map(
    ([k, label, href]) =>
      `<a href="${href}" class="transition hover:text-white ${active === k ? 'text-white' : ''}"${cur(k)}>${label}</a>`
  ).join('\n          ')
}

// Mobile dropdown menu markup.
export function mobileMenu() {
  const item = (href, label) => `<a href="${href}" class="block rounded-lg px-4 py-2.5 transition hover:bg-white/10">${label}</a>`
  return `
    <details class="relative md:hidden">
      <summary class="grid h-11 w-11 cursor-pointer place-items-center rounded-full border-[1.5px] border-white/45 text-white" aria-label="Open menu">${I_MENU}</summary>
      <div class="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-56 rounded-2xl border border-white/15 bg-[#0f2e27]/95 p-2 font-display text-sm font-bold text-white shadow-2xl backdrop-blur">
        ${item(`${base}`, 'Home')}
        ${item(`${base}mission/`, 'Our mission')}
        ${item(`${base}involved/`, 'Get involved')}
        ${item(`${base}faq/`, 'FAQ')}
      </div>
    </details>`
}

// Compact dark header for sub-pages (mission, involved, faq).
export function siteHeader(active = '') {
  return `${skipLink}
  <header class="bg-ink text-white">
    <div class="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-5 md:px-12">
      <a href="${base}" class="flex items-center" aria-label="Camp Match Kids Society home">
        <img src="${base}logo-banner.svg" alt="Camp Match Kids Society" class="h-11 w-auto md:h-12" />
      </a>
      <nav class="hidden items-center gap-7 font-display text-sm font-bold text-white/85 md:flex" aria-label="Primary">
          ${navLinks(active)}
      </nav>
      ${mobileMenu()}
    </div>
  </header>`
}

// The shared "first season" CTA card (teal gradient + faint tent/sun motif).
export function ctaCard(secondary) {
  const sec = secondary
    ? `<a href="${secondary.href}" class="${btnGhostDark}">${secondary.label}</a>`
    : ''
  return `
  <div class="relative isolate overflow-hidden rounded-[28px] bg-[linear-gradient(120deg,#11463a,#1c7a63)] px-6 py-12 text-center text-white md:px-14 md:py-20">
    <div class="pointer-events-none absolute -left-16 -top-16 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(226,98,42,0.28),transparent_70%)]"></div>
    <div class="pointer-events-none absolute -bottom-16 -right-10 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_70%)]"></div>
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" class="pointer-events-none absolute -bottom-12 -left-10 -z-10 h-60 w-60 text-white/[0.07]"><path d="M3 20h18M12 4 4 20M12 4l8 16M12 9l-6 11M12 9l6 11"/></svg>
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" class="pointer-events-none absolute -right-8 -top-12 -z-10 h-48 w-48 text-white/[0.07]"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
    <h2 class="text-3xl text-white md:text-[46px]">Be part of the first season</h2>
    <p class="mx-auto mt-4 max-w-xl text-lg text-white/85">Parents, camps, and early supporters can all help shape it. Join the movement and we'll keep you posted.</p>
    <div class="mt-8 flex flex-wrap justify-center gap-3">
      <a href="${mail('Join the movement')}" class="${btnPrimary}">Join the movement</a>
      ${sec}
    </div>
  </div>`
}

// ---- FAQ -----------------------------------------------------------------
export const FAQ_ITEMS = [
  [
    'Who is Camp Match Kids Society for?',
    "Any family for whom the cost of camp is a barrier. We keep it an open door — you come to us about getting your kid to camp, never to prove you're in need.",
  ],
  [
    'How do families take part?',
    "We're building our first camps now. Join the list and we'll reach out as spaces open — then we match your child to a partner camp and cover the cost.",
  ],
  [
    'How are camps involved?',
    "Partner camps offer free and subsidized spaces. If you run a camp and want to open spots for more kids, we'd love to talk.",
  ],
  [
    'How can businesses and individuals help?',
    'Supporters help fund camp spaces and remove the cost barrier. Right now the best way to help is to join the movement — donation options are coming soon.',
  ],
  [
    'Is my donation tax-deductible?',
    'Not yet. Tax-deductible receipts will open once our charitable registration is complete. Until then, we are gathering supporters who want to be first.',
  ],
  [
    'How is this related to CampMatch.ca?',
    "We are the charitable sibling of CampMatch.ca — a separate organization, built on the same belief that cost shouldn't keep a kid from camp.",
  ],
]

export function faqAccordion() {
  return `
  <div class="mx-auto max-w-[820px] space-y-3">
    ${FAQ_ITEMS.map(
      ([q, a]) => `
    <details class="group rounded-2xl bg-white px-6 py-5 shadow-sm">
      <summary class="flex items-center justify-between gap-4 font-display text-[18.5px] font-semibold text-ink">
        <span>${q}</span>
        <span class="text-orange">${I_CHEV}</span>
      </summary>
      <p class="mt-3 text-muted">${a}</p>
    </details>`
    ).join('')}
  </div>`
}

export function siteFooter() {
  return `
  <footer class="bg-ink text-white">
    <div class="mx-auto max-w-[1180px] px-5 py-12 md:px-12">
      <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
        <a href="${base}" class="flex items-center" aria-label="Camp Match Kids Society home">
          <img src="${base}logo-banner.svg" alt="Camp Match Kids Society" class="h-10 w-auto" />
        </a>
        <nav class="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 font-display text-sm font-bold text-mist" aria-label="Footer">
          <a href="${base}" class="transition hover:text-white">Home</a>
          <a href="${base}mission/" class="transition hover:text-white">Our mission</a>
          <a href="${base}involved/" class="transition hover:text-white">Get involved</a>
          <a href="${base}faq/" class="transition hover:text-white">FAQ</a>
        </nav>
      </div>
      <div class="mt-8 border-t border-white/10 pt-6 text-center text-sm text-mist md:text-left">
        <p>
          © 2026 Camp Match Kids Society — a BC nonprofit in formation. Working alongside
          <a href="https://campmatch.ca" target="_blank" rel="noopener" class="font-bold text-white underline">CampMatch.ca</a>
          to remove the barriers that keep kids from camp.
        </p>
      </div>
    </div>
  </footer>`
}
