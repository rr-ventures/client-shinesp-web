import Link from 'next/link';
import Image from 'next/image';

const suburbLinks = [
  { href: '/speech-pathologist-arncliffe-nsw', label: 'Arncliffe' },
  { href: '/speech-pathologist-burwood-nsw', label: 'Burwood' },
  { href: '/speech-pathologist-hurstville-nsw', label: 'Hurstville' },
  { href: '/speech-pathologist-strathfield-nsw', label: 'Strathfield' },
  { href: '/speech-pathologist-campsie-nsw', label: 'Campsie' },
  { href: '/speech-pathologist-rockdale-nsw', label: 'Rockdale' },
  { href: '/speech-pathologist-kogarah-nsw', label: 'Kogarah' },
  { href: '/speech-pathologist-marrickville-nsw', label: 'Marrickville' },
  { href: '/speech-pathologist-canterbury-bankstown-nsw', label: 'Canterbury-Bankstown' },
  { href: '/speech-pathologist-inner-west-sydney-nsw', label: 'Inner West Sydney' },
  { href: '/speech-pathologist-st-george-nsw', label: 'St George' },
  { href: '/telehealth-speech-therapy-sydney-nsw', label: 'Telehealth Australia-wide' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 mt-auto relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 blur-[100px] rounded-full"></div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">

          {/* Brand + Contact */}
          <div>
            <Image
              src="/v1/shine-and-speak-logo-stacked-transparent.png"
              alt="Shine and Speak"
              width={160}
              height={90}
              className="mb-8 brightness-0 invert opacity-90"
            />
            <p className="text-white/80 mb-8 text-sm leading-loose font-light">
              Personalised speech therapy delivered to your home, school, or online. Bilingual English &amp; Mandarin.
            </p>
            <div className="space-y-4 text-white/80 text-sm font-light">
              <p className="flex items-center gap-3"><span className="text-secondary">📞</span> <a href="tel:0421608819" className="hover:text-secondary transition-colors">0421 608 819</a></p>
              <p className="flex items-center gap-3"><span className="text-secondary">✉️</span> <a href="mailto:admin@shineandspeak.com.au" className="hover:text-secondary transition-colors">admin@shineandspeak.com.au</a></p>
            </div>

            {/* Social media links */}
            <div className="flex gap-3 mt-6">
              {/* REPLACE: Update LinkedIn URL to real profile — e.g. https://www.linkedin.com/in/shine-teoh/ */}
              <a
                href="https://www.linkedin.com/in/shine-teoh/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shine Teoh on LinkedIn"
                className="bg-white/10 hover:bg-secondary transition-colors p-2 rounded-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* REPLACE: Update Facebook URL to real page — e.g. https://www.facebook.com/shineandspeak */}
              <a
                href="https://www.facebook.com/shineandspeak"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shine and Speak on Facebook"
                className="bg-white/10 hover:bg-secondary transition-colors p-2 rounded-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* REPLACE: Update Instagram URL to real account — e.g. https://www.instagram.com/shineandspeak */}
              <a
                href="https://www.instagram.com/shineandspeak"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shine and Speak on Instagram"
                className="bg-white/10 hover:bg-secondary transition-colors p-2 rounded-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/61400000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Shine and Speak on WhatsApp"
                className="bg-white/10 hover:bg-secondary transition-colors p-2 rounded-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white tracking-wide">Services</h4>
            <ul className="space-y-3.5 text-white/80 text-sm font-light">
              <li><Link href="/paediatric-speech-therapy-sydney-nsw" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Paediatric Speech Therapy</Link></li>
              <li><Link href="/adult-speech-therapy-sydney-nsw" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Adult Speech Therapy</Link></li>
              <li><Link href="/speech-therapy-autism-sydney-nsw" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Autism Support</Link></li>
              <li><Link href="/speech-therapy-language-delay-sydney-nsw" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Language Delay</Link></li>
              <li><Link href="/speech-therapy-speech-sounds-sydney-nsw" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Speech Sounds</Link></li>
              <li><Link href="/speech-therapy-literacy-sydney-nsw" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Literacy &amp; Reading</Link></li>
              <li><Link href="/mobile-speech-therapy-sydney-nsw" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Mobile Therapy</Link></li>
              <li><Link href="/telehealth-speech-therapy-sydney-nsw" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Telehealth</Link></li>
            </ul>
            <h4 className="text-lg font-serif font-bold mt-8 mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-3.5 text-white/80 text-sm font-light">
              <li><Link href="/about" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">About Shine Teoh</Link></li>
              <li><Link href="/how-it-works" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">How It Works</Link></li>
              <li><Link href="/ndis-speech-therapy-sydney-nsw" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">NDIS Speech Therapy</Link></li>
              <li><Link href="/medicare-speech-therapy-sydney-nsw" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Medicare Rebates</Link></li>
              <li><Link href="/fees" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Fees &amp; Funding</Link></li>
              <li><Link href="/refer-a-client" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Refer a Client</Link></li>
              <li><Link href="/contact" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Contact</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white tracking-wide">Service Areas</h4>
            <ul className="space-y-3.5 text-white/80 text-sm font-light">
              {suburbLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-secondary hover:translate-x-1 inline-block transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Badges + WeChat */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white tracking-wide">Accreditations</h4>
            <div className="space-y-3 mb-10">
              <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm font-light text-white flex items-center gap-3 hover:bg-white/10 transition-colors">
                <span className="text-secondary">✓</span> Speech Pathology Australia (CPSP)
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm font-light text-white flex items-center gap-3 hover:bg-white/10 transition-colors">
                <span className="text-secondary">✓</span> NDIS Registered Provider
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm font-light text-white flex items-center gap-3 hover:bg-white/10 transition-colors">
                <span className="text-secondary">✓</span> Medicare Provider
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm font-light text-white flex items-center gap-3 hover:bg-white/10 transition-colors">
                <span className="text-secondary">✓</span> Hanen Certified
              </div>
            </div>

            {/* WeChat QR Placeholder */}
            <div>
              <p className="text-sm font-bold text-white mb-4 tracking-wide">WeChat / 微信</p>
              {/* REPLACE: Insert WeChat QR code image here — replace the placeholder box with <Image> tag */}
              <div className="bg-white p-2 rounded-2xl w-32 h-32 shadow-lg inline-block">
                <img src="/v1/wechat-qr-placeholder.webp" alt="WeChat QR Code" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-white/60 font-light">
            <div className="flex flex-wrap gap-x-8 gap-y-2 items-center">
              <span>© 2026 Shine and Speak</span>
              {/* REPLACE: Update ABN once registered — format: ABN XX XXX XXX XXX */}
              <span>ABN: XX XXX XXX XXX</span>
              {/* REPLACE: Update NDIS provider number once registered */}
              <span>NDIS Provider: XXXXXXXXX</span>
            </div>
            <p>
              Written by{' '}
              <Link href="/about" className="text-white hover:text-secondary underline decoration-white/30 underline-offset-4 transition-colors font-medium">
                Shine Teoh
              </Link>
              , Certified Practising Speech Pathologist
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
