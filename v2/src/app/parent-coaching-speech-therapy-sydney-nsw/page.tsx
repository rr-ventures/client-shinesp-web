import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Parent Coaching Speech Therapy Sydney | Shine and Speak',
  description:
    'Parent and carer coaching in Sydney to support your child\'s communication between therapy sessions. Practical strategies for home, school, and everyday life.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/parent-coaching-speech-therapy-sydney-nsw',
  },
  openGraph: {
    title: 'Parent Coaching Speech Therapy Sydney | Shine and Speak',
    description: 'Parent and carer coaching in Sydney to support your child\'s communication between therapy sessions. Practical strategies for home, school, and everyday life.',
    url: 'https://www.shineandspeak.com.au/parent-coaching-speech-therapy-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Parent Coaching for Speech Therapy in Sydney', href: '/parent-coaching-speech-therapy-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-navy-900 mt-8 mb-4">Parent Coaching for Speech Therapy in Sydney</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
