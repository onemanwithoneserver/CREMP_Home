# Franchise Search Results — `mobile.tsx` Design Spec

Design reference extracted from [mobile.tsx](mobile.tsx) (`FranchiseSearchResultsMobile` component).

## 1. Typography

| Element | Classes | Size | Weight |
|---|---|---|---|
| Root font | `font-sans` | — | — |
| Hero eyebrow ("Franchise Discovery") | `font-semibold uppercase tracking-[0.1em]` | `9px` | 600 |
| Hero heading | `font-semibold leading-[1.1] tracking-tight` | `24px` | 600 |
| Search input (all variants) | `font-medium` | `12px` | 500 |
| Filter label ("Filter:") | `uppercase tracking-widest font-bold` | `9px` | 700 |
| Category tab | `font-semibold tracking-normal` | `10px` | 600 |
| Suggestion dropdown title | `font-semibold leading-tight truncate` | `12px` | 600 |
| Suggestion dropdown subtitle | `font-medium` | `9px` | 500 |
| Suggestion "No franchises found" | `font-medium` | `10px` | 500 |
| Category section heading | `font-semibold tracking-tight` | `17px` | 600 |
| Swipe (full-row) card title | `font-semibold leading-snug truncate` | `16px` | 600 |
| Swipe card location | `font-medium` | `11px` | 500 |
| Swipe card ROI | `font-semibold` | `14px` | 600 |
| Swipe card investment | `font-semibold` | `11px` | 600 |
| Grid (2-col) card title | `font-semibold leading-tight truncate` | `11px` | 600 |
| Grid card investment | `font-medium` | `9px` | 500 |
| Map popup card title | `font-semibold leading-tight truncate` | `13px` | 600 |
| Map popup location | `font-medium` | `9px` | 500 |
| Map popup investment/ROI/location tags | `font-semibold` / `font-medium` | `10px` | 600/500 |
| Undo snackbar title | `font-semibold truncate` | `11px` | 600 |
| Undo snackbar subtitle | `font-medium` | `9px` | 500 |
| Undo button label | `font-bold uppercase tracking-wider` | `10px` | 700 |

## 2. Color Palette (Hex / RGB)

### Brand & Base
| Token | Value | Usage |
|---|---|---|
| Page background | `#fafbfd` | Root container background |
| Navy (primary) | `#0a1128` | Hero gradient base/end, dark text, undo snackbar gradient start |
| Navy (secondary) | `#0b1b42` | Hero bg, sticky bar bg, active buttons, borders, gradient start |
| Navy (tertiary) | `#0d1a3a` | Hero gradient accent |
| Navy (undo gradient end) | `#132254` | Undo snackbar background gradient end |
| Gold / accent | `#d4af37` | Accent text, active states, borders, icons, progress bar, map-toggle gradient |
| Gold (light) | `#f3cd52` | Gradient midpoint (focus ring, undo button, progress bar) |
| Gold (map button gradient start) | `rgb(191, 149, 63)` | Map toggle button gradient |
| Off-white / panel bg | `#f8f9fc` | Sticky filter bar & category strip background |
| Map background gradient | `#f4f6f9 → #eef1f6 → #e8ecf2` | Map section background |
| Muted gold marker accent | `#c69a54` | Location pin icon on swipe cards |

### Semantic / Status
| Token | Value | Usage |
|---|---|---|
| ROI / positive text | `emerald-400` / `emerald-500` (Tailwind) | ROI value on cards & popup |
| Investment badge text | `#0b1b42` (navy) | "INV." label in map popup |
| Location tag (popup) | `text-blue-600` / `blue-500` icon | Location chip in map popup |
| Delete / dismiss icon | `text-red-500` / `red-600` | Close, "Not Interested" icons |
| Popup close hover bg | `hover:bg-red-50` | Circular close button |

### Category Marker Colors (from `data.tsx`)
| Category | Background | Glow |
|---|---|---|
| Food & Beverage | `bg-rose-500` | `rgba(244,63,94,0.4)` |
| Café / Coffee | `bg-emerald-500` | `rgba(16,185,129,0.4)` |
| Tech / Retail | `bg-blue-500` | `rgba(59,130,246,0.4)` |
| Fitness | `bg-cyan-500` | `rgba(6,182,212,0.4)` |
| Pet Care | `bg-orange-500` | `rgba(249,115,22,0.4)` |
| Education | `bg-indigo-500` | `rgba(99,102,241,0.4)` |
| Beauty / Salon | `bg-pink-500` | `rgba(236,72,153,0.4)` |
| Automotive | `bg-sky-500` | `rgba(14,165,233,0.4)` |
| Services / Repair | `bg-teal-500` | `rgba(20,184,166,0.4)` |
| Default / Fallback | `bg-[#d4af37]/10`, text `#d4af37` | `rgba(212,175,55,0.4)` |

