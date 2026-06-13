import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="page">
    <header class="masthead">
      <a class="brand" href="#top" aria-label="Camp Match Kids Society home">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" width="32" height="32">
            <path d="M16 4 4 27h24L16 4Z" fill="currentColor" />
            <path d="M16 12 9.5 24h13L16 12Z" fill="rgba(255,255,255,0.35)" />
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

      <a class="btn btn-ghost btn-sm" href="#involve">Support now</a>
    </header>

    <main>
      <section class="hero" id="top">
        <div class="hero-text">
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
            <li>Family-first camp matching</li>
            <li>Needs-based bursary support</li>
            <li>Inclusive partner camp network</li>
          </ul>
        </div>

        <div class="hero-scene" role="img" aria-label="A warm sunset over forested hills with pine trees and a campfire glow.">
          <svg viewBox="0 0 520 520" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#ffd9a0" />
                <stop offset="0.45" stop-color="#f4a14e" />
                <stop offset="1" stop-color="#c1492b" />
              </linearGradient>
              <radialGradient id="sun" cx="50%" cy="50%" r="50%">
                <stop offset="0" stop-color="#fff3dc" />
                <stop offset="0.6" stop-color="#ffd58f" />
                <stop offset="1" stop-color="#ffd58f" stop-opacity="0" />
              </radialGradient>
            </defs>

            <rect width="520" height="520" fill="url(#sky)" />
            <circle cx="260" cy="240" r="170" fill="url(#sun)" />
            <circle cx="260" cy="248" r="78" fill="#fff1d4" opacity="0.92" />

            <path d="M0 360 Q130 300 260 338 T520 332 V520 H0 Z" fill="#b8431f" />
            <path d="M0 408 Q160 356 300 392 T520 388 V520 H0 Z" fill="#8f3018" opacity="0.96" />
            <path d="M0 458 Q150 432 300 452 T520 446 V520 H0 Z" fill="#5c1e10" />

            <g fill="#3c160b">
              <path d="M86 430 l16 -54 16 54 Z" />
              <path d="M96 412 l6 -44 6 44 Z" />
              <path d="M404 438 l20 -64 20 64 Z" />
              <path d="M416 416 l8 -52 8 52 Z" />
            </g>

            <g>
              <path d="M250 506 l20 -34 M270 506 l-20 -34" stroke="#3c160b" stroke-width="6" stroke-linecap="round" />
              <path d="M236 506 q24 -40 48 0 Z" fill="#f4a14e" />
              <path d="M246 506 q14 -26 28 0 Z" fill="#ffd58f" />
            </g>
          </svg>
        </div>
      </section>

      <section class="promise">
        <p>
          We work so a family&apos;s first question is not &quot;Can we make camp happen?&quot;
          but &quot;Which camp is the right fit for our child?&quot;
        </p>
      </section>

      <section class="section mission" id="mission">
        <div class="mission-intro">
          <h2>We remove the friction that keeps children from camp.</h2>
          <p>
            Through practical matching, funding support, and strong partner
            relationships, we help families move from uncertainty to a clear plan.
          </p>
          <a class="btn btn-line" href="#involve">Help a child get there</a>
        </div>

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
          <p>
            In the right camp environment, children build confidence, try new things,
            and experience what it feels like to be included in a caring community.
          </p>
        </div>

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
      </section>

      <section class="section involve" id="involve">
        <div class="involve-head">
          <h2>Back the next child&apos;s camp story.</h2>
          <p>
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
