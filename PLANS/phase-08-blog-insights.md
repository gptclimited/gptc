# Phase 8 — Blog / Insights

**Goal:** Launch the Insights section for long-tail SEO growth and thought leadership, with 8 launch articles from the spec.

**Depends on:** Phase 1 (CMS decision), Phase 7 (Article schema, sitemap)  
**Blocks:** Phase 10 (if launch articles are in scope)

---

## Deliverables

- [ ] `/insights` listing page with category filtering
- [ ] `/insights/[slug]` article template
- [ ] 8 launch articles published
- [ ] Category taxonomy
- [ ] Article SEO metadata + JSON-LD
- [ ] RSS feed (optional but recommended)

---

## CMS Setup

### If Sanity (recommended)

Schemas:

```
schemas/
├── post.ts          # title, slug, excerpt, body, category, publishedAt, author, coverImage
├── category.ts      # name, slug
└── author.ts        # name, bio, photo (optional for v1)
```

Desk structure: Posts grouped by category.

### If MDX

```
src/content/insights/
├── how-to-study-in-canada.mdx
└── ...
```

Frontmatter: title, description, category, publishedAt, slug.

---

## Category Taxonomy (from spec)

| Category | Slug |
|----------|------|
| Student Success | `student-success` |
| Admissions | `admissions` |
| Scholarships | `scholarships` |
| International Education | `international-education` |
| Newcomer Integration | `newcomer-integration` |
| Leadership Development | `leadership-development` |
| Community Building | `community-building` |
| Peacebuilding | `peacebuilding` |
| Digital Skills | `digital-skills` |
| Family Development | `family-development` |

---

## Launch Articles (from spec)

| # | Title | Suggested Category |
|---|-------|-------------------|
| 1 | How to Study in Canada as an International Student | International Education |
| 2 | Top Scholarship Opportunities for International Students | Scholarships |
| 3 | Educational Pathway Planning Explained | Admissions |
| 4 | How Newcomers Can Successfully Integrate into Canadian Communities | Newcomer Integration |
| 5 | Leadership Skills Every Student Needs | Leadership Development |
| 6 | Conflict Resolution Strategies for Families and Communities | Peacebuilding |
| 7 | AI Skills Every Student Should Learn | Digital Skills |
| 8 | *(Client-provided or "Supporting Family Success in Education")* | Family Development |

Each article: 800–1500 words, internal links to relevant service pages, one CTA at end.

---

## Insights Listing Page (`/insights`)

### Layout

- Page header: "Insights" + subtitle about GTN thought leadership
- Category filter pills (client-side filter or URL param `?category=`)
- Grid of article cards: cover image, category badge, title, excerpt, date
- Pagination if > 12 posts (not needed at launch)

### Article Card

- Cover image with aspect ratio 16:9
- Category badge (accent color, sparingly)
- Title (2-line clamp)
- Excerpt (3-line clamp)
- Read time estimate (optional)

---

## Article Page Template (`/insights/[slug]`)

| Section | Content |
|---------|---------|
| Header | Category, title, date, read time |
| Cover image | Optional hero image |
| Body | Prose styling (`prose prose-neutral max-w-3xl`) |
| Author | Optional for v1 |
| Related articles | 2–3 same category |
| CTA | Book Consultation banner |

### Prose Styling

- `max-w-3xl` for readability (FRONTEND.md container rules)
- Proper heading hierarchy in content
- Accessible link styling
- Code blocks N/A for this content type

---

## SEO (Article-specific)

```typescript
// JSON-LD Article schema
{
  "@type": "Article",
  "headline": "...",
  "datePublished": "...",
  "author": { "@type": "Organization", "name": "Global Training Network" },
  "publisher": { ... Organization ... }
}
```

- Include in sitemap (Phase 7 sitemap.ts update)
- Unique meta description per article
- Internal linking: each article links to 2–3 service pages

---

## Empty & Loading States (FRONTEND.md)

- Skeleton loaders on listing page during fetch (if client-side)
- Empty category: "No articles in this category yet"
- 404 for invalid slugs

---

## RSS Feed (Optional)

```
app/insights/feed.xml/route.ts
```

 Helps syndication and some SEO signals. Low effort, recommended.

---

## Tasks Checklist

- [ ] Set up CMS schema or MDX structure
- [ ] Build article listing page
- [ ] Build article detail template with prose styles
- [ ] Implement category filtering
- [ ] Write/publish 8 launch articles
- [ ] Add internal links from articles to service pages
- [ ] Add Article JSON-LD schema
- [ ] Update sitemap with insight routes
- [ ] Add Insights link to main nav (already in Phase 2)
- [ ] Create RSS feed (optional)
- [ ] Verify mobile reading experience

---

## Acceptance Criteria

- [ ] `/insights` lists all 8 articles
- [ ] Each article accessible at `/insights/[slug]`
- [ ] Category filter works
- [ ] Prose readable on mobile (no horizontal overflow)
- [ ] Each article has unique meta title/description
- [ ] At least 2 internal service links per article
- [ ] CTA present at article end

---

## FRONTEND.md Alignment

| Rule | Application |
|------|-------------|
| Design for real content | Long titles, missing cover images handled |
| Neutral-heavy | Article body on neutral background |
| Empty/loading states | Skeleton + empty category |
| Strict typography | Prose scale for article body |

**Not applicable:** Table rules, dashboard rules.

---

## Estimated Effort

**3–5 days** (2 days setup + 3 days content for 8 articles)

Content production can overlap with Phase 5 service page writing.
