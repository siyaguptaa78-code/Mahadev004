'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Reveal from '../components/UI/Reveal';
import { 
  Shield, TrendingUp, Headphones, Zap, Check, Star, Lock, Award, ArrowRight,
  MessageSquare, HelpCircle, Plus, Minus, Trophy, Activity
} from 'lucide-react';

const stats = [
  { value: '1.2M+', label: 'Active Users', desc: 'Trusted since 2018' },
  { value: '60K+', label: 'Events / Month', desc: 'Live sports & games' },
  { value: '24/7', label: 'Support Speed', desc: 'Average response < 1m' }
];

const games = [
  { title: "Cricket Betting", desc: "Live IPL, International matches, T20 leagues etc. with best odds in the market", icon: "🏏" },
  { title: "Football Leagues", desc: "Premier league, Champions league, League, Super league - bookmaker odds", icon: "⚽" },
  { title: "Live Casino", desc: "Play live dealer streams of Teen Patti, Andar Bahar, Roulette and Poker from home", icon: "🃏" },
  { title: "Tennis Matches", desc: "Real-time betting on Grand Slams, ATP, WTA and other major events", icon: "🎾" },
  { title: "Virtual Sports", desc: "Digital cricket, football and horse racing events - fast-paced and available 24x7", icon: "🎮" }
];

const features = [
  { title: "Secure payments", desc: "UPI, GPay, Paytm, PhonePe and local bank transfers using 256-bit encryption", icon: Shield },
  { title: "Fast payouts", desc: "Direct bank transfers within 5-10 mins", icon: Zap },
  { title: "Data insights", desc: "Free prediction models, player stats and head-to-head data", icon: TrendingUp },
  { title: "24/7 WhatsApp assistance", desc: "Dedicated personal relationship managers to assist you around the clock", icon: Headphones }
];

const reviews = [
  { name: "Rahul S.", location: "Mumbai", comment: "Withdrawal credited within 5 minutes! Best ever platform", rating: 5 },
  { name: "Priya K.", location: "Delhi", comment: "Got my ID the same day. Super smooth process and amazing support team!", rating: 5 },
  { name: "Vikram M.", location: "Bangalore", comment: "IPL betting experience was incredible. Real-time updates and fast payouts.", rating: 5 },
  { name: "Ankit T.", location: "Pune", comment: "100% genuine platform. I trust Mahadev Book for all my betting.", rating: 5 },
  { name: "Suresh P.", location: "Hyderabad", comment: "Best customer service! They resolved my issue in minutes via WhatsApp.", rating: 5 },
  { name: "Riya N.", location: "Chennai", comment: "Mujhe bahut accha experience mila. Payout fast aur secure hai.", rating: 5 }
];

const trustPoints = [
  { title: "Expertise", desc: "Built by sports & gaming veterans with 15+ years of proven innovation.", icon: Award },
  { title: "Experience", desc: "Trusted by 1.2M+ users since 2018 with over 60M successful transactions.", icon: Check },
  { title: "Authority", desc: "Recognized as India's leading betting platform by top industry awards.", icon: Shield },
  { title: "Trust", desc: "SSL encrypted, PCI-DSS compliant, and fair play certified by iTech Labs.", icon: Lock }
];

const faqs = [
  {
    q: "What is Mahadev Book Online Betting ID?",
    a: "The Mahadev Book Online Betting ID is a verified account that lets you access betting services such as cricket, casino, poker, and more. With this ID, users can deposit funds, place bets, and enjoy a secure gaming experience."
  },
  {
    q: "How does Mahadev Book work?",
    a: "Mahadev Book acts as a trusted aggregator. Once you request an ID via WhatsApp, our support agents set up your credentials. You add funds via UPI or bank transfer, receive your betting chips, and log in to the official exchange site. Your winnings can be requested via WhatsApp and are transferred directly to your bank account."
  },
  {
    q: "How do I register for a new Online Betting ID?",
    a: "Simply click on any 'Get ID' button to open a chat with our verified agent on WhatsApp. Send a request, provide basic details (name, contact), choose your deposit amount, and your ID will be generated in less than 5 minutes."
  },
  {
    q: "What games can I play with my Mahadev Book ID?",
    a: "You can bet on all major sports including Cricket (IPL, World Cup, Test matches), Football (Premier League, UEFA), Tennis, and E-sports. You also get access to classic Indian card games like Teen Patti, Andar Bahar, and live casinos."
  },
  {
    q: "How do I deposit money into my Mahadev Book account?",
    a: "Depositing is quick and secure. Our agents will provide verified UPI IDs, GPay details, or bank accounts. Once you make the payment and send a screenshot, your betting chips will be instantly credited to your ID."
  },
  {
    q: "How do I withdraw my winnings?",
    a: "Withdrawals are available 24/7. Text your WhatsApp agent with your ID username and the amount you want to withdraw. Provide your UPI ID or bank account details, and the funds will be transferred to you in 5 to 10 minutes."
  },
  {
    q: "Is Mahadev Book legal in India?",
    a: "Mahadev Book operates in a legal grey area. Online betting is governed by state-specific laws in India. While there is no federal law banning online betting platforms hosted outside India, some states have their own restrictions. We advise users to check local regulations."
  },
  {
    q: "Is Mahadev Book safe and trusted?",
    a: "Yes. With over 1.2 million active users and millions of completed transactions since 2018, Mahadev Book is widely regarded as India's most stable and secure online betting bookmaker."
  }
];

