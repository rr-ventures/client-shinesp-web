import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'DVA Speech Therapy Sydney NSW | Shine and Speak',
  description:
    'Speech therapy for DVA card holders in Sydney. Supporting veterans and their communication needs. Mobile & telehealth sessions. Book a free discovery call.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/dva-speech-therapy-sydney-nsw',
  },
  openGraph: {
    title: 'DVA Speech Therapy Sydney NSW | Shine and Speak',
    description: 'Speech therapy for DVA card holders in Sydney. Supporting veterans and their communication needs. Mobile & telehealth sessions. Book a free discovery call.',
    url: 'https://www.shineandspeak.com.au/dva-speech-therapy-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'DVA Speech Therapy in Sydney', href: '/dva-speech-therapy-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-navy-900 mt-8 mb-4">DVA Speech Therapy in Sydney</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
