# ADR 005: Post-Launch Wave Priorities

**Feature:** Phase 11 roadmap ordering  
**Date:** 2026-06-10  
**Status:** Accepted  
**Decision:** defer (individual features; order accepted)

## Context

PROJECT_SPEC.md lists several features out of v1 scope. Need agreed priority for post-launch investment.

## Decision

Execute post-launch work in three waves (from Phase 11 plan):

1. **Wave 1 (1–2 months):** CMS workflow, event registration, donations  
2. **Wave 2 (3–6 months):** Multi-language (EN + FR first), application portal MVP  
3. **Wave 3 (6–12 months):** Online courses, student dashboard, member portal  

No wave starts until v1 launch sign-off (Phase 10) is complete.

## Rationale

- Wave 1 improves content velocity and fundraising without auth
- Wave 2 addresses Canadian bilingual consideration and lead capture
- Wave 3 requires auth + database architecture (see ADR 006)

## Consequences

**Positive:** Clear sequencing; avoids building LMS before CMS/events.

**Negative:** Client may want to reprioritize; update this ADR when they do.

## Dependencies

- Blocked by: Phase 10 production launch + client sign-off
- Blocks: Individual feature plans (create `PLANS/future/*.md` when prioritized)

## Estimated effort

See [../BACKLOG.md](../BACKLOG.md) estimation table.

## Alternatives considered

| Option | Pros | Cons |
|--------|------|------|
| Application portal first | High business value | Needs auth/storage sooner |
| i18n first | Legal/audience reach | High content translation cost |
| Do everything in parallel | Faster feature count | Architecture debt, team overload |

## Follow-up

- [ ] Client workshop to confirm Wave 1 scope
- [ ] Create dedicated plan file when first Wave 1 item is approved
