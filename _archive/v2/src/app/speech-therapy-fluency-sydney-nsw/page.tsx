import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Fluency Speech Therapy Sydney NSW | Shine and Speak',
  description:
    'Evidence-based fluency therapy for stuttering and other fluency disorders in Sydney. Adults and children. Mobile & telehealth. NDIS, Medicare & private pay.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/speech-therapy-fluency-sydney-nsw',
  },
  openGraph: {
    title: 'Fluency Speech Therapy Sydney NSW | Shine and Speak',
    description: 'Evidence-based fluency therapy for stuttering and other fluency disorders in Sydney. Adults and children. Mobile & telehealth. NDIS, Medicare & private pay.',
    url: 'https://www.shineandspeak.com.au/speech-therapy-fluency-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Speech Therapy for Fluency in Sydney', href: '/speech-therapy-fluency-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-[#1B365D] mt-8 mb-4">Speech Therapy for Fluency in Sydney</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
