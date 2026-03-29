# SEO AUDIT — Shine and Speak

You have just finished building a version of the Shine and Speak website. Your job now is to audit what you built and produce a structured report. Do not change any files. Do not write any code. Read and report only.

---

## BEFORE YOU START

Read these files in full — they are your ground truth:

1. **`.cursorrules`** — the non-negotiable SEO rules
2. **`shine-v2-build-brief.md`** — the master content and schema specification
3. **Your version's `BUILD_PLAN.md`** — to determine the correct homepage section order, privacy stance, and version-specific requirements for this build

Any deviation from these documents is a finding.

---

## HOW TO REPORT

For every item, write one of:

- `✅ PASS`
- `❌ FAIL — [what you found]`
- `⚠️ WARNING — [what the gap is]`

At the end, write a **Section Score** as `X / Y passed`, an **Overall Score**, and a **Priority Issues** list of the top 5 findings ranked by SEO impact.

---

## SECTION 1: HOMEPAGE STRUCTURE

Read your homepage `page.tsx` and every component it imports.

- **1.1** — H1 text is exactly "Helping your child communicate with confidence"
- **1.2** — Exactly one `<h1>` tag exists on the homepage
- **1.3** — Trust logo bar (CPSP, NDIS, Medicare) appears directly after the hero, before any other content section
- **1.4** — The homepage section order exactly matches the mandatory order in your BUILD_PLAN.md (check the sequence item by item)
- **1.5** — FAQ section renders all Q&A pairs as visible `<h3>` + `<p>` — no accordion, no expand/collapse toggle, no hidden state whatsoever
- **1.6** — All 6 condition cards are present (Autism, ADHD, Language Delay, Speech Sounds, Stuttering, Literacy) with correct links to their SEO URLs
- **1.7** — Bilingual callout has Chinese text and links to `/zh/`
- **1.8** — "For Support Coordinators" section has CTAs to both `/refer-a-client` and `/ndis-service-guide-support-coordinators`
- **1.9** — Service area suburb grid is present with every suburb linked to its suburb page
- **1.10** — Final CTA band exists before the footer

**If this is the privacy variant (v0) — check all of these:**

- **1.11** — "Shine Teoh" does NOT appear anywhere on the homepage (search the entire component tree)
- **1.12** — No therapist photo is used — no `shine-teoh-headshot-thumbnail.webp`, no `shine-teoh-welcome-banner-reference.jpg`
- **1.13** — "Meet the therapist" does NOT exist — it has been replaced with "Our Approach" or a practice-philosophy section
- **1.14** — Author attribution reads "Written by a Certified Practising Speech Pathologist" (no name) linking to `/about`

**If this is a personal brand variant (v1, v2, or v3) — check all of these:**

- **1.15** — "Shine Teoh" is used as the therapist name throughout
- **1.16** — "Meet the therapist" section is present with headshot placeholder and visible credentials block
- **1.17** — `shine-teoh-welcome-banner-reference.jpg` is NOT used as the hero image (it is a legacy image from a previous employer — search for any reference to this filename)
- **1.18** — Author attribution reads "Written by Shine Teoh, Certified Practising Speech Pathologist" linking to `/about`

---

## SECTION 2: META TAGS

Check: homepage, autism page, Burwood page, about page, and 3 placeholder pages of your choice.

For each page checked:

- **2.1** — `<title>` is unique across all pages
- **2.2** — `<title>` is under 60 characters
- **2.3** — `<title>` contains the primary keyword for that page
- **2.4** — `<meta name="description">` is unique across all pages
- **2.5** — Description is 150–160 characters
- **2.6** — Description includes a location reference (Sydney, NSW, Inner West, or suburb name)
- **2.7** — Self-referencing `<link rel="canonical">` tag is present
- **2.8** — `og:title` is present
- **2.9** — `og:description` is present
- **2.10** — `og:image` is present
- **2.11** — `og:url` is present
- **2.12** — `<html lang="en">` on all English pages
- **2.13** — `<html lang="zh">` on the `/zh/` page only

