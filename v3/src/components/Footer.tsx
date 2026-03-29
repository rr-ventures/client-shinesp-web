import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-blue text-white pt-20 pb-8 border-t-4 border-golden-amber">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

        {/* Column 1: Brand + attribution */}
        <div className="space-y-6">
          <Image
            src="/v3/shine-and-speak-logo-stacked-transparent.png"
            alt="Shine and Speak Logo"
            width={160}
            height={128}
            className="mb-6 opacity-90 hover:opacity-100 transition-opacity"
          />
          <p className="text-blue-100/80 text-sm leading-relaxed">
            Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin. Serving Inner West Sydney.
          </p>
          <div className="pt-4 border-t border-white/10">
            <p className="text-xs text-blue-200/60 leading-relaxed">
              Written by Shine Teoh, Certified Practising Speech Pathologist.{" "}
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
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-golden-amber group-hover:text-navy-blue transition-colors">📞</span>
                0421 608 819
              </a>
            </li>
            <li>
              <a href="mailto:admin@shineandspeak.com.au" className="flex items-center gap-3 hover:text-golden-amber transition-colors group">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-golden-amber group-hover:text-navy-blue transition-colors">✉️</span>
                admin@shineandspeak.com.au
              </a>
            </li>
            <li>
              <a href="https://wa.me/61421608819" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-golden-amber transition-colors group">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-golden-amber group-hover:text-navy-blue transition-colors">💬</span>
                WhatsApp
              </a>
            </li>
          </ul>

          <h3 className="text-lg font-serif font-medium mb-6 text-white tracking-wide">Follow Us</h3>
          <div className="flex gap-4 mb-8 text-sm">
            {/* REPLACE: Add real LinkedIn URL */}
            <a href="https://www.linkedin.com/company/shine-and-speak" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-golden-amber hover:text-navy-blue transition-all">in</a>
            {/* REPLACE: Add real Facebook URL */}
            <a href="https://www.facebook.com/shineandspeak" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-golden-amber hover:text-navy-blue transition-all">f</a>
            {/* REPLACE: Add real Instagram URL */}
            <a href="https://www.instagram.com/shineandspeak" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-golden-amber hover:text-navy-blue transition-all">ig</a>
          </div>

          {/* WeChat QR placeholder */}
          <div className="bg-white/5 p-4 rounded-2xl inline-block border border-white/10 backdrop-blur-sm">
            <div className="relative w-28 h-28 bg-white rounded-xl overflow-hidden shadow-inner">
              <Image
                src="/v3/wechat-qr-placeholder.webp"
                alt="Scan to add on WeChat"
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="text-center mt-2 text-xs text-blue-100/80 font-medium">Scan to add on WeChat</div>
          </div>

          <div className="mt-8 text-xs text-blue-200/50 space-y-2 font-medium tracking-wide uppercase">
            <p>Certified Practising Speech Pathologist</p>
            <p>NDIS Registered Provider</p>
            <p>{/* PLACEHOLDER: NDIS Provider Number */}</p>
            <p>Medicare Registered Provider</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-4 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-blue-200/60">
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
