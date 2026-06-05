'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../UI/Logo';
import { Menu, X, Zap } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Betting App', path: '/reddy-betting-app' },
  { name: 'Book ID', path: '/reddy-book-id' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/918872189331";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled 
        ? 'bg-black border-b border-red-500/20 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-3 py-1.5 text-xs font-black tracking-wider uppercase transition-all duration-200 border border-transparent ${
                    isActive 
                      ? 'text-red-500 border-red-500/20 bg-red-500/5' 
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-black uppercase tracking-wider text-zinc-300 hover:text-white transition-colors"
            >
              Log In
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-red-650 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest transition-all shadow-md shadow-red-650/20 flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 fill-current text-white" /> Get ID
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-red-500 transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-red-500/30 py-4 px-4 sm:px-6">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2.5 text-xs font-black uppercase tracking-widest transition-colors ${
                    isActive 
                      ? 'bg-red-500/10 text-red-500 border border-red-500/20' 
                      : 'text-zinc-300 hover:bg-zinc-900'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="flex flex-col gap-2 pt-2 border-t border-zinc-800">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 border border-zinc-700 hover:border-red-500 text-zinc-300 font-bold text-xs uppercase tracking-wider rounded"
              >
                Log In
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 fill-current text-white" />
                Get Verified ID
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
