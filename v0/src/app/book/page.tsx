import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ParentEnquiryForm from '@/components/ParentEnquiryForm';
import { breadcrumbSchema, SITE_URL, PHONE_DISPLAY } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Book a Free Discovery Call',
  description:
    'Book a free discovery call with Shine and Speak — mobile speech pathologist in Sydney. No obligation. NDIS, Medicare & private. Inner West Sydney & telehealth.',
  alternates: { canonical: '/book' },
  openGraph: {
    title: 'Book a Free Discovery Call | Shine and Speak',
    description:
      'Book a free discovery call with Shine and Speak — mobile speech pathologist in Sydney. No obligation. NDIS, Medicare & private.',
    url: '/book',
  },
};

export default function BookPage() {
  return (
    <article>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Book a Free Discovery Call', url: `${SITE_URL}/book` },
        ])}
      />

      <nav className="bg-gray-50 py-3 border-b border-gray-200 text-sm" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 text-gray-500">
          <Link href="/" className="hover:text-[#112A46]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-[#112A46]">Book a Free Discovery Call</span>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#112A46] mb-6 text-center">Book a Free Discovery Call</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Chat with our speech pathologist about your child&apos;s needs — no obligation, no pressure. We&apos;ll answer your questions and help you decide on the best next step.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Calendly placeholder */}
          <div>
            <h2 className="text-2xl font-serif font-medium text-[#112A46] mb-4">Schedule online</h2>
            <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center border-2 border-dashed border-gray-300">
              {/* REPLACE: Paste your Calendly embed code here
                  e.g. <iframe src="https://calendly.com/shineandspeak/discovery-call" ... />
              */}
              <div className="text-center px-8">
                <p className="text-gray-500 font-semibold mb-2">Online booking coming soon</p>
                <p className="text-gray-400 text-sm">Use the form or call us to book your free call</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-2">Or call us directly:</p>
              <a href="tel:0421608819" className="text-2xl font-serif font-medium text-[#112A46] hover:text-[#C89B66] transition">
                📞 {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Parent enquiry form */}
          <div>
            <h2 className="text-2xl font-serif font-medium text-[#112A46] mb-4">Or send an enquiry</h2>
            <p className="text-gray-600 mb-6">Fill in your details and we&apos;ll call you back within 24 hours.</p>
            <ParentEnquiryForm />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-4 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            <Link href="/about" className="underline hover:text-[#112A46]">Written by a Certified Practising Speech Pathologist</Link>
          </p>
        </div>
      </div>
    </article>
  );
}
