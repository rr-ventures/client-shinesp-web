import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Literacy Speech Therapy Sydney NSW | Shine and Speak',
  description:
    'Speech therapy for literacy difficulties in Sydney. Supporting reading, writing, and spelling. Mobile, telehealth & school-based. NDIS & Medicare. Inner West.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/speech-therapy-literacy-sydney-nsw',
  },
  openGraph: {
    title: 'Literacy Speech Therapy Sydney NSW | Shine and Speak',
    description: 'Speech therapy for literacy difficulties in Sydney. Supporting reading, writing, and spelling. Mobile, telehealth & school-based. NDIS & Medicare. Inner West.',
    url: 'https://www.shineandspeak.com.au/speech-therapy-literacy-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Speech Therapy for Literacy in Sydney', href: '/speech-therapy-literacy-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-[#1B365D] mt-8 mb-4">Speech Therapy for Literacy in Sydney</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
