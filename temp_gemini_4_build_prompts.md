# GEMINI BUILD PROMPTS — 4 Versions

## Copy-paste ONE prompt per Cursor session

> **How to use this file:**
>
> 1. Open Cursor with Gemini 3.1 Pro selected
> 2. Copy the prompt for the version you want to build (v0, v1, v2, or v3)
> 3. Paste it into the Cursor chat
> 4. Gemini will read `.cursorrules` automatically and `shine-v2-build-brief.md` as instructed
> 5. Gemini builds the complete site for that version

---

---

---

# VERSION 0 — Privacy Variant + Services-First Layout

> **Screenshots:** `_temp/v0/` (v0a.png through v0g.png)
> **Section order:** Services-first (condition cards early)
> **Privacy:** YES — no therapist name or personal photo

**Paste this into Cursor:**

---

You are building a complete Next.js website for "Shine and Speak," a mobile speech pathology practice in Sydney.

**Before writing any code, read these two files in this project:**

1. **`.cursorrules`** — non-negotiable SEO rules. Every decision must comply.
2. **`shine-v2-build-brief.md`** — your master reference for all page content, copy blocks, schema specs, meta tags, internal links, and form specs.

**Visual reference:** Look at the competitor website screenshots in `_temp/v0/`. Match their layout patterns, spacing, colour feel, typography, and overall design language. These screenshots are your aesthetic guide.

**Logo and favicon:** Use the actual files in `assets/`:

- Header: `shine-and-speak-logo-horizontal-transparent.png`
- Favicon: `shine-and-speak-favicon.ico`
- Schema logo field: use the horizontal logo URL
- Footer: `shine-and-speak-logo-stacked-transparent.png`

## THIS IS THE PRIVACY VARIANT

This version does NOT show the therapist's name or personal photo.

- Replace all instances of "Shine Teoh" or "[Shine]" with "Shine and Speak" or "your therapist" or "our team" as reads naturally
- Do NOT use `shine-teoh-headshot-thumbnail.webp` or `shine-teoh-welcome-banner-reference.jpg` anywhere
- The "Meet the therapist" homepage section becomes "Our Approach" — focus on the practice's philosophy, qualifications, and methodology rather than personal story
- The About page (`/about`) H1 becomes "About Shine and Speak" — emphasise the practice, credentials, approach. No personal name, no personal photo.
- Author attribution on every page: "Written by a Certified Practising Speech Pathologist" (no name) linking to `/about`
- Still include all credential placeholders (university degree, CPSP, NDIS, Medicare, training certs) — just don't tie them to a named individual
- Where a therapist photo would go, use a branded illustration placeholder or the logo mark (`shine-and-speak-logo-mark-transparent.png`)

## HOMEPAGE SECTION ORDER (mandatory for this version)

Follow this exact order. Do not rearrange. Content for each section is in Section 3 of `shine-v2-build-brief.md`.

1. **Hero** — H1: "Helping your child communicate with confidence." Subheadline, dual CTAs, logo mark or branded illustration instead of therapist photo.
2. **Trust logo bar** — CPSP, NDIS, Medicare badges
3. **Condition cards** — 6 cards (Autism, ADHD, Language Delay, Speech Sounds, Stuttering, Literacy) linking to SEO URLs
4. **Bilingual callout** — English + Mandarin, link to `/zh/`
5. **Mobile advantage** — "Therapy where your child is most comfortable" with 4 delivery modes
6. **Differentiators** — 4 icon blocks ("We come to you", "Bilingual", "NDIS/Medicare/Private", "Evidence-based")
7. **How it works** — 3 steps with CTA
8. **Our Approach** — practice philosophy and credentials (replaces "Meet the therapist")
9. **Social proof** — Google Reviews placeholder with interim credential badges
10. **For Support Coordinators** — referral pitch with CTA
11. **FAQ** — fully visible, NO accordions. Every Q&A pair as visible H3 + paragraph
12. **Service area** — compact suburb grid with links
13. **Final CTA band**
14. **Footer** — full nav, suburb list, badges, WhatsApp, WeChat QR placeholder

## PAGES TO BUILD

**Fully built (complete content from the build brief):**

