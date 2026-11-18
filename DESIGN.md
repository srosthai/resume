# Design

<!-- impeccable:design-schema 1 -->

## World

A black-and-white technical resume with one physical object in the hero: a lanyard badge. The page is a clean document, not a textured editorial pastiche. Pure paper white in light mode, near-black in dark mode, a single sans family, hairline rules, and one high-contrast navigation pill. No grain, no cream, no serif, no decorative dots.

## Palette

| Token | Light | Dark | Role |
| --- | --- | --- | --- |
| Paper | `#FFFFFF` | `#0A0A0A` | Page ground |
| Paper lift | `#F5F5F5` | `#131313` | Image wells and quiet surfaces |
| Ink | `#0A0A0A` | `#F5F5F5` | Primary text |
| Ink soft | `#3D3D3D` | `#C9C9C9` | Body copy |
| Muted | `#737373` | `#8A8A8A` | Labels and metadata |
| Line | `#E2E2E2` | `#262626` | Hairline rules |
| Band | `#0A0A0A` | `#050505` | Contact band |
| Band ink | `#FFFFFF` | `#F5F5F5` | Text on the contact band |

The palette is intentionally monochrome. The portrait is the only color in the interface, and only where the photograph itself provides it.

## Typography

- Display and body: Archivo Variable. Display weights 500–600, body 400.
- Metadata: IBM Plex Mono 400, used only for dates, stack tags, captions, and section labels.
- Minimum UI type size: 13px. No label, tag, caption, or footer line goes below it.
- Type scale: hero name `clamp(54px, 7.6vw, 84px)`; section headings 23–29px; body 14–18px; metadata 13px.
- No serif family and no italic display treatment.

## Layout

- Shell: max 1180px, side padding `clamp(20px, 5vw, 64px)`.
- Desktop hero: copy column plus a 380–460px lanyard column. The card hangs fully inside its canvas; the hero fills the first screen and About starts below it.
- Sections: 150px label rail plus a content column, separated by hairlines. Labels stick on desktop and sit inline on mobile.
- Projects: editorial rows with a 240px media well and a text column; stacked on mobile.
- Navigation: React Bits `GooeyNav` on desktop. A compact text nav remains on mobile.
- Mobile hero: a static lanyard card (same artwork) centers above the name; the name stays left aligned; body type stays at or above 13px. Desktop uses the interactive Three.js Lanyard.

## Motion

- Scroll: one React Bits `AnimatedContent` reveal per section. 24px rise, opacity 0→1, 700ms, `power3.out`, once. No per-card cascade, blur, or tilt.
- Navigation: `GooeyNav` gooey pill/fleck transition between active sections.
- Hero: the name rises letter by letter once. The lanyard stays static so the whole badge is always visible.
- Theme: circular View Transition reveal from the toggle, with a short color fallback.
- Reduced motion disables the name rise, scroll reveal, gooey motion, and theme reveal.

## Components

- `Lanyard` — static hero profile badge; portrait and contact card.
- `GooeyNav` — desktop section navigation.
- `SpotlightCard` — project rows with a restrained monochrome spotlight.
- `SpecularButton` — email action on the contact band, rendered as a link.
- `ShinyText` — role line, light and dark variants.
- `AnimatedContent` — the single scroll-reveal primitive.
- `Section` — shared label rail layout.
- `ThemeToggle` — inline script and static button; no framework needed.

## Do / Don't

- Do keep the page black, white, and gray.
- Do keep one scroll motion and one type family.
- Do keep every small label at 13px or larger.
- Do keep the lanyard fully visible in its hero canvas.
- Don't reintroduce paper grain, dotted textures, cream, serifs, or gradient decoration.
- Don't invent employers, metrics, certifications, or availability claims.
