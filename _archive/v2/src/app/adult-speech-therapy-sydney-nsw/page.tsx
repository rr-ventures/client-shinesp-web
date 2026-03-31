import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Adult Speech Therapy Sydney NSW | Shine and Speak',
  description:
    'Adult speech therapy in Sydney for aphasia, fluency, cognitive-communication, and neurological rehabilitation. Mobile & telehealth. NDIS, Medicare & private.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/adult-speech-therapy-sydney-nsw',
  },
  openGraph: {
    title: 'Adult Speech Therapy Sydney NSW | Shine and Speak',
    description: 'Adult speech therapy in Sydney for aphasia, fluency, cognitive-communication, and neurological rehabilitation. Mobile & telehealth. NDIS, Medicare & private.',
    url: 'https://www.shineandspeak.com.au/adult-speech-therapy-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Adult Speech Therapy in Sydney', href: '/adult-speech-therapy-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-[#1B365D] mt-8 mb-4">Adult Speech Therapy in Sydney</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
