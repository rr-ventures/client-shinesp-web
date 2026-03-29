import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'School-Based Speech Therapy Sydney | Shine and Speak',
  description:
    'Speech therapy delivered at your child\'s school or kindergarten in Sydney. Working directly with teachers and support staff. NDIS & Medicare. Inner West.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/school-based-speech-therapy-sydney-nsw',
  },
  openGraph: {
    title: 'School-Based Speech Therapy Sydney | Shine and Speak',
    description: 'Speech therapy delivered at your child\'s school or kindergarten in Sydney. Working directly with teachers and support staff. NDIS & Medicare. Inner West.',
    url: 'https://www.shineandspeak.com.au/school-based-speech-therapy-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'School-Based Speech Therapy in Sydney', href: '/school-based-speech-therapy-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-navy-900 mt-8 mb-4">School-Based Speech Therapy in Sydney</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
