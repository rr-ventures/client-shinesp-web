import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Developmental Delay Speech Therapy Sydney | Shine and Speak',
  description:
    'Speech therapy for children with developmental delay in Sydney. Personalised, strengths-based support. Mobile, telehealth & school-based. NDIS & Medicare.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/speech-therapy-developmental-delay-sydney-nsw',
  },
  openGraph: {
    title: 'Developmental Delay Speech Therapy Sydney | Shine and Speak',
    description: 'Speech therapy for children with developmental delay in Sydney. Personalised, strengths-based support. Mobile, telehealth & school-based. NDIS & Medicare.',
    url: 'https://www.shineandspeak.com.au/speech-therapy-developmental-delay-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Speech Therapy for Developmental Delay in Sydney', href: '/speech-therapy-developmental-delay-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-[#1B365D] mt-8 mb-4">Speech Therapy for Developmental Delay in Sydney</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
