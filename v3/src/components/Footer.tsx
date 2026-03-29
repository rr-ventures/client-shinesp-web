import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

        {/* Column 1: Brand + attribution */}
        <div>
          <Image
            src="/shine-and-speak-logo-stacked-transparent.png"
            alt="Shine and Speak Logo"
            width={120}
            height={96}
            className="mb-4"
          />
          <p className="text-blue-100 text-sm mb-3">
            Personalised speech therapy delivered to your home, school, or online. Bilingual English & Mandarin. Serving Inner West Sydney.
          </p>
          <p className="text-xs text-blue-200">
            Written by Shine Teoh, Certified Practising Speech Pathologist.{" "}
            <Link href="/about" className="underline hover:text-golden-amber">
              About Shine
            </Link>
          </p>
        </div>

        {/* Column 2: Services + Funding */}
        <div>
          <h3 className="text-base font-bold mb-3 text-golden-amber">Services</h3>
          <ul className="space-y-1 text-sm text-blue-100">
            <li><Link href="/paediatric-speech-therapy-sydney-nsw" className="hover:text-golden-amber transition">Paediatric Speech Therapy</Link></li>
            <li><Link href="/adult-speech-therapy-sydney-nsw" className="hover:text-golden-amber transition">Adult Speech Therapy</Link></li>
            <li><Link href="/mobile-speech-therapy-sydney-nsw" className="hover:text-golden-amber transition">Mobile Speech Therapy</Link></li>
            <li><Link href="/telehealth-speech-therapy-sydney-nsw" className="hover:text-golden-amber transition">Telehealth</Link></li>
            <li><Link href="/school-based-speech-therapy-sydney-nsw" className="hover:text-golden-amber transition">School-Based Therapy</Link></li>
            <li><Link href="/speech-therapy-assessment-sydney-nsw" className="hover:text-golden-amber transition">Assessments</Link></li>
          </ul>
          <h3 className="text-base font-bold mt-5 mb-3 text-golden-amber">Funding</h3>
          <ul className="space-y-1 text-sm text-blue-100">
            <li><Link href="/ndis-speech-therapy-sydney-nsw" className="hover:text-golden-amber transition">NDIS Speech Therapy</Link></li>
            <li><Link href="/medicare-speech-therapy-sydney-nsw" className="hover:text-golden-amber transition">Medicare Rebates</Link></li>
            <li><Link href="/private-speech-therapy-sydney-nsw" className="hover:text-golden-amber transition">Private Pay</Link></li>
            <li><Link href="/fees" className="hover:text-golden-amber transition">Fees & Pricing</Link></li>
          </ul>
        </div>

        {/* Column 3: Complete suburb list */}
        <div>
          <h3 className="text-base font-bold mb-3 text-golden-amber">Service Areas</h3>
          <ul className="space-y-1 text-sm text-blue-100">
            <li><Link href="/speech-pathologist-arncliffe-nsw" className="hover:text-golden-amber transition">Arncliffe</Link></li>
            <li><Link href="/speech-pathologist-burwood-nsw" className="hover:text-golden-amber transition">Burwood</Link></li>
            <li><Link href="/speech-pathologist-hurstville-nsw" className="hover:text-golden-amber transition">Hurstville</Link></li>
            <li><Link href="/speech-pathologist-strathfield-nsw" className="hover:text-golden-amber transition">Strathfield</Link></li>
            <li><Link href="/speech-pathologist-canterbury-bankstown-nsw" className="hover:text-golden-amber transition">Canterbury-Bankstown</Link></li>
            <li><Link href="/speech-pathologist-campsie-nsw" className="hover:text-golden-amber transition">Campsie</Link></li>
            <li><Link href="/speech-pathologist-rockdale-nsw" className="hover:text-golden-amber transition">Rockdale</Link></li>
            <li><Link href="/speech-pathologist-kogarah-nsw" className="hover:text-golden-amber transition">Kogarah</Link></li>
            <li><Link href="/speech-pathologist-marrickville-nsw" className="hover:text-golden-amber transition">Marrickville</Link></li>
            <li><Link href="/speech-pathologist-inner-west-sydney-nsw" className="hover:text-golden-amber transition">Inner West Sydney</Link></li>
            <li><Link href="/speech-pathologist-st-george-nsw" className="hover:text-golden-amber transition">St George</Link></li>
            <li><Link href="/telehealth-speech-therapy-sydney-nsw" className="hover:text-golden-amber transition">Telehealth Australia-wide</Link></li>
          </ul>
        </div>

        {/* Column 4: Connect + WeChat */}
        <div>
          <h3 className="text-base font-bold mb-3 text-golden-amber">Contact</h3>
          <ul className="space-y-2 text-sm text-blue-100 mb-5">
            <li>
              <a href="tel:+61421608819" className="hover:text-golden-amber transition">📞 0421 608 819</a>
            </li>
            <li>
              <a href="mailto:admin@shineandspeak.com.au" className="hover:text-golden-amber transition">✉️ admin@shineandspeak.com.au</a>
            </li>
            <li>
              <a href="https://wa.me/61421608819" target="_blank" rel="noopener noreferrer" className="hover:text-golden-amber transition">💬 WhatsApp</a>
            </li>
          </ul>

          <h3 className="text-base font-bold mb-3 text-golden-amber">Follow Us</h3>
          <div className="flex gap-3 mb-5 text-sm">
            {/* REPLACE: Add real LinkedIn URL */}
            <a href="https://www.linkedin.com/company/shine-and-speak" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-golden-amber transition">LinkedIn</a>
            {/* REPLACE: Add real Facebook URL */}
            <a href="https://www.facebook.com/shineandspeak" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-golden-amber transition">Facebook</a>
            {/* REPLACE: Add real Instagram URL */}
            <a href="https://www.instagram.com/shineandspeak" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-golden-amber transition">Instagram</a>
          </div>

          {/* WeChat QR placeholder */}
          <div className="bg-white p-3 inline-block rounded-lg">
            {/* REPLACE: Insert WeChat QR code image */}
            <div className="w-24 h-24 bg-gray-200 flex flex-col items-center justify-center text-navy-blue text-xs text-center rounded p-1">
              <span className="text-lg mb-1">🟩</span>
              <span>Scan to add on WeChat</span>
            </div>
          </div>

          <div className="mt-4 text-xs text-blue-200 space-y-1">
            <p>Certified Practising Speech Pathologist</p>
            <p>NDIS Registered Provider</p>
            <p>{/* PLACEHOLDER: NDIS Provider Number */}</p>
            <p>Medicare Registered Provider</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-4 pt-6 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-blue-300">
        <p>© 2026 Shine and Speak. All rights reserved.</p>
        <p>ABN: {/* PLACEHOLDER: ABN */}</p>
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-golden-amber transition">About</Link>
          <Link href="/how-it-works" className="hover:text-golden-amber transition">How It Works</Link>
          <Link href="/contact" className="hover:text-golden-amber transition">Contact</Link>
          <Link href="/refer-a-client" className="hover:text-golden-amber transition">Refer a Client</Link>
        </div>
      </div>
    </footer>
  );
}
