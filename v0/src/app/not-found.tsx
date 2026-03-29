import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found | Shine and Speak',
  description: 'The page you are looking for could not be found. Return to Shine and Speak speech pathology homepage.',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <div className="text-8xl font-serif font-medium text-[#112A46] mb-4">404</div>
      <h1 className="text-3xl md:text-4xl font-serif font-medium text-[#112A46] mb-4">Page not found</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-xl">
        Sorry, we couldn&apos;t find that page. It may have moved or the URL may be incorrect.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-12 max-w-lg w-full">
        <Link href="/" className="bg-[#112A46] text-white px-6 py-3 rounded-full font-bold hover:bg-[#1a3f69] transition text-center">
          Go to Homepage
        </Link>
        <Link href="/book" className="bg-[#C89B66] text-[#112A46] px-6 py-3 rounded-full font-bold hover:bg-[#b58956] transition text-center">
          Book a Discovery Call
        </Link>
      </div>

      <div className="text-left max-w-md">
        <p className="font-semibold text-[#112A46] mb-3">Popular pages:</p>
        <ul className="space-y-2 text-gray-700">
          <li><Link href="/speech-therapy-autism-sydney-nsw" className="underline hover:text-[#C89B66]">Speech Therapy for Autism</Link></li>
          <li><Link href="/ndis-speech-therapy-sydney-nsw" className="underline hover:text-[#C89B66]">NDIS Speech Therapy</Link></li>
          <li><Link href="/about" className="underline hover:text-[#C89B66]">About Shine and Speak</Link></li>
          <li><Link href="/contact" className="underline hover:text-[#C89B66]">Contact us</Link></li>
          <li><Link href="/refer-a-client" className="underline hover:text-[#C89B66]">Refer a client</Link></li>
        </ul>
      </div>
    </div>
  );
}
