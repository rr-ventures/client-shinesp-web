import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Home, School, Laptop, MapPin, Star } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Speech Pathologist Sydney NSW | Shine and Speak — Mobile & Telehealth',
  description:
    'Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin. NDIS, Medicare & private. Serving Inner West Sydney.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/',
    languages: {
      en: 'https://www.shineandspeak.com.au/',
      zh: 'https://www.shineandspeak.com.au/zh',
    },
  },
  openGraph: {
    title: 'Speech Pathologist Sydney NSW | Shine and Speak — Mobile & Telehealth',
    description:
      'Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin. NDIS, Medicare & private. Serving Inner West Sydney.',
    url: 'https://www.shineandspeak.com.au/',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const medicalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Shine and Speak',
  url: 'https://www.shineandspeak.com.au',
  telephone: '+61421608819',
  email: 'admin@shineandspeak.com.au',
  image: 'https://www.shineandspeak.com.au/og-image.png',
  priceRange: '$$',
  currenciesAccepted: 'AUD',
  paymentAccepted: 'NDIS, Medicare, Private pay, Home Care Package, DVA',
  areaServed: [
    'Burwood', 'Hurstville', 'Strathfield', 'Canterbury-Bankstown',
    'Campsie', 'Rockdale', 'Kogarah', 'Marrickville', 'Arncliffe',
    'Inner West Sydney', 'St George', 'Sydney NSW',
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.9369,
    longitude: 151.1539,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
  medicalSpecialty: 'SpeechLanguagePathology',
  availableService: [
    'Paediatric Speech Therapy', 'Adult Speech Therapy', 'Mobile Therapy',
    'Telehealth', 'School-Based Therapy', 'Assessments', 'NDIS Support',
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I know if my child needs speech therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you\'re concerned about how your child communicates — whether it\'s how they pronounce words, how much they understand, how they put sentences together, or how they interact with others — it\'s worth getting an assessment. Shine offers a free discovery call where you can talk through your concerns and decide whether a full assessment would be helpful.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a typical session look like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions are usually 45–60 minutes and take place at your home, your child\'s school, or online. Play-based, evidence-based activities are tailored to your child\'s interests and goals. Time is also spent coaching you on strategies to use between sessions so progress continues throughout the week.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does speech therapy cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fees depend on the type of session and funding source. Shine and Speak is a registered NDIS provider and Medicare provider, and also sees private clients. Visit the fees and pricing page for current rates and information about what your fund covers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer telehealth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Telehealth sessions are available to clients across Australia. Telehealth works well for many children and adults, and can be delivered to your home, your child\'s school, or any setting with a stable internet connection.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas do you travel to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shine travels within a 30-minute radius of Arncliffe for ongoing therapy — including Burwood, Hurstville, Strathfield, Canterbury-Bankstown, Campsie, Rockdale, Kogarah, and Marrickville. Greater Sydney for one-off assessments and report writing. Telehealth Australia-wide.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Book a free discovery call. You\'ll chat about your child\'s needs and Shine will explain how the process works. You can also call directly on 0421 608 819 or, if you\'re a support coordinator, use the referral form.',
      },
    },
  ],
};

const CONDITIONS = [
  {
    title: 'Autism & ASD',
    description: 'Supporting children on the autism spectrum with communication, social skills, and language development.',
    href: '/speech-therapy-autism-sydney-nsw',
    icon: '🧩',
  },
  {
    title: 'ADHD & Attention',
    description: 'Helping children with ADHD develop focus, listening skills, and social communication strategies.',
    href: '/speech-therapy-adhd-sydney-nsw',
    icon: '⚡',
  },
  {
    title: 'Language Delay',
    description: 'Building receptive and expressive language skills so your child can understand and be understood.',
    href: '/speech-therapy-language-delay-sydney-nsw',
    icon: '💬',
  },
  {
    title: 'Speech Sounds',
    description: 'Helping children pronounce sounds clearly so they can be understood by family, friends, and teachers.',
    href: '/speech-therapy-speech-sounds-sydney-nsw',
    icon: '🔤',
  },
  {
    title: 'Stuttering & Fluency',
    description: 'Evidence-based support for children and adults experiencing stuttering or other fluency difficulties.',
    href: '/speech-therapy-stuttering-sydney-nsw',
    icon: '🎙️',
  },
  {
    title: 'Literacy & Reading',
    description: 'Supporting reading, writing, and spelling development for children who are finding literacy challenging.',
    href: '/speech-therapy-literacy-sydney-nsw',
    icon: '📚',
  },
];

