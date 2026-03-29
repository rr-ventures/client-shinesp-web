'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function BookForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/thank-you');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Your Name *</label>
        <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
        <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
        <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
      </div>

      <div>
        <label htmlFor="childAge" className="block text-sm font-bold text-gray-700 mb-2">Child's Age *</label>
        <input type="text" id="childAge" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
      </div>

      <div>
        <label htmlFor="helpWith" className="block text-sm font-bold text-gray-700 mb-2">What are you looking for help with? *</label>
        <select id="helpWith" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white">
          <option value="">Select an option...</option>
          <option value="speech-sounds">Speech Sounds</option>
          <option value="language">Language Delay</option>
          <option value="stuttering">Stuttering</option>
          <option value="literacy">Literacy</option>
          <option value="autism">Autism / ASD</option>
          <option value="adhd">ADHD</option>
          <option value="developmental-delay">Developmental Delay</option>
          <option value="intellectual-disability">Intellectual Disability</option>
          <option value="social-communication">Social Communication</option>
          <option value="aac">AAC</option>
          <option value="adult-speech">Adult Speech Therapy</option>
          <option value="not-sure">Not sure</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="pt-4">
        <button type="submit" className="w-full bg-secondary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-md">
          Request a Call
        </button>
      </div>
      
      <p className="text-center text-sm text-gray-500 mt-4">
        Are you a Support Coordinator? <Link href="/refer-a-client" className="text-primary font-bold hover:underline">Use our referral form</Link>.
      </p>
    </form>
  );
}
