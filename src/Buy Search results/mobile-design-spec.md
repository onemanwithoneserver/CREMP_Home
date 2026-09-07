# Buy Search Results — `mobile.tsx` Design Spec

Design reference extracted from [mobile.tsx](mobile.tsx) (`BuySearchResultsMobile` component).

## 1. Typography

| Element | Classes | Size | Weight |
|---|---|---|---|
| Root font | `font-sans` | — | — |
| Hero eyebrow ("Property Discovery") | `font-bold uppercase tracking-[0.1em]` | `9px` | 700 |
| Hero heading | `font-extrabold leading-[1.1] tracking-tight` | `24px` | 800 |
| Search input (all variants) | `font-medium` | `12px` | 500 |
| Filter label ("Filter:") | `uppercase tracking-widest font-bold` | `9px` | 700 |
| Category tab | `font-semibold tracking-normal` | `10px` | 600 |
| Suggestion dropdown title | `font-bold leading-tight` | `12px` | 700 |
| Suggestion dropdown subtitle | `font-medium` | `9px` | 500 |
| Suggestion "No listings found" | `font-medium` | `10px` | 500 |
| Big card title | `font-semibold leading-tight truncate` | `12px` | 600 |
| Big card location | `font-medium` | `9px` | 500 |
| Big card price | `font-semibold` | `12px` | 600 |
| Big card area | `font-medium` | `9px` | 500 |
| Small card title | `font-semibold leading-tight truncate` | `8px` | 600 |
| Small card location | `font-medium` | `7px` | 500 |
| Small card price | `font-semibold` | `8px` | 600 |
| Collapsed carousel tab label | `font-semibold tracking-wider uppercase` | `11px` | 600 |
| Popup card title | `font-semibold leading-tight truncate` | `13px` | 600 |
| Popup card location/area | `font-medium` | `9–10px` | 500 |
| Popup "View Details" button label | `font-semibold` | `10px` | 600 |

## 2. Color Palette (Hex / RGB)

### Brand & Base
| Token | Value | Usage |
|---|---|---|
| Page background | `#fafbfd` | Root container background |
| Navy (primary) | `#0a1128` | Hero background base, dark text |
| Navy (secondary) | `#0b1b42` | Hero gradient mid, sticky bar bg, active buttons, borders |
| Navy (tertiary) | `#132254` | Hero gradient accent |
| Navy (quaternary) | `#0d1a3a` | Hero gradient end |
| Navy hover/gradient | `#142550` | Collapsed carousel tab gradient end |
| Gold / accent | `#d4af37` | Accent text, active states, borders, icons, glow |
| Gold (light) | `#f3cd52` | Gradient midpoint on focus ring |
| Off-white / panel bg | `#f8f9fc` | Sticky filter bar & category strip background |
| Map background gradient | `#f4f6f9 → #eef1f6 → #e8ecf2` | Map section background |

### Semantic / Status
| Token | Value | Usage |
|---|---|---|
| Price text | `emerald-400` (Tailwind) | Property price on card images |
| Delete / close icon | `text-red-400` / `text-red-500` | Close & remove icons |
| Popup close button bg | `bg-red-50` / `border-red-100` | Circular close button |

### Category Marker Colors (from `data.tsx`)
| Category | Background | Glow |
|---|---|---|
| Commercial / Office | `bg-blue-500` | `rgba(59,130,246,0.4)` |
| Retail | `bg-rose-500` | `rgba(244,63,94,0.4)` |
| Warehouse | `bg-amber-500` | `rgba(245,158,11,0.4)` |
| Mixed-use | `bg-violet-500` | `rgba(139,92,246,0.4)` |
| Business / Coworking | `bg-emerald-500` | `rgba(16,185,129,0.4)` |
| Industrial | `bg-cyan-500` | `rgba(6,182,212,0.4)` |
| Plot / Land | `bg-teal-500` | `rgba(20,184,166,0.4)` |
| Default / Fallback | `bg-[#d4af37]/10`, text `#d4af37` | `rgba(212,175,55,0.4)` |

### Opacity Variants (Navy `#0b1b42`)
- `/[0.03]`, `/[0.04]`, `/[0.05]`, `/[0.06]`, `/[0.08]`, `/[0.14]` — borders, hover backgrounds, dividers
- `/15`, `/25`, `/30`, `/35`, `/40`, `/50`, `/70` — muted text, icon states

## 3. Backgrounds & Gradients

