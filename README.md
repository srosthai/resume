# Sros Thai — Resume

A single-page resume for Sros Thai, built with Astro and React islands. The visual direction is strict monochrome: paper white or near-black, Archivo for display and body, IBM Plex Mono for metadata, and a single interactive lanyard badge in the hero.

Live site: [resume.srosthai.me](https://resume.srosthai.me)

## Stack

- Astro 7, static output
- React 19 islands
- React Bits components, installed as source:
  - `Lanyard` for the profile badge on all screens (click to flip); static artwork shows while it loads
  - `GooeyNav` for desktop section navigation
  - `SpotlightCard` for selected project rows
  - `SpecularButton` for the email action
  - `ShinyText` for the role line
  - `AnimatedContent` for the scroll reveal
- Self-hosted Archivo and IBM Plex Mono via Fontsource
- Three.js for the lanyard, GSAP for the reveal
- No Tailwind, no backend, no database

## Commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

The production output is written to `dist/`.

## Content

All resume content lives in [`src/data/resume.ts`](src/data/resume.ts): profile, summary, work history, skills, education, and selected projects. Update that file rather than editing markup.

## Media

- `public/card-front.webp` — lanyard front
- `public/card-back.webp` — lanyard back
- `public/portrait-full.webp` — full portrait in the lightbox and JSON-LD
- `public/brand-mark.webp` — small header mark
- `public/icon-192.png`, `public/icon-512.png`, `public/favicon.ico` — full portrait icons
- `public/og-image.jpg` — 1200 × 630 social preview
- `public/logo-bbu.webp` — Build Bright University mark

## SEO

- Canonical URL and `ProfilePage` JSON-LD for `https://resume.srosthai.me/`
- Open Graph and Twitter cards using `public/og-image.jpg`
- XML sitemap via `@astrojs/sitemap`
- `robots.txt` pointing to the sitemap
- Semantic headings, one H1, descriptive alt text, and reduced-motion support

## Deploy

The site is fully static. Deploy `dist/` to Netlify, Vercel, cPanel, or any static host and point `resume.srosthai.me` at it.
