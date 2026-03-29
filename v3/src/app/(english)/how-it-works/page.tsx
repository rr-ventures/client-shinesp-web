import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "How Speech Therapy Works | Shine and Speak Sydney",
  description:
    "How speech therapy works with Shine and Speak in Sydney. Book a free discovery call, assessment, then personalised therapy plan. Mobile & telehealth available.",
  alternates: {
    canonical: "https://shineandspeak.com.au/how-it-works",
  },
  openGraph: {
    title: "How Speech Therapy Works | Shine and Speak Sydney",
    description: "How speech therapy works with Shine and Speak in Sydney. Book a free discovery call, assessment, then personalised therapy plan. Mobile & telehealth available.",
    url: "https://shineandspeak.com.au/how-it-works",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "How Speech Therapy Works",
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
          { name: "Home", href: "/" },
          { name: "How Speech Therapy Works", href: "/how-it-works" },
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
          <Link href="/">Home</Link> &rsaquo;{" "}
          <Link href="/">Home</Link> &rsaquo;{" "}
          How Speech Therapy Works
        </nav>

        <h1 className="text-4xl font-bold text-navy-blue mb-6">How Speech Therapy Works</h1>
        <p className="text-lg text-gray-700 mb-8">Content coming soon — we are building out this page. In the meantime, please <Link href="/contact" className="text-golden-amber font-semibold hover:underline">book a free discovery call</Link> or call <a href="tel:+61421608819" className="text-navy-blue font-semibold hover:underline">0421 608 819</a>.</p>

        <p className="text-sm text-gray-500 italic">Written by Shine Yin Teoh, Certified Practising Speech Pathologist. <Link href="/about" className="underline hover:text-golden-amber">Learn about Shine&apos;s qualifications</Link>.</p>
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
