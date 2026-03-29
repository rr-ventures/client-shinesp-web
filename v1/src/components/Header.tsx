'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Ear } from 'lucide-react';

const services = [
  { href: '/paediatric-speech-therapy-sydney-nsw', label: 'Paediatric Speech Therapy' },
  { href: '/adult-speech-therapy-sydney-nsw', label: 'Adult Speech Therapy' },
  { href: '/speech-therapy-autism-sydney-nsw', label: 'Autism & ASD' },
  { href: '/speech-therapy-adhd-sydney-nsw', label: 'ADHD & Attention' },
  { href: '/speech-therapy-language-delay-sydney-nsw', label: 'Language Delay' },
  { href: '/speech-therapy-speech-sounds-sydney-nsw', label: 'Speech Sounds' },
  { href: '/speech-therapy-stuttering-sydney-nsw', label: 'Stuttering & Fluency' },
  { href: '/speech-therapy-literacy-sydney-nsw', label: 'Literacy & Reading' },
  { href: '/mobile-speech-therapy-sydney-nsw', label: 'Mobile Therapy' },
  { href: '/telehealth-speech-therapy-sydney-nsw', label: 'Telehealth' },
  { href: '/school-based-speech-therapy-sydney-nsw', label: 'School-Based Therapy' },
  { href: '/parent-coaching-speech-therapy-sydney-nsw', label: 'Parent Coaching' },
];

const funding = [
  { href: '/ndis-speech-therapy-sydney-nsw', label: 'NDIS Speech Therapy' },
  { href: '/medicare-speech-therapy-sydney-nsw', label: 'Medicare Rebates' },
  { href: '/private-speech-therapy-sydney-nsw', label: 'Private Pay' },
  { href: '/home-care-package-speech-therapy-sydney-nsw', label: 'Home Care Packages' },
  { href: '/dva-speech-therapy-sydney-nsw', label: 'DVA' },
  { href: '/fees', label: 'Fees & Pricing' },
];

const areas = [
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
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_10px_rgba(27,54,93,0.02)] transition-all">
      <div className="container-custom py-4">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <Image
              src="/shine-and-speak-logo-horizontal-transparent.png"
              alt="Shine and Speak logo"
              width={200}
              height={54}
              className="h-12 w-auto group-hover:opacity-90 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop top-right */}
          <div className="hidden md:flex items-center gap-5">
            <a href="tel:0421608819" className="text-primary font-medium hover:text-secondary transition-colors text-sm flex items-center gap-2">
              <Ear size={16} /> 0421 608 819
            </a>
            <Link
              href="/book"
              className="btn-secondary text-sm px-6 py-2.5"
            >
              Book a Free Discovery Call
            </Link>
            <Link
              href="/refer-a-client"
              className="btn-outline text-sm px-6 py-2.5"
            >
              Refer a Client
            </Link>
            <Link href="/zh" className="text-sm font-medium text-gray-500 hover:text-primary transition-colors" lang="zh">
              中文
            </Link>
          </div>

          {/* Mobile top-right — both CTAs visible */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/book"
              className="btn-secondary text-xs px-4 py-2"
            >
              Book
            </Link>
            <Link
              href="/refer-a-client"
              className="btn-outline text-xs px-4 py-2"
            >
              Refer
            </Link>
            <button
              className="text-primary ml-2 p-1 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 mt-4 pt-4 border-t border-gray-50/50" aria-label="Main navigation">
          {/* Services dropdown */}
          <div className="relative group">
            <button className="font-medium text-primary hover:text-secondary flex items-center gap-1 text-sm">
              Services <ChevronDown size={14} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-xl p-3 hidden group-hover:block border border-gray-100 z-50">
              {services.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm rounded-lg hover:bg-accent hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/how-it-works" className="font-medium text-primary hover:text-secondary text-sm">
            How It Works
          </Link>

          {/* Funding dropdown */}
          <div className="relative group">
            <button className="font-medium text-primary hover:text-secondary flex items-center gap-1 text-sm">
              Funding &amp; Fees <ChevronDown size={14} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-xl p-3 hidden group-hover:block border border-gray-100 z-50">
              {funding.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm rounded-lg hover:bg-accent hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Areas dropdown */}
          <div className="relative group">
            <button className="font-medium text-primary hover:text-secondary flex items-center gap-1 text-sm">
              Areas <ChevronDown size={14} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-xl p-3 hidden group-hover:block border border-gray-100 z-50">
              {areas.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm rounded-lg hover:bg-accent hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/telehealth-speech-therapy-sydney-nsw"
                className="block px-3 py-2 text-sm rounded-lg hover:bg-accent hover:text-primary transition-colors"
              >
                Telehealth Australia-wide
              </Link>
            </div>
          </div>

          <Link href="/about" className="font-medium text-primary hover:text-secondary text-sm">
            About
          </Link>
          <Link href="/contact" className="font-medium text-primary hover:text-secondary text-sm">
            Contact
          </Link>
        </nav>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <nav
            className="md:hidden mt-3 pt-3 border-t border-gray-100 flex flex-col pb-4"
            aria-label="Mobile navigation"
          >
            {/* Services accordion */}
            <button
              className="flex items-center justify-between py-3 font-semibold text-primary border-b border-gray-50"
              onClick={() => toggleDropdown('services')}
            >
              Services <ChevronDown size={18} className={openDropdown === 'services' ? 'rotate-180' : ''} />
            </button>
            {openDropdown === 'services' && (
              <div className="pl-4 py-2 flex flex-col gap-1">
                {services.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-1.5 text-gray-700 hover:text-primary text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/how-it-works" className="py-3 font-semibold text-primary border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>
              How It Works
            </Link>

            {/* Funding accordion */}
            <button
              className="flex items-center justify-between py-3 font-semibold text-primary border-b border-gray-50"
              onClick={() => toggleDropdown('funding')}
            >
              Funding &amp; Fees <ChevronDown size={18} className={openDropdown === 'funding' ? 'rotate-180' : ''} />
            </button>
            {openDropdown === 'funding' && (
              <div className="pl-4 py-2 flex flex-col gap-1">
                {funding.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-1.5 text-gray-700 hover:text-primary text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Areas accordion */}
            <button
              className="flex items-center justify-between py-3 font-semibold text-primary border-b border-gray-50"
              onClick={() => toggleDropdown('areas')}
            >
              Areas <ChevronDown size={18} className={openDropdown === 'areas' ? 'rotate-180' : ''} />
            </button>
            {openDropdown === 'areas' && (
              <div className="pl-4 py-2 flex flex-col gap-1">
                {areas.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-1.5 text-gray-700 hover:text-primary text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/about" className="py-3 font-semibold text-primary border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="py-3 font-semibold text-primary border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>

            <div className="pt-4 flex flex-col gap-3">
              <a href="tel:0421608819" className="bg-primary text-white px-6 py-3 rounded-full font-bold text-center">
                📞 Call 0421 608 819
              </a>
              <Link href="/zh" className="text-center text-gray-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                中文 (Chinese)
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
