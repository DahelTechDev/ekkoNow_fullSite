import type { Metadata } from 'next';
import { Handshake, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import PartnersGrid from './PartnersGrid';

export const metadata: Metadata = {
  title: 'Partners',
  description: "Partner with EkkoNow — distributors, manufacturers, NGOs, and governments building Africa's solar future together.",
};

const BENEFITS = [
  'Access to 50,000+ qualified solar buyers',
  'Co-marketing and brand placement',
  'Data insights on African solar market',
  'Priority placement in the marketplace',
  'Dedicated partner success manager',
  'Joint press releases and PR support',
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-[#1A0B4F]">
      <PageHero
        title="Built Through"
        titleHighlight="Collaboration"
        subtitle="We partner with organizations that want to build sustainable and scalable solutions."
        badgeText="Partnership"
        imageSrc="/images/hero_partners.png"
      />

      {/* Partners Grid */}
      <section className="section-padding bg-[#1A0B4F]">
        <div className="max-w-7xl mx-auto">
          <h2 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-3xl font-extrabold text-white text-center mb-12">
            Our <span className="gradient-text">Partners</span>
          </h2>
          <PartnersGrid />
        </div>
      </section>

      {/* Why Partner */}
      <section className="section-padding" style={{ background: '#12093A' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-[#2EE6A6] mb-6 border-[#2EE6A6]/20">
              <Globe className="w-3.5 h-3.5" /> Why Partner With Us
            </div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-4xl font-extrabold text-white mb-5">
              Reach Millions of Solar Buyers <span className="gradient-text">Across Africa</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              EkkoNow is the fastest-growing solar marketplace in Africa. Partner with us to
              access our verified buyer network, co-market your products, and drive sales
              across 5+ countries.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {BENEFITS.map((b) => (
                <div key={b} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#2EE6A6]" />
                  <span className="text-sm text-slate-300">{b}</span>
                </div>
              ))}
            </div>
            <a href="/contact" className="btn-primary">
              Become a Partner <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="glass rounded-3xl p-8">
            <div className="space-y-4">
              {[
                { tier: 'Platinum', desc: 'Premium placement, co-marketing, and dedicated support', color: '#E2E8F0' },
                { tier: 'Gold',     desc: 'Featured listings, marketing support, and market insights', color: '#F59E0B' },
                { tier: 'Silver',   desc: 'Standard listing and access to our partner network', color: '#94A3B8' },
              ].map((t) => (
                <div key={t.tier} className="glass-light rounded-xl p-5">
                  <div className="font-bold text-sm mb-1" style={{ fontFamily: 'Outfit, sans-serif', color: t.color }}>{t.tier} Partner</div>
                  <div className="text-slate-400 text-sm">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
