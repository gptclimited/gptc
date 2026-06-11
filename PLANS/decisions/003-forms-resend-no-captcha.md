# ADR 003: Forms via Resend + Honeypot

**Feature:** Contact & consultation forms  
**Date:** 2025-02-15  
**Status:** Accepted (v1)  
**Decision:** build

## Context

Forms must deliver inquiries reliably with spam protection. Spec listed Resend; Phase 6 scoped honeypot + rate limit; Turnstile deferred to post-launch.

## Decision

Single contact form with inquiry types (general, consultation, information, partnership). Server action + Zod validation. Resend for internal notification + auto-reply. Honeypot + in-memory rate limit (5/IP/hour).

## Rationale

- No extra SaaS for v1 launch
- Resend aligns with Vercel deployment
- Single form reduces maintenance vs four separate forms

## Consequences

**Positive:** Low cost, fast implementation, branded HTML emails.

**Negative:** Rate limit is in-memory (resets on cold start); honeypot alone may miss sophisticated bots.

## Dependencies

- Blocks: Phase 10 GA `form_submit` events
- Blocked by: Phase 3 contact UI

## Estimated effort

Phase 6 (1–2 days).

## Alternatives considered

| Option | Pros | Cons |
|--------|------|------|
| Cloudflare Turnstile | Stronger bot protection | Extra config, CSP updates |
| Formspree / Typeform embed | Zero backend | Less brand control, data off-site |
| Database + admin inbox | Persistent submissions | Requires DB before v1 scope |

## Follow-up

- [ ] Add Turnstile before application portal (see TECH-DEBT.md)
- [ ] Store submissions in DB when application portal ships
