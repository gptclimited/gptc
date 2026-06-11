# Phase 10 — QA, Performance, Analytics & Launch

**Goal:** Validate the site against all quality targets, connect analytics, deploy to production, and hand off to the client.

**Depends on:** All phases 1–9  
**Blocks:** Phase 11 (post-launch work)

---

## Deliverables

- [ ] Lighthouse audits passing on representative pages
- [ ] WCAG AA accessibility audit complete
- [ ] Google Analytics 4 connected
- [ ] Google Search Console verified + sitemap submitted
- [ ] Production deployment on custom domain
- [ ] Pre-launch QA checklist signed off
- [ ] Client handoff documentation

---

## Lighthouse Targets (from spec)

| Metric | Target | Test Pages |
|--------|--------|------------|
| Performance | 95+ | Home, `/college-admissions`, `/insights/[slug]` |
| SEO | 100 | Same pages |
| Accessibility | 100 | Same pages |
| Best Practices | 100 | Same pages |

Run audits in **incognito** with throttling (mobile + desktop).

---

## QA Checklist

### Functional

- [ ] All nav links work (no 404s)
- [ ] All 49 service pages load with full content
- [ ] Contact form submits and email received
- [ ] All inquiry types (`?type=consultation`, etc.) pre-select correctly
- [ ] Google Map loads on Contact page
- [ ] Mobile menu opens/closes correctly
- [ ] Testimonial slider navigable by keyboard
- [ ] Sticky CTA links to consultation form
- [ ] Blog category filter works
- [ ] RSS feed valid (if implemented)

### Cross-Browser

Test on:

- [ ] Chrome (desktop + mobile)
- [ ] Safari (desktop + iOS)
- [ ] Firefox (desktop)

### Responsive Breakpoints

- [ ] 320px (small mobile)
- [ ] 375px (iPhone)
- [ ] 768px (tablet)
- [ ] 1024px (laptop)
- [ ] 1440px+ (desktop)

### Content

- [ ] No `[CLIENT CONTENT NEEDED]` placeholders remain (or client explicitly accepts)
- [ ] Contact info correct: address, phone, email
- [ ] Impact statistics show real numbers (or removed if unavailable)
- [ ] Testimonials approved by client
- [ ] Leadership photos/bios present or graceful fallback

---

## Accessibility Audit (WCAG AA)

Manual checks beyond Lighthouse:

- [ ] Keyboard-only navigation through entire site
- [ ] Screen reader test (VoiceOver on macOS/iOS): Home + Contact + one service page
- [ ] Color contrast on all text (especially accent `#F4B400` on light backgrounds)
- [ ] Form errors announced to screen readers
- [ ] Images have meaningful alt text (decorative images: `alt=""`)
- [ ] Skip-to-content link works
- [ ] Focus visible on all interactive elements
- [ ] No keyboard traps in mobile menu or sliders

Document any known exceptions with remediation plan.

---

## Performance Optimization

If Lighthouse Performance < 95:

- [ ] Audit bundle size (`@next/bundle-analyzer`)
- [ ] Ensure all images use `next/image` with correct `sizes`
- [ ] Lazy-load below-fold images and map iframe
- [ ] Review Framer Motion bundle — dynamic import if needed
- [ ] Enable Vercel analytics/speed insights for monitoring
- [ ] Verify font loading strategy (`display: swap`)

---

## Analytics Setup

### Google Analytics 4

```typescript
// app/layout.tsx or components/analytics/google-analytics.tsx
// NEXT_PUBLIC_GA_ID from env
```

Track:

- Page views (automatic)
- Form submissions (custom event: `form_submit` with inquiry type)
- CTA clicks (custom event: `cta_click` with location label)

### Google Search Console

1. Verify domain ownership (DNS TXT or HTML file)
2. Submit `sitemap.xml`
3. Request indexing for Home and top 5 service pages

---

## Production Deployment

### Vercel Configuration

- [ ] Production domain: `globaltrainingnetwork.org`
- [ ] WWW redirect policy decided (www → apex or vice versa)
- [ ] All env vars set in production
- [ ] Resend domain verified for production sends
- [ ] Preview deployments disabled for production branch (or protected)

### DNS

- [ ] A/CNAME records pointed to Vercel
- [ ] SSL certificate active (automatic via Vercel)

### Post-Deploy Smoke Test

Immediately after deploy:

- [ ] Home loads on production URL
- [ ] Form submission on production
- [ ] HTTPS enforced
- [ ] OG preview correct when sharing Home URL

---

## Security Headers (Recommended)

```
next.config.ts → headers()
```

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- Content Security Policy (tune for Google Maps embed + GA)

---

## Client Handoff

Deliver to client:

1. **Content guide** — how to edit service pages (update `content/services/[slug].ts`, redeploy) and blog posts
2. **Environment variables list** — what lives in Vercel
3. **Analytics access** — GA4 property + Search Console
4. **Form monitoring** — where inquiry emails go
5. **Support contacts** — dev contact for bugs post-launch

Optional: Loom walkthrough of CMS editing.

---

## Launch Communication

- [ ] Client approves go-live
- [ ] Soft launch window for final client review on production URL
- [ ] Hard launch after sign-off
- [ ] Monitor form submissions and analytics for 48 hours post-launch

---

## Tasks Checklist

- [ ] Run Lighthouse on 3 representative pages (fix until targets met)
- [ ] Complete functional QA checklist
- [ ] Complete accessibility audit
- [ ] Connect GA4
- [ ] Verify Search Console + submit sitemap
- [ ] Configure production domain
- [ ] Production smoke test
- [ ] Security headers
- [ ] Client handoff docs
- [ ] Launch sign-off

---

## Acceptance Criteria

- [ ] All Lighthouse targets met on tested pages
- [ ] Zero critical accessibility violations
- [ ] Production site live on `globaltrainingnetwork.org`
- [ ] Forms working on production
- [ ] Analytics receiving pageview data
- [ ] Sitemap indexed in Search Console
- [ ] Client signed off on launch

---

## Estimated Effort

**2–3 days** (plus client review wait time)
