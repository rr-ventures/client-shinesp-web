import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, serviceSchema, SITE_URL } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'AAC Speech Therapy Sydney NSW',
  description:
    'AAC (Augmentative and Alternative Communication) speech therapy in Sydney. Supporting children and adults who use AAC devices, PECS, and multimodal communication. NDIS registered.',
  alternates: { canonical: '/aac-speech-therapy-sydney-nsw' },
  openGraph: {
    title: 'AAC Speech Therapy Sydney NSW | Shine and Speak',
    description:
      'AAC therapy in Sydney for children and adults using augmentative and alternative communication. NDIS, Medicare & private. Mobile and telehealth.',
    url: '/aac-speech-therapy-sydney-nsw',
  },
};

export default function AacPage() {
  return (
    <article>
      <JsonLd
        data={serviceSchema({
          name: 'AAC and Augmentative Communication Speech Therapy',
          description:
            'AAC (Augmentative and Alternative Communication) assessment and therapy in Sydney. Supporting children and adults with complex communication needs.',
          url: '/aac-speech-therapy-sydney-nsw',
          serviceType: 'AAC Speech Pathology',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Paediatric Speech Therapy', url: `${SITE_URL}/paediatric-speech-therapy-sydney-nsw` },
          { name: 'AAC Speech Therapy', url: `${SITE_URL}/aac-speech-therapy-sydney-nsw` },
        ])}
      />

      <nav className="bg-gray-50 py-3 border-b border-gray-200 text-sm" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 text-gray-500">
          <Link href="/" className="hover:text-[#112A46]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/paediatric-speech-therapy-sydney-nsw" className="hover:text-[#112A46]">Paediatric Services</Link>
          <span className="mx-2">›</span>
          <span className="text-[#112A46]">AAC Speech Therapy</span>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#112A46] mb-6">
          AAC Speech Therapy in Sydney NSW
        </h1>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          Augmentative and Alternative Communication (AAC) refers to all the ways people communicate beyond speaking — including signs, symbols, picture boards, and high-tech speech-generating devices. We provide specialist AAC assessment and therapy to help children and adults with complex communication needs find their voice in the way that works best for them.
        </p>

        <div className="flex flex-wrap gap-6 text-sm font-serif font-medium text-[#112A46] mb-12 pb-8 border-b border-gray-200">
          <span>✓ CPSP Certified</span>
          <span>✓ NDIS Registered</span>
          <span>✓ Medicare Provider</span>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-serif font-medium text-[#112A46] mb-4">What is AAC?</h2>
          <p className="text-gray-700 leading-relaxed">
            AAC includes a broad range of tools: from low-tech options like PECS (Picture Exchange Communication System) and core vocabulary boards, to high-tech speech-generating devices and communication apps. AAC does not replace speech — it supports and scaffolds communication while also encouraging any speech that develops. Research shows that AAC supports rather than hinders speech development.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-serif font-medium text-[#112A46] mb-4">Who benefits from AAC?</h2>
          <p className="text-gray-700 leading-relaxed">
            Children and adults who are minimally verbal or non-speaking, have complex communication needs, are on the <Link href="/speech-therapy-autism-sydney-nsw" className="text-[#112A46] underline">autism spectrum</Link>, or have conditions affecting speech such as childhood apraxia of speech, cerebral palsy, or acquired neurological conditions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-serif font-medium text-[#112A46] mb-4">What we do</h2>
          <p className="text-gray-700 leading-relaxed">
            We complete thorough AAC assessments to find the best communication system for the individual, provide hands-on training for the person, their family, and support workers, and monitor and adjust the AAC system over time as communication skills develop. Funding for AAC devices may be available through NDIS. Learn more about <Link href="/ndis-speech-therapy-sydney-nsw" className="text-[#112A46] underline">NDIS speech therapy funding</Link>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-medium text-[#112A46] mb-4">Related services</h2>
          <p className="text-gray-700 leading-relaxed">
            AAC therapy often works alongside{' '}
            <Link href="/social-communication-speech-therapy-sydney-nsw" className="text-[#112A46] underline">social communication support</Link>,{' '}
            <Link href="/speech-therapy-autism-sydney-nsw" className="text-[#112A46] underline">autism speech therapy</Link>, and{' '}
            <Link href="/parent-coaching-speech-therapy-sydney-nsw" className="text-[#112A46] underline">parent and support worker coaching</Link>.
          </p>
        </section>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-sm italic">
            <Link href="/about" className="underline hover:text-[#112A46]">Written by a Certified Practising Speech Pathologist</Link>.
            Last reviewed March 2026.
          </p>
        </div>
      </div>

      <section className="py-16 bg-[#C89B66] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Book a free discovery call</h2>
          <Link href="/book" className="inline-block bg-[#112A46] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#1a3f69] transition shadow-lg">
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </article>
  );
}
