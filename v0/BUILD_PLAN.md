# VERSION 2 — Personal Brand + Services-First Layout

> **Privacy:** NO — use therapist name (Shine Teoh) and photos
> **Homepage section order:** Services-first (condition cards early) — same order as v0 but WITH therapist identity
> **Visual reference:** `_temp/v2/` — inspired by Communicate Speech Pathology (established, blue/orange, mobile-therapy focused)

---

## STEP 1: READ THESE FILES BEFORE WRITING ANY CODE

1. **`.cursorrules`** — non-negotiable SEO rules. Every decision must comply. If any design choice conflicts with a rule here, the rule wins.
2. **`shine-v2-build-brief.md`** — master reference for all page content, copy blocks, schema specs, meta tags, internal links, and form specs. This is your content source of truth.

Read both files in full before proceeding. Refer back to them constantly.

---

## STEP 2: UNDERSTAND THE PROJECT

You are building a complete website for "Shine and Speak," a mobile speech pathology practice in Sydney, run by speech pathologist **Shine Teoh**. Build the site inside the `v2/` folder (this folder).

Use a modern React framework. Next.js App Router is recommended, but you may choose an alternative if it better serves the project. The framework must support:

- Static or SSR rendering
- File-based or programmatic routing for ~46 pages
- `<head>` management for per-page meta tags and JSON-LD schema
- Image optimisation (lazy loading, responsive sizing)

---

## STEP 3: BRAND IDENTITY AND ASSETS

### Logo and favicon

All brand assets are located in `_temp/assets/`. Use these paths relative to the repo root:

- **Header logo:** `_temp/assets/shine-and-speak-logo-horizontal-transparent.png`
- **Footer logo:** `_temp/assets/shine-and-speak-logo-stacked-transparent.png`
- **Brand mark / icon:** `_temp/assets/shine-and-speak-logo-mark-transparent.png`
- **Favicon (PNG):** `_temp/assets/shine-and-speak-favicon-mark-transparent.png`
- **Favicon (ICO):** `_temp/assets/shine-and-speak-favicon.ico`
- **Schema logo field:** use the horizontal logo URL

Copy these into your project's public/static assets folder during setup.

### Brand colour palette

Derive your colour palette from the actual logo. The core brand colours are:

