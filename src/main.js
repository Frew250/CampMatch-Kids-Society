import './style.css'
import { base, mail, siteFooter } from './shared.js'

const svg = (p) =>
  `<svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`
const I_CHECK = svg('<path d="M20 6 9 17l-5-5"/>')
const I_MENU = svg('<path d="M4 6h16M4 12h16M4 18h16"/>')
const I_HEART = svg('<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>')
const I_TENT = svg('<path d="M3 20h18M12 4 4 20M12 4l8 16M12 9l-6 11M12 9l6 11"/>')
const I_DOOR = svg('<path d="M14 3H5a2 2 0 0 0-2 2v16h11V3ZM14 3l5 2v16h-5M10 12h.01"/>')
const svg30 = (p) =>
  `<svg aria-hidden="true" viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`
const I_BUILDING = svg30('<path d="M3 21h18M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M10 8h.01M14 8h.01M10 12h.01M14 12h.01M10 16h3"/>')
const I_TENT_W = svg30('<path d="M3 20h18M12 4 4 20M12 4l8 16M12 9l-6 11M12 9l6 11"/>')
const I_HEART_W = svg30('<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>')

// Shared atoms
const wrap = 'mx-auto max-w-[1180px] px-5 md:px-12'
const sectionY = 'py-12 md:py-[104px]'
const eyebrow = 'font-display text-[14px] font-extrabold uppercase tracking-[0.18em]'
const h2cls = 'text-4xl leading-[1.08] md:text-[46px]'
const btnPrimary =
  'inline-flex items-center justify-center rounded-full bg-orange px-[34px] py-[17px] font-display font-extrabold text-white shadow-lg shadow-orange/30 transition hover:-translate-y-0.5 hover:bg-orange-deep'
const btnGhostDark =
  'inline-flex items-center justify-center rounded-full border-[1.5px] border-white/45 px-[34px] py-[17px] font-display font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/10'
const needFigure = (extra) =>
  `<figure class="relative ${extra}">
    <img src="${base}kids-parachute.jpg" alt="Kids playing a parachute game together in a field at summer camp" loading="lazy" class="aspect-[4/3] w-full rounded-[24px] object-cover shadow-[0_34px_70px_-34px_rgba(0,0,0,0.7)] ring-1 ring-white/15" />
    <span class="pointer-events-none absolute inset-0 rounded-[24px] bg-gradient-to-t from-ink/25 via-transparent to-orange/10"></span>
  </figure>`

