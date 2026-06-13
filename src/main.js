import './style.css'

const PHOTO = 'https://images.unsplash.com/photo-'
const img = (id, w) => `${PHOTO}${id}?auto=format&fit=crop&w=${w}&q=80`

document.querySelector('#app').innerHTML = `
  <div class="page">
    <header class="masthead">
      <a class="brand" href="#top" aria-label="Camp Match Kids Society home">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" width="30" height="30">
            <path d="M16 4 4 27h24L16 4Z" fill="currentColor" />
            <path d="M16 12 9.5 24h13L16 12Z" fill="rgba(255,255,255,0.4)" />
          </svg>
        </span>
        <span class="brand-text">
          <strong>Camp Match</strong>
          <span>Kids Society</span>
        </span>
      </a>

      <nav class="masthead-nav" aria-label="Primary">
        <a href="#mission">Mission</a>
        <a href="#journey">How it works</a>
        <a href="#involve">Get involved</a>
      </nav>

      <a class="btn btn-solid btn-sm" href="#involve">Support now</a>
    </header>

    <main>
      <section class="hero" id="top">
        <div class="hero-text">
          <span class="badge">Camp access for every kid</span>
          <h1>Helping kids find the kind of summer that changes everything.</h1>
          <p class="lead">
            Camp Match Kids Society connects families, camp partners, and community
            supporters so more children can experience safety, belonging, and joy.
          </p>

          <div class="hero-actions">
            <a class="btn btn-solid" href="#involve">Get involved</a>
            <a class="btn btn-line" href="#mission">See how we help</a>
          </div>

          <ul class="trust-row" aria-label="Key priorities">
            <li>Family-first matching</li>
            <li>Needs-based bursaries</li>
            <li>Inclusive camp network</li>
          </ul>
        </div>

        <div class="hero-media">
          <img
            class="hero-photo"
            src="${img('1606092195730-5d7b9af1efc5', 1200)}"
            srcset="${img('1606092195730-5d7b9af1efc5', 800)} 800w, ${img('1606092195730-5d7b9af1efc5', 1400)} 1400w"
            sizes="(max-width: 940px) 92vw, 46vw"
            width="1200"
            height="1100"
            alt="Children laughing as they lift a bright parachute together on a sunny field"
            fetchpriority="high"
          />
          <span class="media-sticker" aria-hidden="true">Summer, sorted ☀️</span>
        </div>
      </section>

      <section class="promise">
        <p>
          We work so a family&apos;s first question is not &quot;Can we make camp happen?&quot;
          but &quot;Which camp is the right fit for our child?&quot;
        </p>
      </section>

      <section class="section mission" id="mission">
        <div class="mission-media">
          <img
            src="${img('1638202951770-2240942c7d1c', 900)}"
            srcset="${img('1638202951770-2240942c7d1c', 700)} 700w, ${img('1638202951770-2240942c7d1c', 1100)} 1100w"
            sizes="(max-width: 940px) 92vw, 42vw"
            width="900"
            height="900"
            loading="lazy"
            alt="Kids relaxing together in a hammock among the trees at camp"
          />
        </div>

        <div class="mission-body">
          <h2>We remove the friction that keeps children from camp.</h2>
          <p class="section-lead">
            Through practical matching, funding support, and strong partner
            relationships, we help families move from uncertainty to a clear plan.
          </p>

          <ul class="mission-list">
            <li>
              <h3>Match families to the right experience</h3>
              <p>
                We help parents compare options, understand camp environments, and find
                programs that fit their child&apos;s needs and interests.
              </p>
            </li>
            <li>
              <h3>Open the door through funding support</h3>
              <p>
                We connect donors and sponsors to bursaries, reducing cost barriers that
                stop children from taking part.
              </p>
            </li>
            <li>
              <h3>Grow a welcoming partner network</h3>
              <p>
                We build relationships with camps committed to inclusion, so every child
                we match arrives somewhere ready to welcome them.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section class="section journey" id="journey">
        <div class="journey-head">
          <h2>How a match comes together</h2>
          <p>Three steps, built around the family from the very first conversation.</p>
        </div>

        <ol class="journey-steps">
          <li>
            <span class="step-num">1</span>
            <h3>Listen first</h3>
            <p>
              Start with a child&apos;s interests, support needs, schedule, and what would
              help the family feel confident saying yes.
            </p>
          </li>
          <li>
            <span class="step-num">2</span>
            <h3>Match the opportunity</h3>
            <p>
              Compare programs, align practical details, and identify where financial
              assistance or partner coordination is needed.
            </p>
          </li>
          <li>
            <span class="step-num">3</span>
            <h3>Champion the experience</h3>
            <p>
              Bring together donors, volunteers, and camps to help the child arrive
              supported, prepared, and welcomed.
            </p>
          </li>
        </ol>
      </section>

      <section class="section why">
        <div class="why-copy">
          <h2>Camp is more than time away. It is practice for belonging.</h2>
          <p class="section-lead">
            In the right camp environment, children build confidence, try new things,
            and experience what it feels like to be included in a caring community.
          </p>

          <div class="why-points">
            <p>
              Belonging grows when children feel safe, seen, and encouraged by trusted
              adults.
            </p>
            <p>
              New routines and outdoor experiences can build resilience that carries into
              school and everyday life.
            </p>
            <p>
              Community support works best when families, camps, and donors move in the
              same direction.
            </p>
          </div>
        </div>

        <div class="why-media">
          <img
            src="${img('1517164850305-99a3e65bb47e', 900)}"
            srcset="${img('1517164850305-99a3e65bb47e', 700)} 700w, ${img('1517164850305-99a3e65bb47e', 1100)} 1100w"
            sizes="(max-width: 940px) 92vw, 42vw"
            width="900"
            height="1000"
            loading="lazy"
            alt="A group of children pulling together in a friendly game of tug-of-war"
          />
        </div>
      </section>

      <section class="section involve" id="involve">
        <div class="involve-head">
          <h2>Back the next child&apos;s camp story.</h2>
          <p class="section-lead">
            Whether you give, volunteer, or open your camp to more families, you help
            turn access into action.
          </p>
        </div>

        <div class="involve-grid">
          <a
            class="involve-card card-give"
            href="mailto:hello@campmatchkidssociety.org?subject=Support%20Camp%20Match%20Kids%20Society"
          >
            <span class="involve-role">Give</span>
            <strong>Help fund camp spaces</strong>
            <p>
              Direct support can reduce cost barriers and help more children reach a
              camp that fits.
            </p>
            <span class="involve-go" aria-hidden="true">Start giving &rarr;</span>
          </a>

          <a
            class="involve-card card-volunteer"
            href="mailto:hello@campmatchkidssociety.org?subject=Volunteer%20With%20Camp%20Match%20Kids%20Society"
          >
            <span class="involve-role">Volunteer</span>
            <strong>Offer time and practical help</strong>
            <p>
              Bring coordination, mentorship, or community outreach skills to the
              families and programs that need them.
            </p>
            <span class="involve-go" aria-hidden="true">Lend a hand &rarr;</span>
          </a>

          <a
            class="involve-card card-partner"
            href="mailto:hello@campmatchkidssociety.org?subject=Partner%20With%20Camp%20Match%20Kids%20Society"
          >
            <span class="involve-role">Partner</span>
            <strong>Grow an inclusive camp network</strong>
            <p>
              Connect as a camp, sponsor, or community organization ready to widen the
              path to participation.
            </p>
            <span class="involve-go" aria-hidden="true">Partner with us &rarr;</span>
          </a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-brand">
        <span class="brand-mark brand-mark-sm" aria-hidden="true">
          <svg viewBox="0 0 32 32" width="22" height="22">
            <path d="M16 4 4 27h24L16 4Z" fill="currentColor" />
          </svg>
        </span>
        <strong>Camp Match Kids Society</strong>
      </div>
      <p>
        Replace the placeholder email links with your live contact and donation pages
        when you are ready.
      </p>
    </footer>
  </div>
`
