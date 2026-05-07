import Image from 'next/image';
import { Zap, Search, ShoppingBag } from 'lucide-react';
import { MARKETPLACE_CATEGORIES } from '../data/products';

interface MarketplaceHeroProps {
  totalProducts: number;
  search: string;
  onSearchChange: (value: string) => void;
}

export default function MarketplaceHero({
  totalProducts,
  search,
  onSearchChange,
}: MarketplaceHeroProps) {
  return (
    <section
      id="marketplace-hero"
      className="relative overflow-hidden pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#1A0B4F]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_solar.png"
          alt="Solar Marketplace"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0B4F] via-[#1A0B4F]/80 to-[#1A0B4F]" />
      </div>

      {/* Background orbs */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none opacity-20 z-0"
        style={{ background: 'radial-gradient(circle, #1F8BFF 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none opacity-15 z-0"
        style={{ background: 'radial-gradient(circle, #2EE6A6 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Label */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-[#1F8BFF] mb-6 border-[#1F8BFF]/20">
          <Zap className="w-3.5 h-3.5" />
          Solar Marketplace
        </div>

        {/* Headline */}
        <h1
          style={{ fontFamily: 'Outfit, sans-serif' }}
          className="text-5xl sm:text-6xl font-extrabold text-white mb-5 leading-tight"
        >
          Solar & Green Energy{' '}
          <span className="gradient-text">Marketplace</span>
        </h1>

        <p className="text-white/80 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Discover trusted solar products and clean energy solutions from verified vendors.
        </p>

        {/* Search bar */}
        <div className="relative max-w-xl mx-auto mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          <input
            id="marketplace-search"
            type="search"
            placeholder="Search panels, batteries, inverters, brands…"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl glass border border-[#1F8BFF]/20 text-white placeholder-slate-400 outline-none focus:border-[#1F8BFF]/50 transition-colors text-sm bg-[#1A0B4F]/50 backdrop-blur-md"
          />
        </div>

        {/* Category Quick Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {MARKETPLACE_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`/solar-marketplace/categories/${cat.id}`}
              className="inline-flex items-center gap-2 glass px-4 py-2.5 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:border-[#1F8BFF]/40 transition-all duration-200 group bg-[#1A0B4F]/40"
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
              <span
                className="text-xs px-1.5 py-0.5 rounded-full font-semibold"
                style={{ background: `${cat.color}20`, color: cat.color }}
              >
                {cat.productCount}
              </span>
            </a>
          ))}
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-xs text-white/60">
          <div className="flex items-center gap-1.5">
            <ShoppingBag className="w-3.5 h-3.5 text-[#1F8BFF]" />
            <span>Verified vendors only</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[#2EE6A6]">✓</span>
            <span>Warranty-backed products</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-amber-400">★</span>
            <span>Rated by real buyers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
