import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Speech Therapy Reports Sydney NSW | Shine and Speak',
  description:
    'Detailed speech pathology reports for NDIS plans, school applications, and clinical handovers. Sydney — mobile & telehealth sessions. Medicare and NDIS eligible.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/speech-therapy-reports-sydney-nsw',
  },
  openGraph: {
    title: 'Speech Therapy Reports Sydney NSW | Shine and Speak',
    description: 'Detailed speech pathology reports and recommendations for NDIS plans, school applications, and clinical handovers. Sydney — mobile & telehealth. Medicare eligible.',
    url: 'https://www.shineandspeak.com.au/speech-therapy-reports-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Speech Therapy Reports in Sydney', href: '/speech-therapy-reports-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-[#1B365D] mt-8 mb-4">Speech Therapy Reports in Sydney</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
