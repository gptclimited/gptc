# Phase 3 — Core Pages (Home, About, Contact)

**Goal:** Ship the three highest-traffic pages that establish GTN's brand story and conversion paths.

**Depends on:** Phase 2  
**Blocks:** Phase 6 (Contact form), Phase 7 (SEO for core routes)

---

## Deliverables

- [ ] Home page with all spec sections
- [ ] About page with full organizational content
- [ ] Contact page with map, office info, and form placeholder
- [ ] All pages responsive and content-complete (placeholder stats/testimonials OK with client review flag)

---

## Page 1: Home (`/`)

### Sections (in order)

| # | Section | Spec Content |
|---|---------|--------------|
| 1 | **Hero** | Headline: *"Empowering Students, Newcomers, Families, and Communities Through Education and Transformation"* · Subheadline per spec · CTAs: Book Consultation + Explore Services |
| 2 | **Impact Statistics** | Students Supported · Programs Delivered · Community Partnerships · Countries Served (counter animation in Phase 9) |
| 3 | **About GTN** | Mission + Vision summary with link to `/about` |
| 4 | **Services Overview** | Grid of service category cards linking to hub or individual pages |
| 5 | **Why Choose Us** | Personalized Guidance · Global Perspective · Experienced Advisors · Holistic Support · Community-Centered Approach |
| 6 | **Testimonials** | Slider with 3–5 testimonials (client to supply copy) |
| 7 | **CTA Banner** | "Book Your Consultation" |
| 8 | Footer | Already in layout |

### Home Page UX Notes

- Hero: one dominant CTA (Book Consultation), secondary outline button (Explore Services)
- Services grid: 9 category cards — avoid overcrowding; use consistent card height
- Testimonials: accessible slider with prev/next buttons and keyboard support
- Keep sections visually distinct with whitespace, not heavy decoration

---

## Page 2: About (`/about`)

### Sections

| Section | Content |
|---------|---------|
| Page Header | Title + breadcrumb |
| Our Story | Narrative history of GTN |
| Vision | Vision statement |
| Mission | Mission statement |
| Strategic Objectives | Bulleted or card grid |
| Core Values | 4–6 values with short descriptions |
| Expected Impact | Impact-focused storytelling |
| Leadership Team | Photo + name + title cards (client supplies bios/photos) |
| CTA Banner | Book Consultation |

**Content note:** Mark sections with `[CLIENT CONTENT NEEDED]` placeholders where copy is not yet available. Structure should be final even if copy is draft.

---

## Page 3: Contact (`/contact`)

### Sections

| Section | Content |
|---------|---------|
| Page Header | "Contact Us" |
| Contact Info | Address, phone, email (from constants) |
| Google Map | Embedded map for 19897 82 Avenue, Langley, BC |
| Contact Form | Placeholder UI in Phase 3; wired to Resend in Phase 6 |
| Office Information | Hours, directions, parking notes if available |
| CTA | Book Consultation link/button |

### Map Implementation

- Use Google Maps embed iframe (no API key required for basic embed)
- Lazy-load iframe for performance
- Provide text address as fallback/link to Google Maps

### Form Placeholder (Phase 3)

Build the form UI with React Hook Form + Zod schema but submit to a stub handler. Fields:

- Full Name (required)
- Email (required)
- Phone (optional)
- Subject / Inquiry Type (select)
- Message (required)

Phase 6 connects the submit handler to Resend.

---

## Shared Patterns

Reuse from Phase 2:

- `<Container>` + `<Section>` for every block
- `<PageHeader>` on About and Contact
- `<CtaBanner>` at bottom of Home and About
- `<FeatureGrid>` for Why Choose Us
- `<ServiceCard>` for Services Overview
- `<StatCounter>` for Impact Statistics (static numbers in Phase 3, animated in Phase 9)

---

## Content Constants

Extend `lib/constants.ts`:

```typescript
export const impactStats = [
  { label: "Students Supported", value: 0 /* client provides */ },
  { label: "Programs Delivered", value: 0 },
  { label: "Community Partnerships", value: 0 },
  { label: "Countries Served", value: 0 },
];

export const whyChooseUs = [ /* 5 items from spec */ ];
export const serviceCategories = [ /* 9 categories with slug + description */ ];
```

---

## Tasks Checklist

- [ ] Build Home page composing all section components
- [ ] Build About page with all sections
- [ ] Build Contact page with map embed
- [ ] Build contact form UI (stub submit)
- [ ] Add placeholder testimonials with clear client-review markers
- [ ] Link all CTAs to `/contact` or consultation anchor (form type selector in Phase 6)
- [ ] Verify mobile layout for each section
- [ ] Verify all internal links resolve (no 404s among built routes)

---

## Acceptance Criteria

- [ ] All three pages render at correct routes
- [ ] Hero headline and CTAs match spec verbatim
- [ ] Contact info matches spec (address, phone, email)
- [ ] Google Map displays correct location
- [ ] Each page has exactly one primary CTA per major section
- [ ] Readable on 320px–1920px viewports
- [ ] Semantic heading hierarchy (single H1 per page)
- [ ] No lorem ipsum in production-facing copy — use spec text or `[CLIENT CONTENT NEEDED]`

---

## FRONTEND.md Alignment

| Rule | Application |
|------|-------------|
| Design for real content | Plan for long names, missing photos, empty testimonials |
| Visual hierarchy | Hero → stats → services → social proof → CTA flow |
| Reduce cognitive load | Limit nav clutter; clear section separation |
| Forms feel effortless | Contact form: minimal fields, clear labels (Phase 3 UI) |
| Premium feel from spacing | Generous section padding between blocks |

---

## Estimated Effort

**3–4 days**
