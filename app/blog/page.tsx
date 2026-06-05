'use client';

import React from 'react';
import Link from 'next/link';
import Reveal from '../../components/UI/Reveal';
import { blogPosts } from '../../lib/blogData';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogListingPage() {
  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase mb-4">
              Reddy Book <span className="text-red-500">Insights</span>
            </h1>
            <p className="text-zinc-555 text-sm max-w-xl mx-auto font-light">
              Stay ahead with our latest betting guides, legal compliance updates, and match analytics.
            </p>
            <div className="w-16 h-0.5 bg-red-500 mx-auto mt-4"></div>
          </div>
        </Reveal>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, idx) => (
            <Reveal key={post.slug} yOffset={40} delay={idx * 0.1}>
              <div className="bold-card bold-card-hover rounded p-6 border border-zinc-900 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-500/10 border border-red-500/20 px-2.5 py-1">
                      {post.category}
                    </span>
                    <span className="text-2xl">{post.icon}</span>
                  </div>
                  
                  <h2 className="text-lg font-bold text-white hover:text-red-500 transition-colors uppercase">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="text-zinc-400 text-xs font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="mt-8 pt-4 border-t border-zinc-950 flex items-center justify-between text-[10px] text-zinc-500 uppercase tracking-widest font-bold font-mono">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-red-500" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-red-500" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="text-red-500 font-semibold hover:text-red-400 flex items-center gap-1 transition-colors">
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </div>
  );
}
