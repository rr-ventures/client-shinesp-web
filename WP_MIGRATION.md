# WordPress Migration Document — Shine and Speak

> **Source:** Next.js 16 / React 19 / Tailwind 4 site at `client-shinesp-web/`
> **Target:** WordPress (self-hosted or managed)
> **Generated:** 2026-04-05
> **Domain:** shineandspeak.com.au

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Complete URL Mapping Table](#2-complete-url-mapping-table)
3. [Content Inventory — Page-by-Page](#3-content-inventory--page-by-page)
4. [Bilingual Content Mapping](#4-bilingual-content-mapping)
5. [Forms Inventory](#5-forms-inventory)
6. [SEO Elements to Preserve](#6-seo-elements-to-preserve)
7. [Assets to Migrate](#7-assets-to-migrate)
8. [Recommended WP Plugins](#8-recommended-wp-plugins)
9. [301 Redirect Map](#9-301-redirect-map)
10. [Design System & Theme Requirements](#10-design-system--theme-requirements)
11. [Interactive Components](#11-interactive-components)
12. [Risk Areas & Gotchas](#12-risk-areas--gotchas)
13. [Migration Checklist](#13-migration-checklist)

---

## 1. Executive Summary

| Metric | Value |
|--------|-------|
| Total page routes | **41** (40 English + 1 Chinese) |
| Fully built pages | **9** (homepage, /zh, about, contact, refer-a-client, thank-you, for-support-coordinators, ndis-service-guide, burwood) |
| Stub/placeholder pages | **32** ("Content coming soon" — metadata only, no body content) |
| Forms | **3** (homepage lead form, contact enquiry, coordinator referral) |
| Structured data schemas | **5 types** (Organization, MedicalBusiness, FAQPage, Person, BreadcrumbList) |
| Service schemas (WebPage) | **32** pages |
| Languages | **2** (English `en_AU`, Chinese `zh_CN`) |
| Chinese pages | **1** (`/zh` — full homepage translation) |
| Custom components | **5** (Header, Footer, FloatingButtons, ScrollToTop, BreadcrumbSchema) |
| Google Fonts | **2** (Inter, Playfair Display) |
| Image assets | **~30** files in `public/` |

### Page Categories

| Category | Count | Pages |
|----------|-------|-------|
| Core pages | 6 | Homepage, About, Contact, How It Works, Fees, Thank You |
| Service pages | 8 | Paediatric, Adult, Mobile, Telehealth, School-based, Assessment, Reports, Parent Coaching |
| Condition pages | 7 | Autism, ADHD, Language Delay, Speech Sounds, Stuttering, Literacy, Aphasia |
| Funding pages | 5 | NDIS, Medicare, Private, HCP, DVA |
| Location/suburb pages | 11 | Arncliffe, Burwood, Campsie, Canterbury-Bankstown, Hurstville, Inner West, Kogarah, Marrickville, Rockdale, St George, Strathfield |
| Coordinator pages | 3 | For Support Coordinators, NDIS Service Guide, Refer a Client |
| Chinese page | 1 | /zh (homepage translation) |

---

## 2. Complete URL Mapping Table

### Core Pages

| # | Next.js Route | Current URL | Suggested WP Slug | WP Page Type |
|---|--------------|-------------|-------------------|--------------|
| 1 | `(english)/page.tsx` | `/` | `/` (Front Page) | Page (static front page) |
| 2 | `(english)/about/page.tsx` | `/about` | `/about` | Page |
| 3 | `(english)/contact/page.tsx` | `/contact` | `/contact` | Page |
| 4 | `(english)/how-it-works/page.tsx` | `/how-it-works` | `/how-it-works` | Page |
| 5 | `(english)/fees/page.tsx` | `/fees` | `/fees` | Page |
| 6 | `(english)/thank-you/page.tsx` | `/thank-you` | `/thank-you` | Page (noindex) |

### Service Pages

| # | Next.js Route | Current URL | Suggested WP Slug |
|---|--------------|-------------|-------------------|
| 7 | `paediatric-speech-therapy-sydney-nsw` | `/paediatric-speech-therapy-sydney-nsw` | `/paediatric-speech-therapy-sydney-nsw` |
| 8 | `adult-speech-therapy-sydney-nsw` | `/adult-speech-therapy-sydney-nsw` | `/adult-speech-therapy-sydney-nsw` |
| 9 | `mobile-speech-therapy-sydney-nsw` | `/mobile-speech-therapy-sydney-nsw` | `/mobile-speech-therapy-sydney-nsw` |
| 10 | `telehealth-speech-therapy-sydney-nsw` | `/telehealth-speech-therapy-sydney-nsw` | `/telehealth-speech-therapy-sydney-nsw` |
| 11 | `school-based-speech-therapy-sydney-nsw` | `/school-based-speech-therapy-sydney-nsw` | `/school-based-speech-therapy-sydney-nsw` |
| 12 | `speech-therapy-assessment-sydney-nsw` | `/speech-therapy-assessment-sydney-nsw` | `/speech-therapy-assessment-sydney-nsw` |
| 13 | `speech-therapy-reports-sydney-nsw` | `/speech-therapy-reports-sydney-nsw` | `/speech-therapy-reports-sydney-nsw` |
| 14 | `parent-coaching-speech-therapy-sydney-nsw` | `/parent-coaching-speech-therapy-sydney-nsw` | `/parent-coaching-speech-therapy-sydney-nsw` |

### Condition Pages

| # | Next.js Route | Current URL | Suggested WP Slug |
|---|--------------|-------------|-------------------|
| 15 | `speech-therapy-autism-sydney-nsw` | `/speech-therapy-autism-sydney-nsw` | `/speech-therapy-autism-sydney-nsw` |
| 16 | `speech-therapy-adhd-sydney-nsw` | `/speech-therapy-adhd-sydney-nsw` | `/speech-therapy-adhd-sydney-nsw` |
| 17 | `speech-therapy-language-delay-sydney-nsw` | `/speech-therapy-language-delay-sydney-nsw` | `/speech-therapy-language-delay-sydney-nsw` |
| 18 | `speech-therapy-speech-sounds-sydney-nsw` | `/speech-therapy-speech-sounds-sydney-nsw` | `/speech-therapy-speech-sounds-sydney-nsw` |
| 19 | `speech-therapy-stuttering-sydney-nsw` | `/speech-therapy-stuttering-sydney-nsw` | `/speech-therapy-stuttering-sydney-nsw` |
| 20 | `speech-therapy-literacy-sydney-nsw` | `/speech-therapy-literacy-sydney-nsw` | `/speech-therapy-literacy-sydney-nsw` |
| 21 | `speech-therapy-aphasia-sydney-nsw` | `/speech-therapy-aphasia-sydney-nsw` | `/speech-therapy-aphasia-sydney-nsw` |

### Funding Pages

| # | Next.js Route | Current URL | Suggested WP Slug |
|---|--------------|-------------|-------------------|
| 22 | `ndis-speech-therapy-sydney-nsw` | `/ndis-speech-therapy-sydney-nsw` | `/ndis-speech-therapy-sydney-nsw` |
| 23 | `medicare-speech-therapy-sydney-nsw` | `/medicare-speech-therapy-sydney-nsw` | `/medicare-speech-therapy-sydney-nsw` |
| 24 | `private-speech-therapy-sydney-nsw` | `/private-speech-therapy-sydney-nsw` | `/private-speech-therapy-sydney-nsw` |
| 25 | `home-care-package-speech-therapy-sydney-nsw` | `/home-care-package-speech-therapy-sydney-nsw` | `/home-care-package-speech-therapy-sydney-nsw` |
| 26 | `dva-speech-therapy-sydney-nsw` | `/dva-speech-therapy-sydney-nsw` | `/dva-speech-therapy-sydney-nsw` |

### Location / Suburb Pages

| # | Next.js Route | Current URL | Suggested WP Slug |
|---|--------------|-------------|-------------------|
| 27 | `speech-pathologist-arncliffe-nsw` | `/speech-pathologist-arncliffe-nsw` | `/speech-pathologist-arncliffe-nsw` |
| 28 | `speech-pathologist-burwood-nsw` | `/speech-pathologist-burwood-nsw` | `/speech-pathologist-burwood-nsw` |
| 29 | `speech-pathologist-campsie-nsw` | `/speech-pathologist-campsie-nsw` | `/speech-pathologist-campsie-nsw` |
| 30 | `speech-pathologist-canterbury-bankstown-nsw` | `/speech-pathologist-canterbury-bankstown-nsw` | `/speech-pathologist-canterbury-bankstown-nsw` |
| 31 | `speech-pathologist-hurstville-nsw` | `/speech-pathologist-hurstville-nsw` | `/speech-pathologist-hurstville-nsw` |
| 32 | `speech-pathologist-inner-west-sydney-nsw` | `/speech-pathologist-inner-west-sydney-nsw` | `/speech-pathologist-inner-west-sydney-nsw` |
| 33 | `speech-pathologist-kogarah-nsw` | `/speech-pathologist-kogarah-nsw` | `/speech-pathologist-kogarah-nsw` |
| 34 | `speech-pathologist-marrickville-nsw` | `/speech-pathologist-marrickville-nsw` | `/speech-pathologist-marrickville-nsw` |
| 35 | `speech-pathologist-rockdale-nsw` | `/speech-pathologist-rockdale-nsw` | `/speech-pathologist-rockdale-nsw` |
| 36 | `speech-pathologist-st-george-nsw` | `/speech-pathologist-st-george-nsw` | `/speech-pathologist-st-george-nsw` |
| 37 | `speech-pathologist-strathfield-nsw` | `/speech-pathologist-strathfield-nsw` | `/speech-pathologist-strathfield-nsw` |

### Coordinator Pages

| # | Next.js Route | Current URL | Suggested WP Slug |
|---|--------------|-------------|-------------------|
| 38 | `for-support-coordinators` | `/for-support-coordinators` | `/for-support-coordinators` |
| 39 | `ndis-service-guide-support-coordinators` | `/ndis-service-guide-support-coordinators` | `/ndis-service-guide-support-coordinators` |
| 40 | `refer-a-client` | `/refer-a-client` | `/refer-a-client` |

### Chinese Page

| # | Next.js Route | Current URL | Suggested WP Slug |
|---|--------------|-------------|-------------------|
| 41 | `(chinese)/zh/page.tsx` | `/zh` | `/zh` (WPML/Polylang translation of front page) |

---

## 3. Content Inventory — Page-by-Page

### 3.1 Homepage (`/`)

| Field | Value |
|-------|-------|
| **Title tag** | `Sydney Speech Pathologist \| Shine and Speak` |
| **Meta description** | Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin. NDIS, Medicare & private. Serving Inner West Sydney. |
| **H1** | Speech Pathologist in Sydney NSW |
| **Canonical** | `https://shineandspeak.com.au/` |
| **OG image** | `/shine-and-speak-logo-horizontal-transparent.png` (placeholder — needs proper 1200×630 card) |
| **Structured data** | MedicalBusiness, FAQPage (6 questions), BreadcrumbList |
| **hreflang** | `en` → `/`, `zh` → `/zh` |
| **Forms** | Lead capture form (name, phone, email, client age, help-with dropdown) |
| **Content status** | ✅ Fully built — 12 sections |
| **Key sections** | Hero, Why Choose Us (4 cards), Testimonials placeholder, Lead Form, Paediatric Services (6 cards), Adult Services (4 cards), How It Works (3 steps), Mobile Advantage (4 cards), Bilingual Callout, Meet the Therapist, Support Coordinators, FAQ (6 Q&As), Service Area links, Final CTA |
| **Interactive elements** | Mobile sticky CTA bar, FAQ section (visible, not accordion) |
| **Images used** | `shine_with_schoolkids.png` (hero), `shine-headshot.webp` (therapist) |

### 3.2 Chinese Homepage (`/zh`)

| Field | Value |
|-------|-------|
| **Title tag** | `悉尼中文言语治疗师 \| Shine and Speak — 上门与远程治疗` |
| **Meta description** | 提供悉尼上门、学校及远程的个性化言语治疗服务。中英双语。支持NDIS、Medicare和私人付费。服务悉尼内西区。欢迎预约免费咨询。 |
| **H1** | 悉尼言语治疗师 |
| **Canonical** | `https://shineandspeak.com.au/zh` |
| **OG locale** | `zh_CN` |
| **hreflang** | `en` → `/`, `zh` → `/zh` |
| **Forms** | Lead capture form (Chinese labels, same fields as English) |
| **Content status** | ✅ Fully built — mirrors EN homepage structure in Chinese |
| **Images used** | `shine_with_schoolkids.png` (hero), `shine-headshot.webp` (therapist) |

### 3.3 About (`/about`)

| Field | Value |
|-------|-------|
| **Title tag** | `About Shine Yin Teoh — Speech Pathologist Sydney` |
| **Meta description** | Meet Shine Yin Teoh, Certified Practising Speech Pathologist. Mobile & telehealth in Inner West Sydney. Bilingual English & Mandarin. NDIS & Medicare registered. |
| **H1** | Meet Shine Yin Teoh |
| **Canonical** | `https://shineandspeak.com.au/about` |
| **Structured data** | Person schema, BreadcrumbList |
| **Forms** | None |
| **Content status** | ✅ Fully built |
| **Key sections** | About Me, My Approach, Qualifications, Bilingual Practice, What I Work With (linked list), Video placeholder, Personal background placeholder, Social links, CTA band |
| **Placeholders** | University name, personal background text, video embed |
| **Images used** | `shine-headshot.webp` (mobile + desktop sticky) |

### 3.4 Contact (`/contact`)

| Field | Value |
|-------|-------|
| **Title tag** | `Book a Free Discovery Call \| Shine and Speak` |
| **Meta description** | Book a free discovery call with Shine Yin Teoh, speech pathologist in Sydney. No obligation — chat about your child's needs and we'll work out the best next step. |
| **H1** | Book a Free Discovery Call |
| **Canonical** | `https://shineandspeak.com.au/contact` |
| **Structured data** | BreadcrumbList |
| **Forms** | ✅ Contact/enquiry form (name, phone, email, child's age, help-with dropdown) |
| **Content status** | ✅ Fully built |

### 3.5 Refer a Client (`/refer-a-client`)

| Field | Value |
|-------|-------|
| **Title tag** | `Refer a Client \| NDIS Support Coordinators \| Shine and Speak` |
| **Meta description** | Refer a client for speech therapy in Sydney. 24-hour response, all NDIS management types, detailed reporting. Mobile & telehealth. Inner West Sydney. |
| **H1** | Refer a Client |
| **Canonical** | `https://shineandspeak.com.au/refer-a-client` |
| **Structured data** | BreadcrumbList |
| **Forms** | ✅ Referral form (referrer name, organisation, email, phone, participant name, NDIS number, plan management type with conditional plan manager field, delivery checkboxes, preferred language) |
| **Content status** | ✅ Fully built |
| **Special component** | `ReferralForm.tsx` — client component with useState for conditional fields |

### 3.6 Thank You (`/thank-you`)

| Field | Value |
|-------|-------|
| **Title tag** | `Thank You — We'll Be in Touch \| Shine and Speak` |
| **Meta description** | Thank you for contacting Shine and Speak. We'll be in touch within 24 hours to arrange your free discovery call. Here's what to expect next. |
| **H1** | Thank you — we'll be in touch within 24 hours |
| **Canonical** | `https://shineandspeak.com.au/thank-you` |
| **Structured data** | BreadcrumbList |
| **Content status** | ✅ Fully built |
| **Note** | Should be noindex in WP (confirmation page) |

### 3.7 Fees (`/fees`)

| Field | Value |
|-------|-------|
| **Title tag** | `Fees & Pricing \| Shine and Speak Sydney` |
| **Meta description** | Speech therapy fees and pricing in Sydney. NDIS, Medicare, private pay, HCP, and DVA accepted. Mobile & telehealth. Contact Shine and Speak for current rates. |
| **H1** | Fees & Pricing |
| **Canonical** | `https://shineandspeak.com.au/fees` |
| **Structured data** | WebPage, BreadcrumbList |
| **Content status** | ⚠️ STUB — "Content coming soon" |

### 3.8 How It Works (`/how-it-works`)

| Field | Value |
|-------|-------|
| **Title tag** | `How Speech Therapy Works \| Shine and Speak Sydney` |
| **Meta description** | How speech therapy works with Shine and Speak in Sydney. Book a free discovery call, assessment, then personalised therapy plan. Mobile & telehealth available. |
| **H1** | How Speech Therapy Works |
| **Canonical** | `https://shineandspeak.com.au/how-it-works` |
| **Structured data** | WebPage, BreadcrumbList |
| **Content status** | ⚠️ STUB — "Content coming soon" |
| **Bug** | Breadcrumb has duplicate "Home" items |

### 3.9–3.41 All Remaining Pages (32 stubs)

All remaining pages follow the same template pattern:

- **Title tag:** ✅ Unique, SEO-optimized per page
- **Meta description:** ✅ Unique per page
- **H1:** ✅ Unique per page
- **Canonical:** ✅ Set correctly
- **Structured data:** WebPage schema + BreadcrumbList
- **OG tags:** ✅ Title, description, URL set
- **Content status:** ⚠️ STUB — "Content coming soon" placeholder body
- **CTA band:** ✅ Each stub has a bottom CTA "Book a Free Discovery Call"

**Full list of stub pages with their H1 and title:**

| Route | H1 | Title Tag |
|-------|-----|-----------|
| `/for-support-coordinators` | For NDIS Support Coordinators | For NDIS Support Coordinators \| Shine and Speak |
| `/ndis-service-guide-support-coordinators` | NDIS Service Guide for Support Coordinators | NDIS Service Guide for Support Coordinators \| Shine and Speak |
| `/paediatric-speech-therapy-sydney-nsw` | Paediatric Speech Therapy Sydney NSW | Paediatric Speech Therapy Sydney NSW \| Shine and Speak |
| `/adult-speech-therapy-sydney-nsw` | Adult Speech Therapy Sydney NSW | Adult Speech Therapy Sydney NSW \| Shine and Speak |
| `/mobile-speech-therapy-sydney-nsw` | Mobile Speech Therapy Sydney NSW | Mobile Speech Therapy Sydney NSW \| Shine and Speak |
| `/telehealth-speech-therapy-sydney-nsw` | Telehealth Speech Therapy Sydney NSW | Telehealth Speech Therapy Sydney NSW \| Shine and Speak |
| `/school-based-speech-therapy-sydney-nsw` | School-Based Speech Therapy Sydney NSW | School-Based Speech Therapy Sydney NSW \| Shine and Speak |
| `/speech-therapy-assessment-sydney-nsw` | Speech Therapy Assessment Sydney NSW | Speech Therapy Assessment Sydney NSW \| Shine and Speak |
| `/speech-therapy-reports-sydney-nsw` | Speech Therapy Reports Sydney NSW | Speech Therapy Reports Sydney NSW \| Shine and Speak |
| `/parent-coaching-speech-therapy-sydney-nsw` | Parent and Support Worker Coaching Sydney NSW | Parent Coaching Speech Therapy Sydney \| Shine and Speak |
| `/speech-therapy-autism-sydney-nsw` | Speech Therapy for Autism in Sydney NSW | Speech Therapy for Autism Sydney NSW \| Shine and Speak |
| `/speech-therapy-adhd-sydney-nsw` | Speech Therapy for ADHD in Sydney NSW | Speech Therapy for ADHD Sydney NSW \| Shine and Speak |
| `/speech-therapy-language-delay-sydney-nsw` | Speech Therapy for Language Delay in Sydney NSW | Speech Therapy for Language Delay Sydney NSW \| Shine and Speak |
| `/speech-therapy-speech-sounds-sydney-nsw` | Speech Therapy for Speech Sounds in Sydney NSW | Speech Therapy for Speech Sounds Sydney NSW \| Shine and Speak |
| `/speech-therapy-stuttering-sydney-nsw` | Speech Therapy for Stuttering in Sydney NSW | Speech Therapy for Stuttering Sydney NSW \| Shine and Speak |
| `/speech-therapy-literacy-sydney-nsw` | Speech Therapy for Literacy in Sydney NSW | Speech Therapy for Literacy Sydney NSW \| Shine and Speak |
| `/speech-therapy-aphasia-sydney-nsw` | Speech Therapy for Aphasia in Sydney NSW | Speech Therapy for Aphasia Sydney NSW \| Shine and Speak |
| `/ndis-speech-therapy-sydney-nsw` | NDIS Speech Therapy Sydney NSW | NDIS Speech Therapy Sydney NSW \| Shine and Speak |
| `/medicare-speech-therapy-sydney-nsw` | Medicare Speech Therapy Sydney NSW | Medicare Speech Therapy Sydney NSW \| Shine and Speak |
| `/private-speech-therapy-sydney-nsw` | Private Speech Therapy Sydney NSW | Private Speech Therapy Sydney NSW \| Shine and Speak |
| `/home-care-package-speech-therapy-sydney-nsw` | Home Care Package Speech Therapy Sydney NSW | Home Care Package Speech Therapy Sydney \| Shine and Speak |
| `/dva-speech-therapy-sydney-nsw` | DVA Speech Therapy Sydney NSW | DVA Speech Therapy Sydney NSW \| Shine and Speak |
| `/speech-pathologist-arncliffe-nsw` | Speech Pathologist in Arncliffe NSW | Speech Pathologist Arncliffe NSW \| Shine and Speak |
| `/speech-pathologist-burwood-nsw` | Speech Pathologist in Burwood NSW | Speech Pathologist Burwood NSW \| Shine and Speak |
| `/speech-pathologist-campsie-nsw` | Speech Pathologist in Campsie NSW | Speech Pathologist Campsie NSW \| Shine and Speak |
| `/speech-pathologist-canterbury-bankstown-nsw` | Speech Pathologist in Canterbury-Bankstown NSW | Speech Pathologist Canterbury-Bankstown NSW \| Shine and Speak |
| `/speech-pathologist-hurstville-nsw` | Speech Pathologist in Hurstville NSW | Speech Pathologist Hurstville NSW \| Shine and Speak |
| `/speech-pathologist-inner-west-sydney-nsw` | Speech Pathologist in Inner West Sydney NSW | Speech Pathologist Inner West Sydney NSW \| Shine and Speak |
| `/speech-pathologist-kogarah-nsw` | Speech Pathologist in Kogarah NSW | Speech Pathologist Kogarah NSW \| Shine and Speak |
| `/speech-pathologist-marrickville-nsw` | Speech Pathologist in Marrickville NSW | Speech Pathologist Marrickville NSW \| Shine and Speak |
| `/speech-pathologist-rockdale-nsw` | Speech Pathologist in Rockdale NSW | Speech Pathologist Rockdale NSW \| Shine and Speak |
| `/speech-pathologist-st-george-nsw` | Speech Pathologist in St George NSW | Speech Pathologist St George NSW \| Shine and Speak |
| `/speech-pathologist-strathfield-nsw` | Speech Pathologist in Strathfield NSW | Speech Pathologist Strathfield NSW \| Shine and Speak |

---

## 4. Bilingual Content Mapping

### Current State

| English Page | Chinese Equivalent | Status |
|-------------|-------------------|--------|
| `/` (Homepage) | `/zh` | ✅ Full translation exists |
| All other 39 pages | — | ❌ No Chinese versions |

### hreflang Configuration (Current)

```html
<link rel="alternate" hreflang="en" href="https://shineandspeak.com.au/" />
<link rel="alternate" hreflang="zh" href="https://shineandspeak.com.au/zh" />
```

### WP Implementation

- **Layout:** English layout sets `<html lang="en">`, Chinese layout sets `<html lang="zh">`
- **OG locale:** English uses `en_AU`, Chinese uses `zh_CN`
- **Header:** Language switcher toggles between `/` and `/zh` based on current path
- **Recommendation:** Use WPML or Polylang. Start with homepage translation only. Add more Chinese pages over time.
- **URL structure:** Keep `/zh` prefix for Chinese pages (matches current architecture)

---

## 5. Forms Inventory

### Form 1: Homepage Lead Capture Form

| Property | Value |
|----------|-------|
| **Location** | Homepage (`/`) Section 4, and Chinese homepage (`/zh`) |
| **Action** | `action="/thank-you" method="GET"` |
| **Backend** | ❌ **None — placeholder only.** Form submits via GET to `/thank-you`. No data is captured or emailed. |
| **Fields** | Name (text, required), Phone (tel, required), Email (email, required), Client's Age (text, required), Help With (select dropdown, required — 13 options) |
| **Dropdown options** | Speech Sounds, Language, Stuttering, Literacy, Autism, ADHD, Developmental Delay, Intellectual Disability, Social Communication, AAC, Adult Speech, Not sure, Other |
| **WP replacement** | WPForms / Gravity Forms / Contact Form 7. Wire to email notification + optional CRM. |

### Form 2: Contact Page Enquiry Form

| Property | Value |
|----------|-------|
| **Location** | `/contact` |
| **Action** | `action="/thank-you" method="get"` |
| **Backend** | ❌ **None — placeholder only.** Same as homepage. |
| **Fields** | Name (text, required), Phone (tel, required), Email (email, required), Child's Age (text, required), Help With (select, required — same 13 options) |
| **WP replacement** | WPForms / Gravity Forms. Same form as homepage, or could potentially be replaced with Calendly/TidyCal embed (comments in source suggest this). |

### Form 3: Coordinator Referral Form

| Property | Value |
|----------|-------|
| **Location** | `/refer-a-client` |
| **Action** | Client-side `onSubmit` → `router.push("/thank-you")` |
| **Backend** | ❌ **None — placeholder only.** No data is captured. |
| **Fields** | Referrer Name (text, required), Organisation (text, required), Email (email, required), Phone (tel, required), Participant Name (text, required), NDIS Number (text, required), Plan Management Type (select, required — Self-managed / Plan-managed / NDIA-managed), Plan Manager Contact (conditional — shows when "Plan-managed" selected), Preferred Delivery (checkboxes — Mobile, Telehealth, School-based), Preferred Language (select — English, Mandarin) |
| **Special behavior** | Conditional field: "Plan manager name and contact" only appears when plan type is "Plan-managed" |
| **WP replacement** | WPForms / Gravity Forms with conditional logic. More complex form — needs conditional visibility. |

### Form Recommendations for WP

1. **Plugin choice:** Gravity Forms (best conditional logic) or WPForms Pro
2. **All 3 forms need email notifications** to `admin@shineandspeak.com.au`
3. **Referral form** needs conditional field support (plan manager contact)
4. **Thank-you page redirect** should be preserved (`/thank-you`)
5. Consider Google Analytics / GA4 conversion tracking on thank-you page
6. **Spam protection:** Add reCAPTCHA or honeypot (none exists currently)

---

## 6. SEO Elements to Preserve

### 6.1 Structured Data (JSON-LD)

#### Global — Organization Schema (in both EN and ZH layouts)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Shine and Speak",
  "url": "https://shineandspeak.com.au",
  "logo": "https://shineandspeak.com.au/shine-and-speak-logo-horizontal-transparent.png",
  "email": "admin@shineandspeak.com.au",
  "telephone": "+61421608819",
  "sameAs": [
    "https://www.linkedin.com/company/shine-and-speak",
    "https://www.facebook.com/shineandspeak",
    "https://www.instagram.com/shineandspeak"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+61421608819",
    "email": "admin@shineandspeak.com.au",
    "contactType": "customer service",
    "areaServed": "AU",
    "availableLanguage": ["English", "Chinese"]
  }
}
```

**WP:** Yoast SEO Pro or RankMath Pro handles Organization schema. Set in plugin settings.

#### Homepage — MedicalBusiness Schema

Includes: name, image, URL, telephone, email, medicalSpecialty ("Speech Pathology"), areaServed (11 suburbs), geo coordinates (lat: -33.9369, lng: 151.1539), paymentAccepted (NDIS, Medicare, Private pay, HCP, DVA), availableLanguage, priceRange.

**WP:** Yoast Local SEO or RankMath Local Business module.

#### Homepage — FAQPage Schema

6 questions/answers covering: when child needs therapy, session format, cost, telehealth, travel areas, getting started.

**WP:** Yoast SEO FAQ block or RankMath FAQ schema. Must be manually added to homepage.

#### About — Person Schema

Shine Yin Teoh, jobTitle, worksFor, knowsLanguage, sameAs.

**WP:** RankMath Person schema or manual JSON-LD via Yoast.

#### All Service/Location/Condition/Funding Pages — WebPage Schema

Generic `WebPage` or `Service` schema with provider Organization reference.

**WP:** Automatic via Yoast/RankMath. Minimal risk.

#### Every Page — BreadcrumbList Schema

Generated via `BreadcrumbSchema` component. Each page defines its own breadcrumb trail.

**WP:** Yoast SEO auto-generates BreadcrumbList. RankMath does too. Low risk.

### 6.2 Meta Tags (per page)

Every page has:
- `<title>` — unique, SEO-optimized, follows pattern `Page Title | Shine and Speak`
- `<meta name="description">` — unique, ~150 chars
- `<link rel="canonical">` — absolute URL
- `<meta property="og:title">` — matches or extends title
- `<meta property="og:description">` — matches meta description
- `<meta property="og:url">` — canonical URL
- `<meta property="og:site_name">` — "Shine and Speak"
- `<meta property="og:type">` — "website"
- `<meta property="og:locale">` — `en_AU` (EN) or `zh_CN` (ZH)
- `<meta property="og:image">` — logo placeholder (needs real OG card)

**WP:** Yoast/RankMath handles all of these. Migrate title + description for each page.

### 6.3 Canonical & hreflang

- Every page has `canonical` set to its absolute URL
- Homepage and `/zh` have bidirectional hreflang (`en` ↔ `zh`)
- No other pages have hreflang (no Chinese equivalents)

**WP:** WPML or Polylang auto-generates hreflang for translated pages.

### 6.4 Title Template

Layout default: `%s | Shine and Speak`
Fallback: `Speech Pathologist Sydney NSW | Shine and Speak`

**WP:** Configure in Yoast/RankMath global settings.

---

## 7. Assets to Migrate

### 7.1 Brand Assets (Canonical — Must Migrate)

| File | Use | Size |
|------|-----|------|
| `shared_images/brand/shine-and-speak-logo-horizontal-transparent.png` | Header logo, OG image fallback | — |
| `shared_images/brand/shine-and-speak-logo-stacked-transparent.png` | Footer logo | — |
| `shared_images/brand/shine-and-speak-logo-mark-transparent.png` | Icon placements | — |
| `shared_images/brand/shine-and-speak-favicon-mark-transparent.png` | Favicon source | — |
| `shared_images/brand/shine-and-speak-favicon.ico` | Browser favicon | — |

### 7.2 Therapist Photos (Canonical — Must Migrate)

| File | Use | Resolution |
|------|-----|------------|
| `shared_images/shine/shine-headshot-original-2048x2048.png` | Master source | 2048×2048 |
| `shared_images/shine/shine-headshot-1200x1200.webp` | Default headshot | 1200×1200 |
| `shared_images/shine/shine-headshot-800x800.webp` | Medium cards | 800×800 |
| `shared_images/shine/shine-headshot-400x400.webp` | Small UI | 400×400 |
| `shared_images/shine/shine-headshot-thumbnail-150x150.webp` | Thumbnail | 150×150 |
| `public/shine-headshot.webp` | Used in about page | — |
| `public/shine_with_schoolkids.png` | Hero image (homepage + /zh) | — |
| `public/shine_with_schoolkids1.png` | Alternate hero | — |

### 7.3 Communication Assets

| File | Use |
|------|-----|
| `public/wechat-qr.webp` | Footer WeChat QR code |
| `shared_images/communication/wechat-qr-placeholder.webp` | Placeholder version |

### 7.4 Placeholder Assets (Replace Before Migration)

| File | Status | Notes |
|------|--------|-------|
| `shared_images/placeholders/hero-stock-placeholder-unsplash.jpg` | Temporary | Unsplash stock photo |
| `shared_images/placeholders/coordinator-stock-placeholder-unsplash.jpg` | Temporary | Unsplash stock photo |
| `shared_images/badges/hanen-placeholder.svg` | Temporary | Text-only placeholder |
| `shared_images/badges/sounds-write-placeholder.svg` | Temporary | Text-only placeholder |
| `shared_images/badges/lidcombe-placeholder.svg` | Temporary | Text-only placeholder |
| `shared_images/og/og-card-placeholder.png` | Temporary | Needs proper 1200×630 design |

### 7.5 Fonts

| Font | Source | Usage |
|------|--------|-------|
| Inter | Google Fonts | Body text (`--font-sans`) |
| Playfair Display | Google Fonts | Headings (`--font-serif`) |

**WP:** Enqueue via theme or use a plugin. Both are free Google Fonts.

### 7.6 Favicon

Multiple copies exist. Use `shared_images/brand/shine-and-speak-favicon.ico` as canonical source.

---

## 8. Recommended WP Plugins

### Essential

| Plugin | Purpose | Notes |
|--------|---------|-------|
| **Yoast SEO** (or RankMath) | SEO, meta tags, OG tags, sitemap, schema | RankMath has better free-tier schema support |
| **WPML** (or Polylang) | Bilingual EN/ZH support | WPML is more robust; Polylang is free. Only 1 Chinese page currently. |
| **Gravity Forms** (or WPForms Pro) | Contact form, referral form | Needs conditional logic for referral form |
| **Redirection** (or Yoast redirects) | 301 redirect management | Critical for preserving SEO |
| **WP Super Cache** (or LiteSpeed Cache) | Performance | Match Next.js static export performance |

### Recommended

| Plugin | Purpose | Notes |
|--------|---------|-------|
| **Yoast Local SEO** (or RankMath Local) | MedicalBusiness schema, local SEO | Homepage structured data |
| **Schema Pro** | Advanced schema beyond what Yoast/RankMath provides | FAQPage, Person schema |
| **MonsterInsights** (or GA4 direct) | Google Analytics | Track form conversions on `/thank-you` |
| **UpdraftPlus** | Backups | Standard WP practice |
| **Wordfence** | Security | Standard WP practice |
| **WP Rocket** | Advanced caching | Premium, better than free alternatives |
| **EWWW Image Optimizer** | Image optimization | Current site uses WebP already |
| **Custom CSS plugin** (or theme) | Brand colors, Tailwind-like utilities | See Design System section |

### Optional / Future

| Plugin | Purpose |
|--------|---------|
| **Calendly / TidyCal embed** | Replace contact form with booking widget (noted in source comments) |
| **Google Reviews widget** | Replace testimonials placeholder |
| **Elementor / Kadence Blocks** | Page builder for recreating complex homepage layout |

---

## 9. 301 Redirect Map

Since all URL slugs are being preserved 1:1, **no redirects should be needed** for the core migration — provided WordPress is configured with the same permalink structure.

### WordPress Permalink Setting

Set to: **Post name** (`/%postname%/`) — this matches the current flat URL structure.

### Potential Redirect Scenarios

| Scenario | From | To | Notes |
|----------|------|----|-------|
| Trailing slash normalization | `/about` | `/about/` (or vice versa) | WP adds trailing slashes by default. Either configure WP to match or set up redirects. Test carefully. |
| If page slugs change | `/fees` | `/fees-and-pricing` | Only if you rename pages in WP |
| Next.js route groups | `/(english)/about` | `/about` | Route groups are not exposed in URLs — no redirect needed |

### Critical: Test These URLs After Migration

All 41 URLs listed in Section 2 must resolve correctly. Use a crawler (Screaming Frog, Sitebulb) to verify.

---

## 10. Design System & Theme Requirements

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `navy-blue` | `#112A46` | Primary brand, headings, header |
| `trust-teal` | `#2A7B8E` | Accent, links, checkmarks |
| `golden-amber` | `#946B00` | CTAs, buttons, highlights |
| `soft-blue` | `#F0F4F8` | Section backgrounds |
| `sage-green` | `#E8EDE9` | Badges, subtle accents |
| `warm-white` | `#FCFCFA` | Body background |
| `charcoal` | `#2C3338` | Body text |
| `stone` | `#5C666E` | Secondary text |
| `hero-overlay` | `#1A3F5C` | Hero gradient overlay |

### Typography

- **Body:** Inter (Google Fonts), system-ui fallback
- **Headings:** Playfair Display (Google Fonts), Georgia fallback
- **Antialiasing:** `-webkit-font-smoothing: antialiased`

### Component Patterns

- **Buttons:** Pill-shaped (border-radius: 9999px), two styles: `.btn-primary` (amber bg, white text) and `.btn-secondary` (navy border, navy text)
- **Cards:** Large border-radius (1.5rem), subtle shadows, hover lift effect
- **Sections:** Alternating backgrounds (white / soft-blue / navy-blue / warm-white)
- **Glass nav:** Semi-transparent header with backdrop-blur

### WP Theme Recommendation

Use a flexible theme like **Kadence** or **Astra** with a page builder (Kadence Blocks or Elementor). These can replicate the design system. Custom CSS will be needed for brand colors and button styles.

---

## 11. Interactive Components

### Components to Recreate in WP

| Component | Current Behavior | WP Approach |
|-----------|-----------------|-------------|
| **Sticky Header** | Glass morphism effect, sticky on scroll | Theme header + custom CSS |
| **Desktop Nav Dropdowns** | Hover-triggered, 3 mega-menu groups (Services, Funding, Areas) | WP native menus + theme support or Max Mega Menu plugin |
| **Mobile Nav Drawer** | Full-width slide-down, accordion sections | Theme mobile menu |
| **Floating WhatsApp Button** | Fixed bottom-right, all screens | Simple HTML/CSS in footer or WP widget |
| **Floating Phone Button** | Fixed bottom-left, mobile only | Simple HTML/CSS, `md:hidden` equivalent |
| **Mobile Sticky CTA Bar** | Fixed bottom, mobile only, "Call Now" | Custom HTML in footer |
| **Scroll to Top** | Auto-scrolls to top on route change | Not needed in WP (natural page loads) |
| **Language Switcher** | Toggle EN/ZH in header | WPML/Polylang language switcher |
| **Conditional Form Field** | Referral form shows plan manager field when "Plan-managed" selected | Gravity Forms conditional logic |

---

## 12. Risk Areas & Gotchas

### HIGH RISK

1. **32 stub pages have no content.** These are currently indexed with "Content coming soon" text. Before migration, decide: (a) write the content in WP, (b) noindex until content is ready, or (c) remove and redirect to parent pages. Leaving thin-content pages indexed hurts SEO.

2. **Forms are non-functional.** All 3 forms are frontend-only placeholders — they submit via GET redirect or `router.push()` with no backend processing. No data is being captured. The WP migration **must** wire forms to email notifications and/or a CRM.

3. **Homepage is the most complex page.** It has 12 sections, 2 structured data schemas, FAQ content, service cards, therapist bio, support coordinator section, and a lead form. Recreating this in WP requires a page builder or custom template. Budget significant time for this page.

4. **Trailing slash behavior.** Next.js serves `/about` without trailing slash. WordPress defaults to `/about/`. Inconsistency causes duplicate content or broken redirects. Configure WP to match or set up canonical redirects.

### MEDIUM RISK

5. **OG image is a placeholder.** The current OG image is the horizontal logo, not a proper 1200×630 social card. Create a real OG card before migration.

6. **Chinese layout is a separate route group**, not a WPML/Polylang translation. The `/zh` page has its own layout file with `lang="zh"` and `zh_CN` locale. WPML/Polylang will handle this differently — the translation will be linked to the English homepage, not a separate URL structure. Verify that `/zh` still resolves correctly.

7. **Multiple placeholder values in source code.** Search for `PLACEHOLDER:` and `REPLACE:` comments:
   - University name (About page, Homepage)
   - NDIS provider number (Footer, About page)
   - ABN (Footer)
   - Calendly/TidyCal booking URL (Header, Homepage, multiple CTAs)
   - Video embed (About page)
   - Personal background text (About page)
   - Google Reviews embed (Homepage)

8. **Performance regression.** The current Next.js site generates static HTML with React hydration. WP with many plugins can be slower. Use caching (WP Rocket or LiteSpeed Cache) and a CDN.

### LOW RISK

9. **Image optimization.** Current site uses `next/image` with `unoptimized: true`. WP with EWWW or ShortPixel will handle optimization. Already have WebP versions of key assets.

10. **Social media links.** Facebook URL in footer (`/people/Shine-and-Speak-Speech-Pathology/61575483066471/`) differs from schema.org sameAs (`/shineandspeak`). Normalize before migration.

11. **Lucide React icons.** The homepage and Chinese page use Lucide React icons extensively. These need to be replaced with SVG icons, Font Awesome, or similar in WP.

12. **Broken links in service cards.** The homepage links to `/speech-therapy-developmental-delay-sydney-nsw`, `/speech-therapy-cognitive-communication-sydney-nsw`, and `/speech-therapy-social-communication-sydney-nsw` — but these routes don't exist in the codebase. These are dead links that need to be created or removed.

---

## 13. Migration Checklist

### Pre-Migration

- [ ] Write content for 32 stub pages (or decide which to noindex/remove)
- [ ] Fill in all PLACEHOLDER values (ABN, NDIS number, university, etc.)
- [ ] Create proper 1200×630 OG social card image
- [ ] Get Calendly/TidyCal booking URL
- [ ] Record therapist intro video (About page placeholder)
- [ ] Decide on 3 broken service links (developmental delay, cognitive-communication, social communication)
- [ ] Normalize social media URLs

### WordPress Setup

- [ ] Install WordPress on hosting (recommend managed WP hosting)
- [ ] Set permalinks to `/%postname%/`
- [ ] Install and configure theme (Kadence or Astra recommended)
- [ ] Set up brand colors in theme customizer
- [ ] Install and configure Yoast SEO or RankMath
- [ ] Install WPML or Polylang for bilingual support
- [ ] Install Gravity Forms or WPForms Pro
- [ ] Install Redirection plugin

### Page Creation (41 pages)

- [ ] Create homepage (static front page) — most complex, budget 2-4 hours
- [ ] Create Chinese homepage translation via WPML/Polylang
- [ ] Create About page
- [ ] Create Contact page with enquiry form
- [ ] Create Refer a Client page with referral form (conditional fields)
- [ ] Create Thank You page (set noindex)
- [ ] Create Fees page
- [ ] Create How It Works page
- [ ] Create 8 service pages
- [ ] Create 7 condition pages
- [ ] Create 5 funding pages
- [ ] Create 11 location/suburb pages
- [ ] Create 3 coordinator pages

### SEO Configuration (per page)

- [ ] Set title tag (copy from Section 3)
- [ ] Set meta description (copy from Section 3)
- [ ] Set canonical URL
- [ ] Set OG title, description, image
- [ ] Add structured data (Organization, MedicalBusiness, FAQPage, Person, BreadcrumbList)
- [ ] Set hreflang for EN/ZH homepage pair

### Forms Setup

- [ ] Create parent enquiry form (homepage + contact page)
- [ ] Create coordinator referral form (with conditional plan manager field)
- [ ] Set redirect to `/thank-you` on submission
- [ ] Configure email notifications to `admin@shineandspeak.com.au`
- [ ] Add spam protection (reCAPTCHA or honeypot)
- [ ] Test all form submissions end-to-end

### Navigation & Design

- [ ] Create WP menus matching header structure (Services, Funding & Fees, Areas dropdowns)
- [ ] Add language switcher
- [ ] Add floating WhatsApp button
- [ ] Add floating phone button (mobile)
- [ ] Add mobile sticky CTA bar
- [ ] Upload all brand assets to WP Media Library
- [ ] Set favicon
- [ ] Configure Google Fonts (Inter + Playfair Display)

### Post-Migration QA

- [ ] Crawl all 41 URLs with Screaming Frog — verify 200 status
- [ ] Verify no 404s for old URLs
- [ ] Test trailing slash behavior
- [ ] Validate structured data with Google Rich Results Test
- [ ] Test OG tags with Facebook Sharing Debugger
- [ ] Test all 3 forms (submit, email notification, redirect)
- [ ] Test mobile responsiveness
- [ ] Test language switcher (EN ↔ ZH)
- [ ] Run PageSpeed Insights — ensure Core Web Vitals pass
- [ ] Submit updated sitemap to Google Search Console
- [ ] Monitor Search Console for crawl errors for 30 days

---

*End of migration document.*
