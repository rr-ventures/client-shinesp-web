import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Book a Free Discovery Call | Speech Therapy Sydney',
  description:
    'Book a free discovery call with Shine Yin Teoh, Certified Practising Speech Pathologist in Sydney. NDIS, Medicare & private. Mobile & telehealth. No obligation.',
  alternates: {
    canonical: 'https://www.shineandspeak.com.au/contact',
  },
  openGraph: {
    title: 'Book a Free Discovery Call | Shine and Speak',
    description:
      'Book a free discovery call with Shine Yin Teoh, Certified Practising Speech Pathologist in Sydney. NDIS, Medicare & private. Mobile & telehealth.',
    url: 'https://www.shineandspeak.com.au/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const CONCERN_OPTIONS = [
  'Speech Sounds',
  'Language',
  'Stuttering',
  'Literacy',
  'Autism',
  'ADHD',
  'Developmental Delay',
  'Intellectual Disability',
  'Social Communication',
  'AAC',
  'Adult Speech',
  'Not sure',
  'Other',
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Book a Free Discovery Call', href: '/contact' },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
          {/* Left — info column */}
          <div>
            <h1 className="text-4xl font-bold text-[#1B365D] mb-4">Book a Free Discovery Call</h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Not sure where to start? Let&apos;s have a quick, no-obligation chat about your child&apos;s needs.
              I&apos;ll answer your questions and help you work out whether a full assessment would be helpful.
            </p>

            {/* Contact details */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 space-y-4">
              <div>
                <p className="text-sm font-semibold text-[#1B365D] mb-1">Phone</p>
                <a href="tel:0421608819" className="text-[#E8A84C] font-bold text-lg hover:underline">
                  0421 608 819
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1B365D] mb-1">Email</p>
                <a href="mailto:admin@shineandspeak.com.au" className="text-gray-700 hover:text-[#E8A84C] transition-colors">
                  admin@shineandspeak.com.au
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1B365D] mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/61421608819"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#E8A84C] transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1B365D] mb-1">Service area</p>
                <p className="text-gray-600 text-sm">
                  Inner West Sydney · Burwood · Hurstville · Strathfield · Canterbury-Bankstown
                  · Campsie · Rockdale · Kogarah · Marrickville · Arncliffe · St George
                  · Telehealth Australia-wide
                </p>
              </div>
            </div>

            {/* Calendly embed placeholder */}
            <div className="bg-white rounded-xl border-2 border-dashed border-[#E8A84C] p-8 text-center">
              <p className="text-[#1B365D] font-semibold mb-2">Online Booking Calendar</p>
              {/* REPLACE: Embed your Calendly widget here. Replace the link below with your real Calendly URL */}
              {/* REPLACE: Paste your Calendly embed code here (https://calendly.com/shineandspeak) */}
              <a
                href="https://calendly.com/shineandspeak"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E8A84C] text-[#1B365D] font-bold px-7 py-3 rounded-lg hover:bg-amber-400 transition-colors"
              >
                Open Booking Calendar
              </a>
            </div>
          </div>

          {/* Right — parent enquiry form */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-[#1B365D] mb-2">Send an enquiry</h2>
              <p className="text-gray-600 text-sm mb-6">
                Prefer to write? Fill in the form below and I&apos;ll be in touch within 24 hours.
              </p>

              <form action="/thank-you" method="GET" className="space-y-5">
                <div>
                  <label htmlFor="parent-name" className="block text-sm font-semibold text-[#1B365D] mb-1">
                    Your name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="parent-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Smith"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8A84C] focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="parent-phone" className="block text-sm font-semibold text-[#1B365D] mb-1">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="parent-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="0400 000 000"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8A84C] focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="parent-email" className="block text-sm font-semibold text-[#1B365D] mb-1">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="parent-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@email.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8A84C] focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="child-age" className="block text-sm font-semibold text-[#1B365D] mb-1">
                    Child&apos;s age <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="child-age"
                    name="childAge"
                    type="text"
                    required
                    placeholder="e.g. 4 years"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8A84C] focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="concern" className="block text-sm font-semibold text-[#1B365D] mb-1">
                    What are you looking for help with? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="concern"
                    name="concern"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8A84C] focus:border-transparent text-sm bg-white"
                  >
                    <option value="">Select an area...</option>
                    {CONCERN_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1B365D] text-white font-bold px-6 py-3.5 rounded-lg hover:bg-[#0d2240] transition-colors text-base mt-2"
                >
                  Send Enquiry
                </button>
                <p className="text-xs text-gray-400 text-center">
                  I&apos;ll respond within 24 hours. Your details are kept confidential.
                </p>
              </form>
            </div>

            {/* Support coordinator callout */}
            <div className="mt-6 bg-[#1B365D] rounded-xl p-5 text-white">
              <p className="font-semibold mb-2">Are you a Support Coordinator?</p>
              <p className="text-blue-200 text-sm mb-3">
                Use the dedicated referral form for faster processing of NDIS referrals.
              </p>
              <a
                href="/refer-a-client"
                className="inline-flex items-center gap-1 text-[#E8A84C] font-semibold text-sm hover:underline"
              >
                Submit a client referral →
              </a>
            </div>
          </div>
        </div>

        {/* Author attribution */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500">
            Written by{' '}
            <a href="/about" className="text-[#1B365D] hover:text-[#E8A84C] underline underline-offset-2">
              Shine Yin Teoh, Certified Practising Speech Pathologist
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
