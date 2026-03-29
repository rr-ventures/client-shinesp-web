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
            "email": "hello@shineandspeak.com.au",
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
      <section className="bg-accent pt-16 pb-24 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Helping your child communicate with confidence
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Personalised speech therapy — delivered to your home, school, or online. Available in English and Mandarin (普通话). Serving Inner West Sydney and surrounds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/book" className="bg-secondary text-primary-foreground px-8 py-4 rounded-full font-bold text-center hover:bg-opacity-90 transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Book a Free Discovery Call
                </Link>
                <a href="#differentiators" className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-center hover:bg-primary hover:text-primary-foreground transition-all text-lg flex items-center justify-center gap-2">
                  Learn More <ArrowRight size={20} />
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-primary bg-white/60 p-4 rounded-xl backdrop-blur-sm inline-flex">
                <span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-secondary" /> CPSP Certified</span>
                <span className="text-gray-300">•</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-secondary" /> NDIS Registered</span>
                <span className="text-gray-300">•</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-secondary" /> Medicare Provider</span>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              {/* <!-- REPLACE: Professional photo of Shine Teoh working with a child --> */}
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center bg-gradient-to-tr from-primary/20 to-secondary/20">
                <span className="text-primary font-bold bg-white/80 px-6 py-3 rounded-full backdrop-blur-sm">
                  [Therapist Photo Placeholder]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST LOGO BAR */}
      <section className="border-y border-gray-100 bg-white py-8">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-xl font-bold text-gray-400">Speech Pathology Australia</div>
            <div className="text-xl font-bold text-gray-400">I ❤ NDIS</div>
            <div className="text-xl font-bold text-gray-400">Medicare</div>
            <div className="text-xl font-bold text-gray-400">Hanen Certified</div>
          </div>
        </div>
      </section>

      {/* 3. DIFFERENTIATORS */}
      <section id="differentiators" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why families choose Shine and Speak</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-accent p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Car className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">We come to you</h3>
              <p className="text-gray-600">No clinic visits needed. I travel to your home, school, or daycare — wherever your child is most comfortable and most likely to thrive.</p>
            </div>
            <div className="bg-accent p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Languages className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Bilingual — English & Mandarin</h3>
              <p className="text-gray-600">I provide speech therapy and assessments in both English and Mandarin, ensuring accurate evaluation of your child's true language abilities.</p>
            </div>
            <div className="bg-accent p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <ShieldCheck className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">NDIS, Medicare & private</h3>
              <p className="text-gray-600">I'm a registered NDIS provider accepting all management types, a Medicare provider, and I also work with private clients. <Link href="/ndis-speech-therapy-sydney-nsw" className="text-secondary font-semibold hover:underline">Learn more about funding options</Link>.</p>
            </div>
            <div className="bg-accent p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <HeartHandshake className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Evidence-based, goal-focused</h3>
              <p className="text-gray-600">Every therapy plan is grounded in current evidence and focused on practical goals that make a real difference in your child's daily life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE MOBILE ADVANTAGE */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Therapy where your child is most comfortable</h2>
              <p className="text-gray-300 text-lg mb-6">
                Research shows that children learn communication skills best in their everyday environments. That's why I come to you — whether that's your home, your child's school, kindergarten, or daycare. Therapy happens where your child naturally communicates, which means skills transfer more easily into daily life.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                This is not a compromise — it's a clinical advantage. Children are more relaxed, more engaged, and more likely to use new skills when they're learning in familiar settings.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-2">
                  <Home className="text-secondary" /> Home sessions
                </h3>
                <p className="text-gray-300">Therapy in the comfort of your own home. I bring everything needed. No travel stress for your family.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-2">
                  <School className="text-secondary" /> School & kindergarten visits
                </h3>
                <p className="text-gray-300">Working with your child in their learning environment, with the option to coordinate directly with their teachers.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-2">
                  <Globe className="text-secondary" /> Telehealth across Australia
                </h3>
                <p className="text-gray-300"><Link href="/telehealth-speech-therapy-sydney-nsw" className="text-secondary hover:underline">Flexible online sessions</Link> from anywhere. Ideal for families in regional areas, or when in-person isn't possible.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-2">
                  <MapPin className="text-secondary" /> Inner West Sydney & surrounds
                </h3>
                <p className="text-gray-300">I travel within 30 minutes of Arncliffe, including <Link href="/speech-pathologist-burwood-nsw" className="text-secondary hover:underline">Burwood</Link>, Hurstville, Strathfield, and surrounding suburbs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONDITION CARDS */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">How I can help your child</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Link href="/speech-therapy-autism-sydney-nsw" className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full">
              <Brain className="text-secondary mb-4" size={32} />
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">Autism & ASD</h3>
              <p className="text-gray-600 mb-6 flex-grow">Supporting children on the autism spectrum with communication, social skills, and language development.</p>
              <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Learn more <ArrowRight size={18} /></span>
            </Link>
            
            <Link href="/speech-therapy-adhd-sydney-nsw" className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full">
              <Smile className="text-secondary mb-4" size={32} />
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">ADHD & Attention</h3>
              <p className="text-gray-600 mb-6 flex-grow">Helping children with ADHD develop focus, listening skills, and social communication strategies.</p>
              <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Learn more <ArrowRight size={18} /></span>
            </Link>
            
            <Link href="/speech-therapy-language-delay-sydney-nsw" className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full">
              <MessageCircle className="text-secondary mb-4" size={32} />
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">Language Delay</h3>
              <p className="text-gray-600 mb-6 flex-grow">Building receptive and expressive language skills so your child can understand and be understood.</p>
              <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Learn more <ArrowRight size={18} /></span>
            </Link>
            
            <Link href="/speech-therapy-speech-sounds-sydney-nsw" className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full">
              <Ear className="text-secondary mb-4" size={32} />
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">Speech Sounds</h3>
              <p className="text-gray-600 mb-6 flex-grow">Helping children pronounce sounds clearly so they can be understood by family, friends, and teachers.</p>
              <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Learn more <ArrowRight size={18} /></span>
            </Link>
            
            <Link href="/speech-therapy-stuttering-sydney-nsw" className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full">
              <MessageCircle className="text-secondary mb-4" size={32} />
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">Stuttering & Fluency</h3>
              <p className="text-gray-600 mb-6 flex-grow">Evidence-based support for children and adults experiencing stuttering or other fluency difficulties.</p>
              <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Learn more <ArrowRight size={18} /></span>
            </Link>
            
            <Link href="/speech-therapy-literacy-sydney-nsw" className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full">
              <BookOpen className="text-secondary mb-4" size={32} />
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">Literacy & Reading</h3>
              <p className="text-gray-600 mb-6 flex-grow">Supporting reading, writing, and spelling development for children who are finding literacy challenging.</p>
              <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Learn more <ArrowRight size={18} /></span>
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg">
              I also support children and adults with developmental delay, intellectual disability, social communication difficulties, AAC and multimodal communication, and adults recovering from stroke, brain injury, and neurological conditions. <Link href="/paediatric-speech-therapy-sydney-nsw" className="text-primary font-bold hover:text-secondary underline">Explore all services</Link> or learn about <Link href="/adult-speech-therapy-sydney-nsw" className="text-primary font-bold hover:text-secondary underline">adult speech therapy options</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Getting started is simple</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-1 bg-gray-100 -z-10"></div>
            
            <div className="text-center relative">
              <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg border-8 border-white">1</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Book a free call</h3>
              <p className="text-gray-600">We'll have a quick chat about your child's needs, answer your questions, and work out whether I'm the right fit. No obligation, no pressure.</p>
            </div>
            
            <div className="text-center relative">
              <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg border-8 border-white">2</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Assessment</h3>
              <p className="text-gray-600">I'll complete a thorough assessment — at your home, your child's school, or online — to understand their strengths, challenges, and goals. You'll receive a detailed report.</p>
            </div>
            
            <div className="text-center relative">
              <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg border-8 border-white">3</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Therapy plan</h3>
              <p className="text-gray-600">You'll receive a personalised therapy plan focused on practical, real-life progress. I'll work closely with you and your child's teachers to ensure consistency.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/book" className="inline-block bg-secondary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:-translate-y-1">
              Book Your Free Discovery Call →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. BILINGUAL CALLOUT */}
      <section className="bg-secondary/10 border-y border-secondary/20 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-secondary font-bold text-xl mb-2">我們提供中文語言治療服務</div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Speech therapy in English and Mandarin</h2>
            <p className="text-gray-700 text-lg mb-6">
              I provide bilingual speech pathology services in English and Mandarin. This means more accurate assessment of your child's true language abilities, clearer communication with your family, and therapy that respects your cultural and linguistic background.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              Assessing a child in only one language can underestimate their true abilities. Working with a bilingual therapist ensures nothing is missed.
            </p>
            <Link href="/zh" className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all">
              了解更多 / Learn More in Chinese →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. MEET THE THERAPIST */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Meet Shine Teoh</h2>
              <p className="text-gray-700 text-lg mb-4">
                Hi, I'm Shine — a Certified Practising Speech Pathologist. I'm passionate about providing high-quality, personalised speech therapy that makes a genuine difference in everyday life.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                I specialise in working with children and adults with a wide range of communication needs, including children on the autism spectrum, children with ADHD, developmental delay, language disorders, and literacy difficulties. I also support adults recovering from stroke, brain injury, and other neurological conditions.
              </p>
              <p className="text-gray-700 text-lg mb-8">
                I speak English and Mandarin, and I'm committed to providing culturally responsive services for diverse families. I believe therapy should be practical, collaborative, and built around your goals — not a one-size-fits-all approach.
              </p>
              
              <div className="bg-accent p-6 rounded-xl mb-8 border border-gray-100">
                <ul className="space-y-3 font-medium text-primary">
                  <li className="flex items-start gap-2"><CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} /> Bachelor of Speech Pathology</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} /> Certified Practising Member, Speech Pathology Australia (CPSP)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} /> NDIS Registered Provider</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} /> Medicare Registered Provider</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} /> Hanen Certified</li>
                </ul>
              </div>
              
              <Link href="/about" className="text-primary font-bold flex items-center gap-2 hover:text-secondary transition-colors text-lg">
                Read more about my approach and qualifications <ArrowRight size={20} />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                {/* <!-- REPLACE: Professional headshot of Shine Teoh, warm and approachable --> */}
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                  <span className="text-primary font-bold bg-white/80 px-6 py-3 rounded-full backdrop-blur-sm">
                    [Shine Teoh Headshot]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SOCIAL PROOF */}
      <section className="section-padding bg-accent">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">What families say</h2>
          </div>
          
          {/* <!-- PASTE GOOGLE REVIEWS EMBED CODE HERE --> */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex text-secondary mb-4">★★★★★</div>
              <p className="text-gray-600 italic mb-4">"Review coming soon — Shine and Speak is a new practice. In the meantime, here are the credentials and training that back our work."</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex text-secondary mb-4">★★★★★</div>
              <p className="text-gray-600 italic mb-4">"Review coming soon — Shine and Speak is a new practice. In the meantime, here are the credentials and training that back our work."</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex text-secondary mb-4">★★★★★</div>
              <p className="text-gray-600 italic mb-4">"Review coming soon — Shine and Speak is a new practice. In the meantime, here are the credentials and training that back our work."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOR SUPPORT COORDINATORS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-primary text-white rounded-3xl p-8 md:p-16 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Are you a Support Coordinator?</h2>
              <p className="text-lg text-gray-200 mb-8">
                I work closely with NDIS support coordinators to provide timely, high-quality speech therapy with clear communication and detailed reporting. I understand the referral process and I make it easy for you.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> Fast response to referrals — I aim to respond within 24 hours</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> Detailed <Link href="/speech-therapy-reports-sydney-nsw" className="underline hover:text-secondary">progress reports and session summaries</Link></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> Flexible scheduling — mobile and telehealth</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> Support for plan reviews with clear, specific recommendations</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> All NDIS management types accepted (self-managed, plan-managed, NDIA-managed)</li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="/refer-a-client" className="bg-secondary text-primary-foreground px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">
                  Refer a Client →
                </Link>
                <Link href="/ndis-service-guide-support-coordinators" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-primary transition-all">
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Common questions from parents</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-4">How do I know if my child needs speech therapy?</h3>
              <p className="text-gray-700 text-lg">If you're concerned about how your child communicates — whether it's how they pronounce words, how much they understand, how they put sentences together, or how they interact with others — it's worth getting an assessment. I offer a free discovery call where we can talk through your concerns and I can help you decide whether a full assessment would be helpful.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-4">What does a typical session look like?</h3>
              <p className="text-gray-700 text-lg">Sessions are usually 45–60 minutes and take place at your home, your child's school, or online. I use play-based, evidence-based activities tailored to your child's interests and goals. I also spend time coaching you on strategies you can use between sessions so progress doesn't stop when I leave.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-4">How much does speech therapy cost?</h3>
              <p className="text-gray-700 text-lg">Fees depend on the type of session and funding source. I'm a registered NDIS provider and Medicare provider, and I also see private clients. Visit my <Link href="/fees" className="text-primary font-bold underline hover:text-secondary">fees and pricing page</Link> for current rates and information about what your fund covers.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-4">Do you offer telehealth?</h3>
              <p className="text-gray-700 text-lg">Yes. I provide telehealth sessions to clients across Australia. Telehealth works well for many children and adults, and I can deliver sessions to your home, your child's school, or any setting with a stable internet connection. Learn more about <Link href="/telehealth-speech-therapy-sydney-nsw" className="text-primary font-bold underline hover:text-secondary">telehealth speech therapy</Link>.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-4">What areas do you travel to?</h3>
              <p className="text-gray-700 text-lg">I travel within a 30-minute radius of Arncliffe for ongoing therapy — including Burwood, Hurstville, Strathfield, Canterbury-Bankstown, Campsie, Rockdale, Kogarah, and Marrickville. I also travel across greater Sydney for one-off assessments and report writing. <Link href="/speech-pathologist-burwood-nsw" className="text-primary font-bold underline hover:text-secondary">Find your nearest service area</Link>.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-4">How do I get started?</h3>
              <p className="text-gray-700 text-lg">Book a free discovery call. We'll chat about your child's needs and I'll explain how the process works. You can also call me directly or refer a client if you're a support coordinator.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. SERVICE AREA */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-primary mb-6">Areas I serve in Sydney</h2>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-gray-600">
            <Link href="/speech-pathologist-arncliffe-nsw" className="hover:text-secondary hover:underline">Arncliffe</Link> <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-burwood-nsw" className="hover:text-secondary hover:underline">Burwood</Link> <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-hurstville-nsw" className="hover:text-secondary hover:underline">Hurstville</Link> <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-strathfield-nsw" className="hover:text-secondary hover:underline">Strathfield</Link> <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-canterbury-bankstown-nsw" className="hover:text-secondary hover:underline">Canterbury-Bankstown</Link> <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-campsie-nsw" className="hover:text-secondary hover:underline">Campsie</Link> <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-rockdale-nsw" className="hover:text-secondary hover:underline">Rockdale</Link> <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-kogarah-nsw" className="hover:text-secondary hover:underline">Kogarah</Link> <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-marrickville-nsw" className="hover:text-secondary hover:underline">Marrickville</Link> <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-inner-west-sydney-nsw" className="hover:text-secondary hover:underline">Inner West Sydney</Link> <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-st-george-nsw" className="hover:text-secondary hover:underline">St George</Link> <span className="text-gray-300">•</span>
            <Link href="/telehealth-speech-therapy-sydney-nsw" className="hover:text-secondary hover:underline">Telehealth Australia-wide</Link>
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA BAND */}
      <section className="bg-secondary py-16 text-primary-foreground text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Ready to help your child thrive?</h2>
          <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto font-medium">
            Book a free discovery call to talk about your child's needs — no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8 text-primary font-bold text-lg">
            <a href="tel:+61400000000" className="flex items-center gap-2 hover:opacity-80">📞 0400 000 000</a>
            <span className="hidden sm:block opacity-50">•</span>
            <a href="mailto:hello@shineandspeak.com.au" className="flex items-center gap-2 hover:opacity-80">✉️ hello@shineandspeak.com.au</a>
          </div>
          <Link href="/book" className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:-translate-y-1">
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </>
  );
}
