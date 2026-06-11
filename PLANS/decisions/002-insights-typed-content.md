# ADR 002: Insights as Typed Content

**Feature:** Blog / Insights content model  
**Date:** 2025-02-20  
**Status:** Accepted (v1)  
**Decision:** build

## Context

Phase 8 required 8 launch articles. Spec allowed Sanity CMS or MDX/content collections.

## Decision

Typed TypeScript files in `src/content/insights/` with markdown bodies rendered via `react-markdown`. Registry in `index.ts`. Static `/insights/[slug]` routes.

## Rationale

- Consistent with service content pattern (Phases 4–5)
- No external CMS credentials for v1
- Full control over SEO metadata and internal service links
- 8 articles manageable without editorial workflow

## Consequences

**Positive:** Simple deploy model, type-safe frontmatter, no CMS bill.

**Negative:** Non-technical authors cannot publish without developer help.

## Dependencies

- Blocks: Phase 7 Article JSON-LD, RSS feed, sitemap entries
- Blocked by: Phase 1

## Estimated effort

Phase 8 (~3–5 days as planned).

## Alternatives considered

| Option | Pros | Cons |
|--------|------|------|
| Sanity CMS | Preview, media library, roles | Setup time, ongoing cost |
| MDX files | Authoring in markdown files | MDX pipeline config, less structured than TS exports |
| Headless WordPress | Familiar to some clients | Hosting, security, overkill for v1 |

## Follow-up

- [ ] Migrate to Sanity if publishing frequency exceeds ~2 articles/month (Wave 1)
