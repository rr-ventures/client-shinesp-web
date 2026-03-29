import Link from 'next/link';
import { MapPin, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Speech Pathologist Burwood NSW | Shine and Speak',
  description: 'Mobile speech pathologist in Burwood, Inner West Sydney. Home visits, school visits & telehealth. NDIS, Medicare & private pay. Bilingual English & Mandarin.',
  alternates: {
    canonical: 'https://shineandspeak.com.au/speech-pathologist-burwood-nsw',
  },
  openGraph: {
    title: 'Speech Pathologist Burwood NSW | Shine and Speak',
    description: 'Mobile speech pathologist in Burwood, Inner West Sydney. Home visits, school visits & telehealth. NDIS, Medicare & private pay. Bilingual English & Mandarin.',
    url: 'https://shineandspeak.com.au/speech-pathologist-burwood-nsw',
    type: 'website',
    images: [{ url: 'https://shineandspeak.com.au/og-image.png', width: 1200, height: 630, alt: 'Speech Pathologist Burwood NSW' }],
  },
};

export default function BurwoodPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Speech Pathologist in Burwood",
            "provider": {
              "@type": "Organization",
              "name": "Shine and Speak"
            },
            "areaServed": {
              "@type": "City",
              "name": "Burwood"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://shineandspeak.com.au/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Areas",
              "item": "https://shineandspeak.com.au/speech-pathologist-burwood-nsw"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "Speech Pathologist Burwood",
              "item": "https://shineandspeak.com.au/speech-pathologist-burwood-nsw"
            }]
          })
        }}
      />

      {/* 1. Breadcrumb */}
      <div className="bg-accent py-4 border-b border-gray-200">
        <div className="container-custom">
          <nav className="text-sm text-gray-600 flex items-center gap-2">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>&gt;</span>
            <span className="hover:text-primary cursor-pointer">Areas</span>
            <span>&gt;</span>
            <span className="text-primary font-medium">Speech Pathologist Burwood</span>
          </nav>
        </div>
      </div>

      {/* 2. H1 + intro paragraph */}
      <section className="bg-accent pt-12 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-primary font-bold mb-6 shadow-sm border border-gray-100">
              <MapPin size={18} className="text-secondary" /> Burwood, NSW
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Speech Pathologist in Burwood
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Looking for a speech pathologist in Burwood? I provide mobile speech therapy for children and adults in Burwood and surrounding suburbs. I travel to your home, your child's school, or local kindergarten — so there's no need to visit a clinic. I also offer telehealth sessions if that suits your family better.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Trust signals strip */}
      <section className="border-y border-gray-100 bg-white py-6">
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-6 md:gap-12 text-gray-500 font-bold">
            <span>CPSP Certified</span>
            <span>NDIS Registered</span>
            <span>Medicare Provider</span>
            <span>Hanen Certified</span>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              
              {/* 4. Services available in Burwood */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Services available in Burwood</h2>
                <p className="text-lg text-gray-700">
                  Speech therapy for <Link href="/speech-therapy-autism-sydney-nsw" className="text-primary font-bold underline hover:text-secondary">children with autism</Link>, ADHD, developmental delay, language delay, speech sounds, stuttering, literacy, and more. Adult speech therapy for aphasia, cognitive-communication, fluency, and neurological rehabilitation. I also provide <Link href="/speech-therapy-assessment-sydney-nsw" className="text-primary font-bold underline hover:text-secondary">comprehensive assessments</Link> and detailed reports, and offer coaching for parents and support workers.
                </p>
              </div>

              {/* 5. How mobile therapy works in Burwood */}
              <div className="premium-card p-8 bg-accent/50">
                <h2 className="text-2xl font-bold text-primary mb-6">How mobile therapy works in Burwood</h2>
                <p className="text-lg text-gray-700">
                  I bring everything needed for a full therapy session directly to your home or your child's school in Burwood. Sessions typically run 45-60 minutes. Parents and carers are welcome to observe and I'll coach you on strategies to use between sessions.
                </p>
              </div>

              {/* 6. Funding options */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Funding options</h2>
                <p className="text-lg text-gray-700">
                  NDIS registered (all management types), Medicare provider, private pay, Home Care Packages, DVA. Visit the <Link href="/fees" className="text-primary font-bold underline hover:text-secondary">funding and fees page</Link> for full details on what's covered and current session rates.
                </p>
              </div>

              {/* 7. Languages */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Languages</h2>
                <p className="text-lg text-gray-700">
                  I provide therapy in both English and Mandarin (普通话).
                </p>
              </div>

              {/* 9. Nearby suburbs */}
              <div className="border-t border-gray-200 pt-12">
                <h2 className="text-2xl font-bold text-primary mb-6">Nearby suburbs</h2>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-lg">
                  <Link href="/speech-pathologist-strathfield-nsw" className="text-primary font-medium hover:text-secondary underline">Strathfield</Link> <span className="text-gray-300">•</span>
                  <Link href="/speech-pathologist-canterbury-bankstown-nsw" className="text-primary font-medium hover:text-secondary underline">Canterbury-Bankstown</Link> <span className="text-gray-300">•</span>
                  <Link href="/speech-pathologist-campsie-nsw" className="text-primary font-medium hover:text-secondary underline">Campsie</Link> <span className="text-gray-300">•</span>
                  <Link href="/speech-pathologist-inner-west-sydney-nsw" className="text-primary font-medium hover:text-secondary underline">Inner West Sydney</Link> <span className="text-gray-300">•</span>
                  <Link href="/speech-pathologist-arncliffe-nsw" className="text-primary font-medium hover:text-secondary underline">Arncliffe</Link>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-24 bg-primary text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Book a session in Burwood</h3>
                <p className="text-white/90 mb-6">I have current availability for mobile visits in Burwood and surrounding areas.</p>
                <ul className="space-y-3 mb-8 text-white/90">
                  <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-secondary" /> Home visits</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-secondary" /> School visits</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-secondary" /> Telehealth</li>
                </ul>
                <Link href="/book" className="block w-full btn-secondary text-center mb-4">
                  Book a Free Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA band */}
      <section className="bg-primary py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-stock-placeholder-unsplash.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-primary via-primary/90 to-primary/80"></div>
        <div className="container-custom relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Ready to help your child thrive?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Book a free discovery call to talk about your child's needs — no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12 text-white font-medium text-xl">
            <a href="tel:+61421608819" className="flex items-center gap-3 hover:text-secondary transition-colors"><span className="bg-white/10 p-3 rounded-full">📞</span> 0421 608 819</a>
            <span className="hidden sm:block opacity-30">|</span>
            <a href="mailto:admin@shineandspeak.com.au" className="flex items-center gap-3 hover:text-secondary transition-colors"><span className="bg-white/10 p-3 rounded-full">✉️</span> admin@shineandspeak.com.au</a>
          </div>
          <Link href="/book" className="btn-secondary text-lg px-12 py-5 shadow-2xl">
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </>
  );
}
