'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ReferralForm() {
  const router = useRouter();
  const [planType, setPlanType] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // REPLACE: connect to backend/form service (e.g. Formspree, EmailJS, API route)
    await new Promise((r) => setTimeout(r, 600));
    router.push('/thank-you');
  };

  const labelClass = 'block text-sm font-semibold text-[#1B365D] mb-1';
  const inputClass =
    'w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#E8A84C] focus:border-transparent';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* 9.7 */}
      <div>
        <label htmlFor="scName" className={labelClass}>
          Your name <span className="text-red-500">*</span>
        </label>
        <input id="scName" name="yourName" type="text" required autoComplete="name" placeholder="Jane Smith" className={inputClass} />
      </div>

      {/* 9.8 */}
      <div>
        <label htmlFor="scOrg" className={labelClass}>
          Organisation <span className="text-red-500">*</span>
        </label>
        <input id="scOrg" name="organisation" type="text" required placeholder="Support Coordination Pty Ltd" className={inputClass} />
      </div>

      {/* 9.9 */}
      <div>
        <label htmlFor="scEmail" className={labelClass}>
          Email <span className="text-red-500">*</span>
        </label>
        <input id="scEmail" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputClass} />
      </div>

      {/* 9.10 */}
      <div>
        <label htmlFor="scPhone" className={labelClass}>
          Phone <span className="text-red-500">*</span>
        </label>
        <input id="scPhone" name="phone" type="tel" required autoComplete="tel" placeholder="0400 000 000" className={inputClass} />
      </div>

      {/* 9.11 */}
      <div>
        <label htmlFor="participantName" className={labelClass}>
          Participant name <span className="text-red-500">*</span>
        </label>
        <input id="participantName" name="participantName" type="text" required placeholder="Participant's full name" className={inputClass} />
      </div>

      {/* 9.12 */}
      <div>
        <label htmlFor="ndisNumber" className={labelClass}>
          NDIS number <span className="text-red-500">*</span>
        </label>
        <input id="ndisNumber" name="ndisNumber" type="text" required placeholder="43XXXXXXX" className={inputClass} />
      </div>

      {/* 9.13 */}
      <div>
        <label htmlFor="planManagement" className={labelClass}>
          Plan management type <span className="text-red-500">*</span>
        </label>
        <select
          id="planManagement"
          name="planManagement"
          required
          defaultValue=""
          onChange={(e) => setPlanType(e.target.value)}
          className={inputClass}
        >
          <option value="" disabled>Select…</option>
          <option value="Self-managed">Self-managed</option>
          <option value="Plan-managed">Plan-managed</option>
          <option value="NDIA-managed">NDIA-managed</option>
        </select>
      </div>

      {/* 9.14 — conditional: only shown when Plan-managed is selected */}
      {planType === 'Plan-managed' && (
        <div>
          <label htmlFor="planManagerContact" className={labelClass}>
            Plan manager name &amp; contact <span className="text-red-500">*</span>
          </label>
          <input
            id="planManagerContact"
            name="planManagerContact"
            type="text"
            required={planType === 'Plan-managed'}
            placeholder="Name, phone and/or email of plan manager"
            className={inputClass}
          />
        </div>
      )}

      {/* 9.15 */}
      <div>
        <label htmlFor="supportNeeds" className={labelClass}>
          Key support needs <span className="text-red-500">*</span>
        </label>
        <textarea
          id="supportNeeds"
          name="supportNeeds"
          required
          rows={4}
          placeholder="Brief description of the participant's communication needs, goals, and any relevant history…"
          className={inputClass}
        />
      </div>

      {/* 9.16 */}
      <fieldset>
        <legend className={`${labelClass} mb-2`}>
          Preferred delivery <span className="text-red-500">*</span>
        </legend>
        <div className="space-y-2">
          {['Mobile', 'Telehealth', 'School-based'].map((opt) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="preferredDelivery"
                value={opt}
                className="w-4 h-4 accent-[#E8A84C]"
              />
              <span className="text-gray-700">{opt}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* 9.17 */}
      <div>
        <label htmlFor="preferredLanguage" className={labelClass}>
          Preferred language <span className="text-red-500">*</span>
        </label>
        <select id="preferredLanguage" name="preferredLanguage" required defaultValue="" className={inputClass}>
          <option value="" disabled>Select…</option>
          <option value="English">English</option>
          <option value="Mandarin">Mandarin (普通话)</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#1B365D] text-white font-bold py-4 rounded-md text-lg hover:bg-blue-900 transition disabled:opacity-60"
      >
        {submitting ? 'Submitting…' : 'Submit Referral'}
      </button>

      <p className="text-xs text-gray-400 text-center">
        We&apos;ll respond within 24 hours. All information is kept confidential.
      </p>
    </form>
  );
}
