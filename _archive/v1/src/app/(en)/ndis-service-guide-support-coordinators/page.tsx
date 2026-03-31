import Link from 'next/link';

export const metadata = {
  title: 'NDIS Service Guide for Support Coordinators | Shine and Speak',
  description: 'NDIS service guide for support coordinators. Fast referral response, detailed reporting, all management types accepted. Mobile & telehealth speech therapy in Sydney.',
  alternates: {
    canonical: 'https://shineandspeak.com.au/ndis-service-guide-support-coordinators',
  },
  openGraph: {
    title: 'NDIS Service Guide for Support Coordinators | Shine and Speak',
    description: 'NDIS service guide for support coordinators. Fast referral response, detailed reporting, all management types accepted. Mobile & telehealth speech therapy in Sydney.',
    url: 'https://shineandspeak.com.au/ndis-service-guide-support-coordinators',
    type: 'website',
    images: [{ url: 'https://shineandspeak.com.au/og-image.png', width: 1200, height: 630, alt: 'NDIS Service Guide for Support Coordinators' }],
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
            "name": "NDIS Service Guide for Support Coordinators",
            "provider": {
                        "@type": "Organization",
                        "name": "Shine and Speak"
            },
            "description": "NDIS service guide for support coordinators. Fast referral response, detailed reporting, all management types accepted. Mobile & telehealth speech therapy in Sydney.",
            "areaServed": {
                        "@type": "GeoCircle",
                        "geoMidpoint": {
                                    "@type": "GeoCoordinates",
                                    "latitude": -33.9369,
                                    "longitude": 151.1539
                        },
                        "geoRadius": "30000"
            },
            "url": "https://shineandspeak.com.au/ndis-service-guide-support-coordinators"
          })
        }}
      />

      <div className="bg-accent py-4 border-b border-gray-200">
        <div className="container-custom">
          <nav className="text-sm text-gray-600 flex items-center gap-2">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>&gt;</span>
            <span className="hover:text-primary cursor-pointer">Home</span>
            <span>&gt;</span>
            <span className="text-primary font-medium">For Support Coordinators</span>
          </nav>
        </div>
      </div>

      <section className="bg-accent pt-12 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              For Support Coordinators
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
