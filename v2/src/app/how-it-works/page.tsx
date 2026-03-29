import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'How It Works | Shine and Speak',
  description: 'Content coming soon for How It Works | Shine and Speak. Mobile and telehealth speech therapy in Sydney.',
  alternates: {
    canonical: '/how-it-works',
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'How Speech Therapy Works', href: '/how-it-works' }]} />
      <h1 className="text-4xl font-bold text-navy-900 mt-8 mb-4">How Speech Therapy Works</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
