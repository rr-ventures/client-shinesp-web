"use client";

import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function ReferAClientPage() {
  const [planType, setPlanType] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Refer a Client', href: '/refer-a-client' },
          ]}
        />

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 mt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-2">Refer a Client</h1>
          <p className="text-lg text-gray-700 mb-8">
            Complete the form below to refer a client for speech therapy services. I aim to respond to all
            referrals within 24 hours.
          </p>

          <form className="space-y-8" action="/thank-you" method="GET">
            {/* Referrer Details */}
            <div>
              <h2 className="text-xl font-bold text-[#1B365D] mb-4 border-b border-gray-100 pb-2">
                Your Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="ref-name" className="block text-sm font-semibold text-[#1B365D] mb-1">
                    Your name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="ref-name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8A84C] focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="ref-org" className="block text-sm font-semibold text-[#1B365D] mb-1">
                    Organisation <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="ref-org"
                    name="organisation"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8A84C] focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="ref-email" className="block text-sm font-semibold text-[#1B365D] mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="ref-email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8A84C] focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="ref-phone" className="block text-sm font-semibold text-[#1B365D] mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="ref-phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8A84C] focus:border-transparent text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Participant Details */}
            <div>
              <h2 className="text-xl font-bold text-[#1B365D] mb-4 border-b border-gray-100 pb-2">
                Participant Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="participant-name" className="block text-sm font-semibold text-[#1B365D] mb-1">
                    Participant name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="participant-name"
                    name="participantName"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8A84C] focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="ndis-number" className="block text-sm font-semibold text-[#1B365D] mb-1">
                    NDIS number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="ndis-number"
                    name="ndisNumber"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8A84C] focus:border-transparent text-sm"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="plan-type" className="block text-sm font-semibold text-[#1B365D] mb-1">
                    Plan management type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="plan-type"
                    name="planType"
                    required
                    value={planType}
                    onChange={(e) => setPlanType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8A84C] focus:border-transparent text-sm bg-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="self">Self-managed</option>
                    <option value="plan">Plan-managed</option>
                    <option value="ndia">NDIA-managed</option>
                  </select>
                </div>

                {/* Conditional — only shown when Plan-managed is selected */}
                {planType === 'plan' && (
                  <div className="md:col-span-2">
                    <label
                      htmlFor="plan-manager"
                      className="block text-sm font-semibold text-[#1B365D] mb-1"
                    >
                      Plan manager name &amp; contact <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="plan-manager"
                      name="planManager"
                      type="text"
                      required
                      placeholder="Name and phone/email of plan manager"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8A84C] focus:border-transparent text-sm"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Support Needs */}
            <div>
              <h2 className="text-xl font-bold text-[#1B365D] mb-4 border-b border-gray-100 pb-2">
                Support Needs
              </h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="support-needs" className="block text-sm font-semibold text-[#1B365D] mb-1">
                    Key support needs <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="support-needs"
                    name="supportNeeds"
                    required
                    rows={4}
                    placeholder="Describe the participant's primary communication goals and support needs..."
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8A84C] focus:border-transparent text-sm"
                  />
                </div>

                <fieldset>
                  <legend className="block text-sm font-semibold text-[#1B365D] mb-2">
                    Preferred delivery <span className="text-red-500">*</span>
                  </legend>
                  <div className="space-y-2">
                    {['Mobile (Home/Community)', 'Telehealth', 'School-based'].map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="delivery"
                          value={opt}
                          className="w-4 h-4 rounded border-gray-300 text-[#E8A84C] focus:ring-[#E8A84C]"
                        />
                        <span className="text-sm text-gray-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="preferred-language" className="block text-sm font-semibold text-[#1B365D] mb-1">
                    Preferred language <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="preferred-language"
                    name="language"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8A84C] focus:border-transparent text-sm bg-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="english">English</option>
                    <option value="mandarin">Mandarin (普通话)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <button
                type="submit"
                className="w-full md:w-auto bg-[#1B365D] text-white font-bold px-10 py-4 rounded-lg hover:bg-[#0d2240] transition-colors text-base"
              >
                Submit Referral
              </button>
              <p className="text-xs text-gray-400 mt-3">
                I aim to respond to all referrals within 24 hours. Your client&apos;s information is kept
                confidential.
              </p>
            </div>
          </form>
        </div>

        {/* Author attribution */}
        <div className="mt-8 text-center">
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
