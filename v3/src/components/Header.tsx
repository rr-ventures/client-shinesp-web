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
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 hover:text-golden-amber transition text-sm font-medium"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <svg className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 bg-white text-navy-blue shadow-xl rounded-lg py-2 min-w-56 z-50 border border-gray-100">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-golden-amber transition"
            >
              {link.label}
            </Link>
          ))}
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
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar: logo + CTAs */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" aria-label="Shine and Speak — home">
          <Image
            src="/shine-and-speak-logo-horizontal-transparent.png"
            alt="Shine and Speak — Mobile Speech Pathology Sydney"
            width={200}
            height={56}
            priority
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop top-bar items */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+61421608819" className="text-navy-blue font-semibold text-sm hover:text-golden-amber transition">
            📞 0421 608 819
          </a>
          {/* REPLACE: Insert Calendly/TidyCal booking URL below */}
          <Link
            href="/contact"
            className="bg-golden-amber text-white px-5 py-2 rounded-md font-bold text-sm hover:bg-yellow-600 transition shadow-sm"
          >
            Book a Free Discovery Call
          </Link>
          <Link
            href="/refer-a-client"
            className="border-2 border-navy-blue text-navy-blue px-5 py-2 rounded-md font-bold text-sm hover:bg-navy-blue hover:text-white transition"
          >
            Refer a Client
          </Link>
          <Link href="/zh" className="text-navy-blue font-semibold text-sm hover:text-golden-amber transition" lang="zh" hrefLang="zh">
            中文
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-navy-blue hover:bg-blue-50 transition"
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
      <nav className="hidden md:block bg-navy-blue text-white" aria-label="Main navigation">
        <div className="container mx-auto px-4 py-2 flex items-center gap-6">
          <NavDropdown label="Services" links={servicesLinks} />
          <Link href="/how-it-works" className="text-sm font-medium hover:text-golden-amber transition">
            How It Works
          </Link>
          <NavDropdown label="Funding & Fees" links={fundingLinks} />
          <Link href="/about" className="text-sm font-medium hover:text-golden-amber transition">
            About
          </Link>
          <NavDropdown label="Areas" links={areasLinks} />
          <Link href="/contact" className="text-sm font-medium hover:text-golden-amber transition">
            Contact
          </Link>
        </div>
      </nav>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">
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
