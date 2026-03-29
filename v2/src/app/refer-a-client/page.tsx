import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Refer a Client | Shine and Speak',
  description: 'Refer a client for speech therapy. We work closely with NDIS support coordinators, educators, and health professionals in Sydney.',
  alternates: {
    canonical: '/refer-a-client',
  },
};

export default function ReferAClientPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Refer a Client', href: '/refer-a-client' }
        ]} />
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 mt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Refer a Client</h1>
          <p className="text-lg text-gray-700 mb-8">
            Please complete the form below to refer a client for speech therapy services. I aim to respond to all referrals within 24 hours.
          </p>
          
          <form className="space-y-8" action="/thank-you">
            {/* Referrer Details */}
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-4 border-b border-gray-100 pb-2">Referrer Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                  <input type="text" required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Organisation *</label>
                  <input type="text" required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input type="email" required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input type="tel" required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent" />
                </div>
              </div>
            </div>

            {/* Participant Details */}
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-4 border-b border-gray-100 pb-2">Participant Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Participant Name *</label>
                  <input type="text" required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">NDIS Number *</label>
                  <input type="text" required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Plan Management Type *</label>
                  <select required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white">
                    <option value="">Select an option...</option>
                    <option value="self">Self-managed</option>
                    <option value="plan">Plan-managed</option>
                    <option value="ndia">NDIA-managed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Plan Manager Name & Contact (if applicable)</label>
                  <input type="text" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent" />
                </div>
              </div>
            </div>

            {/* Support Needs */}
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-4 border-b border-gray-100 pb-2">Support Needs</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Key Support Needs *</label>
                  <textarea required rows={4} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Delivery *</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-gold-500 focus:ring-gold-500" />
                      <span className="ml-2 text-gray-700">Mobile (Home/Community)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-gold-500 focus:ring-gold-500" />
                      <span className="ml-2 text-gray-700">Telehealth</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-gold-500 focus:ring-gold-500" />
                      <span className="ml-2 text-gray-700">School-based</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Language *</label>
                  <select required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white">
                    <option value="">Select an option...</option>
                    <option value="english">English</option>
                    <option value="mandarin">Mandarin (普通话)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <button type="submit" className="w-full md:w-auto bg-navy-900 text-white font-bold px-8 py-4 rounded-md hover:bg-navy-800 transition-colors text-lg">
                Submit Referral
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