document.querySelector('#app').innerHTML = `
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-display focus:font-bold focus:text-ink">Skip to content</a>
  <header id="top" class="relative isolate overflow-hidden bg-hero-dark text-white">
    <img
      src="${base}hero-3.png"
      alt="A child peeking over balloons in a golden field at sunset"
      class="absolute inset-0 -z-10 h-full w-full object-cover"
      fetchpriority="high"
    />
    <!-- Warm left-to-right gradient: dark enough across the text column, then clears to full
         natural colour on the right so the kids, grass and sky stay bright and alive. -->
    <div class="absolute inset-0 -z-10 bg-gradient-to-r from-[#1a3a24]/90 from-25% via-[#1a3a24]/58 via-60% to-transparent"></div>
    <!-- Gentle, warm top & bottom tint so the nav and lower copy stay legible. -->
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-[#1a3a24]/28 via-transparent to-[#1a3a24]/42"></div>

    <div class="mx-auto flex min-h-screen max-w-[1180px] flex-col px-5 md:px-12">
      <div class="flex items-center justify-between gap-4 py-5">
        <a href="#top" class="flex items-center" aria-label="Camp Match Kids Society home">
          <img src="${base}logo-banner.svg" alt="Camp Match Kids Society" class="h-11 w-auto md:h-12" />
        </a>
        <nav class="hidden items-center gap-7 font-display text-sm font-bold text-white/85 md:flex" aria-label="Primary">
          <a href="#what" class="transition hover:text-white">What we do</a>
          <a href="#need" class="transition hover:text-white">The need</a>
          <a href="#how" class="transition hover:text-white">How it works</a>
          <a href="#stories" class="transition hover:text-white">Why it matters</a>
          <a href="${base}faq/" class="transition hover:text-white">FAQ</a>
          <a href="#involved" class="rounded-full border-[1.5px] border-white/45 px-5 py-2.5 font-extrabold text-white transition hover:bg-white/10">Get involved</a>
        </nav>

        <details class="relative md:hidden">
          <summary class="grid h-11 w-11 cursor-pointer place-items-center rounded-full border-[1.5px] border-white/45 text-white" aria-label="Open menu">${I_MENU}</summary>
          <div class="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-56 rounded-2xl border border-white/15 bg-[#0f2e27]/95 p-2 font-display text-sm font-bold text-white shadow-2xl backdrop-blur">
            <a href="#what" class="block rounded-lg px-4 py-2.5 transition hover:bg-white/10">What we do</a>
            <a href="#need" class="block rounded-lg px-4 py-2.5 transition hover:bg-white/10">The need</a>
            <a href="#how" class="block rounded-lg px-4 py-2.5 transition hover:bg-white/10">How it works</a>
            <a href="#stories" class="block rounded-lg px-4 py-2.5 transition hover:bg-white/10">Why it matters</a>
            <a href="${base}faq/" class="block rounded-lg px-4 py-2.5 transition hover:bg-white/10">FAQ</a>
            <a href="#involved" class="mt-1 block rounded-lg bg-orange px-4 py-2.5 text-center text-white">Get involved</a>
          </div>
        </details>
      </div>

      <div class="flex max-w-2xl flex-1 flex-col justify-center py-10 md:py-16">
        <p class="mb-4 ${eyebrow} text-flame">When cost is the only thing in the way</p>
        <h1 class="text-4xl leading-[1.05] text-white md:text-5xl lg:text-[66px]">Cost shouldn't keep a kid from <span class="text-orange">summer camp.</span></h1>
        <p class="mt-6 max-w-prose text-lg text-white/85">
          Camp Match Kids Society removes the cost barrier that keeps kids out of summer camp.
          We partner with camps to open free and subsidized spaces, and bring donors and
          communities together to fund them — so more kids in BC get a summer of friendship,
          confidence, and fun.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a href="${mail('Join the movement')}" class="${btnPrimary}">Join the movement</a>
          <a href="#how" class="${btnGhostDark}">See how it works</a>
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
    <section id="status" class="bg-sage">
      <div class="mx-auto max-w-[1180px] px-5 pb-14 pt-12 md:px-12 md:pb-[84px] md:pt-[76px]">
        <div class="mx-auto max-w-[760px] text-center">
          <p class="${eyebrow} text-eyebrow">Where we are now</p>
          <h2 class="mt-4 ${h2cls} text-ink">New — but not starting from zero</h2>
          <p class="mt-4 text-[19px] text-muted">The foundation of a real organization is already in place.</p>
        </div>
        <div class="relative isolate mt-12 md:mt-[58px]">
          <div class="grid gap-7 md:grid-cols-3 md:gap-[30px]">
            ${[
              [I_BUILDING, '01', 'Board established', 'Our founding directors are in place, and BC nonprofit incorporation is underway.'],
              [I_TENT_W, '02', 'Camp partners', 'We are building a network of camps ready to offer free and subsidized spaces.'],
              [I_HEART_W, '03', 'Community behind us', 'Businesses, families, and supporters are already stepping up to help.'],
            ]
              .map(
                ([ic, n, t, p]) => `
            <div class="group relative z-10 mt-[34px] flex flex-col items-center rounded-[18px] border border-[#e2e9e4] bg-white px-6 pb-[38px] pt-[54px] text-center transition duration-[250ms] ease-out hover:-translate-y-1.5 hover:border-[rgba(226,98,42,0.4)] hover:shadow-[0_22px_46px_-22px_rgba(15,46,39,0.34)]">
              <span class="absolute left-1/2 top-0 grid h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[5px] border-sage bg-orange text-white shadow-[0_10px_24px_-6px_rgba(226,98,42,0.55)]">${ic}</span>
              <span class="font-display text-sm font-extrabold tracking-wider text-orange">${n}</span>
              <h3 class="mt-2 text-[23px] font-bold leading-tight text-ink">${t}</h3>
              <p class="mx-auto mt-3 max-w-[230px] text-[16px] leading-[1.6] text-muted">${p}</p>
            </div>`
              )
              .join('')}
          </div>
        </div>
      </div>
    </section>

    <section id="what" class="bg-cream">
      <div class="${wrap} ${sectionY}">
        <div class="mx-auto max-w-[760px] text-center">
          <p class="${eyebrow} text-eyebrow">What we do</p>
          <h2 class="mt-3 ${h2cls} text-ink">We make camp reachable</h2>
          <p class="mt-4 text-lg text-sand">Cost should not be the thing that keeps a kid from camp. We work with families and camps to make the right summer possible — and we keep it kind.</p>
        </div>
        <div class="mt-10 rounded-[28px] bg-white p-4 shadow-[0_40px_80px_-40px_rgba(15,46,39,0.28)] sm:p-6 md:mt-12 md:p-[30px]">
          <div class="grid gap-5 md:grid-cols-3 md:gap-6">
            ${[
              [I_HEART, '01', 'Cover the fees', "We raise funds to pay camp fees families can't, so cost stops being the reason a kid stays home."],
              [I_TENT, '02', 'Open up spots', 'We work with camps to create free and discounted places — more room for more kids, every summer.'],
              [I_DOOR, '03', 'Keep it kind', "Families come to us about their kid's summer — never to prove they're in need. An open door, not an application."],
            ]
              .map(
                ([ic, n, t, p]) => `
            <article class="group relative overflow-hidden rounded-2xl bg-[#faf6ec] p-6 transition duration-[250ms] ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_46px_-22px_rgba(15,46,39,0.3)] md:p-7">
              <span class="pointer-events-none absolute right-4 top-1 font-display text-6xl font-extrabold text-ink/[0.06]">${n}</span>
              <span class="grid h-14 w-14 place-items-center rounded-2xl bg-[#dde8e1] text-teal-deep">${ic}</span>
              <h3 class="mt-5 text-xl text-ink">${t}</h3>
              <p class="mt-2 text-sand">${p}</p>
              <span class="mt-5 block h-1 w-8 rounded-full bg-orange transition-all duration-300 group-hover:w-16"></span>
            </article>`
              )
              .join('')}
          </div>
        </div>
      </div>
    </section>

    <section id="need" class="relative isolate overflow-hidden bg-ink text-white">
      <div class="pointer-events-none absolute -right-20 -top-20 -z-10 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(226,98,42,0.22),transparent_70%)]"></div>
      <div class="${wrap} ${sectionY}">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,460px)] lg:items-center lg:gap-16">
          <div>
            <p class="${eyebrow} text-flame">The need</p>
            <h2 class="mt-3 ${h2cls} text-white">For too many kids, camp is out of reach</h2>
            ${needFigure('mt-7 lg:hidden')}
            <div class="mt-7 space-y-4 text-lg text-mist">
              <p>Summer camp is where kids make friends, build confidence, and discover what they're capable of. But for many families, the cost simply isn't there — and a child misses a summer that could have shaped their whole year.</p>
              <p>It's rarely about wanting it less. It's about cost becoming a wall between a kid and the summer they were hoping for.</p>
            </div>
          </div>
          ${needFigure('hidden lg:block')}
        </div>
      </div>
    </section>

    <section id="how" class="bg-sage">
      <div class="${wrap} ${sectionY}">
        <div class="mx-auto max-w-[760px] text-center">
          <p class="${eyebrow} text-eyebrow">How it works</p>
          <h2 class="mt-3 ${h2cls} text-ink">A simple path to camp</h2>
          <p class="mt-4 text-lg text-muted">Three steps, built around the kid.</p>
        </div>
        <div class="relative isolate mt-12 md:mt-[60px]">
          <ol class="grid gap-7 md:grid-cols-3 md:gap-[30px]">
            ${[
              ['Communities step up', 'Camps offer spaces. Donors and supporters fund them. Everyone plays a part in opening the door.'],
              ['We make the match', "We connect each child to the right partner camp and cover the cost — no family asked to prove they're in need."],
              ['A kid gets their summer', 'Friendships, confidence, new experiences — a summer that sticks with them.'],
            ]
              .map(
                ([t, p], i) => `
            <li class="group relative z-10 mt-[36px] flex flex-col items-center rounded-[18px] border border-[#e2e9e4] bg-white px-6 pb-[38px] pt-[58px] text-center transition duration-[250ms] ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_46px_-22px_rgba(15,46,39,0.34)]">
              <span class="absolute left-1/2 top-0 grid h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[5px] border-sage bg-step font-display text-2xl font-extrabold text-white shadow-[0_10px_24px_-6px_rgba(15,88,74,0.5)]">${i + 1}</span>
              <h3 class="text-[23px] font-bold leading-tight text-ink">${t}</h3>
              <p class="mx-auto mt-3 max-w-[240px] text-[16px] leading-[1.6] text-muted">${p}</p>
            </li>`
              )
              .join('')}
          </ol>
        </div>
      </div>
    </section>

    <section id="stories" class="bg-cream">
      <div class="${wrap} ${sectionY}">
        <div class="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div class="relative">
            <img
              src="${base}kids-stem.jpg"
              alt="Kids gathered around a 3D printer at an indoor STEM summer camp"
              loading="lazy"
              class="h-64 w-full rounded-[22px] object-cover shadow-xl sm:h-80 md:h-[470px]"
            />
            <div class="absolute -bottom-5 right-5 max-w-[220px] rounded-2xl bg-orange px-5 py-4 font-display font-extrabold leading-tight text-white shadow-lg shadow-orange/30">A summer they'll carry for years.</div>
          </div>
          <div>
            <p class="${eyebrow} text-eyebrow">Why it matters</p>
            <h2 class="mt-3 ${h2cls} text-ink">A summer at camp can change a kid's whole year</h2>
            <p class="mt-4 text-lg text-sand">
              Friendships, confidence, new experiences, a place to belong — and somewhere safe and
              joyful while parents work. When a family wants that for their kid, cost shouldn't be what stops them.
            </p>
            <ul class="mt-7 space-y-4">
              ${[
                'No kid should miss out over cost.',
                'A chance at friendships and confidence.',
                'A summer to look back on.',
              ]
                .map(
                  (t) => `
              <li class="flex items-center gap-3">
                <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-orange text-white">${I_CHECK}</span>
                <span class="font-display text-lg font-bold text-ink">${t}</span>
              </li>`
                )
                .join('')}
            </ul>
            <p class="mt-7 rounded-xl bg-[#f3ecdc] px-5 py-4 text-sm italic text-sand">
              Soon, this is where you'll meet the families and camps making it happen — their stories
              are just beginning.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="involved" class="bg-cream">
      <div class="${wrap} ${sectionY}">
        <div class="relative isolate overflow-hidden rounded-[28px] bg-[linear-gradient(120deg,#11463a,#1c7a63)] px-6 py-12 text-center text-white md:px-14 md:py-20">
          <div class="pointer-events-none absolute -left-16 -top-16 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(226,98,42,0.28),transparent_70%)]"></div>
          <div class="pointer-events-none absolute -bottom-16 -right-10 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_70%)]"></div>
          <!-- faint camp-motif line art for warmth without clutter -->
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" class="pointer-events-none absolute -bottom-12 -left-10 -z-10 h-60 w-60 text-white/[0.07]"><path d="M3 20h18M12 4 4 20M12 4l8 16M12 9l-6 11M12 9l6 11"/></svg>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" class="pointer-events-none absolute -right-8 -top-12 -z-10 h-48 w-48 text-white/[0.07]"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
          <h2 class="text-3xl text-white md:text-[46px]">Be part of the first summer</h2>
          <p class="mx-auto mt-4 max-w-xl text-lg text-white/85">Parents, camps, and early supporters can all help shape it. Join the movement and we'll keep you posted.</p>
          <div class="mt-8 flex flex-wrap justify-center gap-3">
            <a href="${mail('Join the movement')}" class="${btnPrimary}">Join the movement</a>
            <a href="#what" class="${btnGhostDark}">Learn more</a>
          </div>
        </div>
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
