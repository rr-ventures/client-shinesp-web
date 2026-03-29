import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, SITE_URL } from '@/lib/schema';

export const metadata: Metadata = {
  title: {
    absolute: 'About Shine and Speak | Speech Pathologist Sydney',
  },
  description:
    'Shine and Speak provides high-quality mobile and telehealth speech pathology across Sydney. Bilingual English & Mandarin. NDIS registered, Medicare provider. Book a free call.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Shine and Speak | Speech Pathologist Sydney',
    description:
      'Shine and Speak provides high-quality mobile and telehealth speech pathology across Sydney. Bilingual English & Mandarin. NDIS registered, Medicare provider. Book a free call.',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <article>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'About', url: `${SITE_URL}/about` },
        ])}
      />

      <nav className="bg-gray-50 py-3 border-b border-gray-200 text-sm" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 text-gray-500">
          <Link href="/" className="hover:text-[#1B365D]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1B365D]">About</span>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">

        {/* H1 — Privacy variant: practice-focused, no personal name */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6">Meet Shine Yin Teoh</h1>

        {/* Photo placeholder */}
        <div className="mb-12 max-w-lg">
          <Image
            src="/shine-headshot-1200x1200.webp"
            alt="Shine Yin Teoh - Certified Practising Speech Pathologist"
            width={800}
            height={800}
            className="w-full h-auto rounded-[32px] shadow-xl object-cover"
          />
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1B365D] mb-4">Our mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I'm Shine Yin Teoh, a Certified Practising Speech Pathologist. I started Shine and Speak because I believe every person deserves access to high-quality, personalised speech therapy that makes a genuine difference in their everyday life — not just therapy for the sake of therapy.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our team is dedicated to providing warm, professional, and evidence-based speech pathology services to the Inner West Sydney community and beyond via telehealth. Learn more about{' '}
            <Link href="/mobile-speech-therapy-sydney-nsw" className="text-[#1B365D] underline">how our mobile therapy model works</Link>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1B365D] mb-4">Our approach</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I take a client-centred, strengths-based approach. I start with what you or your child can already do, what matters to you, and what goals will make the biggest difference in daily life. I tailor every session to the individual — their interests, their strengths, and their real-world needs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I'm a big believer in collaboration. I work closely with families, teachers, support coordinators, and other professionals to make sure therapy is consistent and coordinated across all environments.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1B365D] mb-4">Qualifications and credentials</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            {/* PLACEHOLDER: University degree and institution — e.g. "Bachelor of Speech Pathology, University of Sydney" */}
            <li>Bachelor of Speech Pathology — <em>details coming soon</em></li>
            <li>Certified Practising Member, Speech Pathology Australia (CPSP)</li>
            {/* PLACEHOLDER: NDIS Provider number */}
            <li>NDIS Registered Provider — provider number coming soon</li>
            <li>Medicare Registered Provider</li>
            {/* PLACEHOLDER: Training certifications — e.g. Hanen, Sounds Write, Lidcombe Program, PECS */}
            <li>Evidence-based training certifications — details coming soon</li>
            {/* PLACEHOLDER: ABN */}
            <li>ABN: <em>coming soon</em></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1B365D] mb-4">Bilingual practice</h2>
          <p className="text-gray-700 leading-relaxed">
            I provide speech therapy and assessments in English and Mandarin (普通话). Assessing a child in only one language can underestimate their true abilities. I ensure assessments are accurate, therapy is accessible, and communication with your family is clear — especially for families who speak Mandarin at home but need therapy delivered in an English-speaking school environment.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1B365D] mb-4">What we work with</h2>
          <p className="text-gray-700 leading-relaxed">
            Our team supports children and adults with a wide range of communication needs, including{' '}
            <Link href="/speech-therapy-autism-sydney-nsw" className="text-[#1B365D] underline">autism spectrum disorder</Link>,{' '}
            <Link href="/speech-therapy-adhd-sydney-nsw" className="text-[#1B365D] underline">ADHD</Link>,{' '}
            <Link href="/speech-therapy-language-delay-sydney-nsw" className="text-[#1B365D] underline">language delay</Link>,{' '}
            <Link href="/speech-therapy-speech-sounds-sydney-nsw" className="text-[#1B365D] underline">speech sounds</Link>,{' '}
            <Link href="/speech-therapy-stuttering-sydney-nsw" className="text-[#1B365D] underline">stuttering and fluency</Link>, and{' '}
            <Link href="/speech-therapy-literacy-sydney-nsw" className="text-[#1B365D] underline">literacy and reading difficulties</Link>.
          </p>
        </section>

        {/* Video embed placeholder */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1B365D] mb-4">Meet our team</h2>
          <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center border-2 border-dashed border-gray-300 mb-4">
            {/* PLACEHOLDER: Embed therapist intro video here. 1–2 minutes, filmed professionally or at high quality. Should show the therapist speaking naturally about their approach. This is a critical E-E-A-T signal — video of a real person proves authenticity to Google. */}
            <p className="text-gray-400 text-center px-8">Video introduction coming soon</p>
          </div>
          <p className="text-sm text-gray-400 italic text-center">Video introduction — coming soon</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1B365D] mb-4">Our story</h2>
          {/* PLACEHOLDER: Personal background and motivation — where the therapist grew up, what drew them to speech pathology, something personal/human that builds connection. 2–3 sentences. */}
          <p className="text-gray-400 italic">Personal background coming soon.</p>
        </section>

        {/* Social media links */}
        <div className="flex gap-6 mb-12">
          <a
            href="https://www.linkedin.com/company/shineandspeak" /* REPLACE: real LinkedIn URL */
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B365D] font-bold hover:text-[#E8A84C] transition underline"
          >
            LinkedIn →
          </a>
          <a
            href="https://www.facebook.com/shineandspeak" /* REPLACE: real Facebook URL */
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B365D] font-bold hover:text-[#E8A84C] transition underline"
          >
            Facebook →
          </a>
          <a
            href="https://www.instagram.com/shineandspeak" /* REPLACE: real Instagram URL */
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B365D] font-bold hover:text-[#E8A84C] transition underline"
          >
            Instagram →
          </a>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-sm italic">
            Written by Shine Yin Teoh, Certified Practising Speech Pathologist. Last reviewed March 2026.
          </p>
        </div>
      </div>

      <section className="py-16 bg-[#E8A84C] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to help your child thrive?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free discovery call — no obligation, no pressure.
          </p>
          <Link href="/book" className="inline-block bg-[#1B365D] text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-blue-900 transition shadow-lg">
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </article>
  );
}
