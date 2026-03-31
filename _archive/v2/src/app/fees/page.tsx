import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Speech Therapy Fees & Pricing Sydney | Shine and Speak',
  description:
    'Speech therapy fees and pricing for NDIS, Medicare, and private clients in Sydney. Transparent rates for home, school, and telehealth. Book a free discovery call.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/fees',
  },
  openGraph: {
    title: 'Speech Therapy Fees & Pricing Sydney | Shine and Speak',
    description: 'Speech therapy fees and pricing for NDIS, Medicare, and private clients in Sydney. Transparent rates for home, school, and telehealth sessions. Book a free call.',
    url: 'https://www.shineandspeak.com.au/fees',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Speech Therapy Fees and Pricing', href: '/fees' }]} />
      <h1 className="text-4xl font-bold text-[#1B365D] mt-8 mb-4">Speech Therapy Fees and Pricing</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
