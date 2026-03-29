import Link from "next/link";

export const metadata = {
  title: "Refer a Client | Shine and Speak",
  description: "Refer a client for speech therapy. Fast response, detailed reporting, and flexible scheduling for NDIS participants.",
};

export default function ReferClientPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-sm text-gray-500 mb-8">
          <Link href="/">Home</Link> &gt; Refer a Client
        </div>
        
        <h1 className="text-4xl font-bold text-navy-blue mb-6">Refer a Client</h1>
        <p className="text-lg text-gray-700 mb-8">
          Thank you for referring your client to Shine and Speak. Please complete the form below, and I will be in touch within 24 hours to arrange an initial consultation.
        </p>

        <form className="bg-white p-8 rounded-xl shadow-md space-y-6" action="/thank-you">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="referrerName">Your Name *</label>
              <input type="text" id="referrerName" required className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="organisation">Organisation *</label>
              <input type="text" id="organisation" required className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="email">Email *</label>
              <input type="email" id="email" required className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="phone">Phone *</label>
              <input type="tel" id="phone" required className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue focus:border-transparent" />
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="participantName">Participant Name *</label>
              <input type="text" id="participantName" required className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="ndisNumber">NDIS Number *</label>
              <input type="text" id="ndisNumber" required className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue focus:border-transparent" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="planManagement">Plan Management Type *</label>
            <select id="planManagement" required className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue focus:border-transparent bg-white">
              <option value="">Select...</option>
              <option value="self">Self-managed</option>
              <option value="plan">Plan-managed</option>
              <option value="ndia">NDIA-managed</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="supportNeeds">Key Support Needs *</label>
            <textarea id="supportNeeds" required rows={4} className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue focus:border-transparent"></textarea>
          </div>

          <div>
            <label className="block text-sm font-bold text-navy-blue mb-2">Preferred Delivery *</label>
            <div className="space-y-2">
              <label className="flex items-center"><input type="checkbox" className="mr-2" /> Mobile (Home/Community)</label>
              <label className="flex items-center"><input type="checkbox" className="mr-2" /> Telehealth</label>
              <label className="flex items-center"><input type="checkbox" className="mr-2" /> School-based</label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="language">Preferred Language *</label>
            <select id="language" required className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue focus:border-transparent bg-white">
              <option value="english">English</option>
              <option value="mandarin">Mandarin (普通话)</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-golden-amber text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-600 transition shadow-lg">
            Submit Referral
          </button>
        </form>
      </div>
    </main>
  );
}
