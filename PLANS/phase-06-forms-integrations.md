# Phase 6 — Forms & Email Integration

**Goal:** Wire all conversion forms to Resend so consultation requests and contact inquiries reach GTN reliably.

**Depends on:** Phase 3 (Contact page form UI)  
**Blocks:** Phase 10 (launch)

---

## Deliverables

- [ ] Contact form fully functional with server-side validation
- [ ] Consultation request flow (dedicated form or inquiry type on contact form)
- [ ] Resend email integration with branded HTML templates
- [ ] Success and error states with accessible feedback
- [ ] Rate limiting / basic spam protection
- [ ] Optional: "Request Information" and "Partner With Us" form variants

---

## Form Inventory

| Form | Location | Primary Use |
|------|----------|-------------|
| **Contact Form** | `/contact` | General inquiries |
| **Consultation Request** | `/contact?type=consultation`, hero CTAs, CTA banners | Primary conversion |
| **Request Information** | Secondary CTA links | Info packets / program details |
| **Partner With Us** | Footer or dedicated section | Institutional partnerships |

**Recommendation:** Single form component with `inquiryType` field rather than four separate forms — reduces maintenance (FRONTEND.md: reuse patterns).

---

## Form Fields

### Base fields (all types)

| Field | Validation |
|-------|------------|
| Full Name | Required, min 2 chars |
| Email | Required, valid email |
| Phone | Optional, format validation if provided |
| Inquiry Type | Required select: General · Consultation · Information · Partnership |
| Message | Required, min 20 chars, max 2000 |

### Consultation-specific (conditional)

| Field | Validation |
|-------|------------|
| Preferred Contact Method | Email / Phone |
| Service Interest | Optional select from category list |

---

## Technical Implementation

### Zod Schema

```typescript
// lib/schemas/contact-form.ts
export const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  inquiryType: z.enum(["general", "consultation", "information", "partnership"]),
  serviceInterest: z.string().optional(),
  message: z.string().min(20).max(2000),
});
```

### Server Action or API Route

```
app/api/contact/route.ts   OR   app/actions/contact.ts
```

- Validate with Zod on server (never trust client only)
- Send via Resend
- Return structured success/error response
- Log failures (console in dev; optional Sentry in Phase 10)

### Resend Setup

1. Create Resend account + verify domain (`globaltrainingnetwork.org`)
2. Create API key → `RESEND_API_KEY`
3. Email templates:
   - **Internal notification** → `info@globaltrainingnetwork.org`
   - **Auto-reply to submitter** (optional but recommended)

### Email Template Content

**Internal notification subject:**
`[GTN Website] New {inquiryType} from {name}`

**Include:** all form fields, timestamp, page referrer if available.

---

## UX Requirements (FRONTEND.md)

- Inline validation on blur/submit
- Clear error messages below fields
- Loading state on submit button (disabled + spinner)
- Success state: confirmation message + optional "submit another" reset
- Error state: retry-friendly message, preserve form data
- No page reload on submit (client-side handling)

### Accessibility

- All inputs have associated `<Label>`
- Error messages linked via `aria-describedby`
- Focus moves to success/error announcement region
- Submit button has `aria-busy` during loading

---

## Spam Protection

Minimum viable (no extra services required):

- Honeypot hidden field
- Server-side rate limit (e.g., 5 submissions/IP/hour via edge middleware or in-memory store)

Optional upgrade (Phase 11):

- Cloudflare Turnstile or reCAPTCHA v3

---

## CTA Wiring

Update all "Book Consultation" buttons across site:

```tsx
<Button asChild>
  <Link href="/contact?type=consultation">Book Consultation</Link>
</Button>
```

Contact page reads `searchParams.type` to pre-select inquiry type.

Similarly: `?type=information`, `?type=partnership`.

---

## Tasks Checklist

- [ ] Finalize Zod schema
- [ ] Build server action / API route
- [ ] Configure Resend + domain verification
- [ ] Create internal + auto-reply email templates
- [ ] Wire Contact page form to server handler
- [ ] Implement success/error UI states
- [ ] Add honeypot + rate limiting
- [ ] Pre-select inquiry type from URL param
- [ ] Wire all site CTAs to correct contact URLs
- [ ] Test all inquiry types end-to-end
- [ ] Test validation error paths
- [ ] Verify emails deliver to info@globaltrainingnetwork.org

---

## Acceptance Criteria

- [ ] Form submits successfully in production environment
- [ ] Invalid submissions rejected with clear field errors
- [ ] GTN receives email within 30 seconds of submit
- [ ] Auto-reply sent to submitter (if scoped)
- [ ] Form works without JavaScript degradation message (progressive enhancement optional)
- [ ] No API keys exposed client-side
- [ ] Rate limit blocks rapid repeated submissions

---

## Environment Variables

```
RESEND_API_KEY=re_...
CONTACT_EMAIL=info@globaltrainingnetwork.org
RESEND_FROM_EMAIL=noreply@globaltrainingnetwork.org
```

---

## Estimated Effort

**1–2 days**
