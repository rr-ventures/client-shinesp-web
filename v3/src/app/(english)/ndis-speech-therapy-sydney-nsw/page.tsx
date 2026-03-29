import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "NDIS Speech Therapy Sydney NSW | Shine and Speak",
  description:
    "NDIS speech therapy in Sydney with registered provider Shine and Speak. All management types. Mobile, telehealth & school-based. Inner West Sydney.",
  alternates: {
    canonical: "https://shineandspeak.com.au/ndis-speech-therapy-sydney-nsw",
  },
  openGraph: {
    title: "NDIS Speech Therapy Sydney NSW | Shine and Speak",
    description: "NDIS speech therapy in Sydney with registered provider Shine and Speak. All management types. Mobile, telehealth & school-based. Inner West Sydney.",
    url: "https://shineandspeak.com.au/ndis-speech-therapy-sydney-nsw",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "NDIS Speech Therapy Sydney NSW",
  provider: {
    "@type": "Organization",
    name: "Shine and Speak",
    url: "https://shineandspeak.com.au",
  },
  areaServed: "Sydney, NSW",
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Funding & Fees", href: "/ndis-speech-therapy-sydney-nsw" },
          { name: "NDIS Speech Therapy Sydney NSW", href: "/ndis-speech-therapy-sydney-nsw" },
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
          <Link href="/">Home</Link> &rsaquo;{" "}
          <Link href="/ndis-speech-therapy-sydney-nsw">Funding & Fees</Link> &rsaquo;{" "}
          NDIS Speech Therapy Sydney NSW
        </nav>

        <h1 className="text-4xl font-bold text-navy-blue mb-6">NDIS Speech Therapy Sydney NSW</h1>
        <p className="text-lg text-gray-700 mb-8">Content coming soon — we are building out this page. In the meantime, please <Link href="/contact" className="text-golden-amber font-semibold hover:underline">book a free discovery call</Link> or call <a href="tel:+61421608819" className="text-navy-blue font-semibold hover:underline">0421 608 819</a>.</p>

        <p className="text-sm text-gray-500 italic">Written by Shine Teoh, Certified Practising Speech Pathologist. <Link href="/about" className="underline hover:text-golden-amber">Learn about Shine&apos;s qualifications</Link>.</p>
      </div>

      <section className="py-16 bg-golden-amber text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg mb-6">Book a free discovery call — no obligation, no pressure.</p>
          <Link href="/contact" className="inline-block bg-navy-blue text-white px-8 py-3 rounded-md font-bold hover:bg-blue-900 transition">
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </main>
  );
}
