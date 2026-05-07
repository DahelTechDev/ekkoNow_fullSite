'use client';

import { useEffect, useRef, useState } from 'react';
import { Leaf, Home, Zap, Users } from 'lucide-react';

const STATS = [
  {
    icon: Home,
    color: '#3B82F6',
    glow: 'rgba(59,130,246,0.2)',
    value: 50000,
    suffix: '+',
    label: 'Homes Powered',
    description: 'Families across Africa with reliable solar power',
  },
  {
    icon: Zap,
    color: '#F59E0B',
    glow: 'rgba(245,158,11,0.2)',
    value: 120,
    suffix: 'MW',
    label: 'Clean Energy Generated',
    description: 'Megawatts of solar capacity installed to date',
  },
  {
    icon: Leaf,
    color: '#10B981',
    glow: 'rgba(16,185,129,0.2)',
    value: 85000,
    suffix: 't',
    label: 'Tonnes CO₂ Avoided',
    description: 'Carbon emissions prevented by our installations',
  },
  {
    icon: Users,
    color: '#8B5CF6',
    glow: 'rgba(139,92,246,0.2)',
    value: 15,
    suffix: '+',
    label: 'Countries Reached',
    description: 'African nations with active EkkoNow deployments',
  },
];

function useCountUp(target: number, duration = 2000, triggered: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, triggered]);
  return count;
}

function StatCard({
  stat,
  triggered,
  idx,
}: {
  stat: (typeof STATS)[0];
  triggered: boolean;
  idx: number;
}) {
  const count = useCountUp(stat.value, 2000, triggered);
  const Icon = stat.icon;

  return (
    <div
      className="glass rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{
        animationDelay: `${idx * 0.15}s`,
      }}
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
        style={{ background: stat.glow, boxShadow: `0 0 24px ${stat.glow}` }}
      >
        <Icon className="w-8 h-8" style={{ color: stat.color }} />
      </div>
      <div
        className="text-5xl font-extrabold mb-1"
        style={{ fontFamily: 'Outfit, sans-serif', color: stat.color }}
      >
        {count.toLocaleString()}
        <span className="text-3xl">{stat.suffix}</span>
      </div>
      <div
        className="text-white font-semibold text-lg mb-2"
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        {stat.label}
      </div>
      <p className="text-slate-400 text-sm leading-relaxed">{stat.description}</p>
    </div>
  );
}

export default function Impact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0D0A2E 0%, #120E3A 50%, #0D0A2E 100%)',
      }}
    >
      {/* Glow backdrop */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(ellipse, #3B82F6 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-blue-300 mb-6 border-blue-500/20">
            <Leaf className="w-3.5 h-3.5" />
            Measurable Impact
          </div>
          <h2
            style={{ fontFamily: 'Outfit, sans-serif' }}
            className="text-4xl sm:text-5xl font-extrabold text-white mb-5"
          >
            Numbers That{' '}
            <span className="gradient-text">Matter</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Real impact, real communities. Every installation counts toward a
            cleaner, more energy-independent Africa.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <StatCard key={stat.label} stat={stat} triggered={triggered} idx={idx} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 glass rounded-2xl p-8 md:p-10 text-center">
          <h3
            style={{ fontFamily: 'Outfit, sans-serif' }}
            className="text-2xl font-bold text-white mb-3"
          >
            Join the Solar Revolution
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-6">
            Every home you power is a step toward energy independence. Become
            an EkkoNow partner and multiply your impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/partners" className="btn-primary">
              Become a Partner <Leaf className="w-4 h-4" />
            </a>
            <a href="/impact" className="btn-secondary">
              View Full Report
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
