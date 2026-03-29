import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Image 
            src="/shine-and-speak-logo-stacked-transparent.png" 
            alt="Shine and Speak Logo" 
            width={150} 
            height={150} 
            className="mb-4 bg-white p-2 rounded"
          />
          <p className="text-sm mb-4">
            Personalised speech therapy delivered to your home, school, or online.
          </p>
          <div className="flex space-x-4">
            {/* Social Links */}
          </div>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4 text-brand-gold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-brand-gold">About</Link></li>
            <li><Link href="/paediatric-speech-therapy-sydney-nsw" className="hover:text-brand-gold">Services</Link></li>
            <li><Link href="/ndis-speech-therapy-sydney-nsw" className="hover:text-brand-gold">Funding & Fees</Link></li>
            <li><Link href="/contact" className="hover:text-brand-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 text-brand-gold">Areas Served</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/speech-pathologist-arncliffe-nsw" className="hover:text-brand-gold">Arncliffe</Link></li>
            <li><Link href="/speech-pathologist-burwood-nsw" className="hover:text-brand-gold">Burwood</Link></li>
            <li><Link href="/speech-pathologist-hurstville-nsw" className="hover:text-brand-gold">Hurstville</Link></li>
            <li><Link href="/speech-pathologist-strathfield-nsw" className="hover:text-brand-gold">Strathfield</Link></li>
            <li><Link href="/telehealth-speech-therapy-sydney-nsw" className="hover:text-brand-gold">Telehealth Australia-wide</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 text-brand-gold">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="tel:1300000000" className="hover:text-brand-gold">1300 000 000</a></li>
            <li><a href="mailto:hello@shineandspeak.com.au" className="hover:text-brand-gold">hello@shineandspeak.com.au</a></li>
          </ul>
          <div className="mt-4">
            <p className="text-xs text-gray-300">Written by a Certified Practising Speech Pathologist</p>
            <p className="text-xs text-gray-300 mt-2">© 2026 Shine and Speak</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
