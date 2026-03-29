'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-primary font-serif">Shine and Speak</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+61400000000" className="text-primary font-medium hover:text-secondary transition-colors">
              📞 0400 000 000
            </a>
            <Link href="/book" className="bg-secondary text-primary-foreground px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-all">
              Book a Free Call
            </Link>
            <Link href="/refer-a-client" className="border-2 border-primary text-primary px-6 py-2 rounded-full font-bold hover:bg-primary hover:text-primary-foreground transition-all">
              Refer a Client
            </Link>
            <Link href="/zh" className="text-sm font-medium text-gray-600 hover:text-primary">
              EN/中文
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <Link href="/book" className="bg-secondary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm">
              Book
            </Link>
            <button 
              className="text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 mt-4 pt-4 border-t border-gray-50">
          <div className="relative group">
            <button className="font-medium text-primary hover:text-secondary flex items-center gap-1">
              Services ▾
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 hidden group-hover:block border border-gray-100">
              <Link href="/paediatric-speech-therapy-sydney-nsw" className="block py-2 hover:text-secondary">Paediatric Speech Therapy</Link>
              <Link href="/adult-speech-therapy-sydney-nsw" className="block py-2 hover:text-secondary">Adult Speech Therapy</Link>
              <Link href="/speech-therapy-autism-sydney-nsw" className="block py-2 hover:text-secondary">Autism</Link>
            </div>
          </div>
          <Link href="/how-it-works" className="font-medium text-primary hover:text-secondary">How It Works</Link>
          <div className="relative group">
            <button className="font-medium text-primary hover:text-secondary flex items-center gap-1">
              Funding & Fees ▾
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 hidden group-hover:block border border-gray-100">
              <Link href="/ndis-speech-therapy-sydney-nsw" className="block py-2 hover:text-secondary">NDIS Speech Therapy</Link>
              <Link href="/medicare-speech-therapy-sydney-nsw" className="block py-2 hover:text-secondary">Medicare Rebates</Link>
              <Link href="/fees" className="block py-2 hover:text-secondary">Fees & Pricing</Link>
            </div>
          </div>
          <Link href="/about" className="font-medium text-primary hover:text-secondary">About</Link>
          <div className="relative group">
            <button className="font-medium text-primary hover:text-secondary flex items-center gap-1">
              Areas ▾
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 hidden group-hover:block border border-gray-100">
              <Link href="/speech-pathologist-burwood-nsw" className="block py-2 hover:text-secondary">Burwood</Link>
              <Link href="/speech-pathologist-arncliffe-nsw" className="block py-2 hover:text-secondary">Arncliffe</Link>
            </div>
          </div>
          <Link href="/contact" className="font-medium text-primary hover:text-secondary">Contact</Link>
        </nav>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-50 flex flex-col gap-4 pb-4">
            <Link href="/paediatric-speech-therapy-sydney-nsw" className="font-medium text-primary block py-2">Services</Link>
            <Link href="/how-it-works" className="font-medium text-primary block py-2">How It Works</Link>
            <Link href="/fees" className="font-medium text-primary block py-2">Funding & Fees</Link>
            <Link href="/about" className="font-medium text-primary block py-2">About</Link>
            <Link href="/speech-pathologist-burwood-nsw" className="font-medium text-primary block py-2">Areas</Link>
            <Link href="/contact" className="font-medium text-primary block py-2">Contact</Link>
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
              <Link href="/refer-a-client" className="border-2 border-primary text-primary px-6 py-3 rounded-full font-bold text-center">
                Refer a Client
              </Link>
              <a href="tel:+61400000000" className="bg-primary text-white px-6 py-3 rounded-full font-bold text-center">
                Call 0400 000 000
              </a>
              <Link href="/zh" className="text-center text-gray-600 font-medium py-2">
                中文 (Chinese)
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
