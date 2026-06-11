# Phase 2 — Design System & Layout Shell

**Goal:** Build the reusable component library and global layout (header, footer, navigation) that every page will compose from.

**Depends on:** Phase 1  
**Blocks:** Phases 3, 4, 6

---

## Deliverables

- [ ] Layout shell with responsive header and footer
- [ ] Core shadcn components customized to GTN brand
- [ ] Shared section primitives (Container, Section, PageHeader)
- [ ] Navigation with mobile menu
- [ ] Sticky CTA component (shell only — wired in Phase 9)
- [ ] 404 and basic error pages

---

## Component Inventory

### Primitives (shadcn — customize, don't leave default)

| Component | Customization |
|-----------|---------------|
| `Button` | Primary (brand), secondary (outline), ghost; sizes sm/md/lg |
| `Card` | Neutral surface, subtle border, no heavy shadow |
| `Input`, `Textarea`, `Label` | Form-ready styling for Phase 6 |
| `Select`, `Checkbox` | If needed for multi-step forms |
| `Accordion` | FAQ sections on service pages |
| `Sheet` | Mobile navigation drawer |
| `Badge` | Service category tags |
| `Separator` | Section dividers |
| `Skeleton` | Loading states for blog (Phase 8) |

### Layout Components

```
components/layout/
├── site-header.tsx       # Logo, nav, CTA button
├── site-footer.tsx       # Contact, socials, quick links
├── mobile-nav.tsx        # Sheet-based mobile menu
├── container.tsx         # max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
├── section.tsx           # Consistent vertical padding (py-16 lg:py-24)
└── page-header.tsx       # Title + breadcrumb slot
```

### Shared Section Components (stubs — filled in Phase 3)

```
components/sections/
├── hero.tsx
├── stat-counter.tsx      # Impact statistics
├── service-card.tsx
├── testimonial-slider.tsx
├── cta-banner.tsx
├── feature-grid.tsx      # "Why Choose Us" pattern
└── breadcrumb-nav.tsx
```

Build these as composable shells in Phase 2; populate with real content in Phase 3.

---

## Header Design

**Desktop:**

- Logo (left)
- Nav links: Home · About · Services · Insights · Contact
- Primary CTA button: "Book Consultation" (right, accent or primary)

**Mobile:**

- Logo + hamburger
- Sheet drawer with full nav + CTA at bottom
- Tap targets ≥ 44px

**Behavior:**

- Sticky on scroll with subtle background blur/border (subtle depth only)
- Active link indicator
- Services link goes to `/services` hub

---

## Footer Design

Sections (4-column on desktop, stacked on mobile):

1. **Brand** — Logo, short tagline, social icons
2. **Quick Links** — Home, About, Services, Contact, Insights
3. **Services** — Top 5–6 service category links
4. **Contact** — Address, phone, email (from constants)

```
19897 82 Avenue, Langley, BC V2Y 1Y7
604-727-6553
info@globaltrainingnetwork.org
```

Footer CTA: "Book Your Consultation"

---

## Navigation Data

Centralize in `lib/constants.ts`:

```typescript
export const siteConfig = {
  name: "Global Training Network",
  url: "https://globaltrainingnetwork.org",
  contact: { /* address, phone, email */ },
  social: { /* placeholders until client provides */ },
};

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];
```

---

## Root Layout

`app/layout.tsx` should include:

- Inter font class on `<body>`
- `<SiteHeader />` + `{children}` + `<SiteFooter />`
- Metadata defaults (title template, description — refined in Phase 7)
- Skip-to-content link for accessibility

Use route group `(marketing)` for all public pages sharing this layout.

---

## 404 Page

- Friendly message aligned with GTN tone
- Links back to Home and Services
- Same header/footer shell
- No dead-end UX

---

## Tasks Checklist

- [ ] Install required shadcn components
- [ ] Customize Button variants with GTN colors
- [ ] Build Container + Section wrappers
- [ ] Build SiteHeader with responsive nav
- [ ] Build SiteFooter with contact info
- [ ] Build MobileNav with Sheet
- [ ] Create section component stubs
- [ ] Wire root layout
- [ ] Build 404 page
- [ ] Verify keyboard navigation through header/footer
- [ ] Verify color contrast on all interactive elements (WCAG AA)

---

## Acceptance Criteria

- [ ] Header/footer render on a placeholder home page
- [ ] Mobile menu opens, closes, and traps focus correctly
- [ ] All nav links route correctly (placeholder pages OK)
- [ ] One primary CTA visible in header at all breakpoints
- [ ] Spacing follows 8px system throughout
- [ ] No generic shadcn template look — brand colors applied
- [ ] Lighthouse Accessibility ≥ 95 on layout-only page

---

## FRONTEND.md Alignment

| Rule | Application |
|------|-------------|
| Component-first development | Full inventory above |
| Neutral-heavy interfaces | Cards/surfaces use neutrals; brand on CTAs |
| Whitespace / 8px spacing | Section + Container components enforce this |
| One primary action per section | Header: one CTA; Footer: one CTA |
| Mobile-first | Build mobile nav first, then desktop |
| Accessibility mandatory | Focus states, semantic nav, skip link |
| Avoid generic template UI | Customize shadcn; restrained, premium feel |

**Not applicable:** Dashboard rules, table rules, excessive cards warning (cards are appropriate for services grid).

---

## Estimated Effort

**2–3 days**
