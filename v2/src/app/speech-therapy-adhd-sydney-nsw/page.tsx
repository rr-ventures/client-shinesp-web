import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Speech Therapy for ADHD Sydney NSW | Shine and Speak',
  description:
    'Speech therapy for children with ADHD in Sydney. I help develop listening, focus, and social communication skills. Mobile, telehealth & NDIS. Inner West Sydney.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/speech-therapy-adhd-sydney-nsw',
  },
  openGraph: {
    title: 'Speech Therapy for ADHD Sydney NSW | Shine and Speak',
    description: 'Speech therapy for children with ADHD in Sydney. I help develop listening, focus, and social communication skills. Mobile, telehealth & NDIS. Inner West Sydney.',
    url: 'https://www.shineandspeak.com.au/speech-therapy-adhd-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Speech Therapy for ADHD in Sydney', href: '/speech-therapy-adhd-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-navy-900 mt-8 mb-4">Speech Therapy for ADHD in Sydney</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
