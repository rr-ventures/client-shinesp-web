import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'About Shine Yin Teoh | Speech Pathologist Sydney',
  description: 'Meet Shine Yin Teoh, Certified Practising Speech Pathologist based in Sydney. Mobile & telehealth. Bilingual English & Mandarin. NDIS & Medicare registered provider.',
  alternates: {
    canonical: 'https://shineandspeak.com.au/about',
  },
  openGraph: {
    title: 'About Shine Yin Teoh | Speech Pathologist Sydney',
    description: 'Meet Shine Yin Teoh, Certified Practising Speech Pathologist based in Sydney. Mobile & telehealth. Bilingual English & Mandarin. NDIS & Medicare registered.',
    url: 'https://shineandspeak.com.au/about',
    type: 'profile',
    images: [{ url: 'https://shineandspeak.com.au/og-image.png', width: 1200, height: 630, alt: 'Shine Yin Teoh — Speech Pathologist Sydney' }],
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
                Meet Shine Yin Teoh
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
            <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white transform hover:scale-[1.02] transition-transform duration-500">
              {/* <!-- REPLACE: Professional headshot, warm and approachable --> */}
              <img src="/shine-headshot-1200x1200.webp" alt="Shine Yin Teoh Headshot" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-40"></div>
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
                I'm Shine Yin Teoh, a Certified Practising Speech Pathologist. I started Shine and Speak because I believe every person deserves access to high-quality, personalised speech therapy that makes a genuine difference in their everyday life — not just therapy for the sake of therapy.
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
            <div className="premium-card p-8 bg-accent/50">
              <h2 className="text-2xl font-bold text-primary mb-6">Qualifications & Registrations</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> <span className="text-gray-700 text-lg">Bachelor of Speech Pathology</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> <span className="text-gray-700 text-lg">Meets <a href="https://www.speechpathologyaustralia.org.au" target="_blank" rel="noopener noreferrer" className="text-primary font-medium underline decoration-secondary/30 hover:text-secondary underline-offset-4">Speech Pathology Australia&apos;s certification standards</a> as a Certified Practising Member (CPSP)</span></li>
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
      <section className="bg-primary py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-stock-placeholder-unsplash.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-primary via-primary/90 to-primary/80"></div>
        <div className="container-custom relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Ready to help your child thrive?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Book a free discovery call to talk about your child's needs — no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12 text-white font-medium text-xl">
            <a href="tel:0421608819" className="flex items-center gap-3 hover:text-secondary transition-colors"><span className="bg-white/10 p-3 rounded-full">📞</span> 0421 608 819</a>
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