### Badge Tag Colors (label chips, from `data.tsx`)
| Tag | Classes |
|---|---|
| (amber tag) | `bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/20` |
| (rose tag) | `bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/20` |
| (violet tag) | `bg-violet-500/15 text-violet-600 dark:text-violet-400 border-violet-500/20` |
| Popular | `bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-500/20` |
| (orange tag) | `bg-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-500/20` |
| New | `bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/20` |
| (teal tag) | `bg-teal-500/15 text-teal-600 dark:text-teal-400 border-teal-500/20` |
| Growing | `bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/20` |

### Opacity Variants (Navy `#0b1b42`)
- `/[0.03]`, `/[0.04]`, `/[0.05]`, `/[0.06]`, `/[0.08]` — borders, hover backgrounds, dividers
- `/15`, `/20`, `/25`, `/30`, `/35`, `/40`, `/45`, `/70` — muted text, icon states

## 3. Backgrounds & Gradients

| Element | CSS |
|---|---|
| Hero section | `linear-gradient(180deg, #0b1b42 0%, #0a1128 35%, #0d1a3a 100%)` |
| Hero grid overlay | SVG pattern, `stroke: white`, container `opacity-[0.04]` |
| Floating dot glow | `radial-gradient(circle, rgba(212,175,55,0.35), transparent)` |
| Map toggle button | `linear-gradient(135deg, rgb(191,149,63), rgb(212,175,55))` |
| Search icon shimmer swatch | `background: rgb(11,27,66)` with sweep `linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)` |
| Focus ring glow (search bar) | `linear-gradient(90deg, #d4af37, #f3cd52, #d4af37)` |
| Sticky header top bar | solid `#0b1b42` |
| Map section background | `bg-gradient-to-br from-[#f4f6f9] via-[#eef1f6] to-[#e8ecf2]` |
| Map topo pattern | SVG concentric circles, `stroke: #0b1b42`, `opacity-[0.05]` |
| Map contour lines | SVG dashed paths, `stroke: #0b1b42`, `opacity-[0.03]` |
| Swipe card image overlay | `bg-gradient-to-t from-[#0a1128]/60 via-transparent to-[#0a1128]/10` |
| Grid card image overlay | `bg-gradient-to-t from-[#0a1128]/40 to-transparent` |
| Franchise detail view close-button bar | `bg-gradient-to-b from-black/60 via-black/30 to-transparent` |
| Suggestions dropdown panel | `bg-white` with `border border-[#0b1b42]/[0.08]` |
| Undo snackbar background | `linear-gradient(135deg, #0a1128 0%, #132254 100%)` + `backdrop-filter: blur(20px)` |
| Undo snackbar progress bar | `linear-gradient(90deg, #d4af37, #f3cd52, #d4af37)` |
| Undo button background | `linear-gradient(135deg, #d4af37, #f3cd52)` |
| Sticky/main filter scroll fade (left) | `bg-gradient-to-r from-[#f8f9fc] via-[#f8f9fc] to-transparent` |
| Sticky/main filter scroll fade (right) | `bg-gradient-to-l from-[#f8f9fc] via-[#f8f9fc] to-transparent` |

## 4. Shadows / Elevation

| Element | Box-shadow |
|---|---|
| Sticky header bar | `0 4px 20px rgba(0,0,0,0.2)` |
| Search bar (hero) | `0 4px 20px rgba(0,0,0,0.2)` |
| Active category tab | `0 2px 8px rgba(11,27,66,0.15)` |
| Swipe card (active) | `0 8px 30px rgba(10,17,40,0.15)` + `ring-1 ring-[#d4af37]/30` |
| Swipe card (inactive) | `0 4px 12px rgba(10,17,40,0.08)` → hover `0 6px 16px rgba(10,17,40,0.12)` |
| Grid card (active) | `0 6px 20px rgba(10,17,40,0.12)` + `ring-1 ring-[#d4af37]/25` |
| Grid card (inactive) | `0 2px 8px rgba(10,17,40,0.06)` → hover `0 4px 12px rgba(10,17,40,0.1)` |
| Map popup card | `shadow-2xl` |
| List-collapse toggle button | `shadow-lg` |
| Marker (active) | `shadow-lg` + category `glow` (see §2) |
| Marker (inactive) | `shadow-md` |
| Undo snackbar | `0 12px 40px rgba(0,0,0,0.3)` |
| Text drop-shadows (labels/prices on images) | `drop-shadow-[0_1px_3px/4px_rgba(0,0,0,0.5/0.6)]`, `drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]` |

## 5. Border Radius & Layout

- Standard control radius: `rounded-[4px]` (search bar, buttons, tabs) and `rounded` (cards, popups, markers)
- Circular buttons: `rounded-full` (favorite/close icons, view-details CTA)
- Undo snackbar: `rounded-xl`, progress bar `rounded-b-xl`
- Section grid: `grid-cols-6` with cards spanning `col-span-2` (grid) or full-bleed horizontal swipe row

## 6. Animations & Transitions (Framer Motion)

### Global presets
```ts
const spring = { type: "spring", stiffness: 400, damping: 28 };
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.12 } } };
const cardVariant = { hidden: { opacity: 0, y: 18, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 320, damping: 24 } } };
```

