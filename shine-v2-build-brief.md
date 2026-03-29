# SHINE — WEBSITE CONCEPT BUILD BRIEF v2

## SEO-First Build Artifact for Gemini 3.1 Pro (Cursor)

## Mobile Speech Pathology — Inner West Sydney

---

> **CRITICAL: Read this entire brief before writing any code.**
>
> You are building a concept version of a speech pathology website in Next.js. You have been given competitor website screenshots alongside this brief.
>
> **Your two jobs, in priority order:**
>
> 1. **SEO and conversion architecture** — follow every rule in this brief. These are non-negotiable. If a design choice from the screenshots conflicts with an SEO rule below, the SEO rule wins.
> 2. **Visual/aesthetic reference** — match the competitor screenshots for layout patterns, spacing, colour application, typography feel, and overall design language. The screenshots are the "skin." This brief is the "skeleton."
>
> **This is a YMYL (Your Money or Your Life) site.** Speech pathology is health content. Google applies its highest quality standards to YMYL sites. Every E-E-A-T rule in this brief exists because Google will penalise health websites that don't demonstrate real expertise, real authorship, and real credentials. Do not skip any E-E-A-T requirement.

---

# 0. MANDATORY SEO CONSTRAINTS

These rules override any design decision. Read them first. Refer back to them constantly.

## 0.1 Content visibility — NO hidden content

**Google's crawler can follow links but cannot click or hover.** Content behind accordions, tabs, "read more" toggles, or any interaction-dependent UI is devalued by Google. Controlled experiments show visible content consistently ranks higher than identical hidden content.

**Rules:**

