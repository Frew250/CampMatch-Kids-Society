import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// Repo is served from https://frew250.github.io/CampMatch-Kids-Society/
// so assets must be referenced from that sub-path in production.
export default defineConfig({
  base: '/CampMatch-Kids-Society/',
  plugins: [tailwindcss()],
})
