import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <p className="text-7xl font-bold text-[#E8A84C] mb-4">404</p>
      <h1 className="text-3xl font-bold text-[#1B365D] mb-4">Page not found</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have moved, or the link might be incorrect.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#1B365D] text-white font-bold px-7 py-3 rounded-lg hover:bg-[#0d2240] transition-colors"
        >
          Return to homepage <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 border-2 border-[#1B365D] text-[#1B365D] font-semibold px-7 py-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Get in touch
        </Link>
      </div>
      <div className="mt-12 text-sm text-gray-500 space-y-2">
        <p>You might be looking for:</p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          <Link href="/speech-therapy-autism-sydney-nsw" className="text-[#1B365D] underline hover:text-[#E8A84C]">Autism Speech Therapy</Link>
          <Link href="/ndis-speech-therapy-sydney-nsw" className="text-[#1B365D] underline hover:text-[#E8A84C]">NDIS Funding</Link>
          <Link href="/speech-pathologist-burwood-nsw" className="text-[#1B365D] underline hover:text-[#E8A84C]">Burwood Therapy</Link>
          <Link href="/about" className="text-[#1B365D] underline hover:text-[#E8A84C]">About Shine</Link>
        </div>
      </div>
    </div>
  );
}
