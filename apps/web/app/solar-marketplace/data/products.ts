// ─────────────────────────────────────────────────────────────
// EkkoNow Solar Marketplace — Product Data
// Single source of truth for all marketplace products & categories
// ─────────────────────────────────────────────────────────────

export type ProductCategory =
  | 'solar-panels'
  | 'batteries'
  | 'inverters'
  | 'mounting'
  | 'accessories'
  | 'solar-lights'
  | 'mini-systems';

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  brand: string;
  vendorId: string;
  vendorName: string;
  vendorVerified: boolean;
  rating: number;
  reviewCount: number;
  badge?: string;
  badgeColor?: string;
  inStock: boolean;
  specifications: Record<string, string>;
  tags: string[];
  featured?: boolean;
}

export interface Vendor {
  id: string;
  name: string;
  verified: boolean;
  country: string;
  rating: number;
  productCount: number;
  logoEmoji: string;
}

export interface MarketplaceCategory {
  id: ProductCategory;
  label: string;
  icon: string;
  description: string;
  productCount: number;
  color: string;
}

// ─── Vendors ──────────────────────────────────────────────────
export const VENDORS: Vendor[] = [
  { id: 'sunpower', name: 'SunPower Corp', verified: true, country: 'USA', rating: 4.9, productCount: 12, logoEmoji: '☀️' },
  { id: 'jinko', name: 'JinkoSolar', verified: true, country: 'China', rating: 4.8, productCount: 18, logoEmoji: '🌞' },
  { id: 'volta', name: 'Volta Energy', verified: true, country: 'Nigeria', rating: 4.8, productCount: 8, logoEmoji: '🔋' },
  { id: 'byd', name: 'BYD Energy', verified: true, country: 'China', rating: 4.7, productCount: 10, logoEmoji: '⚡' },
  { id: 'solax', name: 'SolaX Power', verified: true, country: 'China', rating: 4.7, productCount: 15, logoEmoji: '🔌' },
  { id: 'growatt', name: 'Growatt Technologies', verified: true, country: 'China', rating: 4.6, productCount: 20, logoEmoji: '🏭' },
  { id: 'longi', name: 'LONGi Solar', verified: true, country: 'China', rating: 4.8, productCount: 14, logoEmoji: '💡' },
  { id: 'ekko-install', name: 'EkkoNow Certified Install', verified: true, country: 'Nigeria', rating: 5.0, productCount: 5, logoEmoji: '🛡️' },
];

// ─── Categories ───────────────────────────────────────────────
export const MARKETPLACE_CATEGORIES: MarketplaceCategory[] = [
  {
    id: 'solar-panels',
    label: 'Solar Panels',
    icon: '☀️',
    description: 'Mono, poly & bifacial modules',
    productCount: 24,
    color: '#F59E0B',
  },
  {
    id: 'batteries',
    label: 'Batteries',
    icon: '🔋',
    description: 'LiFePO4 & lithium-ion storage',
    productCount: 16,
    color: '#10B981',
  },
  {
    id: 'inverters',
    label: 'Inverters',
    icon: '⚡',
    description: 'Hybrid, off-grid & grid-tie',
    productCount: 18,
    color: '#3B82F6',
  },
  {
    id: 'mounting',
    label: 'Mounting',
    icon: '🏗️',
    description: 'Rooftop & ground-mount racking',
    productCount: 10,
    color: '#8B5CF6',
  },
  {
    id: 'accessories',
    label: 'Accessories',
    icon: '🔌',
    description: 'Cables, connectors & monitoring',
    productCount: 32,
    color: '#06B6D4',
  },
  {
    id: 'solar-lights',
    label: 'Solar Lights',
    icon: '💡',
    description: 'Streetlights, floodlights & home lighting',
    productCount: 15,
    color: '#EAB308',
  },
  {
    id: 'mini-systems',
    label: 'Mini Systems',
    icon: '🏠',
    description: 'All-in-one plug & play solar kits',
    productCount: 8,
    color: '#F43F5E',
  },
];