const DELIVERY_MODES = [
  {
    icon: <Home className="w-7 h-7 text-[#E8A84C]" />,
    title: 'Home sessions',
    description: 'Therapy in the comfort of your own home. Everything needed is brought to you — no travel stress for your family.',
  },
  {
    icon: <School className="w-7 h-7 text-[#E8A84C]" />,
    title: 'School & kindergarten visits',
    description: "Working with your child in their learning environment, with the option to coordinate directly with teachers.",
  },
  {
    icon: <Laptop className="w-7 h-7 text-[#E8A84C]" />,
    title: 'Telehealth across Australia',
    description: (
      <>
        Flexible online sessions from anywhere. Ideal for busy families or when in-person isn&apos;t possible.{' '}
        <Link href="/telehealth-speech-therapy-sydney-nsw" className="text-[#E8A84C] underline underline-offset-2 hover:text-amber-500">
          Learn more about telehealth speech therapy
        </Link>.
      </>
    ),
  },
  {
    icon: <MapPin className="w-7 h-7 text-[#E8A84C]" />,
    title: 'Inner West Sydney & surrounds',
    description: (
      <>
        Shine travels within 30 minutes of Arncliffe, including{' '}
        <Link href="/speech-pathologist-burwood-nsw" className="text-[#E8A84C] underline underline-offset-2 hover:text-amber-500">
          Burwood, Hurstville, Strathfield, and surrounding suburbs
        </Link>. Greater Sydney for one-off assessments.
      </>
    ),
  },
];

const SUBURBS = [
  { label: 'Arncliffe', href: '/speech-pathologist-arncliffe-nsw' },
  { label: 'Burwood', href: '/speech-pathologist-burwood-nsw' },
  { label: 'Campsie', href: '/speech-pathologist-campsie-nsw' },
  { label: 'Canterbury-Bankstown', href: '/speech-pathologist-canterbury-bankstown-nsw' },
  { label: 'Hurstville', href: '/speech-pathologist-hurstville-nsw' },
  { label: 'Inner West Sydney', href: '/speech-pathologist-inner-west-sydney-nsw' },
  { label: 'Kogarah', href: '/speech-pathologist-kogarah-nsw' },
  { label: 'Marrickville', href: '/speech-pathologist-marrickville-nsw' },
  { label: 'Rockdale', href: '/speech-pathologist-rockdale-nsw' },
  { label: 'St George', href: '/speech-pathologist-st-george-nsw' },
  { label: 'Strathfield', href: '/speech-pathologist-strathfield-nsw' },
  { label: 'Telehealth Australia-wide', href: '/telehealth-speech-therapy-sydney-nsw' },
];

