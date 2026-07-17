import './style.css'
import { base, mail, eyebrow, btnPrimary, btnSecondary, navLinks, mobileMenu, siteFooter } from './shared.js'

document.querySelector('#app').innerHTML = `
  <header id="top" class="relative isolate overflow-hidden bg-cream text-ink">
    <img
      src="${base}hero-3.png"
      alt="A child peeking over balloons in a golden field at sunset"
      class="absolute inset-0 -z-10 h-full w-full object-cover object-[72%_38%] md:object-center"
      fetchpriority="high"
    />
    <!-- Warm cream scrim behind the copy only; fades out before the child so the photo stays vivid. -->
    <div class="absolute inset-0 -z-10 bg-gradient-to-t from-[#faf3e5]/95 from-0% via-[#faf3e5]/32 via-32% to-transparent to-60% md:hidden"></div>
    <div class="absolute inset-0 -z-10 hidden bg-gradient-to-r from-[#faf3e5]/94 from-0% via-[#faf3e5]/42 via-30% to-transparent to-60% md:block"></div>

    <div class="mx-auto flex min-h-dvh max-w-[1180px] flex-col px-5 md:px-12">
      <div class="flex items-center justify-between gap-4 py-5">
        <a href="${base}" class="flex items-center" aria-label="Camp Match Kids Society home">
          <img src="${base}logo-banner.svg" alt="Camp Match Kids Society" class="h-11 w-auto md:h-12" />
        </a>
        <nav class="hidden items-center gap-7 font-display text-sm font-bold text-ink/70 md:flex" aria-label="Primary">
          ${navLinks('home')}
        </nav>
        ${mobileMenu()}
      </div>

      <div class="flex flex-1 flex-col pb-8 pt-2 md:max-w-2xl md:justify-center md:py-16">
        <p class="hidden ${eyebrow} text-orange-deep md:mb-4 md:block">When cost is the only thing in the way</p>
        <h1 class="mt-auto text-[2rem] leading-[1.08] text-ink sm:text-4xl md:mt-0 md:text-5xl lg:text-[58px]">What if a kid is desperate to go to camp, but their family <span class="text-orange">can't afford&nbsp;it?</span></h1>
        <p class="mt-6 hidden max-w-prose text-lg text-ink/80 md:block">
          For too many families, cost puts camp out of reach. Camp Match Kids Society makes sure that's never the reason a kid misses out: we cover the fees, work with camps to open free and subsidized spaces, and bring communities together to fund them.
        </p>
        <div class="mt-7 md:mt-8">
          <div class="flex justify-center md:hidden">
            <a href="${base}mission/" class="${btnSecondary}">Our mission</a>
          </div>
          <div class="hidden flex-wrap gap-3 md:flex">
            <a href="${mail('Join the movement')}" class="${btnPrimary}">Join the movement</a>
            <a href="${base}mission/" class="${btnSecondary}">Our mission</a>
          </div>
        </div>
        <p class="mt-7 hidden max-w-prose text-sm text-ink/60 md:block">
          Camp Match Kids Society is incorporated as a BC nonprofit. We're working alongside <a href="https://campmatch.ca" target="_blank" rel="noopener" class="font-bold text-orange-deep underline">CampMatch.ca</a>
          and our founding partners to remove the barriers that keep kids from camp.
        </p>
      </div>
    </div>
  </header>

  ${siteFooter()}
`
