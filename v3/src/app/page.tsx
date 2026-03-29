import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Shine and Speak",
            "image": "https://shineandspeak.com.au/shine-and-speak-logo-horizontal-transparent.png",
            "@id": "",
            "url": "https://shineandspeak.com.au",
            "telephone": "+61-000-000-000",
            "areaServed": [
              "Arncliffe", "Burwood", "Hurstville", "Strathfield", "Canterbury-Bankstown", "Inner West Sydney"
            ],
            "medicalSpecialty": "Speech Pathology"
          })
        }}
      />
      
      {/* Section 1: HERO */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-navy-blue mb-6 leading-tight">
              Helping your child communicate with confidence
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Personalised speech therapy — delivered to your home, school, or online. Available in English and Mandarin (普通话). Serving Inner West Sydney and surrounds.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/contact" className="bg-golden-amber text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-600 transition shadow-lg">
                Book a Free Discovery Call
              </Link>
              <a href="#more" className="border-2 border-navy-blue text-navy-blue px-8 py-4 rounded-md font-bold text-lg hover:bg-navy-blue hover:text-white transition">
                Learn More ↓
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-navy-blue">
              <span>✓ CPSP Certified</span>
              <span>✓ NDIS Registered</span>
              <span>✓ Medicare Provider</span>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500 text-center p-8">
              {/* REPLACE: Professional photo of therapist working with a child. */}
              [Placeholder: Professional photo of Shine Teoh working with a child]
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: TRUST LOGO BAR */}
      <section id="more" className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-12 items-center opacity-70">
          <div className="font-bold text-xl text-navy-blue">Speech Pathology Australia</div>
          <div className="font-bold text-xl text-navy-blue">NDIS Registered</div>
          <div className="font-bold text-xl text-navy-blue">Medicare Provider</div>
        </div>
      </section>

      {/* Section 3: DIFFERENTIATORS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy-blue text-center mb-12">Why families choose Shine and Speak</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">We come to you</h3>
              <p className="text-gray-700">No clinic visits needed. I travel to your home, school, or daycare — wherever your child is most comfortable.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">🌏</div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Bilingual</h3>
              <p className="text-gray-700">I provide speech therapy and assessments in both English and Mandarin, ensuring accurate evaluation.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">NDIS & Medicare</h3>
              <p className="text-gray-700">Registered NDIS provider, Medicare provider, and private clients. <Link href="/ndis-speech-therapy-sydney-nsw" className="text-golden-amber font-semibold hover:underline">Learn about funding options</Link>.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Evidence-based</h3>
              <p className="text-gray-700">Every therapy plan is grounded in current evidence and focused on practical goals that make a real difference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: MOBILE ADVANTAGE */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Therapy where your child is most comfortable</h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12 text-blue-100">
            Research shows that children learn communication skills best in their everyday environments. That's why I come to you.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-golden-amber">🏠 Home sessions</h3>
              <p>Therapy in the comfort of your own home. I bring everything needed. No travel stress for your family.</p>
            </div>
            <div className="bg-blue-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-golden-amber">🏫 School & kindergarten</h3>
              <p>Working with your child in their learning environment, coordinating directly with their teachers.</p>
            </div>
            <div className="bg-blue-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-golden-amber">💻 Telehealth</h3>
              <p><Link href="/telehealth-speech-therapy-sydney-nsw" className="underline hover:text-white">Flexible online sessions</Link> from anywhere. Ideal for regional families or busy schedules.</p>
            </div>
            <div className="bg-blue-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-golden-amber">📍 Inner West Sydney</h3>
              <p>I travel within 30 minutes of Arncliffe, including <Link href="/speech-pathologist-burwood-nsw" className="underline hover:text-white">Burwood</Link> and surrounds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: CONDITION CARDS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-navy-blue text-center mb-12">How I can help your child</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Link href="/speech-therapy-autism-sydney-nsw" className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition group">
              <h3 className="text-2xl font-bold text-navy-blue mb-4 group-hover:text-golden-amber transition">Autism & ASD</h3>
              <p className="text-gray-700">Supporting children on the autism spectrum with communication, social skills, and language development.</p>
            </Link>
            <Link href="/speech-therapy-adhd-sydney-nsw" className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition group">
              <h3 className="text-2xl font-bold text-navy-blue mb-4 group-hover:text-golden-amber transition">ADHD & Attention</h3>
              <p className="text-gray-700">Helping children with ADHD develop focus, listening skills, and social communication strategies.</p>
            </Link>
            <Link href="/speech-therapy-language-delay-sydney-nsw" className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition group">
              <h3 className="text-2xl font-bold text-navy-blue mb-4 group-hover:text-golden-amber transition">Language Delay</h3>
              <p className="text-gray-700">Building receptive and expressive language skills so your child can understand and be understood.</p>
            </Link>
            <Link href="/speech-therapy-speech-sounds-sydney-nsw" className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition group">
              <h3 className="text-2xl font-bold text-navy-blue mb-4 group-hover:text-golden-amber transition">Speech Sounds</h3>
              <p className="text-gray-700">Helping children pronounce sounds clearly so they can be understood by family, friends, and teachers.</p>
            </Link>
            <Link href="/speech-therapy-stuttering-sydney-nsw" className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition group">
              <h3 className="text-2xl font-bold text-navy-blue mb-4 group-hover:text-golden-amber transition">Stuttering & Fluency</h3>
              <p className="text-gray-700">Evidence-based support for children and adults experiencing stuttering or other fluency difficulties.</p>
            </Link>
            <Link href="/speech-therapy-literacy-sydney-nsw" className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition group">
              <h3 className="text-2xl font-bold text-navy-blue mb-4 group-hover:text-golden-amber transition">Literacy & Reading</h3>
              <p className="text-gray-700">Supporting reading, writing, and spelling development for children who are finding literacy challenging.</p>
            </Link>
          </div>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            I also support children and adults with developmental delay, intellectual disability, social communication difficulties, AAC and multimodal communication, and adults recovering from stroke, brain injury, and neurological conditions. <Link href="/paediatric-speech-therapy-sydney-nsw" className="text-navy-blue font-bold hover:underline">Explore all services</Link> or learn about <Link href="/adult-speech-therapy-sydney-nsw" className="text-navy-blue font-bold hover:underline">adult speech therapy options</Link>.
          </p>
        </div>
      </section>

      {/* Section 6: HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-navy-blue mb-12">Getting started is simple</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div>
              <div className="w-16 h-16 bg-golden-amber text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Book a free call</h3>
              <p className="text-gray-700">We'll have a quick chat about your child's needs, answer your questions, and work out whether I'm the right fit.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-golden-amber text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Assessment</h3>
              <p className="text-gray-700">I'll complete a thorough assessment to understand their strengths, challenges, and goals. You'll receive a detailed report.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-golden-amber text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Therapy plan</h3>
              <p className="text-gray-700">You'll receive a personalised therapy plan focused on practical, real-life progress.</p>
            </div>
          </div>
          <Link href="/contact" className="inline-block bg-golden-amber text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-600 transition shadow-lg">
            Book Your Free Discovery Call →
          </Link>
        </div>
      </section>

      {/* Section 7: BILINGUAL CALLOUT */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="text-golden-amber font-bold mb-2">我們提供中文語言治療服務</div>
          <h2 className="text-4xl font-bold text-navy-blue mb-6">Speech therapy in English and Mandarin</h2>
          <p className="text-lg text-gray-700 mb-8">
            I provide bilingual speech pathology services in English and Mandarin. This means more accurate assessment of your child's true language abilities, clearer communication with your family, and therapy that respects your cultural and linguistic background.
          </p>
          <Link href="/zh" className="inline-block border-2 border-navy-blue text-navy-blue px-8 py-3 rounded-md font-bold hover:bg-navy-blue hover:text-white transition">
            了解更多 / Learn More in Chinese →
          </Link>
        </div>
      </section>

      {/* Section 8: MEET THE THERAPIST */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-navy-blue mb-6">Meet Shine</h2>
            <p className="text-lg text-gray-700 mb-4">
              Hi, I'm Shine — a Certified Practising Speech Pathologist. I'm passionate about providing high-quality, personalised speech therapy that makes a genuine difference in everyday life.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              I specialise in working with children and adults with a wide range of communication needs. I speak English and Mandarin, and I'm committed to providing culturally responsive services for diverse families.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <ul className="space-y-2 text-navy-blue font-semibold">
                <li>✓ Bachelor of Speech Pathology</li>
                <li>✓ Certified Practising Member, Speech Pathology Australia (CPSP)</li>
                <li>✓ NDIS Registered Provider</li>
                <li>✓ Medicare Registered Provider</li>
              </ul>
            </div>
            <Link href="/about" className="text-golden-amber font-bold hover:underline text-lg">
              Read more about my approach and qualifications →
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <div className="bg-gray-200 aspect-square rounded-2xl flex items-center justify-center text-gray-500 text-center p-8 shadow-xl">
              [Placeholder: Professional headshot of Shine Teoh, warm and approachable]
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: SOCIAL PROOF */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-navy-blue mb-12">What families say</h2>
          {/* PASTE GOOGLE REVIEWS EMBED CODE HERE */}
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-xl shadow-md border border-gray-100">
            <p className="text-xl text-gray-600 italic">Review coming soon — Shine and Speak is a new practice. In the meantime, here are the credentials and training that back our work.</p>
          </div>
        </div>
      </section>

      {/* Section 10: FOR SUPPORT COORDINATORS */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Are you a Support Coordinator?</h2>
            <p className="text-lg text-blue-100 mb-6">
              I work closely with NDIS support coordinators to provide timely, high-quality speech therapy with clear communication and detailed reporting. I understand the referral process and I make it easy for you.
            </p>
            <ul className="space-y-4 mb-8 text-blue-50">
              <li>✓ Fast response to referrals — I aim to respond within 24 hours</li>
              <li>✓ Detailed <Link href="/speech-therapy-reports-sydney-nsw" className="underline hover:text-white">progress reports and session summaries</Link></li>
              <li>✓ Flexible scheduling — mobile and telehealth</li>
              <li>✓ Support for plan reviews with clear recommendations</li>
              <li>✓ All NDIS management types accepted</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/refer-a-client" className="bg-golden-amber text-white px-6 py-3 rounded-md font-bold hover:bg-yellow-600 transition">
                Refer a Client →
              </Link>
            </div>
          </div>
          <div className="bg-blue-800 p-8 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-golden-amber">Quick Referral</h3>
            <p className="mb-6">Submit a referral in under 2 minutes. I'll contact the family directly to arrange an initial consultation.</p>
            <Link href="/refer-a-client" className="block w-full text-center border-2 border-white text-white px-6 py-3 rounded-md font-bold hover:bg-white hover:text-navy-blue transition">
              Open Referral Form
            </Link>
          </div>
        </div>
      </section>

      {/* Section 11: FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-navy-blue text-center mb-12">Common questions from parents</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-navy-blue mb-2">How do I know if my child needs speech therapy?</h3>
              <p className="text-gray-700">If you're concerned about how your child communicates — whether it's how they pronounce words, how much they understand, how they put sentences together, or how they interact with others — it's worth getting an assessment. I offer a free discovery call where we can talk through your concerns and I can help you decide whether a full assessment would be helpful.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navy-blue mb-2">What does a typical session look like?</h3>
              <p className="text-gray-700">Sessions are usually 45–60 minutes and take place at your home, your child's school, or online. I use play-based, evidence-based activities tailored to your child's interests and goals. I also spend time coaching you on strategies you can use between sessions so progress doesn't stop when I leave.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navy-blue mb-2">How much does speech therapy cost?</h3>
              <p className="text-gray-700">Fees depend on the type of session and funding source. I'm a registered NDIS provider and Medicare provider, and I also see private clients. Visit my <Link href="/fees" className="text-navy-blue font-semibold hover:underline">fees and pricing page</Link> for current rates and information about what your fund covers.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navy-blue mb-2">Do you offer telehealth?</h3>
              <p className="text-gray-700">Yes. I provide telehealth sessions to clients across Australia. Telehealth works well for many children and adults, and I can deliver sessions to your home, your child's school, or any setting with a stable internet connection. Learn more about <Link href="/telehealth-speech-therapy-sydney-nsw" className="text-navy-blue font-semibold hover:underline">telehealth speech therapy</Link>.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navy-blue mb-2">What areas do you travel to?</h3>
              <p className="text-gray-700">I travel within a 30-minute radius of Arncliffe for ongoing therapy — including Burwood, Hurstville, Strathfield, Canterbury-Bankstown, Campsie, Rockdale, Kogarah, and Marrickville. I also travel across greater Sydney for one-off assessments and report writing. <Link href="/speech-pathologist-burwood-nsw" className="text-navy-blue font-semibold hover:underline">Find your nearest service area</Link>.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navy-blue mb-2">How do I get started?</h3>
              <p className="text-gray-700">Book a free discovery call. We'll chat about your child's needs and I'll explain how the process works. You can also call me directly or refer a client if you're a support coordinator.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: SERVICE AREA */}
      <section className="py-12 bg-gray-50 border-t border-gray-200 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-blue mb-6">Areas I serve in Sydney</h2>
          <div className="flex flex-wrap justify-center gap-2 text-gray-700">
            <Link href="/speech-pathologist-arncliffe-nsw" className="hover:text-golden-amber">Arncliffe</Link> &middot; 
            <Link href="/speech-pathologist-burwood-nsw" className="hover:text-golden-amber">Burwood</Link> &middot; 
            <Link href="/speech-pathologist-hurstville-nsw" className="hover:text-golden-amber">Hurstville</Link> &middot; 
            <Link href="/speech-pathologist-strathfield-nsw" className="hover:text-golden-amber">Strathfield</Link> &middot; 
            <Link href="/speech-pathologist-canterbury-bankstown-nsw" className="hover:text-golden-amber">Canterbury-Bankstown</Link> &middot; 
            <Link href="/speech-pathologist-campsie-nsw" className="hover:text-golden-amber">Campsie</Link> &middot; 
            <Link href="/speech-pathologist-rockdale-nsw" className="hover:text-golden-amber">Rockdale</Link> &middot; 
            <Link href="/speech-pathologist-kogarah-nsw" className="hover:text-golden-amber">Kogarah</Link> &middot; 
            <Link href="/speech-pathologist-marrickville-nsw" className="hover:text-golden-amber">Marrickville</Link> &middot; 
            <Link href="/speech-pathologist-inner-west-sydney-nsw" className="hover:text-golden-amber">Inner West Sydney</Link> &middot; 
            <Link href="/speech-pathologist-st-george-nsw" className="hover:text-golden-amber">St George</Link> &middot; 
            <Link href="/telehealth-speech-therapy-sydney-nsw" className="hover:text-golden-amber">Telehealth Australia-wide</Link>
          </div>
        </div>
      </section>

      {/* Section 13: FINAL CTA BAND */}
      <section className="py-20 bg-golden-amber text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to help your child thrive?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free discovery call to talk about your child's needs — no obligation, no pressure.
          </p>
          <div className="text-2xl font-bold mb-8">
            <a href="tel:+61000000000" className="hover:underline">📞 0400 000 000</a> &middot; <a href="mailto:hello@shineandspeak.com.au" className="hover:underline">✉️ hello@shineandspeak.com.au</a>
          </div>
          <Link href="/contact" className="inline-block bg-navy-blue text-white px-10 py-4 rounded-md font-bold text-xl hover:bg-blue-900 transition shadow-xl">
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </main>
  );
}