1. Homepage (`/`) — MedicalBusiness schema, section order above
2. Autism condition page (`/speech-therapy-autism-sydney-nsw`) — Section 4.1 of build brief
3. Burwood suburb page (`/speech-pathologist-burwood-nsw`) — Section 4.2 of build brief
4. About page (`/about`) — Section 4.3 of build brief, adapted for privacy variant

**Placeholder pages (correct route, unique meta tags, H1, schema, breadcrumb, header/footer, "Content coming soon"):**
Build every page in the "Core 30 page mapping" table in Section 2 of the build brief.

**Also build:**

- `/zh/` Chinese homepage with `lang="zh"` and hreflang tags (Section 7 of brief)
- `/thank-you` Next Steps page (Section 5 of brief)
- `/refer-a-client` with the 11-field referral form (Section 5 of brief)
- Shared components: sticky header with dual CTAs, footer, breadcrumbs, ScrollToTop, mobile nav with floating call button
- `sitemap.xml`, `robots.txt`, custom 404 page
- Parent enquiry form (5 fields) and coordinator referral form (11 fields with conditional logic)

## SEO REMINDERS (from `.cursorrules`)

- One H1 per page with target keyword
- All FAQ content fully visible — NO accordions
- MedicalBusiness schema on homepage ONLY
- Organization schema on EVERY page
- No streetAddress in schema (SAB — use areaServed)
- Every internal link has unique anchor text describing the destination
- Semantic HTML: `<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`
- All phone numbers click-to-call
- Unique meta title (<60 chars) and description (150-160 chars) per page

Build the complete site now. Make it visually match the `_temp/v0/` screenshots while following every SEO rule.

---

---

---

# VERSION 1 — Personal Brand + Differentiators-First Layout

> **Screenshots:** `_temp/v1/` (v1a.png through v1g.png)
> **Section order:** Differentiators-first (why-choose-us early)
> **Privacy:** NO — use therapist name (Shine Teoh) and photos

**Paste this into Cursor:**

---

You are building a complete Next.js website for "Shine and Speak," a mobile speech pathology practice in Sydney, run by speech pathologist Shine Teoh.

**Before writing any code, read these two files in this project:**

1. **`.cursorrules`** — non-negotiable SEO rules. Every decision must comply.
2. **`shine-v2-build-brief.md`** — your master reference for all page content, copy blocks, schema specs, meta tags, internal links, and form specs.

**Visual reference:** Look at the competitor website screenshots in `_temp/v1/`. Match their layout patterns, spacing, colour feel, typography, and overall design language.

**Logo and favicon:** Use the actual files in `assets/`:

- Header: `shine-and-speak-logo-horizontal-transparent.png`
- Favicon: `shine-and-speak-favicon.ico`
- Footer: `shine-and-speak-logo-stacked-transparent.png`

**Therapist photos:** Use the actual files in `assets/`:

- Hero or About section: `shine-teoh-welcome-banner-reference.jpg`
- Meet the therapist / headshot contexts: `shine-teoh-headshot-thumbnail.webp`

Use "Shine Teoh" as the therapist name throughout. Author attribution: "Written by Shine Teoh, Certified Practising Speech Pathologist" linking to `/about`.

## HOMEPAGE SECTION ORDER (mandatory for this version)

Follow this exact order. Content for each section is in Section 3 of `shine-v2-build-brief.md`.

1. **Hero** — H1: "Helping your child communicate with confidence." Use `shine-teoh-welcome-banner-reference.jpg` as hero image. Dual CTAs.
2. **Trust logo bar** — CPSP, NDIS, Medicare badges
3. **Differentiators** — 4 icon blocks FIRST ("We come to you", "Bilingual", "NDIS/Medicare/Private", "Evidence-based")
4. **Mobile advantage** — "Therapy where your child is most comfortable" with 4 delivery modes
5. **Condition cards** — 6 cards linking to SEO URLs
6. **How it works** — 3 steps with CTA
7. **Bilingual callout** — English + Mandarin, link to `/zh/`
8. **Meet the therapist** — Shine Teoh's bio with headshot, credentials, CTA to `/about`
9. **Social proof** — Google Reviews placeholder with interim credential badges
10. **For Support Coordinators** — referral pitch with CTA
11. **FAQ** — fully visible, NO accordions
12. **Service area** — compact suburb grid with links
13. **Final CTA band**
14. **Footer**

