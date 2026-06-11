# Phase 9 — Animations & Visual Polish

**Goal:** Add purposeful Framer Motion animations and final visual refinements without compromising performance or accessibility.

**Depends on:** Phases 3–8 (pages must exist to animate)  
**Blocks:** Phase 10 (performance audit)

---

## Guiding Principles (from spec + FRONTEND.md)

- **Professional elegance** — not over-animated
- Animations guide attention and communicate state
- Preferred durations: 150ms, 200ms, 300ms
- Animations run for all users — do **not** gate or disable motion based on `prefers-reduced-motion`
- Do NOT animate everything

---

## Animation Inventory (from spec)

| Animation | Where | Priority |
|-----------|-------|----------|
| Fade-in on scroll | Section reveals (Home, About, service pages) | High |
| Staggered card reveals | Services grid, Why Choose Us, Related Services | High |
| Counter animations | Impact statistics on Home | Medium |
| Animated service cards | Hover lift/subtle scale on service cards | Medium |
| Hero image movement | Subtle parallax or scale on hero background | Low |
| Page transitions | Route changes | Low (optional) |
| Hover interactions | Buttons, cards, nav links | High |
| Sticky CTA reveal | Floating "Book Consultation" on scroll | Medium |

---

## Implementation Architecture

```
lib/motion/
├── variants.ts          # Shared fade, stagger, slide variants
└── constants.ts         # Duration/easing tokens

components/motion/
├── fade-in-view.tsx     # Wrapper: animate when in viewport (once)
├── stagger-children.tsx # Parent for staggered lists
├── count-up.tsx         # Animated number counter
└── sticky-cta.tsx       # Floating consultation button
```

Do not add `useReducedMotion`, `prefers-reduced-motion` checks, or static fallbacks for accessibility motion preferences. Framer Motion components should always use their defined variants.

---

## Section-by-Section Plan

### Home Hero

- Text: fade up on load (200ms stagger between headline, subheadline, buttons)
- Background image: very subtle scale (1 → 1.02 over 8s)
- **Do not** animate hero on every scroll

### Impact Statistics

- `CountUp` component: animate from 0 to target when section enters viewport
- One-time animation only

### Services Grid / Feature Grids

- `FadeInView` on section container
- `staggerChildren: 0.08` on card grid
- Card hover: `translateY(-2px)` + subtle shadow (CSS transition, 150ms)

### Testimonials Slider

- Slide transition: 300ms ease
- Prefer CSS transform over layout animation
- Pause on hover/focus for accessibility

### Service Page Sections

- Fade-in each major section on scroll (subtle, 200ms)
- FAQ accordion: use shadcn default motion (already accessible)

### Sticky CTA

- Appears after user scrolls past hero (Intersection Observer)
- Slide up from bottom, 200ms
- Fixed position, z-index below mobile nav
- Dismissible (session storage) optional
- Single button: "Book Consultation"

---

## Page Transitions (Optional)

If implemented:

```tsx
// app/template.tsx with AnimatePresence
// Fade 150ms between routes
```

**Caution:** Can hurt perceived performance on slow devices. Test thoroughly. Skip if Lighthouse Performance drops below 95.

---

## Performance Guardrails

- Use `transform` and `opacity` only (GPU-friendly)
- Avoid animating `width`, `height`, `top`, `left`
- Lazy-load Framer Motion: dynamic import for below-fold components if bundle size is concern
- `viewport={{ once: true }}` on scroll animations — never re-trigger on every scroll pass
- Limit simultaneous animated elements on mobile

---

## Visual Polish (Non-Motion)

Final pass across all pages:

- [ ] Consistent section spacing audit
- [ ] Image optimization (`next/image`, proper sizes, WebP)
- [ ] Focus ring consistency on all interactive elements
- [ ] Link hover states site-wide
- [ ] Leadership team placeholder images → real photos or neutral avatar fallback
- [ ] Favicon + apple-touch-icon
- [ ] Loading skeleton for blog cards (if not done in Phase 8)

---

## Tasks Checklist

- [ ] Create motion utility library (variants + constants only)
- [ ] Build `FadeInView` wrapper component
- [ ] Build `CountUp` for impact stats
- [ ] Apply stagger animations to card grids
- [ ] Add card hover interactions (CSS)
- [ ] Build sticky CTA component
- [ ] Apply section fade-ins to Home, About, service template
- [ ] Testimonial slider transitions
- [ ] Optional: page transition template
- [ ] Image optimization pass
- [ ] Favicon set
- [ ] Full visual spacing audit

---

## Acceptance Criteria

- [ ] All defined animations play regardless of OS motion preferences
- [ ] No layout shift caused by animations (CLS = 0)
- [ ] Lighthouse Performance remains ≥ 95 on Home after animations
- [ ] Sticky CTA does not overlap mobile nav or form fields
- [ ] Site feels polished and premium, not "animation demo"
- [ ] All hover states have keyboard equivalents

---

## FRONTEND.md Alignment

| Rule | Application |
|------|-------------|
| Motion intentionally | Each animation has a purpose listed above |
| Fast, smooth, subtle | 150–300ms durations |
| Premium from motion + restraint | Counter + fade, not bouncing elements |
| Avoid decorating with animation | Skip page transitions if perf impact |
| No reduced-motion gating | Animations always active; no `prefers-reduced-motion` handling |

---

## Estimated Effort

**2–3 days**
