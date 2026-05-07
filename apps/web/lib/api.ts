/**
 * lib/api.ts
 *
 * Thin compatibility bridge — all canonical product data has moved to:
 *   app/solar-marketplace/data/products.ts
 *
 * This file re-exports from the canonical source so any existing imports
 * from lib/api.ts (e.g. in MarketplacePreview) continue to work without
 * changes.
 */

export {
  PRODUCTS as MOCK_PRODUCTS,
  getProductBySlug as getProductById,
  getProductsByCategory,
  getFeaturedProducts,
  filterProducts as getProducts,
  type Product,
  type FilterOptions,
  type ProductCategory,
} from '../app/solar-marketplace/data/products';