## PAGES TO BUILD

**Fully built (complete content from the build brief):**

1. Homepage (`/`) — MedicalBusiness schema, section order above
2. Autism condition page (`/speech-therapy-autism-sydney-nsw`) — Section 4.1 of build brief
3. Burwood suburb page (`/speech-pathologist-burwood-nsw`) — Section 4.2 of build brief
4. About page (`/about`) — Section 4.3 of build brief, using Shine Teoh's name and photos

**Placeholder pages:** Every page in the "Core 30 page mapping" table in Section 2 of the build brief.

**Also build:**

- `/zh/` Chinese homepage with `lang="zh"` and hreflang tags
- `/thank-you` Next Steps page
- `/refer-a-client` with 11-field referral form
- Shared components: sticky header, footer, breadcrumbs, ScrollToTop, mobile nav
- `sitemap.xml`, `robots.txt`, custom 404 page
- Both forms (parent enquiry + coordinator referral)

## SEO REMINDERS

- One H1 per page with target keyword
- All FAQ content fully visible — NO accordions
- MedicalBusiness schema on homepage ONLY
- Organization schema on EVERY page
- No streetAddress in schema (SAB — use areaServed)
- Every internal link has unique anchor text
- Semantic HTML throughout
- All phone numbers click-to-call
- Unique meta title and description per page

Build the complete site now. Make it visually match the `_temp/v1/` screenshots while following every SEO rule.

---

---

---

# VERSION 2 — Personal Brand + Services-First Layout

> **Screenshots:** `_temp/v2/` (v2a.png through v2e.png)
> **Section order:** Services-first (condition cards early) — same order as v0 but WITH therapist identity
> **Privacy:** NO — use therapist name (Shine Teoh) and photos

**Paste this into Cursor:**

---

You are building a complete Next.js website for "Shine and Speak," a mobile speech pathology practice in Sydney, run by speech pathologist Shine Teoh.

**Before writing any code, read these two files in this project:**

1. **`.cursorrules`** — non-negotiable SEO rules. Every decision must comply.
2. **`shine-v2-build-brief.md`** — your master reference for all page content, copy blocks, schema specs, meta tags, internal links, and form specs.

**Visual reference:** Look at the competitor website screenshots in `_temp/v2/`. Match their layout patterns, spacing, colour feel, typography, and overall design language.

**Logo and favicon:** Use the actual files in `assets/`:

- Header: `shine-and-speak-logo-horizontal-transparent.png`
- Favicon: `shine-and-speak-favicon.ico`
- Footer: `shine-and-speak-logo-stacked-transparent.png`

**Therapist photos:** Use the actual files in `assets/`:

- Hero or About section: `shine-teoh-welcome-banner-reference.jpg`
- Meet the therapist / headshot: `shine-teoh-headshot-thumbnail.webp`

Use "Shine Teoh" as the therapist name throughout. Author attribution: "Written by Shine Teoh, Certified Practising Speech Pathologist" linking to `/about`.

## HOMEPAGE SECTION ORDER (mandatory for this version)

Follow this exact order. Content for each section is in Section 3 of `shine-v2-build-brief.md`.

1. **Hero** — H1: "Helping your child communicate with confidence." Use `shine-teoh-welcome-banner-reference.jpg`. Dual CTAs.
2. **Trust logo bar** — CPSP, NDIS, Medicare badges
3. **Condition cards** — 6 cards linking to SEO URLs
4. **Bilingual callout** — English + Mandarin, link to `/zh/`
5. **Mobile advantage** — "Therapy where your child is most comfortable"
6. **Differentiators** — 4 icon blocks
7. **How it works** — 3 steps with CTA
8. **Meet the therapist** — Shine Teoh's bio with headshot, credentials
9. **Social proof** — Google Reviews placeholder
10. **For Support Coordinators** — referral pitch with CTA
11. **FAQ** — fully visible, NO accordions
12. **Service area** — compact suburb grid
13. **Final CTA band**
14. **Footer**

## PAGES TO BUILD

