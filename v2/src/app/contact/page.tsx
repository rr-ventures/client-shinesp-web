import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Contact Us | Shine and Speak',
  description: 'Content coming soon for Contact Us | Shine and Speak. Mobile and telehealth speech therapy in Sydney.',
  alternates: {
    canonical: '/contact',
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact Shine and Speak', href: '/contact' }]} />
      <h1 className="text-4xl font-bold text-navy-900 mt-8 mb-4">Contact Shine and Speak</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