List every page where a tag is missing, duplicated, or out of spec.

---

## SECTION 3: SCHEMA MARKUP

Check: homepage, autism page, Burwood page, about page, and the NDIS funding page.

- **3.1** — `Organization` schema is in `<head>` on every page checked
- **3.2** — `MedicalBusiness` schema is present on the homepage
- **3.3** — `MedicalBusiness` schema is NOT present on any other page
- **3.4** — `LocalBusiness` schema is NOT present on any page other than the homepage
- **3.5** — `streetAddress` does NOT appear in any schema block anywhere
- **3.6** — `areaServed` is used in MedicalBusiness/Organization schema instead
- **3.7** — `Service` schema is on the autism page
- **3.8** — `Service` schema is on the NDIS funding page
- **3.9** — `FAQPage` schema is on the homepage wrapping the FAQ Q&A pairs
- **3.10** — `BreadcrumbList` schema is on every page checked
- **3.11** — Business name, phone, and email are identical across schema, header, footer, and page content

---

## SECTION 4: HEADING HIERARCHY

Check: homepage, autism page, Burwood page, about page.

- **4.1** — Each page has exactly one `<h1>` tag
- **4.2** — No page has zero `<h1>` tags
- **4.3** — No page has more than one `<h1>` tag
- **4.4** — Heading levels are never skipped (no `<h1>` jumping directly to `<h3>`)
- **4.5** — No heading tag is used purely for visual styling
- **4.6** — "Shine and Speak" does NOT appear as an `<h1>` on any page
- **4.7** — Homepage H1 is outcome-focused and parent-facing (not the business name, not "Welcome to...")

---

## SECTION 5: INTERNAL LINKING

Check: homepage, autism page, Burwood page, about page.

- **5.1** — Each page has at least 3 contextual internal links in body `<p>` content — not in navigation or footer
- **5.2** — No two internal links across the site share identical anchor text — search for repeated phrases like "learn more", "click here", "here", "read more"
- **5.3** — Anchor text describes the destination page, not just the action
- **5.4** — "Shine and Speak" is NOT used as anchor text for any internal link
- **5.5** — Internal links are placed inside `<p>` tags, not inside heading tags
- **5.6** — No `href="#"` placeholder links exist anywhere in the codebase
- **5.7** — Condition cards link to the correct SEO URLs (e.g., autism → `/speech-therapy-autism-sydney-nsw`)
- **5.8** — Autism page links to at least 2 related condition pages with unique anchor text each
- **5.9** — Burwood page links to nearby suburb pages with unique anchor text each

---

## SECTION 6: URL STRUCTURE

Check all routes in your `src/app/` directory.

- **6.1** — Condition pages follow `/speech-therapy-[condition]-sydney-nsw`
- **6.2** — Suburb pages follow `/speech-pathologist-[suburb]-nsw`
- **6.3** — Service/funding pages follow `/[service-type]-speech-therapy-sydney-nsw`
- **6.4** — All URLs are lowercase and hyphen-separated (no underscores, no camelCase)
- **6.5** — No trailing slashes in route definitions
- **6.6** — `/zh/` exists
- **6.7** — `/thank-you` exists
- **6.8** — `/refer-a-client` exists
- **6.9** — `/about` exists

List any non-conforming URLs found.

---

## SECTION 7: TECHNICAL SEO

- **7.1** — `ScrollToTop` component is implemented and wired to route changes
- **7.2** — All phone numbers use `<a href="tel:...">` — not plain text anywhere
- **7.3** — All `<img>` and Next.js `<Image>` elements have `alt` attributes
- **7.4** — Images below the fold use lazy loading
- **7.5** — Images have `width` and `height` attributes to prevent layout shift
- **7.6** — `robots.txt` or `robots.ts` exists
- **7.7** — `sitemap.xml` or `sitemap.ts` exists
- **7.8** — Custom 404 page (`not-found.tsx`) exists
- **7.9** — `/zh/` page has `hreflang` tags for both `en` and `zh`
- **7.10** — Homepage has a `hreflang="zh"` tag pointing to `/zh/`
- **7.11** — WhatsApp Business link or floating button is present on all pages
- **7.12** — WeChat QR code placeholder is in the footer
- **7.13** — Every internal `href` value corresponds to an actual route in `src/app/` — no broken links

