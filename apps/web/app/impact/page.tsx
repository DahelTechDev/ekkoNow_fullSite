'use client';

import { useEffect, useRef, useState } from 'react';
import { Leaf, ArrowRight, Recycle, SunMedium, Briefcase, Globe2 } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';

// ── Animated counter hook ──────────────────────────────────────────────────
function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ── Stat card with observer-triggered animation ───────────────────────────
function StatCard({
  icon: Icon, color, target, suffix, prefix, label, desc,
}: {
  icon: React.ElementType; color: string; target: number;
  suffix?: string; prefix?: string; label: string; desc: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCounter(target, 1800, visible);

  return (
    <div
      ref={ref}
      className="relative group rounded-2xl p-8 text-center overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      style={{
        background: `linear-gradient(135deg, ${color}18 0%, ${color}06 100%)`,
        border: `1px solid ${color}35`,
        boxShadow: visible ? `0 0 40px ${color}22` : 'none',
      }}
    >
      {/* Glow blob */}
      <div
        className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-30 pointer-events-none transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: color }}
      />

      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${color}22` }}
      >
        <Icon className="w-8 h-8" style={{ color }} />
      </div>

      <div
        className="text-5xl font-extrabold mb-2 tabular-nums tracking-tight"
        style={{ fontFamily: 'Outfit, sans-serif', color }}
      >
        {prefix}{count.toLocaleString()}{suffix}
      </div>

      <div className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
        {label}
      </div>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  );
}

// ── Page data ─────────────────────────────────────────────────────────────
const STATS = [
  { icon: Recycle,   color: '#2EE6A6', target: 20000, suffix: '+', label: 'Waste Recovered',        desc: 'Tonnes of material processed' },
  { icon: SunMedium, color: '#F59E0B', target: 2500,  suffix: '+', label: 'Solar Systems Deployed',  desc: 'Active solar installations' },
  { icon: Briefcase, color: '#8B5CF6', target: 1100,  suffix: '+', label: 'Jobs Created',            desc: 'Green employment opportunities' },
  { icon: Globe2,    color: '#1F8BFF', target: 45,    suffix: '+', label: 'Communities Reached',     desc: 'Regions powered and cleaned' },
];

const STORIES = [
  {
    name: 'Grace Okonkwo',
    location: 'Enugu, Nigeria',
    story: 'Before EkkoNow, my family spent ₦40,000 every month on diesel generators. Now we pay nothing for electricity and my kids can study at night.',
    saving: '₦40,000/month',
  },
  {
    name: 'Samuel Mensah',
    location: 'Accra, Ghana',
    story: 'My small restaurant used to close at sunset. The EkkoNow solar system let me extend hours, hire 2 more staff, and grow my revenue by 60%.',
    saving: '60% revenue growth',
  },
  {
    name: 'Halima Diallo',
    location: 'Bamako, Mali',
    story: "Our health clinic can now refrigerate vaccines reliably. We've served 3x more patients since going solar with EkkoNow.",
    saving: '3x patient capacity',
  },
];

// ── Page ─────────────────────────────────────────────────────────────────
export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-[#1A0B4F]">
      <PageHero
        title="Measurable Impact"
        subtitle="Our work creates environmental and economic value at the same time."
        badgeText="Our Impact"
        imageSrc="/images/hero_impact.png"
      />

      {/* Stats */}
      <section className="section-padding bg-[#1A0B4F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="section-padding" style={{ background: '#120E3A' }}>
        <div className="max-w-7xl mx-auto">
          <h2 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-3xl font-extrabold text-white text-center mb-12">
            Real Stories, Real <span className="gradient-text">Impact</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STORIES.map((s) => (
              <div key={s.name} className="glass rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl mb-4">💬</div>
                <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">&ldquo;{s.story}&rdquo;</p>
                <div className="border-t border-blue-500/10 pt-4">
                  <div style={{ fontFamily: 'Outfit, sans-serif' }} className="text-white font-semibold">{s.name}</div>
                  <div className="text-slate-400 text-xs mb-2">{s.location}</div>
                  <div className="text-emerald-400 text-sm font-bold">{s.saving}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: '#0D0A2E' }}>
        <div className="max-w-3xl mx-auto text-center glass rounded-3xl p-12">
          <h2 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-3xl font-extrabold text-white mb-4">Add Your Story</h2>
          <p className="text-slate-400 mb-8">Join EkkoNow and start building your own impact story.</p>
          <a href="/solar-marketplace" className="btn-mint text-base py-3.5 px-8">
            Get Solar Today <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
