# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7 static site with React islands for selected React Bits components. No backend, no database. Built for deployment at `resume.srosthai.me`.

## Users

Recruiters, hiring managers, potential clients, and collaborators evaluating Sros Thai for full-stack and Laravel work. They arrive from LinkedIn, GitHub, a CV link, or a direct share, often on a phone, and need a fast read of role, experience, stack, and selected work.

## Product Purpose

A personal resume site for Sros Thai that replaces a static PDF with a concise, credible, easy-to-scan web resume. Success means a visitor understands the role, work history, technical range, and selected projects within one minute, then contacts Sros or opens a project.

## Positioning

Not a generic portfolio grid. A monochrome technical resume with evidence-first project notes, a physical lanyard badge in the hero, and a clear technical through-line from database and API to interface.

## Operating Context

Visitors scan on desktop and mobile, then open GitHub, project sites, email, or LinkedIn. The site is static and self-contained; no account, form, or backend is required.

## Capabilities and Constraints

- Single page, static, responsive, print-friendly.
- Content source of truth: `src/data/resume.ts`.
- Profile photo supplied by the owner at `IMG_1180.JPG`; used for the lanyard badge, favicon, social preview, and full-portrait lightbox.
- SEO: canonical URL, Open Graph and Twitter cards, JSON-LD for Person, ProfilePage, and WebSite, XML sitemap, robots.
- React Bits components are installed as source and must work without blocking content. Motion respects `prefers-reduced-motion`.
- Current role: Vehabooking, Full Stack Developer, Jul 2025–present. Previous role: eOcambo Technology, Backend Laravel Developer, 2023–2025. No certifications are listed because none are evidenced.

## Brand Commitments

Name: SROS THAI. Role: Full Stack Developer. Voice: direct, calm, specific. No hype, no inflated seniority, no invented proof.

## Evidence on Hand

- Public CV: `https://raw.githubusercontent.com/srosthai/Portfolio/main/public/images/Thai-CV.pdf` — work history, education, skills, contact.
- Official portfolio: `https://srosthai.me`.
- Public project archive: `https://projects.srosthai.me` — project descriptions, stacks, and covers.
- Supplied portrait: `/home/dev/Native-project/resume.portfolio/IMG_1180.JPG`.
- Existing domain: `resume.srosthai.me`.
- Existing public profiles: GitHub `srosthai`, LinkedIn `sros-thai-b491b42ab`, email `srosthai00@gmail.com`.

## Product Principles

1. Read in one minute: role, proof, and contact are never buried.
2. Evidence over adjectives: real projects, real stacks, real dates.
3. Quiet craft: one memorable interaction, disciplined everywhere else.
4. Fast by default: static HTML, optimized images, small islands, and WebGL isolated to the hero badge.
5. Honest content: omit what cannot be verified.

## Accessibility & Inclusion

Semantic document structure, one H1, visible keyboard focus, 44px minimum tap targets, AA contrast, reduced-motion support, and a readable print stylesheet.
