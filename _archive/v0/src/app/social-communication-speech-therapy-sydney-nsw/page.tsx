import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, serviceSchema, SITE_URL } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Social Communication Speech Therapy Sydney NSW',
  description:
    'Speech therapy for social communication difficulties in Sydney. Supporting children and adults with pragmatic language, social skills, and interaction. NDIS & Medicare registered.',
  alternates: { canonical: '/social-communication-speech-therapy-sydney-nsw' },
  openGraph: {
    title: 'Social Communication Speech Therapy Sydney NSW | Shine and Speak',
    description:
      'Speech therapy for social communication difficulties in Sydney. Pragmatic language, social skills, and interaction support. NDIS & Medicare. Mobile and telehealth.',
    url: '/social-communication-speech-therapy-sydney-nsw',
  },
};

export default function SocialCommunicationPage() {
  return (
    <article>
      <JsonLd
        data={serviceSchema({
          name: 'Social Communication Speech Therapy',
          description:
            'Speech therapy for social communication and pragmatic language difficulties in Sydney. Supporting children and adults with social interaction skills.',
          url: '/social-communication-speech-therapy-sydney-nsw',
          serviceType: 'Social Communication Speech Pathology',
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Paediatric Speech Therapy', url: `${SITE_URL}/paediatric-speech-therapy-sydney-nsw` },
          { name: 'Social Communication', url: `${SITE_URL}/social-communication-speech-therapy-sydney-nsw` },
        ])}
      />

      <nav className="bg-gray-50 py-3 border-b border-gray-200 text-sm" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 text-gray-500">
          <Link href="/" className="hover:text-[#112A46]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/paediatric-speech-therapy-sydney-nsw" className="hover:text-[#112A46]">Paediatric Services</Link>
          <span className="mx-2">›</span>
          <span className="text-[#112A46]">Social Communication</span>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#112A46] mb-6">
          Social Communication Speech Therapy Sydney
        </h1>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          Social communication — also called pragmatic language — refers to the ability to use language in social contexts. This includes understanding turn-taking, reading non-verbal cues, adapting language to different listeners, and using language to build and maintain relationships. We provide targeted support for children and adults who find social communication challenging.
        </p>

        <div className="flex flex-wrap gap-6 text-sm font-serif font-medium text-[#112A46] mb-12 pb-8 border-b border-gray-200">
          <span>✓ CPSP Certified</span>
          <span>✓ NDIS Registered</span>
          <span>✓ Medicare Provider</span>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-serif font-medium text-[#112A46] mb-4">What is social communication?</h2>
          <p className="text-gray-700 leading-relaxed">
            Social communication includes understanding how to start and end conversations, take turns, understand facial expressions and body language, adjust your language for different situations (e.g. talking to a friend vs. a teacher), and understand implied meaning and humour. Difficulties in this area are common in children and adults with <Link href="/speech-therapy-autism-sydney-nsw" className="text-[#112A46] underline">autism spectrum disorder</Link>, ADHD, traumatic brain injury, and other conditions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-serif font-medium text-[#112A46] mb-4">How we can help</h2>
          <p className="text-gray-700 leading-relaxed">
            We assess and treat social communication difficulties using evidence-based approaches. Sessions take place in your natural environments — home, school, or online — with coaching provided for parents, teachers, and support workers so strategies are generalised across all settings.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-medium text-[#112A46] mb-4">Related services</h2>
          <p className="text-gray-700 leading-relaxed">
            Social communication support often links with{' '}
            <Link href="/speech-therapy-autism-sydney-nsw" className="text-[#112A46] underline">autism speech therapy</Link>,{' '}
            <Link href="/speech-therapy-language-delay-sydney-nsw" className="text-[#112A46] underline">language development support</Link>, and{' '}
            <Link href="/aac-speech-therapy-sydney-nsw" className="text-[#112A46] underline">AAC and multimodal communication</Link>.
          </p>
        </section>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-sm italic">
            <Link href="/about" className="underline hover:text-[#112A46]">Written by a Certified Practising Speech Pathologist</Link>.
            Last reviewed March 2026.
          </p>
        </div>
      </div>

      <section className="py-16 bg-[#C89B66] text-[#112A46] text-center">
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
