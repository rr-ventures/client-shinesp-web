import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Medicare Speech Therapy Sydney NSW | Shine and Speak',
  description:
    'Medicare rebates for speech therapy in Sydney with a GP referral (Chronic Disease Management Plan). Mobile & telehealth. Book a free discovery call today.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/medicare-speech-therapy-sydney-nsw',
  },
  openGraph: {
    title: 'Medicare Speech Therapy Sydney NSW | Shine and Speak',
    description: 'Medicare rebates for speech therapy in Sydney with a GP referral (Chronic Disease Management Plan). Mobile & telehealth. Book a free discovery call today.',
    url: 'https://www.shineandspeak.com.au/medicare-speech-therapy-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Medicare Speech Therapy in Sydney', href: '/medicare-speech-therapy-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-[#1B365D] mt-8 mb-4">Medicare Speech Therapy in Sydney</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
