# GTN Post-Launch Backlog

Prioritized feature backlog derived from [phase-11-future-roadmap.md](./phase-11-future-roadmap.md) and [PROJECT_SPEC.md](../PROJECT_SPEC.md). **Nothing here is in v1 scope** until the client approves and funds a new phase.

**Prerequisite:** Phase 10 launch complete (production live, client sign-off).

---

## Out of v1 Scope (from spec)

| Feature | Priority | Complexity | Target wave |
|---------|----------|------------|-------------|
| CMS-managed service pages | Medium | Low | Wave 1 |
| Event registration | Medium | Medium | Wave 1 |
| Donation functionality | Medium | Medium | Wave 1 |
| Multi-language support | High | High | Wave 2 |
| Application portal (MVP) | High | High | Wave 2 |
| Online training courses | High | Very High | Wave 3 |
| Student dashboard | High | Very High | Wave 3 |
| Member portal | Medium | High | Wave 3 |

---

## Wave 1 — Content & Growth (1–2 months post-launch)

**Goal:** Easier content updates, community events, fundraising.

| # | Feature | Plan | Effort | Notes |
|---|---------|------|--------|-------|
| 1.1 | Enhanced CMS (Sanity Studio) | [future/wave-1-cms.md](./future/wave-1-cms.md) | 2–3 weeks | Service + insights migration path |
| 1.2 | Event registration | [future/wave-1-events.md](./future/wave-1-events.md) | 1–2 weeks | Resend notifications, Event JSON-LD |
| 1.3 | Donations (Stripe Checkout) | [future/wave-1-donations.md](./future/wave-1-donations.md) | 1–2 weeks | Confirm charity tax receipt rules |

**Also in Wave 1 scope (from Phase 7/9):**
- Per-service OpenGraph images
- Replace `[CLIENT CONTENT NEEDED]` placeholders

---

## Wave 2 — Audience Expansion (3–6 months)

| # | Feature | Plan | Effort | Notes |
|---|---------|------|--------|-------|
| 2.1 | Multi-language (EN + FR) | [future/wave-2-i18n.md](./future/wave-2-i18n.md) | 8–12 weeks | `next-intl`, hreflang, translated CMS |
| 2.2 | Application portal MVP | [future/wave-2-applications.md](./future/wave-2-applications.md) | 6–10 weeks | Multi-step form, file upload, no auth v1 |

**Prerequisites:** See [TECH-DEBT.md](./TECH-DEBT.md) (Turnstile, Sentry, DB, E2E).

---

## Wave 3 — Platform (6–12 months)

| # | Feature | Plan | Effort | Notes |
|---|---------|------|--------|-------|
| 3.1 | Online training courses | [future/wave-3-courses.md](./future/wave-3-courses.md) | 3–4 months | Video (Mux/Vimeo), progress, auth |
| 3.2 | Student dashboard | [future/wave-3-dashboard.md](./future/wave-3-dashboard.md) | 2–3 months | Application status, documents |
| 3.3 | Member portal | [future/wave-3-member-portal.md](./future/wave-3-member-portal.md) | 2–3 months | Gated resources, partner roles |

**Stack additions:** Auth provider, Postgres/Supabase, blob storage, optional TanStack Query.

---

## Estimation summary

| Wave | Duration | Team |
|------|----------|------|
| Wave 1 | 4–6 weeks | 1 dev + content editor |
| Wave 2 | 8–12 weeks | 1–2 devs |
| Wave 3 | 4–6 months | 2+ devs + design |

---

## How to start a backlog item

1. Client approves feature + wave
2. Record/update decision in [decisions/](./decisions/)
3. Expand the linked `PLANS/future/*.md` into a full phase plan with acceptance criteria
4. Branch `feature/wave-N-*` and implement

---

## Decision log

Architecture decisions live in [decisions/README.md](./decisions/README.md).
