'use client';

import Link from 'next/link';
import type { Product } from '@/lib/types';

import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const categoryEmoji: Record<string, string> = {
  'solar-panels': '☀️',
  batteries: '🔋',
  inverters: '⚡',
  mounting: '🏗️',
  accessories: '🔌',
};

const categoryGradient: Record<string, string> = {
  'solar-panels': 'from-amber-500/20 to-orange-500/10',
  batteries: 'from-emerald-500/20 to-teal-500/10',
  inverters: 'from-blue-500/20 to-indigo-500/10',
  mounting: 'from-purple-500/20 to-violet-500/10',
  accessories: 'from-pink-500/20 to-rose-500/10',
};

export default function ProductCard({ product }: ProductCardProps) {
  const discountPct =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  return (
    <Link
      href={`/solar-marketplace/${product.slug}`}
      className="group glass rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30 flex flex-col"
    >
      {/* Image / Visual */}
      <div className={`h-44 flex items-center justify-center bg-gradient-to-br ${categoryGradient[product.category] ?? 'from-blue-500/15 to-indigo-500/10'} relative overflow-hidden`}>
        <span className="text-7xl z-10 transition-transform duration-300 group-hover:scale-110">
          {categoryEmoji[product.category] ?? '⚡'}
        </span>
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full text-white bg-blue-500/80">
            {product.badge}
          </span>
        )}
        {/* Discount */}
        {discountPct && (
          <span className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full bg-red-500/80 text-white">
            -{discountPct}%
          </span>
        )}
        {/* Out of stock overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-xs font-semibold text-slate-300 bg-black/60 px-3 py-1 rounded-full">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs text-blue-400 font-medium uppercase tracking-wider mb-1">
          {product.brand}
        </span>
        <h3
          style={{ fontFamily: 'Outfit, sans-serif' }}
          className="text-sm font-semibold text-white mb-2 leading-snug group-hover:text-blue-300 transition-colors line-clamp-2"
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.round(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}`}
              />
            ))}
          </div>
          <span className="text-xs text-amber-400 font-medium">{product.rating}</span>
          <span className="text-xs text-slate-500">({product.reviewCount})</span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span
              className="text-xl font-extrabold gradient-text"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-slate-500 line-through ml-1.5">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <button
            id={`cart-${product.id}`}
            onClick={(e) => {
              e.preventDefault();
              // Cart logic — placeholder
            }}
            className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-200 group-hover:scale-110"
            aria-label={`Add ${product.name} to cart`}
            disabled={!product.inStock}
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}
