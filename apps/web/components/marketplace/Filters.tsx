'use client';

import { useState } from 'react';
import type { FilterOptions, ProductCategory } from '@/lib/types';
import { SlidersHorizontal, X } from 'lucide-react';

interface FiltersProps {
  filters: FilterOptions;
  onChange: (filters: FilterOptions) => void;
}

const CATEGORIES: { label: string; value: ProductCategory }[] = [
  { label: 'Solar Panels', value: 'solar-panels' },
  { label: 'Batteries', value: 'batteries' },
  { label: 'Inverters', value: 'inverters' },
  { label: 'Mounting', value: 'mounting' },
  { label: 'Accessories', value: 'accessories' },
];

const SORT_OPTIONS = [
  { label: 'Newest', value: '' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Highest Rated', value: 'rating' },
];

export default function Filters({ filters, onChange }: FiltersProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const update = (patch: Partial<FilterOptions>) => onChange({ ...filters, ...patch });

  const hasActive =
    !!filters.category || !!filters.priceMax || !!filters.priceMin || !!filters.brand || !!filters.sortBy;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h4 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-sm font-semibold text-white mb-3">
          Category
        </h4>
        <div className="space-y-1.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              id={`filter-cat-${cat.value}`}
              onClick={() =>
                update({ category: filters.category === cat.value ? undefined : cat.value })
              }
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                filters.category === cat.value
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-sm font-semibold text-white mb-3">
          Price Range
        </h4>
        <div className="flex gap-2">
          <input
            id="filter-price-min"
            type="number"
            placeholder="Min"
            value={filters.priceMin ?? ''}
            onChange={(e) => update({ priceMin: e.target.value ? Number(e.target.value) : undefined })}
            className="w-full px-3 py-2 rounded-lg bg-white/5 border border-blue-500/15 text-white text-sm placeholder-slate-600 outline-none focus:border-blue-500/40 transition-colors"
          />
          <input
            id="filter-price-max"
            type="number"
            placeholder="Max"
            value={filters.priceMax ?? ''}
            onChange={(e) => update({ priceMax: e.target.value ? Number(e.target.value) : undefined })}
            className="w-full px-3 py-2 rounded-lg bg-white/5 border border-blue-500/15 text-white text-sm placeholder-slate-600 outline-none focus:border-blue-500/40 transition-colors"
          />
        </div>
      </div>

      {/* Sort */}
      <div>
        <h4 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-sm font-semibold text-white mb-3">
          Sort By
        </h4>
        <select
          id="filter-sort"
          value={filters.sortBy ?? ''}
          onChange={(e) =>
            update({ sortBy: (e.target.value as FilterOptions['sortBy']) || undefined })
          }
          className="w-full px-3 py-2 rounded-lg bg-[#120E3A] border border-blue-500/15 text-white text-sm outline-none focus:border-blue-500/40 transition-colors"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Clear */}
      {hasActive && (
        <button
          id="filter-clear"
          onClick={() => onChange({})}
          className="w-full flex items-center justify-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors py-2 border border-red-500/20 rounded-lg hover:bg-red-500/5"
        >
          <X className="w-4 h-4" /> Clear Filters
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <button
        id="filter-mobile-toggle"
        onClick={() => setMobileOpen(true)}
        className="lg:hidden btn-secondary text-sm mb-4 flex items-center gap-2"
      >
        <SlidersHorizontal className="w-4 h-4" />
        Filters {hasActive && '(active)'}
      </button>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div className="relative ml-auto w-72 h-full glass overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 style={{ fontFamily: 'Outfit, sans-serif' }} className="font-bold text-white">Filters</h3>
              <button onClick={() => setMobileOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block glass rounded-2xl p-6 sticky top-24">
        <div className="flex items-center gap-2 mb-6">
          <SlidersHorizontal className="w-4 h-4 text-blue-400" />
          <h3 style={{ fontFamily: 'Outfit, sans-serif' }} className="font-semibold text-white">Filters</h3>
        </div>
        <FilterContent />
      </div>
    </>
  );
}
