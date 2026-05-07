'use client';

import { useState } from 'react';
import type { ProductCategory } from '../data/products';
import { MARKETPLACE_CATEGORIES } from '../data/products';

interface CategoryTabsProps {
  activeCategory: ProductCategory | null;
  onCategoryChange: (cat: ProductCategory | null) => void;
  productCounts: Partial<Record<ProductCategory | 'all', number>>;
}

export default function CategoryTabs({
  activeCategory,
  onCategoryChange,
  productCounts,
}: CategoryTabsProps) {
  return (
    <div
      className="sticky top-20 z-30 px-4 sm:px-6 lg:px-8 py-3"
      style={{ background: 'rgba(13, 10, 46, 0.90)', backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {/* All tab */}
          <button
            id="tab-all"
            onClick={() => onCategoryChange(null)}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeCategory === null
                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <span>🛒</span>
            <span>All Products</span>
            <span
              className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                activeCategory === null ? 'bg-blue-500/30 text-blue-300' : 'bg-white/5 text-slate-500'
              }`}
            >
              {productCounts['all'] ?? 0}
            </span>
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-white/10 flex-shrink-0" />

          {/* Category tabs */}
          {MARKETPLACE_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`tab-${cat.id}`}
                onClick={() => onCategoryChange(cat.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? 'border-current'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border-transparent'
                }`}
                style={
                  isActive
                    ? {
                        background: `${cat.color}15`,
                        color: cat.color,
                        borderColor: `${cat.color}40`,
                      }
                    : {}
                }
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                {productCounts[cat.id] !== undefined && (
                  <span
                    className="text-xs px-1.5 py-0.5 rounded-full font-semibold"
                    style={
                      isActive
                        ? { background: `${cat.color}25`, color: cat.color }
                        : { background: 'rgba(255,255,255,0.05)', color: '#94A3B8' }
                    }
                  >
                    {productCounts[cat.id]}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
