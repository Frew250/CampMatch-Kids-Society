import './style.css'

const base = import.meta.env.BASE_URL
const PHOTO = 'https://images.unsplash.com/photo-'
const img = (id, w) => `${PHOTO}${id}?auto=format&fit=crop&w=${w}&q=80`
const mail = (s) => `mailto:hello@campmatchkidssociety.org?subject=${encodeURIComponent(s)}`

const svg = (p) =>
  `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`
const I_HEART = svg('<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>')
const I_TENT = svg('<path d="M3 20h18M12 4 4 20M12 4l8 16M12 9l-6 11M12 9l6 11"/>')
const I_DOOR = svg('<path d="M14 3H5a2 2 0 0 0-2 2v16h11V3ZM14 3l5 2v16h-5M10 12h.01"/>')

document.querySelector('#app').innerHTML = `
  <header class="nav" id="top">
    <a class="brand" href="#top" aria-label="Camp Match Kids Society home">
      <img src="${base}logo.png" alt="Camp Match Kids Society" />
    </a>
    <nav class="nav-actions" aria-label="Primary">
      <a class="navbtn" href="#about">What we do</a>
      <a class="navbtn" href="#how">How it works</a>
      <a class="navbtn navbtn-fill" href="#involved">Get involved</a>
    </nav>
  </header>

  <section class="hero">
    <h1>Camp for every kid</h1>
    <p class="tagline">Helping more kids get the summer they deserve.</p>
  </section>

  <div class="arch">
    <img
      src="${img('1533222481259-ce20eda1e20b', 1700)}"
      srcset="${img('1533222481259-ce20eda1e20b', 1100)} 1100w, ${img('1533222481259-ce20eda1e20b', 2000)} 2000w"
      sizes="100vw"
      width="1700"
      height="1000"
      alt="Kids laughing and playing together outside on a bright summer day"
      fetchpriority="high"
    />
  </div>

  <main>
    <section class="section" id="about">
      <div class="section-head">
        <h2>We make camp reachable</h2>
        <p class="lead">
          Cost is the wall between a lot of kids and a summer that matters. We take it
          down — and we keep it kind.
        </p>
      </div>
      <div class="cards">
        <article class="card">
          <span class="card-ic">${I_HEART}</span>
          <h3>Cover the fees</h3>
          <p>We raise funds to pay camp fees families can't, so cost stops being the reason a kid stays home.</p>
        </article>
        <article class="card">
          <span class="card-ic">${I_TENT}</span>
          <h3>Open up spots</h3>
          <p>We work with camps to create free and discounted places — more room for more kids, every summer.</p>
        </article>
        <article class="card">
          <span class="card-ic">${I_DOOR}</span>
          <h3>Keep it kind</h3>
          <p>Families come to us about their kid's summer — never to prove they're in need. An open door, not an application.</p>
        </article>
      </div>

      <ul class="facts">
        <li><strong>A board in place</strong><span>ready to incorporate as a BC nonprofit</span></li>
        <li><strong>Camps on board</strong><span>already offering spots</span></li>
        <li><strong>Supporters stepping up</strong><span>already offering to help</span></li>
      </ul>
    </section>

    <section class="section alt" id="how">
      <div class="section-head">
        <h2>How it works</h2>
        <p class="lead">Three steps, built around the kid.</p>
      </div>
      <ol class="steps">
        <li><span class="num">1</span><h3>Tell us about your kid</h3><p>A parent reaches out about their child's summer — interests, needs, and what would help.</p></li>
        <li><span class="num">2</span><h3>We find a fit and fund it</h3><p>We match the child to a partner camp and cover the cost, sorting the details along the way.</p></li>
        <li><span class="num">3</span><h3>Off to camp</h3><p>The kid gets the summer — friendships, confidence, time outside — and the family doesn't carry the cost.</p></li>
      </ol>
    </section>

    <section class="cta" id="involved">
      <h2>Want to help — or need help?</h2>
      <p>We're just getting started, and we'd love to know you. Leave your email and we'll keep you posted.</p>
      <form id="cmSignup" novalidate>
        <input id="cmEmail" type="email" placeholder="Enter your email address" aria-label="Enter your email address" required />
        <button type="submit">Keep me posted</button>
      </form>
      <p class="seg">
        Tell us who you are:
        <a href="${mail("I'm a parent — Camp Match Kids Society")}">I'm a parent</a> ·
        <a href="${mail('I run a camp — Camp Match Kids Society')}">I run a camp</a> ·
        <a href="${mail('I want to help — Camp Match Kids Society')}">I want to help</a>
      </p>
    </section>
  </main>

  <footer class="footer">
    <img class="footer-logo" src="${base}logo.png" alt="Camp Match Kids Society" />
    <p>
      Camp Match Kids Society is a BC nonprofit (incorporating) — the charitable sibling
      of, but separate from, the for-profit
      <a href="https://campmatch.ca" target="_blank" rel="noopener">CampMatch.ca</a>.
      Donations and tax receipts will open once our charitable registration is complete.
    </p>
    <p class="footer-contact"><a href="${mail('Hello from your website')}">hello@campmatchkidssociety.org</a></p>
  </footer>
`

document.querySelector('#cmSignup')?.addEventListener('submit', (e) => {
  e.preventDefault()
  const email = document.querySelector('#cmEmail')?.value || ''
  const body = `Please keep me posted about Camp Match Kids Society.%0D%0AMy email: ${encodeURIComponent(email)}`
  window.location.href = `mailto:hello@campmatchkidssociety.org?subject=${encodeURIComponent('Keep me posted')}&body=${body}`
})
