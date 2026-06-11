# Phase 1 — Foundation & Project Setup

**Goal:** Establish a production-ready Next.js codebase with design tokens, tooling, and deployment pipeline before any page work begins.

**Depends on:** Nothing  
**Blocks:** All subsequent phases

---

## Deliverables

- [ ] Next.js 15 App Router project initialized with TypeScript
- [ ] Tailwind CSS configured with GTN design tokens
- [ ] shadcn/ui initialized and themed to GTN palette
- [ ] ESLint + Prettier configured
- [ ] Environment variable schema documented (`.env.example`)
- [ ] Vercel project linked with preview deployments
- [ ] Git repository structure and branch strategy defined
- [ ] Folder architecture documented in code

---

## Tasks

### 1.1 Initialize Next.js Project

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir
```

Configure:

- App Router (`app/`)
- `src/` directory
- Import alias `@/*`
- No pages router

### 1.2 Install Core Dependencies

```bash
# UI & animation
npx shadcn@latest init
npm install framer-motion lucide-react

# Forms (used in Phase 6, install early for consistency)
npm install react-hook-form @hookform/resolvers zod

# Utilities
npm install clsx tailwind-merge class-variance-authority
```

**Not needed for v1** (per FRONTEND.md but not applicable here): TanStack Query, Zustand.

### 1.3 Design Tokens (Tailwind Config)

Centralize GTN brand values — avoid hardcoding colors in components later.

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#0B3C5D` | CTAs, nav active states, key headings |
| `secondary` | `#1D70B8` | Links, secondary buttons |
| `accent` | `#F4B400` | Highlights, badges, stat accents |
| `neutral-50` | `#F8FAFC` | Page backgrounds |
| `neutral-200` | `#E5E7EB` | Borders, dividers |
| `neutral-800` | `#1F2937` | Body text |

Also define:

- Font family: Inter (via `next/font/google`)
- Border radius scale (consistent with shadcn defaults)
- Shadow scale (subtle only — per FRONTEND.md depth rules)

### 1.4 Project Folder Structure

```
src/
├── app/                    # Routes (App Router)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── (marketing)/        # Route group for public pages
│       ├── services/page.tsx
│       ├── college-admissions/page.tsx   # one folder per service slug
│       └── ...                           # ~49 static service routes
├── components/
│   ├── ui/                 # shadcn primitives
│   ├── layout/             # Header, Footer, Container
│   ├── sections/           # Reusable page sections (Hero, CTA, etc.)
│   ├── templates/          # ServicePageTemplate (Phase 4)
│   └── forms/              # Form components (Phase 6)
├── content/
│   └── services/           # Typed content per service (imported by static pages)
├── lib/
│   ├── utils.ts            # cn() helper
│   ├── constants.ts        # Site-wide constants (contact info, nav links)
│   └── services/           # Registry, related-services helpers
└── types/                  # Shared TypeScript types
```

### 1.5 Base Layout & Fonts

- Load Inter via `next/font/google` with `display: swap`
- Set base typography scale in `globals.css` (xs → 5xl per FRONTEND.md)
- Configure semantic HTML defaults (`lang="en"`, skip link placeholder)

### 1.6 Environment Variables

Create `.env.example`:

```
RESEND_API_KEY=
CONTACT_EMAIL=info@globaltrainingnetwork.org
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_SITE_URL=https://globaltrainingnetwork.org
# Blog CMS (optional — Phase 8 only)
# SANITY_PROJECT_ID=
# SANITY_DATASET=
# SANITY_API_TOKEN=
```

### 1.7 Deployment Pipeline

- Connect repo to Vercel
- Set environment variables in Vercel dashboard
- Confirm preview deployments on PR
- Configure production domain when ready (Phase 10)

### 1.8 Content Architecture (Decided)

**Service pages → static Next.js pages.**

Each service slug from `PROJECT_SPEC.md` gets its own route folder and `page.tsx` (e.g. `app/(marketing)/college-admissions/page.tsx`). Page content lives in typed files under `src/content/services/` and is passed into the shared `ServicePageTemplate`. No dynamic `[slug]` route and no CMS for services in v1.

| Layer | Approach |
|-------|----------|
| Service pages (~49) | Static routes + shared template + typed content files |
| Blog / Insights (Phase 8) | MDX content collections (default) or Sanity — decide in Phase 8 |

Benefits: fully static at build time, maximum Lighthouse performance, explicit routes in git, no runtime data fetching for services.

Document this in `README.md` before Phase 4.

---

## Acceptance Criteria

- [ ] `npm run dev` starts without errors
- [ ] `npm run build` succeeds
- [ ] Tailwind tokens render correctly (spot-check primary/accent colors)
- [ ] Inter font loads on all pages
- [ ] Vercel preview URL accessible
- [ ] `.env.example` committed; no secrets in repo

---

## FRONTEND.md Alignment

| Rule | Application |
|------|-------------|
| Build systems, not screens | Folder structure + tokens first |
| Design tokens centralized | Tailwind config |
| shadcn/ui default | Init in this phase |
| Strict typography scale | Base CSS + Inter |
| Mobile-first | Default viewport meta in layout |

---

## Estimated Effort

**1–2 days**
