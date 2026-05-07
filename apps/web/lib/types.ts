// ─────────────────────────────────────────────
// EkkoNow Global TypeScript Types (apps/web)
// ─────────────────────────────────────────────

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  brand: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  images?: string[];
  badge?: string;
  inStock: boolean;
  specifications?: Record<string, string>;
  vendorId?: string;
  vendorName?: string;
  slug: string;
}

export type ProductCategory =
  | 'solar-panels'
  | 'batteries'
  | 'inverters'
  | 'mounting'
  | 'accessories';

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  productCount: number;
}

export interface Vendor {
  id: string;
  name: string;
  logoUrl: string;
  rating: number;
  productCount: number;
  verified: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface SolutionItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface ImpactStat {
  id: string;
  value: string;
  label: string;
  suffix?: string;
  description?: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  website?: string;
  tier: 'platinum' | 'gold' | 'silver';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedin?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

export interface FilterOptions {
  category?: ProductCategory;
  priceMin?: number;
  priceMax?: number;
  brand?: string;
  rating?: number;
  inStock?: boolean;
  sortBy?: 'price-asc' | 'price-desc' | 'rating' | 'newest';
}
