import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Cognitive Communication Therapy Sydney | Shine and Speak',
  description:
    'Speech therapy for cognitive-communication difficulties after brain injury or neurological change. Mobile & telehealth in Sydney. NDIS, Medicare & private pay.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/speech-therapy-cognitive-communication-sydney-nsw',
  },
  openGraph: {
    title: 'Cognitive Communication Therapy Sydney | Shine and Speak',
    description: 'Speech therapy for cognitive-communication difficulties after brain injury or neurological change. Mobile & telehealth in Sydney. NDIS, Medicare & private pay.',
    url: 'https://www.shineandspeak.com.au/speech-therapy-cognitive-communication-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Cognitive-Communication Speech Therapy in Sydney', href: '/speech-therapy-cognitive-communication-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-navy-900 mt-8 mb-4">Cognitive-Communication Speech Therapy in Sydney</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
