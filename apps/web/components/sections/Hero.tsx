'use client';

import Link from 'next/link';
import { ArrowRight, Play, Zap, Sun, Wind } from 'lucide-react';

const STATS = [
  { value: '50K+', label: 'Homes Powered' },
  { value: '120MW', label: 'Clean Energy' },
  { value: '5+', label: 'Countries' },
  { value: '98%', label: 'Satisfaction' },
];

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1A0B4F]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_home.png"
          alt="African City Skyline at Night"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient Overlays for readability and branding */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A0B4F] via-[#1A0B4F]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B4F] via-transparent to-[#1A0B4F]/40" />
      </div>

      {/* Animated orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none opacity-20 z-0"
        style={{
          background: 'radial-gradient(circle, #1F8BFF 0%, transparent 70%)',
          animation: 'orb 12s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none opacity-15 z-0"
        style={{
          background: 'radial-gradient(circle, #2EE6A6 0%, transparent 70%)',
          animation: 'orb 9s ease-in-out infinite reverse',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div className="animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-[#1F8BFF] mb-8 border-[#1F8BFF]/30">
              <span className="w-2 h-2 rounded-full bg-[#2EE6A6] animate-pulse" />
              Africa&apos;s #1 Climate-Tech Platform
            </div>

            <h1
              style={{ fontFamily: 'Outfit, sans-serif' }}
              className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-6 text-white"
            >
              Power the{' '}
              <span className="gradient-text">Future.</span>
              <br />
              <span className="text-white">Today.</span>
            </h1>

            <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg font-light">
              Ekko Now builds climate systems that transform waste into useful products and deliver solar-powered solutions across African communities.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/solutions" className="btn-primary text-base py-3.5 px-8">
                Explore What We Do <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/about" className="btn-secondary text-base py-3.5 px-8 border-white/20 text-white hover:border-[#1F8BFF] hover:text-[#1F8BFF]">
                Learn About Us
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div
                    className="text-2xl font-extrabold gradient-text mb-0.5"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/50 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual card stack */}
          <div
            className="hidden lg:flex justify-center items-center relative animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            {/* Main card */}
            <div className="relative glass rounded-3xl p-8 w-[360px] shadow-2xl shadow-[#1F8BFF]/20 animate-glow-pulse border border-[#1F8BFF]/20 bg-[#1A0B4F]/40">
              {/* Sun visual */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#2EE6A6] to-[#1F8BFF] flex items-center justify-center shadow-2xl shadow-[#2EE6A6]/40 animate-float">
                    <Sun className="w-14 h-14 text-white" />
                  </div>
                  {/* Orbit rings */}
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2EE6A6]/20"
                      style={{
                         width: `${100 + i * 40}px`,
                         height: `${100 + i * 40}px`,
                         animation: `spin ${8 + i * 4}s linear infinite`,
                         animationDirection: i % 2 === 0 ? 'reverse' : 'normal',
                      }}
                    />
                  ))}
                </div>
              </div>

              <h3
                style={{ fontFamily: 'Outfit, sans-serif' }}
                className="text-lg font-bold text-white text-center mb-2"
              >
                Live Energy Dashboard
              </h3>
              <p className="text-sm text-white/50 text-center mb-5">
                Real-time solar production monitoring
              </p>

              {/* Progress bars */}
              {[
                { label: 'Solar Output', pct: 87, color: '#2EE6A6' },
                { label: 'Battery Charge', pct: 72, color: '#1F8BFF' },
                { label: 'Grid Offset', pct: 94, color: '#a78bfa' },
              ].map((bar) => (
                <div key={bar.label} className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white/60">{bar.label}</span>
                    <span className="text-white font-medium">{bar.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${bar.pct}%`, background: bar.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Floating stat cards */}
            <div
              className="absolute -top-6 -right-4 glass border border-white/10 bg-[#1A0B4F]/60 rounded-xl px-4 py-3 shadow-lg"
              style={{ animationDelay: '1s' }}
            >
              <div className="text-xs text-white/60">CO₂ Saved Today</div>
              <div
                className="text-xl font-extrabold text-[#2EE6A6]"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                2.4 tonnes
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 glass border border-white/10 bg-[#1A0B4F]/60 rounded-xl px-4 py-3 shadow-lg">
              <div className="text-xs text-white/60">Active Installations</div>
              <div
                className="text-xl font-extrabold gradient-text"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                48,921
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] font-bold text-white tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#2EE6A6] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
