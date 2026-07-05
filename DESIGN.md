---
version: beta
name: Nagisa Ikeda — AI Design Engineer Portfolio
description: A builder-oriented portfolio for an AI Design Engineer. The visual language takes clarity from Cursor, seriousness from Anthropic, and spatial restraint from architectural practice — without cloning any single brand. The canvas is warm off-white (`#f5f5f5`) with charcoal ink (`#0a0a0a`). Visual richness comes from composition, typography, and a single signature artwork layer (landscape study + light UI windows) — not pastel blobs, not SaaS gradients, not dark dev-tool chrome. Geist Sans carries UI and headlines. Instrument Serif appears sparingly on section titles and brand moments. One restrained accent (`#8f6b4f`, warm umber) marks shipping state and file-diff highlights only.

colors:
  ink: "#0a0a0a"
  ink-soft: "#171717"
  body: "#525252"
  muted: "#737373"
  muted-soft: "#a3a3a3"
  border: "#e5e5e5"
  border-strong: "#d4d4d4"
  canvas: "#f5f5f5"
  canvas-warm: "#fafafa"
  surface: "#ffffff"
  accent: "#8f6b4f"
  landscape-sky: "#dce4e8"
  landscape-mountain: "#8fa8b0"
  landscape-earth: "#8f6b4f"

typography:
  hero-headline:
    fontFamily: "'Geist', sans-serif"
    fontSize: clamp(2rem, 4.2vw, 3.25rem)
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: -0.035em
  section-serif:
    fontFamily: "'Instrument Serif', Georgia, serif"
    fontSize: clamp(1.375rem, 2vw, 1.75rem)
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.015em
  card-title:
    fontFamily: "'Geist', sans-serif"
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: -0.02em
  body:
    fontFamily: "'Geist', sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: -0.011em
  label:
    fontFamily: "'Geist Mono', monospace"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.06em
    textTransform: uppercase
  mono-sm:
    fontFamily: "'Geist Mono', monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.55
  nav:
    fontFamily: "'Geist', sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: -0.01em
  button:
    fontFamily: "'Geist', sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0

rounded:
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px

spacing:
  xs: 8px
  sm: 12px
  base: 16px
  md: 20px
  lg: 24px
  xl: 32px
  section: 80px
  section-lg: 112px

components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    height: 56px
    layout: three-column (name · centered nav · contact + resume pill)
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas-warm}"
    rounded: "{rounded.pill}"
    height: 40px
    padding: 0 20px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    border: "1px {colors.border-strong}"
    rounded: "{rounded.pill}"
    height: 40px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    layout: left-aligned copy · wide visual below
    typography: "{typography.hero-headline}"
  hero-visual:
    aspectRatio: "16/9"
    background: landscape-study + ui-window overlays
    rounded: "{rounded.xl}"
  ui-window:
    backgroundColor: "{colors.surface}"
    border: "1px {colors.border}"
    shadow: "0 24px 48px rgba(10,10,10,0.08)"
    rounded: "{rounded.lg}"
  project-card:
    backgroundColor: "{colors.surface}"
    border: "1px {colors.border}"
    rounded: "{rounded.sm}"
    padding: 28px 32px
  build-log:
    backgroundColor: "{colors.canvas-warm}"
    border: "1px top/bottom {colors.border}"
    accent: checkmark in "{colors.accent}"
  capability-row:
    border: "1px top/bottom {colors.border}"
    padding: 20px 0
  footer:
    backgroundColor: "{colors.canvas}"
    border: "1px top {colors.border}"
---

## Overview

This portfolio positions **Nagisa Ikeda** as an **AI Design Engineer** — someone with design taste, systems thinking, and builder credibility. The homepage should read like a serious AI builder portfolio for teams at OpenAI, Anthropic, Cursor, Perplexity, and top startups — not a traditional designer portfolio or generic engineer CV.

**Inspiration (reference, do not clone):**
- **Cursor** — left-aligned clarity, pill CTAs, artwork + product UI layered in the hero
- **Anthropic** — restrained tone, proof over adjectives, no marketing fluff
- **Architectural practice** — spatial composition, Japanese proportion, material restraint

