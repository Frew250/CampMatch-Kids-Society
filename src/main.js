import './style.css'

const PHOTO = 'https://images.unsplash.com/photo-'
const img = (id, w) => `${PHOTO}${id}?auto=format&fit=crop&w=${w}&q=80`

document.querySelector('#app').innerHTML = `
  <header class="nav">
    <div class="nav-inner">
      <a class="brand" href="#top" aria-label="Camp Match Kids Society home">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7Z" fill="currentColor" />
            <circle cx="12" cy="9" r="2.6" fill="#ffffff" />
          </svg>
        </span>
        <span class="brand-text">
          <strong>Camp Match</strong>
          <span>Kids Society</span>
        </span>
      </a>

      <nav class="nav-links" aria-label="Primary">
        <a href="#mission">Mission</a>
        <a href="#journey">How it works</a>
        <a href="#involve">Get involved</a>
      </nav>

      <a class="btn btn-primary btn-sm" href="#involve">Support now</a>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-copy">
          <h1>Helping kids find the kind of summer that <span class="hl">changes everything.</span></h1>
          <p class="lead">
            Camp Match Kids Society connects families, camp partners, and community
            supporters so more children can experience safety, belonging, and joy.
          </p>

          <div class="hero-cta">
            <a class="btn btn-primary" href="#involve">Get involved</a>
            <a class="btn btn-secondary" href="#mission">See how we help</a>
          </div>

          <ul class="hero-points" aria-label="What we do">
            <li>Family-first matching</li>
            <li>Needs-based bursaries</li>
            <li>Inclusive camp network</li>
          </ul>
        </div>

        <div class="hero-figure">
          <img
            src="${img('1606092195730-5d7b9af1efc5', 1100)}"
            srcset="${img('1606092195730-5d7b9af1efc5', 800)} 800w, ${img('1606092195730-5d7b9af1efc5', 1300)} 1300w"
            sizes="(max-width: 900px) 92vw, 46vw"
            width="1100"
            height="1280"
            alt="Children laughing as they lift a bright parachute together on a sunny field"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>

    <section class="promise">
      <div class="promise-inner">
        <p>
          We work so a family&apos;s first question is not <span class="promise-soft">&quot;Can we make camp happen?&quot;</span>
          but &quot;Which camp is the right fit for our child?&quot;
        </p>
      </div>
    </section>

    <section class="section split" id="mission">
      <div class="split-media">
        <img
          src="${img('1638202951770-2240942c7d1c', 900)}"
          srcset="${img('1638202951770-2240942c7d1c', 700)} 700w, ${img('1638202951770-2240942c7d1c', 1100)} 1100w"
          sizes="(max-width: 900px) 92vw, 44vw"
          width="900"
          height="900"
          loading="lazy"
          alt="Kids relaxing together in a hammock among the trees at camp"
        />
      </div>

      <div class="split-copy">
        <span class="kicker">Our mission</span>
        <h2>We remove the friction that keeps children from camp.</h2>
        <p class="lead">
          Through practical matching, funding support, and strong partner relationships,
          we help families move from uncertainty to a clear plan.
        </p>

        <ul class="feature-list">
          <li>
            <h3>Match families to the right experience</h3>
            <p>Compare options, understand camp environments, and find programs that fit a child&apos;s needs and interests.</p>
          </li>
          <li>
            <h3>Open the door through funding support</h3>
            <p>Connect donors and sponsors to bursaries, reducing the cost barriers that stop children taking part.</p>
          </li>
          <li>
            <h3>Grow a welcoming partner network</h3>
            <p>Build relationships with camps committed to inclusion, so every child arrives somewhere ready to welcome them.</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="section journey" id="journey">
      <div class="section-head">
        <span class="kicker">How it works</span>
        <h2>How a match comes together</h2>
        <p class="lead">Three steps, built around the family from the very first conversation.</p>
      </div>

      <ol class="steps">
        <li>
          <span class="step-num">1</span>
          <h3>Listen first</h3>
          <p>Start with a child&apos;s interests, support needs, schedule, and what would help the family feel confident saying yes.</p>
        </li>
        <li>
          <span class="step-num">2</span>
          <h3>Match the opportunity</h3>
          <p>Compare programs, align practical details, and identify where financial assistance or partner coordination is needed.</p>
        </li>
        <li>
          <span class="step-num">3</span>
          <h3>Champion the experience</h3>
          <p>Bring together donors, volunteers, and camps to help the child arrive supported, prepared, and welcomed.</p>
        </li>
      </ol>
    </section>

    <section class="section split reverse">
      <div class="split-media">
        <img
          src="${img('1517164850305-99a3e65bb47e', 900)}"
          srcset="${img('1517164850305-99a3e65bb47e', 700)} 700w, ${img('1517164850305-99a3e65bb47e', 1100)} 1100w"
          sizes="(max-width: 900px) 92vw, 44vw"
          width="900"
          height="980"
          loading="lazy"
          alt="A group of children pulling together in a friendly game of tug-of-war"
        />
      </div>

      <div class="split-copy">
        <span class="kicker">Why camp matters</span>
        <h2>More than time away. It is practice for belonging.</h2>
        <p class="lead">
          In the right environment, children build confidence, try new things, and feel
          what it means to be included in a caring community.
        </p>

        <ul class="check-list">
          <li>Belonging grows when children feel safe, seen, and encouraged by trusted adults.</li>
          <li>New routines and outdoor experiences build resilience that carries into everyday life.</li>
          <li>Support works best when families, camps, and donors move in the same direction.</li>
        </ul>
      </div>
    </section>

    <section class="section involve" id="involve">
      <div class="section-head center">
        <span class="kicker">Get involved</span>
        <h2>Back the next child&apos;s camp story</h2>
        <p class="lead">Whether you give, volunteer, or open your camp to more families, you help turn access into action.</p>
      </div>

      <div class="card-grid">
        <a class="action-card" href="mailto:hello@campmatchkidssociety.org?subject=Support%20Camp%20Match%20Kids%20Society">
          <span class="action-icon icon-give" aria-hidden="true">♥</span>
          <h3>Give</h3>
          <p>Direct support reduces cost barriers and helps more children reach a camp that fits.</p>
          <span class="action-go">Start giving <span aria-hidden="true">&rarr;</span></span>
        </a>

        <a class="action-card" href="mailto:hello@campmatchkidssociety.org?subject=Volunteer%20With%20Camp%20Match%20Kids%20Society">
          <span class="action-icon icon-volunteer" aria-hidden="true">✦</span>
          <h3>Volunteer</h3>
          <p>Bring coordination, mentorship, or outreach skills to the families and programs that need them.</p>
          <span class="action-go">Lend a hand <span aria-hidden="true">&rarr;</span></span>
        </a>

        <a class="action-card" href="mailto:hello@campmatchkidssociety.org?subject=Partner%20With%20Camp%20Match%20Kids%20Society">
          <span class="action-icon icon-partner" aria-hidden="true">⛺</span>
          <h3>Partner</h3>
          <p>Connect as a camp, sponsor, or community organisation ready to widen the path to participation.</p>
          <span class="action-go">Partner with us <span aria-hidden="true">&rarr;</span></span>
        </a>
      </div>
    </section>

    <section class="cta-band">
      <div class="cta-inner">
        <h2>Help a child say yes to camp this summer.</h2>
        <a class="btn btn-primary" href="#involve">Get involved</a>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="footer-inner">
      <a class="brand" href="#top" aria-label="Camp Match Kids Society home">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7Z" fill="currentColor" />
            <circle cx="12" cy="9" r="2.6" fill="#ffffff" />
          </svg>
        </span>
        <span class="brand-text">
          <strong>Camp Match</strong>
          <span>Kids Society</span>
        </span>
      </a>
      <p>Replace the placeholder email links with your live contact and donation pages when you are ready.</p>
    </div>
  </footer>
`
