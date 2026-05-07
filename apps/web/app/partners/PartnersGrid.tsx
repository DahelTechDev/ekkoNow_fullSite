'use client';

import { SunMedium, BatteryCharging, Zap, Landmark, Briefcase, PlugZap, PanelTop } from 'lucide-react';

const PARTNERS = [
  { name: 'SunPower',     tier: 'Platinum', type: 'Manufacturer',       countries: 'Global',         icon: SunMedium },
  { name: 'GYNIX VERTEX', tier: 'Platinum', type: 'Technology Partner', countries: 'Africa',          icon: Zap },
  { name: 'BYD Energy',   tier: 'Gold',     type: 'Batteries',          countries: 'Global',         icon: BatteryCharging },
  { name: 'SolaX Power',  tier: 'Gold',     type: 'Inverters',          countries: 'China / Global', icon: Zap },
  { name: 'USAID',        tier: 'Gold',     type: 'Development',        countries: 'USA',            icon: Landmark },
  { name: 'AfDB',         tier: 'Silver',   type: 'Finance',            countries: 'Africa',         icon: Briefcase },
  { name: 'Growatt',      tier: 'Silver',   type: 'Inverters',          countries: 'Global',         icon: PlugZap },
  { name: 'LONGi Solar',  tier: 'Silver',   type: 'Manufacturer',       countries: 'Global',         icon: PanelTop },
];

const TIER_COLORS: Record<string, string> = {
  Platinum: '#E2E8F0',
  Gold: '#F59E0B',
  Silver: '#94A3B8',
};

const TIER_EMOJI: Record<string, string> = {
  Platinum: '⭐',
  Gold: '🥇',
  Silver: '🥈',
};

export default function PartnersGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {PARTNERS.map((p) => {
        const color = TIER_COLORS[p.tier];
        return (
          <div
            key={p.name}
            className="relative group rounded-2xl p-7 text-center overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={{
              background: `linear-gradient(145deg, ${color}12 0%, rgba(26,11,79,0.95) 100%)`,
              border: `1.5px solid ${color}40`,
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 36px ${color}35`)}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
          >
            {/* Glow corner */}
            <div
              className="absolute -top-8 -right-8 w-20 h-20 rounded-full blur-2xl opacity-20 group-hover:opacity-50 transition-opacity pointer-events-none"
              style={{ background: color }}
            />

            {/* Icon */}
            <div
              className="w-20 h-20 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
              style={{ background: `${color}18`, border: `1px solid ${color}30` }}
            >
              <p.icon className="w-10 h-10" style={{ color }} />
            </div>

            {/* Tier badge */}
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3"
              style={{ background: `${color}18`, color }}
            >
              {TIER_EMOJI[p.tier]} {p.tier}
            </div>

            {/* Name */}
            <div className="text-white font-extrabold text-lg mb-1 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              {p.name}
            </div>
            <div className="text-slate-400 text-xs">{p.type}</div>
            <div className="text-slate-600 text-xs mt-0.5">{p.countries}</div>
          </div>
        );
      })}
    </div>
  );
}
