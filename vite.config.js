import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// Served from the custom domain root (campmatchkidssociety.ca via GitHub Pages),
// so assets are referenced from "/". (Was "/CampMatch-Kids-Society/" before the
// custom domain — revert to that only if the custom domain is ever removed.)
export default defineConfig({
  base: '/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        faq: 'faq/index.html',
      },
    },
  },
})
