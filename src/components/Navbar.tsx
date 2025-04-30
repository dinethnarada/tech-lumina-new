"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  // Use null as initial state to avoid hydration mismatch
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Only run this effect on the client side
    if (typeof window === 'undefined') return;
    
    // Set initial active section after client-side hydration
    setActiveSection('hero');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = [
      document.getElementById('hero'),
      document.getElementById('digital-solutions'),
      document.getElementById('tech-lumina-solutions'),
      document.getElementById('questions'),
      document.getElementById('who-we-are'),
      document.getElementById('values'),
      document.getElementById('approach'),
      document.getElementById('about')
    ].filter(Boolean);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="fixed w-full top-0 left-0 z-20 font-regular">
      <div className="mx-auto max-w-5xl md:pt-4 md:px-4">
        <div className="backdrop-blur-sm md:rounded-full border-b border-white/20 md:border-1 relative">
          <div className="flex flex-col md:flex-row md:items-center">
            {/* Top Bar */}
            <div className="h-20 flex items-center justify-between px-6 relative w-full">
              {/* Logo */}
              <div className="flex-shrink-0 relative">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo_white.png"
                    alt="Logo"
                    width={240}
                    height={120}
                    priority
                    quality={100}
                    className="h-36 w-auto md:h-48"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAAPElEQVR42h3KQQoAIAhEUe9/aC0EZ1yIoB5DfD4WAoQgCILwPeDxUVRRVd29d/cYY6y1zjnXWnvv/wdTzg1yWQ/JAQAAAABJRU5ErkJggg=="
                  />
                </Link>
              </div>

              {/* Right Side Navigation */}
              <div className="flex items-center space-x-4 ml-auto">
                {/* Contact Button - Mobile Only */}
                <div className="md:hidden">
                  <Link 
                    href="/contact"
                    className={`bg-transparent text-white px-4 py-2 rounded-full text-xs tracking-widest uppercase transition-all ${activeSection === 'tech-lumina-solutions' ? 'border-[#6B17ED] hover:text-[#6B17ED]' : activeSection === 'digital-solutions' || activeSection === 'questions' || activeSection === 'who-we-are' || activeSection === 'approach' ? 'border-[#806c00] hover:text-[#806c00]' : 'border-[#6B17ED] hover:text-[#6B17ED]'} border hover:bg-white hover:border-white`}
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
            <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:items-center md:justify-end md:flex-1 px-6 pb-4 md:pb-0 pt-6 md:pt-0 space-y-4 md:space-y-0 md:space-x-8 border-t border-white/10 md:border-0`}>
              <Link 
                href="/blog" 
                className={`text-white transition-colors text-sm tracking-widest uppercase ${activeSection === 'tech-lumina-solutions' ? 'hover:text-[#6B17ED]' : activeSection === 'digital-solutions' || activeSection === 'questions' || activeSection === 'who-we-are' || activeSection === 'approach' ? 'hover:text-[#806c00]' : 'hover:text-[#6B17ED]'}`}
              >
                BLOG
              </Link>
              <Link 
                href="/portfolio" 
                className={`text-white transition-colors text-sm tracking-widest uppercase ${activeSection === 'tech-lumina-solutions' ? 'hover:text-[#6B17ED]' : activeSection === 'digital-solutions' || activeSection === 'questions' || activeSection === 'who-we-are' || activeSection === 'approach' ? 'hover:text-[#806c00]' : 'hover:text-[#6B17ED]'}`}
              >
                PORTFOLIO
              </Link>
              <Link 
                href="/about" 
                className={`text-white transition-colors text-sm tracking-widest uppercase ${activeSection === 'tech-lumina-solutions' ? 'hover:text-[#6B17ED]' : activeSection === 'digital-solutions' || activeSection === 'questions' || activeSection === 'who-we-are' || activeSection === 'approach' ? 'hover:text-[#806c00]' : 'hover:text-[#6B17ED]'}`}
              >
                ABOUT
              </Link>
              {/* Contact Button - Desktop Only */}
              <div className="hidden md:block">
                <Link 
                  href="/contact"
                  className={`bg-transparent text-white px-8 py-3 rounded-full text-sm tracking-widest uppercase transition-all ${activeSection === 'tech-lumina-solutions' ? 'border-[#6B17ED] hover:text-[#6B17ED]' : activeSection === 'digital-solutions' || activeSection === 'questions' || activeSection === 'who-we-are' || activeSection === 'approach' ? 'border-[#806c00] hover:text-[#806c00]' : 'border-[#6B17ED] hover:text-[#6B17ED]'} border hover:bg-white hover:border-white`}
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
