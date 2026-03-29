import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ReferralForm from '@/components/ReferralForm';
import { breadcrumbSchema, SITE_URL, PHONE_DISPLAY } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Refer a Client — NDIS Support Coordinators',
  description:
    'Refer an NDIS participant to Shine and Speak speech pathology in Sydney. Fast 24-hour response, all management types accepted. Mobile and telehealth delivery.',
  alternates: { canonical: '/refer-a-client' },
  openGraph: {
    title: 'Refer a Client | Shine and Speak Speech Pathology',
    description:
      'Refer an NDIS participant to Shine and Speak. Fast 24-hour response, all management types accepted. Mobile and telehealth delivery Sydney.',
    url: '/refer-a-client',
  },
};

export default function ReferAClientPage() {
  return (
    <article>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Refer a Client', url: `${SITE_URL}/refer-a-client` },
        ])}
      />

      <nav className="bg-gray-50 py-3 border-b border-gray-200 text-sm" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 text-gray-500">
          <Link href="/" className="hover:text-[#1B365D]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1B365D]">Refer a Client</span>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6">Refer a Client</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl">
          Submit a referral online and we&apos;ll be in touch within 24 hours. We work with NDIS support coordinators, plan managers, and allied health teams across Sydney.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="bg-[#F0F4F8] p-6 rounded-xl">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-bold text-[#1B365D] mb-1">24-hour response</h3>
            <p className="text-sm text-gray-600">We aim to respond to all referrals within one business day.</p>
          </div>
          <div className="bg-[#F0F4F8] p-6 rounded-xl">
            <div className="text-2xl mb-2">📋</div>
            <h3 className="font-bold text-[#1B365D] mb-1">All management types</h3>
            <p className="text-sm text-gray-600">Self-managed, plan-managed, and NDIA-managed plans all accepted.</p>
          </div>
          <div className="bg-[#F0F4F8] p-6 rounded-xl">
            <div className="text-2xl mb-2">📄</div>
            <h3 className="font-bold text-[#1B365D] mb-1">Detailed reporting</h3>
            <p className="text-sm text-gray-600">Progress reports and plan review summaries provided.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1B365D] mb-6">Referral form</h2>
            <ReferralForm />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1B365D] mb-6">Prefer to call?</h2>
            <p className="text-gray-600 mb-4">
              Call us directly to discuss a referral or ask questions about our service.
            </p>
            <a href="tel:0421608819" className="block text-2xl font-bold text-[#1B365D] hover:text-[#E8A84C] transition mb-6">
              📞 {PHONE_DISPLAY}
            </a>
            <p className="text-gray-600 mb-4">
              Learn more about our{' '}
              <Link href="/ndis-speech-therapy-sydney-nsw" className="text-[#1B365D] underline">NDIS speech therapy services</Link>{' '}
              and{' '}
              <Link href="/speech-therapy-reports-sydney-nsw" className="text-[#1B365D] underline">reporting and documentation</Link>.
            </p>
            <p className="text-gray-600">
              Download our{' '}
              <Link href="/ndis-service-guide-support-coordinators" className="text-[#1B365D] underline">NDIS service guide for support coordinators</Link>.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-4 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            <Link href="/about" className="underline hover:text-[#1B365D]">Written by a Certified Practising Speech Pathologist</Link>
          </p>
        </div>
      </div>
    </article>
  );
}
