# Technical Debt & Pre-Scale Checklist

Items to address **before** scaling into Wave 2–3 features (auth, uploads, portals). Ordered by recommended timing.

| Item | When | Status | Notes |
|------|------|--------|-------|
| Error monitoring (Sentry) | Post-launch Week 1 | Open | `SENTRY_DSN` env; capture server action failures |
| Replace honeypot with Turnstile | Before application portal | Open | Update CSP in `next.config.ts` |
| Database for form submissions | Before application portal | Open | Supabase/Postgres; admin export |
| Auth system (Auth.js / Clerk) | Before dashboard / portal | Open | See ADR 006 |
| CDN / blob storage for uploads | Before application portal | Open | S3, Vercel Blob, or Supabase Storage |
| E2E test suite (Playwright) | Before application portal | Open | Critical paths: home, contact, service |
| In-memory rate limit → Redis/KV | High traffic post-launch | Open | Vercel KV or Upstash |
| Per-service OG images | Wave 1 (optional) | Open | Dynamic `opengraph-image` per route |
| CMS for non-technical editors | Wave 1 | Open | Sanity migration |
| `[CLIENT CONTENT NEEDED]` placeholders | Before hard launch | Open | 12 placeholders in content files |

---

## Completed in v1

| Item | Phase |
|------|-------|
| Static service architecture | 4–5 |
| Resend email integration | 6 |
| SEO metadata + sitemap + JSON-LD | 7 |
| Security headers + CSP | 10 |
| GA4 + Vercel Analytics | 10 |
| Launch validation script | 10 |

---

## Monitoring after launch

- Vercel Speed Insights (Core Web Vitals)
- GA4 custom events: `cta_click`, `form_submit`
- Resend delivery dashboard
- Manual Lighthouse quarterly on Home + top service pages
