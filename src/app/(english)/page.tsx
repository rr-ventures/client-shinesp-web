import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Car, Globe, Handshake, Phone, Puzzle, Zap, MessageCircle, Mic, Waves, BookText, Home as HomeIcon, School, Monitor, MapPin, Mail, Brain, Users, Clock } from "lucide-react";

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
    <main className="flex flex-col min-h-screen pb-16 md:pb-0">
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
      <section className="relative min-h-[65vh] md:min-h-[70vh] flex items-center py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/shine_with_schoolkids.png"
            alt="Shine Yin Teoh, speech pathologist, working with children in a school setting"
            fill
            className="object-cover saturate-[0.9] brightness-[0.95]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A3F5C]/60 via-[#1A3F5C]/35 to-[#1A3F5C]/10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-[1.15] text-balance drop-shadow-lg">
              Speech Pathologist in Sydney NSW
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light drop-shadow-md">
              Personalised speech therapy delivered to your home, school, or online. Available in English and Mandarin. Serving Inner West Sydney and surrounds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              {/* REPLACE: Swap /contact for your Calendly/TidyCal booking URL */}
              <Link href="/contact" className="btn-primary text-center text-lg py-4 shadow-lg hover:-translate-y-1 transition-all duration-300">
                Book a Free Discovery Call
              </Link>
              <Link href="/refer-a-client" className="text-center text-lg py-4 px-8 rounded-full font-semibold border-2 border-white text-white bg-white/15 backdrop-blur-sm hover:bg-white hover:text-navy-blue shadow-lg hover:-translate-y-1 transition-all duration-300">
                Refer a Client
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/90">
              <span className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-sage-green flex items-center justify-center text-navy-blue text-xs">✓</span> CPSP Certified</span>
              <span className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-sage-green flex items-center justify-center text-navy-blue text-xs">✓</span> NDIS Registered</span>
              <span className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-sage-green flex items-center justify-center text-navy-blue text-xs">✓</span> Medicare Provider</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: WHY CHOOSE US */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-4">Why families choose Shine and Speak</h2>
            <div className="w-24 h-1 bg-trust-teal mx-auto rounded-full"></div>
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
              <p className="text-stone text-sm leading-relaxed">Registered NDIS provider (all management types), Medicare provider, and private clients. <Link href="/ndis-speech-therapy-sydney-nsw" className="text-trust-teal font-semibold hover:underline underline-offset-2">Learn more about funding options for speech therapy</Link>.</p>
            </div>
            <div className="bg-white rounded-2xl p-10 text-center group shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-soft-blue to-sage-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-20 h-20 mx-auto bg-soft-blue/50 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-soft-blue">
                <Phone className="w-8 h-8 text-navy-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Free discovery call</h3>
              <p className="text-stone text-sm leading-relaxed">Not sure where to start? Book a free phone call and we&apos;ll talk through your concerns — no obligation, no pressure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: WHAT FAMILIES SAY */}
      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-4">What families say</h2>
            <div className="w-24 h-1 bg-trust-teal mx-auto rounded-full"></div>
          </div>
          {/* PASTE GOOGLE REVIEWS EMBED CODE HERE */}
          <div className="max-w-4xl mx-auto premium-card p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <p className="text-xl text-stone italic mb-10 leading-relaxed font-serif">&ldquo;Review coming soon — Shine and Speak is a new practice. In the meantime, here are the credentials and training that back our work.&rdquo;</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-navy-blue">
              <span className="bg-sage-green/50 border border-sage-green px-5 py-2.5 rounded-full flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300"><span className="text-trust-teal">✦</span> Certified Practising Speech Pathologist</span>
              <span className="bg-sage-green/50 border border-sage-green px-5 py-2.5 rounded-full flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300"><span className="text-trust-teal">✦</span> NDIS Registered Provider</span>
              <span className="bg-sage-green/50 border border-sage-green px-5 py-2.5 rounded-full flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300"><span className="text-trust-teal">✦</span> Medicare Provider</span>
              <span className="bg-sage-green/50 border border-sage-green px-5 py-2.5 rounded-full flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300"><span className="text-trust-teal">✦</span> Bilingual English &amp; Mandarin</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: GET IN TOUCH — Lead Form */}
      <section className="py-24 bg-navy-blue">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Book Your Free Discovery Call</h2>
          <p className="text-blue-100/80 text-lg mb-10 leading-relaxed">Tell us about the client and we&apos;ll be in touch within 24 hours.</p>
          <form action="/thank-you" method="GET" className="bg-white rounded-[2rem] p-10 shadow-2xl text-left space-y-6">
            <div>
              <label htmlFor="hp-name" className="block text-sm font-bold text-navy-blue mb-2">Your name</label>
              <input type="text" id="hp-name" name="name" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-trust-teal focus:border-transparent" placeholder="Jane Smith" />
            </div>
            <div>
              <label htmlFor="hp-phone" className="block text-sm font-bold text-navy-blue mb-2">Phone number</label>
              <input type="tel" id="hp-phone" name="phone" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-trust-teal focus:border-transparent" placeholder="04XX XXX XXX" />
            </div>
            <div>
              <label htmlFor="hp-email" className="block text-sm font-bold text-navy-blue mb-2">Email</label>
              <input type="email" id="hp-email" name="email" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-trust-teal focus:border-transparent" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="hp-age" className="block text-sm font-bold text-navy-blue mb-2">Client&apos;s age</label>
              <input type="text" id="hp-age" name="clientAge" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-trust-teal focus:border-transparent" placeholder="e.g. 4 years, or Adult" />
            </div>
            <div>
              <label htmlFor="hp-help" className="block text-sm font-bold text-navy-blue mb-2">What are you looking for help with?</label>
              <select id="hp-help" name="helpWith" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-trust-teal focus:border-transparent">
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
            <button type="submit" className="w-full bg-golden-amber text-white font-bold py-4 rounded-xl text-lg hover:bg-[#7A5800] transition-all duration-300 shadow-lg hover:-translate-y-1">
              Book My Free Discovery Call →
            </button>
          </form>
          <p className="text-blue-100/90 text-sm mt-6">No obligation. We&apos;ll respond within 24 hours.</p>
        </div>
      </section>

      {/* Section 5: SERVICE CARDS — Paediatric + Adult */}
      <section className="py-24 bg-soft-blue">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Paediatric Speech Therapy */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-4">Paediatric Speech Therapy</h2>
              <div className="w-24 h-1 bg-trust-teal mx-auto rounded-full"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Autism & ASD", desc: "Supporting children on the autism spectrum with communication, social skills, and language development.", href: "/speech-therapy-autism-sydney-nsw", Icon: Puzzle },
                { title: "ADHD & Attention", desc: "Helping children with ADHD develop focus, listening skills, and social communication strategies.", href: "/speech-therapy-adhd-sydney-nsw", Icon: Zap },
                { title: "Developmental Delay", desc: "Tailored support for children with developmental delay, building foundational communication skills at their own pace.", href: "/speech-therapy-developmental-delay-sydney-nsw", Icon: Clock },
                { title: "Language Delay", desc: "Building receptive and expressive language skills so your child can understand and be understood.", href: "/speech-therapy-language-delay-sydney-nsw", Icon: MessageCircle },
                { title: "Speech Sounds", desc: "Helping children pronounce sounds clearly so they can be understood by family, friends, and teachers.", href: "/speech-therapy-speech-sounds-sydney-nsw", Icon: Mic },
                { title: "Literacy & Reading", desc: "Supporting reading, writing, and spelling development for children who are finding literacy challenging.", href: "/speech-therapy-literacy-sydney-nsw", Icon: BookText },
              ].map(({ title, desc, href, Icon }) => (
                <Link key={href} href={href} className="bg-white rounded-2xl p-8 group flex flex-col shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100/50">
                  <div className="w-14 h-14 bg-soft-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-trust-teal" strokeWidth={1.5} />
                  </div>
                  <span className="text-xl font-bold font-serif text-navy-blue mb-3 group-hover:text-trust-teal transition-colors">{title}</span>
                  <p className="text-stone text-sm leading-relaxed flex-grow">{desc}</p>
                  <span className="text-trust-teal font-semibold text-sm mt-6 flex items-center gap-2 group-hover:translate-x-1 transition-transform">Learn more <span className="text-lg">→</span></span>
                </Link>
              ))}
            </div>
            <p className="text-center mt-8 text-stone">
              <Link href="/paediatric-speech-therapy-sydney-nsw" className="text-navy-blue font-bold hover:text-trust-teal transition-colors underline underline-offset-4">View all paediatric speech therapy services</Link>
            </p>
          </div>

          {/* Adult Speech Therapy */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-4">Adult Speech Therapy</h2>
              <div className="w-24 h-1 bg-trust-teal mx-auto rounded-full"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Aphasia", desc: "Helping adults rebuild language skills after stroke, brain injury, or neurological conditions.", href: "/speech-therapy-aphasia-sydney-nsw", Icon: MessageCircle },
                { title: "Cognitive-Communication", desc: "Support for memory, attention, problem-solving, and executive function challenges affecting daily communication.", href: "/speech-therapy-cognitive-communication-sydney-nsw", Icon: Brain },
                { title: "Stuttering & Fluency", desc: "Evidence-based strategies for adults experiencing stuttering or other fluency difficulties.", href: "/speech-therapy-stuttering-sydney-nsw", Icon: Waves },
                { title: "Social Communication", desc: "Building confidence in social interactions, conversation skills, and pragmatic language for adults.", href: "/speech-therapy-social-communication-sydney-nsw", Icon: Users },
              ].map(({ title, desc, href, Icon }) => (
                <Link key={href} href={href} className="bg-white rounded-2xl p-8 group flex flex-col shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100/50">
                  <div className="w-14 h-14 bg-soft-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-trust-teal" strokeWidth={1.5} />
                  </div>
                  <span className="text-xl font-bold font-serif text-navy-blue mb-3 group-hover:text-trust-teal transition-colors">{title}</span>
                  <p className="text-stone text-sm leading-relaxed flex-grow">{desc}</p>
                  <span className="text-trust-teal font-semibold text-sm mt-6 flex items-center gap-2 group-hover:translate-x-1 transition-transform">Learn more <span className="text-lg">→</span></span>
                </Link>
              ))}
            </div>
            <p className="text-center mt-8 text-stone">
              I also support clients with intellectual disability and AAC/multimodal communication needs.{" "}
              <Link href="/adult-speech-therapy-sydney-nsw" className="text-navy-blue font-bold hover:text-trust-teal transition-colors underline underline-offset-4">View all adult speech therapy services</Link>
            </p>
          </div>

        </div>
      </section>

      {/* Section 6: HOW IT WORKS + MOBILE ADVANTAGE (merged) */}
      <section className="py-24 bg-navy-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Getting started is simple</h2>
            <div className="w-24 h-1 bg-trust-teal mx-auto rounded-full"></div>
          </div>

          {/* 3-step process */}
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16 relative">
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-white/20 -z-10"></div>
            <div className="relative z-10 group hover:-translate-y-2 transition-transform duration-300 text-center">
              <div className="w-20 h-20 bg-white border-4 border-trust-teal text-navy-blue rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">1</div>
              <h3 className="text-xl font-bold text-white mb-4">Book a free call</h3>
              <p className="text-blue-100/80 text-sm leading-relaxed">We&apos;ll have a quick chat about your needs, answer your questions, and work out whether I&apos;m the right fit. No obligation, no pressure.</p>
            </div>
            <div className="relative z-10 group hover:-translate-y-2 transition-transform duration-300 text-center">
              <div className="w-20 h-20 bg-white border-4 border-trust-teal text-navy-blue rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">2</div>
              <h3 className="text-xl font-bold text-white mb-4">Assessment</h3>
              <p className="text-blue-100/80 text-sm leading-relaxed">I&apos;ll complete a thorough assessment — at your home, school, or online — to understand strengths, challenges, and goals.</p>
            </div>
            <div className="relative z-10 group hover:-translate-y-2 transition-transform duration-300 text-center">
              <div className="w-20 h-20 bg-white border-4 border-trust-teal text-navy-blue rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">3</div>
              <h3 className="text-xl font-bold text-white mb-4">Your therapy plan</h3>
              <p className="text-blue-100/80 text-sm leading-relaxed">You&apos;ll receive a personalised therapy plan focused on practical, real-life progress. I&apos;ll work closely with you, teachers, and other professionals.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            {/* REPLACE: Swap /contact for your Calendly/TidyCal booking URL */}
            <Link href="/contact" className="btn-primary text-lg py-4 px-10 inline-flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1 transition-all duration-300">
              Book Your Free Discovery Call <span>→</span>
            </Link>
            <Link href="/refer-a-client" className="text-lg py-4 px-10 rounded-full font-semibold border-2 border-white text-white hover:bg-white hover:text-navy-blue inline-flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1 transition-all duration-300">
              Refer a Client <span>→</span>
            </Link>
          </div>

          {/* Mobile therapy advantage */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Therapy where your child is most comfortable</h3>
            <p className="text-lg max-w-3xl mx-auto text-blue-100/90 leading-relaxed font-light">
              Research shows that children learn communication skills best in their everyday environments. That&apos;s why I come to you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-2xl hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/10 p-3 rounded-xl"><HomeIcon className="w-6 h-6 text-white" strokeWidth={1.5} /></div>
                <span className="text-xl font-bold text-white font-serif">Home sessions</span>
              </div>
              <p className="text-blue-50/80 leading-relaxed">Therapy in the comfort of your own home. I bring everything needed. No travel stress for your family. <Link href="/mobile-speech-therapy-sydney-nsw" className="underline underline-offset-4 hover:text-white transition-colors">Learn about mobile speech therapy</Link>.</p>
            </div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-2xl hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/10 p-3 rounded-xl"><School className="w-6 h-6 text-white" strokeWidth={1.5} /></div>
                <span className="text-xl font-bold text-white font-serif">School & kindergarten visits</span>
              </div>
              <p className="text-blue-50/80 leading-relaxed">Working with your child in their learning environment, with the option to coordinate directly with their teachers. <Link href="/school-based-speech-therapy-sydney-nsw" className="underline underline-offset-4 hover:text-white transition-colors">Explore school-based therapy</Link>.</p>
            </div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-2xl hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/10 p-3 rounded-xl"><Monitor className="w-6 h-6 text-white" strokeWidth={1.5} /></div>
                <span className="text-xl font-bold text-white font-serif">Telehealth across Australia</span>
              </div>
              <p className="text-blue-50/80 leading-relaxed"><Link href="/telehealth-speech-therapy-sydney-nsw" className="underline underline-offset-4 hover:text-white transition-colors">Flexible online sessions</Link> from anywhere. Ideal for families in regional areas, those managing busy schedules, or when in-person isn&apos;t possible.</p>
            </div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-2xl hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/10 p-3 rounded-xl"><MapPin className="w-6 h-6 text-white" strokeWidth={1.5} /></div>
                <span className="text-xl font-bold text-white font-serif">Inner West Sydney & surrounds</span>
              </div>
              <p className="text-blue-50/80 leading-relaxed">I travel within 30 minutes of Arncliffe, including <Link href="/speech-pathologist-burwood-nsw" className="underline underline-offset-4 hover:text-white transition-colors">Burwood and nearby suburbs</Link>. Also available across greater Sydney for one-off assessments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: BILINGUAL CALLOUT */}
      <section className="py-24 bg-soft-blue relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-sage-green rounded-full blur-3xl opacity-60 translate-x-1/2 translate-y-1/2"></div>
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <div className="inline-block bg-white px-6 py-2 rounded-full text-trust-teal font-bold text-sm mb-8 shadow-sm tracking-widest">我們提供中文語言治療服務</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-8">Speech therapy in English and Mandarin</h2>
          <p className="text-lg md:text-xl text-stone mb-6 leading-relaxed">
            I provide bilingual speech pathology services in English and Mandarin. This means more accurate assessment of your child&apos;s true language abilities, clearer communication with your family, and therapy that respects your cultural and linguistic background.
          </p>
          <p className="text-stone mb-10 leading-relaxed">
            Assessing a child in only one language can underestimate their true abilities. Working with a bilingual therapist ensures nothing is missed.
          </p>
            <Link href="/zh" className="btn-secondary text-lg py-3 px-8 inline-flex items-center gap-2 bg-white shadow-lg hover:-translate-y-1 transition-all duration-300">
              了解更多 / Learn More in Chinese <span>→</span>
            </Link>
        </div>
      </section>

      {/* Section 8: MEET THE THERAPIST */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center max-w-7xl">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-8">Meet Shine Yin Teoh</h2>
            <p className="text-lg text-stone mb-6 leading-relaxed">
              Hi, I&apos;m Shine Yin Teoh — a Certified Practising Speech Pathologist. I&apos;m passionate about providing high-quality, personalised speech therapy that makes a genuine difference in everyday life.
            </p>
            <p className="text-lg text-stone mb-8 leading-relaxed">
              I specialise in working with children and adults with a wide range of communication needs. I speak English and Mandarin, and I&apos;m committed to providing culturally responsive services for diverse families.
            </p>
            <div className="bg-warm-white p-8 rounded-2xl mb-10 border border-gray-100">
              <ul className="space-y-4 text-charcoal font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-trust-teal mt-0.5">✦</span>
                  <span>{/* PLACEHOLDER: Bachelor of Speech Pathology, [University] */} Bachelor of Speech Pathology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-trust-teal mt-0.5">✦</span>
                  <span><a href="https://www.speechpathologyaustralia.org.au" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-trust-teal transition-colors">Certified Practising member of Speech Pathology Australia</a> (CPSP)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-trust-teal mt-0.5">✦</span>
                  <span>NDIS Registered Provider</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-trust-teal mt-0.5">✦</span>
                  <span>Medicare Registered Provider</span>
                </li>
              </ul>
            </div>
            <Link href="/about" className="text-navy-blue font-bold hover:text-trust-teal transition-colors text-lg inline-flex items-center gap-2 group">
              Read more about my approach and qualifications <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden premium-shadow group">
              <div className="absolute inset-0 bg-navy-blue/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <Image
                src="/shine-headshot-1200x1200.webp"
                alt="Shine Yin Teoh, Certified Practising Speech Pathologist"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: FOR SUPPORT COORDINATORS */}
      <section className="py-24 bg-navy-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 blur-3xl -z-10 rounded-full"></div>
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center max-w-7xl">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Are you a Support Coordinator?</h2>
            <p className="text-lg text-blue-100/90 mb-8 leading-relaxed font-light">
              I work closely with NDIS support coordinators to provide timely, high-quality speech therapy with clear communication and detailed reporting. I understand the referral process and I make it easy for you.
            </p>
            <ul className="space-y-4 mb-10 text-white/90 font-medium">
              <li className="flex items-start gap-3">
                <span className="text-trust-teal mt-1">✓</span>
                <span>Fast response to referrals — I aim to respond within 24 hours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-trust-teal mt-1">✓</span>
                <span>Detailed <Link href="/speech-therapy-reports-sydney-nsw" className="underline underline-offset-4 hover:text-trust-teal transition-colors">progress reports and session summaries</Link></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-trust-teal mt-1">✓</span>
                <span>Flexible scheduling — mobile and telehealth</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-trust-teal mt-1">✓</span>
                <span>Support for plan reviews with clear, specific recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-trust-teal mt-1">✓</span>
                <span>All NDIS management types accepted (self-managed, plan-managed, NDIA-managed)</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/refer-a-client" className="btn-primary text-center shadow-lg hover:-translate-y-1 transition-all duration-300">
                Refer a Client
              </Link>
              <Link href="/ndis-service-guide-support-coordinators" className="btn-secondary text-center border-white text-white hover:bg-white hover:text-navy-blue shadow-lg hover:-translate-y-1 transition-all duration-300">
                Download NDIS Service Guide
              </Link>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-[2rem] shadow-2xl relative hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-trust-teal rounded-full blur-2xl opacity-20"></div>
            <h3 className="text-2xl font-bold mb-4 text-white font-serif">Quick Referral</h3>
            <p className="mb-8 text-blue-100/80 leading-relaxed">Submit a referral in under 2 minutes. I&apos;ll contact the family directly to arrange an initial consultation.</p>
            <Link href="/refer-a-client" className="block w-full text-center bg-white text-navy-blue px-6 py-4 rounded-full font-bold hover:bg-golden-amber hover:text-white transition-all duration-300 shadow-lg hover:-translate-y-1">
              Open Referral Form →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 10: FAQ — FULLY VISIBLE, NO ACCORDIONS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-blue mb-4">Common questions from parents</h2>
            <div className="w-24 h-1 bg-trust-teal mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            <div className="bg-warm-white p-8 rounded-2xl border border-gray-100 flex gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="text-trust-teal font-serif text-3xl leading-none mt-1">Q.</span>
              <div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">How do I know if my child needs speech therapy?</h3>
                <p className="text-stone leading-relaxed">If you&apos;re concerned about how your child communicates — whether it&apos;s how they pronounce words, how much they understand, how they put sentences together, or how they interact with others — it&apos;s worth getting an assessment. I offer a free discovery call where we can talk through your concerns and I can help you decide whether a full assessment would be helpful.</p>
              </div>
            </div>

            <div className="bg-warm-white p-8 rounded-2xl border border-gray-100 flex gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="text-trust-teal font-serif text-3xl leading-none mt-1">Q.</span>
              <div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">What does a typical session look like?</h3>
                <p className="text-stone leading-relaxed">Sessions are usually 45–60 minutes and take place at your home, your child&apos;s school, or online. I use play-based, evidence-based activities tailored to your child&apos;s interests and goals. I also spend time coaching you on strategies you can use between sessions so progress doesn&apos;t stop when I leave.</p>
              </div>
            </div>

            <div className="bg-warm-white p-8 rounded-2xl border border-gray-100 flex gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="text-trust-teal font-serif text-3xl leading-none mt-1">Q.</span>
              <div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">How much does speech therapy cost?</h3>
                <p className="text-stone leading-relaxed">Fees depend on the type of session and funding source. I&apos;m a registered NDIS provider and Medicare provider, and I also see private clients. Visit my <Link href="/fees" className="text-navy-blue font-semibold hover:text-trust-teal transition-colors underline underline-offset-4">fees and pricing page</Link> for current rates and information about what your fund covers.</p>
              </div>
            </div>

            <div className="bg-warm-white p-8 rounded-2xl border border-gray-100 flex gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="text-trust-teal font-serif text-3xl leading-none mt-1">Q.</span>
              <div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">Do you offer telehealth?</h3>
                <p className="text-stone leading-relaxed">Yes. I provide telehealth sessions to clients across Australia. Telehealth works well for many children and adults, and I can deliver sessions to your home, your child&apos;s school, or any setting with a stable internet connection. Learn more about <Link href="/telehealth-speech-therapy-sydney-nsw" className="text-navy-blue font-semibold hover:text-trust-teal transition-colors underline underline-offset-4">telehealth speech therapy options</Link>.</p>
              </div>
            </div>

            <div className="bg-warm-white p-8 rounded-2xl border border-gray-100 flex gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="text-trust-teal font-serif text-3xl leading-none mt-1">Q.</span>
              <div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">What areas do you travel to?</h3>
                <p className="text-stone leading-relaxed">I travel within a 30-minute radius of Arncliffe for ongoing therapy — including Burwood, Hurstville, Strathfield, Canterbury-Bankstown, Campsie, Rockdale, Kogarah, and Marrickville. I also travel across greater Sydney for one-off assessments and report writing. <Link href="/speech-pathologist-burwood-nsw" className="text-navy-blue font-semibold hover:text-trust-teal transition-colors underline underline-offset-4">Find your nearest service area</Link>.</p>
              </div>
            </div>

            <div className="bg-warm-white p-8 rounded-2xl border border-gray-100 flex gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="text-trust-teal font-serif text-3xl leading-none mt-1">Q.</span>
              <div>
                <h3 className="text-xl font-bold text-navy-blue mb-3">How do I get started?</h3>
                <p className="text-stone leading-relaxed">Book a free discovery call. We&apos;ll chat about your child&apos;s needs and I&apos;ll explain how the process works. You can also call me directly on <a href="tel:+61421608819" className="text-navy-blue font-semibold hover:text-trust-teal transition-colors underline underline-offset-4">0421 608 819</a> or email <a href="mailto:admin@shineandspeak.com.au" className="text-navy-blue font-semibold hover:text-trust-teal transition-colors underline underline-offset-4">admin@shineandspeak.com.au</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: SERVICE AREA */}
      <section className="py-16 bg-soft-blue border-t border-blue-100">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h2 className="text-2xl font-bold text-navy-blue mb-8 font-serif">Areas I serve in Sydney</h2>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 text-stone font-medium">
            <Link href="/speech-pathologist-arncliffe-nsw" className="hover:text-trust-teal transition-colors">Arncliffe</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-burwood-nsw" className="hover:text-trust-teal transition-colors">Burwood</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-hurstville-nsw" className="hover:text-trust-teal transition-colors">Hurstville</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-strathfield-nsw" className="hover:text-trust-teal transition-colors">Strathfield</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-canterbury-bankstown-nsw" className="hover:text-trust-teal transition-colors">Canterbury-Bankstown</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-campsie-nsw" className="hover:text-trust-teal transition-colors">Campsie</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-rockdale-nsw" className="hover:text-trust-teal transition-colors">Rockdale</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-kogarah-nsw" className="hover:text-trust-teal transition-colors">Kogarah</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-marrickville-nsw" className="hover:text-trust-teal transition-colors">Marrickville</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-inner-west-sydney-nsw" className="hover:text-trust-teal transition-colors">Inner West Sydney</Link><span className="text-blue-200">·</span>
            <Link href="/speech-pathologist-st-george-nsw" className="hover:text-trust-teal transition-colors">St George</Link><span className="text-blue-200">·</span>
            <Link href="/telehealth-speech-therapy-sydney-nsw" className="hover:text-trust-teal transition-colors">Telehealth Australia-wide</Link>
          </div>
        </div>
      </section>

      {/* Section 12: FINAL CTA BAND */}
      <section className="py-24 bg-golden-amber text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-navy-blue">Ready to help you or your child thrive?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-navy-blue/80 font-medium">
            Book a free discovery call to talk about your needs — no obligation, no pressure.
          </p>
          <div className="text-xl font-bold mb-10 flex flex-wrap justify-center gap-8 text-navy-blue">
            <a href="tel:+61421608819" className="hover:text-white transition-colors flex items-center gap-3">
              <div className="bg-navy-blue/10 p-2.5 rounded-full flex items-center justify-center"><Phone className="w-5 h-5" /></div> 0421 608 819
            </a>
            <a href="mailto:admin@shineandspeak.com.au" className="hover:text-white transition-colors flex items-center gap-3">
              <div className="bg-navy-blue/10 p-2.5 rounded-full flex items-center justify-center"><Mail className="w-5 h-5" /></div> admin@shineandspeak.com.au
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* REPLACE: Swap /contact for your Calendly/TidyCal booking URL */}
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-navy-blue text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-charcoal transition-all shadow-xl hover:-translate-y-1">
              Book a Free Discovery Call <span>→</span>
            </Link>
            <Link href="/refer-a-client" className="inline-flex items-center justify-center gap-2 bg-white text-navy-blue px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1">
              Refer a Client <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-golden-amber shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
        <a href="tel:+61421608819" className="flex items-center justify-center gap-2 text-white font-bold text-lg py-3">
          <Phone className="w-5 h-5" /> Call Now — 0421 608 819
        </a>
      </div>
    </main>
  );
}
