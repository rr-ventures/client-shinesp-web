import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "NDIS Service Guide for Support Coordinators | Shine and Speak",
  description:
    "NDIS service guide for support coordinators referring clients for speech therapy in Sydney. Fast response, all management types, mobile & telehealth delivery.",
  alternates: {
    canonical: "https://shineandspeak.com.au/ndis-service-guide-support-coordinators",
  },
  openGraph: {
    title: "NDIS Service Guide for Support Coordinators | Shine and Speak",
    description:
      "NDIS service guide for support coordinators referring clients for speech therapy in Sydney. Fast response, all management types, mobile & telehealth delivery.",
    url: "https://shineandspeak.com.au/ndis-service-guide-support-coordinators",
  },
};

export default function NdisServiceGuidePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "NDIS Service Guide", href: "/ndis-service-guide-support-coordinators" },
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
          <Link href="/">Home</Link> &rsaquo; NDIS Service Guide for Support Coordinators
        </nav>

        <h1 className="text-4xl font-bold text-navy-blue mb-6">
          NDIS Service Guide for Support Coordinators
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Detailed service guide content coming soon. In the meantime, please <Link href="/refer-a-client" className="text-golden-amber font-semibold hover:underline">submit a referral</Link> directly or call me on <a href="tel:+61421608819" className="text-navy-blue font-semibold hover:underline">0421 608 819</a> to discuss your client&apos;s needs.
        </p>

        <div className="bg-blue-50 p-8 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-navy-blue mb-4">Quick reference</h2>
          <ul className="space-y-3 text-gray-700">
            <li><strong>NDIS Registration:</strong> Registered provider {/* PLACEHOLDER: NDIS registration number */}</li>
            <li><strong>Management types accepted:</strong> Self-managed, Plan-managed, NDIA-managed</li>
            <li><strong>Service categories:</strong> Improved Daily Living (Capacity Building)</li>
            <li><strong>Delivery:</strong> Mobile (home, school, community), Telehealth</li>
            <li><strong>Languages:</strong> English and Mandarin (普通话)</li>
            <li><strong>Response time:</strong> Within 24 hours of referral</li>
            <li><strong>ABN:</strong> {/* PLACEHOLDER: ABN */}</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link href="/refer-a-client" className="bg-golden-amber text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-600 transition shadow-lg">
            Refer a Client Now →
          </Link>
          <Link href="/ndis-speech-therapy-sydney-nsw" className="border-2 border-navy-blue text-navy-blue px-8 py-4 rounded-md font-bold text-lg hover:bg-navy-blue hover:text-white transition">
            NDIS Speech Therapy Information →
          </Link>
        </div>

        <p className="text-sm text-gray-500 italic mt-8">
          Written by Shine Teoh, Certified Practising Speech Pathologist.{" "}
          <Link href="/about" className="underline hover:text-golden-amber">Learn about Shine&apos;s qualifications</Link>.
        </p>
      </div>
    </main>
  );
}
