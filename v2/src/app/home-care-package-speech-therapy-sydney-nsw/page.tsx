import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Home Care Package Speech Therapy Sydney | Shine and Speak',
  description:
    'Speech therapy for Home Care Package (HCP) participants in Sydney. Mobile sessions delivered to your home. Supporting older Australians to communicate well.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/home-care-package-speech-therapy-sydney-nsw',
  },
  openGraph: {
    title: 'Home Care Package Speech Therapy Sydney | Shine and Speak',
    description: 'Speech therapy for Home Care Package (HCP) participants in Sydney. Mobile sessions delivered to your home. Supporting older Australians to communicate well.',
    url: 'https://www.shineandspeak.com.au/home-care-package-speech-therapy-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Home Care Package Speech Therapy in Sydney', href: '/home-care-package-speech-therapy-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-[#1B365D] mt-8 mb-4">Home Care Package Speech Therapy in Sydney</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
