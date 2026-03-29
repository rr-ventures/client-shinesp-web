"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-navy-900 text-white text-sm py-2 px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="tel:0400000000" className="flex items-center hover:text-gold-400 transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            <span className="hidden md:inline">Call us: </span> 0400 000 000
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/zh" className="hover:text-gold-400 transition-colors">EN/中文</Link>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          {/* REPLACE: Logo */}
          <div className="text-2xl font-bold text-navy-900">Shine & Speak</div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="text-navy-900 font-medium hover:text-gold-500 flex items-center">
              Services ▾
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2">
              <Link href="/paediatric-speech-therapy-sydney-nsw" className="px-4 py-2 hover:bg-gray-50 text-navy-800">Paediatric Speech Therapy</Link>
              <Link href="/adult-speech-therapy-sydney-nsw" className="px-4 py-2 hover:bg-gray-50 text-navy-800">Adult Speech Therapy</Link>
              <Link href="/mobile-speech-therapy-sydney-nsw" className="px-4 py-2 hover:bg-gray-50 text-navy-800">Mobile Speech Therapy</Link>
              <Link href="/telehealth-speech-therapy-sydney-nsw" className="px-4 py-2 hover:bg-gray-50 text-navy-800">Telehealth Speech Therapy</Link>
            </div>
          </div>
          <Link href="/how-it-works" className="text-navy-900 font-medium hover:text-gold-500">How It Works</Link>
          <div className="relative group">
            <button className="text-navy-900 font-medium hover:text-gold-500 flex items-center">
              Funding & Fees ▾
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2">
              <Link href="/ndis-speech-therapy-sydney-nsw" className="px-4 py-2 hover:bg-gray-50 text-navy-800">NDIS Speech Therapy</Link>
              <Link href="/medicare-speech-therapy-sydney-nsw" className="px-4 py-2 hover:bg-gray-50 text-navy-800">Medicare Rebates</Link>
              <Link href="/fees" className="px-4 py-2 hover:bg-gray-50 text-navy-800">Fees & Pricing</Link>
            </div>
          </div>
          <Link href="/about" className="text-navy-900 font-medium hover:text-gold-500">About</Link>
          <div className="relative group">
            <button className="text-navy-900 font-medium hover:text-gold-500 flex items-center">
              Areas ▾
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2">
              <Link href="/speech-pathologist-burwood-nsw" className="px-4 py-2 hover:bg-gray-50 text-navy-800">Burwood</Link>
              <Link href="/speech-pathologist-inner-west-sydney-nsw" className="px-4 py-2 hover:bg-gray-50 text-navy-800">Inner West Sydney</Link>
            </div>
          </div>
          <Link href="/contact" className="text-navy-900 font-medium hover:text-gold-500">Contact</Link>
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/refer-a-client" className="text-navy-900 font-medium hover:text-gold-500 border border-navy-900 px-4 py-2 rounded-md transition-colors">
            Refer a Client
          </Link>
          <Link href="/contact" className="bg-gold-500 text-navy-900 font-bold px-6 py-2 rounded-md hover:bg-gold-400 transition-colors">
            Book a Free Call
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-navy-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4 shadow-lg">
          <Link href="/paediatric-speech-therapy-sydney-nsw" className="block text-navy-900 font-medium">Services</Link>
          <Link href="/how-it-works" className="block text-navy-900 font-medium">How It Works</Link>
          <Link href="/fees" className="block text-navy-900 font-medium">Funding & Fees</Link>
          <Link href="/about" className="block text-navy-900 font-medium">About</Link>
          <Link href="/speech-pathologist-inner-west-sydney-nsw" className="block text-navy-900 font-medium">Areas</Link>
          <Link href="/contact" className="block text-navy-900 font-medium">Contact</Link>
          <div className="pt-4 flex flex-col space-y-3">
            <Link href="/refer-a-client" className="text-center text-navy-900 font-medium border border-navy-900 px-4 py-2 rounded-md">
              Refer a Client
            </Link>
            <Link href="/contact" className="text-center bg-gold-500 text-navy-900 font-bold px-6 py-2 rounded-md">
              Book a Free Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
