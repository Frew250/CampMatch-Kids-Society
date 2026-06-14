import './vendor/grayscale.css'
import './brand.css'

const base = import.meta.env.BASE_URL
const img = (id, w) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`
const mail = (s) => `mailto:hello@campmatchkidssociety.org?subject=${encodeURIComponent(s)}`

document.querySelector('#app').innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="#page-top"><img src="${base}logo.png" alt="Camp Match Kids Society" /></a>
      <button class="navbar-toggler navbar-toggler-right" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#about">What we do</a></li>
          <li class="nav-item"><a class="nav-link" href="#how">How it works</a></li>
          <li class="nav-item"><a class="nav-link" href="#signup">Get involved</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <header class="masthead">
    <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
      <div class="d-flex justify-content-center">
        <div class="text-center">
          <h1 class="mx-auto my-0 text-uppercase">Camp for every kid</h1>
          <h2 class="text-white-50 mx-auto mt-2 mb-5">
            We help kids whose families can't swing the cost get to summer camp —
            covering fees and opening up free and discounted spots.
          </h2>
          <a class="btn btn-primary" href="${mail('Keep me posted')}">Keep me posted</a>
        </div>
      </div>
    </div>
  </header>

  <section class="about-section text-center" id="about">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-lg-8">
          <h2 class="text-white mb-4">We make camp reachable</h2>
          <p class="text-white-50">
            Cost is the wall between a lot of kids and a summer that matters. We take it
            down — raising funds to cover camp fees, working with camps to open up free
            and discounted spots, and keeping it kind: families come to us about their
            kid's summer, never to prove they're in need.
          </p>
        </div>
      </div>
      <div class="row gx-4 gx-lg-5 justify-content-center cm-facts">
        <div class="col-md-4 mb-4">
          <i class="fas fa-people-group text-primary"></i>
          <div class="fw-bold text-white mt-2">A board in place</div>
          <div class="text-white-50 small">ready to incorporate as a BC nonprofit</div>
        </div>
        <div class="col-md-4 mb-4">
          <i class="fas fa-campground text-primary"></i>
          <div class="fw-bold text-white mt-2">Camps on board</div>
          <div class="text-white-50 small">already offering spots</div>
        </div>
        <div class="col-md-4 mb-4">
          <i class="fas fa-heart text-primary"></i>
          <div class="fw-bold text-white mt-2">Supporters stepping up</div>
          <div class="text-white-50 small">already offering to help</div>
        </div>
      </div>
    </div>
  </section>

  <section class="projects-section bg-light" id="how">
    <div class="container px-4 px-lg-5">
      <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
        <div class="col-xl-8 col-lg-7">
          <img class="img-fluid mb-3 mb-lg-0" src="${img('1517164850305-99a3e65bb47e', 1100)}" alt="Children playing together outdoors at camp" />
        </div>
        <div class="col-xl-4 col-lg-5">
          <div class="featured-text text-center text-lg-left">
            <h4>Tell us about your kid</h4>
            <p class="text-black-50 mb-0">
              A parent reaches out about their child's summer — their interests, their
              needs, and what would help the family feel confident saying yes.
            </p>
          </div>
        </div>
      </div>

      <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
        <div class="col-lg-6">
          <img class="img-fluid" src="${img('1638202951770-2240942c7d1c', 900)}" alt="Kids relaxing in a hammock among the trees at camp" />
        </div>
        <div class="col-lg-6">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <h4 class="text-white">We find a fit and fund it</h4>
                <p class="mb-0 text-white-50">
                  We match the child to a partner camp and cover the cost, sorting the
                  practical details along the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row gx-0 justify-content-center">
        <div class="col-lg-6">
          <img class="img-fluid" src="${img('1472745942893-4b9f730c7668', 900)}" alt="A child paddleboarding across a calm lake at camp" />
        </div>
        <div class="col-lg-6 order-lg-first">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-right">
                <h4 class="text-white">Off to camp</h4>
                <p class="mb-0 text-white-50">
                  The kid gets the summer — friendships, confidence, time outside — and
                  the family doesn't carry the cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="signup-section" id="signup">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5">
        <div class="col-md-10 col-lg-8 mx-auto text-center">
          <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
          <h2 class="text-white mb-2">Want to help — or need help?</h2>
          <p class="text-white-50 mb-5">
            We're just getting started, and we'd love to know you. Leave your email and
            we'll keep you posted.
          </p>
          <form class="form-signup" id="cmSignup" novalidate>
            <div class="row input-group-newsletter">
              <div class="col">
                <input class="form-control" id="cmEmail" type="email" placeholder="Enter email address..." aria-label="Enter email address..." required />
              </div>
              <div class="col-auto"><button class="btn btn-primary" type="submit">Keep me posted</button></div>
            </div>
          </form>
          <p class="text-white-50 small mt-4 mb-0">
            Tell us who you are:
            <a class="cm-seg" href="${mail("I'm a parent — Camp Match Kids Society")}">I'm a parent</a> ·
            <a class="cm-seg" href="${mail('I run a camp — Camp Match Kids Society')}">I run a camp</a> ·
            <a class="cm-seg" href="${mail('I want to help — Camp Match Kids Society')}">I want to help</a>
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="contact-section bg-black">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5">
        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100">
            <div class="card-body text-center">
              <i class="fas fa-envelope text-primary mb-2"></i>
              <h4 class="text-uppercase m-0">Email</h4>
              <hr class="my-4 mx-auto" />
              <div class="small text-black-50"><a href="${mail('Hello from your website')}">hello@campmatchkidssociety.org</a></div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100">
            <div class="card-body text-center">
              <i class="fas fa-shield-heart text-primary mb-2"></i>
              <h4 class="text-uppercase m-0">Who we are</h4>
              <hr class="my-4 mx-auto" />
              <div class="small text-black-50">A BC nonprofit, incorporating now</div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100">
            <div class="card-body text-center">
              <i class="fas fa-link text-primary mb-2"></i>
              <h4 class="text-uppercase m-0">Our sibling</h4>
              <hr class="my-4 mx-auto" />
              <div class="small text-black-50">Separate from the for-profit <a href="https://campmatch.ca" target="_blank" rel="noopener">CampMatch.ca</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer bg-black small text-center text-white-50">
    <div class="container px-4 px-lg-5">
      Camp Match Kids Society is a BC nonprofit (incorporating) — the charitable sibling
      of, but separate from, the for-profit CampMatch.ca. Donations and tax receipts will
      open once our charitable registration is complete.
    </div>
  </footer>
`

// ---- Navbar behaviour (vanilla; no Bootstrap JS needed) ----
const nav = document.querySelector('#mainNav')
const shrink = () => {
  if (!nav) return
  nav.classList.toggle('navbar-shrink', window.scrollY !== 0)
}
shrink()
document.addEventListener('scroll', shrink)

const toggler = document.querySelector('.navbar-toggler')
const collapse = document.querySelector('#navbarResponsive')
toggler?.addEventListener('click', () => collapse?.classList.toggle('show'))
document.querySelectorAll('#navbarResponsive .nav-link').forEach((a) =>
  a.addEventListener('click', () => collapse?.classList.remove('show'))
)

// ---- Email capture → opens the visitor's mail client (no backend yet) ----
document.querySelector('#cmSignup')?.addEventListener('submit', (e) => {
  e.preventDefault()
  const email = document.querySelector('#cmEmail')?.value || ''
  const body = `Please keep me posted about Camp Match Kids Society.%0D%0AMy email: ${encodeURIComponent(email)}`
  window.location.href = `mailto:hello@campmatchkidssociety.org?subject=${encodeURIComponent('Keep me posted')}&body=${body}`
})
