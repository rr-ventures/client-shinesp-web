import Link from "next/link";

export const metadata = {
  title: "Contact | Shine and Speak",
  description: "Book a free discovery call or submit an enquiry.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-sm text-gray-500 mb-8">
          <Link href="/">Home</Link> &gt; Contact
        </div>
        
        <h1 className="text-4xl font-bold text-navy-blue mb-6">Contact Shine and Speak</h1>
        <p className="text-lg text-gray-700 mb-8">
          Book a free discovery call to discuss your child's needs.
        </p>

        <form className="bg-white p-8 rounded-xl shadow-md space-y-6" action="/thank-you">
          <div>
            <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="name">Your Name *</label>
            <input type="text" id="name" required className="w-full border border-gray-300 p-3 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="phone">Phone Number *</label>
            <input type="tel" id="phone" required className="w-full border border-gray-300 p-3 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="email">Email *</label>
            <input type="email" id="email" required className="w-full border border-gray-300 p-3 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="childAge">Child's Age *</label>
            <input type="text" id="childAge" required className="w-full border border-gray-300 p-3 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="helpWith">What are you looking for help with? *</label>
            <select id="helpWith" required className="w-full border border-gray-300 p-3 rounded-md bg-white">
              <option value="">Select...</option>
              <option value="speech">Speech Sounds</option>
              <option value="language">Language</option>
              <option value="stuttering">Stuttering</option>
              <option value="autism">Autism</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-golden-amber text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-600 transition shadow-lg">
            Submit Enquiry
          </button>
        </form>
      </div>
    </main>
  );
}
