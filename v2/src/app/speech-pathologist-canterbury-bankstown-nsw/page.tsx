import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Speech Pathologist Canterbury-Bankstown | Shine and Speak',
  description:
    'Mobile speech therapy in Canterbury-Bankstown, Sydney. Home, school & telehealth. NDIS, Medicare & private. Bilingual English & Mandarin. Free discovery call.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/speech-pathologist-canterbury-bankstown-nsw',
  },
  openGraph: {
    title: 'Speech Pathologist Canterbury-Bankstown | Shine and Speak',
    description: 'Mobile speech therapy in Canterbury-Bankstown, Sydney. Home, school & telehealth. NDIS, Medicare & private. Bilingual English & Mandarin. Free discovery call.',
    url: 'https://www.shineandspeak.com.au/speech-pathologist-canterbury-bankstown-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Speech Pathologist in Canterbury-Bankstown', href: '/speech-pathologist-canterbury-bankstown-nsw' }]} />
      <h1 className="text-4xl font-bold text-navy-900 mt-8 mb-4">Speech Pathologist in Canterbury-Bankstown</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
