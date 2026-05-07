'use client';

import Link from 'next/link';
import { Star, ShoppingCart, Zap } from 'lucide-react';
import type { Product } from '../data/products';
import VendorBadge from './VendorBadge';
import { VENDORS } from '../data/products';
import { useCurrency } from '../context/CurrencyContext';

interface ProductCardProps {
  product: Product;
}

const CATEGORY_CONFIG: Record<
  string,
  { emoji: string; gradient: string }
> = {
  'solar-panels': { emoji: '☀️', gradient: 'from-amber-500/20 to-orange-500/10' },
  batteries:      { emoji: '🔋', gradient: 'from-emerald-500/20 to-teal-500/10' },
  inverters:      { emoji: '⚡', gradient: 'from-blue-500/20 to-indigo-500/10' },
  mounting:       { emoji: '🏗️', gradient: 'from-purple-500/20 to-violet-500/10' },
  accessories:    { emoji: '🔌', gradient: 'from-cyan-500/20 to-blue-500/10' },
  'solar-lights': { emoji: '💡', gradient: 'from-yellow-500/20 to-amber-500/10' },
  'mini-systems': { emoji: '🏠', gradient: 'from-rose-500/20 to-red-500/10' },
};

export default function ProductCard({ product }: ProductCardProps) {
  const config = CATEGORY_CONFIG[product.category] ?? {
    emoji: '⚡',
    gradient: 'from-blue-500/20 to-indigo-500/10',
  };

  const { format } = useCurrency();

  const discountPct =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100
        )
      : null;

  const vendor = VENDORS.find((v) => v.id === product.vendorId);

  return (
    <Link
      href={`/solar-marketplace/${product.slug}`}
      className="group glass rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30"
    >
      {/* Visual */}
      <div
        className={`h-44 flex items-center justify-center bg-gradient-to-br ${config.gradient} relative overflow-hidden flex-shrink-0`}
      >
        <span className="text-7xl transition-transform duration-300 group-hover:scale-110 select-none">
          {config.emoji}
        </span>

        {/* Badge */}
        {product.badge && (
          <span
            className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full text-white"
            style={{ background: product.badgeColor ?? '#3B82F6' }}
          >
            {product.badge}
          </span>
        )}

        {/* Discount */}
        {discountPct && (
          <span className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full bg-red-500/80 text-white">
            -{discountPct}%
          </span>
        )}

        {/* Out of stock */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-xs font-semibold text-slate-200 bg-black/60 px-3 py-1 rounded-full">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Brand */}
        <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-1">
          {product.brand}
        </span>

        {/* Name */}
        <h3
          style={{ fontFamily: 'Outfit, sans-serif' }}
          className="text-sm font-semibold text-white mb-2 leading-snug group-hover:text-blue-300 transition-colors line-clamp-2"
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.round(product.rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-slate-700'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-amber-400 font-medium">
            {product.rating}
          </span>
          <span className="text-xs text-slate-500">({product.reviewCount})</span>
        </div>

        {/* Vendor */}
        {vendor && (
          <div className="mb-3">
            <VendorBadge vendor={vendor} size="sm" />
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-500 border border-white/8"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price + Cart */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span
              className="text-xl font-extrabold gradient-text"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {format(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-slate-500 line-through ml-1.5">
                {format(product.originalPrice)}
              </span>
            )}
          </div>

          <button
            id={`cart-${product.id}`}
            onClick={(e) => {
              e.preventDefault();
              // TODO: dispatch to cart store
            }}
            disabled={!product.inStock}
            aria-label={`Add ${product.name} to cart`}
            className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-200 group-hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}
