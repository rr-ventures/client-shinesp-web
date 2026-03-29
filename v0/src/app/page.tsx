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
      <section className="bg-[#F0F4F8] py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6 leading-tight">
              Helping your child communicate with confidence
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Personalised speech therapy — delivered to your home, school, or online. Available in English and Mandarin (普通话). Serving Inner West Sydney and surrounds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* REPLACE: swap /book href with real Calendly URL if needed */}
              <Link href="/book" className="bg-[#E8A84C] text-white text-center px-8 py-4 rounded-md font-bold text-lg hover:bg-amber-600 transition">
                Book a Free Discovery Call
              </Link>
              <a href="#services" className="border-2 border-[#1B365D] text-[#1B365D] text-center px-8 py-4 rounded-md font-bold text-lg hover:bg-[#1B365D] hover:text-white transition">
                Learn More ↓
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-[#1B365D]">
              <span>✓ CPSP Certified</span>
              <span>✓ NDIS Registered</span>
              <span>✓ Medicare Provider</span>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/shine-and-speak-logo-mark-transparent.png"
              alt="Shine and Speak speech pathology brand mark — mobile therapy Sydney"
              width={400}
              height={400}
              className="w-full max-w-md object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST LOGO BAR */}
      <section className="border-b border-gray-200 py-8 bg-white">
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-[#1B365D] font-bold text-sm">Speech Pathology Australia</div>
            <div className="text-xs text-gray-500">Certified Practising Member</div>
          </div>
          <div className="text-center">
            <div className="text-[#1B365D] font-bold text-sm">NDIS Registered Provider</div>
            <div className="text-xs text-gray-500">All management types accepted</div>
          </div>
          <div className="text-center">
            <div className="text-[#1B365D] font-bold text-sm">Medicare Provider</div>
            <div className="text-xs text-gray-500">Rebates available with GP referral</div>
          </div>
          <div className="text-center text-gray-400 text-xs italic">
            {/* PLACEHOLDER: Training certification logos (e.g. Hanen, Sounds Write) */}
            Training certifications — coming soon
          </div>
        </div>
      </section>

      {/* SECTION 3: CONDITION CARDS */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1B365D] text-center mb-12">How we can help your child</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Autism & ASD', desc: 'Supporting children on the autism spectrum with communication, social skills, and language development.', link: '/speech-therapy-autism-sydney-nsw', anchor: 'Speech therapy for autism and ASD' },
              { title: 'ADHD & Attention', desc: 'Helping children with ADHD develop focus, listening skills, and social communication strategies.', link: '/speech-therapy-adhd-sydney-nsw', anchor: 'Speech therapy for ADHD and attention' },
              { title: 'Language Delay', desc: 'Building receptive and expressive language skills so your child can understand and be understood.', link: '/speech-therapy-language-delay-sydney-nsw', anchor: 'Language delay speech therapy' },
              { title: 'Speech Sounds', desc: 'Helping children pronounce sounds clearly so they can be understood by family, friends, and teachers.', link: '/speech-therapy-speech-sounds-sydney-nsw', anchor: 'Speech sounds and pronunciation therapy' },
              { title: 'Stuttering & Fluency', desc: 'Evidence-based support for children and adults experiencing stuttering or other fluency difficulties.', link: '/speech-therapy-stuttering-sydney-nsw', anchor: 'Stuttering and fluency support' },
              { title: 'Literacy & Reading', desc: 'Supporting reading, writing, and spelling development for children who are finding literacy challenging.', link: '/speech-therapy-literacy-sydney-nsw', anchor: 'Literacy and reading support' },
            ].map((service, idx) => (
              <Link href={service.link} key={idx} className="block p-8 border border-gray-200 rounded-xl hover:shadow-lg transition group">
                <h3 className="text-xl font-bold text-[#1B365D] mb-3 group-hover:text-[#E8A84C] transition">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <span className="text-[#E8A84C] font-bold flex items-center">{service.anchor} <span className="ml-2">→</span></span>
              </Link>
            ))}
          </div>
          <p className="mt-12 text-center text-gray-600 max-w-3xl mx-auto">
            We also support children and adults with developmental delay, intellectual disability, social communication difficulties, AAC and multimodal communication, and adults recovering from stroke, brain injury, and neurological conditions.{' '}
            <Link href="/paediatric-speech-therapy-sydney-nsw" className="text-[#1B365D] font-bold underline">Explore all paediatric services</Link>{' '}
            or learn about{' '}
            <Link href="/adult-speech-therapy-sydney-nsw" className="text-[#1B365D] font-bold underline">adult speech therapy options in Sydney</Link>.
          </p>
        </div>
      </section>

      {/* SECTION 4: BILINGUAL CALLOUT */}
      <section className="py-16 bg-[#1B365D] text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="text-[#E8A84C] font-bold mb-2 text-lg">我們提供中文語言治療服務</div>
          <h2 className="text-3xl font-bold mb-6">Speech therapy in English and Mandarin</h2>
          <p className="text-lg mb-8 text-gray-200">
            We provide bilingual speech pathology services in English and Mandarin. This means more accurate assessment of your child&apos;s true language abilities, clearer communication with your family, and therapy that respects your cultural and linguistic background.
          </p>
          <p className="text-gray-300 mb-8">
            Assessing a child in only one language can underestimate their true abilities. Working with a bilingual therapist ensures nothing is missed.
          </p>
          <Link href="/zh" className="inline-block bg-[#E8A84C] text-white px-8 py-3 rounded-md font-bold hover:bg-amber-600 transition">
            了解更多 / Learn More in Chinese →
          </Link>
        </div>
      </section>

      {/* SECTION 5: THE MOBILE ADVANTAGE */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1B365D] text-center mb-6">Therapy where your child is most comfortable</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Research shows that children learn communication skills best in their everyday environments. That&apos;s why we come to you — whether that&apos;s your home, your child&apos;s school, kindergarten, or daycare.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-[#1B365D] mb-2">Home sessions</h3>
              <p className="text-gray-600">Therapy in the comfort of your own home. We bring everything needed. No travel stress for your family.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🏫</div>
              <h3 className="text-xl font-bold text-[#1B365D] mb-2">School &amp; kindergarten visits</h3>
              <p className="text-gray-600">Working with your child in their learning environment, with the option to coordinate directly with their teachers.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-[#1B365D] mb-2">Telehealth across Australia</h3>
              <p className="text-gray-600">
                Flexible <Link href="/telehealth-speech-therapy-sydney-nsw" className="underline text-[#1B365D]">online sessions via telehealth</Link> from anywhere. Ideal for families in regional areas or managing busy schedules.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-[#1B365D] mb-2">Inner West Sydney &amp; surrounds</h3>
              <p className="text-gray-600">
                We travel within 30 minutes of Arncliffe, including{' '}
                <Link href="/speech-pathologist-burwood-nsw" className="underline text-[#1B365D]">Burwood and surrounding suburbs</Link>, Hurstville, Strathfield, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: DIFFERENTIATORS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1B365D] text-center mb-12">Why families choose Shine and Speak</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl mb-3">🚗</div>
              <h3 className="text-lg font-bold text-[#1B365D] mb-3">We come to you</h3>
              <p className="text-gray-600 text-sm">No clinic visits needed. We travel to your home, school, or daycare — wherever your child is most comfortable.</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🌏</div>
              <h3 className="text-lg font-bold text-[#1B365D] mb-3">Bilingual — English &amp; Mandarin</h3>
              <p className="text-gray-600 text-sm">We provide speech therapy and assessments in both English and Mandarin, ensuring accurate evaluation of your child&apos;s true language abilities.</p>
            </div>
            <div>
              <div className="text-3xl mb-3">💳</div>
              <h3 className="text-lg font-bold text-[#1B365D] mb-3">NDIS, Medicare &amp; private</h3>
              <p className="text-gray-600 text-sm">
                Registered NDIS provider, Medicare provider, and private clients. Learn about{' '}
                <Link href="/ndis-speech-therapy-sydney-nsw" className="underline">NDIS and Medicare funding options</Link>.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-lg font-bold text-[#1B365D] mb-3">Evidence-based, goal-focused</h3>
              <p className="text-gray-600 text-sm">Every therapy plan is grounded in current evidence and focused on practical goals that make a real difference in your child&apos;s daily life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: HOW IT WORKS */}
      <section className="py-16 md:py-24 bg-[#F0F4F8]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1B365D] text-center mb-12">Getting started is simple</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-[#E8A84C] font-bold text-xl mb-2">Step 1</div>
              <h3 className="text-xl font-bold text-[#1B365D] mb-3">Book a free call</h3>
              <p className="text-gray-600">We&apos;ll have a quick chat about your child&apos;s needs, answer your questions, and work out whether we&apos;re the right fit. No obligation, no pressure.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-[#E8A84C] font-bold text-xl mb-2">Step 2</div>
              <h3 className="text-xl font-bold text-[#1B365D] mb-3">Assessment</h3>
              <p className="text-gray-600">We&apos;ll complete a thorough assessment — at your home, your child&apos;s school, or online — to understand their strengths, challenges, and goals.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-[#E8A84C] font-bold text-xl mb-2">Step 3</div>
              <h3 className="text-xl font-bold text-[#1B365D] mb-3">Therapy plan</h3>
              <p className="text-gray-600">You&apos;ll receive a personalised therapy plan focused on practical, real-life progress, coordinated across all settings.</p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/book" className="inline-block bg-[#E8A84C] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-amber-600 transition">
              Book Your Free Discovery Call →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: OUR APPROACH */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/shine-and-speak-logo-mark-transparent.png"
              alt="Shine and Speak — our approach to speech pathology"
              width={500}
              height={500}
              className="w-full max-w-sm object-contain bg-gray-50 rounded-2xl p-8"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#1B365D] mb-6">Our Approach</h2>
            <p className="text-gray-700 mb-4">
              At Shine and Speak, we are passionate about providing high-quality, personalised speech therapy that makes a genuine difference in everyday life — not therapy for the sake of therapy.
            </p>
            <p className="text-gray-700 mb-6">
              We specialise in working with children and adults across a wide range of communication needs. We believe therapy should be practical, collaborative, and built around your goals.
            </p>
            <ul className="space-y-2 mb-8 text-[#1B365D] font-semibold">
              <li>✓ Certified Practising Member, Speech Pathology Australia (CPSP)</li>
              <li>✓ NDIS Registered Provider</li>
              <li>✓ Medicare Registered Provider</li>
              {/* PLACEHOLDER: List training certifications here e.g. Hanen, Sounds Write, Lidcombe Program */}
              <li>✓ Evidence-based training certifications</li>
            </ul>
            <Link href="/about" className="text-[#1B365D] font-bold underline hover:text-[#E8A84C] transition">
              Read more about our clinical approach and qualifications →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9: SOCIAL PROOF */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1B365D] mb-8">What families say</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            {/* PASTE GOOGLE REVIEWS EMBED CODE HERE */}
            <p className="italic text-gray-600 mb-4">
              &quot;Review coming soon — Shine and Speak is a new practice. In the meantime, here are the credentials and training that back our work.&quot;
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-[#1B365D]">
              <span>✓ CPSP Certified</span>
              <span>✓ NDIS Registered</span>
              <span>✓ Medicare Provider</span>
              <span>✓ Bilingual English &amp; Mandarin</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FOR SUPPORT COORDINATORS */}
      <section className="py-16 md:py-24 bg-[#1B365D] text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Are you a Support Coordinator?</h2>
            <p className="mb-6 text-gray-200">
              We work closely with NDIS support coordinators to provide timely, high-quality speech therapy with clear communication and detailed reporting. We understand the referral process and make it easy for you.
            </p>
            <ul className="space-y-3 mb-8 text-gray-200">
              <li>• Fast response to referrals — aiming within 24 hours</li>
              <li>• Detailed <Link href="/speech-therapy-reports-sydney-nsw" className="underline hover:text-white">progress reports and session summaries</Link></li>
              <li>• Flexible scheduling — mobile and telehealth</li>
              <li>• Support for plan reviews with clear, specific recommendations</li>
              <li>• All NDIS management types accepted (self-managed, plan-managed, NDIA-managed)</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/refer-a-client" className="bg-[#E8A84C] text-white text-center px-6 py-3 rounded-md font-bold hover:bg-amber-600 transition">
                Refer a Client →
              </Link>
              <Link href="/ndis-service-guide-support-coordinators" className="border-2 border-white text-white text-center px-6 py-3 rounded-md font-bold hover:bg-white hover:text-[#1B365D] transition">
                Download NDIS Service Guide →
              </Link>
            </div>
          </div>
          <div className="bg-white/10 p-8 rounded-xl border border-white/20">
            <h3 className="text-xl font-bold mb-4">Quick Referral</h3>
            <p className="text-sm text-gray-300 mb-6">Submit a secure referral and we&apos;ll be in touch within 24 hours.</p>
            <Link href="/refer-a-client" className="block w-full text-center border-2 border-white text-white px-6 py-3 rounded-md font-bold hover:bg-white hover:text-[#1B365D] transition">
              Open Referral Form
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ — ALL VISIBLE, NO ACCORDIONS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#1B365D] text-center mb-12">Common questions from parents</h2>
          <div className="space-y-8">
            {homeFaqs.map((faq, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold text-[#1B365D] mb-2">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                  {idx === 2 && (
                    <> Visit our <Link href="/fees" className="text-[#1B365D] underline font-semibold">fees and pricing page</Link> for current rates.</>
                  )}
                  {idx === 3 && (
                    <> Learn more about <Link href="/telehealth-speech-therapy-sydney-nsw" className="text-[#1B365D] underline font-semibold">telehealth speech therapy sessions</Link>.</>
                  )}
                  {idx === 4 && (
                    <> <Link href="/speech-pathologist-burwood-nsw" className="text-[#1B365D] underline font-semibold">Find your nearest service area</Link>.</>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: SERVICE AREA */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1B365D] mb-6">Areas we serve in Sydney</h2>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[#1B365D] font-medium">
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
              <span key={s.href} className="flex items-center gap-4">
                <Link href={s.href} className="hover:text-[#E8A84C]">{s.label}</Link>
                {idx < arr.length - 1 && <span className="text-gray-300">•</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Author attribution */}
      <div className="bg-gray-50 py-4 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            <Link href="/about" className="underline hover:text-[#1B365D]">Written by a Certified Practising Speech Pathologist</Link>
          </p>
        </div>
      </div>

      {/* SECTION 13: FINAL CTA BAND */}
      <section className="py-16 md:py-24 bg-[#E8A84C] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to help your child thrive?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free discovery call to talk about your child&apos;s needs — no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <a href="tel:0421608819" className="text-xl font-bold hover:underline">📞 {PHONE_DISPLAY}</a>
            <span className="hidden sm:inline text-white/50">|</span>
            <a href={`mailto:${EMAIL}`} className="text-xl font-bold hover:underline">✉️ {EMAIL}</a>
          </div>
          <Link href="/book" className="inline-block bg-[#1B365D] text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-blue-900 transition shadow-lg">
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </>
  );
}
