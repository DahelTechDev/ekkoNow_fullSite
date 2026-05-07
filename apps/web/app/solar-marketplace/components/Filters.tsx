'use client';

import { useState } from 'react';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import type { FilterOptions, ProductCategory } from '../data/products';
import { MARKETPLACE_CATEGORIES, getAllBrands, PRODUCTS } from '../data/products';

interface FiltersProps {
  filters: FilterOptions;
  onChange: (filters: FilterOptions) => void;
  resultCount: number;
}

const SORT_OPTIONS: { label: string; value: NonNullable<FilterOptions['sortBy']> | '' }[] = [
  { label: 'Relevance', value: '' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
];

const PRICE_PRESETS = [
  { label: 'Under $500', min: undefined, max: 500 },
  { label: '$500 – $1,500', min: 500, max: 1500 },
  { label: '$1,500 – $3,000', min: 1500, max: 3000 },
  { label: '$3,000+', min: 3000, max: undefined },
];

export default function Filters({ filters, onChange, resultCount }: FiltersProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const brands = getAllBrands();

  const update = (patch: Partial<FilterOptions>) => onChange({ ...filters, ...patch });

  const hasActive =
    !!filters.category ||
    filters.priceMin !== undefined ||
    filters.priceMax !== undefined ||
    !!filters.brand ||
    !!filters.sortBy;

  const activeCount = [
    filters.category,
    filters.priceMin !== undefined || filters.priceMax !== undefined ? true : false,
    filters.brand,
    filters.sortBy,
  ].filter(Boolean).length;

  const FilterPanel = () => (
    <div className="space-y-7">

      {/* Sort */}
      <div>
        <label
          style={{ fontFamily: 'Outfit, sans-serif' }}
          className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3"
        >
          Sort By
        </label>
        <div className="relative">
          <select
            id="filter-sort"
            value={filters.sortBy ?? ''}
            onChange={(e) =>
              update({ sortBy: (e.target.value as FilterOptions['sortBy']) || undefined })
            }
            className="w-full appearance-none pl-3 pr-8 py-2.5 rounded-xl bg-white/5 border border-blue-500/15 text-white text-sm outline-none focus:border-blue-500/40 transition-colors cursor-pointer"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[#120E3A]">
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
      </div>

      {/* Category */}
      <div>
        <label
          style={{ fontFamily: 'Outfit, sans-serif' }}
          className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3"
        >
          Category
        </label>
        <div className="space-y-1">
          {MARKETPLACE_CATEGORIES.map((cat) => {
            const isActive = filters.category === cat.id;
            return (
              <button
                key={cat.id}
                id={`filter-cat-${cat.id}`}
                onClick={() =>
                  update({ category: isActive ? undefined : cat.id })
                }
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-all duration-150 ${
                  isActive
                    ? 'text-white border'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
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
                <span className="flex-1 text-left">{cat.label}</span>
                <span
                  className="text-xs px-1.5 py-0.5 rounded-full"
                  style={
                    isActive
                      ? { background: `${cat.color}25`, color: cat.color }
                      : { background: 'rgba(255,255,255,0.05)', color: '#64748B' }
                  }
                >
                  {cat.productCount}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Price presets */}
      <div>
        <label
          style={{ fontFamily: 'Outfit, sans-serif' }}
          className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3"
        >
          Price Range
        </label>
        <div className="space-y-1.5 mb-3">
          {PRICE_PRESETS.map((preset) => {
            const isActive =
              filters.priceMin === preset.min && filters.priceMax === preset.max;
            return (
              <button
                key={preset.label}
                id={`filter-price-${preset.label.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() =>
                  isActive
                    ? update({ priceMin: undefined, priceMax: undefined })
                    : update({ priceMin: preset.min, priceMax: preset.max })
                }
                className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-all duration-150 ${
                  isActive
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {preset.label}
              </button>
            );
          })}
        </div>
        {/* Custom range */}
        <div className="flex gap-2">
          <input
            id="filter-price-min"
            type="number"
            placeholder="Min $"
            value={filters.priceMin ?? ''}
            onChange={(e) =>
              update({ priceMin: e.target.value ? Number(e.target.value) : undefined })
            }
            className="w-full px-3 py-2 rounded-xl bg-white/5 border border-blue-500/15 text-white text-sm placeholder-slate-600 outline-none focus:border-blue-500/40 transition-colors"
          />
          <input
            id="filter-price-max"
            type="number"
            placeholder="Max $"
            value={filters.priceMax ?? ''}
            onChange={(e) =>
              update({ priceMax: e.target.value ? Number(e.target.value) : undefined })
            }
            className="w-full px-3 py-2 rounded-xl bg-white/5 border border-blue-500/15 text-white text-sm placeholder-slate-600 outline-none focus:border-blue-500/40 transition-colors"
          />
        </div>
      </div>

      {/* Brand */}
      <div>
        <label
          style={{ fontFamily: 'Outfit, sans-serif' }}
          className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3"
        >
          Brand
        </label>
        <div className="space-y-1">
          {brands.map((brand) => {
            const isActive = filters.brand === brand;
            return (
              <button
                key={brand}
                id={`filter-brand-${brand.toLowerCase().replace(/\s/g, '-')}`}
                onClick={() => update({ brand: isActive ? undefined : brand })}
                className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-all duration-150 ${
                  isActive
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {brand}
              </button>
            );
          })}
        </div>
      </div>

      {/* Clear All */}
      {hasActive && (
        <button
          id="filter-clear"
          onClick={() => onChange({})}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm text-red-400 hover:text-red-300 border border-red-500/20 hover:bg-red-500/5 transition-all"
        >
          <X className="w-4 h-4" />
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile toggle bar */}
      <div className="lg:hidden flex items-center justify-between mb-5">
        <p className="text-sm text-slate-400">
          <span className="text-white font-medium">{resultCount}</span>{' '}
          product{resultCount !== 1 ? 's' : ''}
        </p>
        <button
          id="filter-mobile-toggle"
          onClick={() => setMobileOpen(true)}
          className="flex items-center gap-2 btn-secondary text-sm py-2 px-4"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters{activeCount > 0 && ` (${activeCount})`}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative ml-auto w-80 h-full glass overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h3
                style={{ fontFamily: 'Outfit, sans-serif' }}
                className="font-bold text-white text-lg"
              >
                Filters
              </h3>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterPanel />
          </div>
        </div>
      )}

      {/* Desktop sticky sidebar */}
      <div className="hidden lg:block glass rounded-2xl p-6 sticky top-36 max-h-[calc(100vh-10rem)] overflow-y-auto">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-blue-400" />
            <h3
              style={{ fontFamily: 'Outfit, sans-serif' }}
              className="font-semibold text-white"
            >
              Filters
            </h3>
          </div>
          {activeCount > 0 && (
            <span className="text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded-full font-medium">
              {activeCount} active
            </span>
          )}
        </div>
        <FilterPanel />
      </div>
    </>
  );
}