---

## SECTION 8: E-E-A-T SIGNALS

- **8.1** — Author attribution is present on every fully-built page (homepage, autism, Burwood, about)
- **8.2** — Attribution text and name match the privacy stance confirmed in BUILD_PLAN.md (no name for v0; "Shine Teoh" for v1/v2/v3)
- **8.3** — Credentials block is visible and not collapsed on the homepage
- **8.4** — Credentials block is visible and not collapsed on the about page
- **8.5** — Video embed placeholder with HTML comment is present on the about page
- **8.6** — Social media links are present (LinkedIn minimum)
- **8.7** — CPSP credential (Certified Practising Speech Pathologist / Speech Pathology Australia) is mentioned
- **8.8** — NDIS provider status is mentioned
- **8.9** — Medicare provider status is mentioned
- **8.10** — Placeholder comments (`<!-- PLACEHOLDER: -->` or `<!-- REPLACE: -->`) exist for degree, provider numbers, training certs, personal story, and therapist photo

---

## SECTION 9: FORMS

**Parent enquiry form:**

- **9.1** — "Your name" field (type text, required)
- **9.2** — "Phone number" field (type tel, required)
- **9.3** — "Email" field (type email, required)
- **9.4** — "Child's age" field (text, required)
- **9.5** — "What are you looking for help with?" dropdown (required) with these exact options: Speech Sounds / Language / Stuttering / Literacy / Autism / ADHD / Developmental Delay / Intellectual Disability / Social Communication / AAC / Adult Speech / Not sure / Other
- **9.6** — Form redirects to `/thank-you` on submission

**Coordinator referral form at `/refer-a-client`:**

- **9.7** — "Your name" (text, required)
- **9.8** — "Organisation" (text, required)
- **9.9** — "Email" (email, required)
- **9.10** — "Phone" (tel, required)
- **9.11** — "Participant name" (text, required)
- **9.12** — "NDIS number" (text, required)
- **9.13** — "Plan management type" dropdown (Self-managed / Plan-managed / NDIA-managed, required)
- **9.14** — "Plan manager name & contact" field is conditionally shown only when "Plan-managed" is selected
- **9.15** — "Key support needs" (textarea, required)
- **9.16** — "Preferred delivery" checkboxes (Mobile / Telehealth / School-based, required)
- **9.17** — "Preferred language" dropdown (English / Mandarin, required)
- **9.18** — Form redirects to `/thank-you` on submission

---

## SECTION 10: NAVIGATION AND SHARED COMPONENTS

**Header:**

- **10.1** — Logo links to `/`
- **10.2** — "Book a Free Discovery Call" CTA button is in the header
- **10.3** — "Refer a Client" CTA is in the header
- **10.4** — Both CTAs are accessible at all viewport sizes — not hidden on mobile without an accessible replacement
- **10.5** — Phone number in the header is a `tel:` link
- **10.6** — Language switcher (EN/中文) links to `/zh/`
- **10.7** — Services dropdown contains links to all service-type pages
- **10.8** — Funding & Fees dropdown contains NDIS, Medicare, Private Pay, HCP, DVA, and Fees links
- **10.9** — Areas dropdown contains suburb page links
- **10.10** — Mobile hamburger menu is implemented
- **10.11** — Mobile floating click-to-call button is present

**Footer:**

- **10.12** — Full navigation links are repeated in the footer
- **10.13** — Complete suburb list is visible in the footer (not collapsed) with every suburb linked to its suburb page
- **10.14** — ABN placeholder is present
- **10.15** — NDIS provider number placeholder is present
- **10.16** — CPSP/SPA badge is mentioned
- **10.17** — Medicare badge is mentioned
- **10.18** — WhatsApp link is present
- **10.19** — WeChat QR placeholder is present
- **10.20** — Social media links are present
- **10.21** — Copyright reads "© 2026 Shine and Speak" — not 2025
- **10.22** — Author attribution line is present in the footer

