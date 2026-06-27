import './style.css'
import { base, mail, eyebrow, btnPrimary, btnGhostDark, wrap, sectionY, navLinks, mobileMenu, ctaCard, siteFooter } from './shared.js'

document.querySelector('#app').innerHTML = `
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-display focus:font-bold focus:text-ink">Skip to content</a>
  <header id="top" class="relative isolate overflow-hidden bg-hero-dark text-white">
    <img
      src="${base}hero-3.png"
      alt="A child peeking over balloons in a golden field at sunset"
      class="absolute inset-0 -z-10 h-full w-full object-cover"
      fetchpriority="high"
    />
    <div class="absolute inset-0 -z-10 bg-gradient-to-r from-[#1a3a24]/90 from-25% via-[#1a3a24]/58 via-60% to-transparent"></div>
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-[#1a3a24]/28 via-transparent to-[#1a3a24]/42"></div>

    <div class="mx-auto flex min-h-screen max-w-[1180px] flex-col px-5 md:px-12">
      <div class="flex items-center justify-between gap-4 py-5">
        <a href="${base}" class="flex items-center" aria-label="Camp Match Kids Society home">
          <img src="${base}logo-banner.svg" alt="Camp Match Kids Society" class="h-11 w-auto md:h-12" />
        </a>
        <nav class="hidden items-center gap-7 font-display text-sm font-bold text-white/85 md:flex" aria-label="Primary">
          ${navLinks('home')}
        </nav>
        ${mobileMenu()}
      </div>

      <div class="flex max-w-2xl flex-1 flex-col justify-center py-10 md:py-16">
        <p class="mb-4 ${eyebrow} text-flame">When cost is the only thing in the way</p>
        <h1 class="text-4xl leading-[1.05] text-white md:text-5xl lg:text-[66px]">Every hopeful kid should get to go to <span class="text-orange">camp.</span></h1>
        <p class="mt-6 max-w-prose text-lg text-white/85">
          Camp Match Kids Society removes the cost barrier that keeps kids out of camp.
          We partner with camps to open free and subsidized spaces, and bring donors and
          communities together to fund them — so more kids in BC get the friendship,
          confidence, and fun of camp.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a href="${mail('Join the movement')}" class="${btnPrimary}">Join the movement</a>
          <a href="${base}mission/" class="${btnGhostDark}">Our mission</a>
        </div>
        <p class="mt-7 max-w-prose text-sm text-white/70">
          Camp Match Kids Society is being established as a BC nonprofit. While incorporation
          is completed, we're already working alongside <a href="https://campmatch.ca" target="_blank" rel="noopener" class="font-bold text-white underline">CampMatch.ca</a>
          and our founding partners to remove the barriers that keep kids from camp.
        </p>
      </div>
    </div>
  </header>

  <main id="main">
    <section class="bg-cream">
      <div class="${wrap} ${sectionY}">
        ${ctaCard({ label: 'Our mission', href: `${base}mission/` })}
        <p class="mx-auto mt-6 max-w-2xl text-center text-sm text-sand">
          Run a camp or want to help?
          <a href="${mail('I run a camp — Camp Match Kids Society')}" class="font-bold text-teal-deep underline">I run a camp</a> ·
          <a href="${mail('I want to help — Camp Match Kids Society')}" class="font-bold text-teal-deep underline">I want to help</a>
          · Tax-deductible giving opens once our charitable registration is complete.
        </p>
      </div>
    </section>
  </main>

  ${siteFooter()}
`
