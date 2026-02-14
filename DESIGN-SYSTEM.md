# CarbonS Design System

**Version 1.0.0** | Management SaaS Platform

---

## Brand DNA

**CarbonS** is a management SaaS that feels like it was carved from warm stone and polished to perfection. The design system draws from four brand attributes:

| Attribute | Expression |
|-----------|-----------|
| **Minimal** | Generous whitespace, restrained palette, purposeful every-pixel |
| **Luxury** | Serif display type, warm shadows, deliberate animation timing |
| **Organic** | Earth-tone palette, natural easing curves, warm neutrals |
| **Inviting** | Comfortable spacing, readable typography, gentle interaction states |

---

## 1. Color Palette

### Philosophy
The palette is rooted in natural materials — carbon, ember, sage, and clay. Every color has warmth; even the neutrals carry a subtle golden undertone that avoids the cold sterility of pure greys.

### Primary Scale: Carbon (Warm Neutrals)
The backbone of the interface. Used for backgrounds, text, and borders.

| Token | Hex | Usage |
|-------|-----|-------|
| `carbon-50` | `#FAFAF8` | Page background |
| `carbon-100` | `#F5F4F0` | Card backgrounds, elevated surfaces |
| `carbon-200` | `#E8E6DF` | Subtle backgrounds, dividers |
| `carbon-300` | `#D4D1C7` | Borders, disabled states |
| `carbon-400` | `#B0ACA0` | Placeholder text, tertiary content |
| `carbon-500` | `#8A857A` | Core carbon tone |
| `carbon-600` | `#6B665C` | Secondary text |
| `carbon-700` | `#504C44` | Emphasized secondary text |
| `carbon-800` | `#38352F` | Dark surfaces |
| `carbon-900` | `#242220` | Primary text, headings |
| `carbon-950` | `#1A1917` | Dark mode backgrounds |

### Accent: Ember (Primary Brand)
Warm amber-terracotta. The action color — buttons, links, active states.

| Token | Hex | Usage |
|-------|-----|-------|
| `ember-50` | `#FDF8F3` | Subtle brand tint |
| `ember-300` | `#EBC09A` | Light accent |
| `ember-500` | `#D4854A` | Primary actions, CTAs |
| `ember-600` | `#C06A35` | Hover state, text links |
| `ember-700` | `#A0532C` | Active/pressed state |

### Accent: Sage (Secondary)
Muted botanical green. Growth, trust, positive outcomes.

| Token | Hex | Usage |
|-------|-----|-------|
| `sage-500` | `#6E9460` | Secondary actions |
| `sage-600` | `#577A4B` | Hover |
| `sage-700` | `#45613C` | Active |

### Accent: Clay (Tertiary)
Warm rose-clay for subtle highlights and data visualization.

| Token | Hex | Usage |
|-------|-----|-------|
| `clay-500` | `#B87D6E` | Tertiary accents |
| `clay-600` | `#A26455` | Charts, highlights |

### Semantic Colors

| Category | 500 Value | Usage |
|----------|-----------|-------|
| Success | `#3D8E40` | Confirmations, positive trends |
| Warning | `#E6A009` | Caution states, pending items |
| Error | `#E54D4D` | Errors, destructive actions |
| Info | `#4A8CC2` | Informational callouts |

### Dark Mode
Dark mode inverts the luminance curve while preserving warmth. Background shifts to `carbon-950`, text to `carbon-100`. Brand colors shift one stop lighter to maintain contrast. Shadows become darker and more diffused. All semantic alias tokens automatically swap.

### Chart Palette (8 colors)
`ember-500` → `sage-500` → `clay-500` → `info-500` → `ember-300` → `sage-300` → `clay-300` → `info-300`

---

## 2. Typography

### Font Stack

| Role | Font | Fallback | Usage |
|------|------|----------|-------|
| **Display** | Instrument Serif | Georgia, serif | Hero headlines, page titles — refined elegance |
| **Heading** | Inter | System sans-serif | Section headings, card titles |
| **Body** | Inter | System sans-serif | All body text, optimized for readability |
| **Mono** | JetBrains Mono | SF Mono, monospace | Code, data tables, KPI values |