- All FAQ content must be fully visible on page load. No accordions. No collapsed sections. Display every question and answer as visible H3 + paragraph pairs.
- No "read more" truncation on any text block.
- No tab interfaces that hide content. If you need to organise content into categories, use visible sections with anchor links — not tabs.
- Dropdown navigation menus are fine (they're navigation, not content).

## 0.2 One H1 per page — no exceptions

- Every page gets exactly one `<h1>` tag.
- The H1 must contain the target keyword naturally.
- Homepage H1 is outcome-focused and parent-facing, NOT the business name.
- Never put the business name in an H1 tag.

## 0.3 Heading hierarchy

- H1 → H2 → H3 → H4. Never skip levels.
- H2s are section headings.
- H3s are subsection headings within an H2 section.
- Never use heading tags for styling. Use CSS for visual weight.

## 0.4 Internal linking rules (6 golden rules)

Every page must link to related pages. Follow these rules exactly:

1. **Never repeat anchor text.** Every internal link on the entire site must use unique anchor text.
2. **Incorporate keywords naturally.** Include relevant keywords in anchor text, but they must read naturally in the sentence.
3. **Describe the destination page.** Anchor text should preview what the user will find when they click — describe where they're going, not where they are.
4. **Keep it descriptive yet concise.** 3-8 words is ideal. Not too short ("click here" = bad), not too long (full sentences = bad).
5. **Place links in body content only.** Internal links belong in paragraph text. Not in headings, not in footers (navigation links excepted), not in sidebars.
6. **Don't use the brand name as anchor text.** Save brand-name anchors for external links.

**Minimum internal links per page:** 3 contextual links in body content to other pages on the site. Condition pages should link to 2-3 related condition pages, the relevant funding page, and the "How It Works" or booking page. Suburb pages should link to 2-3 nearby suburb pages and the main services page.

## 0.5 Schema markup architecture

This is a Service Area Business (SAB) with no physical clinic. The GBP (Google Business Profile) will point to the homepage.

**Schema placement rules:**

| Schema Type                                    | Where It Goes                                | Placement Rule                                                                                                                                                                                    |
| ---------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Organization**                               | Every page (in `<head>`)                     | Same markup on every URL. Includes business name, logo URL, social profiles, contact info.                                                                                                        |
| **MedicalBusiness** (subtype of LocalBusiness) | Homepage ONLY                                | This is the GBP landing page. Full NAP, areaServed, services overview, opening hours, geo coordinates, payment methods. **Do NOT put LocalBusiness or MedicalBusiness schema on any other page.** |
| **Service**                                    | Each condition page + each service-type page | serviceType, provider (reference to MedicalBusiness), areaServed, description.                                                                                                                    |
| **FAQPage**                                    | Any page with FAQ content                    | Wraps all Q&A pairs on that page.                                                                                                                                                                 |
| **BreadcrumbList**                             | Every page                                   | Reflects the URL hierarchy.                                                                                                                                                                       |

**SAB-specific rules:**

- Do NOT include a `streetAddress` in schema (SABs hide their address on GBP).
- Use `areaServed` to list the service areas instead.
- Include `geo` coordinates for the service area centre point (Arncliffe: -33.9369, 151.1539).

**NAP consistency:** The business name, phone number, and email must be identical everywhere they appear — in schema, in page content, in the header, in the footer, in forms. Exact match. No variations.

## 0.6 URL structure

Every service page URL includes the target keyword + city + state:

```
/speech-therapy-[condition]-sydney-nsw        ← condition pages
/speech-pathologist-[suburb]-nsw              ← suburb pages
/[service-type]-speech-therapy-sydney-nsw     ← service/funding pages
```

**Homepage:** `/` (root)
**Examples:**

- `/speech-therapy-autism-sydney-nsw`
- `/speech-pathologist-burwood-nsw`
- `/ndis-speech-therapy-sydney-nsw`
- `/mobile-speech-therapy-sydney-nsw`

**Rules:**

- Lowercase, hyphen-separated, no trailing slashes.
- No stop words unless they read unnaturally without them.
- Every URL must be an actual route, not a hash/anchor link.

## 0.7 Meta tags

**Title format:** `[Service/Condition] Speech Therapy [City] [State] | [Business Name]`

- Must be unique per page.
- Under 60 characters.
- Include the primary keyword.

**Meta description:**

- Unique per page.
- 150-160 characters including spaces.
- Include location + bilingual mention where relevant.
- Include a call-to-action phrase.
- No exclamation marks or emojis.

**Homepage:**

- **Title:** `Speech Pathologist Sydney NSW | [Business Name] — Mobile & Telehealth`
- **Description:** `Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin. NDIS, Medicare & private. Serving Inner West Sydney.`

## 0.8 Technical SEO requirements

Every page must have:

- Self-referencing canonical tag: `<link rel="canonical" href="[full URL]" />`
- Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- `<html lang="en">` (or `lang="zh"` for Chinese pages)
- `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Proper breadcrumb markup (BreadcrumbList schema)

**Images:**

- All images must have descriptive `alt` text including the target keyword where natural.
- Lazy load images below the fold.
- Use WebP format where possible.
- Include `width` and `height` attributes to prevent layout shift.

**Performance targets:**

- Lighthouse mobile score 80+.
- No render-blocking resources where avoidable.
- No excessive third-party scripts.

**Scroll behaviour:**

- When navigating between pages, the browser must scroll to the top of the new page. Implement a ScrollToTop component that resets scroll position on every route change.

## 0.9 Goal completion hierarchy

**This site exists for ONE purpose: get the visitor to book a discovery call or submit a referral form.**

The section order on every page follows the Goal Completion Hierarchy — proof and credibility come FIRST, educational content comes LAST. This is the priority:

1. **Can you solve my problem?** (Hero — what you do, where, for whom)
2. **Why should I pick YOU?** (Trust signals, credentials, differentiators)
3. **Do other people trust you?** (Social proof, reviews, testimonials)
4. **Do you handle what I specifically need?** (Services, conditions)
5. **What concerns should I have answered?** (FAQ, process, pricing)

Every section must answer one of these questions. If a section doesn't serve conversion, it doesn't belong above the fold.

## 0.10 E-E-A-T requirements (YMYL-critical)

Because this is a health website, Google requires demonstrable E-E-A-T. The following are non-negotiable:

**Author/therapist bio must include:**

- Real full name (use `[Shine]` placeholder)
- Real professional photo (use placeholder with `<!-- REPLACE: Professional headshot of therapist -->`). Must NOT be a stock photo. Multiple photos from different contexts are ideal.
- University qualifications with institution name: `<!-- PLACEHOLDER: e.g. "Bachelor of Speech Pathology, University of Sydney" -->`
- Professional registration: Certified Practising Speech Pathologist (CPSP), Speech Pathology Australia
- NDIS Provider registration number: `<!-- PLACEHOLDER: NDIS provider number -->`
- Medicare provider status
- Training certifications: `<!-- PLACEHOLDER: e.g. Hanen, Sounds Write, Lidcombe Program, PECS -->`
- ABN: `<!-- PLACEHOLDER: ABN -->`
- Languages: English and Mandarin (普通话)

**The About page must have:**

- Detailed genuine author profile (not AI-generated persona)
- Space for video introduction: `<!-- PLACEHOLDER: Embed therapist intro video -->`
- Multiple photographs (not just one headshot)
- Social media links to active profiles (LinkedIn at minimum)
- Verifiable credentials
- Personal story section: `<!-- PLACEHOLDER: Personal background and motivation -->`

**Every content page must include:**

- Author attribution linking to the About page (e.g., "Written by [Shine], CPSP")
- Last updated date

**Why this matters:** Google's algorithms detect and devalue sites lacking authentic human authorship. YMYL sites with fake or absent author credentials will not rank. The About page is often one of the most visited pages on health websites.

---

# 1. BUSINESS CONTEXT

## Who this is for

A solo speech pathologist launching a private practice in Sydney. She has no clinic — she travels to clients (homes, schools, kindergartens, daycares) and offers telehealth across Australia. She speaks English and Mandarin. This is a Service Area Business (SAB).

## Positioning (in the client's own words)

"I want people to think of a speech pathologist who is approachable, clinically strong, and genuinely invested in meaningful outcomes. When people come across my business, I want them to feel confident that they will receive high-quality, personalised, and practical support that makes a real difference in everyday life — not just therapy for the sake of therapy."

## Brand voice

Warm, approachable, confident, personal. Not clinical jargon. Not corporate. She's a person who shows up at your home and helps your kid — the site should feel like that.

## Two audiences — dual conversion architecture

This site serves two distinct audiences with separate conversion paths. Both paths must be visible at all times.

| Audience                                                     | Primary CTA                  | CTA Button Style                 | Form                   |
| ------------------------------------------------------------ | ---------------------------- | -------------------------------- | ---------------------- |
| **Parents** looking for a speech pathologist for their child | "Book a Free Discovery Call" | Primary (filled, high-contrast)  | 5-field parent enquiry |
| **NDIS Support Coordinators** looking to refer a client      | "Refer a Client"             | Secondary (outline or text link) | 11-field referral form |

**Both CTAs must be visible in the sticky header at all viewport sizes.** This is the single most important structural decision on the site.

## Services offered

**Delivery modes:** Mobile (home, school, kindergarten, daycare), telehealth (Australia-wide), school-based sessions

**Paediatric (main focus — 10 conditions):**
Autism/ASD, ADHD, developmental delay, intellectual disability, social communication difficulties, speech delay and speech sound disorders, language disorders (receptive and expressive), fluency/stuttering, literacy difficulties, AAC and multimodal communication

**Adult:**
Aphasia and apraxia of speech, fluency disorders, cognitive-communication difficulties, speech and language disorders, social communication challenges, rehabilitation following neurological events or injury

**Other services:**
One-off initial assessments, ongoing therapy, kindergarten screening, report writing and recommendations, parent and support worker coaching, liaising with families, educators, and multidisciplinary teams

**Funding accepted:** NDIS (all management types — self, plan, NDIA), Medicare, private pay, Home Care Packages, DVA

**Languages:** English and Mandarin (普通话)

**Service area:** Inner West Sydney, 30-minute radius from Arncliffe (Burwood, Hurstville, Strathfield, Canterbury-Bankstown, Campsie, Rockdale, Kogarah, Marrickville). Greater Sydney for one-off assessments. Telehealth Australia-wide.

## Six differentiators

1. **Client-centred and strengths-based** — therapy tailored to each individual's goals, interests, and real-life needs
2. **Mobile therapy in natural environments** — research shows children learn communication skills best where they naturally communicate. No clinic means better outcomes, not a compromise.
3. **Clear communication and collaboration** — wrap-around care with families, coordinators, and other professionals
4. **Functional and goal-oriented therapy** — skills that improve independence, social participation, and confidence
5. **Strong clinical reasoning and detailed reporting** — clear insights and recommendations for long-term progress
6. **Bilingual (English and Mandarin)** — more accurate assessment of true language abilities for CALD families

## Trust signals (display as logo/badge bar)

- Speech Pathology Australia — Certified Practising Speech Pathologist (CPSP)
- NDIS Registered Provider / "I ❤ NDIS"
- Medicare Registered Provider
- Training certifications: `<!-- PLACEHOLDER: e.g. Hanen, Sounds Write, Lidcombe Program -->`

---

# 2. SITE ARCHITECTURE — CORE 30 ALIGNMENT

This site follows the Core 30 framework: a strategic content structure that creates perfect alignment between the website and the Google Business Profile. The Core 30 creates comprehensive topical coverage that tells Google exactly what services this business offers and where.

## Navigation structure

**Sticky header (always visible):**

```
[Logo]          📞 [Phone]   [Book a Free Call]   Refer a Client   EN/中文
───────────────────────────────────────────────────────────────────────────
Services ▾    How It Works    Funding & Fees ▾    About    Areas ▾    Contact
```

**Mobile:** Hamburger menu for navigation. Floating click-to-call button (bottom-right, always visible). Both CTAs must remain accessible.

**Services dropdown** links to SEO URLs:

- Paediatric Speech Therapy → `/paediatric-speech-therapy-sydney-nsw`
- Adult Speech Therapy → `/adult-speech-therapy-sydney-nsw`
- Mobile Speech Therapy → `/mobile-speech-therapy-sydney-nsw`
- Telehealth Speech Therapy → `/telehealth-speech-therapy-sydney-nsw`
- School-Based Therapy → `/school-based-speech-therapy-sydney-nsw`
- Assessments → `/speech-therapy-assessment-sydney-nsw`
- Reports → `/speech-therapy-reports-sydney-nsw`
- Parent & Support Worker Coaching → `/parent-coaching-speech-therapy-sydney-nsw`

**Funding & Fees dropdown:**

- NDIS Speech Therapy → `/ndis-speech-therapy-sydney-nsw`
- Medicare Rebates → `/medicare-speech-therapy-sydney-nsw`
- Private Pay → `/private-speech-therapy-sydney-nsw`
- Home Care Packages → `/home-care-package-speech-therapy-sydney-nsw`
- DVA → `/dva-speech-therapy-sydney-nsw`
- Fees & Pricing → `/fees`

**Areas dropdown:**

- Arncliffe, Burwood, Hurstville, Strathfield, Canterbury-Bankstown, Campsie, Rockdale, Kogarah, Marrickville, Inner West Sydney, St George, Telehealth Australia-wide
- Each links to `/speech-pathologist-[suburb]-nsw`

**Footer:** Full navigation repeated + complete suburb list (visible, not collapsed — for SEO value) + ABN + NDIS/SPA/Medicare badges + WhatsApp + WeChat QR + social links + "Written by [Shine], CPSP" author attribution.

## Core 30 page mapping

| Core 30 Layer                                    | Shine Equivalent                                                                                                                   | Page Count    | Example URLs                            |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------------------------------------- |
| **Category Pages** (broadest service groups)     | Paediatric Speech Therapy, Adult Speech Therapy, Mobile, Telehealth                                                                | 4             | `/paediatric-speech-therapy-sydney-nsw` |
| **Service/Condition Pages** (specific offerings) | Autism, ADHD, Dev Delay, Language Delay, Speech Sounds, Stuttering, Literacy, AAC, Social Communication, Intellectual Disability   | 10            | `/speech-therapy-autism-sydney-nsw`     |
| **Adult Condition Pages**                        | Aphasia, Fluency, Cognitive-Communication, Social Communication, Neuro Rehab                                                       | 5             | `/speech-therapy-aphasia-sydney-nsw`    |
| **Funding Pages**                                | NDIS, Medicare, Private, HCP, DVA, Fees                                                                                            | 6             | `/ndis-speech-therapy-sydney-nsw`       |
| **Suburb/Geographic Pages**                      | Burwood, Hurstville, Strathfield, Canterbury-Bankstown, Campsie, Rockdale, Kogarah, Marrickville, Arncliffe, Inner West, St George | 11            | `/speech-pathologist-burwood-nsw`       |
| **Essential Pages**                              | Homepage, About, Contact, How It Works, For Support Coordinators, Refer a Client                                                   | 6             | `/about`                                |
| **Chinese Pages**                                | Homepage, Services Overview, NDIS Explainer, Contact                                                                               | 4             | `/zh/`                                  |
| **Future (don't build yet)**                     | Blog, FAQ hub, Free Resources, additional suburb pages                                                                             | TBD           | —                                       |
| **TOTAL at launch**                              |                                                                                                                                    | **~46 pages** |                                         |

## Pages to build for concept version

Build these pages fully to demonstrate the template patterns:

1. **Homepage** (full build — this is the GBP landing page and most important page)
2. **One condition page** — Autism (`/speech-therapy-autism-sydney-nsw`)
3. **One suburb page** — Burwood (`/speech-pathologist-burwood-nsw`)
4. **About page** (`/about`)

Build the remaining pages as placeholder routes with:

- Correct URL
- Correct meta title and description
- H1 with target keyword
- Correct schema type
- Header and footer
- Text: "Content coming soon"
- Breadcrumb navigation

---

# 3. HOMEPAGE — FULL BUILD

> **This is the GBP landing page.** It receives ~90% of local search traffic. It must be built as a conversion machine. Follow the Goal Completion Hierarchy: proof first, educational content last.

**URL:** `/`
**Meta title:** `Speech Pathologist Sydney NSW | [Business Name] — Mobile & Telehealth`
**Meta description:** `Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin. NDIS, Medicare & private. Serving Inner West Sydney.`
**Schema:** MedicalBusiness + Organization + FAQPage + BreadcrumbList

## Section order (MANDATORY — follow exactly)

### Section 1: HERO (above the fold)

**H1:** Helping your child communicate with confidence

**Subheadline:** Personalised speech therapy — delivered to your home, school, or online. Available in English and Mandarin (普通话). Serving Inner West Sydney and surrounds.

**Primary CTA:** Book a Free Discovery Call (large, filled button)
**Secondary CTA:** Learn More ↓ (scroll anchor to next section)

**Image:** `<!-- REPLACE: Professional photo of therapist working with a child. Must be a real photo of [Shine], not stock. Use placeholder image for concept. -->`

**Trust signals strip directly below hero CTAs (single horizontal row):**
CPSP Certified · NDIS Registered · Medicare Provider · `<!-- PLACEHOLDER: Training cert badges -->`

**Mobile:** Click-to-call button always visible. Hero image may stack below text on mobile.

### Section 2: TRUST LOGO BAR

Display as a horizontal row of logos/badges:

- Speech Pathology Australia (CPSP)
- NDIS Registered Provider / "I ❤ NDIS"
- Medicare Registered Provider
- `<!-- PLACEHOLDER: Training certification logos (e.g. Hanen, Sounds Write) -->`

### Section 3: CONDITION CARDS (6 cards linking to SEO URLs)

**Section H2:** How I can help your child

Six clickable cards. Each card has: icon or illustration, condition name (H3), 1-2 sentence description, arrow/link to the condition page.

**Autism & ASD** — Supporting children on the autism spectrum with communication, social skills, and language development.
→ `/speech-therapy-autism-sydney-nsw`

**ADHD & Attention** — Helping children with ADHD develop focus, listening skills, and social communication strategies.
→ `/speech-therapy-adhd-sydney-nsw`

**Language Delay** — Building receptive and expressive language skills so your child can understand and be understood.
→ `/speech-therapy-language-delay-sydney-nsw`

**Speech Sounds** — Helping children pronounce sounds clearly so they can be understood by family, friends, and teachers.
→ `/speech-therapy-speech-sounds-sydney-nsw`

**Stuttering & Fluency** — Evidence-based support for children and adults experiencing stuttering or other fluency difficulties.
→ `/speech-therapy-stuttering-sydney-nsw`

**Literacy & Reading** — Supporting reading, writing, and spelling development for children who are finding literacy challenging.
→ `/speech-therapy-literacy-sydney-nsw`

**Below cards (visible text, not hidden):** I also support children and adults with developmental delay, intellectual disability, social communication difficulties, AAC and multimodal communication, and adults recovering from stroke, brain injury, and neurological conditions. Explore all services or learn about adult speech therapy options.

(Internal links in the above paragraph: "Explore all services" → `/paediatric-speech-therapy-sydney-nsw`, "adult speech therapy options" → `/adult-speech-therapy-sydney-nsw`. These are contextual body-content links following the internal linking rules.)

### Section 4: BILINGUAL CALLOUT

**Chinese:** 我們提供中文語言治療服務
**English H2:** Speech therapy in English and Mandarin

I provide bilingual speech pathology services in English and Mandarin. This means more accurate assessment of your child's true language abilities, clearer communication with your family, and therapy that respects your cultural and linguistic background.

Assessing a child in only one language can underestimate their true abilities. Working with a bilingual therapist ensures nothing is missed.

**CTA:** 了解更多 / Learn More in Chinese → `/zh/`

### Section 5: THE MOBILE ADVANTAGE

**H2:** Therapy where your child is most comfortable

Research shows that children learn communication skills best in their everyday environments. That's why I come to you — whether that's your home, your child's school, kindergarten, or daycare. Therapy happens where your child naturally communicates, which means skills transfer more easily into daily life.

This is not a compromise — it's a clinical advantage. Children are more relaxed, more engaged, and more likely to use new skills when they're learning in familiar settings. Parents and educators can observe sessions and learn strategies to use throughout the day.

**Four delivery modes (display as visible blocks, NOT tabs):**

🏠 **Home sessions** — therapy in the comfort of your own home. I bring everything needed. No travel stress for your family.

🏫 **School & kindergarten visits** — working with your child in their learning environment, with the option to coordinate directly with their teachers.

💻 **Telehealth across Australia** — flexible online sessions from anywhere. Ideal for families in regional areas, those managing busy schedules, or when in-person isn't possible.

📍 **Inner West Sydney & surrounds** — I travel within 30 minutes of Arncliffe, including Burwood, Hurstville, Strathfield, Canterbury-Bankstown, and surrounding suburbs. I also travel across greater Sydney for one-off assessments and detailed reports.

(Internal link in telehealth block: "flexible online sessions" → `/telehealth-speech-therapy-sydney-nsw`. Internal link in mobile block: "I travel within 30 minutes of Arncliffe" → link to one suburb page e.g. `/speech-pathologist-burwood-nsw`.)

### Section 6: DIFFERENTIATORS (4 icon blocks)

**H2:** Why families choose [Business Name]

**We come to you** — No clinic visits needed. I travel to your home, school, or daycare — wherever your child is most comfortable and most likely to thrive.

**Bilingual — English & Mandarin** — I provide speech therapy and assessments in both English and Mandarin, ensuring accurate evaluation of your child's true language abilities.

**NDIS, Medicare & private** — I'm a registered NDIS provider accepting all management types, a Medicare provider, and I also work with private clients, Home Care Packages, and DVA. Learn more about funding options for speech therapy.

**Evidence-based, goal-focused** — Every therapy plan is grounded in current evidence and focused on practical goals that make a real difference in your child's daily life — not therapy for the sake of therapy.

(Internal link: "funding options for speech therapy" → `/ndis-speech-therapy-sydney-nsw`)

### Section 7: HOW IT WORKS (3 steps)

**H2:** Getting started is simple

**Step 1 — Book a free call**
We'll have a quick chat about your child's needs, answer your questions, and work out whether I'm the right fit. No obligation, no pressure.

**Step 2 — Assessment**
I'll complete a thorough assessment — at your home, your child's school, or online — to understand their strengths, challenges, and goals. You'll receive a detailed report with clear recommendations.

**Step 3 — Your child's therapy plan**
You'll receive a personalised therapy plan focused on practical, real-life progress. I'll work closely with you, your child's teachers, and any other professionals involved to make sure therapy is consistent and coordinated across all settings.

**CTA:** Book Your Free Discovery Call →

### Section 8: MEET THE THERAPIST

**H2:** Meet [Shine]

`<!-- REPLACE: Professional photo of [Shine]. Different photo from hero. Ideally a warm, approachable photo — not clinical. -->`

Hi, I'm [Shine] — a Certified Practising Speech Pathologist. I'm passionate about providing high-quality, personalised speech therapy that makes a genuine difference in everyday life.

I specialise in working with children and adults with a wide range of communication needs, including children on the autism spectrum, children with ADHD, developmental delay, language disorders, and literacy difficulties. I also support adults recovering from stroke, brain injury, and other neurological conditions.

I speak English and Mandarin, and I'm committed to providing culturally responsive services for diverse families. I believe therapy should be practical, collaborative, and built around your goals — not a one-size-fits-all approach.

**Credentials block (visible, not collapsed):**

- `<!-- PLACEHOLDER: Bachelor of [Degree], [University] -->`
- Certified Practising Member, Speech Pathology Australia (CPSP)
- NDIS Registered Provider
- Medicare Registered Provider
- `<!-- PLACEHOLDER: Training certifications (e.g. Hanen, Sounds Write, Lidcombe Program) -->`

**CTA:** Read more about my approach and qualifications → `/about`

### Section 9: SOCIAL PROOF

**H2:** What families say

`<!-- PLACEHOLDER: Google Reviews embed widget. Use Elfsight or similar. For concept version, display 3 placeholder testimonial cards with: "Review coming soon — [Business Name] is a new practice. In the meantime, here are the credentials and training that back our work." Display credential badges here as interim trust signals. -->`

**Build the container so a real Google Reviews widget can be dropped in later.** Include HTML comment: `<!-- PASTE GOOGLE REVIEWS EMBED CODE HERE -->`

### Section 10: FOR SUPPORT COORDINATORS

**H2:** Are you a Support Coordinator?

I work closely with NDIS support coordinators to provide timely, high-quality speech therapy with clear communication and detailed reporting. I understand the referral process and I make it easy for you.

- Fast response to referrals — I aim to respond within 24 hours
- Detailed progress reports and session summaries
- Flexible scheduling — mobile and telehealth
- Support for plan reviews with clear, specific recommendations
- All NDIS management types accepted (self-managed, plan-managed, NDIA-managed)

**CTA 1:** Refer a Client → `/refer-a-client`
**CTA 2:** Download NDIS Service Guide → `/ndis-service-guide-support-coordinators`

(Internal link: "progress reports and session summaries" → `/speech-therapy-reports-sydney-nsw`)

### Section 11: FAQ (FULLY VISIBLE — NO ACCORDIONS)

**H2:** Common questions from parents

Display each Q&A pair as a visible H3 (question) + paragraph (answer). Do NOT use accordion/collapsible UI. All content must be visible on page load for Google to index it properly.

**Q: How do I know if my child needs speech therapy?**
If you're concerned about how your child communicates — whether it's how they pronounce words, how much they understand, how they put sentences together, or how they interact with others — it's worth getting an assessment. I offer a free discovery call where we can talk through your concerns and I can help you decide whether a full assessment would be helpful.

**Q: What does a typical session look like?**
Sessions are usually 45–60 minutes and take place at your home, your child's school, or online. I use play-based, evidence-based activities tailored to your child's interests and goals. I also spend time coaching you on strategies you can use between sessions so progress doesn't stop when I leave.

**Q: How much does speech therapy cost?**
Fees depend on the type of session and funding source. I'm a registered NDIS provider and Medicare provider, and I also see private clients. Visit my fees and pricing page for current rates and information about what your fund covers.

**Q: Do you offer telehealth?**
Yes. I provide telehealth sessions to clients across Australia. Telehealth works well for many children and adults, and I can deliver sessions to your home, your child's school, or any setting with a stable internet connection. Learn more about telehealth speech therapy.

**Q: What areas do you travel to?**
I travel within a 30-minute radius of Arncliffe for ongoing therapy — including Burwood, Hurstville, Strathfield, Canterbury-Bankstown, Campsie, Rockdale, Kogarah, and Marrickville. I also travel across greater Sydney for one-off assessments and report writing. Find your nearest service area.

**Q: How do I get started?**
Book a free discovery call. We'll chat about your child's needs and I'll explain how the process works. You can also call me directly or refer a client if you're a support coordinator.

(Internal links: "fees and pricing page" → `/fees`, "telehealth speech therapy" → `/telehealth-speech-therapy-sydney-nsw`, "Find your nearest service area" → `/speech-pathologist-burwood-nsw`)

### Section 12: SERVICE AREA (compact, pre-footer)

**H2:** Areas I serve in Sydney

Displayed as a simple grid or comma-separated list of linked suburb names. Not a major visual section — just navigation and SEO value.

Arncliffe · Burwood · Hurstville · Strathfield · Canterbury-Bankstown · Campsie · Rockdale · Kogarah · Marrickville · Inner West Sydney · St George · Telehealth Australia-wide

Each suburb name links to its suburb page.

### Section 13: FINAL CTA BAND

**H2:** Ready to help your child thrive?

Book a free discovery call to talk about your child's needs — no obligation, no pressure.

📞 [Phone — click-to-call] · ✉️ [Email]

**CTA:** Book a Free Discovery Call →

### Section 14: FOOTER

- Full navigation links (all main pages)
- Complete suburb list (visible, all linked — SEO value)
- ABN: `<!-- PLACEHOLDER: ABN -->`
- NDIS Provider Number: `<!-- PLACEHOLDER -->`
- SPA CPSP badge
- Medicare badge
- WhatsApp Business link/icon
- WeChat QR code
- Social media links (LinkedIn at minimum)
- © 2025 [Business Name]
- "Written by [Shine], Certified Practising Speech Pathologist"

---

# 4. INNER PAGE TEMPLATES

Build one of each to demonstrate the pattern. Style to match the competitor screenshots. Remaining pages will use the same templates.

## 4.1 Condition page template (build: Autism)

**URL:** `/speech-therapy-autism-sydney-nsw`
**Meta title:** `Speech Therapy for Autism Sydney NSW | [Business Name]`
**Meta description:** `Personalised speech therapy for children with autism and ASD in Sydney. Mobile, telehealth & school-based. NDIS & Medicare. Bilingual English & Mandarin.`
**H1:** Speech Therapy for Autism and ASD in Sydney
**Schema:** Service + FAQPage + BreadcrumbList
**Organization schema:** In `<head>` (same as every page)

**Section order:**

1. **Breadcrumb:** Home > Services > Speech Therapy for Autism
2. **H1 + intro paragraph** (visible, above fold):
   I provide personalised, strengths-based speech therapy for children on the autism spectrum in Sydney's Inner West and surrounds. I focus on building communication skills that help your child connect with others, express their needs, and participate more fully in everyday life — at home, at school, and in the community.
3. **Trust signals strip** (same badges as homepage — compact row)
4. **"What is autism spectrum disorder?"** (H2, parent-friendly explainer):
   Autism is a neurodevelopmental condition that affects how a person communicates, interacts with others, and experiences the world. Every child on the spectrum is different — some may have difficulty with spoken language, others may find social communication challenging, and some may benefit from alternative communication methods like AAC. There's no single approach that works for everyone, which is why therapy needs to be tailored to your child's individual strengths, interests, and goals.
5. **"Signs to look for"** (H2, visible list — NOT collapsed):
   - Limited or no spoken language for their age
   - Difficulty with back-and-forth conversation or taking turns
   - Challenges understanding what others say or following instructions
   - Repetitive use of words or phrases (echolalia)
   - Trouble understanding social cues, body language, or facial expressions
   - Preference for routine and difficulty with transitions

6. **"How speech therapy helps"** (H2):
   I work on building vocabulary and sentence structure, developing social communication and play skills, exploring AAC options for children who need alternative ways to communicate, supporting transitions between activities and environments, and coaching parents and support workers on strategies they can use at home and school every day.

7. **"What to expect in sessions"** (H2):
   Sessions are play-based, structured around your child's interests, and take place in familiar environments — your home, their school, or online. I also provide practical coaching for parents and support workers so communication strategies are used consistently across all settings. Learn more about how therapy works and what your first session looks like.

(Internal link: "how therapy works" → `/how-it-works`)

8. **"Parent and support worker coaching"** (H2):
   I believe parents and support workers are essential partners in therapy. I provide practical coaching and training so you can confidently support your child's communication development between sessions — during mealtimes, play, outings, and transitions. This means your child gets more practice throughout the day, not just during therapy sessions.

9. **"Funding your child's therapy"** (H2):
   Speech therapy for autism is covered under most NDIS plans and may be eligible for Medicare rebates with a referral from your GP. I accept all NDIS management types. Find out more about NDIS funding for speech therapy or check the full list of funding options and fees.

(Internal links: "NDIS funding for speech therapy" → `/ndis-speech-therapy-sydney-nsw`, "funding options and fees" → `/fees`)

10. **"Related conditions"** (H2):
    Many children on the autism spectrum also experience challenges with attention and focus, language development, social communication, or may benefit from AAC and multimodal communication support. I work across all of these areas.

(Internal links: each condition name links to its respective page — unique anchor text for each)

11. **CTA band:** Same as homepage final CTA
12. **Author attribution:** "Written by [Shine], Certified Practising Speech Pathologist" with link to `/about`

## 4.2 Suburb page template (build: Burwood)

**URL:** `/speech-pathologist-burwood-nsw`
**Meta title:** `Speech Pathologist Burwood NSW | [Business Name]`
**Meta description:** `Mobile speech therapy in Burwood, Sydney. Home, school & telehealth. NDIS, Medicare & private. Bilingual English & Mandarin. Book a free call.`
**H1:** Speech Pathologist in Burwood
**Schema:** Service + BreadcrumbList
**Organization schema:** In `<head>` (same as every page)
**NOTE:** Do NOT include LocalBusiness schema on suburb pages. LocalBusiness/MedicalBusiness goes on the homepage ONLY.

**Section order:**

1. **Breadcrumb:** Home > Areas > Speech Pathologist Burwood
2. **H1 + intro paragraph:**
   Looking for a speech pathologist in Burwood? I provide mobile speech therapy for children and adults in Burwood and surrounding suburbs. I travel to your home, your child's school, or local kindergarten — so there's no need to visit a clinic. I also offer telehealth sessions if that suits your family better.
3. **Trust signals strip**
4. **"Services available in Burwood"** (H2):
   Speech therapy for children with autism, ADHD, developmental delay, language delay, speech sounds, stuttering, literacy, and more. Adult speech therapy for aphasia, cognitive-communication, fluency, and neurological rehabilitation. I also provide comprehensive assessments and detailed reports, and offer coaching for parents and support workers.

(Internal links woven into the paragraph: "children with autism" → `/speech-therapy-autism-sydney-nsw`, "comprehensive assessments" → `/speech-therapy-assessment-sydney-nsw`. Each with unique, descriptive anchor text.)

5. **"How mobile therapy works in Burwood"** (H2):
   I bring everything needed for a full therapy session directly to your home or your child's school in Burwood. Sessions typically run 45-60 minutes. Parents and carers are welcome to observe and I'll coach you on strategies to use between sessions.
6. **"Funding options"** (H2):
   NDIS registered (all management types), Medicare provider, private pay, Home Care Packages, DVA. Visit the funding and fees page for full details on what's covered and current session rates.

(Internal link: "funding and fees page" → `/fees`)

7. **"Languages"**: English and Mandarin.
8. **CTA band**
9. **"Nearby suburbs"** (H2) — displayed as visible linked list:
   Strathfield · Canterbury-Bankstown · Campsie · Inner West Sydney · Arncliffe

(Each links to its suburb page)

10. **Author attribution**

## 4.3 About page (build fully)

**URL:** `/about`
**Meta title:** `About [Shine] — Speech Pathologist Sydney | [Business Name]`
**Meta description:** `Meet [Shine], Certified Practising Speech Pathologist. Mobile & telehealth in Sydney. Bilingual English & Mandarin. NDIS & Medicare registered.`
**H1:** Meet [Shine]
**Schema:** Organization + BreadcrumbList (NOT LocalBusiness — that's homepage only)

**This is a critical E-E-A-T page. It must demonstrate genuine expertise.**

**Section order:**

1. **Breadcrumb:** Home > About
2. **H1 + professional photo** — `<!-- REPLACE: Professional headshot, warm and approachable -->`
3. **Personal introduction (H2: About me):**
   I'm [Shine], a Certified Practising Speech Pathologist. I started [Business Name] because I believe every person deserves access to high-quality, personalised speech therapy that makes a genuine difference in their everyday life — not just therapy for the sake of therapy.

4. **My approach (H2):**
   I take a client-centred, strengths-based approach. I start with what you or your child can already do, what matters to you, and what goals will make the biggest difference in daily life. I tailor every session to the individual — their interests, their strengths, and their real-world needs.

I'm a big believer in collaboration. I work closely with families, teachers, support coordinators, and other professionals to make sure therapy is consistent and coordinated across all environments.

5. **Qualifications (H2, fully visible — no accordion):**
   - `<!-- PLACEHOLDER: University degree and institution -->`
   - Certified Practising Member, Speech Pathology Australia (CPSP)
   - NDIS Registered Provider — `<!-- PLACEHOLDER: Provider number -->`
   - Medicare Registered Provider
   - `<!-- PLACEHOLDER: Training certifications (list each one) -->`

6. **Bilingual practice (H2):**
   I provide speech therapy and assessments in English and Mandarin (普通话). Assessing a child in only one language can underestimate their true abilities. I ensure assessments are accurate, therapy is accessible, and communication with your family is clear. This is especially important for families who speak Mandarin at home but need therapy delivered in an English-speaking school environment.

7. **What I work with (H2):** Full list of conditions with internal links to each condition page.

8. **Video introduction:** `<!-- PLACEHOLDER: Embed therapist intro video. 1-2 minutes, filmed professionally or at high quality. Should show [Shine] speaking naturally about her approach. This is a critical E-E-A-T signal — video of a real person proves authenticity to Google. -->`

9. **Personal section (H2):** `<!-- PLACEHOLDER: Brief personal background — where she grew up, what drew her to speech pathology, something personal/human that builds connection. 2-3 sentences. -->`

10. **Social media links:** LinkedIn (at minimum), any others that are actively maintained.

11. **CTA band**

---

# 5. FORMS

## Parent enquiry form (5 fields)

| Field                               | Type                                                                                                                                                                                      | Required |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Your name                           | Text                                                                                                                                                                                      | Yes      |
| Phone number                        | Tel                                                                                                                                                                                       | Yes      |
| Email                               | Email                                                                                                                                                                                     | Yes      |
| Child's age                         | Text                                                                                                                                                                                      | Yes      |
| What are you looking for help with? | Dropdown: Speech Sounds / Language / Stuttering / Literacy / Autism / ADHD / Developmental Delay / Intellectual Disability / Social Communication / AAC / Adult Speech / Not sure / Other | Yes      |

## Support Coordinator referral form (11 fields)

| Field                       | Type                                                 | Required                                    |
| --------------------------- | ---------------------------------------------------- | ------------------------------------------- |
| Your name                   | Text                                                 | Yes                                         |
| Organisation                | Text                                                 | Yes                                         |
| Email                       | Email                                                | Yes                                         |
| Phone                       | Tel                                                  | Yes                                         |
| Participant name            | Text                                                 | Yes                                         |
| NDIS number                 | Text                                                 | Yes                                         |
| Plan management type        | Dropdown: Self-managed / Plan-managed / NDIA-managed | Yes                                         |
| Plan manager name & contact | Text                                                 | Conditional — show if Plan-managed selected |
| Key support needs           | Textarea                                             | Yes                                         |
| Preferred delivery          | Checkboxes: Mobile / Telehealth / School-based       | Yes                                         |
| Preferred language          | Dropdown: English / Mandarin                         | Yes                                         |

## Post-submission: "Next Steps" page

After ANY form submission, redirect to a dedicated Next Steps page (`/thank-you`):

- "Thank you — we'll be in touch within 24 hours"
- Brief explanation of what happens in the free discovery call
- What to prepare (any reports, concerns, questions)
- Optional: downloadable resource — `<!-- PLACEHOLDER: "Is My Child's Speech on Track?" checklist PDF -->`

**This is a conversion optimisation detail that none of the local competitors do.** Do not skip it.

---

# 6. INTEGRATIONS

| Tool                  | Purpose                               | Implementation                                               |
| --------------------- | ------------------------------------- | ------------------------------------------------------------ |
| Calendly or TidyCal   | Booking embed for free discovery call | Embed on booking page, link from all "Book a Free Call" CTAs |
| WhatsApp Business     | Floating chat button (bottom-right)   | Always visible, all pages                                    |
| WeChat QR             | QR code                               | Footer + Chinese pages                                       |
| Google Analytics 4    | Tracking                              | `<!-- PLACEHOLDER: GA4 tracking code -->`                    |
| Google Search Console | Indexing verification                 | Verify via meta tag or DNS                                   |

---

# 7. CHINESE LANGUAGE PAGES

Route-based implementation: all Chinese pages live under `/zh/` prefix. Use shared components (header, footer) with Chinese text variants. NOT a plugin — route-based.

**`<html lang="zh">` on all Chinese pages.**

Build one Chinese page for concept: `/zh/` (homepage equivalent).

**The language switcher in the header** (EN/中文) should toggle between English and Chinese versions of the current page where available, or navigate to `/zh/` if no Chinese equivalent exists.

**hreflang tags** on pages with Chinese equivalents:

```html
<link rel="alternate" hreflang="en" href="https://[domain].com.au/" />
<link rel="alternate" hreflang="zh" href="https://[domain].com.au/zh/" />
```

---

# 8. WHAT NOT TO DO

These are common mistakes that will hurt SEO or conversion. The build agent must avoid all of them.

**Content:**

- ❌ No "Welcome to [Business Name]" — waste of H1 space
- ❌ No company founding story in the hero area
- ❌ No "We pride ourselves on..." — show don't tell
- ❌ No generic differentiators (quality, experience, satisfaction)
- ❌ No clinical jargon parents won't understand
- ❌ No long paragraphs that don't earn their place
- ❌ No "Contact us today for all your speech therapy needs" — be specific
- ❌ No AI-generated author bios or stock photos for the therapist

**Design:**

- ❌ No stock photo carousels — one strong hero image only
- ❌ No accordions or tabs hiding content
- ❌ No "read more" truncation
- ❌ No parallax effects that slow page load
- ❌ No auto-playing video
- ❌ No sections not specified in this brief
- ❌ Do NOT put About Us or company history high on the page — it goes after proof/credibility sections

**Technical:**

- ❌ No duplicate H1 tags
- ❌ No heading tags used for styling (use CSS)
- ❌ No LocalBusiness/MedicalBusiness schema on any page except the homepage
- ❌ No orphan pages (every page must be reachable via navigation or internal links)
- ❌ No broken internal links
- ❌ No identical meta descriptions across pages
- ❌ No identical anchor text for internal links
- ❌ No phone numbers that aren't click-to-call on mobile
- ❌ No `<a href="#">` placeholder links — use real routes or `<!-- PLACEHOLDER -->` comments

---

# 9. VERIFICATION CHECKLIST

After building the concept, verify each item:

**Homepage (GBP Landing Page):**

- [ ] H1 is outcome-focused, parent-facing, contains target keyword
- [ ] Both CTAs visible in sticky header at all viewport sizes
- [ ] Trust signals appear immediately after hero (not buried)
- [ ] FAQ content is fully visible (no accordions)
- [ ] MedicalBusiness schema is present and valid
- [ ] Organization schema is present
- [ ] FAQPage schema wraps all Q&A pairs
- [ ] All phone numbers are click-to-call
- [ ] Mobile sticky CTA is implemented
- [ ] Floating WhatsApp button is present
- [ ] Footer has complete suburb list (visible, linked)
- [ ] Author attribution present
- [ ] Section order follows Goal Completion Hierarchy exactly

**All Pages:**

- [ ] Self-referencing canonical tag
- [ ] Unique meta title (under 60 chars)
- [ ] Unique meta description (150-160 chars)
- [ ] One H1 per page with target keyword
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Organization schema in `<head>`
- [ ] BreadcrumbList schema
- [ ] Correct schema type for page type
- [ ] Minimum 3 contextual internal links in body content
- [ ] All internal link anchor text is unique
- [ ] Alt text on all images
- [ ] ScrollToTop working on route changes
- [ ] `<html lang="en">` (or `lang="zh"` for Chinese pages)
- [ ] Open Graph tags present

**Mobile:**

- [ ] Hamburger menu working
- [ ] Both CTAs accessible
- [ ] Click-to-call on all phone numbers
- [ ] No horizontal scroll
- [ ] Touch targets adequate size (minimum 44x44px)
- [ ] Forms usable on mobile

**Technical:**

- [ ] No orphan pages
- [ ] No broken links
- [ ] No duplicate schema types where they shouldn't be
- [ ] Images optimised and lazy loaded below fold
- [ ] Total placeholder pages match Core 30 mapping count (~46)

---

# 10. FUTURE EXPANSION (don't build — ensure framework supports)

The framework must accommodate expansion to:

- All 10 paediatric condition pages
- All 5 adult condition pages
- All 5 service type pages
- All 6 funding pages
- All 11+ suburb landing pages
- 2 professional/referral pages
- Blog section with individual post pages
- FAQ hub page
- Free resources / lead magnet download pages
- 4 Chinese language pages under `/zh/`
- Sitemap.xml (auto-generated from routes)
- robots.txt
- 404 page (branded, with navigation and CTAs)

The URL patterns in Section 0.6 and the Core 30 mapping in Section 2 define how all future pages will be structured.
