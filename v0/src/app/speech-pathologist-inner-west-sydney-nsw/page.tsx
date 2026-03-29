import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Speech Pathologist Inner West Sydney NSW',
  description: 'Mobile speech pathologist serving Inner West Sydney. Home visits, school sessions and telehealth. NDIS, Medicare and private pay accepted. Bilingual English & Mandarin.',
  alternates: { canonical: '/speech-pathologist-inner-west-sydney-nsw' },
  openGraph: {
    title: 'Speech Pathologist Inner West Sydney NSW | Shine and Speak',
    description: 'Mobile speech pathologist serving Inner West Sydney. Home visits, school sessions and telehealth. NDIS, Medicare and private pay accepted. Bilingual English & Mandarin.',
    url: '/speech-pathologist-inner-west-sydney-nsw',
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://shineandspeak.com.au"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Areas",
      "item": "https://shineandspeak.com.au/speech-pathologist-inner-west-sydney-nsw"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Speech Pathologist Inner West Sydney",
      "item": "https://shineandspeak.com.au/speech-pathologist-inner-west-sydney-nsw"
    }
  ]
};

const serviceSchemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Speech Pathologist Inner West Sydney NSW",
  "description": "Mobile speech pathologist serving Inner West Sydney. Home visits, school sessions and telehealth. NDIS, Medicare and private pay accepted. Bilingual English & Mandarin.",
  "url": "https://shineandspeak.com.au/speech-pathologist-inner-west-sydney-nsw",
  "provider": {
    "@type": "MedicalBusiness",
    "name": "Shine and Speak",
    "url": "https://shineandspeak.com.au"
  },
  "areaServed": [
    "Inner West Sydney",
    "Burwood",
    "Hurstville",
    "Strathfield",
    "Canterbury-Bankstown",
    "Campsie",
    "Rockdale",
    "Kogarah",
    "Marrickville",
    "Arncliffe",
    "St George",
    "Sydney NSW",
    "Australia"
  ],
  "serviceType": "Mobile Speech Pathology",
  "availableLanguage": [
    "English",
    "Chinese"
  ]
};

export default function Page() {
  return (
    <article>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchemaData} />
      
      <nav className="bg-gray-50 py-3 border-b border-gray-200 text-sm" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 text-gray-500">
          <Link href="/" className="hover:text-[#112A46]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/speech-pathologist-inner-west-sydney-nsw" className="hover:text-[#112A46]">Areas</Link>
          <span className="mx-2">›</span>
          <span className="text-[#112A46]">Speech Pathologist Inner West Sydney</span>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#112A46] mb-6">Speech Pathologist Inner West Sydney NSW</h1>
        <div className="flex flex-wrap gap-6 text-sm font-serif font-medium text-[#112A46] mb-12 pb-8 border-b border-gray-200">
          <span>✓ CPSP Certified</span>
          <span>✓ NDIS Registered</span>
          <span>✓ Medicare Provider</span>
        </div>
        <div className="prose prose-lg max-w-none text-gray-700 mb-16">
          {/* PLACEHOLDER: Full page content coming soon */}
          <p>Content for this page is being developed. In the meantime, please <Link href="/contact" className="text-[#112A46] underline">contact us</Link> with your questions or <Link href="/book" className="text-[#112A46] underline">book a free discovery call</Link>.</p>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-sm italic">
            <Link href="/about" className="underline hover:text-[#112A46]">Written by a Certified Practising Speech Pathologist</Link>.
            Last reviewed March 2026.
          </p>
        </div>
      </div>
      <section className="py-16 bg-[#C89B66] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Book a free discovery call</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">Talk to our speech pathologist about your needs — no obligation.</p>
          <Link href="/book" className="inline-block bg-[#112A46] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#1a3f69] transition shadow-lg">
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </article>
  );
}
