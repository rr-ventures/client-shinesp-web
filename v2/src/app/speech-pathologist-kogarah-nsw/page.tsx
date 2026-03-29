import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Speech Pathologist Kogarah NSW | Shine and Speak',
  description:
    'Mobile speech therapy in Kogarah, Sydney. Home visits, school-based, and telehealth. NDIS, Medicare & private. Bilingual English & Mandarin. Book a free call.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/speech-pathologist-kogarah-nsw',
  },
  openGraph: {
    title: 'Speech Pathologist Kogarah NSW | Shine and Speak',
    description: 'Mobile speech therapy in Kogarah, Sydney. Home visits, school-based, and telehealth. NDIS, Medicare & private. Bilingual English & Mandarin. Book a free call.',
    url: 'https://www.shineandspeak.com.au/speech-pathologist-kogarah-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Speech Pathologist in Kogarah', href: '/speech-pathologist-kogarah-nsw' }]} />
      <h1 className="text-4xl font-bold text-[#1B365D] mt-8 mb-4">Speech Pathologist in Kogarah</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
