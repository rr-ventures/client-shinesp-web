'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';

export default function ReferForm() {
  const router = useRouter();
  const [planType, setPlanType] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const checked = form.querySelectorAll('input[name="delivery"]:checked');
    const hiddenField = form.querySelector<HTMLInputElement>('input[name="delivery-required"]');
    if (hiddenField) {
      if (checked.length === 0) {
        hiddenField.setCustomValidity('Please select at least one delivery method');
        hiddenField.reportValidity();
        return;
      }
      hiddenField.setCustomValidity('');
    }
    router.push('/thank-you');
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 space-y-6">
              <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-4">Referral Details</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="referrerName" className="block text-sm font-bold text-gray-700 mb-2">Your Name *</label>
                  <input type="text" id="referrerName" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="organisation" className="block text-sm font-bold text-gray-700 mb-2">Organisation *</label>
                  <input type="text" id="organisation" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone *</label>
                  <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-primary pt-6 border-t border-gray-100">Participant Details</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="participantName" className="block text-sm font-bold text-gray-700 mb-2">Participant Name *</label>
                  <input type="text" id="participantName" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="ndisNumber" className="block text-sm font-bold text-gray-700 mb-2">NDIS Number *</label>
                  <input type="text" id="ndisNumber" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
                </div>
              </div>

              <div>
                <label htmlFor="planType" className="block text-sm font-bold text-gray-700 mb-2">Plan Management Type *</label>
                <select 
                  id="planType" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white"
                  value={planType}
                  onChange={(e) => setPlanType(e.target.value)}
                >
                  <option value="">Select management type...</option>
                  <option value="self">Self-managed</option>
                  <option value="plan">Plan-managed</option>
                  <option value="ndia">NDIA-managed</option>
                </select>
              </div>

              {planType === 'plan' && (
                <div>
                  <label htmlFor="planManager" className="block text-sm font-bold text-gray-700 mb-2">Plan Manager Name & Contact *</label>
                  <input type="text" id="planManager" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
                </div>
              )}

              <div>
                <label htmlFor="supportNeeds" className="block text-sm font-bold text-gray-700 mb-2">Key Support Needs *</label>
                <textarea id="supportNeeds" required rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Preferred Delivery * <span className="text-xs font-normal text-gray-500">(select at least one)</span></label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="delivery"
                      value="mobile"
                      className="w-4 h-4 text-primary rounded focus:ring-primary"
                      onChange={(e) => {
                        const checked = e.currentTarget.form?.querySelectorAll('input[name="delivery"]:checked');
                        e.currentTarget.form?.querySelector<HTMLInputElement>('input[name="delivery-required"]')?.setCustomValidity(checked && checked.length > 0 ? '' : 'Please select at least one delivery method');
                      }}
                    />
                    <span>Mobile (Home)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="delivery"
                      value="school"
                      className="w-4 h-4 text-primary rounded focus:ring-primary"
                      onChange={(e) => {
                        const checked = e.currentTarget.form?.querySelectorAll('input[name="delivery"]:checked');
                        e.currentTarget.form?.querySelector<HTMLInputElement>('input[name="delivery-required"]')?.setCustomValidity(checked && checked.length > 0 ? '' : 'Please select at least one delivery method');
                      }}
                    />
                    <span>School-based</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="delivery"
                      value="telehealth"
                      className="w-4 h-4 text-primary rounded focus:ring-primary"
                      onChange={(e) => {
                        const checked = e.currentTarget.form?.querySelectorAll('input[name="delivery"]:checked');
                        e.currentTarget.form?.querySelector<HTMLInputElement>('input[name="delivery-required"]')?.setCustomValidity(checked && checked.length > 0 ? '' : 'Please select at least one delivery method');
                      }}
                    />
                    <span>Telehealth</span>
                  </label>
                  {/* Hidden required field: enforces at least one checkbox is selected */}
                  <input
                    type="text"
                    name="delivery-required"
                    required
                    defaultValue=""
                    tabIndex={-1}
                    aria-hidden="true"
                    className="absolute opacity-0 w-0 h-0 pointer-events-none"
                    style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
                    onFocus={(e) => {
                      const checked = e.currentTarget.form?.querySelectorAll('input[name="delivery"]:checked');
                      e.currentTarget.setCustomValidity(checked && checked.length > 0 ? '' : 'Please select at least one delivery method');
                    }}
                  />
                </div>
              </div>
                <div>
                  <label htmlFor="language" className="block text-sm font-bold text-gray-700 mb-2">Preferred Language *</label>
                  <select id="language" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white">
                    <option value="english">English</option>
                    <option value="mandarin">Mandarin (普通话)</option>
                  </select>
                </div>
              </div>

              <div className="pt-6">
                <button type="submit" className="w-full bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-md">
                  Submit Referral
                </button>
              </div>
            </form>
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-24 bg-accent p-8 rounded-3xl border border-gray-200">
              <h3 className="text-2xl font-bold text-primary mb-6">Why refer to us?</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> <span className="text-gray-700">Fast response times (usually within 24 hours)</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> <span className="text-gray-700">Detailed progress reports and session summaries</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> <span className="text-gray-700">Clear recommendations for plan reviews</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-secondary shrink-0 mt-1" /> <span className="text-gray-700">Bilingual services (English & Mandarin)</span></li>
              </ul>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <p className="text-sm text-gray-500 mb-2">Need to discuss a complex case?</p>
                <a href="tel:+61400000000" className="text-primary font-bold text-lg hover:text-secondary">📞 0400 000 000</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
