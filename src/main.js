import './style.css'

const base = import.meta.env.BASE_URL
const img = (id, w) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`
const mail = (s) => `mailto:hello@campmatchkidssociety.ca?subject=${encodeURIComponent(s)}`

const svg = (p) =>
  `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`
const I_CHECK = svg('<path d="M20 6 9 17l-5-5"/>')
const I_HEART = svg('<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>')
const I_TENT = svg('<path d="M3 20h18M12 4 4 20M12 4l8 16M12 9l-6 11M12 9l6 11"/>')
const I_DOOR = svg('<path d="M14 3H5a2 2 0 0 0-2 2v16h11V3ZM14 3l5 2v16h-5M10 12h.01"/>')
const I_USERS = svg('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>')
const I_SUN = svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>')
const I_GIFT = svg('<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8M16.5 8a2.5 2.5 0 0 0 0-5C13 3 12 8 12 8"/>')
const I_CHEV = `<svg class="chev shrink-0" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`

document.querySelector('#app').innerHTML = `
  <header id="top" class="relative isolate overflow-hidden bg-hero-dark text-white">
    <img
      src="${base}society-hero.png"
      alt="Kids canoeing together on a calm mountain lake at summer camp"
      class="absolute inset-0 -z-10 h-full w-full object-cover opacity-90"
      fetchpriority="high"
    />
    <!-- Left-heavy gradient: strong behind the text, clears toward the sunlit right -->
    <div class="absolute inset-0 -z-10 bg-gradient-to-r from-hero-dark via-hero-dark/75 to-hero-dark/15"></div>
    <!-- Gentle top & bottom tint so the nav and copy stay legible over the brighter areas -->
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-hero-dark/40 via-transparent to-hero-dark/60"></div>

    <div class="mx-auto flex min-h-screen max-w-6xl flex-col px-5">
      <div class="flex items-center justify-between gap-4 py-4">
        <a href="#top" class="flex items-center" aria-label="Camp Match Kids Society home">
          <img src="${base}logo-banner.svg" alt="Camp Match Kids Society" class="h-11 w-auto md:h-12" />
        </a>
        <nav class="hidden items-center gap-7 text-sm font-semibold text-white/85 md:flex" aria-label="Primary">
          <a href="#what" class="transition hover:text-white">What we do</a>
          <a href="#need" class="transition hover:text-white">The need</a>
          <a href="#how" class="transition hover:text-white">How it works</a>
          <a href="#stories" class="transition hover:text-white">Stories</a>
          <a href="#faq" class="transition hover:text-white">FAQ</a>
        </nav>
        <a href="#involved" class="rounded-full border border-white/40 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10">Get involved</a>
      </div>

      <div class="flex max-w-2xl flex-1 flex-col justify-center py-12 md:py-16">
        <p class="mb-4 text-sm font-bold uppercase tracking-widest text-white/70">Camp should be for every kid</p>
        <h1 class="text-4xl leading-[1.05] text-white md:text-5xl lg:text-6xl">Every child deserves the chance to go to <span class="text-orange">summer camp.</span></h1>
        <p class="mt-6 max-w-prose text-lg text-white/85">
          Camp Match Kids Society removes the cost barrier that keeps kids out of summer camp.
          We partner with camps to open free and subsidized spaces, and bring donors and
          communities together to fund them — so more kids in BC get a summer of friendship,
          confidence, and the outdoors.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a href="${mail('Join the movement')}" class="rounded-full bg-orange-deep px-6 py-3 font-extrabold text-white shadow-lg shadow-black/20 transition hover:brightness-95">Join the movement</a>
          <a href="#how" class="rounded-full border-2 border-white/40 px-6 py-3 font-extrabold text-white transition hover:bg-white/10">See how it works</a>
        </div>
        <p class="mt-7 max-w-prose text-sm text-white/70">
          Camp Match Kids Society is being established as a BC nonprofit. While incorporation
          is completed, we're already working alongside <a href="https://campmatch.ca" target="_blank" rel="noopener" class="font-bold text-white underline">CampMatch.ca</a>
          and our founding partners to remove the barriers that keep kids from camp.
        </p>
      </div>
    </div>
  </header>

  <main>
    <section id="status" class="border-b border-line bg-surface">
      <div class="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div class="mx-auto max-w-2xl text-center">
          <p class="mb-3 text-sm font-bold uppercase tracking-widest text-teal-deep">Where we are now</p>
          <h2 class="text-3xl text-ink md:text-4xl">New — but not starting from zero</h2>
          <p class="mt-4 text-lg text-muted">The foundation of a real organization is already in place.</p>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          ${[
            ['Board established', 'Our founding directors are in place, and BC nonprofit incorporation is underway.'],
            ['Camp partners', 'We are building a network of camps ready to offer free and subsidized spaces.'],
            ['Community behind us', 'Businesses, families, and supporters are already stepping up to help.'],
          ]
            .map(
              ([t, p]) => `
          <div class="rounded-2xl border border-line bg-white p-7 shadow-sm">
            <span class="grid h-12 w-12 place-items-center rounded-full bg-orange-deep text-white">${I_CHECK}</span>
            <h3 class="mt-4 text-xl text-ink">${t}</h3>
            <p class="mt-2 text-muted">${p}</p>
          </div>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section id="what" class="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div class="mx-auto max-w-2xl text-center">
        <p class="mb-3 text-sm font-bold uppercase tracking-widest text-teal-deep">What we do</p>
        <h2 class="text-3xl text-ink md:text-4xl">We make camp reachable</h2>
        <p class="mt-4 text-lg text-muted">Cost should not be the thing that keeps a kid from camp. We work with families and camps to make the right summer possible — and we keep it kind.</p>
      </div>
      <div class="mt-12 grid gap-6 md:grid-cols-3">
        ${[
          [I_HEART, 'Cover the fees', "We raise funds to pay camp fees families can't, so cost stops being the reason a kid stays home."],
          [I_TENT, 'Open up spots', 'We work with camps to create free and discounted places — more room for more kids, every summer.'],
          [I_DOOR, 'Keep it kind', "Families come to us about their kid's summer — never to prove they're in need. An open door, not an application."],
        ]
          .map(
            ([ic, t, p]) => `
          <article class="rounded-2xl border border-line bg-white p-7 shadow-sm">
            <span class="grid h-14 w-14 place-items-center rounded-2xl bg-teal/10 text-teal-deep">${ic}</span>
            <h3 class="mt-4 text-xl text-ink">${t}</h3>
            <p class="mt-2 text-muted">${p}</p>
          </article>`
          )
          .join('')}
      </div>
    </section>

    <section id="need" class="bg-hero-dark text-white">
      <div class="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div class="mx-auto max-w-3xl text-center">
          <p class="mb-3 text-sm font-bold uppercase tracking-widest text-white/60">The need</p>
          <h2 class="text-3xl text-white md:text-4xl">For too many kids, camp is out of reach</h2>
          <p class="mt-6 text-lg text-white/80">
            Summer camp is where kids make friends, build confidence, and discover what they're
            capable of. But for many families, the cost simply isn't there — and a child misses a
            summer that could have shaped their whole year.
          </p>
          <p class="mt-4 text-lg text-white/80">
            It's rarely about wanting it less. It's about cost becoming a wall between a kid and the
            kind of summer every child deserves.
          </p>
          <p class="mt-8 text-2xl font-extrabold leading-snug text-orange md:text-3xl">
            Cost shouldn't decide which kids get a summer worth remembering.
          </p>
        </div>
      </div>
    </section>

    <section id="how" class="border-y border-line bg-surface">
      <div class="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div class="mx-auto max-w-2xl text-center">
          <p class="mb-3 text-sm font-bold uppercase tracking-widest text-teal-deep">How it works</p>
          <h2 class="text-3xl text-ink md:text-4xl">A simple path to camp</h2>
          <p class="mt-4 text-lg text-muted">Three steps, built around the kid.</p>
        </div>
        <ol class="mt-12 grid gap-8 md:grid-cols-3">
          ${[
            [I_USERS, 'Communities step up', 'Camps offer spaces. Donors and supporters fund them. Everyone plays a part in opening the door.'],
            [I_HEART, 'We make the match', "We connect each child to the right partner camp and cover the cost — no family asked to prove they're in need."],
            [I_SUN, 'A kid gets their summer', 'Friendships, confidence, time outside — a summer that sticks with them.'],
          ]
            .map(
              ([ic, t, p], i) => `
            <li class="relative rounded-2xl border border-line bg-white p-7 shadow-sm">
              <div class="flex items-center gap-3">
                <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-teal text-sm font-extrabold text-white">${i + 1}</span>
                <span class="text-teal-deep">${ic}</span>
              </div>
              <h3 class="mt-4 text-xl text-ink">${t}</h3>
              <p class="mt-2 text-muted">${p}</p>
            </li>`
            )
            .join('')}
        </ol>
      </div>
    </section>

    <section id="stories" class="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div class="grid items-center gap-10 md:grid-cols-2">
        <img
          src="${img('1638202951770-2240942c7d1c', 900)}"
          srcset="${img('1638202951770-2240942c7d1c', 700)} 700w, ${img('1638202951770-2240942c7d1c', 1100)} 1100w"
          sizes="(max-width: 768px) 92vw, 46vw"
          alt="Kids relaxing together in a hammock among the trees at camp"
          loading="lazy"
          class="aspect-[5/4] w-full rounded-3xl object-cover shadow-xl"
        />
        <div>
          <p class="mb-3 text-sm font-bold uppercase tracking-widest text-teal-deep">Why it matters</p>
          <h2 class="text-3xl text-ink md:text-4xl">A summer at camp can change a kid's whole year</h2>
          <p class="mt-4 text-lg text-muted">
            Friendships, confidence, time outside, a place to belong — and somewhere safe and
            joyful while parents work. Every kid deserves a summer like that.
          </p>
          <ul class="mt-6 space-y-3">
            ${[
              'Every child deserves camp.',
              'Every friendship matters.',
              'Every summer should make memories.',
            ]
              .map(
                (t) => `
            <li class="flex items-center gap-3">
              <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-orange-deep text-white">${I_CHECK}</span>
              <span class="font-bold text-ink">${t}</span>
            </li>`
              )
              .join('')}
          </ul>
        </div>
      </div>
      <p class="mx-auto mt-12 max-w-2xl text-center text-muted">
        Soon, this is where you'll meet the families and camps making it happen — their stories
        are just beginning.
      </p>
    </section>

    <section id="faq" class="border-t border-line bg-surface">
      <div class="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <div class="text-center">
          <p class="mb-3 text-sm font-bold uppercase tracking-widest text-teal-deep">FAQ</p>
          <h2 class="text-3xl text-ink md:text-4xl">Questions, answered</h2>
        </div>
        <div class="mt-10 space-y-3">
          ${[
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
              'We are the charitable sibling of CampMatch.ca — a separate organization, built on the same belief that every kid deserves camp.',
            ],
          ]
            .map(
              ([q, a]) => `
          <details class="group rounded-2xl border border-line bg-white p-5 open:shadow-sm">
            <summary class="flex items-center justify-between gap-4 text-lg font-bold text-ink">
              <span>${q}</span>
              <span class="text-teal-deep">${I_CHEV}</span>
            </summary>
            <p class="mt-3 text-muted">${a}</p>
          </details>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section id="involved" class="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div class="rounded-3xl bg-gradient-to-br from-teal to-teal-deep px-6 py-14 text-center text-white md:px-12">
        <h2 class="text-3xl md:text-4xl">Be part of the first summer</h2>
        <p class="mx-auto mt-4 max-w-xl text-lg text-white/90">Parents, camps, and early supporters can all help shape it. Join the movement and we'll keep you posted.</p>
        <form id="cmSignup" class="mx-auto mt-8 flex max-w-lg flex-wrap justify-center gap-3" novalidate>
          <input id="cmEmail" type="email" required placeholder="Enter your email address" aria-label="Enter your email address" class="min-w-0 flex-1 rounded-full px-5 py-3 text-ink" />
          <button type="submit" class="rounded-full bg-orange-deep px-7 py-3 font-extrabold text-white transition hover:brightness-95">Join the movement</button>
        </form>
        <div class="mx-auto mt-6 flex max-w-xl flex-col items-center gap-2">
          <span class="inline-flex cursor-not-allowed items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 font-extrabold text-white/70" aria-disabled="true" title="Coming soon">${I_GIFT}<span>Donate — coming soon</span></span>
          <p class="text-sm text-white/75">Tax-deductible giving opens once our charitable registration is complete.</p>
        </div>
        <p class="mx-auto mt-8 max-w-xl border-t border-white/20 pt-6 text-sm text-white/85">
          Tell us who you are:
          <a href="${mail('Tell us about my kid — Camp Match Kids Society')}" class="font-bold underline">Tell us about your kid</a> ·
          <a href="${mail('I run a camp — Camp Match Kids Society')}" class="font-bold underline">I run a camp</a> ·
          <a href="${mail('I want to help — Camp Match Kids Society')}" class="font-bold underline">I want to help</a>
        </p>
      </div>
    </section>
  </main>

  <footer class="border-t border-line">
    <div class="mx-auto max-w-6xl px-5 py-12">
      <div class="grid gap-10 md:grid-cols-3">
        <div>
          <img src="${base}logo.png" alt="Camp Match Kids Society" class="h-14 w-auto" />
          <p class="mt-4 max-w-sm text-sm text-muted">
            Helping more kids in BC get to summer camp by removing the cost barrier — with camps,
            donors, and communities.
          </p>
        </div>
        <div>
          <h3 class="text-sm font-extrabold uppercase tracking-widest text-ink">Explore</h3>
          <ul class="mt-4 space-y-2 text-sm text-muted">
            <li><a href="#what" class="transition hover:text-teal-deep">What we do</a></li>
            <li><a href="#need" class="transition hover:text-teal-deep">The need</a></li>
            <li><a href="#how" class="transition hover:text-teal-deep">How it works</a></li>
            <li><a href="#stories" class="transition hover:text-teal-deep">Stories</a></li>
            <li><a href="#faq" class="transition hover:text-teal-deep">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-extrabold uppercase tracking-widest text-ink">Get in touch</h3>
          <ul class="mt-4 space-y-2 text-sm text-muted">
            <li><a href="${mail('Hello from your website')}" class="font-bold text-teal-deep">hello@campmatchkidssociety.ca</a></li>
            <li><a href="#involved" class="transition hover:text-teal-deep">Join the movement →</a></li>
          </ul>
        </div>
      </div>
      <div class="mt-10 border-t border-line pt-6 text-sm text-muted">
        <p class="max-w-3xl">
          Camp Match Kids Society is being established as a BC nonprofit — the charitable sibling
          of, but separate from, the for-profit
          <a href="https://campmatch.ca" target="_blank" rel="noopener" class="font-bold text-teal-deep">CampMatch.ca</a>.
          Donations and tax receipts will open once our charitable registration is complete.
        </p>
        <p class="mt-4">© 2026 Camp Match Kids Society. Made with care in British Columbia.</p>
      </div>
    </div>
  </footer>
`

document.querySelector('#cmSignup')?.addEventListener('submit', (e) => {
  e.preventDefault()
  const email = document.querySelector('#cmEmail')?.value || ''
  const body = `Please keep me posted about Camp Match Kids Society.%0D%0AMy email: ${encodeURIComponent(email)}`
  window.location.href = `mailto:hello@campmatchkidssociety.ca?subject=${encodeURIComponent('Join the movement')}&body=${body}`
})
