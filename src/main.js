import './style.css'

const base = import.meta.env.BASE_URL

document.querySelector('#app').innerHTML = `
  <main class="holding">
    <img class="holding-logo" src="${base}logo.png" alt="Camp Match Kids Society" width="260" height="260" />
    <p>Our new website is on the way.</p>
  </main>
`
