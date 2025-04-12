"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 font-regular">
      <div className="mx-auto max-w-5xl md:pt-4 md:px-4">
        <div className="transparent backdrop-blur-xs md:rounded-full border-b border-white/20 md:border-1 relative">
          <div className="flex flex-col md:flex-row md:items-center">
            {/* Top Bar */}
            <div className="h-20 flex items-center justify-between px-6">
              {/* Logo */}
              <div className="flex-shrink-0 absolute">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo_white.png"
                    alt="Logo"
                    width={1200}
                    height={600}
                    className="h-48 w-auto md:h-48"
                  />
                </Link>
              </div>

              {/* Right Side Navigation */}
              <div className="flex items-center space-x-4 ml-auto">
                {/* Contact Button - Mobile Only */}
                <div className="md:hidden">
                  <Link 
                    href="/contact"
                    className="bg-transparent text-white px-8 py-3 rounded-full text-sm tracking-widest  border border-[#6B17ED] hover:bg-white hover:text-black hover:border-white transition-all uppercase"
                  >
                    CONTACT
                  </Link>
                </div>

                {/* Expand Button - Mobile */}
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden text-white w-8 h-8 flex items-center justify-center border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                >
                  {isOpen ? '−' : '+'}
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:items-center md:justify-end md:flex-1 px-6 pb-4 md:pb-0 space-y-4 md:space-y-0 md:space-x-8 border-t border-white/10 md:border-0`}>
              <Link href="/services" className="text-white hover:text-[#6B17ED] transition-colors text-sm  tracking-widest uppercase pt-4 md:pt-0">
                SERVICES
              </Link>
              <Link href="/blog" className="text-white hover:text-[#6B17ED] transition-colors text-sm  tracking-widest uppercase">
                BLOG
              </Link>
              <Link href="/about" className="text-white hover:text-[#6B17ED] transition-colors text-sm  tracking-widest uppercase">
                ABOUT
              </Link>
              {/* Contact Button - Desktop Only */}
              <div className="hidden md:block">
                <Link 
                  href="/contact"
                  className="bg-transparent text-white px-8 py-3 rounded-full text-sm tracking-widest  border border-[#6B17ED] hover:bg-white hover:text-black hover:border-white transition-all uppercase"
                >
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
