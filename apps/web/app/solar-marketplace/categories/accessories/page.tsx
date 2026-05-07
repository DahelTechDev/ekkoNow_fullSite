import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getProductsByCategory } from '../../data/products';
import ProductGrid from '../../components/ProductGrid';

export const metadata: Metadata = {
  title: 'Solar Accessories',
  description: 'Shop solar cables, charge controllers, MC4 connectors, and accessories from top brands on EkkoNow.',
};

export default async function AccessoriesPage() {
  const products = getProductsByCategory('accessories');

  return (
    <div className="pt-20 min-h-screen bg-[#1A0B4F]">
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(160deg, #1A0B4F 0%, #12093A 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <Link
            href="/solar-marketplace"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Marketplace
          </Link>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl" style={{ background: 'rgba(6,182,212,0.15)' }}>🔌</div>
            <div>
              <p className="text-xs text-[#1F8BFF] font-semibold uppercase tracking-widest mb-1">Category</p>
              <h1 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-4xl font-extrabold text-white">Solar Accessories</h1>
            </div>
          </div>
          <p className="text-slate-400 max-w-xl">
            Cables, MC4 connectors, charge controllers, circuit breakers, and everything else you need to complete a professional solar installation.
          </p>
          <p className="text-[#2EE6A6] text-sm mt-2 font-medium">{products.length} products available</p>
        </div>
      </section>

      <section className="section-padding bg-[#1A0B4F]">
        <div className="max-w-7xl mx-auto">
          <ProductGrid products={products} emptyMessage="No accessories listed yet — check back soon or contact us for sourcing." />
        </div>
      </section>
    </div>
  );
}
