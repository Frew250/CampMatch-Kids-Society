import './style.css'
import { base, mail, siteFooter, faqAccordion } from './shared.js'

const I_MENU = `<svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`

const navLink = (href, label) => `<a href="${href}" class="transition hover:text-white">${label}</a>`

document.querySelector('#app').innerHTML = `
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-display focus:font-bold focus:text-ink">Skip to content</a>

  <header class="bg-ink text-white">
    <div class="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-6 py-5 md:px-12">
      <a href="${base}" class="flex items-center" aria-label="Camp Match Kids Society home">
        <img src="${base}logo-banner.svg" alt="Camp Match Kids Society" class="h-11 w-auto md:h-12" />
      </a>
      <nav class="hidden items-center gap-7 font-display text-sm font-bold text-white/85 md:flex" aria-label="Primary">
        ${navLink(`${base}#what`, 'What we do')}
        ${navLink(`${base}#need`, 'The need')}
        ${navLink(`${base}#how`, 'How it works')}
        ${navLink(`${base}#stories`, 'Why it matters')}
        <span class="text-white" aria-current="page">FAQ</span>
        <a href="${base}#involved" class="rounded-full border-[1.5px] border-white/45 px-5 py-2.5 font-extrabold text-white transition hover:bg-white/10">Get involved</a>
      </nav>

      <details class="relative md:hidden">
        <summary class="grid h-11 w-11 cursor-pointer place-items-center rounded-full border-[1.5px] border-white/45 text-white" aria-label="Open menu">${I_MENU}</summary>
        <div class="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-56 rounded-2xl border border-white/15 bg-[#0f2e27]/95 p-2 font-display text-sm font-bold text-white shadow-2xl backdrop-blur">
          <a href="${base}#what" class="block rounded-lg px-4 py-2.5 transition hover:bg-white/10">What we do</a>
          <a href="${base}#need" class="block rounded-lg px-4 py-2.5 transition hover:bg-white/10">The need</a>
          <a href="${base}#how" class="block rounded-lg px-4 py-2.5 transition hover:bg-white/10">How it works</a>
          <a href="${base}#stories" class="block rounded-lg px-4 py-2.5 transition hover:bg-white/10">Why it matters</a>
          <a href="${base}faq/" class="block rounded-lg bg-white/10 px-4 py-2.5">FAQ</a>
          <a href="${base}#involved" class="mt-1 block rounded-lg bg-orange px-4 py-2.5 text-center text-white">Get involved</a>
        </div>
      </details>
    </div>
  </header>

  <main id="main">
    <section class="bg-sage">
      <div class="mx-auto max-w-[1180px] px-6 py-16 md:px-12 md:py-[104px]">
        <div class="mx-auto max-w-[760px] text-center">
          <p class="font-display text-[14px] font-extrabold uppercase tracking-[0.18em] text-eyebrow">FAQ</p>
          <h1 class="mt-3 text-4xl leading-[1.08] text-ink md:text-[46px]">Questions, answered</h1>
          <p class="mt-4 text-lg text-muted">Everything you might be wondering about Camp Match Kids Society.</p>
        </div>

        <div class="mt-12">${faqAccordion()}</div>

        <div class="mx-auto mt-12 max-w-[820px] rounded-[22px] bg-white p-7 text-center shadow-sm md:p-9">
          <h2 class="text-2xl text-ink">Still have a question?</h2>
          <p class="mx-auto mt-2 max-w-md text-muted">We'd love to hear from you — whether you run a camp, want to help, or just want to learn more.</p>
          <div class="mt-6 flex flex-wrap justify-center gap-3">
            <a href="${mail('Hello from your website')}" class="inline-flex items-center justify-center rounded-full bg-orange px-[34px] py-[17px] font-display font-extrabold text-white shadow-lg shadow-orange/30 transition hover:-translate-y-0.5 hover:bg-orange-deep">Get in touch</a>
            <a href="${base}#involved" class="inline-flex items-center justify-center rounded-full border-[1.5px] border-ink/20 px-[34px] py-[17px] font-display font-extrabold text-ink transition hover:-translate-y-0.5 hover:bg-ink/5">Join the movement</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  ${siteFooter()}
`
