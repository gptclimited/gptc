# Phase 5 — Individual Service Pages (Content Rollout)

**Goal:** Create all ~49 static service pages — each with its own route folder, content file, and SEO metadata — using the Phase 4 template.

**Depends on:** Phase 4  
**Blocks:** Phase 7 (full SEO pass)

---

## Scope

49 service pages across 9 content groups (full slug list in `PROJECT_SPEC.md`):

| Group | Count | Example Slugs |
|-------|-------|-----------------|
| Educational Consulting | 12 | `/student-recruitment`, `/scholarship-support`, `/study-permit-support` |
| Newcomer Integration | 6 | `/settlement-support`, `/cultural-orientation` |
| Leadership Development | 5 | `/youth-leadership-academy`, `/public-speaking-training` |
| Peacebuilding & Reconciliation | 5 | `/conflict-resolution-training`, `/restorative-justice` |
| Holistic Development | 5 | `/emotional-intelligence-training`, `/family-enrichment` |
| Biblical & Theological Studies | 4 | `/biblical-studies`, `/church-leadership-workshops` |
| Digital Skills | 4 | `/digital-literacy`, `/artificial-intelligence-awareness` |
| Research & Policy | 4 | `/educational-research`, `/program-evaluation` |
| Entrepreneurship | 4 | `/financial-literacy`, `/social-enterprise-development` |

*(Pilot pages from Phase 4 excluded from this count if already done.)*

---

## Content Requirements (Per Page)

Each page must include:

| Field | SEO / UX Requirement |
|-------|---------------------|
| `metaTitle` | Unique, ≤ 60 chars, includes service + GTN |
| `metaDescription` | Unique, ≤ 160 chars, includes primary keyword + CTA hint |
| H1 | Service name (matches hero headline) |
| Overview | 300–600 words, keyword-rich but natural |
| Who We Serve | 3–5 audience segments |
| Benefits | 4–6 concrete outcomes |
| Process | 4–5 numbered steps |
| FAQ | 4–6 Q&As targeting long-tail search queries |
| Related slugs | 3 sibling services |

---

## Rollout Strategy

Execute in batches by category — review each batch before proceeding:

### Batch 1 — Educational Consulting (12 pages)
Highest SEO priority; core business offering.

### Batch 2 — Newcomer Integration + Leadership (11 pages)
Strong local/community SEO value.

### Batch 3 — Peacebuilding + Holistic Development (10 pages)
Differentiated GTN offerings.

### Batch 4 — Biblical & Theological + Digital Skills (8 pages)
Niche audience pages.

### Batch 5 — Research & Policy + Entrepreneurship (8 pages)
Institutional and professional audience.

---

## Content Production Workflow

```
1. Generate draft content (AI-assisted or copywriter)
2. Map to ServicePage type in content/services/[slug].ts
3. Create app/(marketing)/[slug]/page.tsx wrapper (or run scaffold script)
4. Client review per batch
5. Commit static pages + content files
6. Verify build + spot-check 2 pages per batch on mobile
7. Run slug validation script
```

Each service page requires **two files**:

| File | Purpose |
|------|---------|
| `src/content/services/[slug].ts` | All page content (hero, overview, FAQ, etc.) |
| `src/app/(marketing)/[slug]/page.tsx` | Static route + `metadata` export + `<ServicePageTemplate />` |

The `page.tsx` wrapper should stay minimal — no inline content. Re-export the service from `content/services/index.ts` for hub and related-services lookups.

### Content Quality Checklist (per page)

- [ ] Unique meta title and description (no duplicates across site)
- [ ] Primary keyword in H1, first paragraph, and one FAQ question
- [ ] No duplicate overview text across pages
- [ ] CTAs use action-oriented copy ("Book a Consultation", not "Click Here")
- [ ] Canadian context where relevant (study permits, newcomer integration)
- [ ] Tone: professional, trustworthy, impact-focused

---

## Automation Aids

### Slug validation script

```bash
# scripts/validate-services.ts
# - Every registry slug has content/services/[slug].ts
# - Every registry slug has app/(marketing)/[slug]/page.tsx
# - No content or page files without registry entry
# - metaTitle/metaDescription present and unique
```

### Content stub generator

Script to scaffold both files from registry with placeholder sections marked `[DRAFT]`:

```bash
npm run scaffold:service -- scholarship-support
```

---

## Editing Services Post-Launch

Content updates require editing the typed content file and redeploying. Non-technical editing is out of scope for v1 — see Phase 11 for a potential CMS migration if needed.

---

## Tasks Checklist

- [ ] Complete Batch 1 (Educational Consulting)
- [ ] Client review Batch 1
- [ ] Complete Batch 2 (Newcomer + Leadership)
- [ ] Client review Batch 2
- [ ] Complete Batch 3 (Peacebuilding + Holistic)
- [ ] Complete Batch 4 (Biblical + Digital)
- [ ] Complete Batch 5 (Research + Entrepreneurship)
- [ ] Run slug validation — 0 missing, 0 orphans
- [ ] Run duplicate meta description check
- [ ] Update Services hub if any titles/descriptions changed

---

## Acceptance Criteria

- [ ] All 49 registry slugs return 200 with full template content
- [ ] Zero duplicate meta titles or descriptions
- [ ] Every page has ≥ 4 FAQ items
- [ ] Every page has working Related Services links
- [ ] `npm run build` succeeds — all service routes statically pre-rendered
- [ ] Spot-check: 3 random pages read well on mobile

---

## Client Dependencies

- [ ] Approve content tone/voice guide (or use pilot pages as reference)
- [ ] Review batches 1–2 before batches 3–5 (educational content is highest risk)
- [ ] Provide any service-specific credentials or stats to weave into copy

---

## Estimated Effort

**5–10 days** (depends heavily on content production speed and client review cycles)

Content writing is the bottleneck — parallelize batches 3–5 if batches 1–2 are approved quickly.
