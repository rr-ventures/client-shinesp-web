import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Home, 
  Globe, 
  MapPin, 
  School, 
  Car, 
  Languages, 
  ShieldCheck, 
  HeartHandshake,
  Brain,
  MessageCircle,
  Ear,
  Smile,
  BookOpen,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Speech Pathologist Sydney | Shine and Speak',
  description: 'Mobile speech therapy for children in Sydney — delivered to your home, school, or online. Bilingual English & Mandarin. NDIS, Medicare & private pay. Serving Inner West Sydney, NSW.',
  alternates: {
    canonical: 'https://shineandspeak.com.au/',
  },
  openGraph: {
    title: 'Speech Pathologist Sydney | Shine and Speak',
    description: 'Mobile speech therapy for children in Sydney — delivered to your home, school, or online. Bilingual English & Mandarin. NDIS & Medicare.',
    url: 'https://shineandspeak.com.au/',
    images: [{ url: 'https://shineandspeak.com.au/og-image.png', width: 1200, height: 630, alt: 'Shine and Speak — Mobile Speech Pathology Sydney' }],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Shine and Speak",
            "image": "https://shineandspeak.com.au/logo.png",
            "telephone": "+61-400-000-000",
            "email": "admin@shineandspeak.com.au",
            "url": "https://shineandspeak.com.au",
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": -33.9369,
                "longitude": 151.1539
              },
              "geoRadius": "30000"
            },
            "medicalSpecialty": "Speech Pathology",
            "priceRange": "$$"
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
                "name": "How do I know if my child needs speech therapy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If you're concerned about how your child communicates — whether it's how they pronounce words, how much they understand, how they put sentences together, or how they interact with others — it's worth getting an assessment."
                }
              },
              {
                "@type": "Question",
                "name": "What does a typical session look like?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sessions are usually 45–60 minutes and take place at your home, your child's school, or online. I use play-based, evidence-based activities tailored to your child's interests and goals."
                }
              },
              {
                "@type": "Question",
                "name": "How much does speech therapy cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fees depend on the type of session and funding source. I'm a registered NDIS provider and Medicare provider, and I also see private clients."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer telehealth?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. I provide telehealth sessions to clients across Australia. Telehealth works well for many children and adults."
                }
              },
              {
                "@type": "Question",
                "name": "What areas do you travel to?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "I travel within a 30-minute radius of Arncliffe for ongoing therapy — including Burwood, Hurstville, Strathfield, Canterbury-Bankstown, Campsie, Rockdale, Kogarah, and Marrickville."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get started?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Book a free discovery call. We'll chat about your child's needs and I'll explain how the process works."
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
            }]
          })
        }}
      />

      {/* 1. HERO */}
      <section className="bg-accent pt-20 pb-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/hero-stock-placeholder-unsplash.jpg')] bg-cover bg-center opacity-5 mix-blend-multiply"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Speech Pathologist in Sydney, NSW | Bilingual English &amp; Mandarin
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 font-light">
                Personalised speech therapy delivered to your home, school, or online. Helping your child communicate with confidence. Available in English and Mandarin (普通话). Serving Inner West Sydney and surrounds.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 mb-10">
                <Link href="/book" className="btn-secondary text-lg px-8 py-4">
                  Book a Free Discovery Call
                </Link>
                <a href="#differentiators" className="btn-outline text-lg px-8 py-4 gap-2">
                  Learn More <ArrowRight size={20} />
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-primary bg-white/80 p-5 rounded-2xl backdrop-blur-md inline-flex shadow-sm border border-white">
                <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-secondary" /> CPSP Certified</span>
                <span className="text-gray-300">|</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-secondary" /> NDIS Registered</span>
                <span className="text-gray-300">|</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-secondary" /> Medicare Provider</span>
              </div>
            </div>
            <div className="relative h-[550px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white transform hover:-translate-y-2 transition-transform duration-500">
              {/* <!-- REPLACE: Professional photo of Shine Yin Teoh working with a child --> */}
              <img src="/v1/hero-stock-placeholder-unsplash.jpg" alt="Shine Yin Teoh working with a child" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST LOGO BAR */}
      <section className="border-y border-gray-100 bg-white py-10">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="text-xl font-serif font-bold text-primary">Speech Pathology Australia</div>
            <div className="text-xl font-serif font-bold text-primary">I ❤ NDIS</div>
            <div className="text-xl font-serif font-bold text-primary">Medicare</div>
            <div className="text-xl font-serif font-bold text-primary">Hanen Certified</div>
          </div>
        </div>
      </section>

      {/* 3. DIFFERENTIATORS */}
      <section id="differentiators" className="section-padding bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Why families choose Shine and Speak</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="premium-card p-10 text-center flex flex-col items-center">
              <div className="bg-accent w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-sm text-secondary">
                <Car size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">We come to you</h3>
              <p className="text-gray-600 text-sm leading-relaxed">No clinic visits needed. I travel to your home, school, or daycare — wherever your child is most comfortable and most likely to thrive.</p>
            </div>
            <div className="premium-card p-10 text-center flex flex-col items-center">
              <div className="bg-accent w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-sm text-secondary">
                <Languages size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Bilingual Therapy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">I provide speech therapy and assessments in both English and Mandarin, ensuring accurate evaluation of your child's true language abilities.</p>
            </div>
            <div className="premium-card p-10 text-center flex flex-col items-center">
              <div className="bg-accent w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-sm text-secondary">
                <ShieldCheck size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Flexible Funding</h3>
              <p className="text-gray-600 text-sm leading-relaxed">I'm a registered NDIS provider accepting all management types, a Medicare provider, and I also work with private clients.</p>
            </div>
            <div className="premium-card p-10 text-center flex flex-col items-center">
              <div className="bg-accent w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-sm text-secondary">
                <HeartHandshake size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Evidence-based</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Every therapy plan is grounded in current evidence and focused on practical goals that make a real difference in your child's daily life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE MOBILE ADVANTAGE */}
      <section className="section-padding bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 blur-[120px] rounded-full"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Therapy where your child is most comfortable</h2>
              <p className="text-white/90 text-lg mb-6 font-light">
                Research shows that children learn communication skills best in their everyday environments. That's why I come to you — whether that's your home, your child's school, kindergarten, or daycare. Therapy happens where your child naturally communicates, which means skills transfer more easily into daily life.
              </p>
              <p className="text-white/90 text-lg mb-8 font-light">
                This is not a compromise — it's a clinical advantage. Children are more relaxed, more engaged, and more likely to use new skills when they're learning in familiar settings.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white flex items-center gap-4 mb-3">
                  <span className="bg-secondary/20 p-3 rounded-xl text-secondary"><Home size={24} /></span> Home sessions
                </h3>
                <p className="text-white/90 font-light pl-16">Therapy in the comfort of your own home. I bring everything needed. No travel stress for your family.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white flex items-center gap-4 mb-3">
                  <span className="bg-secondary/20 p-3 rounded-xl text-secondary"><School size={24} /></span> School & kindergarten visits
                </h3>
                <p className="text-white/90 font-light pl-16">Working with your child in their learning environment, with the option to coordinate directly with their teachers.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white flex items-center gap-4 mb-3">
                  <span className="bg-secondary/20 p-3 rounded-xl text-secondary"><Globe size={24} /></span> Telehealth across Australia
                </h3>
                <p className="text-white/90 font-light pl-16"><Link href="/telehealth-speech-therapy-sydney-nsw" className="text-secondary hover:underline">Flexible online sessions</Link> from anywhere. Ideal for families in regional areas, or when in-person isn't possible.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white flex items-center gap-4 mb-3">
                  <span className="bg-secondary/20 p-3 rounded-xl text-secondary"><MapPin size={24} /></span> Inner West Sydney & surrounds
                </h3>
                <p className="text-white/90 font-light pl-16">I travel within 30 minutes of Arncliffe, including <Link href="/speech-pathologist-burwood-nsw" className="text-secondary hover:underline">Burwood</Link>, Hurstville, Strathfield, and surrounding suburbs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONDITION CARDS */}
      <section className="section-padding bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">How I can help your child</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Link href="/speech-therapy-autism-sydney-nsw" className="group premium-card p-10 flex flex-col h-full">
              <div className="bg-accent-blue w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Brain size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Autism & ASD</h3>
              <p className="text-gray-600 mb-8 flex-grow font-light leading-relaxed">Supporting children on the autism spectrum with communication, social skills, and language development.</p>
              <span className="text-secondary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Autism speech therapy in Sydney <ArrowRight size={18} /></span>
            </Link>
            
            <Link href="/speech-therapy-adhd-sydney-nsw" className="group premium-card p-10 flex flex-col h-full">
              <div className="bg-accent-blue w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Smile size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">ADHD & Attention</h3>
              <p className="text-gray-600 mb-8 flex-grow font-light leading-relaxed">Helping children with ADHD develop focus, listening skills, and social communication strategies.</p>
              <span className="text-secondary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">ADHD language support <ArrowRight size={18} /></span>
            </Link>
            
            <Link href="/speech-therapy-language-delay-sydney-nsw" className="group premium-card p-10 flex flex-col h-full">
              <div className="bg-accent-blue w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <MessageCircle size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Language Delay</h3>
              <p className="text-gray-600 mb-8 flex-grow font-light leading-relaxed">Building receptive and expressive language skills so your child can understand and be understood.</p>
              <span className="text-secondary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Language delay therapy <ArrowRight size={18} /></span>
            </Link>
            
            <Link href="/speech-therapy-speech-sounds-sydney-nsw" className="group premium-card p-10 flex flex-col h-full">
              <div className="bg-accent-blue w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Ear size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Speech Sounds</h3>
              <p className="text-gray-600 mb-8 flex-grow font-light leading-relaxed">Helping children pronounce sounds clearly so they can be understood by family, friends, and teachers.</p>
              <span className="text-secondary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Speech sounds & articulation therapy <ArrowRight size={18} /></span>
            </Link>
            
            <Link href="/speech-therapy-stuttering-sydney-nsw" className="group premium-card p-10 flex flex-col h-full">
              <div className="bg-accent-blue w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <MessageCircle size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Stuttering & Fluency</h3>
              <p className="text-gray-600 mb-8 flex-grow font-light leading-relaxed">Evidence-based support for children and adults experiencing stuttering or other fluency difficulties.</p>
              <span className="text-secondary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Stuttering & fluency therapy <ArrowRight size={18} /></span>
            </Link>
            
            <Link href="/speech-therapy-literacy-sydney-nsw" className="group premium-card p-10 flex flex-col h-full">
              <div className="bg-accent-blue w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <BookOpen size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Literacy & Reading</h3>
              <p className="text-gray-600 mb-8 flex-grow font-light leading-relaxed">Supporting reading, writing, and spelling development for children who are finding literacy challenging.</p>
              <span className="text-secondary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Literacy & reading support <ArrowRight size={18} /></span>
            </Link>
          </div>
          
          <div className="premium-card p-10 text-center max-w-4xl mx-auto bg-white">
            <p className="text-gray-700 text-lg font-light">
              I also support children and adults with developmental delay, intellectual disability, social communication difficulties, AAC and multimodal communication, and adults recovering from stroke, brain injury, and neurological conditions. <Link href="/paediatric-speech-therapy-sydney-nsw" className="text-primary font-medium hover:text-secondary underline decoration-secondary/30 underline-offset-4">Explore all services</Link> or learn about <Link href="/adult-speech-therapy-sydney-nsw" className="text-primary font-medium hover:text-secondary underline decoration-secondary/30 underline-offset-4">adult speech therapy options</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Getting started is simple</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gray-200 -z-10"></div>
            
            <div className="text-center relative group">
              <div className="w-24 h-24 bg-white text-primary rounded-full flex items-center justify-center text-3xl font-serif font-bold mx-auto mb-8 shadow-[0_0_40px_rgba(27,54,93,0.08)] border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors duration-500">1</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Book a free call</h3>
              <p className="text-gray-600 font-light leading-relaxed">We'll have a quick chat about your child's needs, answer your questions, and work out whether I'm the right fit. No obligation, no pressure.</p>
            </div>
            
            <div className="text-center relative group">
              <div className="w-24 h-24 bg-white text-primary rounded-full flex items-center justify-center text-3xl font-serif font-bold mx-auto mb-8 shadow-[0_0_40px_rgba(27,54,93,0.08)] border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors duration-500">2</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Assessment</h3>
              <p className="text-gray-600 font-light leading-relaxed">I'll complete a thorough assessment — at your home, your child's school, or online — to understand their strengths, challenges, and goals. You'll receive a detailed report.</p>
            </div>
            
            <div className="text-center relative group">
              <div className="w-24 h-24 bg-white text-primary rounded-full flex items-center justify-center text-3xl font-serif font-bold mx-auto mb-8 shadow-[0_0_40px_rgba(27,54,93,0.08)] border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors duration-500">3</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Therapy plan</h3>
              <p className="text-gray-600 font-light leading-relaxed">You'll receive a personalised therapy plan focused on practical, real-life progress. I'll work closely with you and your child's teachers to ensure consistency.</p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link href="/book" className="btn-primary text-lg px-10 py-4">
              Book Your Free Discovery Call <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. MEET THE THERAPIST */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">Meet Shine Yin Teoh</h2>
              <p className="text-gray-600 text-lg mb-6 font-light leading-relaxed">
                Hi, I'm Shine Yin Teoh — a Certified Practising Speech Pathologist. I'm passionate about providing high-quality, personalised speech therapy that makes a genuine difference in everyday life.
              </p>
              <p className="text-gray-600 text-lg mb-6 font-light leading-relaxed">
                I specialise in working with children and adults with a wide range of communication needs, including children on the autism spectrum, children with ADHD, developmental delay, language disorders, and literacy difficulties. I also support adults recovering from stroke, brain injury, and other neurological conditions.
              </p>
              <p className="text-gray-600 text-lg mb-10 font-light leading-relaxed">
                I speak English and Mandarin, and I'm committed to providing culturally responsive services for diverse families. I believe therapy should be practical, collaborative, and built around your goals — not a one-size-fits-all approach.
              </p>
              
              <div className="mb-10">
                <Link href="/zh" className="text-primary font-medium hover:text-secondary underline decoration-secondary/30 underline-offset-4">
                  了解更多 / Learn More in Chinese
                </Link>
              </div>
              
              <div className="bg-accent p-8 rounded-2xl mb-10 border border-gray-100 shadow-sm">
                <ul className="space-y-4 font-medium text-primary">
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" size={22} /> Bachelor of Speech Pathology</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" size={22} /> Certified Practising Member, Speech Pathology Australia (CPSP)</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" size={22} /> NDIS Registered Provider</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" size={22} /> Medicare Registered Provider</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" size={22} /> Hanen Certified</li>
                </ul>
              </div>
              
              <Link href="/about" className="text-primary font-bold flex items-center gap-2 hover:text-secondary transition-colors text-lg group">
                Read more about my approach and qualifications <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img src="/v1/shine-headshot-1200x1200.webp" alt="Shine Yin Teoh Headshot" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SOCIAL PROOF */}
      <section className="section-padding bg-accent-blue">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">What families say</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          {/* <!-- PASTE GOOGLE REVIEWS EMBED CODE HERE --> */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="premium-card p-10">
              <div className="flex text-secondary mb-6 gap-1">★★★★★</div>
              <p className="text-gray-600 italic mb-6 font-light leading-relaxed">"Review coming soon — Shine and Speak is a new practice. In the meantime, here are the credentials and training that back our work."</p>
            </div>
            <div className="premium-card p-10">
              <div className="flex text-secondary mb-6 gap-1">★★★★★</div>
              <p className="text-gray-600 italic mb-6 font-light leading-relaxed">"Review coming soon — Shine and Speak is a new practice. In the meantime, here are the credentials and training that back our work."</p>
            </div>
            <div className="premium-card p-10">
              <div className="flex text-secondary mb-6 gap-1">★★★★★</div>
              <p className="text-gray-600 italic mb-6 font-light leading-relaxed">"Review coming soon — Shine and Speak is a new practice. In the meantime, here are the credentials and training that back our work."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOR SUPPORT COORDINATORS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-primary text-white rounded-[3rem] p-10 md:p-20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/3"></div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Are you a Support Coordinator?</h2>
              <p className="text-xl text-white/90 mb-10 font-light leading-relaxed">
                I work closely with NDIS support coordinators to provide timely, high-quality speech therapy with clear communication and detailed reporting. I understand the referral process and I make it easy for you.
              </p>
              <ul className="space-y-5 mb-12 text-lg">
                <li className="flex items-start gap-4"><CheckCircle2 className="text-secondary shrink-0 mt-1" size={24} /> <span className="font-light">Fast response to referrals — I aim to respond within 24 hours</span></li>
                <li className="flex items-start gap-4"><CheckCircle2 className="text-secondary shrink-0 mt-1" size={24} /> <span className="font-light">Detailed <Link href="/speech-therapy-reports-sydney-nsw" className="underline hover:text-secondary transition-colors">progress reports and session summaries</Link></span></li>
                <li className="flex items-start gap-4"><CheckCircle2 className="text-secondary shrink-0 mt-1" size={24} /> <span className="font-light">Flexible scheduling — mobile and telehealth</span></li>
                <li className="flex items-start gap-4"><CheckCircle2 className="text-secondary shrink-0 mt-1" size={24} /> <span className="font-light">Support for plan reviews with clear, specific recommendations</span></li>
                <li className="flex items-start gap-4"><CheckCircle2 className="text-secondary shrink-0 mt-1" size={24} /> <span className="font-light">All NDIS management types accepted (self-managed, plan-managed, NDIA-managed)</span></li>
              </ul>
              <div className="flex flex-wrap gap-5">
                <Link href="/refer-a-client" className="btn-secondary text-lg px-8 py-4">
                  Refer a Client <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link href="/ndis-service-guide-support-coordinators" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                  Download NDIS Service Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Common questions from parents</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="premium-card p-8 md:p-10">
              <h3 className="text-2xl font-bold text-primary mb-4">How do I know if my child needs speech therapy?</h3>
              <p className="text-gray-600 text-lg font-light leading-relaxed">If you're concerned about how your child communicates — whether it's how they pronounce words, how much they understand, how they put sentences together, or how they interact with others — it's worth getting an assessment. I offer a free discovery call where we can talk through your concerns and I can help you decide whether a full assessment would be helpful.</p>
            </div>
            
            <div className="premium-card p-8 md:p-10">
              <h3 className="text-2xl font-bold text-primary mb-4">What does a typical session look like?</h3>
              <p className="text-gray-600 text-lg font-light leading-relaxed">Sessions are usually 45–60 minutes and take place at your home, your child's school, or online. I use play-based, evidence-based activities tailored to your child's interests and goals. I also spend time coaching you on strategies you can use between sessions so progress doesn't stop when I leave.</p>
            </div>
            
            <div className="premium-card p-8 md:p-10">
              <h3 className="text-2xl font-bold text-primary mb-4">How much does speech therapy cost?</h3>
              <p className="text-gray-600 text-lg font-light leading-relaxed">Fees depend on the type of session and funding source. I'm a registered NDIS provider and Medicare provider, and I also see private clients. Visit my <Link href="/fees" className="text-primary font-medium underline decoration-secondary/30 hover:text-secondary underline-offset-4">fees and pricing page</Link> for current rates and information about what your fund covers.</p>
            </div>
            
            <div className="premium-card p-8 md:p-10">
              <h3 className="text-2xl font-bold text-primary mb-4">Do you offer telehealth?</h3>
              <p className="text-gray-600 text-lg font-light leading-relaxed">Yes. I provide telehealth sessions to clients across Australia. Telehealth works well for many children and adults, and I can deliver sessions to your home, your child's school, or any setting with a stable internet connection. Learn more about <Link href="/telehealth-speech-therapy-sydney-nsw" className="text-primary font-medium underline decoration-secondary/30 hover:text-secondary underline-offset-4">telehealth speech therapy</Link>.</p>
            </div>
            
            <div className="premium-card p-8 md:p-10">
              <h3 className="text-2xl font-bold text-primary mb-4">What areas do you travel to?</h3>
              <p className="text-gray-600 text-lg font-light leading-relaxed">I travel within a 30-minute radius of Arncliffe for ongoing therapy — including Burwood, Hurstville, Strathfield, Canterbury-Bankstown, Campsie, Rockdale, Kogarah, and Marrickville. I also travel across greater Sydney for one-off assessments and report writing. <Link href="/speech-pathologist-burwood-nsw" className="text-primary font-medium underline decoration-secondary/30 hover:text-secondary underline-offset-4">Find your nearest service area</Link>.</p>
            </div>
            
            <div className="premium-card p-8 md:p-10">
              <h3 className="text-2xl font-bold text-primary mb-4">How do I get started?</h3>
              <p className="text-gray-600 text-lg font-light leading-relaxed">Book a free discovery call. We'll chat about your child's needs and I'll explain how the process works. You can also call me directly or refer a client if you're a support coordinator.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. SERVICE AREA */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-primary mb-8">Areas I serve in Sydney</h2>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-gray-500 font-light text-lg">
            <Link href="/speech-pathologist-arncliffe-nsw" className="hover:text-secondary hover:underline underline-offset-4 transition-colors">Arncliffe</Link> <span className="text-gray-300">|</span>
            <Link href="/speech-pathologist-burwood-nsw" className="hover:text-secondary hover:underline underline-offset-4 transition-colors">Burwood</Link> <span className="text-gray-300">|</span>
            <Link href="/speech-pathologist-hurstville-nsw" className="hover:text-secondary hover:underline underline-offset-4 transition-colors">Hurstville</Link> <span className="text-gray-300">|</span>
            <Link href="/speech-pathologist-strathfield-nsw" className="hover:text-secondary hover:underline underline-offset-4 transition-colors">Strathfield</Link> <span className="text-gray-300">|</span>
            <Link href="/speech-pathologist-canterbury-bankstown-nsw" className="hover:text-secondary hover:underline underline-offset-4 transition-colors">Canterbury-Bankstown</Link> <span className="text-gray-300">|</span>
            <Link href="/speech-pathologist-campsie-nsw" className="hover:text-secondary hover:underline underline-offset-4 transition-colors">Campsie</Link> <span className="text-gray-300">|</span>
            <Link href="/speech-pathologist-rockdale-nsw" className="hover:text-secondary hover:underline underline-offset-4 transition-colors">Rockdale</Link> <span className="text-gray-300">|</span>
            <Link href="/speech-pathologist-kogarah-nsw" className="hover:text-secondary hover:underline underline-offset-4 transition-colors">Kogarah</Link> <span className="text-gray-300">|</span>
            <Link href="/speech-pathologist-marrickville-nsw" className="hover:text-secondary hover:underline underline-offset-4 transition-colors">Marrickville</Link> <span className="text-gray-300">|</span>
            <Link href="/speech-pathologist-inner-west-sydney-nsw" className="hover:text-secondary hover:underline underline-offset-4 transition-colors">Inner West Sydney</Link> <span className="text-gray-300">|</span>
            <Link href="/speech-pathologist-st-george-nsw" className="hover:text-secondary hover:underline underline-offset-4 transition-colors">St George</Link> <span className="text-gray-300">|</span>
            <Link href="/telehealth-speech-therapy-sydney-nsw" className="hover:text-secondary hover:underline underline-offset-4 transition-colors">Telehealth Australia-wide</Link>
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA BAND */}
      <section className="bg-primary py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-stock-placeholder-unsplash.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-primary via-primary/90 to-primary/80"></div>
        <div className="container-custom relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Ready to help your child thrive?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Book a free discovery call to talk about your child's needs — no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12 text-white font-medium text-xl">
            <a href="tel:0421608819" className="flex items-center gap-3 hover:text-secondary transition-colors"><span className="bg-white/10 p-3 rounded-full"><Ear size={20} /></span> 0421 608 819</a>
            <span className="hidden sm:block opacity-30">|</span>
            <a href="mailto:admin@shineandspeak.com.au" className="flex items-center gap-3 hover:text-secondary transition-colors"><span className="bg-white/10 p-3 rounded-full"><MessageCircle size={20} /></span> admin@shineandspeak.com.au</a>
          </div>
          <Link href="/book" className="btn-secondary text-lg px-12 py-5 shadow-2xl">
            Book a Free Discovery Call <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
