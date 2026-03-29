import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, serviceSchema, faqPageSchema, SITE_URL } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Speech Therapy for Autism Sydney NSW',
  description:
    'Personalised speech therapy for children with autism and ASD in Sydney. Mobile, telehealth & school-based. NDIS & Medicare. Bilingual English & Mandarin.',
  alternates: {
    canonical: '/speech-therapy-autism-sydney-nsw',
  },
  openGraph: {
    title: 'Speech Therapy for Autism Sydney NSW | Shine and Speak',
    description:
      'Personalised speech therapy for children with autism and ASD in Sydney. Mobile, telehealth & school-based. NDIS & Medicare. Bilingual English & Mandarin.',
    url: '/speech-therapy-autism-sydney-nsw',
  },
};

const autismFaqs = [
  {
    question: 'Is speech therapy covered by NDIS for autism?',
    answer:
      'Yes. Speech therapy for autism is a support item under most NDIS plans. We are a registered NDIS provider and accept self-managed, plan-managed, and NDIA-managed plans.',
  },
  {
    question: 'At what age should a child with autism start speech therapy?',
    answer:
      'Early intervention is recommended. We work with children from toddler age through adolescence. The earlier therapy begins, the better the outcomes, but it is never too late to start.',
  },
];

export default function AutismPage() {
  return (
    <article>
      <JsonLd
        data={serviceSchema({
          name: 'Speech Therapy for Autism and ASD',
          description:
            'Personalised, strengths-based speech therapy for children on the autism spectrum in Sydney. Mobile, school-based, and telehealth delivery. NDIS and Medicare registered.',
          url: '/speech-therapy-autism-sydney-nsw',
          serviceType: 'Autism Speech Pathology',
        })}
      />
      <JsonLd data={faqPageSchema(autismFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Paediatric Speech Therapy', url: `${SITE_URL}/paediatric-speech-therapy-sydney-nsw` },
          { name: 'Speech Therapy for Autism', url: `${SITE_URL}/speech-therapy-autism-sydney-nsw` },
        ])}
      />

      {/* Breadcrumb nav */}
      <nav className="bg-gray-50 py-3 border-b border-gray-200 text-sm" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 text-gray-500">
          <Link href="/" className="hover:text-[#112A46]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/paediatric-speech-therapy-sydney-nsw" className="hover:text-[#112A46]">Paediatric Services</Link>
          <span className="mx-2">›</span>
          <span className="text-[#112A46]">Speech Therapy for Autism</span>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#112A46] mb-6">Speech Therapy for Autism and ASD in Sydney</h1>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          We provide personalised, strengths-based speech therapy for children on the autism spectrum in Sydney&apos;s Inner West and surrounds. We focus on building communication skills that help your child connect with others, express their needs, and participate more fully in everyday life — at home, at school, and in the community.
        </p>

        {/* Trust signals */}
        <div className="flex flex-wrap gap-6 text-sm font-serif font-medium text-[#112A46] mb-16 pb-8 border-b border-gray-200">
          <span>✓ CPSP Certified</span>
          <span>✓ NDIS Registered</span>
          <span>✓ Medicare Provider</span>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-serif font-medium text-[#112A46] mb-4">What is autism spectrum disorder?</h2>
          <p className="text-gray-700 leading-relaxed">
            Autism is a neurodevelopmental condition that affects how a person communicates, interacts with others, and experiences the world. Every child on the spectrum is different — some may have difficulty with spoken language, others may find social communication challenging, and some may benefit from alternative communication methods like AAC. There&apos;s no single approach that works for everyone, which is why therapy needs to be tailored to your child&apos;s individual strengths, interests, and goals.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-serif font-medium text-[#112A46] mb-4">Signs to look for</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Limited or no spoken language for their age</li>
            <li>Difficulty with back-and-forth conversation or taking turns</li>
            <li>Challenges understanding what others say or following instructions</li>
            <li>Repetitive use of words or phrases (echolalia)</li>
            <li>Trouble understanding social cues, body language, or facial expressions</li>
            <li>Preference for routine and difficulty with transitions</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-serif font-medium text-[#112A46] mb-4">How speech therapy helps</h2>
          <p className="text-gray-700 leading-relaxed">
            We work on building vocabulary and sentence structure, developing social communication and play skills, exploring AAC options for children who need alternative ways to communicate, supporting transitions between activities and environments, and coaching parents and support workers on strategies they can use at home and school every day.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-serif font-medium text-[#112A46] mb-4">What to expect in sessions</h2>
          <p className="text-gray-700 leading-relaxed">
            Sessions are play-based, structured around your child&apos;s interests, and take place in familiar environments — your home, their school, or online. We also provide practical coaching for parents and support workers so communication strategies are used consistently across all settings. Learn more about{' '}
            <Link href="/how-it-works" className="text-[#112A46] underline font-semibold">how therapy sessions are structured</Link> and what your first appointment looks like.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-serif font-medium text-[#112A46] mb-4">Parent and support worker coaching</h2>
          <p className="text-gray-700 leading-relaxed">
            We believe parents and support workers are essential partners in therapy. We provide practical coaching and training so you can confidently support your child&apos;s communication development between sessions — during mealtimes, play, outings, and transitions. This means your child gets more practice throughout the day, not just during therapy sessions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-serif font-medium text-[#112A46] mb-4">Funding your child&apos;s therapy</h2>
          <p className="text-gray-700 leading-relaxed">
            Speech therapy for autism is covered under most NDIS plans and may be eligible for Medicare rebates with a referral from your GP. We accept all NDIS management types. Find out more about{' '}
            <Link href="/ndis-speech-therapy-sydney-nsw" className="text-[#112A46] underline font-semibold">NDIS funding for speech pathology</Link> or check the full list of{' '}
            <Link href="/fees" className="text-[#112A46] underline font-semibold">session rates and funding options</Link>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-serif font-medium text-[#112A46] mb-4">Frequently asked questions</h2>
          <div className="space-y-6">
            {autismFaqs.map((faq, i) => (
              <div key={i}>
                <h3 className="text-lg font-serif font-medium text-[#112A46] mb-1">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-serif font-medium text-[#112A46] mb-4">Related conditions we support</h2>
          <p className="text-gray-700 leading-relaxed">
            Many children on the autism spectrum also experience challenges with{' '}
            <Link href="/speech-therapy-adhd-sydney-nsw" className="text-[#112A46] underline">attention and focus difficulties (ADHD)</Link>,{' '}
            <Link href="/speech-therapy-language-delay-sydney-nsw" className="text-[#112A46] underline">receptive and expressive language delays</Link>,{' '}
            <Link href="/social-communication-speech-therapy-sydney-nsw" className="text-[#112A46] underline">social communication and pragmatic skills</Link>, or may benefit from{' '}
            <Link href="/aac-speech-therapy-sydney-nsw" className="text-[#112A46] underline">AAC and multimodal communication systems</Link>. We work across all of these areas.
          </p>
        </section>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-sm italic">
            <Link href="/about" className="underline hover:text-[#112A46]">Written by a Certified Practising Speech Pathologist</Link>.
            Last reviewed March 2026.
          </p>
        </div>
      </div>

      {/* CTA Band */}
      <section className="py-16 bg-[#C89B66] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to help your child thrive?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free discovery call — no obligation, no pressure.
          </p>
          <Link href="/book" className="inline-block bg-[#112A46] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#1a3f69] transition shadow-lg">
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </article>
  );
}