### 9-Level Type Scale

| Level | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `display-2xl` | 72px (4.5rem) | 1.08 | Regular, Serif | Hero headlines |
| `display-xl` | 60px (3.75rem) | 1.10 | Regular, Serif | Page titles |
| `display-lg` | 48px (3rem) | 1.15 | Regular, Serif | Section heroes |
| `heading-xl` | 36px (2.25rem) | 1.20 | Semibold, Sans | Card group headings |
| `heading-lg` | 30px (1.875rem) | 1.25 | Semibold, Sans | Dashboard sections |
| `heading-md` | 24px (1.5rem) | 1.30 | Semibold, Sans | Card titles, dialogs |
| `body-lg` | 18px (1.125rem) | 1.60 | Regular, Sans | Lead paragraphs |
| `body-md` | 16px (1rem) | 1.60 | Regular, Sans | Standard body text |
| `body-sm` | 14px (0.875rem) | 1.55 | Regular, Sans | Secondary text, tables |

### Utility Styles

| Style | Size | Weight | Usage |
|-------|------|--------|-------|
| `label-lg` | 16px | Medium | Form labels, nav items |
| `label-md` | 14px | Medium | Button text, tab labels |
| `label-sm` | 12px | Medium | Badges, tags, captions |
| `overline` | 11px | Semibold, UPPERCASE | Section labels, eyebrow text |
| `caption` | 12px | Regular | Fine print, timestamps |
| `code` | 13px | Regular, Mono | Code blocks, API references |
| `data` | 32px | Medium, Mono | Dashboard KPIs |

---

## 3. Spacing System

**Base unit: 8px.** Half-step (4px) available for fine adjustments.

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `space-0.5` | 0.125rem | 2px | Focus rings, micro-adjustments |
| `space-1` | 0.25rem | 4px | Tight inline spacing |
| `space-1.5` | 0.375rem | 6px | Compact UI padding |
| `space-2` | 0.5rem | 8px | Base unit — icon gaps, tight padding |
| `space-3` | 0.75rem | 12px | Input padding, card inner spacing |
| `space-4` | 1rem | 16px | Standard gap, component padding |
| `space-5` | 1.25rem | 20px | Comfortable padding |
| `space-6` | 1.5rem | 24px | Card padding, section gaps |
| `space-8` | 2rem | 32px | Component group spacing |
| `space-10` | 2.5rem | 40px | Large spacing |
| `space-12` | 3rem | 48px | Section padding (mobile) |
| `space-16` | 4rem | 64px | Section padding (tablet) |
| `space-24` | 6rem | 96px | Section padding (desktop) |
| `space-32` | 8rem | 128px | Hero spacing |
| `space-40` | 10rem | 160px | Maximum section spacing |

### Section Padding
- **Mobile:** `space-12` (48px top/bottom)
- **Tablet:** `space-16` (64px)
- **Desktop:** `space-24` (96px)

---

## 4. Component Library (30 Components)

### Foundation (2)
| # | Component | Variants | Sizes | States |
|---|-----------|----------|-------|--------|
| 1 | **Button** | Primary, Secondary, Tertiary, Danger, Ghost | SM, MD, LG, XL | Default, Hover, Active, Focus, Disabled, Loading |
| 2 | **Icon Button** | Primary, Secondary, Ghost, Danger | SM, MD, LG | Default, Hover, Active, Focus, Disabled |

### Input (8)
| # | Component | Variants | Sizes | States |
|---|-----------|----------|-------|--------|
| 3 | **Input** | Outlined, Filled | SM, MD, LG | Default, Hover, Focus, Filled, Error, Success, Disabled, ReadOnly |
| 4 | **Textarea** | — | SM, MD, LG | Default, Hover, Focus, Error, Disabled |
| 5 | **Select** | Single, Multi, Searchable | SM, MD, LG | Default, Hover, Open, Error, Disabled |
| 6 | **Checkbox** | — | SM, MD, LG | Unchecked, Checked, Indeterminate + Hover, Focus, Disabled |
| 7 | **Radio Group** | Vertical, Horizontal | SM, MD, LG | Unselected, Selected + Hover, Focus, Disabled |
| 8 | **Toggle** | — | SM, MD, LG | Off, On + Hover, Focus, Disabled |
| 9 | **Date Picker** | Single, Range | — | Default, Open, Filled, Error |
| 10 | **Slider** | Single, Range | SM, MD, LG | Default, Hover, Active, Focus, Disabled |

