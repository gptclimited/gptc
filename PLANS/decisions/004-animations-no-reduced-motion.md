# ADR 004: Animations Without Reduced-Motion Gating

**Feature:** Framer Motion behavior  
**Date:** 2025-03-01  
**Status:** Accepted (v1)  
**Decision:** build

## Context

Standard accessibility practice often disables motion when `prefers-reduced-motion: reduce` is set. Client/project plans explicitly required animations for all users.

## Decision

All Framer Motion components use defined variants with no `useReducedMotion`, no `prefers-reduced-motion` media queries, and no static fallbacks for motion preferences.

## Rationale

- Explicit client/project requirement in Phase 9 plan and FRONTEND.md alignment
- Keeps implementation simple and consistent

## Consequences

**Positive:** Uniform experience; simpler motion code.

**Negative:** Users who prefer reduced motion still see animations; document if client policy changes.

## Dependencies

- Phase 9 implementation

## Estimated effort

Phase 9 (2–3 days).

## Alternatives considered

| Option | Pros | Cons |
|--------|------|------|
| Respect `prefers-reduced-motion` | WCAG-friendly motion | Against project spec |
| CSS-only motion | Smaller JS bundle | Less control for stagger/counter |

## Follow-up

- [ ] Revisit only if client requests accessibility policy change post-launch
