import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, serviceSchema, SITE_URL } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Speech Pathologist Burwood NSW',
  description:
    'Mobile speech pathologist in Burwood NSW. Home visits, school sessions and telehealth available. NDIS, Medicare and private pay accepted. Bilingual English & Mandarin.',
  alternates: {
    canonical: '/speech-pathologist-burwood-nsw',
  },
  openGraph: {
    title: 'Speech Pathologist Burwood NSW | Shine and Speak',
    description:
      'Mobile speech pathologist in Burwood NSW. Home visits, school sessions and telehealth available. NDIS, Medicare and private pay accepted. Bilingual English & Mandarin.',
    url: '/speech-pathologist-burwood-nsw',
  },
};

export default function BurwoodPage() {
  return (
    <article>
      <JsonLd
        data={serviceSchema({
          name: 'Speech Pathologist in Burwood NSW',
          description:
            'Mobile speech therapy for children and adults in Burwood, NSW. Home visits, school sessions and telehealth. NDIS, Medicare and private pay accepted.',
          url: '/speech-pathologist-burwood-nsw',
          serviceType: 'Mobile Speech Pathology',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Areas', url: `${SITE_URL}/speech-pathologist-burwood-nsw` },
          { name: 'Speech Pathologist Burwood', url: `${SITE_URL}/speech-pathologist-burwood-nsw` },
        ])}
      />

      <nav className="bg-gray-50 py-3 border-b border-gray-200 text-sm" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 text-gray-500">
          <Link href="/" className="hover:text-[#1B365D]">Home</Link>
          <span className="mx-2">›</span>
          <span>Areas</span>
          <span className="mx-2">›</span>
          <span className="text-[#1B365D]">Speech Pathologist Burwood</span>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6">Speech Pathologist in Burwood</h1>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          Looking for a speech pathologist in Burwood? We provide mobile speech therapy for children and adults in Burwood and surrounding suburbs. We travel to your home, your child&apos;s school, or local kindergarten — so there&apos;s no need to visit a clinic. We also offer telehealth sessions if that suits your family better.
        </p>

        <div className="flex flex-wrap gap-6 text-sm font-bold text-[#1B365D] mb-16 pb-8 border-b border-gray-200">
          <span>✓ CPSP Certified</span>
          <span>✓ NDIS Registered</span>
          <span>✓ Medicare Provider</span>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1B365D] mb-4">Services available in Burwood</h2>
          <p className="text-gray-700 leading-relaxed">
            Speech therapy for{' '}
            <Link href="/speech-therapy-autism-sydney-nsw" className="text-[#1B365D] underline">children on the autism spectrum</Link>,
            ADHD, developmental delay, language delay, speech sounds, stuttering, literacy, and more.
            Adult speech therapy for aphasia, cognitive-communication, fluency, and neurological rehabilitation.
            We also provide{' '}
            <Link href="/speech-therapy-assessment-sydney-nsw" className="text-[#1B365D] underline">comprehensive speech and language assessments</Link>
            {' '}and detailed reports, and offer coaching for parents and support workers.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1B365D] mb-4">How mobile therapy works in Burwood</h2>
          <p className="text-gray-700 leading-relaxed">
            We bring everything needed for a full therapy session directly to your home or your child&apos;s school in Burwood. Sessions typically run 45–60 minutes. Parents and carers are welcome to observe and we&apos;ll coach you on strategies to use between sessions. Learn more about{' '}
            <Link href="/mobile-speech-therapy-sydney-nsw" className="text-[#1B365D] underline">mobile speech therapy and how it works</Link>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1B365D] mb-4">Funding options in Burwood</h2>
          <p className="text-gray-700 leading-relaxed">
            NDIS registered (all management types), Medicare provider, private pay, Home Care Packages, DVA. Visit the{' '}
            <Link href="/fees" className="text-[#1B365D] underline font-semibold">fees and funding page</Link>{' '}
            for full details on what&apos;s covered and current session rates.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1B365D] mb-4">Languages spoken</h2>
          <p className="text-gray-700 leading-relaxed">
            English and Mandarin (普通话). We provide bilingual assessments and therapy for Mandarin-speaking families in Burwood.
          </p>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-[#1B365D] mb-4">Nearby suburbs we also serve</h2>
          <div className="flex flex-wrap gap-4 text-[#1B365D] font-medium">
            <Link href="/speech-pathologist-strathfield-nsw" className="hover:text-[#E8A84C]">Strathfield</Link>
            <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-canterbury-bankstown-nsw" className="hover:text-[#E8A84C]">Canterbury-Bankstown</Link>
            <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-campsie-nsw" className="hover:text-[#E8A84C]">Campsie</Link>
            <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-inner-west-sydney-nsw" className="hover:text-[#E8A84C]">Inner West Sydney</Link>
            <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-arncliffe-nsw" className="hover:text-[#E8A84C]">Arncliffe</Link>
          </div>
        </section>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-sm italic">
            <Link href="/about" className="underline hover:text-[#1B365D]">Written by a Certified Practising Speech Pathologist</Link>.
            Last reviewed March 2026.
          </p>
        </div>
      </div>

      <section className="py-16 bg-[#E8A84C] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to help your child thrive?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free discovery call to talk about your child&apos;s needs — no obligation, no pressure.
          </p>
          <Link href="/book" className="inline-block bg-[#1B365D] text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-blue-900 transition shadow-lg">
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </article>
  );
}
