import './style.css'
import {
  base, mail, eyebrow, h2cls, wrap, sectionY,
  siteHeader, siteFooter, ctaCard,
  I_BUILDING, I_TENT_W, I_HEART_W, I_TENT, I_GIFT, I_SHARE,
} from './shared.js'

document.querySelector('#app').innerHTML = `
  ${siteHeader('involved')}

  <main id="main">
    <section class="bg-cream">
      <div class="${wrap} pb-4 pt-12 md:pb-6 md:pt-[104px]">
        <div class="mx-auto max-w-[760px] text-center">
          <p class="${eyebrow} text-eyebrow">Get involved</p>
          <h1 class="mt-3 ${h2cls} text-ink">Help open the door to camp</h1>
          <p class="mt-4 text-lg text-sand">We're building our first camps now. Camps, supporters, and businesses can all help make it happen.</p>
        </div>
      </div>
    </section>

    <section class="bg-sage">
      <div class="${wrap} py-12 md:py-[88px]">
        <div class="mx-auto max-w-[760px] text-center">
          <p class="${eyebrow} text-eyebrow">Where we are now</p>
          <h2 class="mt-3 ${h2cls} text-ink">New — but not starting from zero</h2>
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

    <section class="bg-cream">
      <div class="${wrap} ${sectionY}">
        <div class="mx-auto max-w-[760px] text-center">
          <p class="${eyebrow} text-eyebrow">Ways to help</p>
          <h2 class="mt-3 ${h2cls} text-ink">Find where you fit</h2>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          ${[
            [I_TENT, 'Run a camp', 'Offer free or subsidized spaces and help open the door for more kids this season.', 'Talk to us', mail('I run a camp — Camp Match Kids Society'), ''],
            [I_GIFT, 'Support a child', 'Help fund camp spaces and remove the cost barrier. Tax-deductible giving opens once our charitable registration is complete.', 'Join the movement', mail('I want to support a child — Camp Match Kids Society'), 'Donations coming soon'],
            [I_SHARE, 'Spread the word', 'Share Camp Match Kids Society with families, camps, and supporters who care about kids getting to camp.', 'Get in touch', mail('I want to help spread the word — Camp Match Kids Society'), ''],
          ]
            .map(
              ([ic, t, p, cta, href, badge]) => `
          <article class="group flex flex-col rounded-2xl border border-line bg-white p-7 shadow-sm transition duration-[250ms] ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_46px_-22px_rgba(15,46,39,0.3)]">
            <span class="grid h-14 w-14 place-items-center rounded-2xl bg-[#dde8e1] text-teal-deep">${ic}</span>
            <div class="mt-5 flex items-center gap-2">
              <h3 class="text-xl text-ink">${t}</h3>
              ${badge ? `<span class="rounded-full bg-orange/10 px-2.5 py-1 font-display text-[11px] font-extrabold uppercase tracking-wide text-orange-deep">${badge}</span>` : ''}
            </div>
            <p class="mt-2 grow text-muted">${p}</p>
            <a href="${href}" class="mt-5 inline-flex items-center gap-1 font-display font-extrabold text-teal-deep transition hover:text-orange-deep">${cta} <span aria-hidden="true">→</span></a>
          </article>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="bg-sage">
      <div class="${wrap} pb-12 pt-0 md:pb-[104px]">
        ${ctaCard({ label: 'Read the FAQ', href: `${base}faq/` })}
      </div>
    </section>
  </main>

  ${siteFooter()}
`
