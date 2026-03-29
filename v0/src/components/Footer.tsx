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
    <footer className="bg-[#1B365D] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div>
            <Image
              src="/shine-and-speak-logo-stacked-transparent.png"
              alt="Shine and Speak Speech Pathology"
              width={140}
              height={140}
              className="mb-4 bg-white p-2 rounded-lg object-contain"
            />
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Mobile and telehealth speech pathology across Inner West Sydney and Australia-wide.
            </p>

            {/* Trust badges */}
            <div className="space-y-1 text-xs font-semibold text-gray-300 mb-4">
              <div>✓ Certified Practising Speech Pathologist (CPSP)</div>
              <div>✓ NDIS Registered Provider</div>
              <div>✓ Medicare Provider</div>
            </div>

            {/* Social media links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/shineandspeak" /* REPLACE: real LinkedIn URL */
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#E8A84C] transition text-sm"
                aria-label="Shine and Speak on LinkedIn"
              >
                LinkedIn
              </a>
              <span className="text-gray-500">·</span>
              <a
                href="https://www.facebook.com/shineandspeak" /* REPLACE: real Facebook URL */
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#E8A84C] transition text-sm"
                aria-label="Shine and Speak on Facebook"
              >
                Facebook
              </a>
              <span className="text-gray-500">·</span>
              <a
                href="https://www.instagram.com/shineandspeak" /* REPLACE: real Instagram URL */
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#E8A84C] transition text-sm"
                aria-label="Shine and Speak on Instagram"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-[#E8A84C] mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/paediatric-speech-therapy-sydney-nsw" className="hover:text-white transition">Paediatric Speech Therapy</Link></li>
              <li><Link href="/adult-speech-therapy-sydney-nsw" className="hover:text-white transition">Adult Speech Therapy</Link></li>
              <li><Link href="/mobile-speech-therapy-sydney-nsw" className="hover:text-white transition">Mobile Speech Therapy</Link></li>
              <li><Link href="/telehealth-speech-therapy-sydney-nsw" className="hover:text-white transition">Telehealth Speech Therapy</Link></li>
              <li><Link href="/ndis-speech-therapy-sydney-nsw" className="hover:text-white transition">NDIS Speech Therapy</Link></li>
              <li><Link href="/medicare-speech-therapy-sydney-nsw" className="hover:text-white transition">Medicare Rebates</Link></li>
              <li><Link href="/fees" className="hover:text-white transition">Fees &amp; Pricing</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/refer-a-client" className="hover:text-white transition">Refer a Client</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/zh" className="hover:text-white transition">中文页面</Link></li>
            </ul>
          </div>

          {/* Areas Served — full list, visible for SEO */}
          <div>
            <h3 className="font-bold text-[#E8A84C] mb-4">Areas Served</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {allSuburbs.map((suburb) => (
                <li key={suburb.href}>
                  <Link href={suburb.href} className="hover:text-white transition">
                    {suburb.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Info */}
          <div>
            <h3 className="font-bold text-[#E8A84C] mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li>
                <a href="tel:0421608819" className="hover:text-white transition">
                  📞 {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition break-all">
                  ✉️ {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/61421608819"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  💬 WhatsApp Us
                </a>
              </li>
            </ul>

            {/* WeChat QR placeholder */}
            <div className="bg-white/10 border border-white/20 rounded-lg p-3 text-center mb-6 w-32">
              {/* REPLACE: Insert WeChat QR code image */}
              <div className="bg-gray-400/30 w-full aspect-square rounded flex items-center justify-center mb-2">
                <span className="text-xs text-gray-300">QR</span>
              </div>
              <p className="text-xs text-gray-300">Scan to add on WeChat</p>
            </div>

            {/* Provider numbers */}
            <div className="text-xs text-gray-400 space-y-1">
              <p>ABN: {/* PLACEHOLDER: ABN */}<span className="italic">Coming soon</span></p>
              <p>NDIS Provider No: {/* PLACEHOLDER: NDIS Provider Number */}<span className="italic">Coming soon</span></p>
            </div>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        {/* Footer bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2026 Shine and Speak. All rights reserved.</p>
          <p>
            <Link href="/about" className="text-gray-300 hover:text-white transition underline">
              Written by a Certified Practising Speech Pathologist
            </Link>
          </p>
          <p>Inner West Sydney &amp; Telehealth Australia-wide</p>
        </div>
      </div>
    </footer>
  );
}
