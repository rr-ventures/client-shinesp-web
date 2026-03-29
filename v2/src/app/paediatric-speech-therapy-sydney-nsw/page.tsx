import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Paediatric Speech Therapy Sydney NSW | Shine and Speak',
  description:
    'Paediatric speech therapy in Sydney for children with autism, ADHD, language delay, speech sounds, literacy, and more. Mobile, telehealth. NDIS & Medicare.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/paediatric-speech-therapy-sydney-nsw',
  },
  openGraph: {
    title: 'Paediatric Speech Therapy Sydney NSW | Shine and Speak',
    description: 'Paediatric speech therapy in Sydney for children with autism, ADHD, language delay, speech sounds, literacy, and more. Mobile, telehealth. NDIS & Medicare.',
    url: 'https://www.shineandspeak.com.au/paediatric-speech-therapy-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Paediatric Speech Therapy in Sydney', href: '/paediatric-speech-therapy-sydney-nsw' }]} />
      <h1 className="text-4xl font-bold text-navy-900 mt-8 mb-4">Paediatric Speech Therapy in Sydney</h1>
      <p className="text-lg text-gray-700">Content coming soon.</p>
    </main>
  );
}
