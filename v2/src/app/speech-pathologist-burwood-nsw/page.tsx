import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Speech Pathologist Burwood NSW | Shine and Speak',
  description: 'Mobile speech therapy in Burwood, Sydney. Home, school & telehealth. NDIS, Medicare & private. Bilingual English & Mandarin. Book a free call.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/speech-pathologist-burwood-nsw',
  },
  openGraph: {
    title: 'Speech Pathologist Burwood NSW | Shine and Speak',
    description: 'Mobile speech therapy in Burwood, Sydney. Home, school & telehealth. NDIS, Medicare & private. Bilingual English & Mandarin. Book a free call.',
    url: 'https://www.shineandspeak.com.au/speech-pathologist-burwood-nsw',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function BurwoodPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Speech Pathology in Burwood",
            "provider": {
              "@type": "MedicalBusiness",
              "name": "Shine and Speak"
            },
            "areaServed": {
              "@type": "City",
              "name": "Burwood"
            },
            "description": "Mobile speech therapy in Burwood, Sydney. Home, school & telehealth."
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-navy-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Areas', href: '/speech-pathologist-inner-west-sydney-nsw' },
            { label: 'Speech Pathologist Burwood', href: '/speech-pathologist-burwood-nsw' }
          ]} />
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Speech Pathologist in Burwood
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Looking for a speech pathologist in Burwood? I provide mobile speech therapy for children and adults in Burwood and surrounding suburbs. I travel to your home, your child's school, or local kindergarten — so there's no need to visit a clinic. I also offer telehealth sessions if that suits your family better.
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
          <h2 className="text-3xl font-bold text-navy-900 mb-6">Services available in Burwood</h2>
          <p className="text-lg text-gray-700 mb-12">
            Speech therapy for <Link href="/speech-therapy-autism-sydney-nsw" className="text-navy-900 underline font-medium hover:text-gold-600">children with autism</Link>, ADHD, developmental delay, language delay, speech sounds, stuttering, literacy, and more. Adult speech therapy for aphasia, cognitive-communication, fluency, and neurological rehabilitation. I also provide <Link href="/speech-therapy-assessment-sydney-nsw" className="text-navy-900 underline font-medium hover:text-gold-600">comprehensive assessments</Link> and detailed reports, and offer coaching for parents and support workers.
          </p>

          <h2 className="text-3xl font-bold text-navy-900 mb-6">How mobile therapy works in Burwood</h2>
          <p className="text-lg text-gray-700 mb-12">
            I bring everything needed for a full therapy session directly to your home or your child's school in Burwood. Sessions typically run 45-60 minutes. Parents and carers are welcome to observe and I'll coach you on strategies to use between sessions.
          </p>

          <h2 className="text-3xl font-bold text-navy-900 mb-6">Funding options</h2>
          <p className="text-lg text-gray-700 mb-12">
            NDIS registered (all management types), Medicare provider, private pay, Home Care Packages, DVA. Visit the <Link href="/fees" className="text-navy-900 underline font-medium hover:text-gold-600">funding and fees page</Link> for full details on what's covered and current session rates.
          </p>

          <h2 className="text-3xl font-bold text-navy-900 mb-6">Languages</h2>
          <p className="text-lg text-gray-700 mb-12">
            English and Mandarin (普通话).
          </p>

          <h2 className="text-3xl font-bold text-navy-900 mb-6">Nearby suburbs</h2>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-lg text-gray-700 mb-12">
            <Link href="/speech-pathologist-strathfield-nsw" className="hover:text-gold-600 hover:underline">Strathfield</Link> <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-canterbury-bankstown-nsw" className="hover:text-gold-600 hover:underline">Canterbury-Bankstown</Link> <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-campsie-nsw" className="hover:text-gold-600 hover:underline">Campsie</Link> <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-inner-west-sydney-nsw" className="hover:text-gold-600 hover:underline">Inner West Sydney</Link> <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-arncliffe-nsw" className="hover:text-gold-600 hover:underline">Arncliffe</Link>
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