---

## SECTION 11: PAGE COMPLETENESS

**Fully-built pages (must have real content, not "Content coming soon"):**

- **11.1** — `/` homepage has all sections with full content
- **11.2** — `/speech-therapy-autism-sydney-nsw` has full content matching build brief Section 4.1
- **11.3** — `/speech-pathologist-burwood-nsw` has full content matching build brief Section 4.2
- **11.4** — `/about` has full content matching build brief Section 4.3

**Utility pages:**

- **11.5** — `/zh/` with `lang="zh"` on the html element
- **11.6** — `/thank-you`
- **11.7** — `/refer-a-client` with the referral form
- **11.8** — `/fees` (placeholder acceptable)
- **11.9** — `/how-it-works` (placeholder acceptable)
- **11.10** — Custom 404 page

**Condition pages (placeholder acceptable):**

- **11.11** — `/speech-therapy-adhd-sydney-nsw`
- **11.12** — `/speech-therapy-language-delay-sydney-nsw`
- **11.13** — `/speech-therapy-speech-sounds-sydney-nsw`
- **11.14** — `/speech-therapy-stuttering-sydney-nsw`
- **11.15** — `/speech-therapy-literacy-sydney-nsw`

**Suburb pages (placeholder acceptable):**

- **11.16** — `/speech-pathologist-arncliffe-nsw`
- **11.17** — `/speech-pathologist-hurstville-nsw`
- **11.18** — `/speech-pathologist-strathfield-nsw`
- **11.19** — `/speech-pathologist-campsie-nsw`
- **11.20** — `/speech-pathologist-rockdale-nsw`
- **11.21** — `/speech-pathologist-kogarah-nsw`
- **11.22** — `/speech-pathologist-marrickville-nsw`
- **11.23** — `/speech-pathologist-canterbury-bankstown-nsw`
- **11.24** — `/speech-pathologist-inner-west-sydney-nsw`
- **11.25** — `/speech-pathologist-st-george-nsw`

**Funding pages (placeholder acceptable):**

- **11.26** — `/ndis-speech-therapy-sydney-nsw`
- **11.27** — `/medicare-speech-therapy-sydney-nsw`
- **11.28** — `/private-speech-therapy-sydney-nsw`

---

## SECTION 12: CONTENT QUALITY

Read the homepage, autism page, and about page.

- **12.1** — No "Welcome to Shine and Speak" or similar as H1
- **12.2** — No "We pride ourselves on..." language
- **12.3** — No generic differentiators ("quality", "experience") without specifics
- **12.4** — FAQ content matches the 6 Q&A pairs specified in build brief Section 3 Section 11 — not generic placeholder questions
- **12.5** — Bilingual mention (English and Mandarin / 普通话) is present on the homepage
- **12.6** — The 4 delivery modes (home, school, telehealth, service area) are rendered as visible blocks — NOT as tabs or a toggled section
- **12.7** — All "For Support Coordinators" bullet points are visible without interaction

---

## REPORT FORMAT

Write your report using this exact structure:

```
# SEO AUDIT REPORT — Version [state which version this is]

## Overall Score: X / 120 checks passed

## Section Scores
1. Homepage Structure: X/18
2. Meta Tags: X/13
3. Schema Markup: X/11
4. Heading Hierarchy: X/7
5. Internal Linking: X/9
6. URL Structure: X/9
7. Technical SEO: X/13
8. E-E-A-T Signals: X/10
9. Forms: X/18
10. Navigation & Components: X/22
11. Page Completeness: X/28
12. Content Quality: X/7

## Priority Issues (top 5 by SEO impact)
1. [CRITICAL] ...
2. [HIGH] ...
3. [HIGH] ...
4. [MEDIUM] ...
5. [MEDIUM] ...

## All Failures and Warnings
[Every ❌ FAIL and ⚠️ WARNING with specific file paths]

## What Is Working Well
[Notable ✅ PASS highlights]
```

Do not fix anything. Do not write code. Report only.
