import React from 'react';
import Link from 'next/link';
import Logo from '../UI/Logo';
import { Send, Shield, Zap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/918872189331";

  return (
    <footer className="bg-[#080505] border-t border-red-500/20 text-zinc-400 text-sm font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand details */}
          <div className="space-y-5">
            <Logo />
            <p className="text-zinc-400 leading-relaxed font-light text-xs">
              India's boldest sports insights and predictions bookmaker interface. Access secure match predictions, live odds, and fast payouts 24/7.
            </p>
            <div className="flex gap-2">
              <span className="w-8 h-8 rounded bg-red-950/20 border border-red-500/30 flex items-center justify-center text-red-500">
                <Shield className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded bg-red-950/20 border border-red-500/30 flex items-center justify-center text-red-500">
                <Zap className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-white font-black uppercase tracking-wider text-xs border-b border-red-500/30 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-red-500 transition-colors">Insights Blog</Link>
              </li>
              <li>
                <Link href="/reddy-betting-app" className="hover:text-red-500 transition-colors">Betting App</Link>
              </li>
              <li>
                <Link href="/reddy-book-id" className="hover:text-red-500 transition-colors">Book ID</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-red-500 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Keywords */}
          <div className="space-y-4">
            <h4 className="text-white font-black uppercase tracking-wider text-xs border-b border-red-500/30 pb-2">
              Partners
            </h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li>Gold365 Exchange</li>
              <li>Laser247 Exchange</li>
              <li>IPL Betting Hub</li>
              <li>Online Betting ID</li>
              <li>Reddy Book</li>
              <li>ReddyBook</li>
            </ul>
          </div>

          {/* Call to action */}
          <div className="space-y-4">
            <h4 className="text-white font-black uppercase tracking-wider text-xs border-b border-red-500/30 pb-2">
              Action Hub
            </h4>
            <p className="text-zinc-550 text-xs font-light">
              Register now via WhatsApp to claim your verified credentials instantly.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-black px-5 py-3 rounded text-xs uppercase tracking-widest transition-colors shadow-md shadow-red-550/10 w-full justify-center"
            >
              <Send className="w-3.5 h-3.5" /> Start Betting
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-zinc-650">
          <p>
            &copy; {currentYear} Reddy Book. All rights reserved.
          </p>
          <p className="max-w-md text-center md:text-right font-light">
            Disclaimer: Reddy Book provides sports news and analytics. Users must be 18+ and adhere to local gambling regulations.
          </p>
        </div>
      </div>
    </footer>
  );
}
