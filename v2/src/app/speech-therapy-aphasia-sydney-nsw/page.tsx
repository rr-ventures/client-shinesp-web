import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Aphasia Speech Therapy Sydney NSW | Shine and Speak',
  description:
    'Speech therapy for aphasia in Sydney following stroke or brain injury. Helping adults communicate and recover. Mobile & telehealth. NDIS, Medicare & private.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/speech-therapy-aphasia-sydney-nsw',
  },
  openGraph: {
    title: 'Aphasia Speech Therapy Sydney NSW | Shine and Speak',
    description: 'Speech therapy for aphasia in Sydney following stroke or brain injury. Helping adults communicate and recover. Mobile & telehealth. NDIS, Medicare & private.',
    url: 'https://www.shineandspeak.com.au/speech-therapy-aphasia-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Speech Therapy for Aphasia in Sydney', href: '/speech-therapy-aphasia-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-navy-900 mt-8 mb-4">Speech Therapy for Aphasia in Sydney</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
