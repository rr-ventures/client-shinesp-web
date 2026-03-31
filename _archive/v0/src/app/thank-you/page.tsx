import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, SITE_URL, PHONE_DISPLAY } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Thank You — Next Steps | Shine and Speak',
  description:
    'Thank you for contacting Shine and Speak. We will be in touch within 24 hours to discuss your speech therapy needs.',
  alternates: { canonical: '/thank-you' },
  openGraph: {
    title: 'Thank You | Shine and Speak',
    description: 'Thank you for contacting Shine and Speak. We will be in touch within 24 hours.',
    url: '/thank-you',
  },
};

export default function ThankYouPage() {
  return (
    <article className="min-h-[70vh] flex flex-col">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Thank You', url: `${SITE_URL}/thank-you` },
        ])}
      />

      <div className="flex-grow container mx-auto px-4 py-16 md:py-24 max-w-3xl text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#112A46] mb-6">
          Thank you — we&apos;ll be in touch within 24 hours
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          We&apos;ve received your enquiry and will contact you shortly to arrange your free discovery call.
        </p>

        <div className="bg-[#FAFAF8] rounded-2xl p-8 text-left mb-12">
          <h2 className="text-2xl font-serif font-medium text-[#112A46] mb-6">What to expect next</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-[#C89B66] text-[#112A46] w-10 h-10 rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="font-serif font-medium text-[#112A46] mb-1">We&apos;ll call you back</h3>
                <p className="text-gray-600 text-sm">Our speech pathologist will contact you within 24 hours to schedule your free discovery call at a time that suits you.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-[#C89B66] text-[#112A46] w-10 h-10 rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="font-serif font-medium text-[#112A46] mb-1">Your free discovery call (15–20 min)</h3>
                <p className="text-gray-600 text-sm">We&apos;ll chat about your child&apos;s needs, answer your questions, and discuss whether a formal assessment would be helpful. No obligation.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-[#C89B66] text-[#112A46] w-10 h-10 rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="font-serif font-medium text-[#112A46] mb-1">What to prepare</h3>
                <p className="text-gray-600 text-sm">Think about your main concerns, any previous reports or assessments you have, and the goals that matter most to your child and family.</p>
              </div>
            </div>
          </div>
        </div>

        {/* PLACEHOLDER: "Is My Child's Speech on Track?" checklist PDF download link */}
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-[24px] p-6 mb-12">
          <p className="text-gray-500 italic text-sm">
            {/* PLACEHOLDER: Add downloadable resource — "Is My Child's Speech on Track?" checklist PDF */}
            Free resource: Speech development checklist — coming soon
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:0421608819" className="bg-[#C89B66] text-[#112A46] text-center px-8 py-4 rounded-full font-bold hover:bg-[#b58956] transition">
            📞 Call {PHONE_DISPLAY}
          </a>
          <Link href="/" className="border-2 border-[#112A46] text-[#112A46] text-center px-8 py-4 rounded-full font-bold hover:bg-[#112A46] hover:text-white transition">
            ← Back to homepage
          </Link>
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
