import './style.css'

const PHOTO = 'https://images.unsplash.com/photo-'
const img = (id, w) => `${PHOTO}${id}?auto=format&fit=crop&w=${w}&q=80`

document.querySelector('#app').innerHTML = `
  <div class="frame">
    <header class="nav">
      <div class="nav-bar">
        <nav class="nav-side nav-left" aria-label="Primary">
          <a href="#mission">Mission</a>
          <a href="#how">How it works</a>
        </nav>

        <a class="brand" href="#top" aria-label="Camp Match Kids Society home">
          <span class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7Z" fill="currentColor" />
              <circle cx="12" cy="9" r="2.6" fill="#fff" />
            </svg>
          </span>
          <strong>Camp Match</strong>
        </a>

        <div class="nav-side nav-right">
          <a href="#why">Why camp</a>
          <a class="btn btn-pink btn-sm" href="#involve">Get involved</a>
        </div>
      </div>
    </header>

    <main id="top">
      <section class="hero">
        <span class="doodle d-sun" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none" stroke="#f6b73c" stroke-width="2.4" stroke-linecap="round"><circle cx="24" cy="24" r="9"/><path d="M24 4v5M24 39v5M4 24h5M39 24h5M10 10l3.5 3.5M34.5 34.5 38 38M38 10l-3.5 3.5M13.5 34.5 10 38"/></svg>
        </span>
        <span class="doodle d-spark" aria-hidden="true">
          <svg viewBox="0 0 40 40" fill="#2fae7a"><path d="M20 0c1.2 9 9.8 17.6 18.8 18.8C29.8 20 21.2 28.6 20 37.6 18.8 28.6 10.2 20 1.2 18.8 10.2 17.6 18.8 9 20 0Z"/></svg>
        </span>
        <span class="doodle d-star" aria-hidden="true">
          <svg viewBox="0 0 44 44" fill="#8b5cf6"><path d="M22 1l4.4 11.5L38 8l-5.5 11L44 22l-11.5 3L38 36l-11.6-4.5L22 43l-4.4-11.5L6 36l5.5-11L0 22l11.5-3L6 8l11.6 4.5z"/></svg>
        </span>
        <span class="doodle d-orbit" aria-hidden="true">
          <svg viewBox="0 0 56 40" fill="none" stroke="#38b0e3" stroke-width="2.4"><circle cx="28" cy="20" r="9"/><ellipse cx="28" cy="20" rx="26" ry="9" transform="rotate(-22 28 20)"/></svg>
        </span>
        <span class="doodle d-cloud" aria-hidden="true">
          <svg viewBox="0 0 60 36" fill="none" stroke="#38b0e3" stroke-width="2.4" stroke-linecap="round"><path d="M14 30a8 8 0 0 1 .6-15.9A11 11 0 0 1 36 12a8 8 0 0 1 8 18z"/></svg>
        </span>

        <div class="hero-copy">
          <p class="eyebrow">Where every kid belongs</p>
          <h1>Helping kids find a summer that <span class="hl-pink">changes everything</span></h1>
          <p class="lead">
            Camp Match Kids Society connects families, camp partners, and community
            supporters so more children can experience safety, belonging, and joy.
          </p>
          <div class="hero-cta">
            <a class="btn btn-pink btn-lg" href="#involve">Get involved <span aria-hidden="true">↗</span></a>
            <a class="btn btn-soft btn-lg" href="#how">See how we help</a>
          </div>
        </div>

        <figure class="hero-photo">
          <img
            src="${img('1606092195730-5d7b9af1efc5', 1500)}"
            srcset="${img('1606092195730-5d7b9af1efc5', 1000)} 1000w, ${img('1606092195730-5d7b9af1efc5', 1700)} 1700w"
            sizes="(max-width: 1100px) 94vw, 1040px"
            width="1500"
            height="780"
            alt="Children laughing as they lift a bright parachute together on a sunny field"
            fetchpriority="high"
          />
        </figure>
      </section>

      <section class="stats" aria-label="Our impact">
        <div class="stat"><strong>120+</strong><span>children matched to camp</span></div>
        <div class="stat"><strong>40+</strong><span>inclusive partner camps</span></div>
        <div class="stat"><strong>12</strong><span>communities served</span></div>
        <div class="stat"><strong>100%</strong><span>needs-first approach</span></div>
      </section>

      <section class="band about" id="mission">
        <div class="wrap section-head center">
          <p class="kicker kicker-pink">Our mission</p>
          <h2>We remove the friction that keeps children from camp</h2>
          <p class="lead">
            Through practical matching, funding support, and strong partner relationships,
            we help families move from uncertainty to a clear plan — and more kids get to
            say yes to camp.
          </p>
        </div>

        <div class="wrap card-row">
          <article class="soft-card sc-pink">
            <span class="sc-icon" aria-hidden="true">🎯</span>
            <h3>Match the right experience</h3>
            <p>Compare options, understand camp environments, and find programs that fit a child's needs and interests.</p>
          </article>
          <article class="soft-card sc-green">
            <span class="sc-icon" aria-hidden="true">💛</span>
            <h3>Open the door with funding</h3>
            <p>Connect donors and sponsors to bursaries, reducing the cost barriers that stop children taking part.</p>
          </article>
          <article class="soft-card sc-blue">
            <span class="sc-icon" aria-hidden="true">🤝</span>
            <h3>Grow a welcoming network</h3>
            <p>Build relationships with camps committed to inclusion, so every child arrives somewhere ready to welcome them.</p>
          </article>
        </div>
      </section>

      <section class="band nurture" id="why">
        <div class="wrap nurture-grid">
          <figure class="nurture-media">
            <img
              src="${img('1517164850305-99a3e65bb47e', 900)}"
              srcset="${img('1517164850305-99a3e65bb47e', 700)} 700w, ${img('1517164850305-99a3e65bb47e', 1100)} 1100w"
              sizes="(max-width: 900px) 92vw, 44vw"
              width="900"
              height="900"
              loading="lazy"
              alt="A group of children pulling together in a friendly game of tug-of-war"
            />
          </figure>

          <div class="nurture-copy">
            <p class="kicker kicker-purple">Why camp matters</p>
            <h2>More than time away — it's practice for belonging</h2>
            <ul class="feature-rows">
              <li>
                <span class="fr-icon icon-green" aria-hidden="true">🌱</span>
                <div><h3>Confidence &amp; belonging</h3><p>Children feel safe, seen, and encouraged by trusted adults.</p></div>
              </li>
              <li>
                <span class="fr-icon icon-blue" aria-hidden="true">🧭</span>
                <div><h3>Resilience for everyday life</h3><p>New routines and outdoor experiences build skills that carry into school and home.</p></div>
              </li>
              <li>
                <span class="fr-icon icon-orange" aria-hidden="true">🤗</span>
                <div><h3>Community that pulls together</h3><p>It works best when families, camps, and donors move in the same direction.</p></div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="band activities" id="how">
        <div class="wrap section-head">
          <p class="kicker kicker-blue">How it works</p>
          <h2>How a match comes together</h2>
        </div>

        <ol class="wrap activity-list">
          <li>
            <span class="act-num">01</span>
            <span class="act-icon icon-pink" aria-hidden="true">👂</span>
            <div><h3>Listen first</h3><p>Start with a child's interests, support needs, schedule, and what would help the family feel confident saying yes.</p></div>
          </li>
          <li>
            <span class="act-num">02</span>
            <span class="act-icon icon-green" aria-hidden="true">🧩</span>
            <div><h3>Match the opportunity</h3><p>Compare programs, align practical details, and identify where financial assistance or partner coordination is needed.</p></div>
          </li>
          <li>
            <span class="act-num">03</span>
            <span class="act-icon icon-purple" aria-hidden="true">🎉</span>
            <div><h3>Champion the experience</h3><p>Bring together donors, volunteers, and camps to help the child arrive supported, prepared, and welcomed.</p></div>
          </li>
        </ol>
      </section>

      <section class="band involve" id="involve">
        <div class="wrap section-head center">
          <p class="kicker kicker-pink">Get involved</p>
          <h2>Back the next child's camp story</h2>
          <p class="lead">Whether you give, volunteer, or open your camp to more families, you help turn access into action.</p>
        </div>

        <div class="wrap card-row">
          <a class="soft-card sc-pink link-card" href="mailto:hello@campmatchkidssociety.org?subject=Support%20Camp%20Match%20Kids%20Society">
            <span class="sc-icon" aria-hidden="true">❤️</span>
            <h3>Give</h3>
            <p>Direct support reduces cost barriers and helps more children reach a camp that fits.</p>
            <span class="card-go">Start giving →</span>
          </a>
          <a class="soft-card sc-green link-card" href="mailto:hello@campmatchkidssociety.org?subject=Volunteer%20With%20Camp%20Match%20Kids%20Society">
            <span class="sc-icon" aria-hidden="true">✨</span>
            <h3>Volunteer</h3>
            <p>Bring coordination, mentorship, or outreach skills to the families and programs that need them.</p>
            <span class="card-go">Lend a hand →</span>
          </a>
          <a class="soft-card sc-blue link-card" href="mailto:hello@campmatchkidssociety.org?subject=Partner%20With%20Camp%20Match%20Kids%20Society">
            <span class="sc-icon" aria-hidden="true">⛺</span>
            <h3>Partner</h3>
            <p>Connect as a camp, sponsor, or community organisation ready to widen the path to participation.</p>
            <span class="card-go">Partner with us →</span>
          </a>
        </div>
      </section>

      <section class="cta-band">
        <div class="wrap cta-inner">
          <h2>Help a child say yes to camp this summer</h2>
          <a class="btn btn-pink btn-lg" href="#involve">Get involved <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="wrap footer-inner">
        <a class="brand" href="#top" aria-label="Camp Match Kids Society home">
          <span class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7Z" fill="currentColor" />
              <circle cx="12" cy="9" r="2.6" fill="#fff" />
            </svg>
          </span>
          <strong>Camp Match Kids Society</strong>
        </a>
        <p>Replace the placeholder email links and impact numbers with your live details when you are ready.</p>
      </div>
    </footer>
  </div>
`
