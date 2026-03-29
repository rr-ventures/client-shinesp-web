import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Speech Therapy for Autism Sydney NSW | Shine and Speak",
  description:
    "Personalised speech therapy for children with autism and ASD in Sydney. Mobile, telehealth & school-based. NDIS & Medicare. Bilingual English & Mandarin.",
  alternates: {
    canonical: "https://shineandspeak.com.au/speech-therapy-autism-sydney-nsw",
  },
  openGraph: {
    title: "Speech Therapy for Autism Sydney NSW | Shine and Speak",
    description:
      "Personalised speech therapy for children with autism and ASD in Sydney. Mobile, telehealth & school-based. NDIS & Medicare. Bilingual English & Mandarin.",
    url: "https://shineandspeak.com.au/speech-therapy-autism-sydney-nsw",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Speech Therapy for Autism Spectrum Disorder",
  name: "Autism Speech Therapy Sydney",
  description:
    "Personalised, strengths-based speech therapy for children on the autism spectrum in Sydney's Inner West. Mobile, school-based, and telehealth delivery.",
  provider: {
    "@type": "Organization",
    name: "Shine and Speak",
    url: "https://shineandspeak.com.au",
  },
  areaServed: {
    "@type": "City",
    name: "Sydney",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://shineandspeak.com.au/contact",
  },
};

export default function AutismPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/paediatric-speech-therapy-sydney-nsw" },
          { name: "Speech Therapy for Autism", href: "/speech-therapy-autism-sydney-nsw" },
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* HTML Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
          <Link href="/">Home</Link> &rsaquo;{" "}
          <Link href="/paediatric-speech-therapy-sydney-nsw">Services</Link> &rsaquo;{" "}
          Speech Therapy for Autism
        </nav>

        <h1 className="text-4xl font-bold text-navy-blue mb-6">
          Speech Therapy for Autism and ASD in Sydney
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          I provide personalised, strengths-based speech therapy for children on the autism spectrum in Sydney's Inner West and surrounds. I focus on building communication skills that help your child connect with others, express their needs, and participate more fully in everyday life — at home, at school, and in the community.
        </p>

        {/* Trust signals */}
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-navy-blue bg-blue-50 p-4 rounded-lg mb-10">
          <span>✓ CPSP Certified</span>
          <span>✓ NDIS Registered</span>
          <span>✓ Medicare Provider</span>
          <span>✓ Bilingual English & Mandarin</span>
        </div>

        <h2 className="text-3xl font-bold text-navy-blue mb-4">What is autism spectrum disorder?</h2>
        <p className="text-gray-700 mb-4">
          Autism is a neurodevelopmental condition that affects how a person communicates, interacts with others, and experiences the world. Every child on the spectrum is different — some may have difficulty with spoken language, others may find social communication challenging, and some may benefit from alternative communication methods like AAC. There&apos;s no single approach that works for everyone, which is why therapy needs to be tailored to your child&apos;s individual strengths, interests, and goals.
        </p>
        <p className="text-gray-700 mb-8">
          For families wanting to learn more, <a href="https://raisingchildren.net.au" target="_blank" rel="noopener noreferrer" className="text-navy-blue font-semibold underline underline-offset-4 hover:text-golden-amber transition-colors">understanding how autism affects communication</a> is covered in depth by Raising Children Network, Australia&apos;s leading parenting resource.
        </p>

        <h2 className="text-3xl font-bold text-navy-blue mb-4">Signs to look for</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
          <li>Limited or no spoken language for their age</li>
          <li>Difficulty with back-and-forth conversation or taking turns</li>
          <li>Challenges understanding what others say or following instructions</li>
          <li>Repetitive use of words or phrases (echolalia)</li>
          <li>Trouble understanding social cues, body language, or facial expressions</li>
          <li>Preference for routine and difficulty with transitions</li>
        </ul>

        <h2 className="text-3xl font-bold text-navy-blue mb-4">How speech therapy helps</h2>
        <p className="text-gray-700 mb-8">
          I work on building vocabulary and sentence structure, developing social communication and play skills, exploring AAC options for children who need alternative ways to communicate, supporting transitions between activities and environments, and coaching parents and support workers on strategies they can use at home and school every day.
        </p>

        <h2 className="text-3xl font-bold text-navy-blue mb-4">What to expect in sessions</h2>
        <p className="text-gray-700 mb-8">
          Sessions are play-based, structured around your child's interests, and take place in familiar environments — your home, their school, or online. I also provide practical coaching for parents and support workers so communication strategies are used consistently across all settings. Learn more about <Link href="/how-it-works" className="text-golden-amber font-semibold hover:underline">how therapy works</Link> and what your first session looks like.
        </p>

        <h2 className="text-3xl font-bold text-navy-blue mb-4">Parent and support worker coaching</h2>
        <p className="text-gray-700 mb-8">
          I believe parents and support workers are essential partners in therapy. I provide practical coaching and training so you can confidently support your child's communication development between sessions — during mealtimes, play, outings, and transitions. This means your child gets more practice throughout the day, not just during therapy sessions.
        </p>

        <h2 className="text-3xl font-bold text-navy-blue mb-4">Funding your child's therapy</h2>
        <p className="text-gray-700 mb-8">
          Speech therapy for autism is covered under most NDIS plans and may be eligible for Medicare rebates with a referral from your GP. I accept all NDIS management types. Find out more about <Link href="/ndis-speech-therapy-sydney-nsw" className="text-golden-amber font-semibold hover:underline">NDIS funding for speech therapy</Link> or check the full list of <Link href="/fees" className="text-golden-amber font-semibold hover:underline">funding options and fees</Link>.
        </p>

        <h2 className="text-3xl font-bold text-navy-blue mb-4">Related conditions</h2>
        <p className="text-gray-700 mb-12">
          Many children on the autism spectrum also experience challenges with <Link href="/speech-therapy-adhd-sydney-nsw" className="text-navy-blue font-semibold hover:underline">attention and focus difficulties</Link>, <Link href="/speech-therapy-language-delay-sydney-nsw" className="text-navy-blue font-semibold hover:underline">expressive and receptive language delays</Link>, or may benefit from <Link href="/parent-coaching-speech-therapy-sydney-nsw" className="text-navy-blue font-semibold hover:underline">structured parent coaching programs</Link>. I work across all of these areas.
        </p>

        <p className="text-sm text-gray-500 italic">
          Written by Shine Teoh, Certified Practising Speech Pathologist.{" "}
          <Link href="/about" className="underline hover:text-golden-amber">Learn about Shine's qualifications</Link>.
        </p>
      </div>

      <section className="py-20 bg-golden-amber text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to help your child thrive?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free discovery call to talk about your child's needs — no obligation, no pressure.
          </p>
          <Link href="/contact" className="inline-block bg-navy-blue text-white px-10 py-4 rounded-md font-bold text-xl hover:bg-blue-900 transition shadow-xl">
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </main>
  );
}
