import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Shine Teoh | Speech Pathologist Sydney NSW',
  description: 'Meet Shine Teoh, Certified Practising Speech Pathologist in Sydney. Mobile & telehealth. Bilingual English & Mandarin. NDIS & Medicare registered provider.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/about',
  },
  openGraph: {
    title: 'About Shine Teoh | Speech Pathologist Sydney NSW',
    description: 'Meet Shine Teoh, Certified Practising Speech Pathologist in Sydney. Mobile & telehealth. Bilingual English & Mandarin. NDIS & Medicare registered provider.',
    url: 'https://www.shineandspeak.com.au/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#F0F4F8] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' }
          ]} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6">
                Meet Shine Teoh
              </h1>
              <p className="text-xl text-gray-700 mb-6 font-medium">
                Certified Practising Speech Pathologist
              </p>
              
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  I'm Shine, a Certified Practising Speech Pathologist. I started Shine and Speak because I believe every person deserves access to high-quality, personalised speech therapy that makes a genuine difference in their everyday life — not just therapy for the sake of therapy.
                </p>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-xl">
              <img 
                src="/shared/shine/shine-headshot-1200x1200.webp" 
                alt="Shine Teoh, Certified Practising Speech Pathologist" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-[#1B365D] mb-6">My approach</h2>
          <p className="text-lg text-gray-700 mb-6">
            I take a client-centred, strengths-based approach. I start with what you or your child can already do, what matters to you, and what goals will make the biggest difference in daily life. I tailor every session to the individual — their interests, their strengths, and their real-world needs.
          </p>
          <p className="text-lg text-gray-700 mb-12">
            I'm a big believer in collaboration. I work closely with families, teachers, support coordinators, and other professionals to make sure therapy is consistent and coordinated across all environments.
          </p>

          <h2 className="text-3xl font-bold text-[#1B365D] mb-6">Qualifications</h2>
          <ul className="space-y-4 mb-12 text-lg text-gray-700">
            <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-3 text-[#E8A84C] flex-shrink-0 mt-0.5" /> Bachelor of Speech Pathology, University of Sydney</li>
            <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-3 text-[#E8A84C] flex-shrink-0 mt-0.5" /> Certified Practising Member, Speech Pathology Australia (CPSP)</li>
            <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-3 text-[#E8A84C] flex-shrink-0 mt-0.5" /> NDIS Registered Provider — [Placeholder: Provider number]</li>
            <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-3 text-[#E8A84C] flex-shrink-0 mt-0.5" /> Medicare Registered Provider</li>
            <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-3 text-[#E8A84C] flex-shrink-0 mt-0.5" /> Hanen Certified (More Than Words)</li>
            <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-3 text-[#E8A84C] flex-shrink-0 mt-0.5" /> Sounds Write Practitioner</li>
            <li className="flex items-start"><CheckCircle2 className="w-6 h-6 mr-3 text-[#E8A84C] flex-shrink-0 mt-0.5" /> Lidcombe Program Trained</li>
          </ul>

          <h2 className="text-3xl font-bold text-[#1B365D] mb-6">Bilingual practice</h2>
          <p className="text-lg text-gray-700 mb-12">
            I provide speech therapy and assessments in English and Mandarin (普通话). Assessing a child in only one language can underestimate their true abilities. I ensure assessments are accurate, therapy is accessible, and communication with your family is clear. This is especially important for families who speak Mandarin at home but need therapy delivered in an English-speaking school environment.
          </p>

          <h2 className="text-3xl font-bold text-[#1B365D] mb-6">What I work with</h2>
          <p className="text-lg text-gray-700 mb-12">
            I work with children and adults across a wide range of areas, including <Link href="/speech-therapy-autism-sydney-nsw" className="text-[#1B365D] underline font-medium hover:text-[#E8A84C]">autism</Link>, <Link href="/speech-therapy-adhd-sydney-nsw" className="text-[#1B365D] underline font-medium hover:text-[#E8A84C]">ADHD</Link>, <Link href="/speech-therapy-developmental-delay-sydney-nsw" className="text-[#1B365D] underline font-medium hover:text-[#E8A84C]">developmental delay</Link>, <Link href="/speech-therapy-language-delay-sydney-nsw" className="text-[#1B365D] underline font-medium hover:text-[#E8A84C]">language delay</Link>, <Link href="/speech-therapy-speech-sounds-sydney-nsw" className="text-[#1B365D] underline font-medium hover:text-[#E8A84C]">speech sounds</Link>, <Link href="/speech-therapy-stuttering-sydney-nsw" className="text-[#1B365D] underline font-medium hover:text-[#E8A84C]">stuttering</Link>, <Link href="/speech-therapy-literacy-sydney-nsw" className="text-[#1B365D] underline font-medium hover:text-[#E8A84C]">literacy</Link>, <Link href="/speech-therapy-aac-sydney-nsw" className="text-[#1B365D] underline font-medium hover:text-[#E8A84C]">AAC</Link>, and <Link href="/adult-speech-therapy-sydney-nsw" className="text-[#1B365D] underline font-medium hover:text-[#E8A84C]">adult speech therapy</Link>.
          </p>

          <div className="my-16">
            {/* PLACEHOLDER: Embed therapist intro video */}
            <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
              <p className="text-gray-500 font-medium">[Placeholder: Embed therapist intro video (1-2 minutes)]</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#1B365D] mb-6">More about me</h2>
          <p className="text-lg text-gray-700 mb-12">
            [Placeholder: Brief personal background — where she grew up, what drew her to speech pathology, something personal/human that builds connection. 2-3 sentences.]
          </p>

          <div className="flex space-x-4 mb-12">
            <a href="https://www.linkedin.com/company/shine-and-speak" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#1B365D] font-bold hover:text-[#E8A84C] transition-colors">
              Connect on LinkedIn <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
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
