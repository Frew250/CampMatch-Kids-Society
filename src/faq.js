import './style.css'
import { base, mail, eyebrow, h2cls, wrap, sectionY, siteHeader, siteFooter, faqAccordion, btnPrimary, btnGhostLight } from './shared.js'

document.querySelector('#app').innerHTML = `
  ${siteHeader('faq')}

  <main id="main">
    <section class="bg-sage">
      <div class="${wrap} ${sectionY}">
        <div class="mx-auto max-w-[760px] text-center">
          <p class="${eyebrow} text-eyebrow">FAQ</p>
          <h1 class="mt-3 ${h2cls} text-ink">Questions, answered</h1>
          <p class="mt-4 text-lg text-muted">Everything you might be wondering about Camp Match Kids Society.</p>
        </div>

        <div class="mt-12">${faqAccordion()}</div>

        <div class="mx-auto mt-12 max-w-[820px] rounded-[22px] bg-white p-6 text-center shadow-sm md:p-9">
          <h2 class="text-2xl text-ink">Still have a question?</h2>
          <p class="mx-auto mt-2 max-w-md text-muted">We'd love to hear from you, whether you run a camp, want to help, or just want to learn more.</p>
          <div class="mt-6 flex flex-wrap justify-center gap-3">
            <a href="${mail('Hello from your website')}" class="${btnPrimary}">Get in touch</a>
            <a href="${base}involved/" class="${btnGhostLight}">Get involved</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  ${siteFooter()}
`
