// Shared building blocks used by both the home page (main.js) and the FAQ page (faq.js)
// so the footer and FAQ content never drift between pages.

export const base = import.meta.env.BASE_URL
export const mail = (s) => `mailto:hello@campmatchkidssociety.ca?subject=${encodeURIComponent(s)}`

export const I_CHEV = `<svg aria-hidden="true" class="chev shrink-0" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`

export const FAQ_ITEMS = [
  [
    'Who is Camp Match Kids Society for?',
    "Any family for whom the cost of summer camp is a barrier. We keep it an open door — you come to us about your kid's summer, never to prove you're in need.",
  ],
  [
    'How do families take part?',
    "We're building our first summer now. Join the list and we'll reach out as spaces open — then we match your child to a partner camp and cover the cost.",
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
    <div class="mx-auto max-w-[1180px] px-6 py-12 md:px-12">
      <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
        <a href="${base}" class="flex items-center" aria-label="Camp Match Kids Society home">
          <img src="${base}logo-banner.svg" alt="Camp Match Kids Society" class="h-10 w-auto" />
        </a>
        <nav class="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 font-display text-sm font-bold text-mist" aria-label="Footer">
          <a href="${base}#what" class="transition hover:text-white">What we do</a>
          <a href="${base}#need" class="transition hover:text-white">The need</a>
          <a href="${base}#how" class="transition hover:text-white">How it works</a>
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
