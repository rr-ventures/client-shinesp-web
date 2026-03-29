import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Book a Free Discovery Call | Shine and Speak",
  description:
    "Book a free discovery call with Shine Teoh, speech pathologist in Sydney. No obligation — chat about your child's needs and we'll work out the best next step.",
  alternates: {
    canonical: "https://shineandspeak.com.au/contact",
  },
  openGraph: {
    title: "Book a Free Discovery Call | Shine and Speak",
    description:
      "Book a free discovery call with Shine Teoh, speech pathologist in Sydney. No obligation — chat about your child's needs and we'll work out the best next step.",
    url: "https://shineandspeak.com.au/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 py-12">
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      <div className="container mx-auto px-4 max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
          <Link href="/">Home</Link> &rsaquo; Contact
        </nav>

        <h1 className="text-4xl font-bold text-navy-blue mb-4">Book a Free Discovery Call</h1>
        <p className="text-lg text-gray-700 mb-8">
          Fill in the form below and I'll be in touch within 24 hours to arrange your free discovery call. No obligation, no pressure — just a chat about your child's needs. You can also call me directly on <a href="tel:+61421608819" className="text-navy-blue font-semibold hover:underline">0421 608 819</a> or email <a href="mailto:admin@shineandspeak.com.au" className="text-navy-blue font-semibold hover:underline">admin@shineandspeak.com.au</a>.
        </p>

        {/* REPLACE: Swap this form for a Calendly/TidyCal embed once you have your booking URL */}
        <form className="bg-white p-8 rounded-xl shadow-md space-y-6" action="/thank-you" method="get">
          <div>
            <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="name">Your name *</label>
            <input type="text" id="name" name="name" required className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="phone">Phone number *</label>
            <input type="tel" id="phone" name="phone" required className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="childAge">Child&apos;s age *</label>
            <input type="text" id="childAge" name="childAge" required className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue focus:border-transparent" placeholder="e.g. 4 years" />
          </div>
          <div>
            <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="helpWith">What are you looking for help with? *</label>
            <select id="helpWith" name="helpWith" required className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue focus:border-transparent bg-white">
              <option value="">Select an area...</option>
              <option value="Speech Sounds">Speech Sounds</option>
              <option value="Language">Language</option>
              <option value="Stuttering">Stuttering</option>
              <option value="Literacy">Literacy</option>
              <option value="Autism">Autism</option>
              <option value="ADHD">ADHD</option>
              <option value="Developmental Delay">Developmental Delay</option>
              <option value="Intellectual Disability">Intellectual Disability</option>
              <option value="Social Communication">Social Communication</option>
              <option value="AAC">AAC</option>
              <option value="Adult Speech">Adult Speech</option>
              <option value="Not sure">Not sure</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-golden-amber text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-600 transition shadow-lg">
            Submit Enquiry
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
          Are you a support coordinator?{" "}
          <Link href="/refer-a-client" className="text-navy-blue font-semibold hover:underline">
            Use the coordinator referral form instead
          </Link>.
        </p>
      </div>
    </main>
  );
}
