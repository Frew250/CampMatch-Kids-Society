# Camp Match Kids Society

Marketing website for Camp Match Kids Society — connecting families, camp
partners, and donors so more children can access safe, welcoming summer camp
experiences.

**Live site:** https://frew250.github.io/CampMatch-Kids-Society/

## Tech

A lightweight single-page static site built with [Vite](https://vite.dev/)
(vanilla JavaScript, no framework).

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start local dev server with live reload
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build & deploy

```bash
npm run build    # output static site to dist/
npm run preview  # serve the built site locally to check it
```

Deployment is automatic: every push to `main` is built and published to
GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

## Project layout

```
index.html          # HTML shell, loads src/main.js
src/main.js         # page content (rendered into #app)
src/style.css       # all styles
public/             # static assets (favicon, etc.)
vite.config.js      # Vite config (base path for GitHub Pages)
```
