# Deployment & Content Guide

This document is for the engineer deploying and maintaining the GTN website. It covers environment setup, deployment, and **where to edit site content** without touching component code.

---

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
npm run build      # production build
npm run validate:launch
```

---

## Deploy to Vercel

1. Import the repository in [Vercel](https://vercel.com).
2. Set environment variables from `.env.example` (see below).
3. Deploy — each pull request gets a preview URL.
4. Point the production domain (`globaltrainingnetwork.org`) to the Vercel project.

---

## Environment variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap, JSON-LD |
| `RESEND_API_KEY` | Contact form email delivery |
| `CONTACT_EMAIL` | Inbox for form submissions |
| `RESEND_FROM_EMAIL` | Verified sender address |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID |

Without `RESEND_API_KEY`, the contact form shows an error instead of sending mail.

---

## Content configuration

Most editable marketing copy lives in **`src/config/`**. Change values there and redeploy — no component edits required.

### `src/config/images.ts`

All image paths used across the site.

| Key | Used on | File location |
|-----|---------|---------------|
| `ceoPortrait` | About page leadership | `/public/assets/…` |
| `heroBackground` | Homepage hero background | `/public/assets/hero-education-journey.jpg` |

Replace files in `public/assets/` or update the `src` path. Keep `alt` text accurate for accessibility.

### `src/config/home.ts`

Homepage content.

| Section | Config key | What to edit |
|---------|------------|--------------|
| Hero | `hero` | Headline, subheadline, CTAs, background position |
| Impact stats | `impactStats.items` | Labels and numbers (`500`, `"15+"`, etc.) |
| Mission & vision | `missionVision` | Mission and vision paragraphs |
| CEO quote | `founderQuote` | Quote, name, title |
| Services grid | `servicesOverview` | Section copy and category cards |
| Why choose us | `whyChooseUs` | Feature titles, descriptions, icons |
| Testimonials | `testimonials.items` | Quotes, names, roles |
| Bottom CTA | `ctaBanner` | Headline, description, button label |

### `src/config/about.ts`

About and contact page content.

| Section | Config key | What to edit |
|---------|------------|--------------|
| Page header | `pageHeader` | Title and intro |
| Our story | `ourStory` | Multi-paragraph story (use `\n\n` between paragraphs) |
| Vision / mission | `vision`, `mission` | Single paragraphs |
| Strategic objectives | `strategicObjectives` | Bullet list |
| Core values | `coreValues` | Title + description pairs |
| Expected impact | `expectedImpact` | Multi-paragraph impact statement |
| Leadership team | `leadershipTeam` | Name, title, bio; optional `image` from `siteImages` |
| Office hours | `contactConfig.officeInfo.hours` | Contact page |
| Parking / accessibility | `contactConfig.officeInfo.parking` | Contact page |
| Map URLs | `contactConfig.mapEmbedUrl`, `mapDirectionsUrl` | Google Maps embed and directions |

### `src/lib/constants.ts`

Site-wide settings not tied to a single page.

| Key | What to edit |
|-----|--------------|
| `siteConfig.name`, `description`, `tagline` | Brand name and default SEO description |
| `siteConfig.contact` | Address, phone, email |
| `siteConfig.social` | LinkedIn, Facebook, Instagram, YouTube URLs |
| `mainNav`, `footerQuickLinks`, `footerServiceLinks` | Navigation links |

---

## Service pages & blog

| Content type | Location |
|--------------|----------|
| Service pages (~49) | `src/content/services/<slug>.ts` |
| Insights / blog posts | `src/content/insights/<slug>.ts` |
| Service route registry | `src/lib/services/registry.ts` |

Each service file exports typed content consumed by `ServicePageTemplate`.

---

## Placeholder content

Stats, testimonials, leadership bios, and some team names are **realistic placeholders** intended for launch. Replace them in the config files above when the client provides final copy.

Current placeholder areas:

- **Homepage impact stats** — `src/config/home.ts` → `impactStats.items`
- **Homepage testimonials** — `src/config/home.ts` → `testimonials.items`
- **Leadership team (non-CEO members)** — `src/config/about.ts` → `leadershipTeam`
- **CEO extended bio** — refine in `aboutConfig.leadershipTeam[0].bio` when approved

---

## Assets

Place images in `public/assets/`. Reference them in `src/config/images.ts`.

Recommended workflow when the client sends new photos:

1. Add the file to `public/assets/` (use a clear filename, e.g. `ceo-portrait.jpg`).
2. Update the matching entry in `src/config/images.ts`.
3. Run `npm run build` locally to verify.

---

## Pre-launch checks

```bash
npm run lint
npm run build
npm run validate:services
npm run validate:content
npm run validate:launch
```

Manually verify:

- [ ] Contact form sends email (requires Resend in production)
- [ ] Homepage hero image loads
- [ ] About page CEO photo loads
- [ ] Google Analytics receives events (if `NEXT_PUBLIC_GA_ID` is set)
- [ ] Production domain and `NEXT_PUBLIC_SITE_URL` match

---

## Related docs

- [README.md](README.md) — project overview and scripts
- [docs/CLIENT-HANDOFF.md](docs/CLIENT-HANDOFF.md) — client-facing launch checklist
- `.env.example` — full environment variable reference
