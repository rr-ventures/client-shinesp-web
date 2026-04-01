import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-blue text-white pt-20 pb-8 border-t-4 border-golden-amber">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

        {/* Column 1: Brand + attribution */}
        <div className="space-y-6">
          <Image
            src="/shine-and-speak-logo-stacked-transparent.png"
            alt="Shine and Speak Logo"
            width={160}
            height={128}
            className="mb-6 opacity-90 hover:opacity-100 transition-opacity brightness-0 invert"
          />
          <p className="text-blue-100/80 text-sm leading-relaxed">
            Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin. Serving Inner West Sydney.
          </p>
          <div className="pt-4 border-t border-white/10">
            <p className="text-xs text-blue-100/90 leading-relaxed">
              Written by Shine Yin Teoh, Certified Practising Speech Pathologist.{" "}
              <Link href="/about" className="text-golden-amber hover:text-white transition-colors underline-offset-4 hover:underline">
                About Shine
              </Link>
            </p>
          </div>
        </div>

        {/* Column 2: Services + Funding */}
        <div>
          <h3 className="text-lg font-serif font-medium mb-6 text-white tracking-wide">Services</h3>
          <ul className="space-y-3 text-sm text-blue-100/80">
            <li><Link href="/paediatric-speech-therapy-sydney-nsw" className="hover:text-golden-amber transition-colors">Paediatric Speech Therapy</Link></li>
            <li><Link href="/adult-speech-therapy-sydney-nsw" className="hover:text-golden-amber transition-colors">Adult Speech Therapy</Link></li>
            <li><Link href="/mobile-speech-therapy-sydney-nsw" className="hover:text-golden-amber transition-colors">Mobile Speech Therapy</Link></li>
            <li><Link href="/telehealth-speech-therapy-sydney-nsw" className="hover:text-golden-amber transition-colors">Telehealth</Link></li>
            <li><Link href="/school-based-speech-therapy-sydney-nsw" className="hover:text-golden-amber transition-colors">School-Based Therapy</Link></li>
            <li><Link href="/speech-therapy-assessment-sydney-nsw" className="hover:text-golden-amber transition-colors">Assessments</Link></li>
          </ul>
          <h3 className="text-lg font-serif font-medium mt-10 mb-6 text-white tracking-wide">Funding</h3>
          <ul className="space-y-3 text-sm text-blue-100/80">
            <li><Link href="/ndis-speech-therapy-sydney-nsw" className="hover:text-golden-amber transition-colors">NDIS Speech Therapy</Link></li>
            <li><Link href="/medicare-speech-therapy-sydney-nsw" className="hover:text-golden-amber transition-colors">Medicare Rebates</Link></li>
            <li><Link href="/private-speech-therapy-sydney-nsw" className="hover:text-golden-amber transition-colors">Private Pay</Link></li>
            <li><Link href="/fees" className="hover:text-golden-amber transition-colors">Fees & Pricing</Link></li>
          </ul>
        </div>

        {/* Column 3: Complete suburb list */}
        <div>
          <h3 className="text-lg font-serif font-medium mb-6 text-white tracking-wide">Service Areas</h3>
          <ul className="space-y-3 text-sm text-blue-100/80">
            <li><Link href="/speech-pathologist-arncliffe-nsw" className="hover:text-golden-amber transition-colors">Arncliffe</Link></li>
            <li><Link href="/speech-pathologist-burwood-nsw" className="hover:text-golden-amber transition-colors">Burwood</Link></li>
            <li><Link href="/speech-pathologist-hurstville-nsw" className="hover:text-golden-amber transition-colors">Hurstville</Link></li>
            <li><Link href="/speech-pathologist-strathfield-nsw" className="hover:text-golden-amber transition-colors">Strathfield</Link></li>
            <li><Link href="/speech-pathologist-canterbury-bankstown-nsw" className="hover:text-golden-amber transition-colors">Canterbury-Bankstown</Link></li>
            <li><Link href="/speech-pathologist-campsie-nsw" className="hover:text-golden-amber transition-colors">Campsie</Link></li>
            <li><Link href="/speech-pathologist-rockdale-nsw" className="hover:text-golden-amber transition-colors">Rockdale</Link></li>
            <li><Link href="/speech-pathologist-kogarah-nsw" className="hover:text-golden-amber transition-colors">Kogarah</Link></li>
            <li><Link href="/speech-pathologist-marrickville-nsw" className="hover:text-golden-amber transition-colors">Marrickville</Link></li>
            <li><Link href="/speech-pathologist-inner-west-sydney-nsw" className="hover:text-golden-amber transition-colors">Inner West Sydney</Link></li>
            <li><Link href="/speech-pathologist-st-george-nsw" className="hover:text-golden-amber transition-colors">St George</Link></li>
            <li><Link href="/telehealth-speech-therapy-sydney-nsw" className="hover:text-golden-amber transition-colors">Telehealth Australia-wide</Link></li>
          </ul>
        </div>

        {/* Column 4: Connect + WeChat */}
        <div>
          <h3 className="text-lg font-serif font-medium mb-6 text-white tracking-wide">Contact</h3>
          <ul className="space-y-4 text-sm text-blue-100/80 mb-10">
            <li>
              <a href="tel:+61421608819" className="flex items-center gap-3 hover:text-golden-amber transition-colors group">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-golden-amber group-hover:text-navy-blue transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                </span>
                0421 608 819
              </a>
            </li>
            <li>
              <a href="mailto:admin@shineandspeak.com.au" className="flex items-center gap-3 hover:text-golden-amber transition-colors group">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-golden-amber group-hover:text-navy-blue transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </span>
                admin@shineandspeak.com.au
              </a>
            </li>
            <li>
              <a href="https://wa.me/61421608819" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-golden-amber transition-colors group">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-golden-amber group-hover:text-navy-blue transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </span>
                WhatsApp
              </a>
            </li>
          </ul>

          <h3 className="text-lg font-serif font-medium mb-6 text-white tracking-wide">Follow Us</h3>
          <div className="flex gap-4 mb-8 text-sm">
            <a href="https://www.facebook.com/people/Shine-and-Speak-Speech-Pathology/61575483066471/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-golden-amber hover:text-navy-blue transition-all" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="https://www.instagram.com/shinenspeak" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-golden-amber hover:text-navy-blue transition-all" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
          </div>

          {/* WeChat QR */}
          <div className="bg-white/5 p-3 rounded-2xl inline-block border border-white/10 backdrop-blur-sm">
            <div className="relative w-36 h-36 bg-white rounded-xl overflow-hidden shadow-inner">
              <Image
                src="/wechat-qr.webp"
                alt="Scan to add Shine and Speak on WeChat"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="text-center mt-2 text-xs text-blue-100/80 font-medium tracking-wide">Scan to Add on WeChat</div>
          </div>

          <div className="mt-8 text-xs text-blue-100/80 space-y-2 font-medium tracking-wide uppercase">
            <p>Certified Practising Speech Pathologist</p>
            <p>NDIS Registered Provider</p>
            <p>{/* PLACEHOLDER: NDIS Provider Number */}</p>
            <p>Medicare Registered Provider</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-4 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-blue-100/80">
        <p>© 2026 Shine and Speak. All rights reserved.</p>
        <p>ABN: {/* PLACEHOLDER: ABN */}</p>
        <div className="flex gap-6 font-medium">
          <Link href="/about" className="hover:text-golden-amber transition-colors">About</Link>
          <Link href="/how-it-works" className="hover:text-golden-amber transition-colors">How It Works</Link>
          <Link href="/contact" className="hover:text-golden-amber transition-colors">Contact</Link>
          <Link href="/refer-a-client" className="hover:text-golden-amber transition-colors">Refer a Client</Link>
        </div>
      </div>
    </footer>
  );
}