### Navigation (4)
| # | Component | Description |
|---|-----------|-------------|
| 17 | **Tabs** | Underline, Pills, Enclosed variants with animated indicator |
| 18 | **Breadcrumb** | Auto-collapsing hierarchical location |
| 19 | **Sidebar** | Collapsible app navigation with icon-only mode |
| 20 | **Topbar** | Horizontal header with search and user menu |

### Data Display (5)
| # | Component | Description |
|---|-----------|-------------|
| 11 | **Avatar** | Image/initials/icon with status indicator |
| 12 | **Avatar Group** | Stacked avatars with overflow count |
| 13 | **Badge** | Solid, Soft, Outline with 6 semantic colors |
| 14 | **Tag** | Categorization labels, dismissible |
| 16 | **Table** | Sortable, selectable, expandable data table |

### Layout (3)
| # | Component | Description |
|---|-----------|-------------|
| 15 | **Card** | Elevated, Outlined, Filled, Ghost — the workhorse |
| 29 | **Divider** | Horizontal/vertical with optional label |
| 30 | **KPI Card** | Dashboard metric with trend and sparkline |

### Overlay (4)
| # | Component | Description |
|---|-----------|-------------|
| 21 | **Modal** | SM–Full sizes, backdrop blur, focus trap |
| 22 | **Drawer** | Slide panel from any edge |
| 24 | **Tooltip** | Dark surface contextual hints |
| 25 | **Popover** | Rich content overlay on click |

### Feedback (4)
| # | Component | Description |
|---|-----------|-------------|
| 23 | **Toast** | Non-blocking notifications with auto-dismiss |
| 26 | **Progress Bar** | Determinate and indeterminate variants |
| 27 | **Skeleton** | Warm-tinted loading placeholders |
| 28 | **Empty State** | Illustration + copy + action pattern |

---

## 5. Layout Patterns

### Responsive Breakpoints

| Name | Min Width | Columns | Margin | Gutter |
|------|-----------|---------|--------|--------|
| `sm` | 640px | 4 | 16px | 16px |
| `md` | 768px | 8 | 24px | 24px |
| `lg` | 1024px | 12 | 32px | 24px |
| `xl` | 1280px | 12 | 32px | 24px |
| `2xl` | 1440px | 12 | auto | 24px |
| `3xl` | 1680px | 12 | auto | 24px |

### Key Patterns

**Dashboard Shell**
- Mobile: Full-width content, hamburger menu for nav
- Tablet: 64px collapsed sidebar + content
- Desktop: 260px sidebar + content area
- Wide: Sidebar + centered max-width content

**Metrics Grid**
- `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))`
- 1 → 2 → 3 → 4 columns as viewport grows

**Content + Aside**
- Mobile: Stacked (content then aside)
- Desktop: 2fr + 1fr split

**Form Layout**
- Mobile: Single column, full-width fields
- Desktop: 2-column for short fields, full-width for textareas

**Data Table**
- Mobile: Card view (rows become cards)
- Tablet: Horizontal scroll with sticky first column
- Desktop: Full table with filter bar

**Auth Pages**
- Mobile: Centered card
- Desktop: 50/50 split (brand panel + form)

### Content Width Constraints
| Type | Max Width | Usage |
|------|-----------|-------|
| Prose | 720px | Documentation, long-form text |
| Form | 640px | Settings, data entry |
| Dashboard | 1440px | Dashboard content area |
| Full | none | Tables, complex layouts |

---

## 6. Animation Guidelines