**Key characteristics:**
- Warm off-white canvas, charcoal ink, muted gray body text
- Sans-serif dominant (Geist); serif used sparingly (Instrument Serif)
- One signature visual: **landscape study** with **light UI windows** floating on top
- Black pill primary CTA; outlined secondary; text ghost tertiary
- Build log prominently communicates continuous shipping
- No pastel gradient blobs, no Dribbble cards, no dark terminal aesthetic

**Positioning copy (homepage):**
- Role: AI Design Engineer
- Headline: builder-oriented, concrete, confident
- Credibility: FedEx Dataworks · Nara Labs
- Proof line: shipped products, not adjectives

## Colors

### Core palette

| Token | Hex | Use |
|---|---|---|
| `{colors.canvas}` | `#f5f5f5` | Page background |
| `{colors.canvas-warm}` | `#fafafa` | Alternating sections, window sidebars |
| `{colors.surface}` | `#ffffff` | Cards, UI windows |
| `{colors.ink}` | `#0a0a0a` | Headlines, primary buttons |
| `{colors.ink-soft}` | `#171717` | Button hover |
| `{colors.body}` | `#525252` | Body copy |
| `{colors.muted}` | `#737373` | Labels, secondary text |
| `{colors.muted-soft}` | `#a3a3a3` | Tertiary, chrome dots |
| `{colors.border}` | `#e5e5e5` | Default 1px dividers |
| `{colors.border-strong}` | `#d4d4d4` | Outlined buttons, hover borders |
| `{colors.accent}` | `#8f6b4f` | Shipping checks, file-diff highlights only |

### Landscape artwork palette

Used only inside `{component.hero-visual}` — never on UI chrome. Source: `public/images/hero-artwork.png` (Monet, *Vétheuil in Summer*).

| Token | Hex | Use |
|---|---|---|
| `{colors.landscape-sky}` | `#dce4e8` | Sky wash |
| `{colors.landscape-mountain}` | `#8fa8b0` | Distant forms |
| `{colors.landscape-earth}` | `#8f6b4f` | Foreground architectural mass |

### Color rules

- **Do** keep the page mostly monochrome (white, warm gray, charcoal).
- **Do** use `{colors.accent}` sparingly — build log checks, diff counts, one datum line in artwork.
- **Don't** use saturated gradients, neon accents, or colorful project cards.
- **Don't** use dark-mode hero bands or terminal-green aesthetics.

## Typography

### Font families

| Family | Role | Implementation |
|---|---|---|
| **Geist Sans** | UI, hero headline, nav, buttons, cards | `--font-geist-sans` |
| **Geist Mono** | Labels, credibility, proof, tags, build log dates | `--font-geist-mono` |
| **Instrument Serif** | Section titles, footer name, preview card titles | `--font-instrument-serif` |

### Hierarchy

| Token | Use |
|---|---|
| `{typography.hero-headline}` | Homepage h1 — large sans, weight 500, tight tracking |
| `{typography.section-serif}` | "Selected work", "Build log" section titles |
| `{typography.card-title}` | Project names in work grid |
| `{typography.body}` | Paragraphs, descriptions |
| `{typography.label}` | Section eyebrows (`WORK`, `SHIPPING`) |
| `{typography.mono-sm}` | Credibility, proof, tag lines |
| `{typography.nav}` | Header links |
| `{typography.button}` | CTA pills |

### Principles

- **Sans leads.** The site should feel technical and clear, not editorial-luxury.
- **Serif is accent.** Use Instrument Serif on 2–3 moments per page max.
- **Negative tracking on headlines.** Hero at `-0.035em`; card titles at `-0.02em`.
- **Mono for proof.** Shipping activity, credentials, and metadata use Geist Mono.
- **No fluff.** Prefer concrete verbs: Shipped, Built, Designed — not "warmth" or "intention."

## Layout

### Container

- Max width: **1120px** (`max-w-[1120px]`)
- Horizontal padding: **24px** mobile · **32px** desktop
- Section vertical rhythm: **80–112px** (`py-20` to `py-32`)

### Homepage structure

