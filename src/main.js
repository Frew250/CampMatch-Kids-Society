import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="page">
    <header class="site-header reveal">
      <a class="brand" href="#top" aria-label="Camp Match Kids Society home">
        <span class="brand-mark">CM</span>
        <span class="brand-text">
          <strong>Camp Match</strong>
          <span>Kids Society</span>
        </span>
      </a>

      <nav class="site-nav" aria-label="Primary">
        <a href="#mission">Mission</a>
        <a href="#programs">Programs</a>
        <a href="#join">Get involved</a>
      </nav>

      <a class="button button-small button-ghost" href="#join">Support now</a>
    </header>

    <main>
      <section class="section hero" id="top">
        <div class="hero-copy reveal delay-1">
          <p class="eyebrow">Camp access for every child</p>
          <h1>Helping kids find the kind of summer that changes everything.</h1>
          <p class="lead">
            Camp Match Kids Society connects families, camp partners, and community
            supporters so more children can experience safety, belonging, and joy.
          </p>

          <div class="hero-actions">
            <a class="button button-primary" href="#join">Get involved</a>
            <a class="button button-secondary" href="#mission">See how we help</a>
          </div>

          <ul class="hero-list" aria-label="Key priorities">
            <li>Family-first camp matching</li>
            <li>Needs-based bursary support</li>
            <li>Inclusive partner camp network</li>
          </ul>
        </div>

        <div class="hero-panel reveal delay-2" aria-hidden="true">
          <div class="hero-glow hero-glow-one"></div>
          <div class="hero-glow hero-glow-two"></div>

          <article class="feature-panel card-main">
            <span class="chip">What we make possible</span>
            <h2>One well-matched camp can shift a whole year.</h2>
            <p>
              When a child lands in the right place, confidence grows fast. New
              friendships, trusted adults, and joyful routines can ripple far beyond
              summer.
            </p>
          </article>

          <article class="feature-panel card-note">
            <span class="mini-label">Built around families</span>
            <strong>Less searching. More clarity.</strong>
            <p>
              We help families navigate options, support needs, and next steps with a
              practical, welcoming process.
            </p>
          </article>

          <article class="feature-panel card-stats">
            <span class="mini-label">Our focus</span>
            <strong>Access, belonging, and strong camp partners.</strong>
            <p>
              The goal is simple: remove cost and coordination barriers so more kids
              can say yes to camp.
            </p>
          </article>
        </div>
      </section>

      <section class="promise-band reveal delay-2">
        <p>
          We work so a family&apos;s first question is not &quot;Can we make camp happen?&quot;
          but &quot;Which camp is the right fit for our child?&quot;
        </p>
      </section>

      <section class="section split-section" id="mission">
        <div class="section-intro reveal">
          <p class="eyebrow">Our mission</p>
          <h2>We remove the friction that keeps children from camp.</h2>
          <p>
            Through practical matching, funding support, and strong partner
            relationships, we help families move from uncertainty to a clear plan.
          </p>
        </div>

        <div class="mission-grid">
          <article class="info-card reveal delay-1">
            <span class="card-index">01</span>
            <h3>Match families to the right experience</h3>
            <p>
              We help parents compare options, understand camp environments, and find
              programs that fit their child&apos;s needs and interests.
            </p>
          </article>

          <article class="info-card reveal delay-2">
            <span class="card-index">02</span>
            <h3>Open the door through funding support</h3>
            <p>
              We connect donors and sponsors to bursaries, reducing cost barriers that
              stop children from participating.
            </p>
          </article>

          <article class="info-card reveal delay-3">
            <span class="card-index">03</span>
            <h3>Strengthen a welcoming camp network</h3>
            <p>
              We work with camp partners who care about access, inclusion, and a safe
              environment where children can thrive.
            </p>
          </article>
        </div>
      </section>

      <section class="section pathway" id="programs">
        <div class="section-intro narrow reveal">
          <p class="eyebrow">How it works</p>
          <h2>A simple pathway from interest to camp day.</h2>
          <p>
            The process stays human and practical at every step so families know what
            comes next and supporters can see where they make a difference.
          </p>
        </div>

        <div class="pathway-steps">
          <article class="step-card reveal delay-1">
            <span class="step-index">Step 1</span>
            <h3>Listen first</h3>
            <p>
              Start with a child&apos;s interests, support needs, schedule, and what would
              help the family feel confident saying yes.
            </p>
          </article>

          <article class="step-card reveal delay-2">
            <span class="step-index">Step 2</span>
            <h3>Match the opportunity</h3>
            <p>
              Compare programs, align practical details, and identify where financial
              assistance or partner coordination is needed.
            </p>
          </article>

          <article class="step-card reveal delay-3">
            <span class="step-index">Step 3</span>
            <h3>Champion the experience</h3>
            <p>
              Bring together donors, volunteers, and camps to help the child arrive
              supported, prepared, and welcomed.
            </p>
          </article>
        </div>
      </section>

      <section class="section spotlight">
        <div class="spotlight-copy reveal">
          <p class="eyebrow">Why camp matters</p>
          <h2>Camp is more than time away. It is practice for belonging.</h2>
          <p>
            In the right camp environment, children build confidence, try new things,
            and experience what it feels like to be included in a caring community.
          </p>
        </div>

        <div class="values-panel reveal delay-1">
          <div class="value-row">
            <span class="value-dot"></span>
            <p>
              Belonging grows when children feel safe, seen, and encouraged by trusted
              adults.
            </p>
          </div>
          <div class="value-row">
            <span class="value-dot"></span>
            <p>
              New routines and outdoor experiences can build resilience that carries
              into school and everyday life.
            </p>
          </div>
          <div class="value-row">
            <span class="value-dot"></span>
            <p>
              Community support works best when families, camps, and donors move in the
              same direction.
            </p>
          </div>
        </div>
      </section>

      <section class="section action-section" id="join">
        <div class="action-panel reveal">
          <p class="eyebrow">Get involved</p>
          <h2>Back the next child&apos;s camp story.</h2>
          <p>
            Whether you give, volunteer, or open your camp to more families, you help
            turn access into action.
          </p>
        </div>

        <div class="action-grid">
          <a
            class="action-card reveal delay-1"
            href="mailto:hello@campmatchkidssociety.org?subject=Support%20Camp%20Match%20Kids%20Society"
          >
            <span>Give</span>
            <strong>Help fund camp spaces</strong>
            <p>
              Direct support can reduce cost barriers and help more children reach a
              camp that fits.
            </p>
          </a>

          <a
            class="action-card reveal delay-2"
            href="mailto:hello@campmatchkidssociety.org?subject=Volunteer%20With%20Camp%20Match%20Kids%20Society"
          >
            <span>Volunteer</span>
            <strong>Offer time and practical help</strong>
            <p>
              Bring coordination, mentorship, or community outreach skills to the
              families and programs that need them.
            </p>
          </a>

          <a
            class="action-card reveal delay-3"
            href="mailto:hello@campmatchkidssociety.org?subject=Partner%20With%20Camp%20Match%20Kids%20Society"
          >
            <span>Partner</span>
            <strong>Grow an inclusive camp network</strong>
            <p>
              Connect as a camp, sponsor, or community organization ready to widen the
              path to participation.
            </p>
          </a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p>Camp Match Kids Society</p>
      <p>
        Replace the placeholder email links with your live contact and donation pages
        when you are ready.
      </p>
    </footer>
  </div>
`
