import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Telehealth Speech Therapy Australia | Shine and Speak',
  description:
    'Online speech therapy via telehealth for children and adults anywhere in Australia. Flexible, evidence-based sessions. NDIS, Medicare & private pay accepted.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/telehealth-speech-therapy-sydney-nsw',
  },
  openGraph: {
    title: 'Telehealth Speech Therapy Australia | Shine and Speak',
    description: 'Online speech therapy via telehealth for children and adults anywhere in Australia. Flexible, evidence-based sessions. NDIS, Medicare & private pay accepted.',
    url: 'https://www.shineandspeak.com.au/telehealth-speech-therapy-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Telehealth Speech Therapy', href: '/telehealth-speech-therapy-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-[#1B365D] mt-8 mb-4">Telehealth Speech Therapy</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