| Element | CSS |
|---|---|
| Hero section | `linear-gradient(135deg, #0a1128 0%, #0b1b42 40%, #132254 70%, #0d1a3a 100%)` |
| Hero grid overlay | SVG pattern, `stroke: white`, container `opacity-[0.04]` |
| Floating dot glow | `radial-gradient(circle, rgba(212,175,55,0.35), transparent)` |
| Search icon shimmer | `linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)` |
| Focus ring glow (search bar) | `linear-gradient(90deg, #d4af37, #f3cd52, #d4af37)` |
| Sticky header top bar | solid `#0b1b42` |
| Map section background | `linear-gradient(to bottom right, #f4f6f9, #eef1f6, #e8ecf2)` (`bg-gradient-to-br`) |
| Map topo pattern | SVG concentric circles, `stroke: #0b1b42`, `opacity-[0.05]` |
| Map contour lines | SVG dashed paths, `stroke: #0b1b42`, `opacity-[0.03]` |
| Card image overlay (big card) | `linear-gradient(to top, rgba(10,17,40,0.7), rgba(10,17,40,0.1), transparent)` (`bg-gradient-to-t from-[#0a1128]/70 via-[#0a1128]/10 to-transparent`) |
| Card image overlay (small card) | `bg-gradient-to-t from-[#0a1128]/50 to-transparent` |
| Popup image overlay | `bg-gradient-to-r from-transparent to-[#0a1128]/5` + `bg-gradient-to-t from-[#0a1128]/50 to-transparent` |
| Collapsed carousel tab bg | `bg-gradient-to-r from-[#0b1b42] to-[#142550]` |
| Collapsed tab shimmer sweep | `bg-gradient-to-r from-transparent via-white/[0.06] to-transparent` |
| Sticky/main filter scroll fade (left) | `bg-gradient-to-r from-[#f8f9fc] via-[#f8f9fc] to-transparent` |
| Sticky/main filter scroll fade (right) | `bg-gradient-to-l from-[#f8f9fc] via-[#f8f9fc] to-transparent` |
| Property detail view close-button bar | `bg-gradient-to-b from-black/60 via-black/30 to-transparent` |
| Suggestions dropdown panel | `rgba(255,255,255,0.98)` with `backdrop-filter: blur(20px)` |
| Carousel sheet panel | `bg-white/95` with `backdrop-blur-xl` |

## 4. Shadows / Elevation

| Element | Box-shadow |
|---|---|
| Sticky header bar | `0 4px 20px rgba(0,0,0,0.2)` |
| Search bar (hero) | `0 4px 20px rgba(0,0,0,0.2)` |
| Active category tab | `0 2px 8px rgba(11,27,66,0.15)` |
| Active big card | `0 10px 30px rgba(212,175,55,0.25), 0 2px 10px rgba(10,17,40,0.1)` |
| Inactive big card | `0 2px 10px rgba(10,17,40,0.07)` → hover `0 12px 32px rgba(10,17,40,0.16)` |
| Active small card | `0 6px 18px rgba(212,175,55,0.2)` |
| Inactive small card | `0 1px 6px rgba(10,17,40,0.06)` → hover `0 8px 20px rgba(10,17,40,0.14)` |
| View-details button hover | `0 6px 18px rgba(212,175,55,0.45)` |
| View-details button (default) | `0 2px 8px rgba(11,27,66,0.3)` / `0 2px 8px rgba(11,27,66,0.25)` |
| Carousel sheet (bottom sheet) | `0 -14px 40px rgba(10,17,40,0.18), 0 -2px 8px rgba(10,17,40,0.08)` |
| Collapsed carousel tab | `4px 4px 20px rgba(11,27,66,0.3)` |
| Popup card | `0 -4px 24px rgba(10,17,40,0.12)` |
| Marker (active) | `shadow-lg` + category `glow` (see §2) |
| Marker (inactive) | `shadow-md` |
| Text drop-shadows (price/labels on images) | `drop-shadow-[0_1px_3px_rgba(0,0,0,0.6/0.7)]` |

## 5. Border Radius & Layout

- Standard control radius: `rounded-[4px]` (search bar, buttons, cards, tabs, popups)
- Circular buttons: `rounded-full` (favorite/close icons, view-details CTA, collapsed handle)
- Bottom sheet top corners: `rounded-t-[4px]`
- Collapsed tab: `rounded-r-[20px]`

## 6. Animations & Transitions (Framer Motion)

### Global spring preset
```ts
const spring = { type: "spring", stiffness: 400, damping: 28 };
```

