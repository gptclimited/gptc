# Phase 11 — Future Roadmap (Post-Launch)

**Goal:** Document planned expansions from the spec that are **out of v1 launch scope**. Use this as a backlog for Phase 2 of the GTN digital platform.

## Deliverables

- [x] Post-launch feature backlog documented ([BACKLOG.md](./BACKLOG.md))
- [x] Technical debt tracker ([TECH-DEBT.md](./TECH-DEBT.md))
- [x] Architecture decision log ([decisions/](./decisions/))
- [x] v1 architecture decisions recorded (ADRs 001–006)
- [x] Draft plan stubs for Wave 1–3 features ([future/](./future/))
- [ ] Individual features scoped into full phase plans — when client prioritizes

---

## Out-of-Scope Items (from PROJECT_SPEC.md)

| Feature | Priority | Complexity | Notes |
|---------|----------|------------|-------|
| CMS-managed service pages | Medium | Low | v1 uses static pages; migrate to Sanity or MDX if non-technical editing is needed |
| Multi-language support | High | High | i18n routing, translated content, hreflang tags |
| Application portal | High | High | Student/program applications with auth |
| Online training courses | High | Very High | LMS features, video, progress tracking |
| Student dashboard | High | Very High | Authenticated user area |
| Event registration | Medium | Medium | Events CMS + registration forms + calendar |
| Member portal | Medium | High | Auth, roles, gated content |
| Donation functionality | Medium | Medium | Stripe/PayPal integration, receipts |

---

## Recommended Roadmap Order

### Wave 1 — Content & Growth (1–2 months post-launch)

**1. Enhanced CMS Workflow**
- Sanity Studio customization for non-technical editors
- Preview mode for draft content
- Media library for team photos and testimonials

**2. Event Registration**
- `/events` listing + `/events/[slug]` detail pages
- Simple registration form → Resend notification (same pattern as Phase 6)
- Google Calendar embed or iCal export
- Event schema JSON-LD

**3. Donation Functionality**
- Stripe Checkout or donation platform embed
- `/donate` page with impact messaging
- Tax receipt workflow (consult accountant for Canadian charity rules)

---

### Wave 2 — Audience Expansion (3–6 months)

**4. Multi-Language Support**

Priority languages (confirm with client):
- English (default)
- French (Canadian requirement consideration)
- Additional community languages TBD

Technical approach:
- `next-intl` or Next.js i18n routing
- Translated content in Sanity with locale field
- `hreflang` alternate links
- Language switcher in header

**5. Application Portal (MVP)**

Scope minimization for MVP:
- `/apply` landing with program selection
- Multi-step application form (FRONTEND.md: steps + progress indicator)
- File upload (transcripts, IDs) → cloud storage
- Admin notification email
- No auth initially — track by application ID + email

Future: authenticated status tracking.

---

### Wave 3 — Platform Features (6–12 months)

**6. Online Training Courses**

Requires significant architecture:

- Course catalog (`/courses`)
- Lesson pages with video embed (Mux or Vimeo)
- Progress tracking (requires auth)
- Certificates on completion

Stack additions: auth provider (Clerk/Auth.js), database (Postgres/Supabase), video hosting.

**7. Student Dashboard**

Authenticated area:

- Application status
- Enrolled courses + progress
- Document uploads
- Messaging with advisors (future)

Stack: Auth.js + Supabase or similar.

**8. Member Portal**

For partner organizations and faith-based partners:

- Gated resources (PDFs, toolkits)
- Partner directory
- Role-based access (admin, partner, student)

---

## Technical Debt to Address Before Scaling

| Item | When |
|------|------|
| Replace honeypot with Turnstile/reCAPTCHA | Before application portal |
| Add error monitoring (Sentry) | Post-launch Week 1 |
| Database for form submissions (not just email) | Before application portal |
| Auth system | Before dashboard/member portal |
| CDN for user uploads | Before application portal |
| E2E test suite (Playwright) | Before application portal |

---

## FRONTEND.md Considerations for Future Phases

| Future Feature | Relevant FRONTEND.md Rules |
|----------------|---------------------------|
| Application portal | Forms (steps, progress), empty/loading states |
| Student dashboard | Dashboard hierarchy rules (§25–26), tables if listing applications |
| Online courses | Empty states, skeleton loaders, progress indicators |
| Member portal | Table rules if admin views, dashboard shell pattern |
| Multi-language | Typography scale must work across scripts |

Items that become applicable in future waves:
- TanStack Query (authenticated data fetching)
- Zustand (light client state for multi-step forms)
- Dashboard and table rules

---

## Estimation Summary (Rough)

| Wave | Duration | Team |
|------|----------|------|
| Wave 1 | 4–6 weeks | 1 dev + content editor |
| Wave 2 | 8–12 weeks | 1–2 devs |
| Wave 3 | 4–6 months | 2+ devs + design |

---

## Decision Log Template

When scoping any Phase 11 item, record:

```
Feature: [name]
Date: [decision date]
Decision: [build / defer / buy]
Rationale: [...]
Dependencies: [...]
Estimated effort: [...]
```

Store decisions in `PLANS/decisions/` as the project evolves.

---

## No Acceptance Criteria

This phase has no launch gate — it is a backlog reference. Individual features should get their own plan files when prioritized (e.g., `PLANS/phase-12-i18n.md`).
