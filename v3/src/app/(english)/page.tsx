import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Car, Globe, Handshake, BookOpen, Puzzle, Zap, MessageCircle, Mic, Waves, BookText, Home as HomeIcon, School, Monitor, MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Sydney Speech Pathologist | Shine and Speak",
  description:
    "Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin. NDIS, Medicare & private. Serving Inner West Sydney.",
  alternates: {
    canonical: "https://shineandspeak.com.au/",
    languages: {
      en: "https://shineandspeak.com.au/",
      zh: "https://shineandspeak.com.au/zh",
    },
  },
  openGraph: {
    title: "Sydney Speech Pathologist | Shine and Speak",
    description:
      "Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin. NDIS, Medicare & private. Serving Inner West Sydney.",
    url: "https://shineandspeak.com.au/",
  },
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Shine and Speak",
  image: "https://shineandspeak.com.au/shine-and-speak-logo-horizontal-transparent.png",
  url: "https://shineandspeak.com.au",
  telephone: "+61421608819",
  email: "admin@shineandspeak.com.au",
  medicalSpecialty: "Speech Pathology",
  areaServed: [
    "Arncliffe", "Burwood", "Hurstville", "Strathfield",
    "Canterbury-Bankstown", "Campsie", "Rockdale", "Kogarah",
    "Marrickville", "Inner West Sydney", "St George",
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.9369,
    longitude: 151.1539,
  },
  paymentAccepted: ["NDIS", "Medicare", "Private pay", "Home Care Package", "DVA"],
  availableLanguage: ["English", "Chinese"],
  priceRange: "$$",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I know if my child needs speech therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you're concerned about how your child communicates — whether it's how they pronounce words, how much they understand, how they put sentences together, or how they interact with others — it's worth getting an assessment. I offer a free discovery call where we can talk through your concerns and I can help you decide whether a full assessment would be helpful.",
      },
    },
    {
      "@type": "Question",
      name: "What does a typical session look like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sessions are usually 45–60 minutes and take place at your home, your child's school, or online. I use play-based, evidence-based activities tailored to your child's interests and goals. I also spend time coaching you on strategies you can use between sessions so progress doesn't stop when I leave.",
      },
    },
    {
      "@type": "Question",
      name: "How much does speech therapy cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fees depend on the type of session and funding source. I'm a registered NDIS provider and Medicare provider, and I also see private clients. Visit my fees and pricing page for current rates and information about what your fund covers.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer telehealth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I provide telehealth sessions to clients across Australia. Telehealth works well for many children and adults, and I can deliver sessions to your home, your child's school, or any setting with a stable internet connection.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you travel to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I travel within a 30-minute radius of Arncliffe for ongoing therapy — including Burwood, Hurstville, Strathfield, Canterbury-Bankstown, Campsie, Rockdale, Kogarah, and Marrickville. I also travel across greater Sydney for one-off assessments and report writing.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Book a free discovery call. We'll chat about your child's needs and I'll explain how the process works. You can also call me directly on 0421 608 819 or email admin@shineandspeak.com.au",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }]} />

      {/* Section 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/v3/shine_with_schoolkids.png"
            alt="Shine Yin Teoh, speech pathologist, working with children in a school setting"
            fill
            className="object-cover"
            priority
          />
          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-blue/90 via-navy-blue/70 to-navy-blue/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold text-white border border-white/20 shadow-sm mb-6">
              <span className="text-golden-amber mr-2">✦</span>
              Premium Mobile Speech Pathology
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15] text-balance">
              Sydney Speech Pathologist | NDIS Mobile &amp; Telehealth Services
            </h1>
            <p className="text-lg md:text-xl text-blue-50 mb-10 leading-relaxed font-light">
              Helping your child communicate with confidence. Personalised speech therapy delivered to your home, school, or online. Available in English and Mandarin (普通话). Serving Inner West Sydney and surrounds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              {/* REPLACE: Swap /contact for your Calendly/TidyCal booking URL */}
              <Link href="/contact" className="btn-primary text-center text-lg py-4">
                Book a Free Discovery Call
              </Link>
              <a href="#trust" className="btn-secondary text-center text-lg py-4 border-white text-white hover:bg-white hover:text-navy-blue">
                Learn More ↓
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/90">
              <span className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-sage-green flex items-center justify-center text-navy-blue text-xs">✓</span> CPSP Certified</span>
              <span className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-sage-green flex items-center justify-center text-navy-blue text-xs">✓</span> NDIS Registered</span>
              <span className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-sage-green flex items-center justify-center text-navy-blue text-xs">✓</span> Medicare Provider</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: TRUST LOGO BAR */}
      <section id="trust" className="py-12 border-y border-gray-100 bg-white relative z-20 -mt-8 mx-4 md:mx-8 lg:mx-auto max-w-5xl rounded-2xl shadow-sm">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 items-center">
          <div className="text-center group">
            <div className="font-serif font-bold text-xl text-navy-blue mb-1 group-hover:text-golden-amber transition-colors">Speech Pathology Australia</div>
            <div className="text-sm text-stone font-medium uppercase tracking-wider">Certified Practising Member</div>
          </div>
          <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
          <div className="text-center group">
            <div className="font-serif font-bold text-xl text-navy-blue mb-1 group-hover:text-golden-amber transition-colors">NDIS Registered</div>
            <div className="text-sm text-stone font-medium uppercase tracking-wider">All management types</div>
          </div>
          <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
          <div className="text-center group">
            <div className="font-serif font-bold text-xl text-navy-blue mb-1 group-hover:text-golden-amber transition-colors">Medicare Provider</div>
            <div className="text-sm text-stone font-medium uppercase tracking-wider">Registered provider</div>
          </div>
          {/* PLACEHOLDER: Add Hanen, Sounds Write, Lidcombe or other certification badges here */}
        </div>
      </section>

      {/* OUR SPEECH THERAPY SERVICES — GBP Category H2 alignment */}
      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-golden-amber font-bold text-sm tracking-widest uppercase mb-3">Our Services</p>
            <p className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Everything We Offer</p>
            <p className="text-stone text-lg max-w-2xl mx-auto">Comprehensive speech pathology for children and adults across Sydney&apos;s Inner West and beyond.</p>
          </div>
          <div className="space-y-0 divide-y divide-gray-100">
            {[
              { title: 'Paediatric Speech Therapy in Sydney', text: 'I provide personalised paediatric speech therapy for children with autism, ADHD, developmental delay, language disorders, and speech sound difficulties. Therapy is tailored to your child\'s individual strengths and goals, delivered in familiar environments — home, school, or kindergarten.', href: '/paediatric-speech-therapy-sydney-nsw', linkText: 'Explore paediatric speech therapy services' },
              { title: 'Adult Speech Therapy in Sydney', text: 'Adult speech therapy at Shine and Speak supports people living with aphasia, cognitive-communication difficulties, fluency disorders, and challenges following stroke, brain injury, or neurological events. Sessions available at home or via telehealth anywhere in Australia.', href: '/adult-speech-therapy-sydney-nsw', linkText: 'Learn about adult speech therapy in Sydney' },
              { title: 'Mobile Speech Therapy', text: 'Mobile therapy means I come to you — your home, your child\'s school, kindergarten, or daycare. Research shows communication skills are learned more effectively in familiar environments. No clinic visits required. I coordinate directly with families and educators.', href: '/mobile-speech-therapy-sydney-nsw', linkText: 'Discover how mobile speech therapy works' },
              { title: 'Telehealth Speech Therapy', text: 'Telehealth speech therapy is available to clients across New South Wales and Australia-wide. Online sessions are effective for many conditions and offer flexibility for families with busy schedules or those in regional areas. Connect from home with a full therapy session.', href: '/telehealth-speech-therapy-sydney-nsw', linkText: 'Find out about telehealth speech therapy options' },
              { title: 'School-Based Speech Therapy', text: 'I visit schools, kindergartens, and early childhood centres across Inner West Sydney to deliver therapy in your child\'s learning environment. Working on-site allows direct coordination with teachers and support staff, ensuring strategies are applied consistently all day.', href: '/school-based-speech-therapy-sydney-nsw', linkText: 'Learn about school-based speech therapy services' },
              { title: 'NDIS Speech Therapy', text: null, href: '/ndis-speech-therapy-sydney-nsw', linkText: 'Access NDIS-funded speech therapy', isNdis: true },
            ].map(({ title, text, href, linkText, isNdis }, i) => (
              <div key={href} className={`flex gap-6 py-10 group ${i % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                <div className="flex-shrink-0 w-1 rounded-full bg-golden-amber self-stretch opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-navy-blue mb-3 group-hover:text-golden-amber transition-colors duration-200">{title}</h2>
                  {isNdis ? (
                    <p className="text-stone leading-relaxed mb-4 text-sm">
                      As a registered NDIS provider, I accept all plan management types — self-managed, plan-managed, and NDIA-managed. Speech therapy for language delays, autism, AAC, and communication difficulties can be funded through <a href="https://www.ndis.gov.au" target="_blank" rel="noopener noreferrer" className="text-navy-blue font-semibold underline underline-offset-4 hover:text-golden-amber transition-colors">the National Disability Insurance Scheme</a>. I respond within 24 hours.
                    </p>
                  ) : (
                    <p className="text-stone leading-relaxed mb-4 text-sm">{text}</p>
                  )}
                  <Link href={href} className="text-golden-amber font-semibold hover:underline underline-offset-4 inline-flex items-center gap-1 text-sm">{linkText} <span>→</span></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF — moved to position 4 for conversion */}
      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-4">What families say</h2>
            <div className="w-24 h-1 bg-golden-amber mx-auto rounded-full"></div>
          </div>
          {/* PASTE GOOGLE REVIEWS EMBED CODE HERE */}
          <div className="max-w-4xl mx-auto premium-card p-12">
            <p className="text-xl text-stone italic mb-10 leading-relaxed font-serif">&ldquo;Review coming soon — Shine and Speak is a new practice. In the meantime, here are the credentials and training that back our work.&rdquo;</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-navy-blue">
              <span className="bg-sage-green/50 border border-sage-green px-5 py-2.5 rounded-full flex items-center gap-2"><span className="text-golden-amber">✦</span> Certified Practising Speech Pathologist</span>
              <span className="bg-sage-green/50 border border-sage-green px-5 py-2.5 rounded-full flex items-center gap-2"><span className="text-golden-amber">✦</span> NDIS Registered Provider</span>
              <span className="bg-sage-green/50 border border-sage-green px-5 py-2.5 rounded-full flex items-center gap-2"><span className="text-golden-amber">✦</span> Medicare Provider</span>
              <span className="bg-sage-green/50 border border-sage-green px-5 py-2.5 rounded-full flex items-center gap-2"><span className="text-golden-amber">✦</span> Bilingual English &amp; Mandarin</span>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-4">Why families choose Shine and Speak</h2>
            <div className="w-24 h-1 bg-golden-amber mx-auto rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-10 text-center group shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-soft-blue to-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-20 h-20 mx-auto bg-soft-blue/50 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-soft-blue">
                <Car className="w-8 h-8 text-navy-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">We come to you</h3>
              <p className="text-stone text-sm leading-relaxed">No clinic visits needed. I travel to your home, school, or daycare — wherever your child is most comfortable and most likely to thrive.</p>
            </div>
            <div className="bg-white rounded-2xl p-10 text-center group shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-soft-blue to-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-20 h-20 mx-auto bg-soft-blue/50 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-soft-blue">
                <Globe className="w-8 h-8 text-navy-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Bilingual — English & Mandarin</h3>
              <p className="text-stone text-sm leading-relaxed">I provide speech therapy and assessments in both English and Mandarin, ensuring accurate evaluation of your child's true language abilities.</p>
            </div>
            <div className="bg-white rounded-2xl p-10 text-center group shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-soft-blue to-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-20 h-20 mx-auto bg-soft-blue/50 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-soft-blue">
                <Handshake className="w-8 h-8 text-navy-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">NDIS, Medicare & private</h3>
              <p className="text-stone text-sm leading-relaxed">Registered NDIS provider (all management types), Medicare provider, and private clients. <Link href="/ndis-speech-therapy-sydney-nsw" className="text-golden-amber font-semibold hover:underline underline-offset-2">Learn more about funding options for speech therapy</Link>.</p>
            </div>
            <div className="bg-white rounded-2xl p-10 text-center group shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-soft-blue to-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-20 h-20 mx-auto bg-soft-blue/50 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-soft-blue">
                <BookOpen className="w-8 h-8 text-navy-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Evidence-based, goal-focused</h3>
              <p className="text-stone text-sm leading-relaxed">Every therapy plan is grounded in current evidence and focused on practical goals that make a real difference in your child's daily life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: MOBILE ADVANTAGE */}
      <section className="py-24 bg-navy-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Therapy where your child is most comfortable</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100/90 leading-relaxed font-light">
              Research shows that children learn communication skills best in their everyday environments. That's why I come to you — whether that's your home, your child's school, kindergarten, or daycare. Therapy happens where your child naturally communicates, which means skills transfer more easily into daily life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-2xl hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-golden-amber flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl"><HomeIcon className="w-6 h-6 text-white" strokeWidth={1.5} /></div> Home sessions
              </h3>
              <p className="text-blue-50/80 leading-relaxed">Therapy in the comfort of your own home. I bring everything needed. No travel stress for your family.</p>
            </div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-2xl hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-golden-amber flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl"><School className="w-6 h-6 text-white" strokeWidth={1.5} /></div> School & kindergarten visits
              </h3>
              <p className="text-blue-50/80 leading-relaxed">Working with your child in their learning environment, with the option to coordinate directly with their teachers.</p>
            </div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-2xl hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-golden-amber flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl"><Monitor className="w-6 h-6 text-white" strokeWidth={1.5} /></div> Telehealth across Australia
              </h3>
              <p className="text-blue-50/80 leading-relaxed"><Link href="/telehealth-speech-therapy-sydney-nsw" className="underline underline-offset-4 hover:text-white transition-colors">Flexible online sessions</Link> from anywhere. Ideal for families in regional areas, those managing busy schedules, or when in-person isn't possible.</p>
            </div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-2xl hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-golden-amber flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl"><MapPin className="w-6 h-6 text-white" strokeWidth={1.5} /></div> Inner West Sydney & surrounds
              </h3>
              <p className="text-blue-50/80 leading-relaxed">I travel within 30 minutes of Arncliffe, including <Link href="/speech-pathologist-burwood-nsw" className="underline underline-offset-4 hover:text-white transition-colors">Burwood and nearby suburbs</Link>. Also available across greater Sydney for one-off assessments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: CONDITION CARDS */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-4">How I can help your child</h2>
            <div className="w-24 h-1 bg-golden-amber mx-auto rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Link href="/speech-therapy-autism-sydney-nsw" className="bg-white border border-gray-100 rounded-2xl p-10 group flex flex-col h-full shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-sage-green/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 text-navy-blue">
                <Puzzle className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4 group-hover:text-golden-amber transition-colors">Autism & ASD</h3>
              <p className="text-stone text-sm leading-relaxed flex-grow">Supporting children on the autism spectrum with communication, social skills, and language development.</p>
              <span className="text-golden-amber font-semibold text-sm mt-8 flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase tracking-wide">Learn more <span className="text-lg">→</span></span>
            </Link>
            <Link href="/speech-therapy-adhd-sydney-nsw" className="bg-white border border-gray-100 rounded-2xl p-10 group flex flex-col h-full shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-sage-green/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 text-navy-blue">
                <Zap className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4 group-hover:text-golden-amber transition-colors">ADHD & Attention</h3>
              <p className="text-stone text-sm leading-relaxed flex-grow">Helping children with ADHD develop focus, listening skills, and social communication strategies.</p>
              <span className="text-golden-amber font-semibold text-sm mt-8 flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase tracking-wide">Learn more <span className="text-lg">→</span></span>
            </Link>
            <Link href="/speech-therapy-language-delay-sydney-nsw" className="bg-white border border-gray-100 rounded-2xl p-10 group flex flex-col h-full shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-sage-green/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 text-navy-blue">
                <MessageCircle className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4 group-hover:text-golden-amber transition-colors">Language Delay</h3>
              <p className="text-stone text-sm leading-relaxed flex-grow">Building receptive and expressive language skills so your child can understand and be understood.</p>
              <span className="text-golden-amber font-semibold text-sm mt-8 flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase tracking-wide">Learn more <span className="text-lg">→</span></span>
            </Link>
            <Link href="/speech-therapy-speech-sounds-sydney-nsw" className="bg-white border border-gray-100 rounded-2xl p-10 group flex flex-col h-full shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-sage-green/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 text-navy-blue">
                <Mic className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4 group-hover:text-golden-amber transition-colors">Speech Sounds</h3>
              <p className="text-stone text-sm leading-relaxed flex-grow">Helping children pronounce sounds clearly so they can be understood by family, friends, and teachers.</p>
              <span className="text-golden-amber font-semibold text-sm mt-8 flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase tracking-wide">Learn more <span className="text-lg">→</span></span>
            </Link>
            <Link href="/speech-therapy-stuttering-sydney-nsw" className="bg-white border border-gray-100 rounded-2xl p-10 group flex flex-col h-full shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-sage-green/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 text-navy-blue">
                <Waves className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4 group-hover:text-golden-amber transition-colors">Stuttering & Fluency</h3>
              <p className="text-stone text-sm leading-relaxed flex-grow">Evidence-based support for children and adults experiencing stuttering or other fluency difficulties.</p>
              <span className="text-golden-amber font-semibold text-sm mt-8 flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase tracking-wide">Learn more <span className="text-lg">→</span></span>
            </Link>
            <Link href="/speech-therapy-literacy-sydney-nsw" className="bg-white border border-gray-100 rounded-2xl p-10 group flex flex-col h-full shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-sage-green/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 text-navy-blue">
                <BookText className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4 group-hover:text-golden-amber transition-colors">Literacy & Reading</h3>
              <p className="text-stone text-sm leading-relaxed flex-grow">Supporting reading, writing, and spelling development for children who are finding literacy challenging.</p>
              <span className="text-golden-amber font-semibold text-sm mt-8 flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase tracking-wide">Learn more <span className="text-lg">→</span></span>
            </Link>
          </div>
          <div className="bg-soft-blue rounded-2xl p-8 md:p-10 text-center max-w-4xl mx-auto border border-blue-100">
            <p className="text-stone leading-relaxed text-lg">
              I also support children and adults with developmental delay, intellectual disability, social communication difficulties, AAC and multimodal communication, and adults recovering from stroke, brain injury, and neurological conditions.{" "}
              <Link href="/paediatric-speech-therapy-sydney-nsw" className="text-navy-blue font-bold hover:text-golden-amber transition-colors underline underline-offset-4">Explore all paediatric services</Link>{" "}
              or learn about{" "}
              <Link href="/adult-speech-therapy-sydney-nsw" className="text-navy-blue font-bold hover:text-golden-amber transition-colors underline underline-offset-4">adult speech therapy options</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE FORM — homepage conversion */}
      <section className="py-24 bg-navy-blue">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Book Your Free Discovery Call</h2>
          <p className="text-blue-100/80 text-lg mb-10 leading-relaxed">Tell us about your child and we&apos;ll be in touch within 24 hours.</p>
          <form action="/thank-you" method="GET" className="bg-white rounded-[2rem] p-10 shadow-2xl text-left space-y-6">
            <div>
              <label htmlFor="hp-name" className="block text-sm font-bold text-navy-blue mb-2">Your name</label>
              <input type="text" id="hp-name" name="name" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-golden-amber focus:border-transparent" placeholder="Jane Smith" />
            </div>
            <div>
              <label htmlFor="hp-phone" className="block text-sm font-bold text-navy-blue mb-2">Phone number</label>
              <input type="tel" id="hp-phone" name="phone" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-golden-amber focus:border-transparent" placeholder="04XX XXX XXX" />
            </div>
            <div>
              <label htmlFor="hp-email" className="block text-sm font-bold text-navy-blue mb-2">Email</label>
              <input type="email" id="hp-email" name="email" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-golden-amber focus:border-transparent" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="hp-age" className="block text-sm font-bold text-navy-blue mb-2">Child&apos;s age</label>
              <input type="text" id="hp-age" name="childAge" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-golden-amber focus:border-transparent" placeholder="e.g. 4 years" />
            </div>
            <div>
              <label htmlFor="hp-help" className="block text-sm font-bold text-navy-blue mb-2">What are you looking for help with?</label>
              <select id="hp-help" name="helpWith" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-golden-amber focus:border-transparent">
                <option value="">Select an area...</option>
                <option value="Speech Sounds">Speech Sounds</option>
                <option value="Language">Language</option>
                <option value="Stuttering">Stuttering</option>
                <option value="Literacy">Literacy</option>
                <option value="Autism">Autism</option>
                <option value="ADHD">ADHD</option>
                <option value="Developmental Delay">Developmental Delay</option>
                <option value="Intellectual Disability">Intellectual Disability</option>
                <option value="Social Communication">Social Communication</option>
                <option value="AAC">AAC</option>
                <option value="Adult Speech">Adult Speech</option>
                <option value="Not sure">Not sure</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-golden-amber text-white font-bold py-4 rounded-xl text-lg hover:bg-[#6B5200] transition-colors shadow-lg">
              Book My Free Discovery Call →
            </button>
          </form>
          <p className="text-blue-100/90 text-sm mt-6">No obligation. We&apos;ll respond within 24 hours.</p>
        </div>
      </section>

      {/* Section 6: HOW IT WORKS */}
      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-4">Getting started is simple</h2>
            <div className="w-24 h-1 bg-golden-amber mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16 relative">
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-gray-200 -z-10"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white border-4 border-sage-green text-navy-blue rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-sm">1</div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Book a free call</h3>
              <p className="text-stone text-sm leading-relaxed">We'll have a quick chat about your child's needs, answer your questions, and work out whether I'm the right fit. No obligation, no pressure.</p>
            </div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white border-4 border-sage-green text-navy-blue rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-sm">2</div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Assessment</h3>
              <p className="text-stone text-sm leading-relaxed">I'll complete a thorough assessment — at your home, your child's school, or online — to understand their strengths, challenges, and goals.</p>
            </div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white border-4 border-sage-green text-navy-blue rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-sm">3</div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Your child's therapy plan</h3>
              <p className="text-stone text-sm leading-relaxed">You'll receive a personalised therapy plan focused on practical, real-life progress. I'll work closely with you, your child's teachers, and other professionals.</p>
            </div>
          </div>
          {/* REPLACE: Swap /contact for your Calendly/TidyCal booking URL */}
          <Link href="/contact" className="btn-primary text-lg py-4 px-10 inline-flex items-center gap-2">
            Book Your Free Discovery Call <span>→</span>
          </Link>
        </div>
      </section>

      {/* Section 7: BILINGUAL CALLOUT */}
      <section className="py-24 bg-soft-blue relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-sage-green rounded-full blur-3xl opacity-60 translate-x-1/2 translate-y-1/2"></div>
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <div className="inline-block bg-white px-6 py-2 rounded-full text-golden-amber font-bold text-sm mb-8 shadow-sm tracking-widest">我們提供中文語言治療服務</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-8">Speech therapy in English and Mandarin</h2>
          <p className="text-lg md:text-xl text-stone mb-6 leading-relaxed">
            I provide bilingual speech pathology services in English and Mandarin. This means more accurate assessment of your child's true language abilities, clearer communication with your family, and therapy that respects your cultural and linguistic background.
          </p>
          <p className="text-stone mb-10 leading-relaxed">
            Assessing a child in only one language can underestimate their true abilities. Working with a bilingual therapist ensures nothing is missed.
          </p>
          <Link href="/zh" className="btn-secondary text-lg py-3 px-8 inline-flex items-center gap-2 bg-white">
            了解更多 / Learn More in Chinese <span>→</span>
          </Link>
        </div>
      </section>

      {/* Section 8: MEET THE THERAPIST */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center max-w-7xl">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-8">Meet Shine Teoh</h2>
            <p className="text-lg text-stone mb-6 leading-relaxed">
              Hi, I'm Shine Teoh — a Certified Practising Speech Pathologist. I'm passionate about providing high-quality, personalised speech therapy that makes a genuine difference in everyday life.
            </p>
            <p className="text-lg text-stone mb-8 leading-relaxed">
              I specialise in working with children and adults with a wide range of communication needs. I speak English and Mandarin, and I'm committed to providing culturally responsive services for diverse families.
            </p>
            <div className="bg-warm-white p-8 rounded-2xl mb-10 border border-gray-100">
              <ul className="space-y-4 text-charcoal font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-golden-amber mt-0.5">✦</span>
                  <span>{/* PLACEHOLDER: Bachelor of Speech Pathology, [University] */} Bachelor of Speech Pathology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-golden-amber mt-0.5">✦</span>
                  <span><a href="https://www.speechpathologyaustralia.org.au" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-golden-amber transition-colors">Certified Practising member of Speech Pathology Australia</a> (CPSP)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-golden-amber mt-0.5">✦</span>
                  <span>NDIS Registered Provider</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-golden-amber mt-0.5">✦</span>
                  <span>Medicare Registered Provider</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-golden-amber mt-0.5">✦</span>
                  <span>{/* PLACEHOLDER: Training certifications e.g. Hanen, Sounds Write, Lidcombe Program */}</span>
                </li>
              </ul>
            </div>
            <Link href="/about" className="text-navy-blue font-bold hover:text-golden-amber transition-colors text-lg inline-flex items-center gap-2 group">
              Read more about my approach and qualifications <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden premium-shadow group">
              <div className="absolute inset-0 bg-navy-blue/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              {/* REPLACE: Professional headshot of Shine Teoh, warm and approachable */}
              <Image
                src="/v3/shine-headshot-1200x1200.webp"
                alt="Professional headshot of Shine Teoh"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: FOR SUPPORT COORDINATORS */}
      <section className="py-24 bg-navy-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 blur-3xl -z-10 rounded-full"></div>
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center max-w-7xl">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Are you a Support Coordinator?</h2>
            <p className="text-lg text-blue-100/90 mb-8 leading-relaxed font-light">
              I work closely with NDIS support coordinators to provide timely, high-quality speech therapy with clear communication and detailed reporting. I understand the referral process and I make it easy for you.
            </p>
            <ul className="space-y-4 mb-10 text-white/90 font-medium">
              <li className="flex items-start gap-3">
                <span className="text-golden-amber mt-1">✓</span>
                <span>Fast response to referrals — I aim to respond within 24 hours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-golden-amber mt-1">✓</span>
                <span>Detailed <Link href="/speech-therapy-reports-sydney-nsw" className="underline underline-offset-4 hover:text-golden-amber transition-colors">progress reports and session summaries</Link></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-golden-amber mt-1">✓</span>
                <span>Flexible scheduling — mobile and telehealth</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-golden-amber mt-1">✓</span>
                <span>Support for plan reviews with clear, specific recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-golden-amber mt-1">✓</span>
                <span>All NDIS management types accepted (self-managed, plan-managed, NDIA-managed)</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/refer-a-client" className="btn-primary text-center">
                Refer a Client
              </Link>
              <Link href="/ndis-service-guide-support-coordinators" className="btn-secondary border-white text-white hover:bg-white hover:text-navy-blue text-center">
                Download NDIS Service Guide
              </Link>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-[2rem] shadow-2xl relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-golden-amber rounded-full blur-2xl opacity-20"></div>
            <h3 className="text-2xl font-bold mb-4 text-golden-amber font-serif">Quick Referral</h3>
            <p className="mb-8 text-blue-100/80 leading-relaxed">Submit a referral in under 2 minutes. I'll contact the family directly to arrange an initial consultation.</p>
            <Link href="/refer-a-client" className="block w-full text-center bg-white text-navy-blue px-6 py-4 rounded-full font-bold hover:bg-golden-amber hover:text-white transition-all shadow-lg hover:-translate-y-1">
              Open Referral Form →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 11: FAQ — FULLY VISIBLE, NO ACCORDIONS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-4">Common questions from parents</h2>
            <div className="w-24 h-1 bg-golden-amber mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            <div className="bg-warm-white p-8 rounded-2xl border border-gray-100 flex gap-4">
              <span className="text-golden-amber font-serif text-3xl leading-none mt-1">Q.</span>
              <div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">How do I know if my child needs speech therapy?</h3>
                <p className="text-stone leading-relaxed">If you're concerned about how your child communicates — whether it's how they pronounce words, how much they understand, how they put sentences together, or how they interact with others — it's worth getting an assessment. I offer a free discovery call where we can talk through your concerns and I can help you decide whether a full assessment would be helpful.</p>
              </div>
            </div>

            <div className="bg-warm-white p-8 rounded-2xl border border-gray-100 flex gap-4">
              <span className="text-golden-amber font-serif text-3xl leading-none mt-1">Q.</span>
              <div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">What does a typical session look like?</h3>
                <p className="text-stone leading-relaxed">Sessions are usually 45–60 minutes and take place at your home, your child's school, or online. I use play-based, evidence-based activities tailored to your child's interests and goals. I also spend time coaching you on strategies you can use between sessions so progress doesn't stop when I leave.</p>
              </div>
            </div>

            <div className="bg-warm-white p-8 rounded-2xl border border-gray-100 flex gap-4">
              <span className="text-golden-amber font-serif text-3xl leading-none mt-1">Q.</span>
              <div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">How much does speech therapy cost?</h3>
                <p className="text-stone leading-relaxed">Fees depend on the type of session and funding source. I'm a registered NDIS provider and Medicare provider, and I also see private clients. Visit my <Link href="/fees" className="text-navy-blue font-semibold hover:text-golden-amber transition-colors underline underline-offset-4">fees and pricing page</Link> for current rates and information about what your fund covers.</p>
              </div>
            </div>

            <div className="bg-warm-white p-8 rounded-2xl border border-gray-100 flex gap-4">
              <span className="text-golden-amber font-serif text-3xl leading-none mt-1">Q.</span>
              <div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">Do you offer telehealth?</h3>
                <p className="text-stone leading-relaxed">Yes. I provide telehealth sessions to clients across Australia. Telehealth works well for many children and adults, and I can deliver sessions to your home, your child's school, or any setting with a stable internet connection. Learn more about <Link href="/telehealth-speech-therapy-sydney-nsw" className="text-navy-blue font-semibold hover:text-golden-amber transition-colors underline underline-offset-4">telehealth speech therapy options</Link>.</p>
              </div>
            </div>

            <div className="bg-warm-white p-8 rounded-2xl border border-gray-100 flex gap-4">
              <span className="text-golden-amber font-serif text-3xl leading-none mt-1">Q.</span>
              <div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">What areas do you travel to?</h3>
                <p className="text-stone leading-relaxed">I travel within a 30-minute radius of Arncliffe for ongoing therapy — including Burwood, Hurstville, Strathfield, Canterbury-Bankstown, Campsie, Rockdale, Kogarah, and Marrickville. I also travel across greater Sydney for one-off assessments and report writing. <Link href="/speech-pathologist-burwood-nsw" className="text-navy-blue font-semibold hover:text-golden-amber transition-colors underline underline-offset-4">Find your nearest service area</Link>.</p>
              </div>
            </div>

            <div className="bg-warm-white p-8 rounded-2xl border border-gray-100 flex gap-4">
              <span className="text-golden-amber font-serif text-3xl leading-none mt-1">Q.</span>
              <div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">How do I get started?</h3>
                <p className="text-stone leading-relaxed">Book a free discovery call. We'll chat about your child's needs and I'll explain how the process works. You can also call me directly on <a href="tel:+61421608819" className="text-navy-blue font-semibold hover:text-golden-amber transition-colors underline underline-offset-4">0421 608 819</a> or email <a href="mailto:admin@shineandspeak.com.au" className="text-navy-blue font-semibold hover:text-golden-amber transition-colors underline underline-offset-4">admin@shineandspeak.com.au</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: SERVICE AREA */}
      <section className="py-16 bg-soft-blue border-t border-blue-100">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h2 className="text-2xl font-bold text-navy-blue mb-8 font-serif">Areas I serve in Sydney</h2>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 text-stone font-medium">
            <Link href="/speech-pathologist-arncliffe-nsw" className="hover:text-golden-amber transition-colors">Arncliffe</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-burwood-nsw" className="hover:text-golden-amber transition-colors">Burwood</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-hurstville-nsw" className="hover:text-golden-amber transition-colors">Hurstville</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-strathfield-nsw" className="hover:text-golden-amber transition-colors">Strathfield</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-canterbury-bankstown-nsw" className="hover:text-golden-amber transition-colors">Canterbury-Bankstown</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-campsie-nsw" className="hover:text-golden-amber transition-colors">Campsie</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-rockdale-nsw" className="hover:text-golden-amber transition-colors">Rockdale</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-kogarah-nsw" className="hover:text-golden-amber transition-colors">Kogarah</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-marrickville-nsw" className="hover:text-golden-amber transition-colors">Marrickville</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-inner-west-sydney-nsw" className="hover:text-golden-amber transition-colors">Inner West Sydney</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-st-george-nsw" className="hover:text-golden-amber transition-colors">St George</Link><span className="text-blue-200">·</span>
            <Link href="/telehealth-speech-therapy-sydney-nsw" className="hover:text-golden-amber transition-colors">Telehealth Australia-wide</Link>
          </div>
        </div>
      </section>

      {/* Section 13: FINAL CTA BAND */}
      <section className="py-24 bg-golden-amber text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-navy-blue">Ready to help your child thrive?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-navy-blue/80 font-medium">
            Book a free discovery call to talk about your child's needs — no obligation, no pressure.
          </p>
          <div className="text-xl font-bold mb-10 flex flex-wrap justify-center gap-8 text-navy-blue">
            <a href="tel:+61421608819" className="hover:text-white transition-colors flex items-center gap-3">
              <div className="bg-navy-blue/10 p-2.5 rounded-full flex items-center justify-center"><Phone className="w-5 h-5" /></div> 0421 608 819
            </a>
            <a href="mailto:admin@shineandspeak.com.au" className="hover:text-white transition-colors flex items-center gap-3">
              <div className="bg-navy-blue/10 p-2.5 rounded-full flex items-center justify-center"><Mail className="w-5 h-5" /></div> admin@shineandspeak.com.au
            </a>
          </div>
          {/* REPLACE: Swap /contact for your Calendly/TidyCal booking URL */}
          <Link href="/contact" className="inline-flex items-center gap-2 bg-navy-blue text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-charcoal transition-all shadow-xl hover:-translate-y-1">
            Book a Free Discovery Call <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