### Component-level motion
| Element | Animation | Transition |
|---|---|---|
| `FloatingDot` (hero background) | `y: [0,-10,0]`, `opacity: [0.15,0.5,0.15]`, `scale: [1,1.3,1]` | duration `4–6s`, `repeat: Infinity`, `ease: easeInOut`, random delay |
| Franchise detail panel (slide-in) | `x: "100%" → 0`, `opacity: 0 → 1` | `spring, stiffness: 300, damping: 28` |
| Sticky header appear | `opacity 0→1`, `y: -20 → 0` | `duration: 0.2` |
| Hero eyebrow / heading | `opacity 0→1`, `y: 8/10 → 0` | `duration: 0.4`, staggered `delay: 0.1` |
| Search bar container | `opacity 0→1`, `y: 8→0` | `duration: 0.4, delay: 0.2` |
| Suggestions dropdown | `opacity 0→1`, `y:-6→0`, `scale: 0.97→1` | global `spring` |
| Suggestion row stagger | `opacity 0→1`, `x:-6→0` | `delay: i * 0.03` |
| Map container expand/collapse | `height: 0 → 34vh/100vh`, `opacity 0→1` | `spring, stiffness: 280, damping: 28` |
| Map markers appear | `scale 0→1`, `opacity 0→1` | `spring, stiffness: 300, damping: 18`, `delay: 0.2 + i*0.04` |
| Marker pulse ring (outer) | `scale: [0.5,1.4]`, `opacity: [0.5,0]` | `duration: 1.8, repeat: Infinity, ease: easeOut` |
| Marker pulse ring (inner) | `scale: [0.8,1.8]`, `opacity: [0.3,0]` | `duration: 1.8, repeat: Infinity, delay: 0.4` |
| Marker icon hover | `whileHover: scale 1.1`; active state `scale 1.4` | global `spring` |
| Map list-collapse toggle icon swap | `scale 0.5→1`, `rotate ±90→0`, `opacity 0→1` | `duration: 0.2` |
| List-collapse toggle button | `whileHover: scale 1.1`; `whileTap: scale 0.85` | — |
| Map popup card enter/exit | `opacity 0→1`, `scale:0.85→1`, `y:12→0` | global `spring` |
| Map popup accent bar fill | `scaleX: 0→1` | `duration:0.4, ease:easeOut` |
| Map popup favorite tap | `whileTap: scale 1.4` | — |
| Map popup close tap | `whileTap: scale 0.85, rotate 90` | — |
| Section grid stagger entrance | `stagger` (parent) + `cardVariant` (children) | `staggerChildren:0.06, delayChildren:0.12`; child `spring, stiffness:320, damping:24` |
| Swipe row (draggable carousel) | `drag="x"`, `dragElastic:0.12` | `dragTransition: { bounceStiffness:300, bounceDamping:30 }` |
| Swipe card tap | `whileTap: scale 0.97` | — |
| Swipe/grid card favorite tap | `whileTap: scale 1.3` | — |
| Swipe card view-details tap | `whileTap: scale 0.9` | — |
| Grid card tap | `whileTap: scale 0.97` (via `cardVariant` + `whileTap`), `layout` animation enabled | — |
| Load-more spinner dots | `y: [-3,3,-3]`, `opacity: [0.5,1,0.5]` | `duration:0.7, repeat:Infinity, ease:easeInOut`, staggered `delay: 0/0.12/0.24` |
| Undo snackbar enter/exit | `y:80→0`, `opacity 0→1`, `scale:0.92→1` | `spring, stiffness:400, damping:28` |
| Undo snackbar progress bar | `width: "100%" → "0%"` | `duration:5, ease:linear` |
| Undo button tap | `whileTap: scale 0.92` | — |
| Dismiss button tap | `whileTap: scale 0.85` | — |
| Generic CSS transitions | `transition-all duration-200/300`, `transition-colors`, `active:scale-95` | used on hover/active states across buttons, tabs, cards |

## 7. Effects

- **Glassmorphism**: `backdrop-blur-md` (back button), `backdrop-filter: blur(20px)` (undo snackbar).
- **Radial glow**: floating dots use `radial-gradient(circle, rgba(212,175,55,0.35), transparent)`.
- **Shimmer sweep**: animated translucent gradient bar across the static search icon swatch (`translateX(200%)`).
- **Ring highlight**: `ring-1 ring-[#d4af37]/25-30` applied to active swipe/grid cards.
- **Mask gradient**: hero side image uses `maskImage`/`WebkitMaskImage: linear-gradient(to right, transparent 0%, black 25%)` for fade-in effect.
- **Drop shadows on text**: ROI/investment/location labels over photos use `drop-shadow-[...]` for legibility.
- **Scrollbar hidden**: `scrollbar-hide` utility used on all horizontally/vertically scrollable containers.
- **Draggable carousel**: swipe row implemented with Framer Motion `drag="x"` + elastic bounce instead of native scroll-snap.
- **Undo/snackbar pattern**: dismiss actions trigger a bottom snackbar with animated countdown progress bar and "Undo" affordance.
- **Infinite scroll**: `IntersectionObserver` on `loadMoreRef` triggers `handleLoadMore` to progressively reveal cards (`visibleCount += 6`).
