# Henry Yin — Design System

Extracted from Figma file `FJexTFOKn2OU6zr8mjzhkH`, node `100:644`.

---

## Typography

All text uses **Saans TRIAL VF** (variable font, loaded via `--font-saans`). Figma renders it as "Noto Sans JP" due to font substitution — use Saans everywhere.

| Role | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|
| Logo | 24px | 500 | normal | — |
| Section heading (H2) | 48px | 500 | normal | — |
| Body | 16px | 400 | 20px (1.25) | 0.08px |
| Body medium | 16px | 500 | 20px | 0.08px |
| Muted / label | 16px | 400 | 20px | 0.08px |

All body text is uppercase where used for labels/nav/headings. Prose body text is sentence case.

---

## Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-ink` | `#333333` | Primary text, headings, nav |
| `--color-ink-muted` | `#a1a1a1` | Secondary text, tags, dates, "VIEW ALL" |
| `--color-surface` | `#ffffff` | Page background |
| `--color-surface-card` | `#e1e1e1` | Work/musing card image placeholder bg |
| `--color-surface-detail` | `#f4f4f4` | Work detail page image panel bg |

---

## Spacing

Base unit: **4px**

| Token | Value | Usage |
|---|---|---|
| `--spacing-page-x` | `128px` | Horizontal page padding |
| `--spacing-section-y` | `96px` | Vertical section padding |
| `--spacing-nav-y` | `24px` | Nav vertical padding |
| `--spacing-hero-y` | `64px` | Hero section vertical padding |
| `--spacing-card-gap` | `12px` | Gap between card columns |
| `--spacing-card-inner` | `20px` | Gap between card image and card text |
| `--spacing-card-meta` | `8px` | Gap between card text lines |
| `--spacing-row-gap` | `96px` | Gap between work card rows |
| `--spacing-section-header` | `24px` | Gap between section label and "VIEW ALL" |

---

## Layout

- **Design canvas width**: 1920px
- **Content max-width**: 1664px (1920 − 128 × 2)
- **Nav height**: 84px
- **Work grid**: 2 columns, equal width, `gap-3` (12px)
- **Musings grid**: 3 columns, equal width, `gap-3` (12px)
- **Work card image height**: 540px
- **Detail page content column**: centered, max ~728px wide (`px-[596px]` on 1920px canvas = ~31% side padding)

---

## Component Patterns

### Nav Bar
- Sticky top, `py-6` padding
- Logo left: "HENRY YIN" 24px/500
- Nav links: About · Work · Musings — pill bg `rgba(255,255,255,0.1)` + `backdrop-blur`, `px-3 py-2`
- CONTACT right: 16px/400

### Work Card
- Image container: `bg-surface-card`, fixed height 540px, `overflow-hidden`
- Title: 16px/500 `#333`
- Subtitle: 16px/400 `#333`
- Tags row: `role · year` in `#a1a1a1`, separated by a 4px dot

### Musing Card
- Image container: `bg-surface-card`, aspect-square-ish, `overflow-hidden`
- Title: 16px/500 `#333`
- Subtitle/tagline: 16px/400 `#333`
- Year: 16px/400 `#a1a1a1`

### Section Header
- Row: section label (16px/500 `#333`) + "VIEW ALL" (16px/400 `#a1a1a1`), `gap-6`

### Footer
- `flex justify-between items-end`
- Left: social links (16px/500 `#333`)
- Right: copyright (16px/500 `#333`)

---

## Responsive Strategy (best-guess, no mobile Figma frames)

| Breakpoint | Page padding | Work grid | Musings grid |
|---|---|---|---|
| Mobile `< 768px` | `24px` | 1 col | 1 col |
| Tablet `768px–1279px` | `48px` | 2 col | 2 col |
| Desktop `≥ 1280px` | `128px` | 2 col | 3 col |