1. **Header** — fixed, blurred warm-white backdrop
2. **Hero** — left-aligned copy; Monet artwork + builder UI visual below
3. **Progression** — `Product Designer → Design Systems → AI Design Engineer → Founder`
4. **Featured AI Products** — agentic / builder work (`#ai-products`)
5. **Selected Product Design Work** — enterprise UX & design systems (`#product-design`)
6. **Build log** — shipping activity (`#build-log`)
7. **Capabilities** — practice list (`#capabilities`)
8. **Footer** — contact links

### Hero layout (Cursor-inspired)

```
[Left-aligned headline + credibility + CTAs]

[Wide 16:9 visual]
  └── Landscape study (background)
  └── Builder UI window (shipping sidebar + agent session + file diffs)
  └── Product preview card (secondary, bottom-right)
```

### Whitespace

Generous but purposeful. Let the hero visual breathe. Avoid crowding the artwork with copy. Content sections use clear label + title + content hierarchy.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat canvas | `{colors.canvas}` | Page floor |
| Section band | `{colors.canvas-warm}` + top/bottom border | Build log |
| Card | `{colors.surface}` + 1px `{colors.border}` | Project cards |
| Card hover | border `{colors.border-strong}` + soft shadow | Project cards |
| UI window | `{component.ui-window}` shadow stack | Hero overlays |
| Artwork grain | SVG noise at 3.5% opacity | Landscape study only |

**Don't** use glassmorphism, heavy blur on content cards, or multiple shadow tiers on the same surface.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 6px | Project cards |
| `{rounded.md}` | 8px | — reserved |
| `{rounded.lg}` | 12px | UI windows |
| `{rounded.xl}` | 16px | Hero visual frame |
| `{rounded.pill}` | 9999px | All CTA buttons, header Resume pill |

Buttons are **pills**. Cards are **slightly rounded rectangles** — not fully soft blobs.

## Components

### Top navigation (`top-nav`)

- Height 56px, `{colors.canvas}` at 85% opacity + backdrop blur
- **Left:** site name (Geist, medium)
- **Center:** Work · Build Log · Capabilities (hidden below `md`)
- **Right:** Contact (text) + Resume (black pill)

### Buttons

**`button-primary`** — `{colors.ink}` fill, `{colors.canvas-warm}` text, `{rounded.pill}`, 40px height.

**`button-secondary`** — `{colors.surface}` fill, 1px `{colors.border-strong}`, `{rounded.pill}`.

**`button-ghost`** — text only, no border. Used for tertiary actions (Resume in hero row).

### Hero (`hero-band` + `hero-visual`)

**Copy block:**
- `{typography.hero-headline}` — single confident statement
- Credibility lines in `{typography.mono-sm}`
- Proof line in `{typography.mono-sm}`
- CTAs: View Work (primary) · View Build Log → (secondary) · Resume (ghost)

**Visual block (`hero-visual`):**
- `{component.hero-visual}` — 16:9 frame, `{rounded.xl}`, 1px border
- Monet landscape artwork (`hero-artwork.png`) as full-bleed background
- Main `ui-window` — shipping sidebar + agent conversation + file diff list
- Secondary `ui-window` — compact product preview (e.g. Ahead)

### Build log (`build-log`)

- Full-width band with `{colors.canvas-warm}` background
- Two-column layout on desktop: title + description left · ship list right
- Year label in `{colors.accent}`
- Entries prefixed with `✓` in `{colors.accent}`
- Communicates velocity and builder credibility

### Work sections (`project-card` + `WorkSection`)

Two sections share the `WorkSection` component in `src/components/WorkSection.tsx`:

**Featured AI Products** (`#ai-products`) — agentic systems, decision products, prototypes. Technical thumbnail placeholder (grid texture).

**Selected Product Design Work** (`#product-design`) — enterprise fintech, design systems, security UX. Warmer thumbnail placeholder. Optional `subtitle` for client (e.g. J.P. Morgan Chase).

- 2-column grid on desktop; thumbnail area supports `image` path when screenshots are added
- Index number, title, description, tags in mono
- Case study links open external Framer URLs (`src/lib/data.ts`)
- Progression line above AI section: Product Designer → Design Systems → AI Design Engineer → Founder

### Capabilities (`capability-row`)

