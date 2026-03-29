import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speech Therapy for Autism Sydney NSW | Shine and Speak",
  description: "Personalised speech therapy for children with autism and ASD in Sydney. Mobile, telehealth & school-based. NDIS & Medicare. Bilingual English & Mandarin.",
};

export default function AutismPage() {
  return (
    <article>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 border-b border-gray-200 text-sm">
        <div className="container mx-auto px-4 text-gray-500">
          <Link href="/" className="hover:text-brand-navy">Home</Link> &gt; 
          <Link href="/paediatric-speech-therapy-sydney-nsw" className="hover:text-brand-navy mx-1">Services</Link> &gt; 
          <span className="text-brand-navy ml-1">Speech Therapy for Autism</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        {/* H1 + Intro */}
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Speech Therapy for Autism and ASD in Sydney</h1>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          I provide personalised, strengths-based speech therapy for children on the autism spectrum in Sydney's Inner West and surrounds. I focus on building communication skills that help your child connect with others, express their needs, and participate more fully in everyday life — at home, at school, and in the community.
        </p>

        {/* Trust signals strip */}
        <div className="flex flex-wrap gap-6 text-sm font-bold text-brand-navy mb-16 pb-8 border-b border-gray-200">
          <span>✓ CPSP Certified</span>
          <span>✓ NDIS Registered</span>
          <span>✓ Medicare Provider</span>
        </div>

        {/* Content Sections */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">What is autism spectrum disorder?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Autism is a neurodevelopmental condition that affects how a person communicates, interacts with others, and experiences the world. Every child on the spectrum is different — some may have difficulty with spoken language, others may find social communication challenging, and some may benefit from alternative communication methods like AAC. There's no single approach that works for everyone, which is why therapy needs to be tailored to your child's individual strengths, interests, and goals.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Signs to look for</h2>
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
          <h2 className="text-3xl font-bold text-brand-navy mb-4">How speech therapy helps</h2>
          <p className="text-gray-700 leading-relaxed">
            I work on building vocabulary and sentence structure, developing social communication and play skills, exploring AAC options for children who need alternative ways to communicate, supporting transitions between activities and environments, and coaching parents and support workers on strategies they can use at home and school every day.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">What to expect in sessions</h2>
          <p className="text-gray-700 leading-relaxed">
            Sessions are play-based, structured around your child's interests, and take place in familiar environments — your home, their school, or online. I also provide practical coaching for parents and support workers so communication strategies are used consistently across all settings. Learn more about <Link href="/how-it-works" className="text-brand-navy underline font-semibold">how therapy works</Link> and what your first session looks like.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Parent and support worker coaching</h2>
          <p className="text-gray-700 leading-relaxed">
            I believe parents and support workers are essential partners in therapy. I provide practical coaching and training so you can confidently support your child's communication development between sessions — during mealtimes, play, outings, and transitions. This means your child gets more practice throughout the day, not just during therapy sessions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Funding your child's therapy</h2>
          <p className="text-gray-700 leading-relaxed">
            Speech therapy for autism is covered under most NDIS plans and may be eligible for Medicare rebates with a referral from your GP. I accept all NDIS management types. Find out more about <Link href="/ndis-speech-therapy-sydney-nsw" className="text-brand-navy underline font-semibold">NDIS funding for speech therapy</Link> or check the full list of <Link href="/fees" className="text-brand-navy underline font-semibold">funding options and fees</Link>.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Related conditions</h2>
          <p className="text-gray-700 leading-relaxed">
            Many children on the autism spectrum also experience challenges with <Link href="/speech-therapy-adhd-sydney-nsw" className="text-brand-navy underline">attention and focus</Link>, <Link href="/speech-therapy-language-delay-sydney-nsw" className="text-brand-navy underline">language development</Link>, <Link href="/social-communication-speech-therapy-sydney-nsw" className="text-brand-navy underline">social communication</Link>, or may benefit from <Link href="/aac-speech-therapy-sydney-nsw" className="text-brand-navy underline">AAC and multimodal communication</Link> support. I work across all of these areas.
          </p>
        </section>

        {/* Author attribution */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <p className="text-gray-600 italic">
            Written by a Certified Practising Speech Pathologist. <Link href="/about" className="text-brand-navy underline">Read about our approach</Link>.
          </p>
        </div>
      </div>

      {/* CTA Band */}
      <section className="py-16 bg-brand-gold text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to help your child thrive?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free discovery call to talk about your child's needs — no obligation, no pressure.
          </p>
          <Link href="/book" className="inline-block bg-brand-navy text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-opacity-90 transition shadow-lg">
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </article>
  );
}
