import type { Product } from '@/lib/types';
import ProductCard from './ProductCard';
import { Package } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
}

export default function ProductGrid({ products, loading = false }: ProductGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="glass rounded-2xl overflow-hidden animate-pulse">
            <div className="h-44 bg-white/5" />
            <div className="p-5 space-y-3">
              <div className="h-3 bg-white/5 rounded-full w-1/3" />
              <div className="h-4 bg-white/5 rounded-full w-full" />
              <div className="h-4 bg-white/5 rounded-full w-3/4" />
              <div className="h-6 bg-white/5 rounded-full w-1/2 mt-4" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="glass rounded-2xl p-16 text-center">
        <Package className="w-12 h-12 text-slate-600 mx-auto mb-4" />
        <h3 style={{ fontFamily: 'Outfit, sans-serif' }} className="text-lg font-semibold text-white mb-2">
          No products found
        </h3>
        <p className="text-slate-400 text-sm">Try adjusting your filters or search terms.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
