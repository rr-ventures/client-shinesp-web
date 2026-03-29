import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import {
  medicalBusinessSchema,
  breadcrumbSchema,
  faqPageSchema,
  SITE_URL,
  PHONE_DISPLAY,
  EMAIL,
} from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Speech Pathologist Sydney NSW | Shine and Speak',
  description:
    'Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin. NDIS, Medicare & private. Serving Inner West Sydney.',
  alternates: {
    canonical: '/',
    languages: { en: '/', zh: '/zh' },
  },
  openGraph: {
    title: 'Speech Pathologist Sydney NSW | Shine and Speak',
    description:
      'Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin. NDIS, Medicare & private. Serving Inner West Sydney.',
    url: '/',
  },
};

const homeFaqs = [
  {
    question: 'How do I know if my child needs speech therapy?',
    answer:
      "If you're concerned about how your child communicates — whether it's how they pronounce words, how much they understand, how they put sentences together, or how they interact with others — it's worth getting an assessment. We offer a free discovery call where we can talk through your concerns and help you decide whether a full assessment would be helpful.",
  },
  {
    question: 'What does a typical session look like?',
    answer:
      "Sessions are usually 45–60 minutes and take place at your home, your child's school, or online. We use play-based, evidence-based activities tailored to your child's interests and goals. We also spend time coaching you on strategies you can use between sessions so progress doesn't stop when we leave.",
  },
  {
    question: 'How much does speech therapy cost?',
    answer:
      "Fees depend on the type of session and funding source. We're a registered NDIS provider and Medicare provider, and we also see private clients. Visit our fees and pricing page for current rates and information about what your fund covers.",
  },
  {
    question: 'Do you offer telehealth?',
    answer:
      'Yes. We provide telehealth sessions to clients across Australia. Telehealth works well for many children and adults, and we can deliver sessions to your home, your child\'s school, or any setting with a stable internet connection.',
  },
  {
    question: 'What areas do you travel to?',
    answer:
      'We travel within a 30-minute radius of Arncliffe for ongoing therapy — including Burwood, Hurstville, Strathfield, Canterbury-Bankstown, Campsie, Rockdale, Kogarah, and Marrickville. We also travel across greater Sydney for one-off assessments and report writing.',
  },
  {
    question: 'How do I get started?',
    answer:
      "Book a free discovery call. We'll chat about your child's needs and explain how the process works. You can also call us directly or refer a client if you're a support coordinator.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Schema */}
      <JsonLd data={medicalBusinessSchema} />
      <JsonLd data={faqPageSchema(homeFaqs)} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: SITE_URL }])} />

      {/* SECTION 1: HERO */}
      <section className="bg-[#F4EBE1] py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#112A46] mb-6 leading-[1.15] tracking-tight text-balance">
              Helping your child communicate with confidence
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-light">
              Personalised speech therapy — delivered to your home, school, or online. Available in English and Mandarin (普通话). Serving Inner West Sydney and surrounds.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              {/* REPLACE: swap /book href with real Calendly URL if needed */}
              <Link href="/book" className="bg-[#C89B66] text-white text-center px-8 py-4 rounded-full font-medium text-lg hover:bg-[#b58956] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                Book a Free Discovery Call
              </Link>
              <a href="#services" className="border border-[#112A46]/20 text-[#112A46] text-center px-8 py-4 rounded-full font-medium text-lg hover:bg-[#112A46] hover:text-white transition-all duration-300">
                Learn More ↓
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-[#112A46]/80">
              <span className="flex items-center gap-2"><span className="text-[#C89B66]">✓</span> CPSP Certified</span>
              <span className="flex items-center gap-2"><span className="text-[#C89B66]">✓</span> NDIS Registered</span>
              <span className="flex items-center gap-2"><span className="text-[#C89B66]">✓</span> Medicare Provider</span>
            </div>
          </div>
          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-[#E3E7E4] rounded-[40px] rotate-3 scale-105 opacity-50"></div>
            <Image
              src="/shine-and-speak-logo-mark-transparent.png"
              alt="Shine and Speak speech pathology brand mark — mobile therapy Sydney"
              width={500}
              height={500}
              className="w-full max-w-lg object-contain relative z-10 drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST LOGO BAR */}
      <section className="border-b border-slate-200 py-10 bg-white">
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-10 md:gap-20">
          <div className="text-center group">
            <div className="text-[#112A46] font-medium text-sm tracking-wide uppercase mb-1">Speech Pathology Australia</div>
            <div className="text-xs text-slate-500 font-light">Certified Practising Member</div>
          </div>
          <div className="text-center group">
            <div className="text-[#112A46] font-medium text-sm tracking-wide uppercase mb-1">NDIS Registered Provider</div>
            <div className="text-xs text-slate-500 font-light">All management types accepted</div>
          </div>
          <div className="text-center group">
            <div className="text-[#112A46] font-medium text-sm tracking-wide uppercase mb-1">Medicare Provider</div>
            <div className="text-xs text-slate-500 font-light">Rebates available with GP referral</div>
          </div>
          <div className="text-center text-slate-400 text-xs italic font-light">
            {/* PLACEHOLDER: Training certification logos (e.g. Hanen, Sounds Write) */}
            Training certifications — coming soon
          </div>
        </div>
      </section>

      {/* SECTION 3: CONDITION CARDS */}
      <section id="services" className="py-24 md:py-32 bg-[#FAFAF8]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#112A46] mb-4">How we can help your child</h2>
            <p className="text-slate-600 text-lg font-light">Evidence-based therapy tailored to your child's unique strengths and challenges.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Autism & ASD', desc: 'Supporting children on the autism spectrum with communication, social skills, and language development.', link: '/speech-therapy-autism-sydney-nsw', anchor: 'Speech therapy for autism and ASD' },
              { title: 'ADHD & Attention', desc: 'Helping children with ADHD develop focus, listening skills, and social communication strategies.', link: '/speech-therapy-adhd-sydney-nsw', anchor: 'Speech therapy for ADHD and attention' },
              { title: 'Language Delay', desc: 'Building receptive and expressive language skills so your child can understand and be understood.', link: '/speech-therapy-language-delay-sydney-nsw', anchor: 'Language delay speech therapy' },
              { title: 'Speech Sounds', desc: 'Helping children pronounce sounds clearly so they can be understood by family, friends, and teachers.', link: '/speech-therapy-speech-sounds-sydney-nsw', anchor: 'Speech sounds and pronunciation therapy' },
              { title: 'Stuttering & Fluency', desc: 'Evidence-based support for children and adults experiencing stuttering or other fluency difficulties.', link: '/speech-therapy-stuttering-sydney-nsw', anchor: 'Stuttering and fluency support' },
              { title: 'Literacy & Reading', desc: 'Supporting reading, writing, and spelling development for children who are finding literacy challenging.', link: '/speech-therapy-literacy-sydney-nsw', anchor: 'Literacy and reading support' },
            ].map((service, idx) => (
              <Link href={service.link} key={idx} className="block p-10 bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group border border-slate-100">
                <h3 className="font-serif text-2xl font-medium text-[#112A46] mb-4 group-hover:text-[#C89B66] transition-colors">{service.title}</h3>
                <p className="text-slate-600 mb-8 font-light leading-relaxed">{service.desc}</p>
                <span className="text-[#C89B66] font-medium flex items-center text-sm tracking-wide">{service.anchor} <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span></span>
              </Link>
            ))}
          </div>
          <p className="mt-16 text-center text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            We also support children and adults with developmental delay, intellectual disability, social communication difficulties, AAC and multimodal communication, and adults recovering from stroke, brain injury, and neurological conditions.{' '}
            <Link href="/paediatric-speech-therapy-sydney-nsw" className="text-[#112A46] font-medium underline decoration-[#C89B66]/30 hover:decoration-[#C89B66] underline-offset-4 transition-all">Explore all paediatric services</Link>{' '}
            or learn about{' '}
            <Link href="/adult-speech-therapy-sydney-nsw" className="text-[#112A46] font-medium underline decoration-[#C89B66]/30 hover:decoration-[#C89B66] underline-offset-4 transition-all">adult speech therapy options in Sydney</Link>.
          </p>
        </div>
      </section>

      {/* SECTION 4: BILINGUAL CALLOUT */}
      <section className="py-24 bg-[#112A46] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[100%] rounded-full bg-[#C89B66] blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <div className="text-[#C89B66] font-medium mb-4 text-lg tracking-widest">我們提供中文語言治療服務</div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-8 leading-tight">Speech therapy in English and Mandarin</h2>
          <p className="text-lg md:text-xl mb-6 text-white/80 font-light leading-relaxed">
            We provide bilingual speech pathology services in English and Mandarin. This means more accurate assessment of your child&apos;s true language abilities, clearer communication with your family, and therapy that respects your cultural and linguistic background.
          </p>
          <p className="text-white/60 mb-10 font-light text-lg">
            Assessing a child in only one language can underestimate their true abilities. Working with a bilingual therapist ensures nothing is missed.
          </p>
          <Link href="/zh" className="inline-block bg-[#C89B66] text-white px-8 py-4 rounded-full font-medium hover:bg-[#b58956] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            了解更多 / Learn More in Chinese →
          </Link>
        </div>
      </section>

      {/* SECTION 5: THE MOBILE ADVANTAGE */}
      <section className="py-24 md:py-32 bg-[#FAFAF8]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#112A46] mb-6">Therapy where your child is most comfortable</h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              Research shows that children learn communication skills best in their everyday environments. That&apos;s why we come to you — whether that&apos;s your home, your child&apos;s school, kindergarten, or daycare.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            <div className="bg-white p-10 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex gap-6">
              <div className="text-4xl shrink-0 bg-[#F4EBE1] w-16 h-16 rounded-full flex items-center justify-center">🏠</div>
              <div>
                <h3 className="font-serif text-2xl font-medium text-[#112A46] mb-3">Home sessions</h3>
                <p className="text-slate-600 font-light leading-relaxed">Therapy in the comfort of your own home. We bring everything needed. No travel stress for your family.</p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex gap-6">
              <div className="text-4xl shrink-0 bg-[#F4EBE1] w-16 h-16 rounded-full flex items-center justify-center">🏫</div>
              <div>
                <h3 className="font-serif text-2xl font-medium text-[#112A46] mb-3">School &amp; kindergarten visits</h3>
                <p className="text-slate-600 font-light leading-relaxed">Working with your child in their learning environment, with the option to coordinate directly with their teachers.</p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex gap-6">
              <div className="text-4xl shrink-0 bg-[#F4EBE1] w-16 h-16 rounded-full flex items-center justify-center">💻</div>
              <div>
                <h3 className="font-serif text-2xl font-medium text-[#112A46] mb-3">Telehealth across Australia</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  Flexible <Link href="/telehealth-speech-therapy-sydney-nsw" className="underline decoration-[#C89B66]/30 hover:decoration-[#C89B66] text-[#112A46] font-medium transition-all">online sessions via telehealth</Link> from anywhere. Ideal for families in regional areas or managing busy schedules.
                </p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex gap-6">
              <div className="text-4xl shrink-0 bg-[#F4EBE1] w-16 h-16 rounded-full flex items-center justify-center">📍</div>
              <div>
                <h3 className="font-serif text-2xl font-medium text-[#112A46] mb-3">Inner West Sydney &amp; surrounds</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  We travel within 30 minutes of Arncliffe, including{' '}
                  <Link href="/speech-pathologist-burwood-nsw" className="underline decoration-[#C89B66]/30 hover:decoration-[#C89B66] text-[#112A46] font-medium transition-all">Burwood and surrounding suburbs</Link>, Hurstville, Strathfield, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: DIFFERENTIATORS */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#112A46] text-center mb-16">Why families choose Shine and Speak</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="text-4xl mb-6 bg-[#FAFAF8] w-20 h-20 mx-auto rounded-full flex items-center justify-center group-hover:bg-[#F4EBE1] transition-colors">🚗</div>
              <h3 className="font-serif text-xl font-medium text-[#112A46] mb-4">We come to you</h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">No clinic visits needed. We travel to your home, school, or daycare — wherever your child is most comfortable.</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl mb-6 bg-[#FAFAF8] w-20 h-20 mx-auto rounded-full flex items-center justify-center group-hover:bg-[#F4EBE1] transition-colors">🌏</div>
              <h3 className="font-serif text-xl font-medium text-[#112A46] mb-4">Bilingual — English &amp; Mandarin</h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">We provide speech therapy and assessments in both English and Mandarin, ensuring accurate evaluation of your child&apos;s true language abilities.</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl mb-6 bg-[#FAFAF8] w-20 h-20 mx-auto rounded-full flex items-center justify-center group-hover:bg-[#F4EBE1] transition-colors">💳</div>
              <h3 className="font-serif text-xl font-medium text-[#112A46] mb-4">NDIS, Medicare &amp; private</h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">
                Registered NDIS provider, Medicare provider, and private clients. Learn about{' '}
                <Link href="/ndis-speech-therapy-sydney-nsw" className="underline decoration-[#C89B66]/30 hover:decoration-[#C89B66] text-[#112A46] font-medium transition-all">NDIS and Medicare funding options</Link>.
              </p>
            </div>
            <div className="text-center group">
              <div className="text-4xl mb-6 bg-[#FAFAF8] w-20 h-20 mx-auto rounded-full flex items-center justify-center group-hover:bg-[#F4EBE1] transition-colors">📋</div>
              <h3 className="font-serif text-xl font-medium text-[#112A46] mb-4">Evidence-based, goal-focused</h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">Every therapy plan is grounded in current evidence and focused on practical goals that make a real difference in your child&apos;s daily life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: HOW IT WORKS */}
      <section className="py-24 md:py-32 bg-[#F4EBE1]/50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#112A46] text-center mb-16">Getting started is simple</h2>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16 relative">
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-slate-200 -translate-y-1/2 z-0"></div>
            <div className="bg-white p-10 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative z-10 text-center">
              <div className="bg-[#112A46] text-white w-12 h-12 rounded-full flex items-center justify-center font-serif text-xl mx-auto mb-6 shadow-md">1</div>
              <h3 className="font-serif text-2xl font-medium text-[#112A46] mb-4">Book a free call</h3>
              <p className="text-slate-600 font-light leading-relaxed">We&apos;ll have a quick chat about your child&apos;s needs, answer your questions, and work out whether we&apos;re the right fit. No obligation, no pressure.</p>
            </div>
            <div className="bg-white p-10 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative z-10 text-center">
              <div className="bg-[#112A46] text-white w-12 h-12 rounded-full flex items-center justify-center font-serif text-xl mx-auto mb-6 shadow-md">2</div>
              <h3 className="font-serif text-2xl font-medium text-[#112A46] mb-4">Assessment</h3>
              <p className="text-slate-600 font-light leading-relaxed">We&apos;ll complete a thorough assessment — at your home, your child&apos;s school, or online — to understand their strengths, challenges, and goals.</p>
            </div>
            <div className="bg-white p-10 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative z-10 text-center">
              <div className="bg-[#112A46] text-white w-12 h-12 rounded-full flex items-center justify-center font-serif text-xl mx-auto mb-6 shadow-md">3</div>
              <h3 className="font-serif text-2xl font-medium text-[#112A46] mb-4">Therapy plan</h3>
              <p className="text-slate-600 font-light leading-relaxed">You&apos;ll receive a personalised therapy plan focused on practical, real-life progress, coordinated across all settings.</p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/book" className="inline-block bg-[#C89B66] text-white px-10 py-5 rounded-full font-medium text-lg hover:bg-[#b58956] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Book Your Free Discovery Call →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: OUR APPROACH */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-[#E3E7E4] rounded-[40px] -rotate-3 scale-105 opacity-50"></div>
            <Image
              src="/shine-and-speak-logo-mark-transparent.png"
              alt="Shine and Speak — our approach to speech pathology"
              width={500}
              height={500}
              className="w-full max-w-sm object-contain bg-white rounded-[32px] p-12 shadow-xl relative z-10"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#112A46] mb-6">Our Approach</h2>
            <p className="text-slate-600 mb-6 font-light leading-relaxed text-lg">
              At Shine and Speak, we are passionate about providing high-quality, personalised speech therapy that makes a genuine difference in everyday life — not therapy for the sake of therapy.
            </p>
            <p className="text-slate-600 mb-8 font-light leading-relaxed text-lg">
              We specialise in working with children and adults across a wide range of communication needs. We believe therapy should be practical, collaborative, and built around your goals.
            </p>
            <ul className="space-y-4 mb-10 text-[#112A46] font-medium">
              <li className="flex items-center gap-3"><span className="text-[#C89B66] text-xl">✓</span> Certified Practising Member, Speech Pathology Australia (CPSP)</li>
              <li className="flex items-center gap-3"><span className="text-[#C89B66] text-xl">✓</span> NDIS Registered Provider</li>
              <li className="flex items-center gap-3"><span className="text-[#C89B66] text-xl">✓</span> Medicare Registered Provider</li>
              {/* PLACEHOLDER: List training certifications here e.g. Hanen, Sounds Write, Lidcombe Program */}
              <li className="flex items-center gap-3"><span className="text-[#C89B66] text-xl">✓</span> Evidence-based training certifications</li>
            </ul>
            <Link href="/about" className="inline-block border border-[#112A46]/20 text-[#112A46] px-8 py-4 rounded-full font-medium hover:bg-[#112A46] hover:text-white transition-all duration-300">
              Read more about our clinical approach and qualifications →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9: SOCIAL PROOF */}
      <section className="py-24 md:py-32 bg-[#FAFAF8]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#112A46] mb-12">What families say</h2>
          <div className="max-w-3xl mx-auto bg-white p-12 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-[#C89B66] opacity-30 font-serif">"</div>
            {/* PASTE GOOGLE REVIEWS EMBED CODE HERE */}
            <p className="italic text-slate-600 mb-8 text-lg font-light leading-relaxed relative z-10">
              &quot;Review coming soon — Shine and Speak is a new practice. In the meantime, here are the credentials and training that back our work.&quot;
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-[#112A46]/80">
              <span className="flex items-center gap-2"><span className="text-[#C89B66]">✓</span> CPSP Certified</span>
              <span className="flex items-center gap-2"><span className="text-[#C89B66]">✓</span> NDIS Registered</span>
              <span className="flex items-center gap-2"><span className="text-[#C89B66]">✓</span> Medicare Provider</span>
              <span className="flex items-center gap-2"><span className="text-[#C89B66]">✓</span> Bilingual English &amp; Mandarin</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FOR SUPPORT COORDINATORS */}
      <section className="py-24 md:py-32 bg-[#112A46] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[100%] rounded-full bg-[#E3E7E4] blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">Are you a Support Coordinator?</h2>
            <p className="mb-8 text-white/80 font-light leading-relaxed text-lg">
              We work closely with NDIS support coordinators to provide timely, high-quality speech therapy with clear communication and detailed reporting. We understand the referral process and make it easy for you.
            </p>
            <ul className="space-y-4 mb-10 text-white/90 font-light">
              <li className="flex items-start gap-3"><span className="text-[#C89B66] mt-1">•</span> <span>Fast response to referrals — aiming within 24 hours</span></li>
              <li className="flex items-start gap-3"><span className="text-[#C89B66] mt-1">•</span> <span>Detailed <Link href="/speech-therapy-reports-sydney-nsw" className="underline decoration-white/30 hover:decoration-white transition-all">progress reports and session summaries</Link></span></li>
              <li className="flex items-start gap-3"><span className="text-[#C89B66] mt-1">•</span> <span>Flexible scheduling — mobile and telehealth</span></li>
              <li className="flex items-start gap-3"><span className="text-[#C89B66] mt-1">•</span> <span>Support for plan reviews with clear, specific recommendations</span></li>
              <li className="flex items-start gap-3"><span className="text-[#C89B66] mt-1">•</span> <span>All NDIS management types accepted (self-managed, plan-managed, NDIA-managed)</span></li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/refer-a-client" className="bg-[#C89B66] text-white text-center px-8 py-4 rounded-full font-medium hover:bg-[#b58956] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                Refer a Client →
              </Link>
              <Link href="/ndis-service-guide-support-coordinators" className="border border-white/30 text-white text-center px-8 py-4 rounded-full font-medium hover:bg-white hover:text-[#112A46] transition-all duration-300">
                Download NDIS Service Guide →
              </Link>
            </div>
          </div>
          <div className="bg-white/5 p-10 rounded-[32px] border border-white/10 backdrop-blur-sm">
            <h3 className="font-serif text-2xl font-medium mb-4">Quick Referral</h3>
            <p className="font-light text-white/70 mb-8 leading-relaxed">Submit a secure referral and we&apos;ll be in touch within 24 hours.</p>
            <Link href="/refer-a-client" className="block w-full text-center border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-[#112A46] transition-all duration-300">
              Open Referral Form
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ — ALL VISIBLE, NO ACCORDIONS */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#112A46] text-center mb-16">Common questions from parents</h2>
          <div className="space-y-12">
            {homeFaqs.map((faq, idx) => (
              <div key={idx} className="pb-12 border-b border-slate-100 last:border-0 last:pb-0">
                <h3 className="font-serif text-2xl font-medium text-[#112A46] mb-4">{faq.question}</h3>
                <p className="text-slate-600 font-light leading-relaxed text-lg">
                  {faq.answer}
                  {idx === 2 && (
                    <> Visit our <Link href="/fees" className="text-[#112A46] font-medium underline decoration-[#C89B66]/30 hover:decoration-[#C89B66] transition-all">fees and pricing page</Link> for current rates.</>
                  )}
                  {idx === 3 && (
                    <> Learn more about <Link href="/telehealth-speech-therapy-sydney-nsw" className="text-[#112A46] font-medium underline decoration-[#C89B66]/30 hover:decoration-[#C89B66] transition-all">telehealth speech therapy sessions</Link>.</>
                  )}
                  {idx === 4 && (
                    <> <Link href="/speech-pathologist-burwood-nsw" className="text-[#112A46] font-medium underline decoration-[#C89B66]/30 hover:decoration-[#C89B66] transition-all">Find your nearest service area</Link>.</>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: SERVICE AREA */}
      <section className="py-16 bg-[#FAFAF8] border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-medium text-[#112A46] mb-8">Areas we serve in Sydney</h2>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-[#112A46] font-light">
            {[
              { label: 'Arncliffe', href: '/speech-pathologist-arncliffe-nsw' },
              { label: 'Burwood', href: '/speech-pathologist-burwood-nsw' },
              { label: 'Hurstville', href: '/speech-pathologist-hurstville-nsw' },
              { label: 'Strathfield', href: '/speech-pathologist-strathfield-nsw' },
              { label: 'Canterbury-Bankstown', href: '/speech-pathologist-canterbury-bankstown-nsw' },
              { label: 'Campsie', href: '/speech-pathologist-campsie-nsw' },
              { label: 'Rockdale', href: '/speech-pathologist-rockdale-nsw' },
              { label: 'Kogarah', href: '/speech-pathologist-kogarah-nsw' },
              { label: 'Marrickville', href: '/speech-pathologist-marrickville-nsw' },
              { label: 'Inner West Sydney', href: '/speech-pathologist-inner-west-sydney-nsw' },
              { label: 'St George', href: '/speech-pathologist-st-george-nsw' },
              { label: 'Telehealth Australia-wide', href: '/telehealth-speech-therapy-sydney-nsw' },
            ].map((s, idx, arr) => (
              <span key={s.href} className="flex items-center gap-6">
                <Link href={s.href} className="hover:text-[#C89B66] transition-colors">{s.label}</Link>
                {idx < arr.length - 1 && <span className="text-slate-300">•</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Author attribution */}
      <div className="bg-[#FAFAF8] py-6 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-500 font-light">
            <Link href="/about" className="underline decoration-slate-300 hover:decoration-[#112A46] hover:text-[#112A46] transition-all">Written by a Certified Practising Speech Pathologist</Link>
          </p>
        </div>
      </div>

      {/* SECTION 13: FINAL CTA BAND */}
      <section className="py-24 md:py-32 bg-[#C89B66] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">Ready to help your child thrive?</h2>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light text-white/90">
            Book a free discovery call to talk about your child&apos;s needs — no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
            <a href="tel:0421608819" className="text-xl font-medium hover:text-[#112A46] transition-colors flex items-center gap-2">
              <span className="text-2xl">📞</span> {PHONE_DISPLAY}
            </a>
            <span className="hidden sm:inline text-white/50">|</span>
            <a href={`mailto:${EMAIL}`} className="text-xl font-medium hover:text-[#112A46] transition-colors flex items-center gap-2">
              <span className="text-2xl">✉️</span> {EMAIL}
            </a>
          </div>
          <Link href="/book" className="inline-block bg-[#112A46] text-white px-12 py-5 rounded-full font-medium text-lg hover:bg-white hover:text-[#112A46] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </>
  );
}
