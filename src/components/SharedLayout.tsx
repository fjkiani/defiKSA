'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const MobileMenu = dynamic(() => import('@/components/MobileMenu'), {
  loading: () => null,
});

interface SharedLayoutProps {
  children: React.ReactNode;
}

const SharedLayout: React.FC<SharedLayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events for header transparency
  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Header/Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-xl shadow-lg shadow-black/10 py-2' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-1">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <Image
                  src="/images/logo.png"
                  alt="DefiKSA Logo"
                  width={48}
                  height={48}
                  className={`w-12 h-12 object-contain transition-all duration-500 ${
                    scrolled 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : 'opacity-0 scale-95 -translate-y-4'
                  }`}
                />
                <div className="flex flex-col">
                  <span className={`text-xl font-bold text-white transition-all duration-500 ${
                    scrolled 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-4'
                  }`}>DefiKSA</span>
                </div>
              </Link>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-full px-3 py-1.5 border border-gray-700/50 shadow-inner shadow-black/10 mx-4">
                <div className="flex space-x-1">
                  <Link href="/#about" className="nav-link px-4 py-2 rounded-full text-sm font-medium hover:text-white hover:bg-gray-700/50 transition-all duration-200">
                    About
                  </Link>
                  <Link href="/#features" className="nav-link px-4 py-2 rounded-full text-sm font-medium hover:text-white hover:bg-gray-700/50 transition-all duration-200">
                    Features
                  </Link>
                  <Link href="/#technology" className="nav-link px-4 py-2 rounded-full text-sm font-medium hover:text-white hover:bg-gray-700/50 transition-all duration-200">
                    Technology
                  </Link>
                  <Link href="/#agents" className="nav-link px-4 py-2 rounded-full text-sm font-medium hover:text-white hover:bg-gray-700/50 transition-all duration-200">
                    Agents
                  </Link>
                  <Link href="/#tokenomics" className="nav-link px-4 py-2 rounded-full text-sm font-medium hover:text-white hover:bg-gray-700/50 transition-all duration-200">
                    Tokenomics
                  </Link>
                  <Link href="/#roadmap" className="nav-link px-4 py-2 rounded-full text-sm font-medium hover:text-white hover:bg-gray-700/50 transition-all duration-200">
                    Roadmap
                  </Link>
                </div>
              </div>
              <Link href="/learn" className="nav-link ml-2 px-5 py-2 rounded-full text-sm font-medium border border-blue-500/30 hover:border-blue-500 text-blue-400 hover:text-white hover:bg-blue-600/20 transition-all duration-200">
                Learn
              </Link>
              <Link href="/whitepaper" className="nav-link ml-2 px-5 py-2 rounded-full text-sm font-medium border border-blue-500/30 hover:border-blue-500 text-blue-400 hover:text-white hover:bg-blue-600/20 transition-all duration-200">
                Whitepaper
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-white p-2 rounded-full hover:bg-blue-600/20 transition-all duration-200 border border-blue-500/20 hover:border-blue-500/50"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center ml-4">
              <a 
                href="https://app.cryptohedgefund.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/30 font-medium text-sm flex items-center"
              >
                Launch App
                <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 px-4 border-t border-gray-800/50 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <h3 className="font-bold text-xl mb-5">DefiKSA</h3>
              <p className="text-gray-400 mb-6">
                DefiKSA provides intelligent, Sharia-compliant financial solutions powered by AI and blockchain technology, tailored for the KSA market.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0,010 10.64v.052a4.105 4.105,0,0,0,3.292 4.022,4.095 4.095,0,0,1-1.853.07 4.108 4.108,0,0,0,3.834 2.85A8.233 8.233,0,0,1,2 19.008a11.616 11.616,0,0,0,6.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-5">Platform</h4>
              <ul className="space-y-3">
                <li><Link href="/#about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/#technology" className="text-gray-400 hover:text-white transition-colors">Technology</Link></li>
                <li><Link href="/#roadmap" className="text-gray-400 hover:text-white transition-colors">Roadmap</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5">Resources</h4>
              <ul className="space-y-3">
                <li><Link href="/whitepaper" className="text-gray-400 hover:text-white transition-colors">Whitepaper</Link></li>
                <li><Link href="/learn" className="text-gray-400 hover:text-white transition-colors">Learn</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5">Connect</h4>
              <ul className="space-y-3">
                <li><a href="https://discord.gg/yeMaKDMmSD" className="text-gray-400 hover:text-white transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} DefiKSA. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Proudly Built by <a href="https://jedilabs.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">Jedi Labs</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SharedLayout; 