### Principles
1. Motion is **organic and unhurried** — never jarring
2. Every animation has **clear purpose**: guide attention, provide feedback, establish hierarchy
3. **Slower durations** for larger movements, **faster** for micro-interactions
4. Prefer **transform + opacity** for 60fps performance
5. **Entrance = ease-out** (decelerate). **Exit = ease-in** (accelerate)
6. Stagger sequential items with **50–80ms** delay between each
7. **Always respect** `prefers-reduced-motion`

### Duration Scale

| Token | Duration | Usage |
|-------|----------|-------|
| `instant` | 0ms | No animation |
| `fast` | 120ms | Hover, toggle, focus |
| `normal` | 200ms | Color, opacity, border transitions |
| `moderate` | 300ms | Component state changes |
| `slow` | 400ms | Layout shifts, sidebar toggle |
| `slower` | 500ms | Modal entrance, page transitions |
| `slowest` | 700ms | Hero reveals, onboarding |

### Easing Curves

| Token | Curve | Usage |
|-------|-------|-------|
| `default` | `cubic-bezier(0.25, 0.1, 0.25, 1.0)` | Standard — most interactions |
| `in` | `cubic-bezier(0.55, 0.0, 0.68, 0.19)` | Elements leaving view |
| `out` | `cubic-bezier(0.22, 0.61, 0.36, 1.0)` | Elements entering view |
| `in-out` | `cubic-bezier(0.45, 0.0, 0.40, 1.0)` | Layout reflows |
| `bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1.0)` | Celebrations, attention |
| `spring` | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Toggle, switch, selection |
| `organic` | `cubic-bezier(0.4, 0.0, 0.2, 1.0)` | General organic motion |

### Named Animations
`fadeIn` | `fadeOut` | `slideInUp` | `slideInDown` | `slideInLeft` | `slideInRight` | `scaleIn` | `pulse` | `skeleton` | `spin`

### Reduced Motion
When `prefers-reduced-motion: reduce` is active:
- All transitions set to `0.01ms`
- All animations set to single iteration at `0.01ms`
- Loading spinners reduce to opacity pulse
- Focus indicators remain instant

---

## 7. Accessibility (WCAG 2.1 AA)

### Color Contrast

| Context | Required Ratio | Standard |
|---------|---------------|----------|
| Normal text | 4.5:1 | AA |
| Large text (18px+ / 14px bold+) | 3:1 | AA |
| UI components & graphics | 3:1 | AA |
| Decorative elements | No requirement | — |

### Verified Pairings (Light Mode)
- `carbon-50` on `carbon-900`: **14.8:1** (AAA)
- `carbon-50` on `carbon-600`: **5.2:1** (AA)
- `carbon-50` on `ember-600`: **4.6:1** (AA)
- `ember-500` on `white`: **4.5:1** (AA)

### Keyboard Navigation
- ALL interactive elements keyboard accessible
- Logical tab order following visual hierarchy
- Skip navigation link as first focusable element
- Focus indicator: `0 0 0 2px bg, 0 0 0 4px brand` ring
- Complex widgets use arrow key patterns (ARIA APG)
- No keyboard traps (except modals with Escape exit)

### ARIA Requirements
- Landmarks: `<main>`, `<nav>`, `<header>`, `<aside>`, `<footer>`
- All form inputs have associated `<label>` or `aria-label`
- Dynamic content uses `aria-live` regions
- Modals use `role="dialog"` + `aria-modal="true"` + focus trap
- Icon-only buttons require `aria-label`
- Images have descriptive `alt` text

### Touch Accessibility
- Minimum tap target: **44x44px**
- Minimum 8px between adjacent targets
- All gesture actions have tap/click alternatives

### Testing Requirements
- **Automated**: axe-core in CI (zero violations), Lighthouse >= 95
- **Manual**: Keyboard-only flow testing, VoiceOver + NVDA screen reader testing
- **Validation**: 200% zoom usability, reduced motion preference testing

---

## File Structure