- **Navy blue** (~#1B365D) — primary text, headings, header/footer backgrounds
- **Golden amber** (~#E8A84C) — accents, CTAs, highlights, icons
- **White** (#FFFFFF) — backgrounds, card surfaces
- Use tints and shades of these for hover states, section backgrounds, borders, and secondary elements

Do NOT copy the competitor site's colour scheme (Communicate uses bright blue/orange). Adapt their layout patterns to Shine and Speak's navy/gold/white palette.

### Therapist photos and hero image

Use "Shine Teoh" as the therapist name throughout the site.

**IMPORTANT:** The file `_temp/assets/shine-teoh-welcome-banner-reference.jpg` is a **legacy reference image** from a previous employer — it contains "Hunter Cessnock region" branding and must NOT be used directly on the site.

For the hero and therapist sections, use one of these approaches:
- Source a warm, natural-looking royalty-free image from Unsplash (search: "speech therapy child", "therapist working with child", "child communication", "mobile therapy home visit") and include an HTML comment `<!-- REPLACE: Professional photo of Shine Teoh working with a child -->`
- Use a branded placeholder with the logo mark and a comment for replacement

The v2 screenshots show a strong "We Come To You" hero with a therapist arriving at a home — this is very relevant to Shine and Speak's mobile therapy positioning. Find a royalty-free image that conveys this mobile/home-visit concept.

For the "Meet the therapist" section:
- Use a placeholder with comment `<!-- REPLACE: Professional headshot of Shine Teoh, warm and approachable -->`
- The headshot thumbnail at `_temp/assets/shine-teoh-headshot-thumbnail.webp` can be used as a reference for the therapist's appearance, but is low-resolution — mark it for replacement

**Author attribution on every page:** "Written by Shine Teoh, Certified Practising Speech Pathologist" linking to `/about`.

---

## STEP 4: VISUAL DIRECTION

### Screenshots to reference

Look at the competitor website screenshots in `_temp/v2/` (v2a.png through v2e.png). These are from **Communicate Speech Pathology**, an established mobile speech therapy practice operating across multiple Australian cities.

**What to take from these screenshots:**
- Full-width hero with strong imagery and overlaid text — professional, established feel
- "Immediate Availability" urgency strip below hero (adapt as service area strip for Shine and Speak)
- "We Come To You" section with location checkmarks — directly relevant to mobile therapy positioning
- Service cards with large photos and clear category labels
- Statistics/impact numbers section (adapt with relevant figures or credential counts)
- "Who Do We Help?" section with therapist photo alongside condition list
- Contact section with dual-path (NDIS referral form vs private referral form) — maps to Shine and Speak's dual CTA architecture
- Footer with service areas listed and NDIS badge

**What NOT to copy:**
- Their colour scheme (bright blue/coral orange) — use Shine and Speak's navy/gold/white
- Their multi-city service area format (Shine and Speak is Sydney-only)
- Their "Online Course" section — not relevant
- Any content or copy from their site

### Typography

Choose a clean, professional font pairing that conveys trustworthiness and warmth. The Communicate screenshots use strong sans-serif headings with clean body text — a similar approach works well for a services-first layout. Google Fonts recommended.

---

## STEP 5: HOMEPAGE SECTION ORDER (MANDATORY)

Follow this exact order. Do not rearrange. Content for each section is in **Section 3** of `shine-v2-build-brief.md`.

1. **Hero** — H1: "Helping your child communicate with confidence." Royalty-free hero image or branded placeholder. Dual CTAs.
2. **Trust logo bar** — CPSP, NDIS, Medicare badges
3. **Condition cards** — 6 cards linking to SEO URLs (Section 3, Section 3)
4. **Bilingual callout** — English + Mandarin, link to `/zh/` (Section 3, Section 4)
5. **Mobile advantage** — "Therapy where your child is most comfortable" with 4 delivery modes (Section 3, Section 5)
6. **Differentiators** — 4 icon blocks (Section 3, Section 6)
7. **How it works** — 3 steps with CTA (Section 3, Section 7)
8. **Meet the therapist** — Shine Teoh's bio with headshot placeholder, credentials (Section 3, Section 8)
9. **Social proof** — Google Reviews placeholder (Section 3, Section 9)
10. **For Support Coordinators** — referral pitch with CTA (Section 3, Section 10)
11. **FAQ** — fully visible, NO accordions. Every Q&A pair as visible H3 + paragraph (Section 3, Section 11)
12. **Service area** — compact suburb grid with links (Section 3, Section 12)
13. **Final CTA band** (Section 3, Section 13)
14. **Footer** — full nav, suburb list, badges, WhatsApp, WeChat QR placeholder. Copyright: © 2026 Shine and Speak (Section 3, Section 14)

---

## STEP 6: PAGES TO BUILD

### Fully built (complete content from the build brief)

1. **Homepage** (`/`) — MedicalBusiness schema, section order above. Content from Section 3 of build brief.
2. **Autism condition page** (`/speech-therapy-autism-sydney-nsw`) — Section 4.1 of build brief.
3. **Burwood suburb page** (`/speech-pathologist-burwood-nsw`) — Section 4.2 of build brief.
4. **About page** (`/about`) — Section 4.3 of build brief. Use Shine Teoh's name and photo placeholders.

### Placeholder pages

Build every page listed in the **"Core 30 page mapping" table** in Section 2 of the build brief. Each placeholder page needs:

- Correct URL/route
- Correct, unique meta title (under 60 characters) and description (150-160 characters)
- One H1 with the target keyword
- Correct schema type for the page category
- Organization schema in `<head>` (same on every page)
- BreadcrumbList schema
- Header and footer (shared components)
- Body text: "Content coming soon"
- Breadcrumb navigation

### Also build

- `/zh/` — Chinese homepage with `lang="zh"` and hreflang tags (Section 7 of build brief)
- `/thank-you` — Next Steps page (Section 5 of build brief)
- `/refer-a-client` — 11-field referral form (Section 5 of build brief)
- **Shared components:** sticky header with dual CTAs (Book a Free Discovery Call + Refer a Client), footer, breadcrumbs, ScrollToTop, mobile nav with floating call button
- `sitemap.xml`, `robots.txt`, custom 404 page
- **Parent enquiry form** (5 fields) and **coordinator referral form** (11 fields with conditional logic) — Section 5 of build brief

---

## STEP 7: SEO ARCHITECTURE (NON-NEGOTIABLE)

These rules come from `.cursorrules` and are mandatory. Read that file for full details. Summary:

- **One H1 per page** with target keyword. Never put the business name in an H1.
- **Heading hierarchy:** H1 → H2 → H3 → H4. Never skip levels. Never use heading tags for styling.
- **All FAQ content fully visible** — NO accordions, NO collapsed sections, NO "read more" truncation.
- **MedicalBusiness schema on homepage ONLY.** Organization schema on EVERY page. Service schema on condition/service pages. FAQPage schema on pages with FAQ content. BreadcrumbList on every page.
- **No streetAddress in schema** (Service Area Business — use areaServed instead).
- **Every internal link has unique anchor text** describing the destination. Minimum 3 contextual internal links per page in body content.
- **Semantic HTML:** `<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`.
- **All phone numbers click-to-call** (`tel:` links).
- **Unique meta title** (under 60 chars) and **description** (150-160 chars) per page.
- **Self-referencing canonical tag** on every page.
- **Open Graph tags** on every page (og:title, og:description, og:image, og:url).
- **`<html lang="en">`** (or `lang="zh"` for Chinese pages).
- **Images:** descriptive alt text, width/height attributes, lazy load below fold, WebP preferred.
- **ScrollToTop** component resets scroll position on every route change.
- **No orphan pages.** Every page reachable via navigation or internal links.
- **No `<a href="#">` placeholders** — use real routes or HTML comments.
- **Author attribution** on every page: "Written by Shine Teoh, Certified Practising Speech Pathologist" linking to `/about`.

---

## STEP 8: VERIFICATION CHECKLIST

After building, verify against the checklist in **Section 9** of `shine-v2-build-brief.md`. Key checks:

- [ ] H1 is outcome-focused and parent-facing on homepage
- [ ] Both CTAs visible in sticky header at all viewport sizes
- [ ] Trust signals appear immediately after hero (not buried)
- [ ] FAQ content is fully visible (no accordions)
- [ ] MedicalBusiness schema on homepage ONLY
- [ ] Organization schema on EVERY page
- [ ] All phone numbers are click-to-call
- [ ] Unique meta title and description per page
- [ ] Self-referencing canonical on every page
- [ ] Therapist name "Shine Teoh" used consistently throughout
- [ ] Footer copyright says © 2026 Shine and Speak
- [ ] All internal link anchor text is unique across the site
- [ ] Mobile: hamburger menu, floating call button, both CTAs accessible
- [ ] No horizontal scroll on mobile
- [ ] ScrollToTop working on route changes

---

Build the complete site now. Make it visually polished and professional, drawing layout inspiration from the `_temp/v2/` screenshots while using Shine and Speak's own brand identity. Prioritise SEO architecture correctness, then visual quality.
