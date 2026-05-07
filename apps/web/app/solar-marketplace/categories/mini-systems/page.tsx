import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getProductsByCategory } from '../../data/products';
import ProductGrid from '../../components/ProductGrid';

export const metadata: Metadata = {
  title: 'Mini Systems',
  description:
    'Shop all-in-one plug and play solar kits and mini systems on EkkoNow.',
};

export default async function MiniSystemsPage() {
  const products = getProductsByCategory('mini-systems');

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
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl" style={{ background: 'rgba(244, 63, 94, 0.15)' }}>🏠</div>
            <div>
              <p className="text-xs text-rose-500 font-semibold uppercase tracking-widest mb-1">Category</p>
              <h1 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-4xl font-extrabold text-white">Mini Systems</h1>
            </div>
          </div>
          <p className="text-slate-400 max-w-xl">
            Complete entry-level solar systems and plug & play kits for lighting, fans, and basic appliances. The perfect starting point for energy independence.
          </p>
          <p className="text-rose-500 text-sm mt-2 font-medium">{products.length} products available</p>
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
