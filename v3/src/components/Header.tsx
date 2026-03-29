"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const servicesLinks = [
  { label: "Paediatric Speech Therapy", href: "/paediatric-speech-therapy-sydney-nsw" },
  { label: "Adult Speech Therapy", href: "/adult-speech-therapy-sydney-nsw" },
  { label: "Mobile Speech Therapy", href: "/mobile-speech-therapy-sydney-nsw" },
  { label: "Telehealth Speech Therapy", href: "/telehealth-speech-therapy-sydney-nsw" },
  { label: "School-Based Therapy", href: "/school-based-speech-therapy-sydney-nsw" },
  { label: "Assessments", href: "/speech-therapy-assessment-sydney-nsw" },
  { label: "Reports", href: "/speech-therapy-reports-sydney-nsw" },
  { label: "Parent & Support Worker Coaching", href: "/parent-coaching-speech-therapy-sydney-nsw" },
];

const fundingLinks = [
  { label: "NDIS Speech Therapy", href: "/ndis-speech-therapy-sydney-nsw" },
  { label: "Medicare Rebates", href: "/medicare-speech-therapy-sydney-nsw" },
  { label: "Private Pay", href: "/private-speech-therapy-sydney-nsw" },
  { label: "Home Care Packages", href: "/home-care-package-speech-therapy-sydney-nsw" },
  { label: "DVA", href: "/dva-speech-therapy-sydney-nsw" },
  { label: "Fees & Pricing", href: "/fees" },
];

const areasLinks = [
  { label: "Arncliffe", href: "/speech-pathologist-arncliffe-nsw" },
  { label: "Burwood", href: "/speech-pathologist-burwood-nsw" },
  { label: "Hurstville", href: "/speech-pathologist-hurstville-nsw" },
  { label: "Strathfield", href: "/speech-pathologist-strathfield-nsw" },
  { label: "Canterbury-Bankstown", href: "/speech-pathologist-canterbury-bankstown-nsw" },
  { label: "Campsie", href: "/speech-pathologist-campsie-nsw" },
  { label: "Rockdale", href: "/speech-pathologist-rockdale-nsw" },
  { label: "Kogarah", href: "/speech-pathologist-kogarah-nsw" },
  { label: "Marrickville", href: "/speech-pathologist-marrickville-nsw" },
  { label: "Inner West Sydney", href: "/speech-pathologist-inner-west-sydney-nsw" },
  { label: "St George", href: "/speech-pathologist-st-george-nsw" },
  { label: "Telehealth Australia-wide", href: "/telehealth-speech-therapy-sydney-nsw" },
];

