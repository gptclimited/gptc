# ADR 001: Static Service Pages

**Feature:** Service page architecture  
**Date:** 2025-02-01  
**Status:** Accepted (v1)  
**Decision:** build

## Context

GTN has ~49 service landing pages. Options: dynamic `[slug]` route, CMS-driven pages, or static routes with shared template.

## Decision

One static `page.tsx` per service slug under `src/app/(marketing)/[slug]/`, composing shared `ServicePageTemplate` with typed content in `src/content/services/[slug].ts`.

## Rationale

- Maximum SEO control and build-time validation
- No CMS cost or complexity for v1
- Matches client review workflow during content phase
- Slug registry + validate scripts catch missing routes at CI time

## Consequences

**Positive:** Fast static delivery, predictable builds, full TypeScript content safety.

**Negative:** Content edits require a developer deploy unless Wave 1 CMS migration is done.

## Dependencies

- Blocks: Phase 5 content, Phase 7 SEO per-page metadata
- Blocked by: Phase 1 foundation

## Estimated effort

Implemented in Phases 4–5.

## Alternatives considered

| Option | Pros | Cons |
|--------|------|------|
| Dynamic `[slug]` | Less boilerplate | Weaker build-time guarantees, harder per-page customization |
| Sanity CMS (v1) | Non-technical editing | Studio setup, preview mode, migration effort |
| MDX files | Git-based content | 49 MDX files + frontmatter still dev-oriented |

## Follow-up

- [ ] Revisit if client needs self-service editing (see Wave 1 CMS in BACKLOG.md)