### Component-level motion
| Element | Animation | Transition |
|---|---|---|
| `FloatingDot` (hero background) | `y: [0,-10,0]`, `opacity: [0.15,0.5,0.15]`, `scale: [1,1.3,1]` | duration `4–6s`, `repeat: Infinity`, `ease: easeInOut`, random delay |
| Property detail panel (slide-in) | `x: "100%" → 0`, `opacity: 0 → 1` | `spring, stiffness: 300, damping: 28` |
| Sticky header appear | `opacity 0→1`, `y: -20 → 0` | `duration: 0.2` |
| Hero eyebrow / heading | `opacity 0→1`, `y: 8/10 → 0` | `duration: 0.4`, staggered `delay: 0.1–0.2` |
| Search bar container | `opacity 0→1`, `y: 8→0` | `duration: 0.4, delay: 0.2` |
| Suggestions dropdown | `opacity 0→1`, `y:-6→0`, `scale: 0.97→1` | global `spring` |
| Suggestion row stagger | `opacity 0→1`, `x:-6→0` | `delay: i * 0.03` |
| Map container expand | `height: 0 → 130vh`, `opacity 0→1` | `spring, stiffness: 280, damping: 28` |
| Map markers appear | `scale 0→1`, `opacity 0→1` | `spring, stiffness: 300, damping: 18`, `delay: 0.2 + i*0.04` |
| Marker pulse ring (outer) | `scale: [0.5,1.4]`, `opacity: [0.5,0]` | `duration: 1.8, repeat: Infinity, ease: easeOut` |
| Marker pulse ring (inner) | `scale: [0.8,1.8]`, `opacity: [0.3,0]` | `duration: 1.8, repeat: Infinity, delay: 0.4` |
| Marker icon hover | `whileHover: scale 1.1`; active state `scale 1.4` | global `spring` |
| Bottom sheet (carousel) open/close | `y: "100%" ↔ 0` | `spring, damping: 28, stiffness: 260` |
| Drag handle hover/tap | `whileHover: scaleX 1.3, opacity 0.9`; `whileTap: scaleX 0.85` | — |
| Big property card entrance | `opacity 0→1`, `y:16→0`, `scale:0.95→1` | `spring, stiffness:300, damping:24`, `delay: idx*0.06` |
| Big card hover/tap | `whileHover: y:-4`; `whileTap: scale 0.96, y:2` | — |
| Card image zoom on hover | CSS `group-hover:scale-110`, `transition-transform duration-500 ease-out` | — |
| Card image mount zoom-out | `scale: 1.1/1.15 → 1` | `duration 0.5–0.6, ease: easeOut` |
| Favorite (bookmark) tap | `whileTap: scale 1.3–1.5, rotate 15` | — |
| Small card grid group entrance | `opacity 0→1`, `x:20→0` | `spring, stiffness:280, damping:22` |
| Small card entrance | `opacity 0→1`, `scale:0.9→1` | `spring, stiffness:350, damping:25`, staggered |
| Small card hover/tap | `whileHover: y:-3`; `whileTap: scale 0.94` | — |
| View-details button hover/tap | `whileHover: scale 1.08 + shadow glow`; `whileTap: scale 0.85, rotate -10` | — |
| Collapsed carousel tab enter/exit | `x: -60 ↔ 0`, `opacity 0↔1` | `spring, stiffness:320, damping:22` |
| Collapsed tab tap | `whileTap: scale 0.92` | — |
| Collapsed tab shimmer sweep | `x: ["-100%","200%"]` | `duration:3, repeat:Infinity, ease:easeInOut, repeatDelay:2` |
| Collapsed tab icon pulse ring | `scale: [1,1.4,1]`, `opacity: [0.4,0,0.4]` | `duration:2.5, repeat:Infinity, ease:easeInOut` |
| Marker popup card enter/exit | `y:60→0`, `opacity 0→1`, `scale:0.92→1` | `spring, stiffness:340, damping:26` |
| Popup buttons tap | `whileTap: scale 0.85–0.92` | — |
| Generic CSS transitions | `transition-all duration-200/300`, `transition-colors`, `transition-transform` | used on hover states across buttons, tabs, cards |

## 7. Effects

- **Glassmorphism**: `backdrop-blur-md` (back button), `backdrop-blur-sm` (icon buttons on images), `backdrop-blur-xl` (bottom sheet), `backdrop-filter: blur(20px)` (suggestions dropdown).
- **Radial glow**: floating dots use `radial-gradient(circle, rgba(212,175,55,0.35), transparent)`.
- **Shimmer sweep**: animated translucent gradient bar sliding across search icon buttons and collapsed carousel tab.
- **Ring highlight**: `ring-2 ring-inset ring-[#d4af37]/50-60` applied to active card images.
- **Mask gradient**: hero side image uses `maskImage`/`WebkitMaskImage: linear-gradient(to right, transparent 0%, black 25%)` for fade-in effect.
- **Drop shadows on text**: price/location labels over photos use `drop-shadow-[0_1px_3px/4px_rgba(0,0,0,0.6/0.7)]` for legibility.
- **Scrollbar hidden**: `scrollbar-hide` utility used on all horizontally/vertically scrollable containers.
- **Snap scrolling**: carousel uses `snap-x`/`snap-start` with `scrollSnapType: 'x mandatory'`.
