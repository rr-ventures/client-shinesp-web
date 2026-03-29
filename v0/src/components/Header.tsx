'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { PHONE_DISPLAY } from '@/lib/schema';

const services = [
  { label: 'Paediatric Speech Therapy', href: '/paediatric-speech-therapy-sydney-nsw' },
  { label: 'Adult Speech Therapy', href: '/adult-speech-therapy-sydney-nsw' },
  { label: 'Mobile Speech Therapy', href: '/mobile-speech-therapy-sydney-nsw' },
  { label: 'Telehealth Speech Therapy', href: '/telehealth-speech-therapy-sydney-nsw' },
  { label: 'School-Based Therapy', href: '/school-based-speech-therapy-sydney-nsw' },
  { label: 'Assessments', href: '/speech-therapy-assessment-sydney-nsw' },
  { label: 'Reports', href: '/speech-therapy-reports-sydney-nsw' },
  { label: 'Parent & Support Worker Coaching', href: '/parent-coaching-speech-therapy-sydney-nsw' },
];

const funding = [
  { label: 'NDIS Speech Therapy', href: '/ndis-speech-therapy-sydney-nsw' },
  { label: 'Medicare Rebates', href: '/medicare-speech-therapy-sydney-nsw' },
  { label: 'Private Pay', href: '/private-speech-therapy-sydney-nsw' },
  { label: 'Home Care Packages', href: '/home-care-package-speech-therapy-sydney-nsw' },
  { label: 'DVA', href: '/dva-speech-therapy-sydney-nsw' },
  { label: 'Fees & Pricing', href: '/fees' },
];

const areas = [
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

function DropdownMenu({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="absolute top-full left-0 bg-white shadow-xl rounded-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 min-w-56 py-2">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F0F4F8] hover:text-[#1B365D] whitespace-nowrap"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileFunding, setMobileFunding] = useState(false);
  const [mobileAreas, setMobileAreas] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        {/* Top bar */}
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" aria-label="Shine and Speak — Home">
            <Image
              src="/shine-and-speak-logo-horizontal-transparent.png"
              alt="Shine and Speak Speech Pathology Sydney"
              width={200}
              height={56}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop top-right */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:0421608819" className="text-[#1B365D] font-semibold text-sm hover:text-[#E8A84C] transition">
              📞 {PHONE_DISPLAY}
            </a>
            <Link
              href="/book"
              className="bg-[#E8A84C] text-white px-5 py-2 rounded-md font-bold text-sm hover:bg-amber-600 transition"
            >
              Book a Free Discovery Call
            </Link>
            <Link
              href="/refer-a-client"
              className="border-2 border-[#1B365D] text-[#1B365D] px-5 py-2 rounded-md font-bold text-sm hover:bg-[#1B365D] hover:text-white transition"
            >
              Refer a Client
            </Link>
            <Link href="/zh" className="text-sm font-medium text-[#1B365D] hover:text-[#E8A84C] transition">
              EN / 中文
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            <span className={`block h-0.5 w-6 bg-[#1B365D] transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[#1B365D] transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[#1B365D] transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Desktop nav bar */}
        <nav className="bg-[#1B365D] text-white hidden md:block" aria-label="Main navigation">
          <div className="container mx-auto px-4 flex items-stretch">
            {/* Services dropdown */}
            <div className="relative group">
              <button className="px-4 py-3 hover:text-[#E8A84C] transition flex items-center gap-1 text-sm font-medium h-full">
                Services <span className="text-xs">▾</span>
              </button>
              <DropdownMenu items={services} />
            </div>

            <Link href="/how-it-works" className="px-4 py-3 hover:text-[#E8A84C] transition text-sm font-medium">
              How It Works
            </Link>

            {/* Funding dropdown */}
            <div className="relative group">
              <button className="px-4 py-3 hover:text-[#E8A84C] transition flex items-center gap-1 text-sm font-medium h-full">
                Funding &amp; Fees <span className="text-xs">▾</span>
              </button>
              <DropdownMenu items={funding} />
            </div>

            <Link href="/about" className="px-4 py-3 hover:text-[#E8A84C] transition text-sm font-medium">
              About
            </Link>

            {/* Areas dropdown */}
            <div className="relative group">
              <button className="px-4 py-3 hover:text-[#E8A84C] transition flex items-center gap-1 text-sm font-medium h-full">
                Areas <span className="text-xs">▾</span>
              </button>
              <DropdownMenu items={areas} />
            </div>

            <Link href="/contact" className="px-4 py-3 hover:text-[#E8A84C] transition text-sm font-medium">
              Contact
            </Link>
          </div>
        </nav>

        {/* Mobile nav drawer */}
        {mobileOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 shadow-lg" aria-label="Mobile navigation">
            <div className="px-4 py-4 space-y-3">
              {/* Mobile CTAs */}
              <Link
                href="/book"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-[#E8A84C] text-white px-4 py-3 rounded-md font-bold"
              >
                Book a Free Discovery Call
              </Link>
              <Link
                href="/refer-a-client"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center border-2 border-[#1B365D] text-[#1B365D] px-4 py-3 rounded-md font-bold"
              >
                Refer a Client
              </Link>
              <a href="tel:0421608819" className="block text-center text-[#1B365D] font-semibold py-2">
                📞 {PHONE_DISPLAY}
              </a>

              <hr className="border-gray-200" />

              {/* Services accordion */}
              <button
                onClick={() => setMobileServices(!mobileServices)}
                className="flex justify-between w-full text-[#1B365D] font-semibold py-2"
              >
                Services <span>{mobileServices ? '▲' : '▼'}</span>
              </button>
              {mobileServices && (
                <div className="pl-4 space-y-2">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="block text-sm text-gray-700 py-1 hover:text-[#1B365D]">
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/how-it-works" onClick={() => setMobileOpen(false)} className="block text-[#1B365D] font-semibold py-2">
                How It Works
              </Link>

              {/* Funding accordion */}
              <button
                onClick={() => setMobileFunding(!mobileFunding)}
                className="flex justify-between w-full text-[#1B365D] font-semibold py-2"
              >
                Funding &amp; Fees <span>{mobileFunding ? '▲' : '▼'}</span>
              </button>
              {mobileFunding && (
                <div className="pl-4 space-y-2">
                  {funding.map((f) => (
                    <Link key={f.href} href={f.href} onClick={() => setMobileOpen(false)} className="block text-sm text-gray-700 py-1 hover:text-[#1B365D]">
                      {f.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-[#1B365D] font-semibold py-2">
                About
              </Link>

              {/* Areas accordion */}
              <button
                onClick={() => setMobileAreas(!mobileAreas)}
                className="flex justify-between w-full text-[#1B365D] font-semibold py-2"
              >
                Areas <span>{mobileAreas ? '▲' : '▼'}</span>
              </button>
              {mobileAreas && (
                <div className="pl-4 space-y-2">
                  {areas.map((a) => (
                    <Link key={a.href} href={a.href} onClick={() => setMobileOpen(false)} className="block text-sm text-gray-700 py-1 hover:text-[#1B365D]">
                      {a.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-[#1B365D] font-semibold py-2">
                Contact
              </Link>
              <Link href="/zh" onClick={() => setMobileOpen(false)} className="block text-[#1B365D] py-2">
                EN / 中文
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