**Fully built:** Homepage, Autism page, Burwood page, About page (all per build brief).
**Placeholder pages:** Every page in Core 30 mapping table.
**Also build:** `/zh/`, `/thank-you`, `/refer-a-client`, shared components, sitemap.xml, robots.txt, 404 page, both forms.

## SEO REMINDERS

- One H1 per page with target keyword
- All FAQ content fully visible — NO accordions
- MedicalBusiness schema on homepage ONLY
- Organization schema on EVERY page
- No streetAddress in schema (SAB — use areaServed)
- Every internal link has unique anchor text
- Semantic HTML throughout
- All phone numbers click-to-call
- Unique meta title and description per page

Build the complete site now. Make it visually match the `_temp/v2/` screenshots while following every SEO rule.

---

---

---

# VERSION 3 — Personal Brand + Differentiators-First Layout

> **Screenshots:** `_temp/v3/` (v3a.png through v3j.png + Gemini generated images)
> **Section order:** Differentiators-first — same order as v1 but different visual design
> **Privacy:** NO — use therapist name (Shine Teoh) and photos

**Paste this into Cursor:**

---

You are building a complete Next.js website for "Shine and Speak," a mobile speech pathology practice in Sydney, run by speech pathologist Shine Teoh.

**Before writing any code, read these two files in this project:**

1. **`.cursorrules`** — non-negotiable SEO rules. Every decision must comply.
2. **`shine-v2-build-brief.md`** — your master reference for all page content, copy blocks, schema specs, meta tags, internal links, and form specs.

**Visual reference:** Look at the competitor website screenshots in `_temp/v3/`. Match their layout patterns, spacing, colour feel, typography, and overall design language. This folder also contains Gemini-generated images — you may use these as hero images or section backgrounds if they fit the design.

**Logo and favicon:** Use the actual files in `assets/`:

- Header: `shine-and-speak-logo-horizontal-transparent.png`
- Favicon: `shine-and-speak-favicon.ico`
- Footer: `shine-and-speak-logo-stacked-transparent.png`

**Therapist photos:** Use the actual files in `assets/`:

- Hero or About section: `shine-teoh-welcome-banner-reference.jpg`
- Meet the therapist / headshot: `shine-teoh-headshot-thumbnail.webp`

Use "Shine Teoh" as the therapist name throughout. Author attribution: "Written by Shine Teoh, Certified Practising Speech Pathologist" linking to `/about`.

## HOMEPAGE SECTION ORDER (mandatory for this version)

Follow this exact order. Content for each section is in Section 3 of `shine-v2-build-brief.md`.

1. **Hero** — H1: "Helping your child communicate with confidence." Use therapist photo or Gemini-generated image from `_temp/v3/`. Dual CTAs.
2. **Trust logo bar** — CPSP, NDIS, Medicare badges
3. **Differentiators** — 4 icon blocks FIRST
4. **Mobile advantage** — "Therapy where your child is most comfortable"
5. **Condition cards** — 6 cards linking to SEO URLs
6. **How it works** — 3 steps with CTA
7. **Bilingual callout** — English + Mandarin, link to `/zh/`
8. **Meet the therapist** — Shine Teoh's bio with headshot, credentials
9. **Social proof** — Google Reviews placeholder
10. **For Support Coordinators** — referral pitch with CTA
11. **FAQ** — fully visible, NO accordions
12. **Service area** — compact suburb grid
13. **Final CTA band**
14. **Footer**

## PAGES TO BUILD

**Fully built:** Homepage, Autism page, Burwood page, About page (all per build brief).
**Placeholder pages:** Every page in Core 30 mapping table.
**Also build:** `/zh/`, `/thank-you`, `/refer-a-client`, shared components, sitemap.xml, robots.txt, 404 page, both forms.

## SEO REMINDERS

- One H1 per page with target keyword
- All FAQ content fully visible — NO accordions
- MedicalBusiness schema on homepage ONLY
- Organization schema on EVERY page
- No streetAddress in schema (SAB — use areaServed)
- Every internal link has unique anchor text
- Semantic HTML throughout
- All phone numbers click-to-call
- Unique meta title and description per page

Build the complete site now. Make it visually match the `_temp/v3/` screenshots while following every SEO rule.
