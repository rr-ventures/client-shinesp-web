import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Private Speech Therapy Sydney NSW | Shine and Speak',
  description:
    'Private speech therapy in Sydney for children and adults. Flexible scheduling, mobile & telehealth. No referral needed for private clients. Book a free call.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/private-speech-therapy-sydney-nsw',
  },
  openGraph: {
    title: 'Private Speech Therapy Sydney NSW | Shine and Speak',
    description: 'Private speech therapy in Sydney for children and adults. Flexible scheduling, mobile & telehealth. No referral needed for private clients. Book a free call.',
    url: 'https://www.shineandspeak.com.au/private-speech-therapy-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Private Speech Therapy in Sydney', href: '/private-speech-therapy-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-[#1B365D] mt-8 mb-4">Private Speech Therapy in Sydney</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
