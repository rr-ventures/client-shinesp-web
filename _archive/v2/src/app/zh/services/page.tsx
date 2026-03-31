import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: '我們的服務 | Shine and Speak',
  description: 'Content coming soon for 我們的服務 | Shine and Speak. Mobile and telehealth speech therapy in Sydney.',
  alternates: {
    canonical: '/zh/services',
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: '我們的服務', href: '/zh/services' }]} />
      <h1 className="text-4xl font-bold text-[#1B365D] mt-8 mb-4">我們的服務</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
