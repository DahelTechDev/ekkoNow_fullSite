import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Star,
  ShoppingCart,
  Shield,
  CheckCircle,
  Zap,
  Tag,
} from 'lucide-react';
import {
  PRODUCTS,
  getProductBySlug,
  getVendorById,
  getProductsByCategory,
} from '../data/products';
import VendorBadge from '../components/VendorBadge';
import ProductCard from '../components/ProductCard';

interface Props {
  params: Promise<{ productId: string }>;
}

// Pre-render known product pages at build time
export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ productId: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;
  const product = getProductBySlug(productId);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: product.name,
    description: product.description,
  };
}

// Category visuals — consistent with ProductCard
const CATEGORY_CONFIG: Record<string, { emoji: string; gradient: string }> = {
  'solar-panels': { emoji: '☀️', gradient: 'from-amber-500/20 to-orange-500/10' },
  batteries:      { emoji: '🔋', gradient: 'from-emerald-500/20 to-teal-500/10' },
  inverters:      { emoji: '⚡', gradient: 'from-blue-500/20 to-indigo-500/10' },
  mounting:       { emoji: '🏗️', gradient: 'from-purple-500/20 to-violet-500/10' },
  accessories:    { emoji: '🔌', gradient: 'from-cyan-500/20 to-blue-500/10' },
  'solar-lights': { emoji: '💡', gradient: 'from-yellow-500/20 to-amber-500/10' },
  'mini-systems': { emoji: '🏠', gradient: 'from-rose-500/20 to-red-500/10' },
};

export default async function ProductDetailPage({ params }: Props) {
  const { productId } = await params;
  const product = getProductBySlug(productId);
  if (!product) notFound();

  const vendor = getVendorById(product.vendorId);
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const config = CATEGORY_CONFIG[product.category] ?? {
    emoji: '⚡',
    gradient: 'from-blue-500/20 to-indigo-500/10',
  };

  const discountPct =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100
        )
      : null;

  return (
    <div
      className="min-h-screen pt-20"
      style={{ background: '#0D0A2E' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/solar-marketplace" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            Marketplace
          </Link>
          <span>/</span>
          <Link
            href={`/solar-marketplace/categories/${product.category}`}
            className="hover:text-white transition-colors capitalize"
          >
            {product.category.replace('-', ' ')}
          </Link>
          <span>/</span>
          <span className="text-white truncate max-w-[200px]">{product.name}</span>
        </nav>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* ── LEFT: Visual ───────────────────────────────────── */}
          <div>
            {/* Hero image area */}
            <div
              className={`glass rounded-3xl h-80 flex items-center justify-center bg-gradient-to-br ${config.gradient} relative overflow-hidden mb-5`}
            >
              <span className="text-[120px] leading-none select-none">{config.emoji}</span>

              {product.badge && (
                <span
                  className="absolute top-5 left-5 text-sm font-semibold px-3 py-1.5 rounded-full text-white"
                  style={{ background: product.badgeColor ?? '#3B82F6' }}
                >
                  {product.badge}
                </span>
              )}
              {discountPct && (
                <span className="absolute top-5 right-5 text-sm font-bold px-3 py-1.5 rounded-full text-white bg-red-500">
                  -{discountPct}% OFF
                </span>
              )}
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                {
                  icon: Shield,
                  label: 'Warranty',
                  value: product.specifications['Warranty'] ?? 'Included',
                  color: 'text-blue-400',
                },
                {
                  icon: CheckCircle,
                  label: 'Quality',
                  value: 'Verified Product',
                  color: 'text-emerald-400',
                },
                {
                  icon: Zap,
                  label: 'Availability',
                  value: product.inStock ? 'In Stock' : 'Out of Stock',
                  color: product.inStock ? 'text-emerald-400' : 'text-red-400',
                },
              ].map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="glass rounded-xl p-3 text-center">
                  <Icon className={`w-5 h-5 mx-auto mb-1 ${color}`} />
                  <div className="text-xs text-slate-500">{label}</div>
                  <div className="text-xs font-medium text-white leading-tight mt-0.5">{value}</div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Details ─────────────────────────────────── */}
          <div>
            {/* Brand */}
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
              {product.brand}
            </span>

            {/* Name */}
            <h1
              style={{ fontFamily: 'Outfit, sans-serif' }}
              className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-700'
                    }`}
                  />
                ))}
              </div>
              <span className="text-amber-400 font-semibold">{product.rating}</span>
              <span className="text-slate-400 text-sm">
                ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-end gap-3 mb-5">
              <span
                className="text-4xl font-extrabold gradient-text"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <>
                  <span className="text-xl text-slate-500 line-through mb-0.5">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-sm font-bold text-red-400 mb-0.5">
                    Save {discountPct}%
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-slate-300 leading-relaxed mb-6">{product.description}</p>

            {/* Vendor */}
            {vendor && (
              <div className="mb-6">
                <VendorBadge vendor={vendor} size="md" showCountry />
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                id={`buy-${product.id}`}
                disabled={!product.inStock}
                className="btn-primary text-base py-3.5 flex-1 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-5 h-5" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              <Link
                href="/contact"
                className="btn-secondary text-base py-3.5 flex-1 text-center justify-center"
              >
                Request a Quote
              </Link>
            </div>

            {/* Specifications table */}
            {Object.keys(product.specifications).length > 0 && (
              <div>
                <h2
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                  className="text-lg font-bold text-white mb-4"
                >
                  Specifications
                </h2>
                <div className="glass rounded-2xl overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, val], i) => (
                        <tr
                          key={key}
                          className={`flex justify-between px-5 py-3 ${
                            i % 2 === 0 ? '' : 'bg-white/2'
                          } border-b border-white/5 last:border-0`}
                        >
                          <td className="text-slate-400 font-medium">{key}</td>
                          <td className="text-white text-right">{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Related Products ───────────────────────────────── */}
        {relatedProducts.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2
                style={{ fontFamily: 'Outfit, sans-serif' }}
                className="text-2xl font-extrabold text-white"
              >
                Related <span className="gradient-text">Products</span>
              </h2>
              <Link
                href={`/solar-marketplace/categories/${product.category}`}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