const tickerItems = [
  "🏆 USER_9921 WON ₹45,000 on CSK vs MI!",
  "🔥 USER_8832 WON ₹1,20,000 on Teen Patti!",
  "⚡ USER_4411 WITHDREW ₹75,000 in 4 mins!",
  "🎯 USER_5782 WON ₹88,000 on IND vs AUS!",
  "🏆 USER_3294 WON ₹35,000 on Roulette!",
  "🔥 USER_1120 WON ₹2,50,000 on IPL Outright!"
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappUrl = "https://wa.me/916026703858";

  return (
    <div className="relative min-h-screen bg-[#030b14] text-[#e0f2fe] font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* 1. Hero Section - Soft Pill Shapes */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Soft glowing blobs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen"></div>

        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-8 bg-[#0a192f] border border-cyan-500/30 rounded-full px-6 py-2 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-medium tracking-wide">
              India's #1 Trusted Platform
            </span>
          </div>

          <div className="flex justify-center mb-10">
             <div className="w-80 h-32 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-6 shadow-2xl shadow-cyan-500/10 flex items-center justify-center">
                <img src="https://mahadevbook.game/wp-content/uploads/2025/04/mahadev-online-books-e1765948728912-1024x369.webp" alt="Mahadev Book" className="w-full h-full object-contain filter drop-shadow-lg" />
             </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            Mahadev Book
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100/80 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Betting is a game of time, talent, and opportunity; where the user selects the right platform to gain from.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={whatsappUrl} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full px-10 py-5 font-bold text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all">
              Get Your ID Now
            </a>
          </div>
          
          <div className="mt-20 flex justify-center gap-8 md:gap-16">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-cyan-400 text-sm md:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker Section - Floating Pills */}
      <div className="py-6 overflow-hidden">
        <div className="flex gap-4 animate-ticker px-4 whitespace-nowrap">
          {tickerItems.map((item, idx) => (
            <div key={idx} className="bg-[#0a192f] border border-cyan-500/20 text-cyan-50 rounded-full px-6 py-3 shadow-lg">
              {item}
            </div>
          ))}
          {tickerItems.map((item, idx) => (
            <div key={`dup-${idx}`} className="bg-[#0a192f] border border-cyan-500/20 text-cyan-50 rounded-full px-6 py-3 shadow-lg">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* What is Mahadev Book */}
      <section className="py-24 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What is Mahadev Book?</h2>
          <p className="text-cyan-100/60 max-w-2xl mx-auto">We bridge the gap between you and the world's best bookmakers by providing</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/10 transition-colors">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-cyan-100/70 leading-relaxed">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Games */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-[#030b14]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Games You Can Play</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {games.map((game, i) => (
              <div key={i} className="bg-[#0a192f] rounded-[2.5rem] p-8 border border-cyan-500/20 hover:-translate-y-2 transition-transform duration-300">
                <div className="text-6xl mb-6">{game.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{game.title}</h3>
                <p className="text-cyan-100/60 mb-6 min-h-[80px]">{game.desc}</p>
                <div className="w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">100% Payouts</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {reviews.slice(0, 4).map((rev, i) => (
            <div key={i} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] bg-white/5 backdrop-blur-md rounded-[2rem] p-8 border border-white/10">
              <div className="flex gap-1 text-cyan-400 mb-4">
                {[...Array(rev.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-cyan-50 italic mb-6 leading-relaxed">"{rev.comment}"</p>
              <div className="font-bold text-white">{rev.name}</div>
              <div className="text-cyan-500/80 text-sm">{rev.location}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & FAQ */}
      <section className="py-24 bg-[#0a192f] mt-10 rounded-t-[4rem]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#030b14] rounded-3xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center text-white font-medium"
                >
                  {faq.q}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-cyan-500/20 text-cyan-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-cyan-100/60 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <a href={whatsappUrl} className="fixed bottom-8 right-8 bg-cyan-500 text-[#030b14] p-5 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-110 transition-transform z-50">
        <MessageSquare className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}
