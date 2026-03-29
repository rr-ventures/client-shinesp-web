import Link from 'next/link';
import Image from 'next/image';
import { PHONE_DISPLAY, EMAIL } from '@/lib/schema';

const allSuburbs = [
  { label: 'Arncliffe', href: '/speech-pathologist-arncliffe-nsw' },
  { label: 'Burwood', href: '/speech-pathologist-burwood-nsw' },
  { label: 'Hurstville', href: '/speech-pathologist-hurstville-nsw' },
  { label: 'Strathfield', href: '/speech-pathologist-strathfield-nsw' },
  { label: 'Canterbury-Bankstown', href: '/speech-pathologist-canterbury-bankstown-nsw' },
  { label: 'Campsie', href: '/speech-pathologist-campsie-nsw' },
  { label: 'Rockdale', href: '/speech-pathologist-rockdale-nsw' },
  { label: 'Kogarah', href: '/speech-pathologist-kogarah-nsw' },
  { label: 'Marrickville', href: '/speech-pathologist-marrickville-nsw' },
  { label: 'Inner West Sydney', href: '/speech-pathologist-inner-west-sydney-nsw' },
  { label: 'St George', href: '/speech-pathologist-st-george-nsw' },
  { label: 'Telehealth Australia-wide', href: '/telehealth-speech-therapy-sydney-nsw' },
];

export default function Footer() {
  return (
    <footer className="bg-[#3f3a7d] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div>
            <Image
              src="/shine-and-speak-logo-stacked-transparent.png"
              alt="Shine and Speak Speech Pathology"
              width={160}
              height={160}
              className="mb-6 bg-white p-3 rounded-xl object-contain shadow-lg"
            />
            <p className="text-sm text-white/80 mb-6 font-light leading-relaxed">
              Mobile and telehealth speech pathology across Inner West Sydney and Australia-wide.
            </p>

            {/* Trust badges */}
            <div className="space-y-2 text-xs font-medium text-white/90 mb-8">
              <div className="flex items-center gap-2"><span className="text-[#5c54d1]">✓</span> Certified Practising Speech Pathologist (CPSP)</div>
              <div className="flex items-center gap-2"><span className="text-[#5c54d1]">✓</span> NDIS Registered Provider</div>
              <div className="flex items-center gap-2"><span className="text-[#5c54d1]">✓</span> Medicare Provider</div>
            </div>

            {/* Social media links */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/shineandspeak" /* REPLACE: real LinkedIn URL */
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#5c54d1] transition-colors text-sm font-medium"
                aria-label="Shine and Speak on LinkedIn"
              >
                LinkedIn
              </a>
              <span className="text-white/20">·</span>
              <a
                href="https://www.facebook.com/shineandspeak" /* REPLACE: real Facebook URL */
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#5c54d1] transition-colors text-sm font-medium"
                aria-label="Shine and Speak on Facebook"
              >
                Facebook
              </a>
              <span className="text-white/20">·</span>
              <a
                href="https://www.instagram.com/shineandspeak" /* REPLACE: real Instagram URL */
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#5c54d1] transition-colors text-sm font-medium"
                aria-label="Shine and Speak on Instagram"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-medium text-[#5c54d1] mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white/80 font-light">
              <li><Link href="/paediatric-speech-therapy-sydney-nsw" className="hover:text-white hover:translate-x-1 inline-block transition-all">Paediatric Speech Therapy</Link></li>
              <li><Link href="/adult-speech-therapy-sydney-nsw" className="hover:text-white hover:translate-x-1 inline-block transition-all">Adult Speech Therapy</Link></li>
              <li><Link href="/mobile-speech-therapy-sydney-nsw" className="hover:text-white hover:translate-x-1 inline-block transition-all">Mobile Speech Therapy</Link></li>
              <li><Link href="/telehealth-speech-therapy-sydney-nsw" className="hover:text-white hover:translate-x-1 inline-block transition-all">Telehealth Speech Therapy</Link></li>
              <li><Link href="/ndis-speech-therapy-sydney-nsw" className="hover:text-white hover:translate-x-1 inline-block transition-all">NDIS Speech Therapy</Link></li>
              <li><Link href="/medicare-speech-therapy-sydney-nsw" className="hover:text-white hover:translate-x-1 inline-block transition-all">Medicare Rebates</Link></li>
              <li><Link href="/fees" className="hover:text-white hover:translate-x-1 inline-block transition-all">Fees &amp; Pricing</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white hover:translate-x-1 inline-block transition-all">How It Works</Link></li>
              <li><Link href="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all">About Us</Link></li>
              <li><Link href="/refer-a-client" className="hover:text-white hover:translate-x-1 inline-block transition-all">Refer a Client</Link></li>
              <li><Link href="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">Contact</Link></li>
              <li><Link href="/zh" className="hover:text-white hover:translate-x-1 inline-block transition-all">中文页面</Link></li>
            </ul>
          </div>

          {/* Areas Served — full list, visible for SEO */}
          <div>
            <h3 className="font-serif text-xl font-medium text-[#5c54d1] mb-6">Areas Served</h3>
            <ul className="space-y-3 text-sm text-white/80 font-light">
              {allSuburbs.map((suburb) => (
                <li key={suburb.href}>
                  <Link href={suburb.href} className="hover:text-white hover:translate-x-1 inline-block transition-all">
                    {suburb.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Info */}
          <div>
            <h3 className="font-serif text-xl font-medium text-[#5c54d1] mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-white/80 font-light mb-8">
              <li>
                <a href="tel:0421608819" className="hover:text-white transition-colors flex items-center gap-3">
                  <span className="text-lg">📞</span> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors flex items-center gap-3 break-all">
                  <span className="text-lg">✉️</span> {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/61421608819"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-3"
                >
                  <span className="text-lg">💬</span> WhatsApp Us
                </a>
              </li>
            </ul>

            {/* WeChat QR placeholder */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center mb-8 w-36 backdrop-blur-sm">
              <Image 
                src="/wechat-qr-placeholder.webp" 
                alt="WeChat QR Code" 
                width={120} 
                height={120} 
                className="w-full aspect-square rounded-lg mb-3 object-cover bg-white"
              />
              <p className="text-xs text-white/70 font-medium">Scan to add on WeChat</p>
            </div>

            {/* Provider numbers */}
            <div className="text-xs text-white/40 space-y-2 font-light">
              <p>ABN: {/* PLACEHOLDER: ABN */}<span className="italic">Coming soon</span></p>
              <p>NDIS Provider No: {/* PLACEHOLDER: NDIS Provider Number */}<span className="italic">Coming soon</span></p>
            </div>
          </div>
        </div>

        <hr className="border-white/10 my-10" />

        {/* Footer bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/50 font-light">
          <p>© 2026 Shine and Speak. All rights reserved.</p>
          <p>
            <Link href="/about" className="hover:text-white transition-colors underline decoration-white/20 hover:decoration-white">
              Written by Shine Yin Teoh, Certified Practising Speech Pathologist
            </Link>
          </p>
          <p>Inner West Sydney &amp; Telehealth Australia-wide</p>
        </div>
      </div>
    </footer>
  );
}
