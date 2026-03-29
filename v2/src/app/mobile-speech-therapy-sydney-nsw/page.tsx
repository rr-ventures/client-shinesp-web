import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Mobile Speech Therapy Sydney NSW | Shine and Speak',
  description:
    'Mobile speech therapy delivered to your home, school, or community in Sydney. No clinic needed. NDIS, Medicare & private. Inner West Sydney and surrounds.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/mobile-speech-therapy-sydney-nsw',
  },
  openGraph: {
    title: 'Mobile Speech Therapy Sydney NSW | Shine and Speak',
    description: 'Mobile speech therapy delivered to your home, school, or community in Sydney. No clinic needed. NDIS, Medicare & private. Inner West Sydney and surrounds.',
    url: 'https://www.shineandspeak.com.au/mobile-speech-therapy-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Mobile Speech Therapy in Sydney', href: '/mobile-speech-therapy-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-navy-900 mt-8 mb-4">Mobile Speech Therapy in Sydney</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
