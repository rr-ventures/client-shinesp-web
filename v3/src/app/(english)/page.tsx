import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Speech Pathologist Sydney NSW | Shine and Speak",
  description:
    "Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin. NDIS, Medicare & private. Serving Inner West Sydney.",
  alternates: {
    canonical: "https://shineandspeak.com.au/",
    languages: {
      en: "https://shineandspeak.com.au/",
      zh: "https://shineandspeak.com.au/zh",
    },
  },
  openGraph: {
    title: "Speech Pathologist Sydney NSW | Shine and Speak",
    description:
      "Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin. NDIS, Medicare & private. Serving Inner West Sydney.",
    url: "https://shineandspeak.com.au/",
  },
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Shine and Speak",
  image: "https://shineandspeak.com.au/shine-and-speak-logo-horizontal-transparent.png",
  url: "https://shineandspeak.com.au",
  telephone: "+61421608819",
  email: "admin@shineandspeak.com.au",
  medicalSpecialty: "Speech Pathology",
  areaServed: [
    "Arncliffe", "Burwood", "Hurstville", "Strathfield",
    "Canterbury-Bankstown", "Campsie", "Rockdale", "Kogarah",
    "Marrickville", "Inner West Sydney", "St George",
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.9369,
    longitude: 151.1539,
  },
  paymentAccepted: ["NDIS", "Medicare", "Private pay", "Home Care Package", "DVA"],
  availableLanguage: ["English", "Chinese"],
  priceRange: "$$",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I know if my child needs speech therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you're concerned about how your child communicates — whether it's how they pronounce words, how much they understand, how they put sentences together, or how they interact with others — it's worth getting an assessment. I offer a free discovery call where we can talk through your concerns and I can help you decide whether a full assessment would be helpful.",
      },
    },
    {
      "@type": "Question",
      name: "What does a typical session look like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sessions are usually 45–60 minutes and take place at your home, your child's school, or online. I use play-based, evidence-based activities tailored to your child's interests and goals. I also spend time coaching you on strategies you can use between sessions so progress doesn't stop when I leave.",
      },
    },
    {
      "@type": "Question",
      name: "How much does speech therapy cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fees depend on the type of session and funding source. I'm a registered NDIS provider and Medicare provider, and I also see private clients. Visit my fees and pricing page for current rates and information about what your fund covers.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer telehealth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I provide telehealth sessions to clients across Australia. Telehealth works well for many children and adults, and I can deliver sessions to your home, your child's school, or any setting with a stable internet connection.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you travel to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I travel within a 30-minute radius of Arncliffe for ongoing therapy — including Burwood, Hurstville, Strathfield, Canterbury-Bankstown, Campsie, Rockdale, Kogarah, and Marrickville. I also travel across greater Sydney for one-off assessments and report writing.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Book a free discovery call. We'll chat about your child's needs and I'll explain how the process works. You can also call me directly on 0421 608 819 or email admin@shineandspeak.com.au",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }]} />

      {/* Section 1: HERO */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-blue mb-6 leading-tight">
              Helping your child communicate with confidence
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Personalised speech therapy — delivered to your home, school, or online. Available in English and Mandarin (普通话). Serving Inner West Sydney and surrounds.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {/* REPLACE: Swap /contact for your Calendly/TidyCal booking URL */}
              <Link href="/contact" className="bg-golden-amber text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-600 transition shadow-lg">
                Book a Free Discovery Call
              </Link>
              <a href="#trust" className="border-2 border-navy-blue text-navy-blue px-8 py-4 rounded-md font-bold text-lg hover:bg-navy-blue hover:text-white transition">
                Learn More ↓
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-navy-blue">
              <span>✓ CPSP Certified</span>
              <span>✓ NDIS Registered</span>
              <span>✓ Medicare Provider</span>
            </div>
          </div>
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200 flex items-center justify-center text-gray-500 text-center p-8">
            {/* REPLACE: Professional photo of Shine Teoh working with a child — warm, natural setting */}
            <span className="text-sm text-gray-400">[Placeholder: Professional photo of Shine Teoh working with a child]</span>
          </div>
        </div>
      </section>

      {/* Section 2: TRUST LOGO BAR */}
      <section id="trust" className="py-10 border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 items-center">
          <div className="text-center">
            <div className="font-bold text-lg text-navy-blue">Speech Pathology Australia</div>
            <div className="text-sm text-gray-500">Certified Practising Member</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-navy-blue">NDIS Registered</div>
            <div className="text-sm text-gray-500">All management types</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-navy-blue">Medicare Provider</div>
            <div className="text-sm text-gray-500">Registered provider</div>
          </div>
          {/* PLACEHOLDER: Add Hanen, Sounds Write, Lidcombe or other certification badges here */}
        </div>
      </section>

      {/* Section 3: DIFFERENTIATORS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue text-center mb-12">Why families choose Shine and Speak</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">We come to you</h3>
              <p className="text-gray-700 text-sm">No clinic visits needed. I travel to your home, school, or daycare — wherever your child is most comfortable and most likely to thrive.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">🌏</div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">Bilingual — English & Mandarin</h3>
              <p className="text-gray-700 text-sm">I provide speech therapy and assessments in both English and Mandarin, ensuring accurate evaluation of your child's true language abilities.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">NDIS, Medicare & private</h3>
              <p className="text-gray-700 text-sm">Registered NDIS provider (all management types), Medicare provider, and private clients. <Link href="/ndis-speech-therapy-sydney-nsw" className="text-golden-amber font-semibold hover:underline">Learn more about funding options for speech therapy</Link>.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">Evidence-based, goal-focused</h3>
              <p className="text-gray-700 text-sm">Every therapy plan is grounded in current evidence and focused on practical goals that make a real difference in your child's daily life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: MOBILE ADVANTAGE */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Therapy where your child is most comfortable</h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12 text-blue-100">
            Research shows that children learn communication skills best in their everyday environments. That's why I come to you — whether that's your home, your child's school, kindergarten, or daycare. Therapy happens where your child naturally communicates, which means skills transfer more easily into daily life.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-blue-900 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-2 text-golden-amber">🏠 Home sessions</h3>
              <p className="text-blue-100 text-sm">Therapy in the comfort of your own home. I bring everything needed. No travel stress for your family.</p>
            </div>
            <div className="bg-blue-900 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-2 text-golden-amber">🏫 School & kindergarten visits</h3>
              <p className="text-blue-100 text-sm">Working with your child in their learning environment, with the option to coordinate directly with their teachers.</p>
            </div>
            <div className="bg-blue-900 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-2 text-golden-amber">💻 Telehealth across Australia</h3>
              <p className="text-blue-100 text-sm"><Link href="/telehealth-speech-therapy-sydney-nsw" className="underline hover:text-golden-amber">Flexible online sessions</Link> from anywhere. Ideal for families in regional areas, those managing busy schedules, or when in-person isn't possible.</p>
            </div>
            <div className="bg-blue-900 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-2 text-golden-amber">📍 Inner West Sydney & surrounds</h3>
              <p className="text-blue-100 text-sm">I travel within 30 minutes of Arncliffe, including <Link href="/speech-pathologist-burwood-nsw" className="underline hover:text-golden-amber">Burwood and nearby suburbs</Link>. Also available across greater Sydney for one-off assessments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: CONDITION CARDS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue text-center mb-12">How I can help your child</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            <Link href="/speech-therapy-autism-sydney-nsw" className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition group">
              <div className="text-3xl mb-3">🧩</div>
              <h3 className="text-xl font-bold text-navy-blue mb-3 group-hover:text-golden-amber transition">Autism & ASD</h3>
              <p className="text-gray-700 text-sm">Supporting children on the autism spectrum with communication, social skills, and language development.</p>
            </Link>
            <Link href="/speech-therapy-adhd-sydney-nsw" className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition group">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-navy-blue mb-3 group-hover:text-golden-amber transition">ADHD & Attention</h3>
              <p className="text-gray-700 text-sm">Helping children with ADHD develop focus, listening skills, and social communication strategies.</p>
            </Link>
            <Link href="/speech-therapy-language-delay-sydney-nsw" className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition group">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-xl font-bold text-navy-blue mb-3 group-hover:text-golden-amber transition">Language Delay</h3>
              <p className="text-gray-700 text-sm">Building receptive and expressive language skills so your child can understand and be understood.</p>
            </Link>
            <Link href="/speech-therapy-speech-sounds-sydney-nsw" className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition group">
              <div className="text-3xl mb-3">🗣️</div>
              <h3 className="text-xl font-bold text-navy-blue mb-3 group-hover:text-golden-amber transition">Speech Sounds</h3>
              <p className="text-gray-700 text-sm">Helping children pronounce sounds clearly so they can be understood by family, friends, and teachers.</p>
            </Link>
            <Link href="/speech-therapy-stuttering-sydney-nsw" className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition group">
              <div className="text-3xl mb-3">🌊</div>
              <h3 className="text-xl font-bold text-navy-blue mb-3 group-hover:text-golden-amber transition">Stuttering & Fluency</h3>
              <p className="text-gray-700 text-sm">Evidence-based support for children and adults experiencing stuttering or other fluency difficulties.</p>
            </Link>
            <Link href="/speech-therapy-literacy-sydney-nsw" className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition group">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="text-xl font-bold text-navy-blue mb-3 group-hover:text-golden-amber transition">Literacy & Reading</h3>
              <p className="text-gray-700 text-sm">Supporting reading, writing, and spelling development for children who are finding literacy challenging.</p>
            </Link>
          </div>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            I also support children and adults with developmental delay, intellectual disability, social communication difficulties, AAC and multimodal communication, and adults recovering from stroke, brain injury, and neurological conditions.{" "}
            <Link href="/paediatric-speech-therapy-sydney-nsw" className="text-navy-blue font-bold hover:underline">Explore all paediatric services</Link>{" "}
            or learn about{" "}
            <Link href="/adult-speech-therapy-sydney-nsw" className="text-navy-blue font-bold hover:underline">adult speech therapy options</Link>.
          </p>
        </div>
      </section>

      {/* Section 6: HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-12">Getting started is simple</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div>
              <div className="w-16 h-16 bg-golden-amber text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">Book a free call</h3>
              <p className="text-gray-700 text-sm">We'll have a quick chat about your child's needs, answer your questions, and work out whether I'm the right fit. No obligation, no pressure.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-golden-amber text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">Assessment</h3>
              <p className="text-gray-700 text-sm">I'll complete a thorough assessment — at your home, your child's school, or online — to understand their strengths, challenges, and goals.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-golden-amber text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">Your child's therapy plan</h3>
              <p className="text-gray-700 text-sm">You'll receive a personalised therapy plan focused on practical, real-life progress. I'll work closely with you, your child's teachers, and other professionals.</p>
            </div>
          </div>
          {/* REPLACE: Swap /contact for your Calendly/TidyCal booking URL */}
          <Link href="/contact" className="inline-block bg-golden-amber text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-600 transition shadow-lg">
            Book Your Free Discovery Call →
          </Link>
        </div>
      </section>

      {/* Section 7: BILINGUAL CALLOUT */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="text-golden-amber font-bold text-lg mb-2">我們提供中文語言治療服務</div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">Speech therapy in English and Mandarin</h2>
          <p className="text-lg text-gray-700 mb-4">
            I provide bilingual speech pathology services in English and Mandarin. This means more accurate assessment of your child's true language abilities, clearer communication with your family, and therapy that respects your cultural and linguistic background.
          </p>
          <p className="text-gray-700 mb-8">
            Assessing a child in only one language can underestimate their true abilities. Working with a bilingual therapist ensures nothing is missed.
          </p>
          <Link href="/zh" className="inline-block border-2 border-navy-blue text-navy-blue px-8 py-3 rounded-md font-bold hover:bg-navy-blue hover:text-white transition">
            了解更多 / Learn More in Chinese →
          </Link>
        </div>
      </section>

      {/* Section 8: MEET THE THERAPIST */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">Meet Shine Teoh</h2>
            <p className="text-lg text-gray-700 mb-4">
              Hi, I'm Shine Teoh — a Certified Practising Speech Pathologist. I'm passionate about providing high-quality, personalised speech therapy that makes a genuine difference in everyday life.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I specialise in working with children and adults with a wide range of communication needs. I speak English and Mandarin, and I'm committed to providing culturally responsive services for diverse families.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl mb-6">
              <ul className="space-y-2 text-navy-blue font-semibold text-sm">
                <li>✓ {/* PLACEHOLDER: Bachelor of Speech Pathology, [University] */} Bachelor of Speech Pathology</li>
                <li>✓ Certified Practising Member, Speech Pathology Australia (CPSP)</li>
                <li>✓ NDIS Registered Provider</li>
                <li>✓ Medicare Registered Provider</li>
                <li>✓ {/* PLACEHOLDER: Training certifications e.g. Hanen, Sounds Write, Lidcombe Program */}</li>
              </ul>
            </div>
            <Link href="/about" className="text-golden-amber font-bold hover:underline text-lg">
              Read more about my approach and qualifications →
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <div className="bg-gray-200 aspect-square rounded-2xl flex items-center justify-center text-gray-500 text-center p-8 shadow-xl">
              {/* REPLACE: Professional headshot of Shine Teoh, warm and approachable */}
              <span className="text-sm text-gray-400">[Placeholder: Professional headshot of Shine Teoh]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: SOCIAL PROOF */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-12">What families say</h2>
          {/* PASTE GOOGLE REVIEWS EMBED CODE HERE */}
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-xl shadow-md border border-gray-100">
            <p className="text-xl text-gray-600 italic mb-6">
              Review coming soon — Shine and Speak is a new practice. In the meantime, here are the credentials and training that back our work.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-navy-blue">
              <span className="bg-blue-50 px-4 py-2 rounded-lg">✓ Certified Practising Speech Pathologist</span>
              <span className="bg-blue-50 px-4 py-2 rounded-lg">✓ NDIS Registered Provider</span>
              <span className="bg-blue-50 px-4 py-2 rounded-lg">✓ Medicare Provider</span>
              <span className="bg-blue-50 px-4 py-2 rounded-lg">✓ Bilingual English & Mandarin</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: FOR SUPPORT COORDINATORS */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Are you a Support Coordinator?</h2>
            <p className="text-lg text-blue-100 mb-6">
              I work closely with NDIS support coordinators to provide timely, high-quality speech therapy with clear communication and detailed reporting. I understand the referral process and I make it easy for you.
            </p>
            <ul className="space-y-3 mb-8 text-blue-50">
              <li>✓ Fast response to referrals — I aim to respond within 24 hours</li>
              <li>✓ Detailed <Link href="/speech-therapy-reports-sydney-nsw" className="underline hover:text-golden-amber">progress reports and session summaries</Link></li>
              <li>✓ Flexible scheduling — mobile and telehealth</li>
              <li>✓ Support for plan reviews with clear, specific recommendations</li>
              <li>✓ All NDIS management types accepted (self-managed, plan-managed, NDIA-managed)</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/refer-a-client" className="bg-golden-amber text-white px-6 py-3 rounded-md font-bold hover:bg-yellow-600 transition">
                Refer a Client →
              </Link>
              <Link href="/ndis-service-guide-support-coordinators" className="border-2 border-white text-white px-6 py-3 rounded-md font-bold hover:bg-white hover:text-navy-blue transition">
                Download NDIS Service Guide →
              </Link>
            </div>
          </div>
          <div className="bg-blue-800 p-8 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-golden-amber">Quick Referral</h3>
            <p className="mb-6 text-blue-100">Submit a referral in under 2 minutes. I'll contact the family directly to arrange an initial consultation.</p>
            <Link href="/refer-a-client" className="block w-full text-center bg-golden-amber text-white px-6 py-3 rounded-md font-bold hover:bg-yellow-600 transition">
              Open Referral Form →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 11: FAQ — FULLY VISIBLE, NO ACCORDIONS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue text-center mb-12">Common questions from parents</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">How do I know if my child needs speech therapy?</h3>
              <p className="text-gray-700">If you're concerned about how your child communicates — whether it's how they pronounce words, how much they understand, how they put sentences together, or how they interact with others — it's worth getting an assessment. I offer a free discovery call where we can talk through your concerns and I can help you decide whether a full assessment would be helpful.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">What does a typical session look like?</h3>
              <p className="text-gray-700">Sessions are usually 45–60 minutes and take place at your home, your child's school, or online. I use play-based, evidence-based activities tailored to your child's interests and goals. I also spend time coaching you on strategies you can use between sessions so progress doesn't stop when I leave.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">How much does speech therapy cost?</h3>
              <p className="text-gray-700">Fees depend on the type of session and funding source. I'm a registered NDIS provider and Medicare provider, and I also see private clients. Visit my <Link href="/fees" className="text-navy-blue font-semibold hover:underline">fees and pricing page</Link> for current rates and information about what your fund covers.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">Do you offer telehealth?</h3>
              <p className="text-gray-700">Yes. I provide telehealth sessions to clients across Australia. Telehealth works well for many children and adults, and I can deliver sessions to your home, your child's school, or any setting with a stable internet connection. Learn more about <Link href="/telehealth-speech-therapy-sydney-nsw" className="text-navy-blue font-semibold hover:underline">telehealth speech therapy options</Link>.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">What areas do you travel to?</h3>
              <p className="text-gray-700">I travel within a 30-minute radius of Arncliffe for ongoing therapy — including Burwood, Hurstville, Strathfield, Canterbury-Bankstown, Campsie, Rockdale, Kogarah, and Marrickville. I also travel across greater Sydney for one-off assessments and report writing. <Link href="/speech-pathologist-burwood-nsw" className="text-navy-blue font-semibold hover:underline">Find your nearest service area</Link>.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">How do I get started?</h3>
              <p className="text-gray-700">Book a free discovery call. We'll chat about your child's needs and I'll explain how the process works. You can also call me directly on <a href="tel:+61421608819" className="text-navy-blue font-semibold hover:underline">0421 608 819</a> or email <a href="mailto:admin@shineandspeak.com.au" className="text-navy-blue font-semibold hover:underline">admin@shineandspeak.com.au</a>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: SERVICE AREA */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-navy-blue mb-6">Areas I serve in Sydney</h2>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-gray-700">
            <Link href="/speech-pathologist-arncliffe-nsw" className="hover:text-golden-amber">Arncliffe</Link><span className="text-gray-400">·</span>
            <Link href="/speech-pathologist-burwood-nsw" className="hover:text-golden-amber">Burwood</Link><span className="text-gray-400">·</span>
            <Link href="/speech-pathologist-hurstville-nsw" className="hover:text-golden-amber">Hurstville</Link><span className="text-gray-400">·</span>
            <Link href="/speech-pathologist-strathfield-nsw" className="hover:text-golden-amber">Strathfield</Link><span className="text-gray-400">·</span>
            <Link href="/speech-pathologist-canterbury-bankstown-nsw" className="hover:text-golden-amber">Canterbury-Bankstown</Link><span className="text-gray-400">·</span>
            <Link href="/speech-pathologist-campsie-nsw" className="hover:text-golden-amber">Campsie</Link><span className="text-gray-400">·</span>
            <Link href="/speech-pathologist-rockdale-nsw" className="hover:text-golden-amber">Rockdale</Link><span className="text-gray-400">·</span>
            <Link href="/speech-pathologist-kogarah-nsw" className="hover:text-golden-amber">Kogarah</Link><span className="text-gray-400">·</span>
            <Link href="/speech-pathologist-marrickville-nsw" className="hover:text-golden-amber">Marrickville</Link><span className="text-gray-400">·</span>
            <Link href="/speech-pathologist-inner-west-sydney-nsw" className="hover:text-golden-amber">Inner West Sydney</Link><span className="text-gray-400">·</span>
            <Link href="/speech-pathologist-st-george-nsw" className="hover:text-golden-amber">St George</Link><span className="text-gray-400">·</span>
            <Link href="/telehealth-speech-therapy-sydney-nsw" className="hover:text-golden-amber">Telehealth Australia-wide</Link>
          </div>
        </div>
      </section>

      {/* Section 13: FINAL CTA BAND */}
      <section className="py-20 bg-golden-amber text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to help your child thrive?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free discovery call to talk about your child's needs — no obligation, no pressure.
          </p>
          <div className="text-xl font-bold mb-8 flex flex-wrap justify-center gap-6">
            <a href="tel:+61421608819" className="hover:underline">📞 0421 608 819</a>
            <a href="mailto:admin@shineandspeak.com.au" className="hover:underline">✉️ admin@shineandspeak.com.au</a>
          </div>
          {/* REPLACE: Swap /contact for your Calendly/TidyCal booking URL */}
          <Link href="/contact" className="inline-block bg-navy-blue text-white px-10 py-4 rounded-md font-bold text-xl hover:bg-blue-900 transition shadow-xl">
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </main>
  );
}
