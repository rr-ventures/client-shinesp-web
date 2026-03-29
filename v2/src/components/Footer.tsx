import Link from 'next/link';

const allSuburbs = [
  { label: 'Arncliffe', href: '/speech-pathologist-arncliffe-nsw' },
  { label: 'Burwood', href: '/speech-pathologist-burwood-nsw' },
  { label: 'Campsie', href: '/speech-pathologist-campsie-nsw' },
  { label: 'Canterbury-Bankstown', href: '/speech-pathologist-canterbury-bankstown-nsw' },
  { label: 'Hurstville', href: '/speech-pathologist-hurstville-nsw' },
  { label: 'Inner West Sydney', href: '/speech-pathologist-inner-west-sydney-nsw' },
  { label: 'Kogarah', href: '/speech-pathologist-kogarah-nsw' },
  { label: 'Marrickville', href: '/speech-pathologist-marrickville-nsw' },
  { label: 'Rockdale', href: '/speech-pathologist-rockdale-nsw' },
  { label: 'St George', href: '/speech-pathologist-st-george-nsw' },
  { label: 'Strathfield', href: '/speech-pathologist-strathfield-nsw' },
  { label: 'Telehealth Australia-wide', href: '/telehealth-speech-therapy-sydney-nsw' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B365D] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <p className="text-xl font-bold text-[#0096d3] mb-3">Shine and Speak</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Personalised speech therapy delivered to your home, school, or online.
              Bilingual English &amp; Mandarin (普通话).
            </p>
            <address className="not-italic text-sm text-gray-300 space-y-1 mb-6">
              <p>
                <a href="tel:0421608819" className="hover:text-[#0096d3] transition-colors">
                  0421 608 819
                </a>
              </p>
              <p>
                <a href="mailto:admin@shineandspeak.com.au" className="hover:text-[#0096d3] transition-colors">
                  admin@shineandspeak.com.au
                </a>
              </p>
              <p>ABN: {/* PLACEHOLDER: ABN */}</p>
              <p>NDIS Provider: {/* PLACEHOLDER: NDIS provider number */}</p>
            </address>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-white text-[#1B365D] text-xs font-bold px-2.5 py-1 rounded">CPSP</span>
              <span className="bg-white text-[#1B365D] text-xs font-bold px-2.5 py-1 rounded">NDIS Registered</span>
              <span className="bg-white text-[#1B365D] text-xs font-bold px-2.5 py-1 rounded">Medicare</span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {/* REPLACE: update href to real LinkedIn URL */}
              <a
                href="https://www.linkedin.com/company/shine-and-speak"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shine and Speak on LinkedIn"
                className="w-9 h-9 bg-[#0A66C2] rounded flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* REPLACE: update href to real Facebook URL */}
              <a
                href="https://www.facebook.com/shineandspeak"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shine and Speak on Facebook"
                className="w-9 h-9 bg-[#1877F2] rounded flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* REPLACE: update href to real Instagram URL */}
              <a
                href="https://www.instagram.com/shineandspeak"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shine and Speak on Instagram"
                className="w-9 h-9 rounded flex items-center justify-center hover:opacity-90 transition-opacity"
                style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/61421608819"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Shine and Speak on WhatsApp"
                className="w-9 h-9 rounded flex items-center justify-center hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#25D366' }}
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#0096d3] font-bold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link href="/paediatric-speech-therapy-sydney-nsw" className="hover:text-[#0096d3] transition-colors">Paediatric Speech Therapy</Link></li>
              <li><Link href="/adult-speech-therapy-sydney-nsw" className="hover:text-[#0096d3] transition-colors">Adult Speech Therapy</Link></li>
              <li><Link href="/mobile-speech-therapy-sydney-nsw" className="hover:text-[#0096d3] transition-colors">Mobile Therapy</Link></li>
              <li><Link href="/telehealth-speech-therapy-sydney-nsw" className="hover:text-[#0096d3] transition-colors">Telehealth</Link></li>
              <li><Link href="/school-based-speech-therapy-sydney-nsw" className="hover:text-[#0096d3] transition-colors">School-Based Therapy</Link></li>
              <li><Link href="/speech-therapy-assessment-sydney-nsw" className="hover:text-[#0096d3] transition-colors">Assessments</Link></li>
              <li><Link href="/ndis-speech-therapy-sydney-nsw" className="hover:text-[#0096d3] transition-colors">NDIS Funding</Link></li>
              <li><Link href="/medicare-speech-therapy-sydney-nsw" className="hover:text-[#0096d3] transition-colors">Medicare Rebates</Link></li>
              <li><Link href="/fees" className="hover:text-[#0096d3] transition-colors">Fees &amp; Pricing</Link></li>
              <li><Link href="/how-it-works" className="hover:text-[#0096d3] transition-colors">How It Works</Link></li>
              <li><Link href="/about" className="hover:text-[#0096d3] transition-colors">About Shine</Link></li>
              <li><Link href="/contact" className="hover:text-[#0096d3] transition-colors">Contact Us</Link></li>
              <li><Link href="/refer-a-client" className="hover:text-[#0096d3] transition-colors">Refer a Client</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-[#0096d3] font-bold mb-4 text-sm uppercase tracking-wider">Service Areas</h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {allSuburbs.map((suburb) => (
                <li key={suburb.href}>
                  <Link href={suburb.href} className="hover:text-[#0096d3] transition-colors">
                    {suburb.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WeChat QR */}
          <div>
            <h3 className="text-[#0096d3] font-bold mb-4 text-sm uppercase tracking-wider">Connect on WeChat</h3>
            {/* REPLACE: Insert WeChat QR code image */}
            <div className="w-36 h-36 bg-white rounded-lg flex flex-col items-center justify-center p-2 mb-4 overflow-hidden">
              <img src="/v2/wechat-qr-placeholder.webp" 
                alt="WeChat QR Code" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Bilingual services in English and Mandarin (普通话).
            </p>
            <div className="mt-6">
              <p className="text-xs text-gray-300 italic">
                Written by Shine Yin Teoh, Certified Practising Speech Pathologist
              </p>
              <Link href="/about" className="text-xs text-[#0096d3] hover:underline mt-1 inline-block">
                Learn about Shine&apos;s qualifications
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2a4a7a] pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>&copy; 2026 Shine and Speak. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/fees" className="hover:text-[#0096d3] transition-colors">Fees</Link>
            <Link href="/how-it-works" className="hover:text-[#0096d3] transition-colors">How It Works</Link>
            <Link href="/zh" className="hover:text-[#0096d3] transition-colors">中文</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
