import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Speech Therapy for Autism Sydney NSW | Shine and Speak',
  description: 'Personalised speech therapy for children with autism and ASD in Sydney. Mobile, telehealth & school-based. NDIS & Medicare. Bilingual English & Mandarin.',
  alternates: {
    canonical: 'https://shineandspeak.com.au/speech-therapy-autism-sydney-nsw',
  },
  openGraph: {
    title: 'Speech Therapy for Autism Sydney NSW | Shine and Speak',
    description: 'Personalised speech therapy for children with autism and ASD in Sydney. Mobile, telehealth & school-based. NDIS & Medicare. Bilingual English & Mandarin.',
    url: 'https://shineandspeak.com.au/speech-therapy-autism-sydney-nsw',
    type: 'website',
    images: [{ url: 'https://shineandspeak.com.au/og-image.png', width: 1200, height: 630, alt: 'Speech Therapy for Autism Sydney NSW' }],
  },
};

export default function AutismPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Speech Therapy for Autism and ASD",
            "provider": {
              "@type": "MedicalBusiness",
              "name": "Shine and Speak"
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": -33.9369,
                "longitude": 151.1539
              },
              "geoRadius": "30000"
            },
            "description": "Personalised speech therapy for children with autism and ASD in Sydney. Mobile, telehealth & school-based."
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is autism spectrum disorder?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Autism is a neurodevelopmental condition that affects how a person communicates, interacts with others, and experiences the world."
                }
              }
            ]
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
              "name": "Services",
              "item": "https://shineandspeak.com.au/paediatric-speech-therapy-sydney-nsw"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "Speech Therapy for Autism",
              "item": "https://shineandspeak.com.au/speech-therapy-autism-sydney-nsw"
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
            <Link href="/paediatric-speech-therapy-sydney-nsw" className="hover:text-primary">Services</Link>
            <span>&gt;</span>
            <span className="text-primary font-medium">Speech Therapy for Autism</span>
          </nav>
        </div>
      </div>

      {/* 2. H1 + intro paragraph */}
      <section className="bg-accent pt-12 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Speech Therapy for Autism and ASD in Sydney
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              I provide personalised, strengths-based speech therapy for children on the autism spectrum in Sydney's Inner West and surrounds. I focus on building communication skills that help your child connect with others, express their needs, and participate more fully in everyday life — at home, at school, and in the community.
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
              
              {/* 4. What is autism spectrum disorder? */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">What is autism spectrum disorder?</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Autism is a neurodevelopmental condition that affects how a person communicates, interacts with others, and experiences the world. Every child on the spectrum is different — some may have difficulty with spoken language, others may find social communication challenging, and some may benefit from alternative communication methods like AAC.
                </p>
                <p className="text-lg text-gray-700">
                  There's no single approach that works for everyone, which is why therapy needs to be tailored to your child's individual strengths, interests, and goals.
                </p>
              </div>

              {/* 5. Signs to look for */}
              <div className="bg-accent p-8 rounded-2xl border border-gray-100">
                <h2 className="text-2xl font-bold text-primary mb-6">Signs to look for</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> <span className="text-gray-700 text-lg">Limited or no spoken language for their age</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> <span className="text-gray-700 text-lg">Difficulty with back-and-forth conversation or taking turns</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> <span className="text-gray-700 text-lg">Challenges understanding what others say or following instructions</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> <span className="text-gray-700 text-lg">Repetitive use of words or phrases (echolalia)</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> <span className="text-gray-700 text-lg">Trouble understanding social cues, body language, or facial expressions</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> <span className="text-gray-700 text-lg">Preference for routine and difficulty with transitions</span></li>
                </ul>
              </div>

              {/* 6. How speech therapy helps */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">How speech therapy helps</h2>
                <p className="text-lg text-gray-700">
                  I work on building vocabulary and sentence structure, developing social communication and play skills, exploring AAC options for children who need alternative ways to communicate, supporting transitions between activities and environments, and coaching parents and support workers on strategies they can use at home and school every day.
                </p>
              </div>

              {/* 7. What to expect in sessions */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">What to expect in sessions</h2>
                <p className="text-lg text-gray-700">
                  Sessions are play-based, structured around your child's interests, and take place in familiar environments — your home, their school, or online. I also provide practical coaching for parents and support workers so communication strategies are used consistently across all settings. Learn more about <Link href="/how-it-works" className="text-primary font-bold underline hover:text-secondary">how therapy works</Link> and what your first session looks like.
                </p>
              </div>

              {/* 8. Parent and support worker coaching */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Parent and support worker coaching</h2>
                <p className="text-lg text-gray-700">
                  I believe parents and support workers are essential partners in therapy. I provide practical coaching and training so you can confidently support your child's communication development between sessions — during mealtimes, play, outings, and transitions. This means your child gets more practice throughout the day, not just during therapy sessions.
                </p>
              </div>

              {/* 9. Funding your child's therapy */}
              <div className="bg-primary text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4 text-white">Funding your child's therapy</h2>
                <p className="text-gray-200 text-lg mb-6">
                  Speech therapy for autism is covered under most NDIS plans and may be eligible for Medicare rebates with a referral from your GP. I accept all NDIS management types. Find out more about <Link href="/ndis-speech-therapy-sydney-nsw" className="text-secondary font-bold underline hover:text-white">NDIS funding for speech therapy</Link> or check the full list of <Link href="/fees" className="text-secondary font-bold underline hover:text-white">funding options and fees</Link>.
                </p>
              </div>

              {/* 10. Related conditions */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Related conditions</h2>
                <p className="text-lg text-gray-700">
                  Many children on the autism spectrum also experience challenges with <Link href="/speech-therapy-adhd-sydney-nsw" className="text-primary font-bold underline hover:text-secondary">attention and focus</Link>, <Link href="/speech-therapy-language-delay-sydney-nsw" className="text-primary font-bold underline hover:text-secondary">language development</Link>, <Link href="/speech-therapy-social-communication-sydney-nsw" className="text-primary font-bold underline hover:text-secondary">social communication</Link>, or may benefit from <Link href="/speech-therapy-aac-sydney-nsw" className="text-primary font-bold underline hover:text-secondary">AAC and multimodal communication support</Link>. I work across all of these areas.
                </p>
              </div>

            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-24 bg-accent p-8 rounded-2xl border border-gray-200">
                <h3 className="text-2xl font-bold text-primary mb-4">Ready to get started?</h3>
                <p className="text-gray-700 mb-6">Book a free discovery call to discuss your child's needs and see if we're the right fit.</p>
                <Link href="/book" className="block w-full bg-secondary text-primary-foreground px-6 py-4 rounded-full font-bold text-center hover:bg-opacity-90 transition-all mb-4 shadow-md">
                  Book a Free Call
                </Link>
                <Link href="/refer-a-client" className="block w-full border-2 border-primary text-primary px-6 py-4 rounded-full font-bold text-center hover:bg-primary hover:text-primary-foreground transition-all">
                  Refer a Client
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CTA band */}
      <section className="bg-secondary py-16 text-primary-foreground text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Ready to help your child thrive?</h2>
          <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto font-medium">
            Book a free discovery call to talk about your child's needs — no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8 text-primary font-bold text-lg">
            <a href="tel:+61400000000" className="flex items-center gap-2 hover:opacity-80">📞 0400 000 000</a>
            <span className="hidden sm:block opacity-50">•</span>
            <a href="mailto:admin@shineandspeak.com.au" className="flex items-center gap-2 hover:opacity-80">✉️ admin@shineandspeak.com.au</a>
          </div>
          <Link href="/book" className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:-translate-y-1">
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </>
  );
}
