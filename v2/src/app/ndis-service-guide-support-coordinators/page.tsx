import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'NDIS Service Guide for Support Coordinators | Shine and Speak',
  description:
    'Download the Shine and Speak NDIS service guide for support coordinators. Learn how to refer clients, what services are available, and how NDIS billing works.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/ndis-service-guide-support-coordinators',
  },
  openGraph: {
    title: 'NDIS Service Guide for Support Coordinators | Shine and Speak',
    description:
      'Download the Shine and Speak NDIS service guide for support coordinators. Learn how to refer clients, what services are available, and how NDIS billing works.',
    url: 'https://www.shineandspeak.com.au/ndis-service-guide-support-coordinators',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function NdisServiceGuidePage() {
  return (
    <main className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'For Support Coordinators', href: '/for-support-coordinators' },
            { label: 'NDIS Service Guide', href: '/ndis-service-guide-support-coordinators' },
          ]}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 mt-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-4">
            NDIS Service Guide for Support Coordinators
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto leading-relaxed">
            The Shine and Speak NDIS service guide for support coordinators is coming soon. It will include
            referral processes, service descriptions, NDIS billing categories, and reporting standards.
          </p>

          {/* PLACEHOLDER: Add downloadable PDF service guide here */}
          <div className="bg-gray-50 border-2 border-dashed border-[#E8A84C] rounded-xl p-8 mb-8">
            <p className="text-gray-500 font-medium mb-2">Service guide PDF — coming soon</p>
            {/* PLACEHOLDER: Upload service guide PDF and add download link here */}
          </div>

          <p className="text-gray-600 mb-6">
            In the meantime, you can{' '}
            <Link
              href="/refer-a-client"
              className="text-[#1B365D] underline underline-offset-2 hover:text-[#E8A84C]"
            >
              submit a referral directly
            </Link>{' '}
            or contact Shine to discuss your client&apos;s needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/refer-a-client"
              className="inline-flex items-center justify-center bg-[#E8A84C] text-[#1B365D] font-bold px-7 py-3 rounded-lg hover:bg-amber-400 transition-colors"
            >
              Refer a Client
            </Link>
            <a
              href="tel:0421608819"
              className="inline-flex items-center justify-center border-2 border-[#1B365D] text-[#1B365D] font-semibold px-7 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Call 0421 608 819
            </a>
          </div>
        </div>

        {/* Author attribution */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            Written by{' '}
            <Link href="/about" className="text-[#1B365D] hover:text-[#E8A84C] underline underline-offset-2">
              Shine Yin Teoh, Certified Practising Speech Pathologist
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
