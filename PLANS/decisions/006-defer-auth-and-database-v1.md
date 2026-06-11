# ADR 006: Defer Auth, Database, and Portals in v1

**Feature:** Application portal, dashboards, member area, LMS  
**Date:** 2026-06-10  
**Status:** Accepted (v1)  
**Decision:** defer

## Context

PROJECT_SPEC.md lists application portal, student dashboard, member portal, and online courses. These require authenticated users and persistent data.

## Decision

Ship v1 as a **public marketing site only**. No user accounts, no Postgres/Supabase, no file uploads, no gated content.

## Rationale

- v1 goal: credibility, SEO, consultation leads
- Auth + DB adds weeks of scope and ongoing maintenance
- Forms + email sufficient for launch conversion targets

## Consequences

**Positive:** Faster launch, simpler security surface, lower hosting cost.

**Negative:** Application status tracking, course progress, and partner resources wait until Wave 2–3.

## Dependencies

- Unblocks: Phase 10 launch
- Future requires: Auth.js or Clerk, database, blob storage (see TECH-DEBT.md)

## Estimated effort

Wave 2 application MVP: ~8–12 weeks (1–2 devs).  
Wave 3 platform: 4–6 months (2+ devs).

## Alternatives considered

| Option | Pros | Cons |
|--------|------|------|
| Clerk + Supabase from day one | Ready for portals | Over-engineering for marketing launch |
| Google Forms for applications | Quick | Off-brand, poor integration |

## Follow-up

- [ ] Choose auth provider before Wave 2 scoping
- [ ] Add Sentry + E2E tests before application portal (TECH-DEBT.md)
