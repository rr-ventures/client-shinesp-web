"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const serviceLinks = [
  { label: 'Paediatric Speech Therapy', href: '/paediatric-speech-therapy-sydney-nsw' },
  { label: 'Adult Speech Therapy', href: '/adult-speech-therapy-sydney-nsw' },
  { label: 'Mobile Speech Therapy', href: '/mobile-speech-therapy-sydney-nsw' },
  { label: 'Telehealth Speech Therapy', href: '/telehealth-speech-therapy-sydney-nsw' },
  { label: 'School-Based Therapy', href: '/school-based-speech-therapy-sydney-nsw' },
  { label: 'Assessments', href: '/speech-therapy-assessment-sydney-nsw' },
  { label: 'Reports', href: '/speech-therapy-reports-sydney-nsw' },
  { label: 'Parent & Carer Coaching', href: '/parent-coaching-speech-therapy-sydney-nsw' },
];

const fundingLinks = [
  { label: 'NDIS Speech Therapy', href: '/ndis-speech-therapy-sydney-nsw' },
  { label: 'Medicare Rebates', href: '/medicare-speech-therapy-sydney-nsw' },
  { label: 'Private Pay', href: '/private-speech-therapy-sydney-nsw' },
  { label: 'Home Care Packages', href: '/home-care-package-speech-therapy-sydney-nsw' },
  { label: 'DVA', href: '/dva-speech-therapy-sydney-nsw' },
  { label: 'Fees & Pricing', href: '/fees' },
];

const areaLinks = [
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
];

function DropdownMenu({ label, links }: { label: string; links: { label: string; href: string }[] }) {
  return (
    <div className="relative group">
      <button
        className="flex items-center gap-1 text-[#1B365D] font-medium hover:text-[#E8A84C] transition-colors text-sm"
        aria-haspopup="true"
      >
        {label}
        <ChevronDown className="w-4 h-4 opacity-70" />
      </button>
      <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 z-50">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-4 py-2.5 text-sm text-[#1B365D] hover:bg-amber-50 hover:text-[#E8A84C] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  const toggleMobileSection = (section: string) => {
    setOpenMobileSection(openMobileSection === section ? null : section);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-[#1B365D] text-white text-sm py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:0421608819"
              className="flex items-center gap-2 hover:text-[#E8A84C] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>0421 608 819</span>
            </a>
            <a
              href="mailto:admin@shineandspeak.com.au"
              className="hidden sm:inline hover:text-[#E8A84C] transition-colors"
            >
              admin@shineandspeak.com.au
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/zh" className="hover:text-[#E8A84C] transition-colors text-xs font-medium tracking-wide">
              EN / 中文
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/shared/brand/shine-and-speak-logo-horizontal-transparent.png"
            alt="Shine and Speak — Speech Pathology Sydney"
            width={200}
            height={50}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
          <DropdownMenu label="Services" links={serviceLinks} />
          <Link href="/how-it-works" className="text-[#1B365D] font-medium hover:text-[#E8A84C] transition-colors text-sm">
            How It Works
          </Link>
          <DropdownMenu label="Funding & Fees" links={fundingLinks} />
          <Link href="/about" className="text-[#1B365D] font-medium hover:text-[#E8A84C] transition-colors text-sm">
            About
          </Link>
          <DropdownMenu label="Areas" links={areaLinks} />
          <Link href="/contact" className="text-[#1B365D] font-medium hover:text-[#E8A84C] transition-colors text-sm">
            Contact
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/refer-a-client"
            className="text-sm font-semibold text-[#1B365D] border border-[#1B365D] px-4 py-2 rounded-md hover:bg-[#1B365D] hover:text-white transition-colors"
          >
            Refer a Client
          </Link>
          {/* REPLACE: update href to your real Calendly URL */}
          <a
            href="https://calendly.com/shineandspeak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold bg-[#E8A84C] text-[#1B365D] px-5 py-2 rounded-md hover:bg-amber-400 transition-colors"
          >
            Book a Free Discovery Call
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-[#1B365D] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
            {/* Services */}
            <button
              onClick={() => toggleMobileSection('services')}
              className="w-full flex justify-between items-center py-3 text-[#1B365D] font-medium border-b border-gray-100"
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform ${openMobileSection === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileSection === 'services' && (
              <div className="pl-4 py-2 space-y-1">
                {serviceLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="block py-2 text-sm text-[#1B365D] hover:text-[#E8A84C]" onClick={() => setIsMobileMenuOpen(false)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/how-it-works" className="block py-3 text-[#1B365D] font-medium border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
              How It Works
            </Link>

            {/* Funding */}
            <button
              onClick={() => toggleMobileSection('funding')}
              className="w-full flex justify-between items-center py-3 text-[#1B365D] font-medium border-b border-gray-100"
            >
              Funding & Fees <ChevronDown className={`w-4 h-4 transition-transform ${openMobileSection === 'funding' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileSection === 'funding' && (
              <div className="pl-4 py-2 space-y-1">
                {fundingLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="block py-2 text-sm text-[#1B365D] hover:text-[#E8A84C]" onClick={() => setIsMobileMenuOpen(false)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/about" className="block py-3 text-[#1B365D] font-medium border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>

            {/* Areas */}
            <button
              onClick={() => toggleMobileSection('areas')}
              className="w-full flex justify-between items-center py-3 text-[#1B365D] font-medium border-b border-gray-100"
            >
              Areas <ChevronDown className={`w-4 h-4 transition-transform ${openMobileSection === 'areas' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileSection === 'areas' && (
              <div className="pl-4 py-2 space-y-1">
                {areaLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="block py-2 text-sm text-[#1B365D] hover:text-[#E8A84C]" onClick={() => setIsMobileMenuOpen(false)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/contact" className="block py-3 text-[#1B365D] font-medium border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>

            {/* Mobile CTAs */}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/refer-a-client"
                className="text-center font-semibold text-[#1B365D] border border-[#1B365D] px-4 py-3 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Refer a Client
              </Link>
              {/* REPLACE: update href to your real Calendly URL */}
              <a
                href="https://calendly.com/shineandspeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center font-bold bg-[#E8A84C] text-[#1B365D] px-4 py-3 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Free Discovery Call
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
