'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const helpOptions = [
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

export default function ParentEnquiryForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // REPLACE: connect to backend/form service (e.g. Formspree, EmailJS, API route)
    await new Promise((r) => setTimeout(r, 600)); // simulate network
    router.push('/thank-you');
  };

  const labelClass = 'block text-sm font-semibold text-[#1B365D] mb-1';
  const inputClass =
    'w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#E8A84C] focus:border-transparent';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div>
        <label htmlFor="parentName" className={labelClass}>
          Your name <span className="text-red-500">*</span>
        </label>
        <input
          id="parentName"
          name="yourName"
          type="text"
          required
          autoComplete="name"
          placeholder="Jane Smith"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="parentPhone" className={labelClass}>
          Phone number <span className="text-red-500">*</span>
        </label>
        <input
          id="parentPhone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="0400 000 000"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="parentEmail" className={labelClass}>
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="parentEmail"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="childAge" className={labelClass}>
          Child&apos;s age <span className="text-red-500">*</span>
        </label>
        <input
          id="childAge"
          name="childAge"
          type="text"
          required
          placeholder="e.g. 4 years"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="helpWith" className={labelClass}>
          What are you looking for help with? <span className="text-red-500">*</span>
        </label>
        <select
          id="helpWith"
          name="helpWith"
          required
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>Select an area…</option>
          {helpOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#E8A84C] text-white font-bold py-4 rounded-md text-lg hover:bg-amber-600 transition disabled:opacity-60"
      >
        {submitting ? 'Sending…' : 'Send Enquiry'}
      </button>

      <p className="text-xs text-gray-400 text-center">
        We&apos;ll respond within 24 hours. Your information is kept strictly private.
      </p>
    </form>
  );
}
