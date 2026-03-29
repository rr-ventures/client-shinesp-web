"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReferralForm() {
  const [planType, setPlanType] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/thank-you");
  }

  return (
    <form className="bg-white p-8 rounded-xl shadow-md space-y-6" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="referrerName">Your name *</label>
          <input type="text" id="referrerName" name="referrerName" required className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue" />
        </div>
        <div>
          <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="organisation">Organisation *</label>
          <input type="text" id="organisation" name="organisation" required className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue" />
        </div>
        <div>
          <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue" />
        </div>
        <div>
          <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="phone">Phone *</label>
          <input type="tel" id="phone" name="phone" required className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue" />
        </div>
      </div>

      <hr className="border-gray-200" />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="participantName">Participant name *</label>
          <input type="text" id="participantName" name="participantName" required className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue" />
        </div>
        <div>
          <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="ndisNumber">NDIS number *</label>
          <input type="text" id="ndisNumber" name="ndisNumber" required className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="planManagement">Plan management type *</label>
        <select
          id="planManagement"
          name="planManagement"
          required
          value={planType}
          onChange={(e) => setPlanType(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue bg-white"
        >
          <option value="">Select...</option>
          <option value="Self-managed">Self-managed</option>
          <option value="Plan-managed">Plan-managed</option>
          <option value="NDIA-managed">NDIA-managed</option>
        </select>
      </div>

      {planType === "Plan-managed" && (
        <div>
          <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="planManagerContact">Plan manager name and contact *</label>
          <input
            type="text"
            id="planManagerContact"
            name="planManagerContact"
            required
            placeholder="e.g. Jane Smith — ABC Plan Management — jane@abcpm.com.au"
            className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue"
          />
        </div>
      )}

      <div>
        <fieldset>
          <legend className="block text-sm font-bold text-navy-blue mb-2">Preferred delivery *</legend>
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" name="delivery" value="Mobile" className="w-4 h-4" />
              <span className="text-gray-700">Mobile (Home / Community)</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" name="delivery" value="Telehealth" className="w-4 h-4" />
              <span className="text-gray-700">Telehealth</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" name="delivery" value="School-based" className="w-4 h-4" />
              <span className="text-gray-700">School-based</span>
            </label>
          </div>
        </fieldset>
      </div>

      <div>
        <label className="block text-sm font-bold text-navy-blue mb-2" htmlFor="language">Preferred language *</label>
        <select id="language" name="language" required className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-navy-blue bg-white">
          <option value="">Select...</option>
          <option value="English">English</option>
          <option value="Mandarin">Mandarin (Chinese)</option>
        </select>
      </div>

      <button type="submit" className="w-full bg-golden-amber text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-600 transition shadow-lg">
        Submit Referral
      </button>
    </form>
  );
}
