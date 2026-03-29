import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'About Shine Teoh | Speech Pathologist Sydney',
  description: 'Meet Shine Teoh, Certified Practising Speech Pathologist based in Sydney. Mobile & telehealth. Bilingual English & Mandarin. NDIS & Medicare registered provider.',
  alternates: {
    canonical: 'https://shineandspeak.com.au/about',
  },
  openGraph: {
    title: 'About Shine Teoh | Speech Pathologist Sydney',
    description: 'Meet Shine Teoh, Certified Practising Speech Pathologist based in Sydney. Mobile & telehealth. Bilingual English & Mandarin. NDIS & Medicare registered.',
    url: 'https://shineandspeak.com.au/about',
    type: 'profile',
    images: [{ url: 'https://shineandspeak.com.au/og-image.png', width: 1200, height: 630, alt: 'Shine Teoh — Speech Pathologist Sydney' }],
  },
};

export default function AboutPage() {
  return (
    <>
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
              "name": "About",
              "item": "https://shineandspeak.com.au/about"
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
            <span className="text-primary font-medium">About</span>
          </nav>
        </div>
      </div>

      {/* 2. H1 + professional photo */}
      <section className="bg-accent pt-12 pb-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Meet Shine Teoh
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Certified Practising Speech Pathologist (CPSP)
              </p>
              <div className="flex gap-4 mt-6">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-8 border-white">
              {/* <!-- REPLACE: Professional headshot, warm and approachable --> */}
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                <span className="text-primary font-bold bg-white/80 px-6 py-3 rounded-full backdrop-blur-sm">
                  [Shine Teoh Headshot]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-16">
            
            {/* 3. Personal introduction */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">About me</h2>
              <p className="text-lg text-gray-700 mb-4">
                I'm Shine, a Certified Practising Speech Pathologist. I started Shine and Speak because I believe every person deserves access to high-quality, personalised speech therapy that makes a genuine difference in their everyday life — not just therapy for the sake of therapy.
              </p>
            </div>

            {/* 4. My approach */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">My approach</h2>
              <p className="text-lg text-gray-700 mb-4">
                I take a client-centred, strengths-based approach. I start with what you or your child can already do, what matters to you, and what goals will make the biggest difference in daily life. I tailor every session to the individual — their interests, their strengths, and their real-world needs.
              </p>
              <p className="text-lg text-gray-700">
                I'm a big believer in collaboration. I work closely with families, teachers, support coordinators, and other professionals to make sure therapy is consistent and coordinated across all environments.
              </p>
            </div>

            {/* 5. Qualifications */}
            <div className="bg-accent p-8 rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-6">Qualifications & Registrations</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> <span className="text-gray-700 text-lg">Bachelor of Speech Pathology</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> <span className="text-gray-700 text-lg">Certified Practising Member, Speech Pathology Australia (CPSP)</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> <span className="text-gray-700 text-lg">NDIS Registered Provider</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> <span className="text-gray-700 text-lg">Medicare Registered Provider</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> <span className="text-gray-700 text-lg">Hanen Certified</span></li>
              </ul>
            </div>

            {/* 6. Bilingual practice */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Bilingual practice</h2>
              <p className="text-lg text-gray-700 mb-4">
                I provide speech therapy and assessments in English and Mandarin (普通话). Assessing a child in only one language can underestimate their true abilities. I ensure assessments are accurate, therapy is accessible, and communication with your family is clear.
              </p>
              <p className="text-lg text-gray-700">
                This is especially important for families who speak Mandarin at home but need therapy delivered in an English-speaking school environment.
              </p>
            </div>

            {/* 7. What I work with */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">What I work with</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/speech-therapy-autism-sydney-nsw" className="bg-white border border-gray-200 p-4 rounded-xl hover:border-secondary hover:shadow-md transition-all text-primary font-bold">Autism & ASD</Link>
                <Link href="/speech-therapy-adhd-sydney-nsw" className="bg-white border border-gray-200 p-4 rounded-xl hover:border-secondary hover:shadow-md transition-all text-primary font-bold">ADHD & Attention</Link>
                <Link href="/speech-therapy-language-delay-sydney-nsw" className="bg-white border border-gray-200 p-4 rounded-xl hover:border-secondary hover:shadow-md transition-all text-primary font-bold">Language Delay</Link>
                <Link href="/speech-therapy-speech-sounds-sydney-nsw" className="bg-white border border-gray-200 p-4 rounded-xl hover:border-secondary hover:shadow-md transition-all text-primary font-bold">Speech Sounds</Link>
                <Link href="/speech-therapy-stuttering-sydney-nsw" className="bg-white border border-gray-200 p-4 rounded-xl hover:border-secondary hover:shadow-md transition-all text-primary font-bold">Stuttering & Fluency</Link>
                <Link href="/speech-therapy-literacy-sydney-nsw" className="bg-white border border-gray-200 p-4 rounded-xl hover:border-secondary hover:shadow-md transition-all text-primary font-bold">Literacy & Reading</Link>
              </div>
            </div>

            {/* 8. Video introduction */}
            <div className="bg-gray-900 rounded-3xl overflow-hidden aspect-video md:aspect-[21/9] relative flex items-center justify-center">
              {/* <!-- PLACEHOLDER: Embed therapist intro video. 1-2 minutes. --> */}
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                </div>
                <span className="text-white font-bold text-lg">
                  [Video Introduction Placeholder]
                </span>
              </div>
            </div>

            {/* 9. Personal section */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Beyond the clinic</h2>
              <p className="text-lg text-gray-700">
                {/* <!-- PLACEHOLDER: Brief personal background --> */}
                When I'm not working with families, you can usually find me exploring Sydney's local cafes, reading a good book, or spending time outdoors. I've always been fascinated by how communication connects us all, which is what drew me to speech pathology in the first place.
              </p>
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