- Simple divided list — not pill chips
- One capability per row, medium weight sans label
- Top/bottom border on container

### Footer

- Name in `{typography.section-serif}` + role in small muted sans
- Links: Email · LinkedIn · Resume · Nara Labs
- Copyright line in `{typography.mono-sm}`

## Motion

Implemented with Framer Motion. Keep motion **subtle and premium** — never playful or bouncy.

| Pattern | Use |
|---|---|
| `fadeIn` | Header on load |
| `staggerContainer` + `staggerItem` | Hero copy, section lists |
| `fadeUp` | Sections on scroll into view |
| Hero visual | Fade + translate Y on load (900ms, ease out) |

**Don't** add orb drift, parallax, or decorative loops. Motion serves hierarchy, not decoration.

## Content & tone

### Voice

- Concrete, confident, sparse
- Proof over adjectives
- Builder-oriented verbs: Shipped, Built, Designed, Launched

### Avoid

- "Warmth, restraint, and intention"
- Overusing "AI-native" in every sentence
- Startup marketing fluff
- Traditional portfolio filler ("passionate about design")

### Homepage proof points

- FedEx AI Concierge — multi-agent onboarding
- Ahead — AI financial decision OS
- ProbeIQ — research intelligence agent
- Local PM OS — product operating system
- Build log — dated shipping activity

## Do's and Don'ts

### Do

- Lead with **AI Design Engineer** positioning above the fold.
- Use artwork + UI overlay as the **one** signature visual moment.
- Keep project cards product-focused and border-defined.
- Feature the build log prominently — it proves continuous shipping.
- Use Geist for clarity; Instrument Serif only as accent.
- Reference `{token.refs}` in code via CSS variables in `globals.css`.

### Don't

- Don't clone Cursor's oil painting, layout pixel-for-pixel, or copy.
- Don't use pastel gradient blobs or SaaS hero illustrations.
- Don't make the site feel like a generic software engineer portfolio.
- Don't use dark themes, wireframe node graphs, or terminal aesthetics.
- Don't put large colorful imagery on project cards.
- Don't bold serif display type — serif stays at weight 400.
- Don't add more than one accent color.

## Responsive behavior

| Breakpoint | Changes |
|---|---|
| `< 640px` | Hero headline scales down; single-column work grid; hero UI sidebar hidden; centered nav collapses to name + Resume |
| `640–1024px` | 2-column work grid; hero visual stacks below copy |
| `> 1024px` | Full header nav; build log two-column; secondary preview card visible |

Touch targets: buttons at 40px height minimum.

## File map

```
src/
  app/globals.css       # Design tokens + utility classes
  app/layout.tsx        # Geist + Instrument Serif fonts
  lib/data.ts           # All homepage copy and content
  lib/motion.ts         # Framer Motion variants
  components/
    Hero.tsx            # Hero copy + CTAs
    HeroVisual.tsx      # Artwork + UI window composition
    SelectedWork.tsx    # Project cards
    BuildLog.tsx        # Shipping log
    Capabilities.tsx    # Capability list
    Header.tsx          # Top nav
    Footer.tsx          # Footer links
    ui/Button.tsx       # CTA primitives
    ui/Section.tsx      # Section wrapper + header
```

## Iteration guide

1. Edit copy in `src/lib/data.ts` — never hardcode strings in components.
2. Add tokens to `globals.css` `:root` and `@theme inline` before using in Tailwind.
3. When adding UI, ask: *does this feel like proof of building, or decoration?*
4. New sections should follow label → title → content hierarchy.
5. If replacing hero artwork, update `public/images/hero-artwork.png` and keep the `ui-window` overlay pattern.
6. Case study links stay external (Framer) — do not add internal case study routes unless explicitly requested.

## Known gaps

- Hero artwork is Monet's *Vétheuil in Summer* (`public/images/hero-artwork.png`). Ensure licensing is appropriate for production deploy.
- ProbeIQ and Local PM OS have no case study URLs yet.
- `site.naraLabs` URL should be verified before production deploy.
- Mobile hamburger menu not implemented — nav links hidden on small screens.
- Form/contact page not in scope — footer links to `mailto:` only.
