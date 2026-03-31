import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Neuro Rehab Speech Therapy Sydney | Shine and Speak',
  description:
    'Speech therapy for neurological rehabilitation in Sydney. Supporting recovery of communication after stroke or injury. Mobile & telehealth. NDIS & Medicare.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/speech-therapy-neuro-rehab-sydney-nsw',
  },
  openGraph: {
    title: 'Neuro Rehab Speech Therapy Sydney | Shine and Speak',
    description: 'Speech therapy for neurological rehabilitation in Sydney. Supporting recovery of communication after stroke or injury. Mobile & telehealth. NDIS & Medicare.',
    url: 'https://www.shineandspeak.com.au/speech-therapy-neuro-rehab-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Neurological Rehab Speech Therapy in Sydney', href: '/speech-therapy-neuro-rehab-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-[#1B365D] mt-8 mb-4">Neurological Rehab Speech Therapy in Sydney</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
