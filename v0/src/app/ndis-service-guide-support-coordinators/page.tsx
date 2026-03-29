import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, SITE_URL, PHONE_DISPLAY, EMAIL } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'NDIS Service Guide for Support Coordinators',
  description:
    'Download the Shine and Speak NDIS service guide for support coordinators. Referral process, service agreements, reporting, and contact details for speech pathology in Sydney.',
  alternates: { canonical: '/ndis-service-guide-support-coordinators' },
  openGraph: {
    title: 'NDIS Service Guide for Support Coordinators | Shine and Speak',
    description:
      'NDIS service guide for support coordinators. Referral process, service agreements, reporting, and contact information for Shine and Speak speech pathology.',
    url: '/ndis-service-guide-support-coordinators',
  },
};

export default function NdisServiceGuidePage() {
  return (
    <article>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'NDIS Speech Therapy', url: `${SITE_URL}/ndis-speech-therapy-sydney-nsw` },
          { name: 'Service Guide for Support Coordinators', url: `${SITE_URL}/ndis-service-guide-support-coordinators` },
        ])}
      />

      <nav className="bg-gray-50 py-3 border-b border-gray-200 text-sm" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 text-gray-500">
          <Link href="/" className="hover:text-[#1B365D]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/ndis-speech-therapy-sydney-nsw" className="hover:text-[#1B365D]">NDIS Speech Therapy</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1B365D]">Service Guide for Support Coordinators</span>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6">
          NDIS Service Guide for Support Coordinators
        </h1>

        <div className="bg-[#F0F4F8] border-l-4 border-[#E8A84C] p-6 rounded-r-xl mb-10">
          <p className="text-gray-700 font-semibold mb-1">Shine and Speak — NDIS Registered Provider</p>
          <p className="text-gray-600 text-sm">
            NDIS Provider No: {/* PLACEHOLDER: NDIS Provider Number */}<em>coming soon</em><br />
            Phone: <a href="tel:0421608819" className="underline">{PHONE_DISPLAY}</a><br />
            Email: <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a>
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1B365D] mb-4">About our service</h2>
          <p className="text-gray-700 leading-relaxed">
            Shine and Speak is a mobile and telehealth speech pathology service based in Sydney&apos;s Inner West. We provide high-quality, NDIS-registered speech therapy for children and adults across the Sydney metro area and Australia-wide via telehealth. We work with participants across a wide range of communication needs including autism spectrum disorder, language delay, speech sounds, stuttering, and AAC.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1B365D] mb-4">Referral process</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>Submit an online referral via our <Link href="/refer-a-client" className="text-[#1B365D] underline">referral form</Link> or call <a href="tel:0421608819" className="text-[#1B365D] underline">{PHONE_DISPLAY}</a></li>
            <li>We aim to respond within 24 business hours</li>
            <li>We will contact the participant or their family to arrange an initial appointment</li>
            <li>A service agreement will be sent for completion before the first session</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1B365D] mb-4">Management types accepted</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Self-managed</li>
            <li>Plan-managed</li>
            <li>NDIA-managed (Agency-managed)</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1B365D] mb-4">Reporting and documentation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We provide detailed progress reports, goal attainment updates, and plan review summaries. Reports can be provided at agreed milestones or at your request for plan reviews. Learn more about our{' '}
            <Link href="/speech-therapy-reports-sydney-nsw" className="text-[#1B365D] underline">speech therapy report writing services</Link>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1B365D] mb-4">Service areas and delivery</h2>
          <p className="text-gray-700 leading-relaxed">
            Mobile delivery within 30 minutes of Arncliffe (Inner West Sydney). Telehealth available Australia-wide. School-based therapy coordinated with education settings.
          </p>
        </section>

        {/* PLACEHOLDER: Downloadable PDF service guide */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center mb-12">
          {/* PLACEHOLDER: Upload and link the PDF service guide for coordinators to download */}
          <p className="text-gray-500 font-semibold mb-2">PDF service guide — coming soon</p>
          <p className="text-gray-400 text-sm">A downloadable PDF with our full service information, referral pathway, and pricing will be available here.</p>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-sm italic">
            <Link href="/about" className="underline hover:text-[#1B365D]">Written by a Certified Practising Speech Pathologist</Link>.
            Last reviewed March 2026.
          </p>
        </div>
      </div>

      <section className="py-16 bg-[#1B365D] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to refer a client?</h2>
          <Link href="/refer-a-client" className="inline-block bg-[#E8A84C] text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-amber-600 transition">
            Submit a Referral →
          </Link>
        </div>
      </section>
    </article>
  );
}
