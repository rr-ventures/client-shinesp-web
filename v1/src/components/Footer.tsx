import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-white">Shine and Speak</h3>
            <p className="text-gray-300 mb-6">
              Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📞 <a href="tel:+61400000000" className="hover:text-secondary">0400 000 000</a></p>
              <p>✉️ <a href="mailto:hello@shineandspeak.com.au" className="hover:text-secondary">hello@shineandspeak.com.au</a></p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/paediatric-speech-therapy-sydney-nsw" className="hover:text-secondary">Paediatric Speech Therapy</Link></li>
              <li><Link href="/adult-speech-therapy-sydney-nsw" className="hover:text-secondary">Adult Speech Therapy</Link></li>
              <li><Link href="/speech-therapy-autism-sydney-nsw" className="hover:text-secondary">Autism Support</Link></li>
              <li><Link href="/mobile-speech-therapy-sydney-nsw" className="hover:text-secondary">Mobile Therapy</Link></li>
              <li><Link href="/telehealth-speech-therapy-sydney-nsw" className="hover:text-secondary">Telehealth</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/about" className="hover:text-secondary">About Shine</Link></li>
              <li><Link href="/how-it-works" className="hover:text-secondary">How It Works</Link></li>
              <li><Link href="/fees" className="hover:text-secondary">Fees & Funding</Link></li>
              <li><Link href="/refer-a-client" className="hover:text-secondary">Refer a Client</Link></li>
              <li><Link href="/contact" className="hover:text-secondary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Service Areas</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/speech-pathologist-arncliffe-nsw" className="hover:text-secondary">Arncliffe</Link></li>
              <li><Link href="/speech-pathologist-burwood-nsw" className="hover:text-secondary">Burwood</Link></li>
              <li><Link href="/speech-pathologist-hurstville-nsw" className="hover:text-secondary">Hurstville</Link></li>
              <li><Link href="/speech-pathologist-strathfield-nsw" className="hover:text-secondary">Strathfield</Link></li>
              <li><Link href="/telehealth-speech-therapy-sydney-nsw" className="hover:text-secondary">Telehealth Australia-wide</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div className="flex flex-wrap gap-4 items-center">
            <span>© 2026 Shine and Speak</span>
            <span>ABN: 12 345 678 901</span>
            <span>NDIS Provider: 123456789</span>
          </div>
          <div>
            Written by <Link href="/about" className="hover:text-secondary underline">Shine Teoh</Link>, Certified Practising Speech Pathologist
          </div>
        </div>
      </div>
    </footer>
  );
}
