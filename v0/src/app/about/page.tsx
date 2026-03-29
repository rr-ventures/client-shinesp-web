import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Shine and Speak — Speech Pathologist Sydney | Shine and Speak",
  description: "Meet Shine and Speak, providing mobile & telehealth speech pathology in Sydney. Bilingual English & Mandarin. NDIS & Medicare registered.",
};

export default function AboutPage() {
  return (
    <article>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 border-b border-gray-200 text-sm">
        <div className="container mx-auto px-4 text-gray-500">
          <Link href="/" className="hover:text-brand-navy">Home</Link> &gt; 
          <span className="text-brand-navy ml-1">About</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        {/* H1 + Photo */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="w-full md:w-1/3">
            <Image 
              src="/shine-and-speak-logo-mark-transparent.png" 
              alt="Shine and Speak" 
              width={300} 
              height={300} 
              className="w-full h-auto bg-gray-50 rounded-2xl p-8 object-contain"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">About Shine and Speak</h1>
            <h2 className="text-2xl font-bold text-brand-navy mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We started Shine and Speak because we believe every person deserves access to high-quality, personalised speech therapy that makes a genuine difference in their everyday life — not just therapy for the sake of therapy.
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Our approach</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We take a client-centred, strengths-based approach. We start with what you or your child can already do, what matters to you, and what goals will make the biggest difference in daily life. We tailor every session to the individual — their interests, their strengths, and their real-world needs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We're big believers in collaboration. We work closely with families, teachers, support coordinators, and other professionals to make sure therapy is consistent and coordinated across all environments.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Qualifications</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Bachelor of Speech Pathology</li>
            <li>Certified Practising Member, Speech Pathology Australia (CPSP)</li>
            <li>NDIS Registered Provider</li>
            <li>Medicare Registered Provider</li>
            <li>Evidence-based training certifications (e.g., Hanen, Sounds Write, Lidcombe Program)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Bilingual practice</h2>
          <p className="text-gray-700 leading-relaxed">
            We provide speech therapy and assessments in English and Mandarin (普通话). Assessing a child in only one language can underestimate their true abilities. We ensure assessments are accurate, therapy is accessible, and communication with your family is clear. This is especially important for families who speak Mandarin at home but need therapy delivered in an English-speaking school environment.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">What we work with</h2>
          <p className="text-gray-700 leading-relaxed">
            Our team supports children and adults with a wide range of communication needs, including <Link href="/speech-therapy-autism-sydney-nsw" className="text-brand-navy underline">autism</Link>, <Link href="/speech-therapy-adhd-sydney-nsw" className="text-brand-navy underline">ADHD</Link>, <Link href="/speech-therapy-language-delay-sydney-nsw" className="text-brand-navy underline">language delay</Link>, <Link href="/speech-therapy-speech-sounds-sydney-nsw" className="text-brand-navy underline">speech sounds</Link>, <Link href="/speech-therapy-stuttering-sydney-nsw" className="text-brand-navy underline">stuttering</Link>, and <Link href="/speech-therapy-literacy-sydney-nsw" className="text-brand-navy underline">literacy</Link>.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Shine and Speak was founded on the principle that communication is a fundamental human right. Our team is dedicated to providing warm, professional, and effective speech pathology services to the Inner West Sydney community and beyond via telehealth.
          </p>
        </section>

        {/* Social Media Links */}
        <div className="mb-12">
          <a href="#" className="text-brand-navy font-bold hover:text-brand-gold transition">Connect with us on LinkedIn →</a>
        </div>

        {/* Author attribution */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <p className="text-gray-600 italic">
            Written by a Certified Practising Speech Pathologist.
          </p>
        </div>
      </div>

      {/* CTA Band */}
      <section className="py-16 bg-brand-gold text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to help your child thrive?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free discovery call to talk about your child's needs — no obligation, no pressure.
          </p>
          <Link href="/book" className="inline-block bg-brand-navy text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-opacity-90 transition shadow-lg">
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </article>
  );
}
