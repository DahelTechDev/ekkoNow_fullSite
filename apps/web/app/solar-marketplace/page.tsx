'use client';

import { useState, useMemo } from 'react';
import {
  PRODUCTS,
  MARKETPLACE_CATEGORIES,
  filterProducts,
  searchProducts,
  type FilterOptions,
  type ProductCategory,
} from './data/products';
import MarketplaceHero from './components/MarketplaceHero';
import CategoryTabs from './components/CategoryTabs';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import { CurrencyProvider } from './context/CurrencyContext';
import CurrencySelector from './components/CurrencySelector';

export default function SolarMarketplacePage() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({});
  const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(null);

  // Keep Filters panel and CategoryTabs in sync
  const handleCategoryChange = (cat: ProductCategory | null) => {
    setActiveCategory(cat);
    setFilters((prev) => ({ ...prev, category: cat ?? undefined }));
  };

  // Compute filtered products
  const displayedProducts = useMemo(() => {
    let results = search.trim()
      ? searchProducts(search)
      : filterProducts(filters);

    // Also apply category from tab if search mode
    if (search.trim() && activeCategory) {
      results = results.filter((p) => p.category === activeCategory);
    }

    return results;
  }, [search, filters, activeCategory]);

  // Product counts per category for tabs
  const productCounts = useMemo(() => {
    const counts: Partial<Record<ProductCategory | 'all', number>> = {
      all: PRODUCTS.length,
    };
    for (const cat of MARKETPLACE_CATEGORIES) {
      counts[cat.id] = PRODUCTS.filter((p) => p.category === cat.id).length;
    }
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-[#1A0B4F]">
      {/* Hero + Search */}
      <MarketplaceHero
        totalProducts={PRODUCTS.length}
        search={search}
        onSearchChange={setSearch}
      />

      {/* Sticky category tabs */}
      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        productCounts={productCounts}
      />

      {/* Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar Filters */}
          <div className="lg:w-64 shrink-0">
            <Filters
              filters={filters}
              onChange={(f) => {
                setFilters(f);
                setActiveCategory(f.category ?? null);
              }}
              resultCount={displayedProducts.length}
            />
          </div>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {/* Results header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-slate-400">
                Showing{' '}
                <span className="text-white font-medium">{displayedProducts.length}</span>{' '}
                product{displayedProducts.length !== 1 ? 's' : ''}
                {activeCategory && (
                  <> in <span className="text-[#1F8BFF]">{MARKETPLACE_CATEGORIES.find(c => c.id === activeCategory)?.label}</span></>
                )}
                {search && (
                  <> for <span className="text-[#1F8BFF]">&ldquo;{search}&rdquo;</span></>
                )}
              </p>
              <CurrencySelector />
            </div>

            <ProductGrid
              products={displayedProducts}
              emptyMessage={
                search
                  ? `No products matched "${search}". Try a different search term.`
                  : 'No products match your current filters.'
              }
            />
          </div>
        </div>
      </section>

      {/* Vendor CTA Section */}
      <section className="border-t border-blue-500/10" style={{ background: '#0D0A2E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="glass rounded-3xl p-10 md:p-14 text-center shadow-xl shadow-blue-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
            
            <h2
              style={{ fontFamily: 'Outfit, sans-serif' }}
              className="text-3xl md:text-4xl font-extrabold text-white mb-4 relative z-10"
            >
              Sell Your Products on Ekko Now
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 relative z-10">
              Join our growing network of solar and renewable energy vendors and reach customers across Africa.
            </p>
            <a href="/contact" className="btn-primary text-base py-3.5 px-10 relative z-10">
              Become a Vendor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
