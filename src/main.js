import './style.css'

const base = import.meta.env.BASE_URL
const PHOTO = 'https://images.unsplash.com/photo-'
const img = (id, w) => `${PHOTO}${id}?auto=format&fit=crop&w=${w}&q=80`
const mail = (subject) =>
  `mailto:hello@campmatchkidssociety.org?subject=${encodeURIComponent(subject)}`

const svg = (paths) =>
  `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`

const ICON_CHECK = svg('<path d="M20 6 9 17l-5-5"/>')
const ICON_HEART = svg('<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>')
const ICON_TENT = svg('<path d="M3 20h18M12 4 4 20M12 4l8 16M12 9l-6 11M12 9l6 11"/>')
const ICON_DOOR = svg('<path d="M14 3H5a2 2 0 0 0-2 2v16h11V3ZM14 3l5 2v16h-5M10 12h.01"/>')

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="#top" aria-label="Camp Match Kids Society home">
        <img src="${base}logo.png" alt="Camp Match Kids Society" width="170" height="64" />
      </a>
      <nav class="nav-links" aria-label="Primary">
        <a href="#mission">What we do</a>
        <a href="#how">How it works</a>
        <a href="#involved">Get involved</a>
      </nav>
      <a class="btn btn-primary btn-sm" href="${mail('Keep me posted')}">Keep me posted</a>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-copy">
        <p class="script">Camp should be for every kid</p>
        <h1>Helping more kids get a summer that <span class="accent">sticks with them.</span></h1>
        <p class="lead">
          Camp Match Kids Society helps kids whose families can't swing the cost get to
          summer camp — we cover fees, and we work with camps to open up free and
          discounted spots.
        </p>
        <div class="cta-row">
          <a class="btn btn-primary" href="${mail('Keep me posted')}">Keep me posted</a>
          <a class="btn btn-secondary" href="#how">See how it works</a>
        </div>
        <p class="hero-note">
          A BC nonprofit in the making — the charitable sibling of, and a separate
          organisation from, <a href="https://campmatch.ca" target="_blank" rel="noopener">CampMatch.ca</a>.
        </p>
      </div>

      <figure class="hero-figure">
        <img
          src="${img('1606092195730-5d7b9af1efc5', 1100)}"
          srcset="${img('1606092195730-5d7b9af1efc5', 800)} 800w, ${img('1606092195730-5d7b9af1efc5', 1300)} 1300w"
          sizes="(max-width: 900px) 92vw, 46vw"
          width="1100"
          height="1180"
          alt="Children laughing as they lift a bright parachute together on a sunny field"
          fetchpriority="high"
        />
      </figure>
    </section>

    <section class="proof" aria-label="Where we are">
      <ul class="proof-list">
        <li>
          <span class="proof-ic" aria-hidden="true">${ICON_CHECK}</span>
          <span><strong>A board in place</strong> — ready to incorporate as a BC nonprofit.</span>
        </li>
        <li>
          <span class="proof-ic" aria-hidden="true">${ICON_CHECK}</span>
          <span><strong>Camps already offering spots</strong> for kids who need them.</span>
        </li>
        <li>
          <span class="proof-ic" aria-hidden="true">${ICON_CHECK}</span>
          <span><strong>Supporters already stepping up</strong> to help make it happen.</span>
        </li>
      </ul>
    </section>

    <section class="section mission" id="mission">
      <div class="section-head">
        <p class="script">What we do</p>
        <h2>We make camp reachable.</h2>
        <p class="lead">
          Cost is the wall between a lot of kids and a summer that matters. We take it
          down — and we keep it kind.
        </p>
      </div>

      <div class="feature-grid">
        <article class="feature">
          <span class="feature-ic" aria-hidden="true">${ICON_HEART}</span>
          <h3>Cover the fees</h3>
          <p>We raise funds to pay camp fees that families can't, so cost stops being the reason a kid stays home.</p>
        </article>
        <article class="feature">
          <span class="feature-ic" aria-hidden="true">${ICON_TENT}</span>
          <h3>Open up spots</h3>
          <p>We work with camps to create free and discounted places — more room for more kids, every summer.</p>
        </article>
        <article class="feature">
          <span class="feature-ic" aria-hidden="true">${ICON_DOOR}</span>
          <h3>Keep it kind</h3>
          <p>Families come to us about their kid's summer — never to prove they're in need. It's an open door, not an application.</p>
        </article>
      </div>
    </section>

    <section class="section how" id="how">
      <div class="section-head">
        <p class="script">How it works</p>
        <h2>Three steps, built around the kid.</h2>
      </div>

      <ol class="steps">
        <li>
          <span class="step-num">1</span>
          <h3>Tell us about your kid</h3>
          <p>A parent reaches out about their child's summer — their interests, their needs, what would help.</p>
        </li>
        <li>
          <span class="step-num">2</span>
          <h3>We find a fit and fund it</h3>
          <p>We match the child to a partner camp and cover the cost, sorting the practical details along the way.</p>
        </li>
        <li>
          <span class="step-num">3</span>
          <h3>Off to camp</h3>
          <p>The kid gets the summer — friendships, confidence, time outside — and the family doesn't carry the cost.</p>
        </li>
      </ol>
    </section>

    <section class="section why">
      <figure class="why-figure">
        <img
          src="${img('1517164850305-99a3e65bb47e', 900)}"
          srcset="${img('1517164850305-99a3e65bb47e', 700)} 700w, ${img('1517164850305-99a3e65bb47e', 1100)} 1100w"
          sizes="(max-width: 900px) 92vw, 44vw"
          width="900"
          height="980"
          loading="lazy"
          alt="A group of children pulling together in a friendly game of tug-of-war"
        />
      </figure>
      <div class="why-copy">
        <h2>A summer at camp can change a kid's whole year.</h2>
        <p class="lead">
          Friendships, confidence, time outside, a place to belong — and somewhere safe
          and joyful while parents work. Every kid deserves that, whatever their family
          can afford.
        </p>
      </div>
    </section>

    <section class="section involved" id="involved">
      <div class="section-head center">
        <p class="script">Get involved</p>
        <h2>Want to help — or need help?</h2>
        <p class="lead">
          We're just getting started, and we'd love to know you. Tell us which one you
          are and we'll keep you posted.
        </p>
      </div>

      <div class="involve-grid">
        <a class="involve-card" href="${mail('I am a parent — Camp Match Kids Society')}">
          <h3>I'm a parent</h3>
          <p>Tell us about your kid, and we'll be in touch as spots open up.</p>
          <span class="card-go">Get in touch <span aria-hidden="true">&rarr;</span></span>
        </a>
        <a class="involve-card" href="${mail('I run a camp — Camp Match Kids Society')}">
          <h3>I run a camp</h3>
          <p>Offer spots or partner with us to reach more families.</p>
          <span class="card-go">Partner with us <span aria-hidden="true">&rarr;</span></span>
        </a>
        <a class="involve-card" href="${mail('I want to help — Camp Match Kids Society')}">
          <h3>I want to help</h3>
          <p>Be first to know the moment you can give and get involved.</p>
          <span class="card-go">Keep me posted <span aria-hidden="true">&rarr;</span></span>
        </a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="footer-inner">
      <a class="brand" href="#top" aria-label="Camp Match Kids Society home">
        <img src="${base}logo.png" alt="Camp Match Kids Society" width="150" height="56" />
      </a>
      <p class="footer-legal">
        Camp Match Kids Society is a BC nonprofit (incorporating) — the charitable
        sibling of, but a separate organisation from, the for-profit CampMatch.ca.
        Donations and tax receipts will open once our charitable registration is complete.
      </p>
      <p class="footer-contact">
        <a href="${mail('Hello from your website')}">hello@campmatchkidssociety.org</a>
      </p>
    </div>
  </footer>
`
