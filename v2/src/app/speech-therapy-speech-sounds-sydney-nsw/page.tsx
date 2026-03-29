import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Speech Sounds Therapy Sydney NSW | Shine and Speak',
  description:
    'Speech therapy for speech sound disorders in Sydney. Helping children pronounce sounds clearly for school. Mobile, telehealth & school-based. NDIS & Medicare.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/speech-therapy-speech-sounds-sydney-nsw',
  },
  openGraph: {
    title: 'Speech Sounds Therapy Sydney NSW | Shine and Speak',
    description: 'Speech therapy for speech sound disorders in Sydney. Helping children pronounce sounds clearly for school and everyday life. Mobile, telehealth. NDIS & Medicare.',
    url: 'https://www.shineandspeak.com.au/speech-therapy-speech-sounds-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Speech Therapy for Speech Sounds in Sydney', href: '/speech-therapy-speech-sounds-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-navy-900 mt-8 mb-4">Speech Therapy for Speech Sounds in Sydney</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
