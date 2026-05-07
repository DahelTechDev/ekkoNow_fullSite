'use client';

import Link from 'next/link';

import { ArrowRight, Star, ShoppingCart, Zap } from 'lucide-react';

const FEATURED_PRODUCTS = [
  {
    id: 'sunpower-400w',
    name: 'SunPower 400W Monocrystalline Panel',
    category: 'Solar Panels',
    price: 299,
    originalPrice: 349,
    rating: 4.9,
    reviews: 284,
    badge: 'Best Seller',
    badgeColor: '#F59E0B',
    icon: '☀️',
    gradient: 'from-amber-500/20 to-orange-500/10',
    specs: '400W • 21.5% Efficiency • 25yr Warranty',
  },
  {
    id: 'volta-10kwh',
    name: 'Volta LiFePO4 10kWh Battery Bank',
    category: 'Batteries',
    price: 2499,
    originalPrice: 2999,
    rating: 4.8,
    reviews: 156,
    badge: 'Top Rated',
    badgeColor: '#10B981',
    icon: '🔋',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    specs: '10kWh • 6000 Cycles • BMS Included',
  },
  {
    id: 'solax-5kw-hybrid',
    name: 'SolaX 5kW Hybrid Inverter X3',
    category: 'Inverters',
    price: 1199,
    originalPrice: 1499,
    rating: 4.7,
    reviews: 203,
    badge: 'New Arrival',
    badgeColor: '#3B82F6',
    icon: '⚡',
    gradient: 'from-blue-500/20 to-indigo-500/10',
    specs: '5kW • MPPT • Wi-Fi Monitor',
  },
  {
    id: 'growatt-3kw',
    name: 'Growatt 3kW Off-Grid Inverter',
    category: 'Inverters',
    price: 649,
    originalPrice: 799,
    rating: 4.6,
    reviews: 98,
    badge: 'Sale',
    badgeColor: '#EC4899',
    icon: '🔌',
    gradient: 'from-pink-500/20 to-purple-500/10',
    specs: '3kW • Pure Sine • 24V/48V',
  },
];

export default function MarketplacePreview() {
  return (
    <section
      id="marketplace-preview"
      className="section-padding"
      style={{ background: '#0D0A2E' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-blue-300 mb-4 border-blue-500/20">
              <Zap className="w-3.5 h-3.5" />
              Solar Marketplace
            </div>
            <h2
              style={{ fontFamily: 'Outfit, sans-serif' }}
              className="text-4xl sm:text-5xl font-extrabold text-white"
            >
              Featured <span className="gradient-text">Products</span>
            </h2>
          </div>
          <Link
            href="/solar-marketplace"
            className="btn-secondary shrink-0 text-sm"
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {FEATURED_PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={`/solar-marketplace/${product.id}`}
              className="group glass rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30 block"
            >
              {/* Product visual */}
              <div
                className={`h-40 flex items-center justify-center bg-gradient-to-br ${product.gradient} relative overflow-hidden`}
              >
                <span className="text-6xl z-10">{product.icon}</span>
                {/* Badge */}
                <span
                  className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                  style={{ background: product.badgeColor }}
                >
                  {product.badge}
                </span>
                {/* Discount */}
                {product.originalPrice > product.price && (
                  <span className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full bg-red-500/80 text-white">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">
                  {product.category}
                </span>
                <h3
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                  className="text-sm font-semibold text-white mt-1 mb-1.5 leading-snug group-hover:text-blue-300 transition-colors"
                >
                  {product.name}
                </h3>
                <p className="text-xs text-slate-500 mb-3">{product.specs}</p>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-4">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-medium text-amber-400">{product.rating}</span>
                  <span className="text-xs text-slate-500">({product.reviews})</span>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span
                      className="text-xl font-extrabold gradient-text"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      ${product.price.toLocaleString()}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-xs text-slate-500 line-through ml-1.5">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <button
                    id={`add-to-cart-${product.id}`}
                    className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-200 group-hover:scale-110"
                    aria-label={`Add ${product.name} to cart`}
                    onClick={(e) => e.preventDefault()}
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Category Quick Access */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'Solar Panels', href: '/solar-marketplace/categories/solar-panels', icon: '☀️', count: '48 products', color: '#F59E0B' },
            { label: 'Batteries', href: '/solar-marketplace/categories/batteries', icon: '🔋', count: '32 products', color: '#10B981' },
            { label: 'Inverters', href: '/solar-marketplace/categories/inverters', icon: '⚡', count: '27 products', color: '#3B82F6' },
          ].map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group glass rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30"
            >
              <span className="text-3xl">{cat.icon}</span>
              <div className="flex-1">
                <div
                  style={{ fontFamily: 'Outfit, sans-serif', color: cat.color }}
                  className="font-bold text-base"
                >
                  {cat.label}
                </div>
                <div className="text-xs text-slate-400">{cat.count}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
