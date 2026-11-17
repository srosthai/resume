# Design

<!-- impeccable:design-schema 1 -->

## World

A quiet editorial resume on warm paper. The page reads like a well-set document rather than a landing page: a large serif name, a narrow reading column, hairline rules, and a portrait treated as a printed photograph. One pine accent carries links and small marks. Dark mode is the same document under low light, not a separate brand.

## Palette

| Token | Light | Dark | Role |
| --- | --- | --- | --- |
| Paper | `#F3F2ED` | `#0E1518` | Page ground |
| Paper lift | `#E9E7DF` | `#162126` | Image wells and quiet surfaces |
| Ink | `#101820` | `#F0EEE6` | Primary text |
| Ink soft | `#3F4B50` | `#B9C2BD` | Body copy |
| Muted | `#66716D` | `#8B9994` | Labels and metadata |
| Line | `#D5D2C7` | `#2A3A3F` | Hairline rules |
| Pine | `#2F5D50` | `#9DBFAE` | Links, active marks, spotlight |
| Band | `#101820` | `#18262C` | Contact band |
| Band ink | `#F3F2ED` | `#F0EEE6` | Text on the contact band |

## Typography

- Display: Newsreader Variable, 400. Large sizes use tight tracking (`-0.055em`) and a compressed line height.
- Body and UI: Archivo Variable, 400–600. Line lengths stay under about 62 characters.
- Metadata: IBM Plex Mono, 400. Used only for dates, stack tags, captions, and section labels.
- Type scale: hero name `clamp(56px, 8.1vw, 112px)`; section headings are the serif job titles and project names; body copy 14–18px; metadata 9–12px.

## Layout

- Shell: max 1180px, side padding `clamp(20px, 5vw, 64px)`.
- Desktop hero: 1.18fr copy / 0.56fr portrait, centered vertically in `calc(100svh - header)`. The hero and facts fill the first screen; About begins below the fold.
- Sections: 150px label rail + content column, separated by a hairline. Labels are sticky on desktop and inline on mobile.
- Projects: editorial rows, not a card grid. A 240px media well sits left of the text on desktop; the row stacks on mobile.
- Mobile: the portrait centers above the name; the name stays left aligned; nav becomes a compact four-link row with the theme control.

## Motion

- Page load: the hero name rises letter by letter once. No section-wide fade-ups.
- Portrait: subtle 3D tilt and glare from React Bits `TiltedCard`; click opens a native dialog.
- Project rows: a restrained pointer spotlight from `SpotlightCard`.
- Role line: `ShinyText` sheen on hover only.
- Theme change: View Transitions circular reveal from the toggle, with a short color-transition fallback.
- Reduced motion disables the reveal, name animation, tilt, spotlight, and shine.

## Components

- `TiltedCard` — portrait and lightbox trigger.
- `SpotlightCard` — selected project rows, transparent surface and no card shadow.
- `SpecularButton` — email action on the contact band, adapted to render an anchor.
- `ShinyText` — role line, light and dark variants.
- `Noise` — fixed paper grain at low opacity.
- `Section` — shared label-rail layout.
- `ThemeToggle` — inline script and static button in the header; no framework needed.

## Do / Don't

- Do keep the hero to one screen on desktop and near one screen on mobile.
- Do keep one accent and one memorable interaction per area.
- Do keep project rows editorial and image-led, not a grid of identical rounded cards.
- Don't add section-wide scroll reveals, all-caps eyebrows, or decorative arrows.
- Don't use gradients as decoration; the only gradient is the theme reveal and the spotlight light.
- Don't invent employers, metrics, certifications, or availability claims.
