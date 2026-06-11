# Architecture Decision Records (ADR)

This folder stores decisions made while building and extending the GTN website. Use it when scoping Phase 11+ work so future contributors understand **why** choices were made.

## When to add a record

- Choosing between two viable approaches (CMS vs static, auth provider, payment processor)
- Deferring a feature to a later wave
- Changing a v1 decision after launch

## How to add a record

1. Copy [TEMPLATE.md](./TEMPLATE.md)
2. Name the file `NNN-short-slug.md` (next number in sequence)
3. Fill in all sections
4. Link the decision from [../BACKLOG.md](../BACKLOG.md) if it affects backlog priority

## Index

| ID | Decision | Status |
|----|----------|--------|
| [001](./001-static-service-pages.md) | Static service routes (no dynamic `[slug]`) | Accepted (v1) |
| [002](./002-insights-typed-content.md) | Insights as typed TS content, not Sanity | Accepted (v1) |
| [003](./003-forms-resend-no-captcha.md) | Resend email + honeypot spam protection | Accepted (v1) |
| [004](./004-animations-no-reduced-motion.md) | Animations always on; no `prefers-reduced-motion` gating | Accepted (v1) |
| [005](./005-post-launch-wave-priorities.md) | Recommended post-launch roadmap order | Accepted |
| [006](./006-defer-auth-and-database-v1.md) | No auth, database, or portals in v1 | Accepted (v1) |
