import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Speech Pathologist Burwood NSW | Shine and Speak",
  description:
    "Mobile speech therapy in Burwood NSW. Home visits, school & telehealth. NDIS, Medicare & private. Bilingual English & Mandarin. Book a free discovery call.",
  alternates: {
    canonical: "https://shineandspeak.com.au/speech-pathologist-burwood-nsw",
  },
  openGraph: {
    title: "Speech Pathologist Burwood NSW | Shine and Speak",
    description:
      "Mobile speech therapy in Burwood NSW. Home visits, school & telehealth. NDIS, Medicare & private. Bilingual English & Mandarin. Book a free discovery call.",
    url: "https://shineandspeak.com.au/speech-pathologist-burwood-nsw",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Speech Pathology",
  name: "Speech Pathology in Burwood NSW",
  description:
    "Mobile speech therapy delivered to homes, schools, and kindergartens in Burwood, NSW. Specialising in children and adults. NDIS, Medicare, and private clients.",
  provider: {
    "@type": "Organization",
    name: "Shine and Speak",
    url: "https://shineandspeak.com.au",
  },
  areaServed: {
    "@type": "City",
    name: "Burwood",
    containedInPlace: {
      "@type": "State",
      name: "New South Wales",
    },
  },
};

export default function BurwoodPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Areas", href: "/speech-pathologist-inner-west-sydney-nsw" },
          { name: "Speech Pathologist Burwood", href: "/speech-pathologist-burwood-nsw" },
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* HTML Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
          <Link href="/">Home</Link> &rsaquo;{" "}
          <Link href="/speech-pathologist-inner-west-sydney-nsw">Areas</Link> &rsaquo;{" "}
          Speech Pathologist Burwood
        </nav>

        <h1 className="text-4xl font-bold text-navy-blue mb-6">Speech Pathologist in Burwood NSW</h1>
        <p className="text-lg text-gray-700 mb-4">
          Looking for a speech pathologist in Burwood? I provide mobile speech therapy for children and adults in Burwood NSW and surrounding suburbs. I travel to your home, your child&apos;s school, or local kindergarten — so there&apos;s no need to visit a clinic. I also offer telehealth sessions if that suits your family better.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Burwood is a vibrant, multicultural suburb in Sydney&apos;s Inner West, known for landmarks like Burwood Park and Westfield Burwood. I service families across Burwood and local schools and kindergartens, and also cover neighbouring Strathfield, Croydon, and Enfield. From Arncliffe, Burwood is a short 15-minute drive via the M5. Learn more about <a href="https://www.burwood.nsw.gov.au" target="_blank" rel="noopener noreferrer" className="text-navy-blue font-semibold underline underline-offset-4 hover:text-golden-amber transition-colors">the Burwood local community</a> via Burwood Council.
        </p>

        {/* Trust signals */}
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-navy-blue bg-blue-50 p-4 rounded-lg mb-10">
          <span>✓ CPSP Certified</span>
          <span>✓ NDIS Registered</span>
          <span>✓ Medicare Provider</span>
          <span>✓ Bilingual English & Mandarin</span>
        </div>

        <h2 className="text-3xl font-bold text-navy-blue mb-4">Services available in Burwood</h2>
        <p className="text-gray-700 mb-8">
          Speech therapy for <Link href="/speech-therapy-autism-sydney-nsw" className="text-navy-blue font-semibold hover:underline">children with autism spectrum disorder</Link>, ADHD, developmental delay, language delay, speech sounds, stuttering, literacy, and more. Adult speech therapy for aphasia, cognitive-communication, fluency, and neurological rehabilitation. I also provide <Link href="/speech-therapy-assessment-sydney-nsw" className="text-navy-blue font-semibold hover:underline">comprehensive speech and language assessments</Link> and detailed reports, and offer coaching for parents and support workers.
        </p>

        <h2 className="text-3xl font-bold text-navy-blue mb-4">How mobile therapy works in Burwood</h2>
        <p className="text-gray-700 mb-8">
          I bring everything needed for a full therapy session directly to your home or your child's school in Burwood. Sessions typically run 45–60 minutes. Parents and carers are welcome to observe and I'll coach you on strategies to use between sessions.
        </p>

        <h2 className="text-3xl font-bold text-navy-blue mb-4">Funding options</h2>
        <p className="text-gray-700 mb-8">
          NDIS registered (all management types), Medicare provider, private pay, Home Care Packages, DVA. Visit the <Link href="/fees" className="text-golden-amber font-semibold hover:underline">funding and fees page</Link> for full details on what's covered and current session rates.
        </p>

        <h2 className="text-3xl font-bold text-navy-blue mb-4">Languages</h2>
        <p className="text-gray-700 mb-10">
          I provide speech therapy and assessments in English and Mandarin (普通话). This means more accurate evaluation of your child's true language abilities for bilingual families.
        </p>

        <h2 className="text-3xl font-bold text-navy-blue mb-4">Nearby suburbs</h2>
        <p className="text-gray-700 mb-4">
          I also travel to the following areas near Burwood:
        </p>
        <div className="flex flex-wrap gap-3 mb-12">
          <Link href="/speech-pathologist-strathfield-nsw" className="bg-blue-50 text-navy-blue px-4 py-2 rounded-lg hover:text-golden-amber transition text-sm font-semibold">Strathfield</Link>
          <Link href="/speech-pathologist-canterbury-bankstown-nsw" className="bg-blue-50 text-navy-blue px-4 py-2 rounded-lg hover:text-golden-amber transition text-sm font-semibold">Canterbury-Bankstown</Link>
          <Link href="/speech-pathologist-campsie-nsw" className="bg-blue-50 text-navy-blue px-4 py-2 rounded-lg hover:text-golden-amber transition text-sm font-semibold">Campsie</Link>
          <Link href="/speech-pathologist-inner-west-sydney-nsw" className="bg-blue-50 text-navy-blue px-4 py-2 rounded-lg hover:text-golden-amber transition text-sm font-semibold">Inner West Sydney</Link>
          <Link href="/speech-pathologist-arncliffe-nsw" className="bg-blue-50 text-navy-blue px-4 py-2 rounded-lg hover:text-golden-amber transition text-sm font-semibold">Arncliffe</Link>
        </div>

        <p className="text-sm text-gray-500 italic">
          Written by Shine Yin Teoh, Certified Practising Speech Pathologist.{" "}
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
