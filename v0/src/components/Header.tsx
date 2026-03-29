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
    <div className="absolute top-full left-0 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-56 py-3 mt-1">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-5 py-2.5 text-sm text-slate-600 hover:bg-[#FAFAF8] hover:text-[#C89B66] whitespace-nowrap transition-colors"
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
        <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center bg-white">
          <Link href="/" aria-label="Shine and Speak — Home">
            <Image
              src="/v0/shine-and-speak-logo-horizontal-transparent.png"
              alt="Shine and Speak Speech Pathology Sydney"
              width={220}
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop top-right */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:0421608819" className="text-[#112A46] font-medium text-sm hover:text-[#C89B66] transition-colors flex items-center gap-2">
              <span>📞</span> {PHONE_DISPLAY}
            </a>
            <Link
              href="/book"
              className="bg-[#C89B66] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-[#b58956] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              Book a Free Discovery Call
            </Link>
            <Link
              href="/refer-a-client"
              className="border border-[#112A46]/20 text-[#112A46] px-6 py-2.5 rounded-full font-medium text-sm hover:bg-[#112A46] hover:text-white transition-all duration-300"
            >
              Refer a Client
            </Link>
            <Link href="/zh" className="text-sm font-medium text-slate-500 hover:text-[#C89B66] transition-colors ml-2">
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
            <span className={`block h-0.5 w-6 bg-[#112A46] transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[#112A46] transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[#112A46] transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Desktop nav bar */}
        <nav className="bg-[#112A46] text-white hidden md:block" aria-label="Main navigation">
          <div className="container mx-auto px-4 lg:px-8 flex items-stretch">
            {/* Services dropdown */}
            <div className="relative group">
              <button className="px-5 py-3.5 hover:text-[#C89B66] transition-colors flex items-center gap-1.5 text-sm font-medium h-full tracking-wide">
                Services <span className="text-[10px] opacity-70">▼</span>
              </button>
              <DropdownMenu items={services} />
            </div>

            <Link href="/how-it-works" className="px-5 py-3.5 hover:text-[#C89B66] transition-colors text-sm font-medium tracking-wide">
              How It Works
            </Link>

            {/* Funding dropdown */}
            <div className="relative group">
              <button className="px-5 py-3.5 hover:text-[#C89B66] transition-colors flex items-center gap-1.5 text-sm font-medium h-full tracking-wide">
                Funding &amp; Fees <span className="text-[10px] opacity-70">▼</span>
              </button>
              <DropdownMenu items={funding} />
            </div>

            <Link href="/about" className="px-5 py-3.5 hover:text-[#C89B66] transition-colors text-sm font-medium tracking-wide">
              About
            </Link>

            {/* Areas dropdown */}
            <div className="relative group">
              <button className="px-5 py-3.5 hover:text-[#C89B66] transition-colors flex items-center gap-1.5 text-sm font-medium h-full tracking-wide">
                Areas <span className="text-[10px] opacity-70">▼</span>
              </button>
              <DropdownMenu items={areas} />
            </div>

            <Link href="/contact" className="px-5 py-3.5 hover:text-[#C89B66] transition-colors text-sm font-medium tracking-wide">
              Contact
            </Link>
          </div>
        </nav>

        {/* Mobile nav drawer */}
        {mobileOpen && (
          <nav className="md:hidden bg-white border-t border-slate-100 shadow-xl" aria-label="Mobile navigation">
            <div className="px-5 py-6 space-y-4">
              {/* Mobile CTAs */}
              <Link
                href="/book"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-[#C89B66] text-white px-5 py-3.5 rounded-full font-medium shadow-sm"
              >
                Book a Free Discovery Call
              </Link>
              <Link
                href="/refer-a-client"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center border border-[#112A46]/20 text-[#112A46] px-5 py-3.5 rounded-full font-medium"
              >
                Refer a Client
              </Link>
              <a href="tel:0421608819" className="block text-center text-[#112A46] font-medium py-2 flex items-center justify-center gap-2">
                <span>📞</span> {PHONE_DISPLAY}
              </a>

              <hr className="border-slate-100 my-4" />

              {/* Services accordion */}
              <button
                onClick={() => setMobileServices(!mobileServices)}
                className="flex justify-between w-full text-[#112A46] font-medium py-2.5"
              >
                Services <span className="text-xs opacity-60 mt-1">{mobileServices ? '▲' : '▼'}</span>
              </button>
              {mobileServices && (
                <div className="pl-4 space-y-3 mb-2">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="block text-sm text-slate-600 py-1 hover:text-[#C89B66]">
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/how-it-works" onClick={() => setMobileOpen(false)} className="block text-[#112A46] font-medium py-2.5">
                How It Works
              </Link>

              {/* Funding accordion */}
              <button
                onClick={() => setMobileFunding(!mobileFunding)}
                className="flex justify-between w-full text-[#112A46] font-medium py-2.5"
              >
                Funding &amp; Fees <span className="text-xs opacity-60 mt-1">{mobileFunding ? '▲' : '▼'}</span>
              </button>
              {mobileFunding && (
                <div className="pl-4 space-y-3 mb-2">
                  {funding.map((f) => (
                    <Link key={f.href} href={f.href} onClick={() => setMobileOpen(false)} className="block text-sm text-slate-600 py-1 hover:text-[#C89B66]">
                      {f.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-[#112A46] font-medium py-2.5">
                About
              </Link>

              {/* Areas accordion */}
              <button
                onClick={() => setMobileAreas(!mobileAreas)}
                className="flex justify-between w-full text-[#112A46] font-medium py-2.5"
              >
                Areas <span className="text-xs opacity-60 mt-1">{mobileAreas ? '▲' : '▼'}</span>
              </button>
              {mobileAreas && (
                <div className="pl-4 space-y-3 mb-2">
                  {areas.map((a) => (
                    <Link key={a.href} href={a.href} onClick={() => setMobileOpen(false)} className="block text-sm text-slate-600 py-1 hover:text-[#C89B66]">
                      {a.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-[#112A46] font-medium py-2.5">
                Contact
              </Link>
              <Link href="/zh" onClick={() => setMobileOpen(false)} className="block text-slate-500 font-medium py-2.5">
                EN / 中文
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