// ─── Products ─────────────────────────────────────────────────
export const PRODUCTS: Product[] = [
  // ── Solar Panels ──────────────────────────────────────────
  {
    id: 'sunpower-400w',
    slug: 'sunpower-400w',
    name: 'SunPower 400W Monocrystalline Panel',
    description:
      'Industry-leading 21.5% efficiency monocrystalline panel engineered for residential and commercial rooftops. Exceptional low-light performance and 25-year linear power warranty.',
    price: 299,
    originalPrice: 349,
    category: 'solar-panels',
    brand: 'SunPower',
    vendorId: 'sunpower',
    vendorName: 'SunPower Corp',
    vendorVerified: true,
    rating: 4.9,
    reviewCount: 284,
    badge: 'Best Seller',
    badgeColor: '#F59E0B',
    inStock: true,
    featured: true,
    tags: ['residential', 'monocrystalline', '400W', 'high-efficiency'],
    specifications: {
      Wattage: '400W',
      'Cell Type': 'Monocrystalline PERC',
      Efficiency: '21.5%',
      Dimensions: '1755 × 1038 × 35mm',
      Weight: '19.5kg',
      'Max Voltage': '49.5V',
      Warranty: '25 Years',
      'Temperature Coefficient': '-0.29% / °C',
    },
  },
  {
    id: 'jinko-550w-bifacial',
    slug: 'jinko-550w-bifacial',
    name: 'JinkoSolar 550W Bifacial Tiger Neo',
    description:
      'Next-generation bifacial panel capturing solar energy from both front and rear surfaces. Ideal for ground-mount and flat-roof commercial installations for maximum yield.',
    price: 389,
    originalPrice: 429,
    category: 'solar-panels',
    brand: 'JinkoSolar',
    vendorId: 'jinko',
    vendorName: 'JinkoSolar',
    vendorVerified: true,
    rating: 4.8,
    reviewCount: 142,
    badge: 'Premium',
    badgeColor: '#8B5CF6',
    inStock: true,
    featured: true,
    tags: ['commercial', 'bifacial', '550W', 'ground-mount'],
    specifications: {
      Wattage: '550W',
      'Cell Type': 'N-Type Mono Bifacial',
      Efficiency: '22.3%',
      Dimensions: '2278 × 1134 × 30mm',
      Weight: '28.0kg',
      Warranty: '30 Years',
      'Bifaciality Factor': '80%',
    },
  },
  {
    id: 'longi-375w',
    slug: 'longi-375w',
    name: 'LONGi 375W Hi-MO 5 Residential Panel',
    description:
      'Reliable, affordable monocrystalline panel with strong performance in African climate conditions. The go-to choice for residential solar installers across West Africa.',
    price: 219,
    category: 'solar-panels',
    brand: 'LONGi',
    vendorId: 'longi',
    vendorName: 'LONGi Solar',
    vendorVerified: true,
    rating: 4.7,
    reviewCount: 321,
    badge: 'Value Pick',
    badgeColor: '#10B981',
    inStock: true,
    tags: ['residential', 'monocrystalline', '375W', 'affordable'],
    specifications: {
      Wattage: '375W',
      'Cell Type': 'Monocrystalline PERC',
      Efficiency: '20.6%',
      Dimensions: '1755 × 1038 × 35mm',
      Weight: '19.0kg',
      Warranty: '25 Years',
    },
  },

  // ── Batteries ─────────────────────────────────────────────
  {
    id: 'volta-10kwh',
    slug: 'volta-10kwh',
    name: 'Volta LiFePO4 10kWh Battery Bank',
    description:
      'High-cycle lithium iron phosphate battery with 6,000+ charge cycles and integrated BMS. Designed for Africa — withstands heat, humidity, and frequent charge-discharge cycles.',
    price: 2499,
    originalPrice: 2999,
    category: 'batteries',
    brand: 'Volta',
    vendorId: 'volta',
    vendorName: 'Volta Energy',
    vendorVerified: true,
    rating: 4.8,
    reviewCount: 156,
    badge: 'Top Rated',
    badgeColor: '#10B981',
    inStock: true,
    featured: true,
    tags: ['LiFePO4', '10kWh', 'off-grid', 'stackable'],
    specifications: {
      Capacity: '10kWh',
      Chemistry: 'LiFePO4',
      'Cycle Life': '6,000+ cycles',
      Voltage: '48V',
      BMS: 'Integrated',
      'Operating Temp': '-10°C to 55°C',
      Warranty: '10 Years',
      'Max Stack': '5 units (50kWh)',
    },
  },
  {
    id: 'byd-lfp-5kwh',
    slug: 'byd-lfp-5kwh',
    name: 'BYD Battery-Box Premium LVS 5kWh',
    description:
      'Modular LFP wall-mounted battery with sleek design and simple expansion. Stackable from 5kWh to 66kWh in a single tower — perfect for growing energy needs.',
    price: 1299,
    category: 'batteries',
    brand: 'BYD',
    vendorId: 'byd',
    vendorName: 'BYD Energy',
    vendorVerified: true,
    rating: 4.7,
    reviewCount: 89,
    badge: 'Popular',
    badgeColor: '#3B82F6',
    inStock: true,
    tags: ['LFP', '5kWh', 'wall-mounted', 'stackable'],
    specifications: {
      Capacity: '5kWh',
      Chemistry: 'LFP',
      Voltage: '48V nominal',
      'Max Stack': '13 units (66kWh)',
      'Depth of Discharge': '90%',
      Warranty: '10 Years',
    },
  },
  {
    id: 'volta-5kwh-slim',
    slug: 'volta-5kwh-slim',
    name: 'Volta SlimPack 5kWh Wall Battery',
    description:
      'Compact wall-mounted LiFePO4 battery ideal for apartments and small homes. Ultra-slim 150mm depth fits easily in any utility room.',
    price: 1199,
    originalPrice: 1399,
    category: 'batteries',
    brand: 'Volta',
    vendorId: 'volta',
    vendorName: 'Volta Energy',
    vendorVerified: true,
    rating: 4.6,
    reviewCount: 54,
    badge: 'New',
    badgeColor: '#06B6D4',
    inStock: true,
    tags: ['LiFePO4', '5kWh', 'compact', 'apartment'],
    specifications: {
      Capacity: '5kWh',
      Chemistry: 'LiFePO4',
      Depth: '150mm',
      Voltage: '48V',
      Warranty: '8 Years',
    },
  },

  // ── Inverters ─────────────────────────────────────────────
  {
    id: 'solax-5kw-hybrid',
    slug: 'solax-5kw-hybrid',
    name: 'SolaX X3-Hybrid 5kW Inverter',
    description:
      'Three-phase hybrid inverter with dual MPPT, built-in Wi-Fi monitoring, and compatibility with all major battery brands. The industry standard for hybrid solar systems in Africa.',
    price: 1199,
    originalPrice: 1499,
    category: 'inverters',
    brand: 'SolaX',
    vendorId: 'solax',
    vendorName: 'SolaX Power',
    vendorVerified: true,
    rating: 4.7,
    reviewCount: 203,
    badge: 'Best Hybrid',
    badgeColor: '#3B82F6',
    inStock: true,
    featured: true,
    tags: ['hybrid', '5kW', '3-phase', 'MPPT', 'Wi-Fi'],
    specifications: {
      'Rated Power': '5kW',
      Type: 'Hybrid (Grid-Tie + Battery)',
      Phases: '3-Phase',
      MPPT: 'Dual MPPT',
      'Battery Compatibility': 'All major brands',
      Monitoring: 'Wi-Fi + App',
      Efficiency: '97.6%',
      Warranty: '5 Years',
    },
  },
  {
    id: 'growatt-3kw',
    slug: 'growatt-3kw',
    name: 'Growatt SPF 3000TL Off-Grid Inverter',
    description:
      'Pure sine wave off-grid inverter ideal for rural homes and small businesses without grid access. Dual MPPT and support for 24V or 48V battery banks.',
    price: 649,
    originalPrice: 799,
    category: 'inverters',
    brand: 'Growatt',
    vendorId: 'growatt',
    vendorName: 'Growatt Technologies',
    vendorVerified: true,
    rating: 4.6,
    reviewCount: 98,
    badge: 'Sale',
    badgeColor: '#EC4899',
    inStock: true,
    tags: ['off-grid', '3kW', 'pure-sine', '24V', '48V'],
    specifications: {
      'Rated Power': '3kW',
      Type: 'Off-Grid',
      Waveform: 'Pure Sine Wave',
      'Battery Voltage': '24V / 48V',
      MPPT: 'Dual MPPT',
      Efficiency: '93%',
      Warranty: '3 Years',
    },
  },
  {
    id: 'growatt-5kw-hybrid',
    slug: 'growatt-5kw-hybrid',
    name: 'Growatt MIN 5000TL-XH Hybrid Inverter',
    description:
      'Single-phase hybrid inverter with EPS function for instant backup during grid outages. Budget-friendly hybrid option without compromising on performance.',
    price: 799,
    originalPrice: 999,
    category: 'inverters',
    brand: 'Growatt',
    vendorId: 'growatt',
    vendorName: 'Growatt Technologies',
    vendorVerified: true,
    rating: 4.5,
    reviewCount: 74,
    badge: 'Budget Pick',
    badgeColor: '#10B981',
    inStock: true,
    tags: ['hybrid', '5kW', '1-phase', 'EPS', 'budget'],
    specifications: {
      'Rated Power': '5kW',
      Type: 'Hybrid (Single Phase)',
      EPS: 'Yes (< 20ms switchover)',
      MPPT: 'Dual MPPT',
      Monitoring: 'Wi-Fi',
      Warranty: '5 Years',
    },
  },

  // ── Mounting ──────────────────────────────────────────────
  {
    id: 'eko-mount-rooftop',
    slug: 'eko-mount-rooftop',
    name: 'EkoMount Pro Rooftop Racking System',
    description:
      'Adjustable anodized aluminum rooftop racking system for corrugated metal or tile roofs. Pre-assembled for fast installation. Fits panels up to 700W.',
    price: 189,
    category: 'mounting',
    brand: 'EkoMount',
    vendorId: 'ekko-install',
    vendorName: 'EkkoNow Certified Install',
    vendorVerified: true,
    rating: 4.8,
    reviewCount: 67,
    badge: 'EkkoNow Branded',
    badgeColor: '#3B82F6',
    inStock: true,
    tags: ['rooftop', 'aluminum', 'corrugated', 'tile', 'adjustable'],
    specifications: {
      Material: 'Anodized Aluminum T6',
      'Roof Type': 'Corrugated metal / Tile',
      'Panel Compatibility': 'Up to 700W',
      'Wind Load': 'Up to 200km/h',
      Warranty: '15 Years',
    },
  },

  // ── Accessories ───────────────────────────────────────────
  {
    id: 'mc4-connector-set',
    slug: 'mc4-connector-set',
    name: 'MC4 Solar Connector Pairs (20 Pack)',
    description:
      'IP68-rated MC4 connectors compatible with all major solar panel brands. UV-resistant housing rated for 30 years outdoor use.',
    price: 24,
    category: 'accessories',
    brand: 'SolarFit',
    vendorId: 'ekko-install',
    vendorName: 'EkkoNow Certified Install',
    vendorVerified: true,
    rating: 4.7,
    reviewCount: 412,
    inStock: true,
    tags: ['MC4', 'connectors', 'accessories', 'IP68'],
    specifications: {
      Rating: 'IP68 Waterproof',
      Compatibility: 'All major panel brands',
      'UV Rating': '30 Years',
      'Pack Size': '20 Pairs',
      'Wire Range': '4mm² – 6mm²',
    },
  },
  {
    id: 'solar-cable-4mm',
    slug: 'solar-cable-4mm',
    name: 'Solar DC Cable 4mm² — 50m Roll',
    description:
      'Double-insulated, UV-resistant TÜV-certified PV cable suitable for all outdoor solar installations. Rated for 1500V DC systems.',
    price: 69,
    category: 'accessories',
    brand: 'SolarFit',
    vendorId: 'ekko-install',
    vendorName: 'EkkoNow Certified Install',
    vendorVerified: true,
    rating: 4.6,
    reviewCount: 198,
    inStock: true,
    tags: ['cable', 'DC', 'accessories', '4mm', 'UV-resistant'],
    specifications: {
      Cross_Section: '4mm²',
      Length: '50m Roll',
      'Voltage Rating': '1500V DC',
      Certification: 'TÜV / IEC 62930',
      Insulation: 'Double XLPE',
    },
  },

  // ── Solar Lights ───────────────────────────────────────────
  {
    id: 'eko-street-light-100w',
    slug: 'eko-street-light-100w',
    name: 'EkkoStreet 100W Integrated Solar Light',
    description: 'All-in-one solar street light with motion sensor and dusk-to-dawn automation. Perfect for community roads and large compounds.',
    price: 129,
    category: 'solar-lights',
    brand: 'EkkoLight',
    vendorId: 'ekko-install',
    vendorName: 'EkkoNow Certified Install',
    vendorVerified: true,
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    badge: 'Popular',
    badgeColor: '#EAB308',
    tags: ['street-light', '100W', 'motion-sensor', 'outdoor'],
    specifications: {
      Wattage: '100W',
      'Battery Type': 'Lithium Iron Phosphate',
      'Lighting Time': '12-14 hours full charge',
      'IP Rating': 'IP65 Waterproof',
    },
  },

  // ── Mini Systems ───────────────────────────────────────────
  {
    id: 'eko-home-kit-500w',
    slug: 'eko-home-kit-500w',
    name: 'EkkoHome 500W Plug & Play Solar Kit',
    description: 'Complete entry-level solar system for lighting, fans, and TV. Includes 500W panel, 1kWh battery, and built-in inverter.',
    price: 499,
    category: 'mini-systems',
    brand: 'EkkoHome',
    vendorId: 'ekko-install',
    vendorName: 'EkkoNow Certified Install',
    vendorVerified: true,
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    featured: true,
    tags: ['plug-and-play', 'home-kit', '500W', 'all-in-one'],
    specifications: {
      'System Size': '500W',
      'Battery Capacity': '1kWh',
      Included: 'Panel, Battery, Inverter, Cables',
      Warranty: '2 Years',
    },
  },
];

