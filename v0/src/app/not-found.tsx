import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found | Shine and Speak',
  description: 'The page you are looking for could not be found. Return to Shine and Speak speech pathology homepage.',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <div className="text-8xl font-bold text-[#1B365D] mb-4">404</div>
      <h1 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-4">Page not found</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-xl">
        Sorry, we couldn&apos;t find that page. It may have moved or the URL may be incorrect.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-12 max-w-lg w-full">
        <Link href="/" className="bg-[#1B365D] text-white px-6 py-3 rounded-md font-bold hover:bg-blue-900 transition text-center">
          Go to Homepage
        </Link>
        <Link href="/book" className="bg-[#E8A84C] text-white px-6 py-3 rounded-md font-bold hover:bg-amber-600 transition text-center">
          Book a Discovery Call
        </Link>
      </div>

      <div className="text-left max-w-md">
        <p className="font-semibold text-[#1B365D] mb-3">Popular pages:</p>
        <ul className="space-y-2 text-gray-700">
          <li><Link href="/speech-therapy-autism-sydney-nsw" className="underline hover:text-[#E8A84C]">Speech Therapy for Autism</Link></li>
          <li><Link href="/ndis-speech-therapy-sydney-nsw" className="underline hover:text-[#E8A84C]">NDIS Speech Therapy</Link></li>
          <li><Link href="/about" className="underline hover:text-[#E8A84C]">About Shine and Speak</Link></li>
          <li><Link href="/contact" className="underline hover:text-[#E8A84C]">Contact us</Link></li>
          <li><Link href="/refer-a-client" className="underline hover:text-[#E8A84C]">Refer a client</Link></li>
        </ul>
      </div>
    </div>
  );
}