const FAQS = [
  {
    q: 'How do I know if my child needs speech therapy?',
    a: "If you're concerned about how your child communicates — whether it's how they pronounce words, how much they understand, how they put sentences together, or how they interact with others — it's worth getting an assessment. I offer a free discovery call where we can talk through your concerns and I can help you decide whether a full assessment would be helpful.",
  },
  {
    q: 'What does a typical session look like?',
    a: "Sessions are usually 45–60 minutes and take place at your home, your child's school, or online. I use play-based, evidence-based activities tailored to your child's interests and goals. I also spend time coaching you on strategies you can use between sessions so progress doesn't stop when I leave.",
  },
  {
    q: 'How much does speech therapy cost?',
    a: (
      <>
        Fees depend on the type of session and funding source. I&apos;m a registered NDIS provider and Medicare provider, and I also see private clients. Visit my{' '}
        <Link href="/fees" className="text-[#2B4C7E] underline underline-offset-2 hover:text-[#E8A84C]">fees and pricing page</Link>{' '}
        for current rates and information about what your fund covers.
      </>
    ),
  },
  {
    q: 'Do you offer telehealth?',
    a: (
      <>
        Yes. I provide telehealth sessions to clients across Australia. Telehealth works well for many children and adults, and I can deliver sessions to your home, your child&apos;s school, or any setting with a stable internet connection.{' '}
        <Link href="/telehealth-speech-therapy-sydney-nsw" className="text-[#2B4C7E] underline underline-offset-2 hover:text-[#E8A84C]">
          Learn more about telehealth speech therapy
        </Link>.
      </>
    ),
  },
  {
    q: 'What areas do you travel to?',
    a: (
      <>
        I travel within a 30-minute radius of Arncliffe for ongoing therapy — including Burwood, Hurstville, Strathfield, Canterbury-Bankstown, Campsie, Rockdale, Kogarah, and Marrickville. I also travel across greater Sydney for one-off assessments and report writing.{' '}
        <Link href="/speech-pathologist-inner-west-sydney-nsw" className="text-[#2B4C7E] underline underline-offset-2 hover:text-[#E8A84C]">
          Find your nearest Inner West service area
        </Link>.
      </>
    ),
  },
  {
    q: 'How do I get started?',
    a: (
      <>
        Book a free discovery call. We&apos;ll chat about your child&apos;s needs and I&apos;ll explain how the process works. You can also call me directly on{' '}
        <a href="tel:0421608819" className="text-[#2B4C7E] underline underline-offset-2 hover:text-[#E8A84C]">0421 608 819</a>{' '}
        or, if you&apos;re a support coordinator,{' '}
        <Link href="/refer-a-client" className="text-[#2B4C7E] underline underline-offset-2 hover:text-[#E8A84C]">submit a client referral</Link>.
      </>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }]} />
      </div>

      {/* ── SECTION 1: HERO ─────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#2B4C7E] to-[#1e3a63] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
              Helping your child communicate with confidence
            </h1>
            <p className="text-lg md:text-xl text-blue-50 mb-8 leading-relaxed font-light">
              Personalised speech therapy — delivered to your home, school, or online. Serving Inner West Sydney and surrounds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* REPLACE: update href to your real Calendly URL */}
              <a
                href="https://calendly.com/shineandspeak"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#E8A84C] text-[#2B4C7E] font-semibold px-8 py-4 rounded-xl hover:bg-amber-400 transition-colors text-lg shadow-lg"
              >
                Book a Free Discovery Call
              </a>
              <Link
                href="/refer-a-client"
                className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-[#2B4C7E] transition-colors text-lg"
              >
                Refer a Client
              </Link>
            </div>
            {/* Inline trust strip */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-blue-50">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E8A84C]" /> CPSP Certified</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E8A84C]" /> NDIS Registered</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E8A84C]" /> Medicare Provider</span>
            </div>
          </div>
          <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl bg-[#1e3a63] flex items-center justify-center">
            {/* REPLACE: Professional photo of Shine Teoh working with a child. Must be a real photo — not stock. Warm, mobile-therapy context (home visit). */}
            <div className="text-center px-8">
              <img src="/shine-headshot-1200x1200.webp" alt="Shine Teoh, Certified Practising Speech Pathologist" className="absolute inset-0 w-full h-full object-cover" />
              {/* REPLACE: Professional photo of Shine Teoh working with a child in a home-visit context */}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: TRUST LOGO BAR ───────────────────── */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-[#2B4C7E]">
              <CheckCircle2 className="w-6 h-6 text-[#E8A84C] flex-shrink-0" />
              <span className="font-semibold text-sm">Certified Practising Speech Pathologist (SPA)</span>
            </div>
            <div className="flex items-center gap-2 text-[#2B4C7E]">
              <CheckCircle2 className="w-6 h-6 text-[#E8A84C] flex-shrink-0" />
              <span className="font-semibold text-sm">NDIS Registered Provider</span>
            </div>
            <div className="flex items-center gap-2 text-[#2B4C7E]">
              <CheckCircle2 className="w-6 h-6 text-[#E8A84C] flex-shrink-0" />
              <span className="font-semibold text-sm">Medicare Provider</span>
            </div>
            <div className="flex items-center gap-2 text-[#2B4C7E]">
              <CheckCircle2 className="w-6 h-6 text-[#E8A84C] flex-shrink-0" />
              <span className="font-semibold text-sm">Bilingual — English &amp; Mandarin</span>
            </div>
            {/* PLACEHOLDER: Training certification badges (e.g. Hanen, Sounds Write, Lidcombe Program) */}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CONDITION CARDS ──────────────────── */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2B4C7E] text-center mb-4">
            How I can help your child
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Every child is different. I provide evidence-based speech therapy tailored to your child&apos;s individual strengths, goals, and everyday environments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONDITIONS.map((condition) => (
              <Link
                key={condition.href}
                href={condition.href}
                className="group border border-slate-200 rounded-2xl p-6 hover:border-[#E8A84C] hover:shadow-md transition-all duration-200"
              >
                <div className="text-3xl mb-3">{condition.icon}</div>
                <h3 className="text-lg font-semibold text-[#2B4C7E] mb-2 group-hover:text-[#E8A84C] transition-colors">
                  {condition.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{condition.description}</p>
                <span className="inline-flex items-center text-sm font-semibold text-[#E8A84C] group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
          <p className="text-slate-600 mt-8 text-center text-sm leading-relaxed">
            I also support children and adults with developmental delay, intellectual disability, social
            communication difficulties, AAC and multimodal communication, and adults recovering from stroke, brain
            injury, and neurological conditions.{' '}
            <Link href="/paediatric-speech-therapy-sydney-nsw" className="text-[#2B4C7E] underline underline-offset-2 hover:text-[#E8A84C]">
              Explore all paediatric speech therapy services
            </Link>{' '}
            or learn about{' '}
            <Link href="/adult-speech-therapy-sydney-nsw" className="text-[#2B4C7E] underline underline-offset-2 hover:text-[#E8A84C]">
              adult speech therapy options in Sydney
            </Link>.
          </p>
        </div>
      </section>

      {/* ── SECTION 5: MOBILE ADVANTAGE ─────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2B4C7E] text-center mb-6">
            Therapy where your child is most comfortable
          </h2>
          <p className="text-slate-600 text-center mb-4 max-w-3xl mx-auto leading-relaxed">
            Research shows that children learn communication skills best in their everyday environments.
            That&apos;s why I come to you — whether that&apos;s your home, your child&apos;s school, kindergarten, or
            daycare. This is not a compromise — it&apos;s a clinical advantage.
          </p>
          <p className="text-slate-600 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
            Children are more relaxed, more engaged, and more likely to use new skills when they&apos;re learning
            in familiar settings. Parents and educators can observe sessions and learn strategies to use
            throughout the day.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVERY_MODES.map((mode) => (
              <div key={mode.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <div className="mb-4">{mode.icon}</div>
                <h3 className="font-semibold text-[#2B4C7E] mb-2">{mode.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{mode.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: DIFFERENTIATORS ──────────────────── */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2B4C7E] text-center mb-12">
            Why families choose Shine and Speak
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🏠',
                title: 'We come to you',
                body: 'No clinic visits needed. I travel to your home, school, or daycare — wherever your child is most comfortable and most likely to thrive.',
              },
              {
                icon: '🇨🇳',
                title: 'Bilingual — English & Mandarin',
                body: 'I provide speech therapy and assessments in both English and Mandarin, ensuring accurate evaluation of your child\'s true language abilities.',
              },
              {
                icon: '💳',
                title: 'NDIS, Medicare & private',
                body: (
                  <>
                    Registered NDIS provider (all management types), Medicare provider, and private clients welcome.{' '}
                    <Link href="/ndis-speech-therapy-sydney-nsw" className="text-[#2B4C7E] underline underline-offset-2 hover:text-[#E8A84C] text-sm">
                      Explore funding options for speech therapy
                    </Link>.
                  </>
                ),
              },
              {
                icon: '🎯',
                title: 'Evidence-based, goal-focused',
                body: 'Every therapy plan is grounded in current evidence and focused on practical goals that make a real difference in your child\'s daily life.',
              },
            ].map((diff) => (
              <div key={diff.title} className="text-center p-6">
                <div className="text-4xl mb-4">{diff.icon}</div>
                <h3 className="font-semibold text-[#2B4C7E] text-lg mb-3">{diff.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{diff.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: HOW IT WORKS ─────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2B4C7E] mb-12">Getting started is simple</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: '1',
                title: 'Book a free call',
                body: "We'll have a quick chat about your child's needs, answer your questions, and work out whether I'm the right fit. No obligation, no pressure.",
              },
              {
                step: '2',
                title: 'Assessment',
                body: "I'll complete a thorough assessment — at your home, your child's school, or online — to understand their strengths, challenges, and goals. You'll receive a detailed report with clear recommendations.",
              },
              {
                step: '3',
                title: 'Your child\'s therapy plan',
                body: "You'll receive a personalised therapy plan focused on practical, real-life progress. I'll work closely with you, teachers, and other professionals to keep therapy consistent across all settings.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-[#E8A84C] text-[#2B4C7E] font-semibold text-xl rounded-full flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-[#2B4C7E] text-lg mb-3">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          {/* REPLACE: update href to your real Calendly URL */}
          <a
            href="https://calendly.com/shineandspeak"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2B4C7E] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#1e3a63] transition-colors text-lg shadow-md"
          >
            Book Your Free Discovery Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ── SECTION 8: MEET THE THERAPIST ───────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[520px] rounded-2xl overflow-hidden bg-slate-100 shadow-lg flex items-center justify-center">
              {/* REPLACE: Professional headshot of Shine Teoh, warm and approachable — different photo from hero */}
              <img src="/shine-headshot-1200x1200.webp" alt="Shine Teoh, Certified Practising Speech Pathologist" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2B4C7E] mb-4">Meet Shine Teoh</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Hi, I'm Shine Teoh — a Certified Practising Speech Pathologist. I&apos;m passionate about providing
                high-quality, personalised speech therapy that makes a genuine difference in everyday life.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                I specialise in working with children and adults across a wide range of communication needs,
                including autism, ADHD, developmental delay, language disorders, and literacy difficulties.
                I also support adults recovering from stroke, brain injury, and other neurological conditions.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                I speak English and Mandarin, and I&apos;m committed to providing culturally responsive services for
                diverse families.
              </p>
              {/* Credentials block — visible, not collapsed */}
              <div className="bg-slate-50 rounded-2xl p-6 mb-6 space-y-2">
                <p className="font-semibold text-[#2B4C7E] mb-3">Qualifications &amp; credentials</p>
                <div className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#E8A84C] mt-0.5 flex-shrink-0" />
                  {/* PLACEHOLDER: Bachelor of Speech Pathology, [University] */}
                  <span>University degree — placeholder</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#E8A84C] mt-0.5 flex-shrink-0" />
                  <span>Certified Practising Member, Speech Pathology Australia (CPSP)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#E8A84C] mt-0.5 flex-shrink-0" />
                  <span>NDIS Registered Provider {/* PLACEHOLDER: Provider number */}</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#E8A84C] mt-0.5 flex-shrink-0" />
                  <span>Medicare Registered Provider</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#E8A84C] mt-0.5 flex-shrink-0" />
                  {/* PLACEHOLDER: Training certifications (e.g. Hanen, Sounds Write, Lidcombe Program) */}
                  <span>Training certifications — placeholder</span>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#2B4C7E] font-semibold hover:text-[#E8A84C] transition-colors"
              >
                Read more about Shine&apos;s approach and qualifications <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8.5: BILINGUAL CALLOUT ──────────────── */}
      <section className="py-16 bg-[#2B4C7E] text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-2xl font-semibold tracking-tight text-[#E8A84C] mb-3">我們提供中文語言治療服務</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Speech therapy in English and Mandarin</h2>
          <p className="text-blue-50 text-lg mb-4 leading-relaxed">
            I provide bilingual speech pathology services in English and Mandarin. This means more accurate
            assessment of your child&apos;s true language abilities, clearer communication with your family, and
            therapy that respects your cultural and linguistic background.
          </p>
          <p className="text-blue-100 mb-8">
            Assessing a child in only one language can underestimate their true abilities. Working with a
            bilingual therapist ensures nothing is missed.
          </p>
          <Link
            href="/zh"
            className="inline-flex items-center gap-2 bg-[#E8A84C] text-[#2B4C7E] font-semibold px-8 py-3 rounded-xl hover:bg-amber-400 transition-colors"
          >
            了解更多 / Learn More in Chinese <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── SECTION 9: SOCIAL PROOF ──────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-[#E8A84C] text-[#E8A84C]" />)}
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2B4C7E] mb-4">What families say</h2>
          {/* PASTE GOOGLE REVIEWS EMBED CODE HERE */}
          <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 p-12 mb-6">
            <p className="text-slate-400 font-medium mb-2">Google Reviews will appear here</p>
            {/* PASTE GOOGLE REVIEWS EMBED CODE HERE */}
            <p className="text-slate-500 text-sm mt-6">
              Shine and Speak is a new practice. In the meantime, the credentials, training, and clinical
              approach are what underpin every session.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-[#2B4C7E]">
              <CheckCircle2 className="w-5 h-5 text-[#E8A84C]" /> Certified Practising Speech Pathologist
            </div>
            <div className="flex items-center gap-2 text-[#2B4C7E]">
              <CheckCircle2 className="w-5 h-5 text-[#E8A84C]" /> NDIS Registered Provider
            </div>
            <div className="flex items-center gap-2 text-[#2B4C7E]">
              <CheckCircle2 className="w-5 h-5 text-[#E8A84C]" /> Medicare Provider
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FOR SUPPORT COORDINATORS ────────── */}
      <section className="py-20 bg-[#2B4C7E] text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Are you a Support Coordinator?</h2>
              <p className="text-blue-50 leading-relaxed mb-6">
                I work closely with NDIS support coordinators to provide timely, high-quality speech therapy
                with clear communication and detailed reporting. I understand the referral process and I make
                it easy for you.
              </p>
              <ul className="space-y-3 mb-8 text-blue-50">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#E8A84C] mt-0.5 flex-shrink-0" />
                  Fast response to referrals — I aim to respond within 24 hours
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#E8A84C] mt-0.5 flex-shrink-0" />
                  Detailed <Link href="/speech-therapy-reports-sydney-nsw" className="text-[#E8A84C] underline underline-offset-2 hover:text-amber-300">progress reports and session summaries</Link>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#E8A84C] mt-0.5 flex-shrink-0" />
                  Flexible scheduling — mobile and telehealth
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#E8A84C] mt-0.5 flex-shrink-0" />
                  Support for plan reviews with clear, specific recommendations
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#E8A84C] mt-0.5 flex-shrink-0" />
                  All NDIS management types accepted (self-managed, plan-managed, NDIA-managed)
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/refer-a-client"
                  className="inline-flex items-center justify-center gap-2 bg-[#E8A84C] text-[#2B4C7E] font-semibold px-7 py-3 rounded-xl hover:bg-amber-400 transition-colors"
                >
                  Refer a Client <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/ndis-service-guide-support-coordinators"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-7 py-3 rounded-xl hover:bg-white hover:text-[#2B4C7E] transition-colors"
                >
                  Download NDIS Service Guide
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-[#1e3a63] rounded-2xl p-8 text-center h-64 flex items-center justify-center">
                {/* REPLACE: Professional image of Shine with coordinator/referrer context */}
                <p className="text-blue-300 text-sm">[ Image placeholder — coordinator context ]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: FAQ ──────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2B4C7E] text-center mb-12">
            Common questions from parents
          </h2>
          <div className="space-y-10">
            {FAQS.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-lg font-semibold text-[#2B4C7E] mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 12: SERVICE AREA GRID ───────────────── */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-[#2B4C7E] mb-6">Areas I serve in Sydney</h2>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {SUBURBS.map((suburb, i) => (
              <span key={suburb.href} className="text-slate-600 text-sm">
                <Link href={suburb.href} className="hover:text-[#E8A84C] hover:underline transition-colors font-medium">
                  {suburb.label}
                </Link>
                {i < SUBURBS.length - 1 && <span className="ml-4 text-slate-300">·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 13: FINAL CTA BAND ──────────────────── */}
      <section className="py-20 bg-[#E8A84C]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2B4C7E] mb-4">
            Ready to help your child thrive?
          </h2>
          <p className="text-[#2B4C7E] text-lg mb-4 opacity-90">
            Book a free discovery call to talk about your child&apos;s needs — no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a
              href="tel:0421608819"
              className="inline-flex items-center justify-center gap-2 bg-[#2B4C7E] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#1e3a63] transition-colors text-lg"
            >
              📞 Call 0421 608 819
            </a>
            {/* REPLACE: update href to your real Calendly URL */}
            <a
              href="https://calendly.com/shineandspeak"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#2B4C7E] font-semibold px-8 py-4 rounded-xl hover:bg-slate-50 transition-colors text-lg shadow-md"
            >
              Book a Free Discovery Call <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <p className="text-[#2B4C7E] text-sm opacity-75">
            Or email <a href="mailto:admin@shineandspeak.com.au" className="underline underline-offset-2 hover:opacity-100">admin@shineandspeak.com.au</a>
          </p>
        </div>
      </section>

      {/* Author attribution */}
      <div className="bg-white py-4 text-center">
        <p className="text-xs text-slate-500">
          Written by{' '}
          <Link href="/about" className="text-[#2B4C7E] hover:text-[#E8A84C] underline underline-offset-2">
            Shine Teoh, Certified Practising Speech Pathologist
          </Link>
        </p>
      </div>
    </>
  );
}
