import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getProductsByCategory } from '../../data/products';
import ProductGrid from '../../components/ProductGrid';

export const metadata: Metadata = {
  title: 'Batteries',
  description:
    'Shop LiFePO4 and lithium-ion solar batteries — 5kWh to 100kWh+ storage systems from top brands on EkkoNow.',
};

export default async function BatteriesPage() {
  const products = getProductsByCategory('batteries');

  return (
    <div className="pt-20 min-h-screen" style={{ background: '#0D0A2E' }}>
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(160deg, #0D0A2E 0%, #120E3A 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <Link
            href="/solar-marketplace"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Marketplace
          </Link>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 flex items-center justify-center text-3xl">🔋</div>
            <div>
              <p className="text-xs text-emerald-400 font-semibold uppercase tracking-widest mb-1">Category</p>
              <h1 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-4xl font-extrabold text-white">Batteries</h1>
            </div>
          </div>
          <p className="text-slate-400 max-w-xl">
            LiFePO4 and lithium-ion battery systems for residential and commercial solar storage.
            Scalable, safe, and designed for African conditions.
          </p>
          <p className="text-emerald-400 text-sm mt-2 font-medium">{products.length} products available</p>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#0D0A2E' }}>
        <div className="max-w-7xl mx-auto">
          <ProductGrid products={products} />
        </div>
      </section>
    </div>
  );
}
