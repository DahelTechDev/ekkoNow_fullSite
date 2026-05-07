import type { Metadata } from 'next';
import { TrendingUp, Globe, DollarSign, ArrowRight, CheckCircle, BarChart2 } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';

export const metadata: Metadata = {
  title: 'Investors',
  description: 'Invest in EkkoNow — Africa\'s leading solar marketplace. Learn about our growth trajectory, market opportunity, and investment thesis.',
};

const METRICS = [
  { label: 'Total Addressable Market', value: '$230B', sub: 'African energy market by 2030', color: '#3B82F6' },
  { label: 'YoY Revenue Growth', value: '340%', sub: '2023 → 2024', color: '#10B981' },
  { label: 'Active Users', value: '180K+', sub: 'Verified buyers on platform', color: '#F59E0B' },
  { label: 'Countries', value: '15+', sub: 'Active markets across Africa', color: '#8B5CF6' },
];

const HIGHLIGHTS = [
  'First-mover advantage in African solar e-commerce',
  'Proprietary vendor verification & quality assurance',
  'Integrated financing increasing AOV by 3.2x',
  'Government partnerships in 8 countries',
  'ISO 9001 certified quality management system',
  'Strategic partnerships with top-10 global manufacturers',
];

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-[#1A0B4F]">
      <PageHero
        title="Invest in the Solar Future"
        titleHighlight="of Africa"
        subtitle="EkkoNow is powering one of the most significant infrastructure transitions in history. Join us in building Africa's clean energy economy."
        badgeText="Investor Relations"
        imageSrc="/images/hero_investors.png"
      />

      {/* Key Metrics */}
      <section className="section-padding" style={{ background: '#0D0A2E' }}>
        <div className="max-w-7xl mx-auto">
          <h2 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-3xl font-extrabold text-white text-center mb-12">
            Key <span className="gradient-text">Metrics</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {METRICS.map((m) => (
              <div key={m.label} className="glass rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-extrabold mb-1" style={{ fontFamily: 'Outfit, sans-serif', color: m.color }}>{m.value}</div>
                <div className="text-white font-semibold mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>{m.label}</div>
                <div className="text-slate-400 text-xs">{m.sub}</div>
              </div>
            ))}
          </div>

          {/* Opportunity + highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-blue-400" />
                </div>
                <h3 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-xl font-bold text-white">The Opportunity</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm mb-4">
                600 million Africans lack reliable electricity. The continent has the world&apos;s highest solar irradiance.
                Costs of solar have fallen 90% in a decade. EkkoNow sits at the intersection of these forces.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm">
                We are building the infrastructure layer — the marketplace, logistics, financing, and trust — that will
                power Africa&apos;s solar transition. Our platform handles everything from first inquiry to post-installation support.
              </p>
            </div>

            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                  <BarChart2 className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-xl font-bold text-white">Investment Highlights</h3>
              </div>
              <div className="space-y-3">
                {HIGHLIGHTS.map((h) => (
                  <div key={h} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-400" />
                    <span className="text-sm text-slate-300">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: '#120E3A' }}>
        <div className="max-w-3xl mx-auto text-center glass rounded-3xl p-12">
          <DollarSign className="w-12 h-12 text-amber-400 mx-auto mb-4" />
          <h2 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-3xl font-extrabold text-white mb-4">
            Ready to Invest?
          </h2>
          <p className="text-slate-400 mb-8">
            Request our investor deck, financial model, and schedule a call with our founding team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn-primary text-base py-3.5 px-8">
              Request Investor Deck <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/contact" className="btn-secondary text-base py-3.5 px-8">
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
