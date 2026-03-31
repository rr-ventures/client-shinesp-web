import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'How Speech Therapy Works | Shine and Speak Sydney',
  description:
    'Learn how speech therapy works at Shine and Speak. From free discovery call through assessment to therapy plan. Mobile & telehealth in Inner West Sydney.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/how-it-works',
  },
  openGraph: {
    title: 'How Speech Therapy Works | Shine and Speak Sydney',
    description: 'Learn how speech therapy works at Shine and Speak. From your free discovery call through assessment to your personalised therapy plan. Mobile & telehealth Sydney.',
    url: 'https://www.shineandspeak.com.au/how-it-works',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'How Speech Therapy Works', href: '/how-it-works' }]} />
      <h1 className="text-4xl font-bold text-[#1B365D] mt-8 mb-4">How Speech Therapy Works</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
