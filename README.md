# Global Training Network Website

Modern, SEO-optimized marketing website for [Global Training Network (GTN)](https://globaltrainingnetwork.org).

## Tech Stack

- **Next.js** (App Router) + TypeScript
- **Tailwind CSS v4** + shadcn/ui
- **Framer Motion** — scroll reveals, hero animations, sticky CTA (Phase 9)
- **React Hook Form + Zod** — forms (Phase 6)
- **Resend** — email delivery (Phase 6)
- **Vercel** — deployment

## Content Architecture

| Content type | Approach |
|--------------|----------|
| Service pages (~49) | **Static routes** — one `page.tsx` per slug + typed content in `src/content/services/` |
| Blog / Insights | Typed content in `src/content/insights/` (markdown bodies) |

Service slugs are registered in `src/lib/services/registry.ts`. Each service page composes the shared `ServicePageTemplate` (Phase 4) — no dynamic `[slug]` route.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout, Inter font, metadata defaults
│   ├── globals.css             # GTN design tokens + shadcn theme
│   └── (marketing)/            # Public pages route group
├── components/
│   ├── ui/                     # shadcn primitives
│   ├── layout/                 # Header, Footer (Phase 2)
│   ├── sections/               # Page sections (Phase 3)
│   ├── templates/              # ServicePageTemplate (Phase 4)
│   └── forms/                  # Contact forms (Phase 6)
├── content/services/           # Typed service content files
├── lib/
│   ├── constants.ts            # Site config, nav links
│   ├── services/registry.ts    # All 49 service slugs
│   └── utils.ts                # cn() helper
└── types/service.ts            # ServicePage interface
```

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#0B3C5D` | CTAs, headings |
| Secondary | `#1D70B8` | Links, secondary actions |
| Accent | `#F4B400` | Highlights, badges |
| Neutral 50 | `#F8FAFC` | Page backgrounds |
| Neutral 200 | `#E5E7EB` | Borders |
| Neutral 800 | `#1F2937` | Body text |

Typography: **Inter** (via `next/font/google`).

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check formatting |
| `npm run validate:services` | Verify all service routes exist |
| `npm run validate:content` | Check service content quality |
| `npm run validate:launch` | Pre-launch route and config checks |

See [DEPLOYMENT.md](DEPLOYMENT.md) for production deployment, content configuration, and environment setup. See [docs/CLIENT-HANDOFF.md](docs/CLIENT-HANDOFF.md) for the client launch checklist.

## Environment Variables

See `.env.example` for all variables. Required for launch:

- `RESEND_API_KEY` — Resend API key for contact form email delivery
- `CONTACT_EMAIL` — inquiry recipient (default: info@globaltrainingnetwork.org)
- `RESEND_FROM_EMAIL` — verified sender address for outbound mail
- `NEXT_PUBLIC_SITE_URL` — canonical site URL (used for metadata, sitemap, and JSON-LD)
- `NEXT_PUBLIC_GA_ID` — Google Analytics (Phase 10)

### Contact form

The contact form at `/contact` uses a server action (`src/app/actions/contact.ts`) with Zod validation, honeypot spam trap, and in-memory rate limiting (5 submissions per IP per hour). Successful submissions send:

1. An internal notification to `CONTACT_EMAIL`
2. An auto-reply confirmation to the submitter

Pre-select inquiry type via URL: `/contact?type=consultation`, `?type=information`, or `?type=partnership`.

Without `RESEND_API_KEY`, the form displays a friendly error instead of sending mail.

## Branch Strategy

- `main` — production-ready code
- `feature/phase-N-*` — phase-based feature branches
- Pull requests trigger Vercel preview deployments

## Deployment (Vercel)

1. Import this repository in [Vercel](https://vercel.com)
2. Set environment variables from `.env.example`
3. Deploy — preview URLs are generated on each PR
4. Configure `globaltrainingnetwork.org` as production domain (Phase 10)

## Build Phases

See `PLANS/00-overview.md` for the full phased build plan.

| Phase | Status |
|-------|--------|
| 1 — Foundation | ✅ Complete |
| 2 — Design System | ✅ Complete |
| 3 — Core Pages | ✅ Complete |
| 4 — Services Hub | ✅ Complete |
| 5 — Service Content | ✅ Complete |
| 6 — Forms & Email | ✅ Complete |
| 7 — SEO & Metadata | ✅ Complete |
| 8 — Blog / Insights | ✅ Complete |
| 9 — Animations & Polish | ✅ Complete |
| 10 — QA & Launch | ✅ Complete (code ready — client deploy + sign-off pending) |
| 11 — Future Roadmap | ✅ Complete (backlog + ADRs documented) |

## Post-launch

v1 build phases are complete. Next steps:

1. Finish [Phase 10 client handoff](docs/CLIENT-HANDOFF.md) (deploy, analytics, content placeholders)
2. Prioritize features from [PLANS/BACKLOG.md](PLANS/BACKLOG.md) with the client
3. Record new decisions in [PLANS/decisions/](PLANS/decisions/)
