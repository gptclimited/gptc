# GTN Website — Master Plan Overview

This document is the entry point for the phased build plan of the [Global Training Network](https://globaltrainingnetwork.org) website. Each phase lives in its own file under `PLANS/` and should be completed in order unless noted otherwise.

---

## Project Summary

Build a modern, SEO-optimized marketing website for GTN — a consulting, training, mentorship, and educational organization. The site must establish credibility, explain services clearly, generate consultation inquiries, and rank well in search engines.

**Primary CTAs:** Book a Consultation · Request Information · Contact Us  
**Secondary CTAs:** Apply for Educational Consulting · Join Training Programs · Partner With Us

---

## Technology Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Animation | Framer Motion |
| Service pages | Static Next.js pages (one route per service) |
| Blog / Insights | MDX content collections or Sanity CMS (decide in Phase 8) |
| Forms | React Hook Form + Zod |
| Email | Resend |
| SEO | Next Metadata API, dynamic sitemap, robots.txt, JSON-LD |
| Analytics | Google Analytics + Google Search Console |
| Deployment | Vercel |

---

## Design Direction

- **Personality:** Educational institution + consulting firm + nonprofit impact organization
- **Palette:** Primary `#0B3C5D` · Secondary `#1D70B8` · Accent `#F4B400` · Neutrals per spec
- **Typography:** Inter (headings + body)
- **Feel:** Modern, professional, premium, trustworthy, accessible — neutral-heavy surfaces with brand color used sparingly on CTAs and highlights

UI/UX decisions should follow `FRONTEND.md` where applicable. Items that do **not** apply to this project (no dashboards, tables, React Native, TanStack Query, or Zustand for v1) are called out in individual phase docs.

---

## Phase Map

| Phase | File | Focus | Depends On |
|-------|------|-------|------------|
| 1 | [phase-01-foundation.md](./phase-01-foundation.md) | Repo setup, tooling, design tokens, deployment pipeline | — |
| 2 | [phase-02-design-system.md](./phase-02-design-system.md) | Shared components, layout shell, navigation, footer | Phase 1 |
| 3 | [phase-03-core-pages.md](./phase-03-core-pages.md) | Home, About, Contact pages | Phase 2 |
| 4 | [phase-04-services-hub-template.md](./phase-04-services-hub-template.md) | Services hub + reusable service page template | Phase 2 |
| 5 | [phase-05-service-pages-content.md](./phase-05-service-pages-content.md) | All ~50 individual service landing pages | Phase 4 |
| 6 | [phase-06-forms-integrations.md](./phase-06-forms-integrations.md) | Contact forms, consultation CTAs, Resend email | Phase 3 |
| 7 | [phase-07-seo-metadata.md](./phase-07-seo-metadata.md) | Metadata, JSON-LD, sitemap, OpenGraph, canonical URLs | Phases 3–5 |
| 8 | [phase-08-blog-insights.md](./phase-08-blog-insights.md) | Blog/Insights section + launch articles | Phase 1, 7 |
| 9 | [phase-09-animations-polish.md](./phase-09-animations-polish.md) | Framer Motion, micro-interactions, visual polish | Phases 3–8 |
| 10 | [phase-10-qa-launch.md](./phase-10-qa-launch.md) | Performance, accessibility audit, analytics, launch | All prior |
| 11 | [phase-11-future-roadmap.md](./phase-11-future-roadmap.md) | Post-launch expansion (out of v1 scope) | Launch |

Post-launch backlog: [BACKLOG.md](./BACKLOG.md) · Decisions: [decisions/](./decisions/) · Tech debt: [TECH-DEBT.md](./TECH-DEBT.md)

---

## Site Structure (Target)

```
/                          Home
/about                     About GTN
/services                  Services hub
/college-admissions        Static service pages (~49 routes, one folder per slug)
/contact                   Contact + map + form
/insights                  Blog listing (Phase 8)
/insights/[slug]           Blog articles
```

---

## Success Criteria (Launch)

1. Consultation and contact forms deliver email via Resend
2. Every service has a dedicated SEO landing page with FAQ + breadcrumb schema
3. Lighthouse targets: Performance 95+, SEO 100, Accessibility 100, Best Practices 100
4. WCAG AA compliance across all public pages
5. Mobile-first responsive layout on all breakpoints
6. Google Analytics + Search Console connected
7. At least 8 launch blog articles published (Phase 8)

---

## Content Inventory

### Service page categories (~50 pages)

- Educational Consulting (12)
- Newcomer Integration (6)
- Leadership Development (5)
- Peacebuilding & Reconciliation (5)
- Holistic Development (5)
- Biblical & Theological Studies (4)
- Digital Skills (4)
- Research & Policy (4)
- Entrepreneurship (4)

Full slug list is in `PROJECT_SPEC.md`.

### Launch blog articles (8 suggested)

1. How to Study in Canada as an International Student
2. Top Scholarship Opportunities for International Students
3. Educational Pathway Planning Explained
4. How Newcomers Can Successfully Integrate into Canadian Communities
5. Leadership Skills Every Student Needs
6. Conflict Resolution Strategies for Families and Communities
7. AI Skills Every Student Should Learn
8. *(Reserve slot for client-provided content)*

---

## Working Conventions

- **Component layers:** primitives → shared components → feature sections → pages
- **Spacing:** 8px system (`p-4`, `p-6`, `p-8`, `gap-4`, etc.)
- **Containers:** `max-w-7xl` for main content, `max-w-3xl` for prose
- **One primary CTA per section** — avoid competing actions
- **Build systems, not screens** — no one-off styling
- **Service pages are static** — each slug is its own `page.tsx`; shared layout via `ServicePageTemplate`, not a dynamic `[slug]` route

---

## How to Use These Plans

1. Read this overview first.
2. Execute phases sequentially; each file lists deliverables, tasks, and acceptance criteria.
3. Mark phases complete only when acceptance criteria are met.
4. Defer anything in Phase 11 until after launch unless the client explicitly scopes it into v1.
5. When prioritizing post-launch work, start from [BACKLOG.md](./BACKLOG.md) and record decisions in [decisions/](./decisions/).
