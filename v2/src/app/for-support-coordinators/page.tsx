import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'For Support Coordinators | Shine and Speak Sydney',
  description:
    'NDIS support coordinators — refer clients to Shine and Speak for speech therapy in Sydney. Fast response, clear reporting, all NDIS management types accepted.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/for-support-coordinators',
  },
  openGraph: {
    title: 'For Support Coordinators | Shine and Speak Sydney',
    description: 'NDIS support coordinators — refer clients to Shine and Speak for speech therapy in Sydney. Fast response, clear reporting, all NDIS management types accepted.',
    url: 'https://www.shineandspeak.com.au/for-support-coordinators',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Speech Therapy for Support Coordinators', href: '/for-support-coordinators' }]} />
      <h1 className="text-4xl font-bold text-navy-900 mt-8 mb-4">Speech Therapy for Support Coordinators</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
