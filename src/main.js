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

document.querySelector('#app').innerHTML = `
  <header id="top" class="relative isolate overflow-hidden bg-hero-dark text-white">
    <img
      src="${img('1533222481259-ce20eda1e20b', 1800)}"
      alt="Kids laughing and playing together outside on a bright summer day"
      class="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
      fetchpriority="high"
    />
    <div class="absolute inset-0 -z-10 bg-gradient-to-br from-hero-dark/90 via-hero-dark/72 to-hero-dark/90"></div>

    <div class="mx-auto flex min-h-screen max-w-6xl flex-col px-5">
      <div class="flex items-center justify-between gap-4 py-4">
        <a href="#top" class="flex items-center" aria-label="Camp Match Kids Society home">
          <img src="${base}logo.png" alt="Camp Match Kids Society" class="h-14 w-auto rounded-xl bg-white/95 p-1.5 shadow-sm" />
        </a>
        <nav class="hidden items-center gap-7 text-sm font-semibold text-white/85 sm:flex" aria-label="Primary">
          <a href="#what" class="transition hover:text-white">What we do</a>
          <a href="#how" class="transition hover:text-white">How it works</a>
          <a href="#involved" class="transition hover:text-white">Get involved</a>
        </nav>
        <a href="${mail('Keep me posted')}" class="rounded-full border border-white/40 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10">Keep me posted</a>
      </div>

      <div class="flex max-w-2xl flex-1 flex-col justify-center py-10 md:py-16">
        <p class="mb-4 text-sm font-bold uppercase tracking-widest text-white/70">Camp for every kid</p>
        <h1 class="text-4xl leading-[1.05] text-white md:text-6xl">Helping more kids get a summer that <span class="text-orange">sticks with them.</span></h1>
        <p class="mt-5 max-w-prose text-lg text-white/85">
          We help kids whose families can't swing the cost get to summer camp — covering
          fees, and working with camps to open up free and discounted spots.
        </p>
        <div class="mt-7 flex flex-wrap gap-3">
          <a href="${mail('Keep me posted')}" class="rounded-full bg-orange px-6 py-3 font-extrabold text-white shadow-lg shadow-black/20 transition hover:bg-orange-deep">Keep me posted</a>
          <a href="#how" class="rounded-full border-2 border-white/40 px-6 py-3 font-extrabold text-white transition hover:bg-white/10">See how it works</a>
        </div>
        <p class="mt-6 text-sm text-white/65">
          A BC nonprofit in the making — the charitable sibling of, and separate from,
          <a href="https://campmatch.ca" target="_blank" rel="noopener" class="font-bold text-white underline">CampMatch.ca</a>.
        </p>
      </div>

      <ul class="mb-10 grid gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur sm:grid-cols-3 md:mb-14">
        ${[
          ['A board in place', 'ready to incorporate as a BC nonprofit'],
          ['Camps on board', 'already offering spots'],
          ['Supporters stepping up', 'already offering to help'],
        ]
          .map(
            ([t, s]) => `
          <li class="flex items-start gap-3">
            <span class="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-orange text-white">${I_CHECK}</span>
            <p><span class="font-extrabold text-white">${t}</span> <span class="text-white/70">— ${s}.</span></p>
          </li>`
          )
          .join('')}
      </ul>
    </div>
  </header>

  <main>
    <section id="what" class="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div class="mx-auto max-w-2xl text-center">
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

    <section id="how" class="border-y border-line bg-surface">
      <div class="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl text-ink md:text-4xl">How it works</h2>
          <p class="mt-4 text-lg text-muted">Three steps, built around the kid.</p>
        </div>
        <ol class="mt-12 grid gap-8 md:grid-cols-3">
          ${[
            ['1', 'Tell us about your kid', "A parent reaches out about their child's summer — interests, needs, and what would help."],
            ['2', 'We find a fit and fund it', 'We match the child to a partner camp and cover the cost, sorting the details along the way.'],
            ['3', 'Off to camp', "The kid gets the summer — friendships, confidence, time outside — and the family doesn't carry the cost."],
          ]
            .map(
              ([n, t, p]) => `
            <li>
              <span class="grid h-12 w-12 place-items-center rounded-full border-2 border-teal text-xl font-extrabold text-teal-deep">${n}</span>
              <h3 class="mt-4 text-xl text-ink">${t}</h3>
              <p class="mt-2 text-muted">${p}</p>
            </li>`
            )
            .join('')}
        </ol>
      </div>
    </section>

    <section class="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
      <img
        src="${img('1638202951770-2240942c7d1c', 900)}"
        srcset="${img('1638202951770-2240942c7d1c', 700)} 700w, ${img('1638202951770-2240942c7d1c', 1100)} 1100w"
        sizes="(max-width: 768px) 92vw, 46vw"
        alt="Kids relaxing in a hammock among the trees at camp"
        loading="lazy"
        class="aspect-[5/4] w-full rounded-3xl object-cover shadow-xl"
      />
      <div>
        <h2 class="text-3xl text-ink md:text-4xl">A summer at camp can change a kid's whole year</h2>
        <p class="mt-4 text-lg text-muted">
          Friendships, confidence, time outside, a place to belong — and somewhere safe
          and joyful while parents work. Every kid deserves a summer like that.
        </p>
      </div>
    </section>

    <section id="involved" class="mx-auto max-w-6xl px-5 pb-16 md:pb-24">
      <div class="rounded-3xl bg-gradient-to-br from-teal to-teal-deep px-6 py-14 text-center text-white md:px-12">
        <h2 class="text-3xl md:text-4xl">Tell us where you fit</h2>
        <p class="mx-auto mt-4 max-w-xl text-white/90">Parents, camps, and early supporters can all help shape the first summer. Leave your email and we'll keep you posted.</p>
        <form id="cmSignup" class="mx-auto mt-8 flex max-w-lg flex-wrap justify-center gap-3" novalidate>
          <input id="cmEmail" type="email" required placeholder="Enter your email address" aria-label="Enter your email address" class="min-w-0 flex-1 rounded-full px-5 py-3 text-ink outline-none" />
          <button type="submit" class="rounded-full bg-orange px-7 py-3 font-extrabold text-white transition hover:bg-orange-deep">Keep me posted</button>
        </form>
        <p class="mt-6 text-sm text-white/85">
          Tell us who you are:
          <a href="${mail('Tell us about my kid — Camp Match Kids Society')}" class="font-bold underline">Tell us about your kid</a> ·
          <a href="${mail('I run a camp — Camp Match Kids Society')}" class="font-bold underline">I run a camp</a> ·
          <a href="${mail('I want to help — Camp Match Kids Society')}" class="font-bold underline">I want to help</a>
        </p>
      </div>
    </section>
  </main>

  <footer class="border-t border-line">
    <div class="mx-auto max-w-6xl px-5 py-10 text-center">
      <img src="${base}logo.png" alt="Camp Match Kids Society" class="mx-auto h-14 w-auto" />
      <p class="mx-auto mt-4 max-w-2xl text-sm text-muted">
        Camp Match Kids Society is a BC nonprofit (incorporating) — the charitable sibling
        of, but separate from, the for-profit
        <a href="https://campmatch.ca" target="_blank" rel="noopener" class="font-bold text-teal-deep">CampMatch.ca</a>.
        Donations and tax receipts will open once our charitable registration is complete.
      </p>
      <p class="mt-3"><a href="${mail('Hello from your website')}" class="font-bold text-teal-deep">hello@campmatchkidssociety.ca</a></p>
    </div>
  </footer>
`

document.querySelector('#cmSignup')?.addEventListener('submit', (e) => {
  e.preventDefault()
  const email = document.querySelector('#cmEmail')?.value || ''
  const body = `Please keep me posted about Camp Match Kids Society.%0D%0AMy email: ${encodeURIComponent(email)}`
  window.location.href = `mailto:hello@campmatchkidssociety.ca?subject=${encodeURIComponent('Keep me posted')}&body=${body}`
})
