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
        <Link href="/fees" className="text-[#1B365D] underline underline-offset-2 hover:text-[#E8A84C]">fees and pricing page</Link>{' '}
        for current rates and information about what your fund covers.
      </>
    ),
  },
  {
    q: 'Do you offer telehealth?',
    a: (
      <>
        Yes. I provide telehealth sessions to clients across Australia. Telehealth works well for many children and adults, and I can deliver sessions to your home, your child&apos;s school, or any setting with a stable internet connection.{' '}
        <Link href="/telehealth-speech-therapy-sydney-nsw" className="text-[#1B365D] underline underline-offset-2 hover:text-[#E8A84C]">
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
        <Link href="/speech-pathologist-inner-west-sydney-nsw" className="text-[#1B365D] underline underline-offset-2 hover:text-[#E8A84C]">
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
        <a href="tel:0421608819" className="text-[#1B365D] underline underline-offset-2 hover:text-[#E8A84C]">0421 608 819</a>{' '}
        or, if you&apos;re a support coordinator,{' '}
        <Link href="/refer-a-client" className="text-[#1B365D] underline underline-offset-2 hover:text-[#E8A84C]">submit a client referral</Link>.
      </>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#FDFBF7]">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }]} />
      </div>

      {/* ── SECTION 1: HERO ─────────────────────────────── */}
      <section className="relative bg-[#FDFBF7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm font-medium text-gray-800 tracking-wide uppercase">Accepting new clients in Inner West Sydney</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1B365D] leading-[1.1] mb-6">
              Helping your child communicate with confidence
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-light">
              Personalised speech therapy — delivered to your home, school, or online. Available in English
              and Mandarin (普通话). Serving Inner West Sydney and surrounds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://calendly.com/shineandspeak"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#1B365D] text-white font-medium px-8 py-4 rounded-full hover:bg-[#0d2240] transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Book a Free Discovery Call
              </a>
              <Link
                href="/refer-a-client"
                className="inline-flex items-center justify-center bg-white border border-gray-200 text-[#1B365D] font-medium px-8 py-4 rounded-full hover:border-[#1B365D] transition-all duration-300 text-lg shadow-sm hover:shadow-md"
              >
                Refer a Client
              </Link>
            </div>
            {/* Inline trust strip */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500 font-medium">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#E8A84C]" /> CPSP Certified</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#E8A84C]" /> NDIS Registered</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#E8A84C]" /> Medicare Provider</span>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="/shared/placeholders/hero-stock-placeholder-unsplash.jpg" 
              alt="Speech therapy session with a child" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B365D]/40 to-transparent"></div>
          </div>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[800px] h-[800px] bg-[#F0F4F8] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      </section>

      {/* ── SECTION 2: TRUST LOGO BAR ───────────────────── */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 text-[#1B365D] opacity-80 hover:opacity-100 transition-opacity">
              <CheckCircle2 className="w-6 h-6 text-[#E8A84C] flex-shrink-0" />
              <span className="font-medium text-sm tracking-wide">Certified Practising Speech Pathologist (SPA)</span>
            </div>
            <div className="flex items-center gap-3 text-[#1B365D] opacity-80 hover:opacity-100 transition-opacity">
              <CheckCircle2 className="w-6 h-6 text-[#E8A84C] flex-shrink-0" />
              <span className="font-medium text-sm tracking-wide">NDIS Registered Provider</span>
            </div>
            <div className="flex items-center gap-3 text-[#1B365D] opacity-80 hover:opacity-100 transition-opacity">
              <CheckCircle2 className="w-6 h-6 text-[#E8A84C] flex-shrink-0" />
              <span className="font-medium text-sm tracking-wide">Medicare Provider</span>
            </div>
            <div className="flex items-center gap-3 text-[#1B365D] opacity-80 hover:opacity-100 transition-opacity">
              <CheckCircle2 className="w-6 h-6 text-[#E8A84C] flex-shrink-0" />
              <span className="font-medium text-sm tracking-wide">Bilingual — English &amp; Mandarin</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CONDITION CARDS ──────────────────── */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1B365D] mb-6">
              How I can help your child
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Every child is different. I provide evidence-based speech therapy tailored to your child&apos;s individual strengths, goals, and everyday environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONDITIONS.map((condition) => (
              <Link
                key={condition.href}
                href={condition.href}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#E8A84C]/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#F0F4F8] rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-[#E8A84C]/10 transition-colors">
                  {condition.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1B365D] mb-3 group-hover:text-[#E8A84C] transition-colors">
                  {condition.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-light">{condition.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-[#1B365D] group-hover:text-[#E8A84C] transition-colors">
                  Learn more <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm leading-relaxed max-w-4xl mx-auto font-light">
              I also support children and adults with developmental delay, intellectual disability, social
              communication difficulties, AAC and multimodal communication, and adults recovering from stroke, brain
              injury, and neurological conditions.{' '}
              <Link href="/paediatric-speech-therapy-sydney-nsw" className="text-[#1B365D] font-medium underline underline-offset-4 hover:text-[#E8A84C] transition-colors">
                Explore all paediatric speech therapy services
              </Link>{' '}
              or learn about{' '}
              <Link href="/adult-speech-therapy-sydney-nsw" className="text-[#1B365D] font-medium underline underline-offset-4 hover:text-[#E8A84C] transition-colors">
                adult speech therapy options in Sydney
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: BILINGUAL CALLOUT ────────────────── */}
      <section className="py-24 bg-[#1B365D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <p className="text-xl font-medium tracking-widest text-[#E8A84C] mb-4 uppercase">我們提供中文語言治療服務</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Speech therapy in English and Mandarin</h2>
          <p className="text-blue-100 text-lg md:text-xl mb-6 leading-relaxed font-light">
            I provide bilingual speech pathology services in English and Mandarin. This means more accurate
            assessment of your child&apos;s true language abilities, clearer communication with your family, and
            therapy that respects your cultural and linguistic background.
          </p>
          <p className="text-blue-200/80 mb-10 font-light">
            Assessing a child in only one language can underestimate their true abilities. Working with a
            bilingual therapist ensures nothing is missed.
          </p>
          <Link
            href="/zh"
            className="inline-flex items-center gap-3 bg-[#E8A84C] text-[#1B365D] font-medium px-8 py-4 rounded-full hover:bg-white transition-colors duration-300 text-lg shadow-lg"
          >
            了解更多 / Learn More in Chinese <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ── SECTION 5: MOBILE ADVANTAGE ─────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1B365D] mb-6">
              Therapy where your child is most comfortable
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
              Research shows that children learn communication skills best in their everyday environments.
              That&apos;s why I come to you — whether that&apos;s your home, your child&apos;s school, kindergarten, or
              daycare. This is not a compromise — it&apos;s a clinical advantage.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Children are more relaxed, more engaged, and more likely to use new skills when they&apos;re learning
              in familiar settings. Parents and educators can observe sessions and learn strategies to use
              throughout the day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DELIVERY_MODES.map((mode) => (
              <div key={mode.title} className="bg-[#FDFBF7] rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                  {mode.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1B365D] mb-3">{mode.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{mode.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: DIFFERENTIATORS ──────────────────── */}
      <section className="py-24 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-[#1B365D] rounded-[2rem] transform -rotate-3 scale-105 opacity-10"></div>
              <div className="bg-white rounded-[2rem] p-10 md:p-12 shadow-xl relative z-10">
                <h3 className="text-2xl font-serif font-semibold text-[#1B365D] mb-8">The Shine and Speak Difference</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#E8A84C]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-[#E8A84C]" />
                    </div>
                    <div>
                      <strong className="block text-[#1B365D] mb-1 font-medium">Bilingual Expertise</strong>
                      <span className="text-gray-600 font-light">Therapy in English and Mandarin, ensuring accurate assessment and culturally responsive care.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#E8A84C]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-[#E8A84C]" />
                    </div>
                    <div>
                      <strong className="block text-[#1B365D] mb-1 font-medium">Neurodiversity-Affirming</strong>
                      <span className="text-gray-600 font-light">Focusing on your child&apos;s strengths and natural communication style, rather than trying to &quot;fix&quot; them.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#E8A84C]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-[#E8A84C]" />
                    </div>
                    <div>
                      <strong className="block text-[#1B365D] mb-1 font-medium">Family-Centred</strong>
                      <span className="text-gray-600 font-light">You are the expert on your child. We work together to set goals that matter to your family.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#E8A84C]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-[#E8A84C]" />
                    </div>
                    <div>
                      <strong className="block text-[#1B365D] mb-1 font-medium">Evidence-Based</strong>
                      <span className="text-gray-600 font-light">Using the latest research and clinical guidelines to ensure therapy is effective and efficient.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-serif text-[#1B365D] mb-6 leading-tight">
                A different approach to speech therapy
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                Therapy shouldn&apos;t feel like a chore. By using play, following your child&apos;s interests, and
                working in their natural environment, we create a positive, engaging experience where real
                learning happens.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#1B365D] font-medium hover:text-[#E8A84C] transition-colors text-lg"
              >
                Learn more about our approach <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: HOW IT WORKS ─────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1B365D] mb-6">
              How it works
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Getting started is simple. Here is what you can expect when you partner with Shine and Speak.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100"></div>
            
            <div className="relative text-center">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-[#F0F4F8] rounded-full flex items-center justify-center text-2xl font-serif font-bold text-[#1B365D] mb-6 relative z-10 shadow-sm">
                1
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#1B365D] mb-4">Discovery Call</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                A free 15-minute phone call to discuss your concerns, answer your questions, and see if we&apos;re a good fit.
              </p>
            </div>
            
            <div className="relative text-center">
              <div className="w-24 h-24 mx-auto bg-[#1B365D] border-4 border-[#1B365D] rounded-full flex items-center justify-center text-2xl font-serif font-bold text-white mb-6 relative z-10 shadow-md transform scale-110">
                2
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#1B365D] mb-4">Initial Assessment</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                A comprehensive evaluation of your child&apos;s communication skills, followed by a detailed report and goal-setting session.
              </p>
            </div>
            
            <div className="relative text-center">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-[#F0F4F8] rounded-full flex items-center justify-center text-2xl font-serif font-bold text-[#1B365D] mb-6 relative z-10 shadow-sm">
                3
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#1B365D] mb-4">Ongoing Therapy</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Regular, engaging sessions at your home, school, or online, with practical strategies for you to use between visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: MEET THE THERAPIST ───────────────── */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#E8A84C] rounded-[2rem] transform rotate-3 scale-105 opacity-20"></div>
              <img 
                src="/shared/shine/shine-headshot-1200x1200.webp" 
                alt="Shine Teoh, Certified Practising Speech Pathologist" 
                className="relative z-10 rounded-[2rem] shadow-xl w-full object-cover aspect-square md:aspect-[4/5]"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#1B365D] mb-6">
                Meet Shine Teoh
              </h2>
              <p className="text-xl text-[#E8A84C] font-medium mb-6">
                Certified Practising Speech Pathologist
              </p>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light mb-8">
                <p>
                  Hello! I&apos;m Shine, the founder and principal speech pathologist at Shine and Speak. I am
                  passionate about helping children find their voice and empowering families to support their
                  child&apos;s development.
                </p>
                <p>
                  With experience across private practice, schools, and community health, I bring a warm,
                  playful, and evidence-based approach to every session. Being bilingual in English and
                  Mandarin allows me to connect deeply with culturally diverse families.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
                <h4 className="font-serif font-semibold text-[#1B365D] mb-4">Qualifications &amp; Memberships</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E8A84C] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-light">Master of Speech Language Pathology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E8A84C] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-light">Certified Practising Member of Speech Pathology Australia (CPSP)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E8A84C] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-light">NDIS Registered Provider {/* PLACEHOLDER: Provider number */}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E8A84C] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-light">Medicare Registered Provider</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E8A84C] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-light">Training certifications — placeholder</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#1B365D] font-medium hover:text-[#E8A84C] transition-colors text-lg"
              >
                Read more about Shine&apos;s approach and qualifications <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: SOCIAL PROOF ──────────────────────── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-8 h-8 fill-[#E8A84C] text-[#E8A84C]" />)}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1B365D] mb-10">What families say</h2>
          
          <div className="bg-[#FDFBF7] rounded-[2rem] border border-gray-100 p-12 md:p-16 mb-10 shadow-sm relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4">
              <span className="text-6xl text-[#E8A84C] font-serif leading-none">&quot;</span>
            </div>
            <p className="text-gray-400 font-medium mb-4 uppercase tracking-widest text-sm">Google Reviews will appear here</p>
            {/* PASTE GOOGLE REVIEWS EMBED CODE HERE */}
            <p className="text-gray-500 text-lg mt-6 font-light italic">
              Shine and Speak is a new practice. In the meantime, the credentials, training, and clinical
              approach are what underpin every session.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
            <div className="flex items-center gap-2 text-[#1B365D]">
              <CheckCircle2 className="w-5 h-5 text-[#E8A84C]" /> Certified Practising Speech Pathologist
            </div>
            <div className="flex items-center gap-2 text-[#1B365D]">
              <CheckCircle2 className="w-5 h-5 text-[#E8A84C]" /> NDIS Registered Provider
            </div>
            <div className="flex items-center gap-2 text-[#1B365D]">
              <CheckCircle2 className="w-5 h-5 text-[#E8A84C]" /> Medicare Provider
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FOR SUPPORT COORDINATORS ────────── */}
      <section className="py-24 bg-[#1B365D] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0d2240] transform skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Are you a Support Coordinator?</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8 font-light">
                I work closely with NDIS support coordinators to provide timely, high-quality speech therapy
                with clear communication and detailed reporting. I understand the referral process and I make
                it easy for you.
              </p>
              <ul className="space-y-4 mb-10 text-blue-100 font-light">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8A84C] mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Fast response to referrals — I aim to respond within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8A84C] mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Detailed <Link href="/speech-therapy-reports-sydney-nsw" className="text-[#E8A84C] font-medium underline underline-offset-4 hover:text-white transition-colors">progress reports and session summaries</Link></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8A84C] mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Flexible scheduling — mobile and telehealth</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8A84C] mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Support for plan reviews with clear, specific recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8A84C] mt-0.5 flex-shrink-0" />
                  <span className="text-lg">All NDIS management types accepted (self-managed, plan-managed, NDIA-managed)</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/refer-a-client"
                  className="inline-flex items-center justify-center gap-2 bg-[#E8A84C] text-[#1B365D] font-medium px-8 py-4 rounded-full hover:bg-white transition-colors duration-300 text-lg shadow-lg"
                >
                  Refer a Client <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/ndis-service-guide-support-coordinators"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-300 text-lg"
                >
                  Download NDIS Service Guide
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src="/shared/placeholders/coordinator-stock-placeholder-unsplash.jpg" 
                  alt="Professional collaboration" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1B365D]/20 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: FAQ ──────────────────────────────── */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1B365D] mb-6">
              Common questions from parents
            </h2>
          </div>
          <div className="space-y-8">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-serif font-semibold text-[#1B365D] mb-4">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed font-light text-lg">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 12: SERVICE AREA GRID ───────────────── */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl font-serif font-semibold text-[#1B365D] mb-8">Areas I serve in Sydney</h2>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
            {SUBURBS.map((suburb, i) => (
              <span key={suburb.href} className="text-gray-500 text-sm md:text-base">
                <Link href={suburb.href} className="hover:text-[#E8A84C] transition-colors font-medium">
                  {suburb.label}
                </Link>
                {i < SUBURBS.length - 1 && <span className="ml-6 text-gray-300">|</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 13: FINAL CTA BAND ──────────────────── */}
      <section className="py-24 bg-[#E8A84C] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/shared/brand/shine-and-speak-logo-mark-transparent.png')] bg-no-repeat bg-center bg-contain opacity-5 mix-blend-overlay transform scale-150"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl md:leading-tight font-serif text-[#1B365D] mb-6">
            Ready to help your child thrive?
          </h2>
          <p className="text-[#1B365D] text-xl mb-10 opacity-90 font-light">
            Book a free discovery call to talk about your child&apos;s needs — no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <a
              href="tel:0421608819"
              className="inline-flex items-center justify-center gap-3 bg-[#1B365D] text-white font-medium px-10 py-5 rounded-full hover:bg-[#0d2240] transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              📞 Call 0421 608 819
            </a>
            {/* REPLACE: update href to your real Calendly URL */}
            <a
              href="https://calendly.com/shineandspeak"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#1B365D] font-medium px-10 py-5 rounded-full hover:bg-gray-50 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Book a Free Discovery Call <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <p className="text-[#1B365D] text-base opacity-80 font-medium">
            Or email <a href="mailto:admin@shineandspeak.com.au" className="underline underline-offset-4 hover:opacity-100 transition-opacity">admin@shineandspeak.com.au</a>
          </p>
        </div>
      </section>

      {/* Author attribution */}
      <div className="bg-[#1B365D] py-6 text-center">
        <p className="text-sm text-blue-200/60 font-light">
          Written by{' '}
          <Link href="/about" className="text-blue-200 hover:text-white transition-colors">
            Shine Teoh, Certified Practising Speech Pathologist
          </Link>
        </p>
      </div>
    </>
  );
}