// ─── Helper Functions ─────────────────────────────────────────

export function getProductBySlug(slug: string): Product | null {
  return PRODUCTS.find((p) => p.slug === slug || p.id === slug) ?? null;
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getVendorById(id: string): Vendor | null {
  return VENDORS.find((v) => v.id === id) ?? null;
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.vendorName.toLowerCase().includes(q) ||
      p.tags.some((t) => t.includes(q))
  );
}

export type FilterOptions = {
  category?: ProductCategory;
  priceMin?: number;
  priceMax?: number;
  brand?: string;
  inStock?: boolean;
  sortBy?: 'price-asc' | 'price-desc' | 'rating' | 'newest';
};

export function filterProducts(options: FilterOptions): Product[] {
  let results = [...PRODUCTS];

  if (options.category) results = results.filter((p) => p.category === options.category);
  if (options.priceMin !== undefined) results = results.filter((p) => p.price >= options.priceMin!);
  if (options.priceMax !== undefined) results = results.filter((p) => p.price <= options.priceMax!);
  if (options.brand) results = results.filter((p) => p.brand.toLowerCase() === options.brand!.toLowerCase());
  if (options.inStock) results = results.filter((p) => p.inStock);

  if (options.sortBy === 'price-asc') results.sort((a, b) => a.price - b.price);
  else if (options.sortBy === 'price-desc') results.sort((a, b) => b.price - a.price);
  else if (options.sortBy === 'rating') results.sort((a, b) => b.rating - a.rating);

  return results;
}

// Unique brands from product list
export function getAllBrands(): string[] {
  return [...new Set(PRODUCTS.map((p) => p.brand))].sort();
}
