# Phase 4 — Services Hub & Page Template

**Goal:** Build the `/services` hub and a reusable, SEO-ready template that powers all ~50 individual service landing pages.

**Depends on:** Phase 2  
**Blocks:** Phase 5  
**Parallel with:** Phase 3 (can start once layout shell exists)

---

## Deliverables

- [ ] Services hub page with categorized card grid
- [ ] Reusable `ServicePageTemplate` component
- [ ] Static route pattern established (one `page.tsx` per service slug)
- [ ] Service content schema (TypeScript `ServicePage` type)
- [ ] At least 2 pilot static service pages fully populated (for QA)
- [ ] Related services logic

---

## Services Hub (`/services`)

### Categories (from spec)

Display as grouped sections or filterable grid:

1. Educational Consulting
2. Community Development *(grouped under spec categories — map to listed services)*
3. Leadership Development
4. Newcomer Integration
5. Research & Policy
6. Faith-Based Training *(Biblical & Theological Studies)*
7. Digital Skills
8. Consulting Services *(Entrepreneurship + general consulting)*

Also surface cross-cutting groups from spec:

- Peacebuilding & Reconciliation
- Holistic Development
- Entrepreneurship

**UX:** Category headings with service cards beneath. Optional client-side filter by category (no TanStack Query needed — static data is fine).

Each card links to `/[slug]` (e.g., `/college-admissions`).

---

## Service Page Template

Every service page shares this structure:

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Hero** | Service name, short tagline, primary CTA |
| 2 | **Overview** | What the service is (2–3 paragraphs, keyword-rich) |
| 3 | **Who We Serve** | Target audiences (students, newcomers, institutions, etc.) |
| 4 | **Benefits** | Bullet or icon grid of outcomes |
| 5 | **Process** | Step-by-step how GTN delivers the service |
| 6 | **FAQ** | 4–6 questions with Accordion (FAQ schema in Phase 7) |
| 7 | **CTA** | Book Consultation / Request Information |
| 8 | **Related Services** | 3 cards linking to sibling services |

### Template Component API

```typescript
// types/service.ts
export interface ServicePage {
  slug: string;
  title: string;
  category: ServiceCategory;
  metaTitle: string;
  metaDescription: string;
  hero: { headline: string; subheadline: string };
  overview: string;
  whoWeServe: string[];
  benefits: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  faq: { question: string; answer: string }[];
  relatedSlugs: string[];
}
```

```tsx
// components/templates/service-page-template.tsx
export function ServicePageTemplate({ service }: { service: ServicePage }) {
  // Compose sections
}
```

---

## Routing Strategy — Static Pages

Each service is a **dedicated static route** — no dynamic `[slug]` segment.

```
src/
├── app/(marketing)/
│   ├── services/page.tsx
│   ├── college-admissions/page.tsx
│   ├── newcomer-integration/page.tsx
│   └── ...                          # one folder per slug (~49 total)
└── content/services/
    ├── college-admissions.ts        # typed content object
    ├── newcomer-integration.ts
    └── index.ts                     # re-exports for hub + related-services
```

### Static page pattern

Each service route is a thin wrapper that imports content and renders the shared template:

```tsx
// app/(marketing)/college-admissions/page.tsx
import { collegeAdmissions } from "@/content/services/college-admissions";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { generateServiceMetadata } from "@/lib/seo/metadata";

export const metadata = generateServiceMetadata(collegeAdmissions);

export default function CollegeAdmissionsPage() {
  return <ServicePageTemplate service={collegeAdmissions} />;
}
```

Content file exports a `ServicePage`-typed object:

```typescript
// content/services/college-admissions.ts
import type { ServicePage } from "@/types/service";

export const collegeAdmissions: ServicePage = {
  slug: "college-admissions",
  title: "College Admissions",
  // ... all section content
};
```

**Build output:** every service page is pre-rendered at build time (`○ Static`). No ISR, no runtime fetching.

### Slug registry

Maintain authoritative slug list in `lib/services/registry.ts` — all 49 slugs from spec:

```
student-recruitment, college-admissions, university-admissions, ...
entrepreneurship-training, business-development-mentoring, ...
```

Validate at build time: every registry slug has both a content file and a matching `page.tsx`; no orphan files.

### Scaffolding new service pages

Optional script to generate the page + content stub from the registry:

```bash
npm run scaffold:service college-admissions
# Creates:
#   src/app/(marketing)/college-admissions/page.tsx
#   src/content/services/college-admissions.ts  (with [DRAFT] placeholders)
```

---

## Pilot Pages

Fully write content for these two pilots before Phase 5 batch work:

1. `/college-admissions` — flagship educational consulting page
2. `/newcomer-integration` — flagship newcomer page

Use these to validate template, SEO fields, and mobile layout.

---

## Related Services Logic

```typescript
function getRelatedServices(current: ServicePage, all: ServicePage[]): ServicePage[] {
  // 1. Prefer explicit relatedSlugs
  // 2. Fallback: same category, exclude current, take 3
}
```

---

## Breadcrumbs

Every service page:

```
Home > Services > [Category] > [Service Title]
```

Use `<BreadcrumbNav>` component; schema markup added in Phase 7.

---

## Tasks Checklist

- [ ] Define `ServicePage` TypeScript interface
- [ ] Build `ServicePageTemplate` with all 8 sections
- [ ] Build Services hub page with category groupings
- [ ] Create slug registry from PROJECT_SPEC
- [ ] Establish static page pattern (content file + `page.tsx` wrapper)
- [ ] Add `generateServiceMetadata()` helper for per-page exports
- [ ] Implement related services helper (reads from `content/services/index.ts`)
- [ ] Add breadcrumb navigation
- [ ] Write 2 pilot static pages end-to-end (`college-admissions`, `newcomer-integration`)
- [ ] Add scaffold script (optional) for Phase 5 batch work
- [ ] Verify hub links to all registry slugs (404 check script optional)

---

## Acceptance Criteria

- [ ] `/services` displays all categories and service links
- [ ] Pilot pages render complete template at correct URLs
- [ ] Template handles long FAQ answers and missing optional fields gracefully
- [ ] Single H1 per service page (service title)
- [ ] Primary CTA above the fold in hero and repeated in bottom CTA section
- [ ] Related services show 3 valid links
- [ ] Build generates static HTML for pilot routes (no dynamic segments)

---

## FRONTEND.md Alignment

| Rule | Application |
|------|-------------|
| Reuse existing patterns | Same Container, Section, CTA, Accordion as core pages |
| Accordion for FAQ | shadcn Accordion with keyboard support |
| Avoid excessive cards | Related services: 3 cards max; benefits can use simple list |
| One primary action per section | Hero CTA + bottom CTA only |

---

## Estimated Effort

**3–4 days**
