import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CheckCircle2, ArrowRight, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Speech Therapy for Autism Sydney NSW | Shine and Speak',
  description: 'Personalised speech therapy for children with autism and ASD in Sydney. Mobile, telehealth & school-based. NDIS & Medicare. Bilingual English & Mandarin.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/speech-therapy-autism-sydney-nsw',
  },
  openGraph: {
    title: 'Speech Therapy for Autism Sydney NSW | Shine and Speak',
    description: 'Personalised speech therapy for children with autism and ASD in Sydney. Mobile, telehealth & school-based. NDIS & Medicare. Bilingual English & Mandarin.',
    url: 'https://www.shineandspeak.com.au/speech-therapy-autism-sydney-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function AutismPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Speech Therapy for Autism",
            "provider": {
              "@type": "MedicalBusiness",
              "name": "Shine and Speak"
            },
            "areaServed": {
              "@type": "City",
              "name": "Sydney"
            },
            "description": "Personalised speech therapy for children with autism and ASD in Sydney. Mobile, telehealth & school-based."
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-navy-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/paediatric-speech-therapy-sydney-nsw' },
            { label: 'Speech Therapy for Autism', href: '/speech-therapy-autism-sydney-nsw' }
          ]} />
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Speech Therapy for Autism and ASD in Sydney
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              I provide personalised, strengths-based speech therapy for children on the autism spectrum in Sydney's Inner West and surrounds. I focus on building communication skills that help your child connect with others, express their needs, and participate more fully in everyday life — at home, at school, and in the community.
            </p>
            
            {/* Trust signals strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-navy-800">
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1 text-gold-500" /> CPSP Certified</span>
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1 text-gold-500" /> NDIS Registered</span>
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1 text-gold-500" /> Medicare Provider</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">What is autism spectrum disorder?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Autism is a neurodevelopmental condition that affects how a person communicates, interacts with others, and experiences the world. Every child on the spectrum is different — some may have difficulty with spoken language, others may find social communication challenging, and some may benefit from alternative communication methods like AAC. There&apos;s no single approach that works for everyone, which is why therapy needs to be tailored to your child&apos;s individual strengths, interests, and goals.
          </p>
          <p className="text-lg text-gray-700 mb-12">
            For families wanting to learn more, <a href="https://raisingchildren.net.au" target="_blank" rel="noopener noreferrer" className="text-navy-900 font-medium underline underline-offset-2 hover:text-[#E8A84C] transition-colors">understanding how autism affects communication</a> is covered in depth by Raising Children Network, Australia&apos;s leading parenting resource.
          </p>

          <h2 className="text-3xl font-bold text-navy-900 mb-6">Signs to look for</h2>
          <ul className="space-y-4 mb-12 text-lg text-gray-700">
            <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-3 text-gold-500 flex-shrink-0 mt-0.5" /> Limited or no spoken language for their age</li>
            <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-3 text-gold-500 flex-shrink-0 mt-0.5" /> Difficulty with back-and-forth conversation or taking turns</li>
            <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-3 text-gold-500 flex-shrink-0 mt-0.5" /> Challenges understanding what others say or following instructions</li>
            <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-3 text-gold-500 flex-shrink-0 mt-0.5" /> Repetitive use of words or phrases (echolalia)</li>
            <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-3 text-gold-500 flex-shrink-0 mt-0.5" /> Trouble understanding social cues, body language, or facial expressions</li>
            <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-3 text-gold-500 flex-shrink-0 mt-0.5" /> Preference for routine and difficulty with transitions</li>
          </ul>

          <h2 className="text-3xl font-bold text-navy-900 mb-6">How speech therapy helps</h2>
          <p className="text-lg text-gray-700 mb-12">
            I work on building vocabulary and sentence structure, developing social communication and play skills, exploring AAC options for children who need alternative ways to communicate, supporting transitions between activities and environments, and coaching parents and support workers on strategies they can use at home and school every day.
          </p>

          <h2 className="text-3xl font-bold text-navy-900 mb-6">What to expect in sessions</h2>
          <p className="text-lg text-gray-700 mb-12">
            Sessions are play-based, structured around your child's interests, and take place in familiar environments — your home, their school, or online. I also provide practical coaching for parents and support workers so communication strategies are used consistently across all settings. Learn more about <Link href="/how-it-works" className="text-navy-900 underline font-medium hover:text-gold-600">how therapy works</Link> and what your first session looks like.
          </p>

          <h2 className="text-3xl font-bold text-navy-900 mb-6">Parent and support worker coaching</h2>
          <p className="text-lg text-gray-700 mb-12">
            I believe parents and support workers are essential partners in therapy. I provide practical coaching and training so you can confidently support your child's communication development between sessions — during mealtimes, play, outings, and transitions. This means your child gets more practice throughout the day, not just during therapy sessions.
          </p>

          <h2 className="text-3xl font-bold text-navy-900 mb-6">Funding your child's therapy</h2>
          <p className="text-lg text-gray-700 mb-12">
            Speech therapy for autism is covered under most NDIS plans and may be eligible for Medicare rebates with a referral from your GP. I accept all NDIS management types. Find out more about <Link href="/ndis-speech-therapy-sydney-nsw" className="text-navy-900 underline font-medium hover:text-gold-600">NDIS funding for speech therapy</Link> or check the full list of <Link href="/fees" className="text-navy-900 underline font-medium hover:text-gold-600">funding options and fees</Link>.
          </p>

          <h2 className="text-3xl font-bold text-navy-900 mb-6">Related conditions</h2>
          <p className="text-lg text-gray-700 mb-12">
            Many children on the autism spectrum also experience challenges with <Link href="/speech-therapy-adhd-sydney-nsw" className="text-navy-900 underline font-medium hover:text-gold-600">attention and focus</Link>, <Link href="/speech-therapy-language-delay-sydney-nsw" className="text-navy-900 underline font-medium hover:text-gold-600">language development</Link>, <Link href="/speech-therapy-social-communication-sydney-nsw" className="text-navy-900 underline font-medium hover:text-gold-600">social communication</Link>, or may benefit from <Link href="/speech-therapy-aac-sydney-nsw" className="text-navy-900 underline font-medium hover:text-gold-600">AAC and multimodal communication</Link> support. I work across all of these areas.
          </p>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-[#E8A84C] text-[#1B365D] text-center">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to help your child thrive?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book a free discovery call to talk about your child&apos;s needs — no obligation, no pressure.
          </p>
          {/* REPLACE: update href to your real Calendly URL */}
          <a
            href="https://calendly.com/shineandspeak"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#1B365D] text-white font-bold px-8 py-4 rounded-md hover:bg-[#0d2240] transition-colors text-lg"
          >
            Book a Free Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Author attribution */}
      <div className="py-4 text-center bg-white">
        <p className="text-xs text-gray-500">
          Written by{' '}
          <Link href="/about" className="text-[#1B365D] hover:text-[#E8A84C] underline underline-offset-2">
            Shine Teoh, Certified Practising Speech Pathologist
          </Link>
        </p>
      </div>
    </main>
  );
}
