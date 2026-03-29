import Link from "next/link";

export const metadata = {
  title: "About Shine Teoh — Speech Pathologist Sydney | Shine and Speak",
  description: "Meet Shine Teoh, Certified Practising Speech Pathologist. Mobile & telehealth in Sydney. Bilingual English & Mandarin. NDIS & Medicare registered.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Shine Teoh",
            "jobTitle": "Certified Practising Speech Pathologist",
            "worksFor": {
              "@type": "Organization",
              "name": "Shine and Speak"
            }
          })
        }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="text-sm text-gray-500 mb-8">
          <Link href="/">Home</Link> &gt; About
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <h1 className="text-4xl font-bold text-navy-blue mb-6">Meet Shine Teoh</h1>
            <div className="bg-gray-200 aspect-square rounded-2xl flex items-center justify-center text-gray-500 text-center p-8 shadow-xl mb-8 md:hidden">
              [Placeholder: Professional headshot, warm and approachable]
            </div>
            
            <h2 className="text-3xl font-bold text-navy-blue mb-4">About me</h2>
            <p className="text-gray-700 mb-6">
              I'm Shine, a Certified Practising Speech Pathologist. I started Shine and Speak because I believe every person deserves access to high-quality, personalised speech therapy that makes a genuine difference in their everyday life — not just therapy for the sake of therapy.
            </p>

            <h2 className="text-3xl font-bold text-navy-blue mb-4">My approach</h2>
            <p className="text-gray-700 mb-4">
              I take a client-centred, strengths-based approach. I start with what you or your child can already do, what matters to you, and what goals will make the biggest difference in daily life. I tailor every session to the individual — their interests, their strengths, and their real-world needs.
            </p>
            <p className="text-gray-700 mb-8">
              I'm a big believer in collaboration. I work closely with families, teachers, support coordinators, and other professionals to make sure therapy is consistent and coordinated across all environments.
            </p>

            <h2 className="text-3xl font-bold text-navy-blue mb-4">Qualifications</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
              <li>Bachelor of Speech Pathology [Placeholder: University]</li>
              <li>Certified Practising Member, Speech Pathology Australia (CPSP)</li>
              <li>NDIS Registered Provider — [Placeholder: Provider number]</li>
              <li>Medicare Registered Provider</li>
              <li>[Placeholder: Training certifications e.g. Hanen, Sounds Write]</li>
            </ul>

            <h2 className="text-3xl font-bold text-navy-blue mb-4">Bilingual practice</h2>
            <p className="text-gray-700 mb-8">
              I provide speech therapy and assessments in English and Mandarin (普通话). Assessing a child in only one language can underestimate their true abilities. I ensure assessments are accurate, therapy is accessible, and communication with your family is clear. This is especially important for families who speak Mandarin at home but need therapy delivered in an English-speaking school environment.
            </p>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-gray-200 aspect-square rounded-2xl flex items-center justify-center text-gray-500 text-center p-8 shadow-xl sticky top-24">
              [Placeholder: Professional headshot, warm and approachable]
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-navy-blue mb-4">What I work with</h2>
          <div className="flex flex-wrap gap-4 text-gray-700">
            <Link href="/speech-therapy-autism-sydney-nsw" className="underline hover:text-golden-amber">Autism & ASD</Link> &middot; 
            <Link href="/speech-therapy-adhd-sydney-nsw" className="underline hover:text-golden-amber">ADHD</Link> &middot; 
            <Link href="/speech-therapy-language-delay-sydney-nsw" className="underline hover:text-golden-amber">Language Delay</Link> &middot; 
            <Link href="/speech-therapy-speech-sounds-sydney-nsw" className="underline hover:text-golden-amber">Speech Sounds</Link> &middot; 
            <Link href="/speech-therapy-stuttering-sydney-nsw" className="underline hover:text-golden-amber">Stuttering</Link> &middot; 
            <Link href="/speech-therapy-literacy-sydney-nsw" className="underline hover:text-golden-amber">Literacy</Link>
          </div>
        </div>

        <div className="mb-12">
          <div className="bg-gray-200 aspect-video md:aspect-[21/9] rounded-2xl flex items-center justify-center text-gray-500 text-center p-8 shadow-xl">
            [Placeholder: Embed therapist intro video. 1-2 minutes, filmed professionally.]
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-navy-blue mb-4">Personal background</h2>
          <p className="text-gray-700">
            [Placeholder: Brief personal background — where she grew up, what drew her to speech pathology, something personal/human that builds connection. 2-3 sentences.]
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-navy-blue mb-4">Connect with me</h2>
          <a href="#" className="text-golden-amber font-bold hover:underline">LinkedIn Profile</a>
        </div>
      </div>

      <section className="py-20 bg-golden-amber text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to help your child thrive?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free discovery call to talk about your child's needs.
          </p>
          <Link href="/contact" className="inline-block bg-navy-blue text-white px-10 py-4 rounded-md font-bold text-xl hover:bg-blue-900 transition shadow-xl">
            Book a Free Discovery Call →
          </Link>
        </div>
      </section>
    </main>
  );
}
