import React from 'react';

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 group`}>
      <div className={`${className} bg-red-955/20 border border-red-500/40 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/10 group-hover:scale-105 group-hover:shadow-red-500/20 transition-all duration-300`}>
        {/* Dynamic Red Shield & Trishul SVG */}
        <svg viewBox="0 0 100 100" className="w-6 h-6 text-red-500 fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* Shield backdrop */}
          <path d="M20 20 L50 10 L80 20 C80 50, 50 85, 50 85 C50 85, 20 50, 20 20 Z" fill="none" stroke="currentColor" strokeWidth="4" />
          {/* Trishul inside shield */}
          <path d="M 50 25 C 48 35, 48 40, 50 50 C 52 40, 52 35, 50 25 Z" />
          <path d="M 32 38 C 36 52, 64 52, 68 38 C 62 47, 58 45, 50 45 C 50 55, 50 65, 50 65 M 32 38" fill="none" stroke="currentColor" strokeWidth="4" />
          <line x1="50" y1="45" x2="50" y2="72" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
      <span className="text-white font-mono font-black text-xl tracking-wider group-hover:text-red-500 transition-colors">
        REDDY<span className="text-red-500 font-light">_BOOK</span>
      </span>
    </div>
  );
}
