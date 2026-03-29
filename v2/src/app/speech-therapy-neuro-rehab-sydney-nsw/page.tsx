import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Neurological Rehab Speech Therapy Sydney NSW | Shine and Speak',
  description: 'Content coming soon for Neurological Rehab Speech Therapy Sydney NSW | Shine and Speak. Mobile and telehealth speech therapy in Sydney.',
  alternates: {
    canonical: '/speech-therapy-neuro-rehab-sydney-nsw',
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Neurological Rehab Speech Therapy in Sydney', href: '/speech-therapy-neuro-rehab-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-navy-900 mt-8 mb-4">Neurological Rehab Speech Therapy in Sydney</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
