import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="bg-brand-light-blue py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 leading-tight">
              Helping your child communicate with confidence
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Personalised speech therapy — delivered to your home, school, or online. Available in English and Mandarin (普通话). Serving Inner West Sydney and surrounds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="bg-brand-gold text-white text-center px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-600 transition">
                Book a Free Discovery Call
              </Link>
              <a href="#services" className="border-2 border-brand-navy text-brand-navy text-center px-8 py-4 rounded-md font-bold text-lg hover:bg-brand-navy hover:text-white transition">
                Learn More ↓
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-brand-navy">
              <span>✓ CPSP Certified</span>
              <span>✓ NDIS Registered</span>
              <span>✓ Medicare Provider</span>
            </div>
          </div>
          <div className="flex justify-center">
            <Image 
              src="/shine-and-speak-logo-mark-transparent.png" 
              alt="Shine and Speak Brand Mark" 
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
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          <div className="text-lg font-bold text-gray-500">Speech Pathology Australia</div>
          <div className="text-lg font-bold text-gray-500">NDIS Registered Provider</div>
          <div className="text-lg font-bold text-gray-500">Medicare Provider</div>
        </div>
      </section>

      {/* SECTION 3: CONDITION CARDS */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">How I can help your child</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Autism & ASD", desc: "Supporting children on the autism spectrum with communication, social skills, and language development.", link: "/speech-therapy-autism-sydney-nsw" },
              { title: "ADHD & Attention", desc: "Helping children with ADHD develop focus, listening skills, and social communication strategies.", link: "/speech-therapy-adhd-sydney-nsw" },
              { title: "Language Delay", desc: "Building receptive and expressive language skills so your child can understand and be understood.", link: "/speech-therapy-language-delay-sydney-nsw" },
              { title: "Speech Sounds", desc: "Helping children pronounce sounds clearly so they can be understood by family, friends, and teachers.", link: "/speech-therapy-speech-sounds-sydney-nsw" },
              { title: "Stuttering & Fluency", desc: "Evidence-based support for children and adults experiencing stuttering or other fluency difficulties.", link: "/speech-therapy-stuttering-sydney-nsw" },
              { title: "Literacy & Reading", desc: "Supporting reading, writing, and spelling development for children who are finding literacy challenging.", link: "/speech-therapy-literacy-sydney-nsw" }
            ].map((service, idx) => (
              <Link href={service.link} key={idx} className="block p-8 border border-gray-200 rounded-xl hover:shadow-lg transition group">
                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <span className="text-brand-gold font-bold flex items-center">Learn more <span className="ml-2">→</span></span>
              </Link>
            ))}
          </div>
          <p className="mt-12 text-center text-gray-600 max-w-3xl mx-auto">
            I also support children and adults with developmental delay, intellectual disability, social communication difficulties, AAC and multimodal communication, and adults recovering from stroke, brain injury, and neurological conditions. <Link href="/paediatric-speech-therapy-sydney-nsw" className="text-brand-navy font-bold underline">Explore all services</Link> or learn about <Link href="/adult-speech-therapy-sydney-nsw" className="text-brand-navy font-bold underline">adult speech therapy options</Link>.
          </p>
        </div>
      </section>

      {/* SECTION 4: BILINGUAL CALLOUT */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="text-brand-gold font-bold mb-2">我們提供中文語言治療服務</div>
          <h2 className="text-3xl font-bold mb-6">Speech therapy in English and Mandarin</h2>
          <p className="text-lg mb-8 text-gray-200">
            I provide bilingual speech pathology services in English and Mandarin. This means more accurate assessment of your child's true language abilities, clearer communication with your family, and therapy that respects your cultural and linguistic background.
          </p>
          <Link href="/zh" className="inline-block bg-brand-gold text-white px-8 py-3 rounded-md font-bold hover:bg-yellow-600 transition">
            了解更多 / Learn More in Chinese →
          </Link>
        </div>
      </section>

      {/* SECTION 5: THE MOBILE ADVANTAGE */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-6">Therapy where your child is most comfortable</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Research shows that children learn communication skills best in their everyday environments. That's why I come to you — whether that's your home, your child's school, kindergarten, or daycare.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">Home sessions</h3>
              <p className="text-gray-600">Therapy in the comfort of your own home. I bring everything needed. No travel stress for your family.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🏫</div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">School & kindergarten visits</h3>
              <p className="text-gray-600">Working with your child in their learning environment, with the option to coordinate directly with their teachers.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">Telehealth across Australia</h3>
              <p className="text-gray-600">Flexible <Link href="/telehealth-speech-therapy-sydney-nsw" className="underline text-brand-navy">online sessions</Link> from anywhere. Ideal for families in regional areas or busy schedules.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">Inner West Sydney & surrounds</h3>
              <p className="text-gray-600">I travel within 30 minutes of Arncliffe, including <Link href="/speech-pathologist-burwood-nsw" className="underline text-brand-navy">Burwood</Link>, Hurstville, and surrounding suburbs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: DIFFERENTIATORS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">Why families choose Shine and Speak</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold text-brand-navy mb-3">We come to you</h3>
              <p className="text-gray-600 text-sm">No clinic visits needed. I travel to your home, school, or daycare — wherever your child is most comfortable.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-navy mb-3">Bilingual — English & Mandarin</h3>
              <p className="text-gray-600 text-sm">I provide speech therapy and assessments in both English and Mandarin, ensuring accurate evaluation.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-navy mb-3">NDIS, Medicare & private</h3>
              <p className="text-gray-600 text-sm">Registered NDIS provider, Medicare provider, and private clients. Learn about <Link href="/ndis-speech-therapy-sydney-nsw" className="underline">funding options for speech therapy</Link>.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-navy mb-3">Evidence-based, goal-focused</h3>
              <p className="text-gray-600 text-sm">Every therapy plan is grounded in current evidence and focused on practical goals that make a real difference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: HOW IT WORKS */}
      <section className="py-16 md:py-24 bg-brand-light-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">Getting started is simple</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl">
              <div className="text-brand-gold font-bold text-xl mb-2">Step 1</div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Book a free call</h3>
              <p className="text-gray-600">We'll have a quick chat about your child's needs, answer your questions, and work out whether I'm the right fit.</p>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <div className="text-brand-gold font-bold text-xl mb-2">Step 2</div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Assessment</h3>
              <p className="text-gray-600">I'll complete a thorough assessment to understand strengths, challenges, and goals. You'll receive a detailed report.</p>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <div className="text-brand-gold font-bold text-xl mb-2">Step 3</div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Therapy plan</h3>
              <p className="text-gray-600">You'll receive a personalised therapy plan focused on practical, real-life progress.</p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/book" className="inline-block bg-brand-gold text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-600 transition">
              Book Your Free Discovery Call →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: OUR APPROACH (Privacy Variant) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image 
              src="/shine-and-speak-logo-mark-transparent.png" 
              alt="Shine and Speak Approach" 
              width={500} 
              height={500} 
              className="w-full max-w-md mx-auto object-contain bg-gray-50 rounded-2xl p-8"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Our Approach</h2>
            <p className="text-gray-700 mb-4">
              At Shine and Speak, we are passionate about providing high-quality, personalised speech therapy that makes a genuine difference in everyday life.
            </p>
            <p className="text-gray-700 mb-6">
              We specialise in working with children and adults with a wide range of communication needs. We believe therapy should be practical, collaborative, and built around your goals — not a one-size-fits-all approach.
            </p>
            <ul className="space-y-2 mb-8 text-brand-navy font-semibold">
              <li>✓ Certified Practising Member, Speech Pathology Australia (CPSP)</li>
              <li>✓ NDIS Registered Provider</li>
              <li>✓ Medicare Registered Provider</li>
              <li>✓ Evidence-based training certifications</li>
            </ul>
            <Link href="/about" className="text-brand-navy font-bold underline hover:text-brand-gold transition">
              Read more about our approach and qualifications →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9: SOCIAL PROOF */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-8">What families say</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <p className="italic text-gray-600 mb-4">"Review coming soon — Shine and Speak is a new practice. In the meantime, here are the credentials and training that back our work."</p>
            <div className="flex justify-center gap-4 text-sm font-bold text-brand-navy">
              <span>CPSP Certified</span>
              <span>•</span>
              <span>NDIS Registered</span>
            </div>
            {/* PASTE GOOGLE REVIEWS EMBED CODE HERE */}
          </div>
        </div>
      </section>

      {/* SECTION 10: FOR SUPPORT COORDINATORS */}
      <section className="py-16 md:py-24 bg-brand-navy text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Are you a Support Coordinator?</h2>
            <p className="mb-6 text-gray-200">
              We work closely with NDIS support coordinators to provide timely, high-quality speech therapy with clear communication and detailed reporting. We understand the referral process and make it easy for you.
            </p>
            <ul className="space-y-3 mb-8 text-gray-200">
              <li>• Fast response to referrals — aiming for 24 hours</li>
              <li>• Detailed <Link href="/speech-therapy-reports-sydney-nsw" className="underline hover:text-white">progress reports and session summaries</Link></li>
              <li>• Flexible scheduling — mobile and telehealth</li>
              <li>• Support for plan reviews with clear recommendations</li>
              <li>• All NDIS management types accepted</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/refer-a-client" className="bg-brand-gold text-white text-center px-6 py-3 rounded-md font-bold hover:bg-yellow-600 transition">
                Refer a Client →
              </Link>
            </div>
          </div>
          <div className="bg-white/10 p-8 rounded-xl border border-white/20">
            <h3 className="text-xl font-bold mb-4">Quick Referral Form</h3>
            <p className="text-sm text-gray-300 mb-6">Submit a secure referral online and we'll be in touch within 24 hours.</p>
            <Link href="/refer-a-client" className="block w-full text-center border-2 border-white text-white px-6 py-3 rounded-md font-bold hover:bg-white hover:text-brand-navy transition">
              Open Referral Form
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">Common questions from parents</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">How do I know if my child needs speech therapy?</h3>
              <p className="text-gray-700">If you're concerned about how your child communicates — whether it's how they pronounce words, how much they understand, how they put sentences together, or how they interact with others — it's worth getting an assessment. I offer a free discovery call where we can talk through your concerns and I can help you decide whether a full assessment would be helpful.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">What does a typical session look like?</h3>
              <p className="text-gray-700">Sessions are usually 45–60 minutes and take place at your home, your child's school, or online. I use play-based, evidence-based activities tailored to your child's interests and goals. I also spend time coaching you on strategies you can use between sessions so progress doesn't stop when I leave.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">How much does speech therapy cost?</h3>
              <p className="text-gray-700">Fees depend on the type of session and funding source. I'm a registered NDIS provider and Medicare provider, and I also see private clients. Visit my <Link href="/fees" className="text-brand-navy underline font-semibold">fees and pricing page</Link> for current rates and information about what your fund covers.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">Do you offer telehealth?</h3>
              <p className="text-gray-700">Yes. I provide telehealth sessions to clients across Australia. Telehealth works well for many children and adults, and I can deliver sessions to your home, your child's school, or any setting with a stable internet connection. Learn more about <Link href="/telehealth-speech-therapy-sydney-nsw" className="text-brand-navy underline font-semibold">telehealth speech therapy</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">What areas do you travel to?</h3>
              <p className="text-gray-700">I travel within a 30-minute radius of Arncliffe for ongoing therapy — including Burwood, Hurstville, Strathfield, Canterbury-Bankstown, Campsie, Rockdale, Kogarah, and Marrickville. I also travel across greater Sydney for one-off assessments and report writing. <Link href="/speech-pathologist-burwood-nsw" className="text-brand-navy underline font-semibold">Find your nearest service area</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">How do I get started?</h3>
              <p className="text-gray-700">Book a free discovery call. We'll chat about your child's needs and I'll explain how the process works. You can also call me directly or refer a client if you're a support coordinator.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: SERVICE AREA */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Areas I serve in Sydney</h2>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-brand-navy font-medium">
            <Link href="/speech-pathologist-arncliffe-nsw" className="hover:text-brand-gold">Arncliffe</Link>
            <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-burwood-nsw" className="hover:text-brand-gold">Burwood</Link>
            <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-hurstville-nsw" className="hover:text-brand-gold">Hurstville</Link>
            <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-strathfield-nsw" className="hover:text-brand-gold">Strathfield</Link>
            <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-canterbury-bankstown-nsw" className="hover:text-brand-gold">Canterbury-Bankstown</Link>
            <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-campsie-nsw" className="hover:text-brand-gold">Campsie</Link>
            <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-rockdale-nsw" className="hover:text-brand-gold">Rockdale</Link>
            <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-kogarah-nsw" className="hover:text-brand-gold">Kogarah</Link>
            <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-marrickville-nsw" className="hover:text-brand-gold">Marrickville</Link>
            <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-inner-west-sydney-nsw" className="hover:text-brand-gold">Inner West Sydney</Link>
            <span className="text-gray-300">•</span>
            <Link href="/speech-pathologist-st-george-nsw" className="hover:text-brand-gold">St George</Link>
            <span className="text-gray-300">•</span>
            <Link href="/telehealth-speech-therapy-sydney-nsw" className="hover:text-brand-gold">Telehealth Australia-wide</Link>
          </div>
        </div>
      </section>

      {/* SECTION 13: FINAL CTA BAND */}
      <section className="py-16 md:py-24 bg-brand-gold text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to help your child thrive?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free discovery call to talk about your child's needs — no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <a href="tel:1300000000" className="text-xl font-bold hover:underline">📞 1300 000 000</a>
            <span className="hidden sm:inline text-white/50">|</span>
            <a href="mailto:hello@shineandspeak.com.au" className="text-xl font-bold hover:underline">✉️ hello@shineandspeak.com.au</a>
          </div>
          <Link href="/book" className="inline-block bg-brand-navy text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-opacity-90 transition shadow-lg">
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </>
  );
}
