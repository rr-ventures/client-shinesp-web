import Link from "next/link";

export const metadata = {
  title: "Speech Pathologist Burwood NSW | Shine and Speak",
  description: "Mobile speech therapy in Burwood, Sydney. Home, school & telehealth. NDIS, Medicare & private. Bilingual English & Mandarin. Book a free call.",
};

export default function BurwoodPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Speech Pathology",
            "provider": {
              "@type": "Organization",
              "name": "Shine and Speak"
            },
            "areaServed": "Burwood, NSW"
          })
        }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="text-sm text-gray-500 mb-8">
          <Link href="/">Home</Link> &gt; <Link href="/speech-pathologist-inner-west-sydney-nsw">Areas</Link> &gt; Speech Pathologist Burwood
        </div>
        
        <h1 className="text-4xl font-bold text-navy-blue mb-6">Speech Pathologist in Burwood</h1>
        <p className="text-lg text-gray-700 mb-8">
          Looking for a speech pathologist in Burwood? I provide mobile speech therapy for children and adults in Burwood and surrounding suburbs. I travel to your home, your child's school, or local kindergarten — so there's no need to visit a clinic. I also offer telehealth sessions if that suits your family better.
        </p>

        <div className="flex flex-wrap gap-4 text-sm font-semibold text-navy-blue bg-blue-50 p-4 rounded-lg mb-12">
          <span>✓ CPSP Certified</span>
          <span>✓ NDIS Registered</span>
          <span>✓ Medicare Provider</span>
        </div>

        <h2 className="text-3xl font-bold text-navy-blue mb-4">Services available in Burwood</h2>
        <p className="text-gray-700 mb-8">
          Speech therapy for <Link href="/speech-therapy-autism-sydney-nsw" className="text-navy-blue font-semibold hover:underline">children with autism</Link>, ADHD, developmental delay, language delay, speech sounds, stuttering, literacy, and more. Adult speech therapy for aphasia, cognitive-communication, fluency, and neurological rehabilitation. I also provide <Link href="/speech-therapy-assessment-sydney-nsw" className="text-navy-blue font-semibold hover:underline">comprehensive assessments</Link> and detailed reports, and offer coaching for parents and support workers.
        </p>

        <h2 className="text-3xl font-bold text-navy-blue mb-4">How mobile therapy works in Burwood</h2>
        <p className="text-gray-700 mb-8">
          I bring everything needed for a full therapy session directly to your home or your child's school in Burwood. Sessions typically run 45-60 minutes. Parents and carers are welcome to observe and I'll coach you on strategies to use between sessions.
        </p>

        <h2 className="text-3xl font-bold text-navy-blue mb-4">Funding options</h2>
        <p className="text-gray-700 mb-8">
          NDIS registered (all management types), Medicare provider, private pay, Home Care Packages, DVA. Visit the <Link href="/fees" className="text-golden-amber font-semibold hover:underline">funding and fees page</Link> for full details on what's covered and current session rates.
        </p>

        <h2 className="text-3xl font-bold text-navy-blue mb-4">Languages</h2>
        <p className="text-gray-700 mb-12">
          English and Mandarin (普通话).
        </p>

        <h2 className="text-3xl font-bold text-navy-blue mb-4">Nearby suburbs</h2>
        <div className="flex flex-wrap gap-4 text-gray-700 mb-12">
          <Link href="/speech-pathologist-strathfield-nsw" className="hover:text-golden-amber">Strathfield</Link> &middot; 
          <Link href="/speech-pathologist-canterbury-bankstown-nsw" className="hover:text-golden-amber">Canterbury-Bankstown</Link> &middot; 
          <Link href="/speech-pathologist-campsie-nsw" className="hover:text-golden-amber">Campsie</Link> &middot; 
          <Link href="/speech-pathologist-inner-west-sydney-nsw" className="hover:text-golden-amber">Inner West Sydney</Link> &middot; 
          <Link href="/speech-pathologist-arncliffe-nsw" className="hover:text-golden-amber">Arncliffe</Link>
        </div>
      </div>

      <section className="py-20 bg-golden-amber text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to help your child thrive?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free discovery call to talk about your child's needs — no obligation, no pressure.
          </p>
          <Link href="/contact" className="inline-block bg-navy-blue text-white px-10 py-4 rounded-md font-bold text-xl hover:bg-blue-900 transition shadow-xl">
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </main>
  );
}
