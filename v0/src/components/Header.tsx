import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <Image 
            src="/shine-and-speak-logo-horizontal-transparent.png" 
            alt="Shine and Speak Logo" 
            width={200} 
            height={60} 
            className="h-12 w-auto object-contain"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <a href="tel:1300000000" className="text-brand-navy font-semibold">📞 1300 000 000</a>
          <Link href="/book" className="bg-brand-gold text-white px-6 py-2 rounded-md font-bold hover:bg-yellow-600 transition">
            Book a Free Discovery Call
          </Link>
          <Link href="/refer-a-client" className="border-2 border-brand-navy text-brand-navy px-6 py-2 rounded-md font-bold hover:bg-brand-navy hover:text-white transition">
            Refer a Client
          </Link>
          <Link href="/zh" className="text-brand-navy">EN/中文</Link>
        </div>
      </div>
      <nav className="bg-brand-navy text-white">
        <div className="container mx-auto px-4 py-3 hidden md:flex space-x-8">
          <Link href="/paediatric-speech-therapy-sydney-nsw" className="hover:text-brand-gold">Services</Link>
          <Link href="/how-it-works" className="hover:text-brand-gold">How It Works</Link>
          <Link href="/ndis-speech-therapy-sydney-nsw" className="hover:text-brand-gold">Funding & Fees</Link>
          <Link href="/about" className="hover:text-brand-gold">About</Link>
          <Link href="/speech-pathologist-burwood-nsw" className="hover:text-brand-gold">Areas</Link>
          <Link href="/contact" className="hover:text-brand-gold">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
