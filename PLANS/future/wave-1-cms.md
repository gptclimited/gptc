# Wave 1 — Enhanced CMS Workflow (Draft)

**Status:** Backlog — not scheduled  
**Depends on:** v1 launch, client approval  
**Related ADR:** [006-defer-auth](../decisions/006-defer-auth-and-database-v1.md), [001-static-service-pages](../decisions/001-static-service-pages.md)

## Goal

Allow non-technical GTN staff to edit service pages and insights without TypeScript deploys.

## Scope (when prioritized)

- Sanity Studio with schemas: `service`, `post`, `category`, `author`
- Preview mode for draft content
- Media library for leadership photos and testimonials
- Migration script: `src/content/services/*.ts` → Sanity documents
- Webhook or rebuild on publish → Vercel deploy

## Out of scope (initial CMS phase)

- Real-time editing on production without rebuild
- Multi-language fields (Wave 2)

## Acceptance criteria (draft)

- [ ] Editor can update a service title + overview without code access
- [ ] Preview URL for draft content
- [ ] Production build pulls published content only
- [ ] Rollback procedure documented

## Estimated effort

2–3 weeks (1 developer + content migration)
