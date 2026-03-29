import Link from 'next/link';

export const metadata = {
  title: 'Speech Pathologist Inner West Sydney | Shine and Speak',
  description: 'Mobile speech pathologist in Inner West Sydney, NSW. Home visits, school visits & telehealth. NDIS, Medicare & private pay. Bilingual English & Mandarin.',
  alternates: {
    canonical: 'https://shineandspeak.com.au/speech-pathologist-inner-west-sydney-nsw',
  },
  openGraph: {
    title: 'Speech Pathologist Inner West Sydney | Shine and Speak',
    description: 'Mobile speech pathologist in Inner West Sydney, NSW. Home visits, school visits & telehealth. NDIS, Medicare & private pay. Bilingual English & Mandarin.',
    url: 'https://shineandspeak.com.au/speech-pathologist-inner-west-sydney-nsw',
    type: 'website',
    images: [{ url: 'https://shineandspeak.com.au/og-image.png', width: 1200, height: 630, alt: 'Speech Pathologist Inner West Sydney NSW' }],
  },
};

export default function PlaceholderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Speech Pathologist in Inner West Sydney",
            "url": "https://shineandspeak.com.au/speech-pathologist-inner-west-sydney-nsw"
          })
        }}
      />

      <div className="bg-accent py-4 border-b border-gray-200">
        <div className="container-custom">
          <nav className="text-sm text-gray-600 flex items-center gap-2">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>&gt;</span>
            <span className="hover:text-primary cursor-pointer">Areas</span>
            <span>&gt;</span>
            <span className="text-primary font-medium">Speech Pathologist in Inner West Sydney</span>
          </nav>
        </div>
      </div>

      <section className="bg-accent pt-12 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Speech Pathologist in Inner West Sydney
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white min-h-[40vh]">
        <div className="container-custom">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-400 mb-4">Content coming soon</h2>
            <p className="text-gray-500 mb-8">This page is currently under development.</p>
            <Link href="/" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
