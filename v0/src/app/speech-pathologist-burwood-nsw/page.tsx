import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speech Pathologist Burwood NSW | Shine and Speak",
  description: "Mobile speech therapy in Burwood, Sydney. Home, school & telehealth. NDIS, Medicare & private. Bilingual English & Mandarin. Book a free call.",
};

export default function BurwoodPage() {
  return (
    <article>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 border-b border-gray-200 text-sm">
        <div className="container mx-auto px-4 text-gray-500">
          <Link href="/" className="hover:text-brand-navy">Home</Link> &gt; 
          <span className="mx-1">Areas</span> &gt; 
          <span className="text-brand-navy ml-1">Speech Pathologist Burwood</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        {/* H1 + Intro */}
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Speech Pathologist in Burwood</h1>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          Looking for a speech pathologist in Burwood? I provide mobile speech therapy for children and adults in Burwood and surrounding suburbs. I travel to your home, your child's school, or local kindergarten — so there's no need to visit a clinic. I also offer telehealth sessions if that suits your family better.
        </p>

        {/* Trust signals strip */}
        <div className="flex flex-wrap gap-6 text-sm font-bold text-brand-navy mb-16 pb-8 border-b border-gray-200">
          <span>✓ CPSP Certified</span>
          <span>✓ NDIS Registered</span>
          <span>✓ Medicare Provider</span>
        </div>

        {/* Content Sections */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Services available in Burwood</h2>
          <p className="text-gray-700 leading-relaxed">
            Speech therapy for <Link href="/speech-therapy-autism-sydney-nsw" className="text-brand-navy underline">children with autism</Link>, ADHD, developmental delay, language delay, speech sounds, stuttering, literacy, and more. Adult speech therapy for aphasia, cognitive-communication, fluency, and neurological rehabilitation. I also provide <Link href="/speech-therapy-assessment-sydney-nsw" className="text-brand-navy underline">comprehensive assessments</Link> and detailed reports, and offer coaching for parents and support workers.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">How mobile therapy works in Burwood</h2>
          <p className="text-gray-700 leading-relaxed">
            I bring everything needed for a full therapy session directly to your home or your child's school in Burwood. Sessions typically run 45-60 minutes. Parents and carers are welcome to observe and I'll coach you on strategies to use between sessions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Funding options</h2>
          <p className="text-gray-700 leading-relaxed">
            NDIS registered (all management types), Medicare provider, private pay, Home Care Packages, DVA. Visit the <Link href="/fees" className="text-brand-navy underline font-semibold">funding and fees page</Link> for full details on what's covered and current session rates.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Languages</h2>
          <p className="text-gray-700 leading-relaxed">
            English and Mandarin (普通话).
          </p>
        </section>

        {/* Nearby Suburbs */}
        <section className="mb-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Nearby suburbs</h2>
          <div className="flex flex-wrap gap-4 text-brand-navy font-medium">
            <Link href="/speech-pathologist-strathfield-nsw" className="hover:text-brand-gold">Strathfield</Link>
            <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-canterbury-bankstown-nsw" className="hover:text-brand-gold">Canterbury-Bankstown</Link>
            <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-campsie-nsw" className="hover:text-brand-gold">Campsie</Link>
            <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-inner-west-sydney-nsw" className="hover:text-brand-gold">Inner West Sydney</Link>
            <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-arncliffe-nsw" className="hover:text-brand-gold">Arncliffe</Link>
          </div>
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
