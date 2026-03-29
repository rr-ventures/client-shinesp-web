import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Speech Pathologist Inner West Sydney | Shine and Speak',
  description:
    'Mobile speech therapy across Inner West Sydney. Home, school & telehealth. NDIS, Medicare & private. Bilingual English & Mandarin. Book a free discovery call.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/speech-pathologist-inner-west-sydney-nsw',
  },
  openGraph: {
    title: 'Speech Pathologist Inner West Sydney | Shine and Speak',
    description: 'Mobile speech therapy across Inner West Sydney. Home, school & telehealth. NDIS, Medicare & private. Bilingual English & Mandarin. Book a free discovery call.',
    url: 'https://www.shineandspeak.com.au/speech-pathologist-inner-west-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Speech Pathologist in Inner West Sydney', href: '/speech-pathologist-inner-west-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-navy-900 mt-8 mb-4">Speech Pathologist in Inner West Sydney</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
