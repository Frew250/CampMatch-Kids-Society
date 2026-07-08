import './style.css'
import { base, mail, eyebrow, btnPrimary, btnGhostDark, navLinks, mobileMenu, siteFooter } from './shared.js'

document.querySelector('#app').innerHTML = `
  <header id="top" class="relative isolate overflow-hidden bg-hero-dark text-white">
    <img
      src="${base}hero-3.png"
      alt="A child peeking over balloons in a golden field at sunset"
      class="absolute inset-0 -z-10 h-full w-full object-cover object-[72%_38%] md:object-center"
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

      <div class="flex flex-1 flex-col pb-6 pt-2 md:max-w-2xl md:justify-center md:py-16">
        <div class="mt-auto rounded-3xl border border-white/10 bg-ink/50 px-6 py-7 shadow-2xl backdrop-blur-sm md:mt-0 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none">
          <p class="hidden ${eyebrow} text-flame md:mb-4 md:block">When cost is the only thing in the way</p>
          <h1 class="text-center text-[2rem] leading-[1.08] text-white sm:text-4xl md:text-left md:text-5xl lg:text-[58px]">What if a kid is desperate for camp, <br />but their family <br /><span class="text-orange">can't afford&nbsp;it?</span></h1>
          <p class="mt-6 hidden max-w-prose text-lg text-white/85 md:block">
            For too many families, cost puts camp out of reach. Camp Match Kids Society makes sure that's never the reason a kid misses out: we cover the fees, work with camps to open free and subsidized spaces, and bring communities together to fund them.
          </p>
          <div class="mt-7 flex flex-wrap justify-center gap-3 md:mt-8 md:justify-start">
            <a href="${mail('Join the movement')}" class="${btnPrimary}">Join the movement</a>
            <span class="hidden md:inline-block"><a href="${base}mission/" class="${btnGhostDark}">Our mission</a></span>
          </div>
          <p class="mt-7 hidden max-w-prose text-sm text-white/70 md:block">
            Camp Match Kids Society is being established as a BC nonprofit. While incorporation
            is completed, we're already working alongside <a href="https://campmatch.ca" target="_blank" rel="noopener" class="font-bold text-white underline">CampMatch.ca</a>
            and our founding partners to remove the barriers that keep kids from camp.
          </p>
        </div>
      </div>
    </div>
  </header>

  ${siteFooter()}
`
