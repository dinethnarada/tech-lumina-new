"use client";

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative">
      {/* Divider Line */}
      <div className="absolute top-0 left-0 w-full">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-400/20 to-transparent"></div>
      </div>

      <div className="bg-gradient-to-b from-[#2b0058] to-black py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Tech Lumina</h3>
              <p className="text-gray-400">
              Crafting Tomorrow&apos;s Websites, Today.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#digital-solutions" className="text-gray-400 hover:text-[#806c00] transition-colors">
                    Digital Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/#tech-lumina-solutions" className="text-gray-400 hover:text-[#6B17ED] transition-colors">
                    Tech Lumina Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/#questions" className="text-gray-400 hover:text-[#806c00] transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contact@techlumina.com</li>
                <li>Phone: +94 (078) 869-5286</li>
                <li>Location: Colombo, SriLanka</li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <div className="flex justify-center space-x-6 mb-6">
              <a 
                href="https://www.linkedin.com/company/tech-lumina/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0077b5] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/share/15sQydUqcC/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1877f2] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            <p className="text-gray-500">&copy; {new Date().getFullYear()} Tech Lumina. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
