# Phase 7 — SEO, Metadata & Structured Data

**Goal:** Implement comprehensive SEO so every page is discoverable, shareable, and eligible for rich results.

**Depends on:** Phases 3, 4, 5 (pages must exist)  
**Parallel with:** Phase 8  
**Blocks:** Phase 10 (launch)

---

## Deliverables

- [ ] Per-page meta titles and descriptions via Next Metadata API
- [ ] Dynamic XML sitemap
- [ ] `robots.txt`
- [ ] JSON-LD structured data (Organization, LocalBusiness, FAQ, Breadcrumb)
- [ ] OpenGraph and Twitter Card tags
- [ ] Canonical URLs on all pages
- [ ] SEO utility helpers for consistent implementation

---

## Metadata Requirements (Per Spec)

Every service page must include:

| Item | Implementation |
|------|----------------|
| Meta Title | `metadata.title` or `generateMetadata()` |
| Meta Description | `metadata.description` |
| H1 | Single H1 in page content (not duplicated in metadata) |
| Keyword-rich content | Content phase (Phase 5) |
| FAQ Schema | JSON-LD `FAQPage` on service pages |
| Breadcrumb Schema | JSON-LD `BreadcrumbList` on all inner pages |
| Local Business Schema | JSON-LD on Contact + site-wide |
| Organization Schema | JSON-LD in root layout |
| OpenGraph Tags | `metadata.openGraph` |
| Twitter Cards | `metadata.twitter` |
| Canonical URLs | `metadata.alternates.canonical` |

---

## Implementation Architecture

```
lib/seo/
├── metadata.ts          # generatePageMetadata() helper
├── json-ld.ts           # Schema builders
├── constants.ts         # Default OG image, site name, locale
└── types.ts

components/seo/
├── json-ld-script.tsx   # Safely inject JSON-LD
└── breadcrumbs.tsx      # Visual + schema data
```

### Metadata Helper

```typescript
export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
}: PageMetaInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [ogImage] },
    twitter: { card: "summary_large_image", title, description },
  };
}
```

### Service page metadata (static routes)

Each static service `page.tsx` exports metadata from its content file — no `generateMetadata()` async function needed:

```typescript
// lib/seo/metadata.ts
export function generateServiceMetadata(service: ServicePage): Metadata {
  return generatePageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/${service.slug}`,
  });
}
```

Sitemap generation reads the slug registry + content index to list all static service URLs at build time.

### Root Layout Defaults

```typescript
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Global Training Network",
    template: "%s | Global Training Network",
  },
  description: "Guiding learners and leaders from aspiration to achievement...",
};
```

---

## Structured Data Schemas

### 1. Organization (site-wide, root layout)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Global Training Network",
  "url": "https://globaltrainingnetwork.org",
  "logo": "...",
  "contactPoint": { "@type": "ContactPoint", "telephone": "+1-604-727-6553", ... }
}
```

### 2. LocalBusiness (Contact page + Organization nested)

```json
{
  "@type": "LocalBusiness",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "19897 82 Avenue",
    "addressLocality": "Langley",
    "addressRegion": "BC",
    "postalCode": "V2Y 1Y7",
    "addressCountry": "CA"
  }
}
```

### 3. FAQPage (each service page)

Generate from `service.faq` array — one `Question`/`Answer` pair per item.

### 4. BreadcrumbList (inner pages)

```
Home → Services → Category → Service Title
Home → About
Home → Contact
Home → Insights → Article Title
```

---

## Sitemap

```
app/sitemap.ts
```

Include:

- `/` (priority 1.0)
- `/about`, `/services`, `/contact` (0.8)
- All service slugs (0.7)
- All blog posts when Phase 8 complete (0.6)

Use `lastModified` from content `updatedAt` if available.

Submit to Google Search Console in Phase 10.

---

## Robots.txt

```
app/robots.ts
```

```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://globaltrainingnetwork.org/sitemap.xml
```

---

## OpenGraph Image

Create default OG image (`/public/og-default.jpg` or dynamic `app/opengraph-image.tsx`):

- GTN logo + tagline
- 1200×630px
- Brand colors

Optional: per-service OG images (Phase 11 enhancement).

---

## Page-Specific SEO Checklist

| Page | Title Pattern | Schema |
|------|---------------|--------|
| Home | Global Training Network \| ... | Organization |
| About | About Us \| GTN | Breadcrumb |
| Services Hub | Our Services \| GTN | Breadcrumb |
| Service Page | {Service Name} \| GTN | FAQ + Breadcrumb |
| Contact | Contact Us \| GTN | LocalBusiness + Breadcrumb |
| Blog Post | {Title} \| GTN Insights | Article + Breadcrumb |

---

## Tasks Checklist

- [ ] Build metadata helper utilities
- [ ] Apply `generateMetadata` to all route segments
- [ ] Inject Organization JSON-LD in root layout
- [ ] Add LocalBusiness schema to Contact page
- [ ] Add FAQ schema to service page template
- [ ] Add Breadcrumb schema to all inner pages
- [ ] Create dynamic sitemap
- [ ] Create robots.ts
- [ ] Create default OG image
- [ ] Validate with Google Rich Results Test (2 service pages + contact)
- [ ] Validate with opengraph.xyz or similar
- [ ] Confirm no duplicate canonical URLs

---

## Validation Tools

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- Lighthouse SEO audit (target: 100)

---

## Acceptance Criteria

- [ ] Lighthouse SEO score = 100 on Home, one service page, Contact
- [ ] Sitemap lists all public routes (verify count matches slug registry + core pages)
- [ ] FAQ rich results eligible on pilot service pages
- [ ] Every page has unique title and description
- [ ] Canonical URLs use production domain
- [ ] OG tags render correctly when URL is shared (manual test)

---

## Estimated Effort

**2–3 days**
