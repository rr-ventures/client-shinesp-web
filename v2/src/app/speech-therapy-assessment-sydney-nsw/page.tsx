import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Speech Therapy Assessments Sydney NSW | Shine and Speak',
  description:
    'Comprehensive speech pathology assessments in Sydney. Home, school, or telehealth. Detailed reports with clear recommendations. NDIS, Medicare & private pay.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/speech-therapy-assessment-sydney-nsw',
  },
  openGraph: {
    title: 'Speech Therapy Assessments Sydney NSW | Shine and Speak',
    description: 'Comprehensive speech pathology assessments in Sydney. Home, school, or telehealth. Detailed reports with clear recommendations. NDIS, Medicare & private pay.',
    url: 'https://www.shineandspeak.com.au/speech-therapy-assessment-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Speech Therapy Assessment in Sydney', href: '/speech-therapy-assessment-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-[#1B365D] mt-8 mb-4">Speech Therapy Assessment in Sydney</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
