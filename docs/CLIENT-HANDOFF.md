# GTN Website — Client Handoff & Launch Guide

This document covers production deployment, analytics, content updates, and the pre-launch checklist for the Global Training Network marketing site.

---

## Production URL

- **Primary domain:** https://globaltrainingnetwork.org
- **WWW policy:** `www.globaltrainingnetwork.org` redirects to the apex domain (configured in `vercel.json`)

---

## Environment Variables (Vercel → Settings → Environment Variables)

| Variable | Required | Purpose |
|----------|----------|---------|
| `RESEND_API_KEY` | Yes | Contact form email delivery |
| `CONTACT_EMAIL` | Yes | Recipient for form inquiries (default: info@globaltrainingnetwork.org) |
| `RESEND_FROM_EMAIL` | Yes | Verified sender, e.g. `Global Training Network <noreply@globaltrainingnetwork.org>` |
| `NEXT_PUBLIC_SITE_URL` | Yes | `https://globaltrainingnetwork.org` (metadata, sitemap, JSON-LD) |
| `NEXT_PUBLIC_GA_ID` | Recommended | Google Analytics 4 measurement ID (`G-XXXXXXXXXX`) |

Copy values from `.env.example` as a starting point. Set all variables for **Production** (and Preview if you want analytics on PR previews).

### Resend setup

1. Verify the `globaltrainingnetwork.org` domain in [Resend](https://resend.com)
2. Add the API key to Vercel
3. Send a test inquiry from the production contact form

---

## Google Analytics 4

Analytics loads when `NEXT_PUBLIC_GA_ID` is set.

**Automatic events**

- Page views on route changes

**Custom events**

| Event | When | Parameters |
|-------|------|------------|
| `cta_click` | Consultation / navigation CTAs clicked | `location` (e.g. `header_cta`, `sticky_cta`) |
| `form_submit` | Contact form succeeds | `inquiry_type` (`general`, `consultation`, etc.) |

Grant the client **Viewer** or **Editor** access to the GA4 property after creation.

---

## Google Search Console

1. Add property for `https://globaltrainingnetwork.org`
2. Verify via DNS TXT record (recommended) or HTML file
3. Submit sitemap: `https://globaltrainingnetwork.org/sitemap.xml`
4. Request indexing for Home and top service pages after launch

---

## Vercel Deployment

1. Import the GitHub repository in [Vercel](https://vercel.com)
2. Set environment variables (see above)
3. Add custom domain `globaltrainingnetwork.org`
4. Deploy from `main`

**Post-deploy smoke test**

- [ ] Home loads over HTTPS
- [ ] Contact form sends email on production
- [ ] Share Home URL — OG image preview looks correct
- [ ] `/sitemap.xml` and `/robots.txt` accessible
- [ ] `/insights/feed.xml` returns valid RSS

---

## Monitoring

- **Vercel Analytics** — traffic overview (enabled in root layout)
- **Vercel Speed Insights** — Core Web Vitals (enabled in root layout)
- **Form inquiries** — delivered to `CONTACT_EMAIL` via Resend

---

## Updating Content

### Service pages (49 static routes)

Each service has two files:

```
src/content/services/[slug].ts    ← content (title, overview, FAQ, etc.)
src/app/(marketing)/[slug]/page.tsx ← route (usually no edits needed)
```

1. Edit the content file
2. Run `npm run validate:content`
3. Commit and push — Vercel redeploys automatically

Service slugs are listed in `src/lib/services/registry.ts`.

### Insights / blog articles

```
src/content/insights/[slug].ts    ← article content (markdown body)
src/content/insights/index.ts     ← register new articles here
```

After adding an article, update `index.ts` and redeploy.

### Core pages (Home, About, Contact)

- Home: `src/lib/content/home.ts`, `src/app/(marketing)/page.tsx`
- About: `src/lib/content/about.ts`, `src/app/(marketing)/about/page.tsx`
- Contact: `src/app/(marketing)/contact/page.tsx`

### Placeholder content still pending client input

Search the codebase for `[CLIENT CONTENT NEEDED]` — currently includes:

- Home impact statistics
- About story details, leadership names/bios, office hours/parking
- Home page testimonials

Replace or remove these before hard launch sign-off.

---

## npm Scripts

| Command | Purpose |
|---------|---------|
| `npm run validate:services` | All 49 service routes exist |
| `npm run validate:content` | No draft service content |
| `npm run validate:launch` | Pre-launch route + config checks |
| `npm run build` | Production build |

---

## Pre-Launch QA Checklist

### Functional

- [ ] All main nav links work
- [ ] All 49 service pages load
- [ ] Contact form submits (production + Resend)
- [ ] Inquiry type URL params work (`?type=consultation`, etc.)
- [ ] Google Map on Contact page
- [ ] Mobile menu keyboard accessible
- [ ] Testimonial slider keyboard navigable
- [ ] Sticky CTA appears after scroll, links to consultation
- [ ] Insights category filter works

### Lighthouse (incognito, mobile throttling)

Test: Home, `/college-admissions`, one `/insights/[slug]` article

| Metric | Target |
|--------|--------|
| Performance | 95+ |
| SEO | 100 |
| Accessibility | 100 |
| Best Practices | 100 |

### Accessibility (manual)

- [ ] Keyboard-only navigation full site
- [ ] Screen reader spot-check: Home, Contact, one service page
- [ ] Form errors announced (`aria-live` on contact form)
- [ ] Skip-to-content link works

### Client sign-off

- [ ] Replace `[CLIENT CONTENT NEEDED]` placeholders
- [ ] Approve testimonials and leadership content
- [ ] Confirm contact info (address, phone, email)
- [ ] Soft launch review on production URL
- [ ] Hard launch approval

---

## Security

Production responses include security headers (see `next.config.ts`):

- `Content-Security-Policy` (allows Google Maps embed + GA)
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

---

## Support After Launch

- **Content updates:** Edit files above, push to `main`
- **Form issues:** Check Resend dashboard + Vercel function logs
- **Analytics:** GA4 Realtime report + Vercel dashboard
- **Bug fixes:** Open issue or contact your development team

Monitor form submissions and analytics for **48 hours** after launch.

---

## What's next (post-v1)

The v1 website build is complete. Future work is tracked outside the launch checklist:

| Resource | Purpose |
|----------|---------|
| [PLANS/BACKLOG.md](../PLANS/BACKLOG.md) | Prioritized Wave 1–3 features (CMS, events, i18n, portals) |
| [PLANS/TECH-DEBT.md](../PLANS/TECH-DEBT.md) | Pre-scale items (Sentry, Turnstile, E2E, database) |
| [PLANS/decisions/](../PLANS/decisions/) | Architecture decision records |
| [PLANS/future/](../PLANS/future/) | Draft scoping docs per feature |

Start Wave 1 only after production launch sign-off and client approval.
