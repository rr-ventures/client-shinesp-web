import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold text-gold-500 mb-6">Shine & Speak</div>
            <p className="text-gray-300 mb-6">
              Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>Written by Shine Teoh, Certified Practising Speech Pathologist</p>
              <p>ABN: 12 345 678 900</p>
              <p>NDIS Provider: 4050000000</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-gold-400">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/paediatric-speech-therapy-sydney-nsw" className="hover:text-gold-400">Paediatric Services</Link></li>
              <li><Link href="/adult-speech-therapy-sydney-nsw" className="hover:text-gold-400">Adult Services</Link></li>
              <li><Link href="/how-it-works" className="hover:text-gold-400">How It Works</Link></li>
              <li><Link href="/ndis-speech-therapy-sydney-nsw" className="hover:text-gold-400">NDIS Funding</Link></li>
              <li><Link href="/about" className="hover:text-gold-400">About Shine</Link></li>
              <li><Link href="/contact" className="hover:text-gold-400">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-gold-400">Service Areas</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/speech-pathologist-arncliffe-nsw" className="hover:text-gold-400">Arncliffe</Link></li>
              <li><Link href="/speech-pathologist-burwood-nsw" className="hover:text-gold-400">Burwood</Link></li>
              <li><Link href="/speech-pathologist-hurstville-nsw" className="hover:text-gold-400">Hurstville</Link></li>
              <li><Link href="/speech-pathologist-strathfield-nsw" className="hover:text-gold-400">Strathfield</Link></li>
              <li><Link href="/speech-pathologist-inner-west-sydney-nsw" className="hover:text-gold-400">Inner West Sydney</Link></li>
              <li><Link href="/telehealth-speech-therapy-sydney-nsw" className="hover:text-gold-400">Telehealth Australia-wide</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-gold-400">Connect</h3>
            <div className="flex space-x-4 mb-6">
              {/* Social placeholders */}
              <a href="#" className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors">IN</a>
              <a href="#" className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors">WA</a>
              <a href="#" className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors">WC</a>
            </div>
            <div className="flex flex-wrap gap-4">
              <span className="bg-white text-navy-900 text-xs font-bold px-2 py-1 rounded">CPSP</span>
              <span className="bg-white text-navy-900 text-xs font-bold px-2 py-1 rounded">NDIS Registered</span>
              <span className="bg-white text-navy-900 text-xs font-bold px-2 py-1 rounded">Medicare</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-navy-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Shine and Speak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
