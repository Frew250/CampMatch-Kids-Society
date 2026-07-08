import './style.css'
import {
  base, mail, eyebrow, h2cls, wrap, sectionY, btnPrimary,
  navLinks, mobileMenu, siteFooter, ctaCard,
  I_HEART, I_TENT, I_DOOR, I_CHECK,
} from './shared.js'

const needFigure = (extra) =>
  `<figure class="relative ${extra}">
    <img src="${base}kids-parachute.jpg" alt="Kids playing a parachute game together in a field at camp" loading="lazy" class="aspect-[4/3] w-full rounded-[24px] object-cover shadow-[0_34px_70px_-34px_rgba(0,0,0,0.7)] ring-1 ring-white/15" />
    <span class="pointer-events-none absolute inset-0 rounded-[24px] bg-gradient-to-t from-ink/25 via-transparent to-orange/10"></span>
  </figure>`

document.querySelector('#app').innerHTML = `
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-display focus:font-bold focus:text-ink">Skip to content</a>
  <header id="top" class="relative isolate overflow-hidden bg-hero-dark text-white">
    <img src="${base}mission-hero.jpg" alt="A boy paddleboarding on a calm lake at camp" class="absolute inset-0 -z-10 h-full w-full object-cover object-[center_40%]" fetchpriority="high" />
    <!-- Same warm treatment as the home hero, mirrored: dark across the right text column, clearing to the left photo. -->
    <div class="absolute inset-0 -z-10 bg-gradient-to-l from-[#1a3a24]/90 from-25% via-[#1a3a24]/58 via-60% to-transparent"></div>
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-[#1a3a24]/28 via-transparent to-[#1a3a24]/42"></div>

    <div class="mx-auto flex min-h-screen max-w-[1180px] flex-col px-5 md:px-12">
      <div class="flex items-center justify-between gap-4 py-5">
        <a href="${base}" class="flex items-center" aria-label="Camp Match Kids Society home">
          <img src="${base}logo-banner.svg" alt="Camp Match Kids Society" class="h-11 w-auto md:h-12" />
        </a>
        <nav class="hidden items-center gap-7 font-display text-sm font-bold text-white/85 md:flex" aria-label="Primary">
          ${navLinks('mission')}
        </nav>
        ${mobileMenu()}
      </div>

      <div class="flex flex-1 items-center">
        <div class="ml-auto flex max-w-xl flex-col items-end py-10 text-right md:py-16">
          <p class="${eyebrow} text-flame">Our mission</p>
          <h1 class="mt-3 text-4xl leading-[1.05] text-white md:text-5xl lg:text-[60px]">We make camp <span class="text-orange">reachable.</span></h1>
          <p class="mt-5 max-w-prose text-lg text-white/85">Cost should not be the thing that keeps a kid from camp. We work with families and camps to make camp possible, and we keep it kind.</p>
          <div class="mt-8"><a href="${base}involved/" class="${btnPrimary}">Get involved</a></div>
        </div>
      </div>
    </div>
  </header>

  <main id="main">
    <section id="what" class="bg-cream">
      <div class="${wrap} ${sectionY}">
        <div class="mx-auto max-w-[760px] text-center">
          <p class="${eyebrow} text-eyebrow">What we do</p>
          <h2 class="mt-3 ${h2cls} text-ink">Three ways we help</h2>
        </div>
        <div class="mt-10 rounded-[28px] bg-white p-4 shadow-[0_40px_80px_-40px_rgba(15,46,39,0.28)] sm:p-6 md:mt-12 md:p-[30px]">
          <div class="grid gap-5 md:grid-cols-3 md:gap-6">
            ${[
              [I_HEART, '01', 'Cover the fees', "We raise funds to pay camp fees families can't, so cost stops being the reason a kid stays home."],
              [I_TENT, '02', 'Open up spots', 'We work with camps to create free and discounted places, opening more room for more kids, every season.'],
              [I_DOOR, '03', 'Keep it kind', "Families come to us about getting their kid to camp, never to prove they're in need. An open door, not an application."],
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
              <p>Camp is where kids make friends, build confidence, and discover what they're capable of. But for many families, the cost simply isn't there, and a child misses out on a chance that could shape their whole year.</p>
              <p>It's rarely about wanting it less. It's about cost becoming a wall between a kid and the camp they were hoping for.</p>
            </div>
          </div>
          ${needFigure('hidden lg:block')}
        </div>
      </div>
    </section>

    <section id="stories" class="bg-cream">
      <div class="${wrap} ${sectionY}">
        <div class="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div class="relative">
            <img
              src="${base}kids-stem.jpg"
              alt="Kids gathered around a 3D printer at an indoor STEM camp"
              loading="lazy"
              class="h-64 w-full rounded-[22px] object-cover shadow-xl sm:h-80 md:h-[470px]"
            />
            <div class="absolute -bottom-5 right-5 max-w-[220px] rounded-2xl bg-orange px-5 py-4 font-display font-extrabold leading-tight text-white shadow-lg shadow-orange/30">Memories they'll carry for years.</div>
          </div>
          <div>
            <p class="${eyebrow} text-eyebrow">Why it matters</p>
            <h2 class="mt-3 ${h2cls} text-ink">Camp can change a kid's whole year</h2>
            <p class="mt-4 text-lg text-sand">
              Friendships, confidence, new experiences, a place to belong, and somewhere safe and
              joyful while parents work. When a family wants that for their kid, cost shouldn't be what stops them.
            </p>
            <ul class="mt-7 space-y-4">
              ${[
                'No kid should miss out over cost.',
                'A chance at friendships and confidence.',
                'Memories to look back on.',
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
              Soon, this is where you'll meet the families and camps making it happen. Their stories
              are just beginning.
            </p>
          </div>
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
              ['We make the match', "We connect each child to the right partner camp and cover the cost, with no family asked to prove they're in need."],
              ['A kid gets to camp', 'Friendships, confidence, new experiences, and memories that stick.'],
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

    <section class="bg-cream">
      <div class="${wrap} pb-12 md:pb-[104px]">
        ${ctaCard({ label: 'Get involved', href: `${base}involved/` })}
      </div>
    </section>
  </main>

  ${siteFooter()}
`