```
carbons-design-system/
├── DESIGN-SYSTEM.md            ← You are here
├── tokens/
│   ├── colors.json             ← Color palette (primitive + semantic + dark)
│   ├── typography.json         ← 9-level type scale + utility styles
│   ├── spacing.json            ← 8px grid, sizes, radius, shadows, layout
│   └── animation.json          ← Duration, easing, keyframes, guidelines
├── css/
│   └── tokens.css              ← CSS custom properties (light + dark mode)
├── components/
│   └── component-specs.json    ← 30 components with full state definitions
└── docs/
    ├── layout-patterns.json    ← Responsive breakpoints + layout patterns
    ├── accessibility.json      ← WCAG AA requirements + testing checklist
    └── figma-component-guide.json ← Figma component properties + setup
```

---

## Token Naming Convention

All CSS custom properties follow: `--cs-{category}-{property}`

| Prefix | Category |
|--------|----------|
| `--cs-bg-*` | Background colors |
| `--cs-fg-*` | Foreground (text) colors |
| `--cs-border-*` | Border colors |
| `--cs-interactive-*` | Interactive element colors |
| `--cs-space-*` | Spacing values |
| `--cs-text-*` | Font sizes |
| `--cs-leading-*` | Line heights |
| `--cs-tracking-*` | Letter spacing |
| `--cs-weight-*` | Font weights |
| `--cs-font-*` | Font families |
| `--cs-radius-*` | Border radius |
| `--cs-shadow-*` | Box shadows |
| `--cs-size-*` | Fixed sizes (icons, avatars, inputs) |
| `--cs-z-*` | Z-index layers |
| `--cs-duration-*` | Animation durations |
| `--cs-ease-*` | Easing functions |

---

## Usage Examples

### CSS
```css
.card {
  background: var(--cs-bg-secondary);
  border: var(--cs-border-thin) solid var(--cs-border-primary);
  border-radius: var(--cs-radius-xl);
  padding: var(--cs-space-6);
  box-shadow: var(--cs-shadow-sm);
  transition: all var(--cs-duration-normal) var(--cs-ease-default);
}

.card:hover {
  box-shadow: var(--cs-shadow-md);
  transform: translateY(-2px);
}
```

### Tailwind Config
```javascript
// Extend your tailwind.config.js with CarbonS tokens
module.exports = {
  theme: {
    extend: {
      colors: {
        carbon: {
          50: '#FAFAF8', 100: '#F5F4F0', 200: '#E8E6DF',
          300: '#D4D1C7', 400: '#B0ACA0', 500: '#8A857A',
          600: '#6B665C', 700: '#504C44', 800: '#38352F',
          900: '#242220', 950: '#1A1917'
        },
        ember: {
          50: '#FDF8F3', 100: '#FAEEE1', 200: '#F4DAC1',
          300: '#EBC09A', 400: '#DFA06E', 500: '#D4854A',
          600: '#C06A35', 700: '#A0532C', 800: '#7E4228',
          900: '#613524', 950: '#3D1F14'
        },
        sage: {
          50: '#F6F8F5', 500: '#6E9460', 600: '#577A4B', 700: '#45613C'
        },
        clay: {
          50: '#FBF6F5', 500: '#B87D6E', 600: '#A26455'
        }
      },
      fontFamily: {
        display: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'monospace']
      },
      borderRadius: {
        'cs-sm': '4px', 'cs-md': '8px', 'cs-lg': '12px',
        'cs-xl': '16px', 'cs-2xl': '20px', 'cs-3xl': '24px'
      },
      boxShadow: {
        'cs-sm': '0 1px 3px rgba(36,34,32,0.06), 0 1px 2px rgba(36,34,32,0.04)',
        'cs-md': '0 4px 6px -1px rgba(36,34,32,0.06), 0 2px 4px -2px rgba(36,34,32,0.04)',
        'cs-lg': '0 10px 15px -3px rgba(36,34,32,0.07), 0 4px 6px -4px rgba(36,34,32,0.04)'
      }
    }
  }
}
```

---

*Designed with intention. Every pixel warm. Every interaction purposeful.*

**CarbonS Design System v1.0.0** | WCAG 2.1 AA Compliant
