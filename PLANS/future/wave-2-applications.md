# Wave 2 — Application Portal MVP (Draft)

**Status:** Backlog  
**Depends on:** TECH-DEBT items (Turnstile, Sentry, DB, blob storage, E2E)

## Goal

Capture program applications without full student portal.

## MVP scope

- `/apply` landing with program selection
- Multi-step form (progress indicator per FRONTEND.md)
- File upload (transcripts, ID) → cloud storage
- Admin notification email with application ID
- No login — status lookup by email + application ID (optional phase 2.5)

## Out of scope (MVP)

- Authenticated student dashboard
- Advisor messaging
- Payment collection

## Acceptance criteria (draft)

- [ ] Complete application stored in database
- [ ] Files virus-scanned or size-limited
- [ ] GTN staff notified within 1 minute
- [ ] WCAG AA on all form steps

## Estimated effort

6–10 weeks
