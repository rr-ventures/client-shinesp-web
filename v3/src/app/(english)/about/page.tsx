import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About Shine Yin Teoh — Speech Pathologist Sydney",
  description:
    "Meet Shine Yin Teoh, Certified Practising Speech Pathologist. Mobile & telehealth in Inner West Sydney. Bilingual English & Mandarin. NDIS & Medicare registered.",
  alternates: {
    canonical: "https://shineandspeak.com.au/about",
  },
  openGraph: {
    title: "About Shine Yin Teoh — Speech Pathologist Sydney | Shine and Speak",
    description:
      "Meet Shine Yin Teoh, Certified Practising Speech Pathologist. Mobile & telehealth in Inner West Sydney. Bilingual English & Mandarin. NDIS & Medicare registered.",
    url: "https://shineandspeak.com.au/about",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shine Yin Teoh",
  jobTitle: "Certified Practising Speech Pathologist",
  email: "admin@shineandspeak.com.au",
  telephone: "+61421608819",
  worksFor: {
    "@type": "Organization",
    name: "Shine and Speak",
    url: "https://shineandspeak.com.au",
  },
  knowsLanguage: ["English", "Chinese"],
  sameAs: [
    "https://www.linkedin.com/company/shine-and-speak",
  ],
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* HTML Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
          <Link href="/">Home</Link> &rsaquo; About
        </nav>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <h1 className="text-4xl font-bold text-navy-blue mb-6">Meet Shine Yin Teoh</h1>

            {/* Mobile headshot */}
            <div className="bg-gray-200 aspect-square rounded-2xl flex items-center justify-center text-gray-500 text-center p-8 shadow-xl mb-8 md:hidden">
              {/* REPLACE: Professional headshot of Shine Yin Teoh, warm and approachable */}
              <img src="/v3/shine-headshot-1200x1200.webp" alt="Shine Yin Teoh, Certified Practising Speech Pathologist" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            <h2 className="text-3xl font-bold text-navy-blue mb-4">About me</h2>
            <p className="text-gray-700 mb-6">
              I'm Shine Yin Teoh, a Certified Practising Speech Pathologist. I started Shine and Speak because I believe every person deserves access to high-quality, personalised speech therapy that makes a genuine difference in their everyday life — not just therapy for the sake of therapy.
            </p>

            <h2 className="text-3xl font-bold text-navy-blue mb-4">My approach</h2>
            <p className="text-gray-700 mb-4">
              I take a client-centred, strengths-based approach. I start with what you or your child can already do, what matters to you, and what goals will make the biggest difference in daily life. I tailor every session to the individual — their interests, their strengths, and their real-world needs.
            </p>
            <p className="text-gray-700 mb-8">
              I'm a big believer in collaboration. I work closely with families, teachers, support coordinators, and other professionals to make sure therapy is consistent and coordinated across all environments.
            </p>

            <h2 className="text-3xl font-bold text-navy-blue mb-4">Qualifications</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
              <li>{/* PLACEHOLDER: Bachelor of Speech Pathology, [University name] */} Bachelor of Speech Pathology</li>
              <li>Certified Practising Member, Speech Pathology Australia (CPSP)</li>
              <li>NDIS Registered Provider {/* PLACEHOLDER: NDIS provider number */}</li>
              <li>Medicare Registered Provider</li>
              <li>{/* PLACEHOLDER: Training certifications e.g. Hanen, Sounds Write, Lidcombe Program */}</li>
            </ul>

            <h2 className="text-3xl font-bold text-navy-blue mb-4">Bilingual practice</h2>
            <p className="text-gray-700 mb-8">
              I provide speech therapy and assessments in English and Mandarin (普通话). Assessing a child in only one language can underestimate their true abilities. I ensure assessments are accurate, therapy is accessible, and communication with your family is clear. This is especially important for families who speak Mandarin at home but need therapy delivered in an English-speaking school environment.
            </p>
          </div>

          {/* Desktop sticky headshot */}
          <div className="hidden md:block">
            <div className="bg-gray-200 aspect-square rounded-2xl flex items-center justify-center text-gray-500 text-center p-8 shadow-xl sticky top-24">
              {/* REPLACE: Professional headshot of Shine Yin Teoh, warm and approachable */}
              <img src="/v3/shine-headshot-1200x1200.webp" alt="Shine Yin Teoh, Certified Practising Speech Pathologist" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* What I work with */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-navy-blue mb-6">What I work with</h2>
          <p className="text-gray-700 mb-4">
            I have experience working across a wide range of paediatric and adult communication needs, including:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <Link href="/speech-therapy-autism-sydney-nsw" className="flex items-center gap-2 text-navy-blue hover:text-golden-amber transition"><span>→</span> Autism spectrum disorder</Link>
            <Link href="/speech-therapy-adhd-sydney-nsw" className="flex items-center gap-2 text-navy-blue hover:text-golden-amber transition"><span>→</span> ADHD and attention difficulties</Link>
            <Link href="/speech-therapy-language-delay-sydney-nsw" className="flex items-center gap-2 text-navy-blue hover:text-golden-amber transition"><span>→</span> Language delay and disorders</Link>
            <Link href="/speech-therapy-speech-sounds-sydney-nsw" className="flex items-center gap-2 text-navy-blue hover:text-golden-amber transition"><span>→</span> Speech sound disorders</Link>
            <Link href="/speech-therapy-stuttering-sydney-nsw" className="flex items-center gap-2 text-navy-blue hover:text-golden-amber transition"><span>→</span> Stuttering and fluency difficulties</Link>
            <Link href="/speech-therapy-literacy-sydney-nsw" className="flex items-center gap-2 text-navy-blue hover:text-golden-amber transition"><span>→</span> Literacy and reading difficulties</Link>
          </div>
        </div>

        {/* Video placeholder */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-navy-blue mb-4">Hear from me directly</h2>
          <div className="bg-gray-200 aspect-video rounded-2xl flex items-center justify-center text-gray-500 text-center p-8 shadow-xl">
            {/* PLACEHOLDER: Embed therapist intro video — 1-2 minutes, filmed professionally. This is a critical E-E-A-T signal for Google. */}
            <span className="text-sm text-gray-400">[Placeholder: Therapist intro video — embed here]</span>
          </div>
        </div>

        {/* Personal background */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-navy-blue mb-4">Personal background</h2>
          <p className="text-gray-700">
            {/* PLACEHOLDER: Brief personal background — where she grew up, what drew her to speech pathology, something personal and human that builds connection. 2-3 sentences. */}
            [Placeholder: Add a brief personal background here — what drew you to speech pathology, your connection to the communities you serve, and something human that builds trust with families.]
          </p>
        </div>

        {/* Social media */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-navy-blue mb-4">Connect with me</h2>
          <div className="flex flex-wrap gap-4">
            {/* REPLACE: Add real LinkedIn URL */}
            <a href="https://www.linkedin.com/company/shine-and-speak" target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-navy-blue px-4 py-2 rounded-lg font-semibold hover:text-golden-amber transition text-sm">LinkedIn</a>
            {/* REPLACE: Add real Facebook URL */}
            <a href="https://www.facebook.com/shineandspeak" target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-navy-blue px-4 py-2 rounded-lg font-semibold hover:text-golden-amber transition text-sm">Facebook</a>
            {/* REPLACE: Add real Instagram URL */}
            <a href="https://www.instagram.com/shineandspeak" target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-navy-blue px-4 py-2 rounded-lg font-semibold hover:text-golden-amber transition text-sm">Instagram</a>
          </div>
        </div>

        <p className="text-sm text-gray-500 italic">
          Written by Shine Yin Teoh, Certified Practising Speech Pathologist.
        </p>
      </div>

      <section className="py-20 bg-golden-amber text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to help your child thrive?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free discovery call to talk about your child's needs.
          </p>
          <Link href="/contact" className="inline-block bg-navy-blue text-white px-10 py-4 rounded-md font-bold text-xl hover:bg-blue-900 transition shadow-xl">
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </main>
  );
}
