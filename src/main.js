import './style.css'

const base = import.meta.env.BASE_URL

document.querySelector('#app').innerHTML = `
  <main class="min-h-screen grid place-content-center justify-items-center gap-5 bg-cream px-6 text-center font-sans">
    <img src="${base}logo.png" alt="Camp Match Kids Society" class="h-28 w-auto" />
    <h1 class="text-2xl font-extrabold text-ink sm:text-3xl">Camp Match Kids Society</h1>
    <p class="max-w-prose text-teal-deep">Building something new — back soon.</p>
  </main>
`