function NavDropdown({ label, links }: { label: string; links: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1.5 text-charcoal hover:text-golden-amber transition text-sm font-medium py-2"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180 text-golden-amber" : "text-stone"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
          <div className="bg-white text-charcoal shadow-[0_10px_40px_-10px_rgba(17,42,70,0.15)] rounded-xl py-3 min-w-[240px] z-50 border border-gray-100 relative before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-5 py-2.5 text-sm hover:bg-soft-blue hover:text-navy-blue transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const toggleMobileSection = (section: string) => {
    setMobileSection(mobileSection === section ? null : section);
  };

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      {/* Top bar: logo + CTAs */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" aria-label="Shine and Speak — home" className="flex-shrink-0">
          <Image
            src="/shine-and-speak-logo-horizontal-transparent.png"
            alt="Shine and Speak — Mobile Speech Pathology Sydney"
            width={220}
            height={62}
            priority
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop top-bar items */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:+61421608819" className="text-navy-blue font-medium text-sm hover:text-golden-amber transition flex items-center gap-2">
            <span className="text-golden-amber">📞</span> 0421 608 819
          </a>
          {/* REPLACE: Insert Calendly/TidyCal booking URL below */}
          <Link
            href="/contact"
            className="btn-primary text-sm py-2.5 px-6"
          >
            Book a Free Discovery Call
          </Link>
          <Link
            href="/refer-a-client"
            className="btn-secondary text-sm py-2.5 px-6"
          >
            Refer a Client
          </Link>
          <Link href="/zh" className="text-stone font-medium text-sm hover:text-navy-blue transition flex items-center gap-1 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200" lang="zh" hrefLang="zh">
            <span>🌐</span> 中文
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-full text-navy-blue hover:bg-soft-blue transition"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop nav bar */}
      <nav className="hidden lg:block border-t border-gray-100 bg-white/50" aria-label="Main navigation">
        <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-8">
          <NavDropdown label="Services" links={servicesLinks} />
          <Link href="/how-it-works" className="text-sm font-medium text-charcoal hover:text-golden-amber transition">
            How It Works
          </Link>
          <NavDropdown label="Funding & Fees" links={fundingLinks} />
          <Link href="/about" className="text-sm font-medium text-charcoal hover:text-golden-amber transition">
            About
          </Link>
          <NavDropdown label="Areas" links={areasLinks} />
          <Link href="/contact" className="text-sm font-medium text-charcoal hover:text-golden-amber transition">
            Contact
          </Link>
        </div>
      </nav>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl absolute w-full left-0">
          {/* Mobile CTAs — always visible */}
          <div className="flex flex-col gap-3 p-4 border-b border-gray-100">
            {/* REPLACE: Insert Calendly/TidyCal booking URL below */}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-golden-amber text-white px-4 py-3 rounded-md font-bold hover:bg-yellow-600 transition"
            >
              Book a Free Discovery Call
            </Link>
            <Link
              href="/refer-a-client"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center border-2 border-navy-blue text-navy-blue px-4 py-3 rounded-md font-bold hover:bg-navy-blue hover:text-white transition"
            >
              Refer a Client
            </Link>
            <a
              href="tel:+61421608819"
              className="block w-full text-center text-navy-blue font-semibold py-2"
            >
              📞 0421 608 819
            </a>
          </div>

          <nav aria-label="Mobile navigation">
            {/* Services accordion */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => toggleMobileSection("services")}
                className="flex justify-between items-center w-full px-4 py-3 text-navy-blue font-semibold"
                aria-expanded={mobileSection === "services"}
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${mobileSection === "services" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileSection === "services" && (
                <div className="bg-blue-50 px-4 py-2 space-y-1">
                  {servicesLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block py-2 text-navy-blue hover:text-golden-amber text-sm">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/how-it-works" onClick={() => setMobileOpen(false)} className="flex px-4 py-3 text-navy-blue font-semibold border-b border-gray-100">
              How It Works
            </Link>

            {/* Funding accordion */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => toggleMobileSection("funding")}
                className="flex justify-between items-center w-full px-4 py-3 text-navy-blue font-semibold"
                aria-expanded={mobileSection === "funding"}
              >
                Funding & Fees
                <svg className={`w-4 h-4 transition-transform ${mobileSection === "funding" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileSection === "funding" && (
                <div className="bg-blue-50 px-4 py-2 space-y-1">
                  {fundingLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block py-2 text-navy-blue hover:text-golden-amber text-sm">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" onClick={() => setMobileOpen(false)} className="flex px-4 py-3 text-navy-blue font-semibold border-b border-gray-100">
              About
            </Link>

            {/* Areas accordion */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => toggleMobileSection("areas")}
                className="flex justify-between items-center w-full px-4 py-3 text-navy-blue font-semibold"
                aria-expanded={mobileSection === "areas"}
              >
                Areas
                <svg className={`w-4 h-4 transition-transform ${mobileSection === "areas" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileSection === "areas" && (
                <div className="bg-blue-50 px-4 py-2 space-y-1">
                  {areasLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block py-2 text-navy-blue hover:text-golden-amber text-sm">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" onClick={() => setMobileOpen(false)} className="flex px-4 py-3 text-navy-blue font-semibold border-b border-gray-100">
              Contact
            </Link>
            <Link href="/zh" onClick={() => setMobileOpen(false)} className="flex px-4 py-3 text-navy-blue font-semibold" lang="zh" hrefLang="zh">
              中文
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
