import type { NavLink, Category } from '../types';

export const SITE_NAME = 'EkkoNow';
export const SITE_TAGLINE = 'Power the Future. Today.';
export const SITE_DESCRIPTION =
  'EkkoNow is Africa\'s leading solar energy marketplace — connecting homes, businesses, and communities with clean, affordable solar solutions.';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Solutions', href: '/solutions' },
  {
    label: 'Marketplace',
    href: '/solar-marketplace',
    children: [
      { label: 'Solar Panels', href: '/solar-marketplace/categories/solar-panels' },
      { label: 'Batteries', href: '/solar-marketplace/categories/batteries' },
      { label: 'Inverters', href: '/solar-marketplace/categories/inverters' },
    ],
  },
  { label: 'Impact', href: '/impact' },
  { label: 'Partners', href: '/partners' },
  { label: 'Investors', href: '/investors' },
  { label: 'Contact', href: '/contact' },
];

export const MARKETPLACE_CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Solar Panels',
    slug: 'solar-panels',
    description: 'High-efficiency monocrystalline and polycrystalline panels',
    icon: '☀️',
    productCount: 48,
  },
  {
    id: '2',
    name: 'Batteries',
    slug: 'batteries',
    description: 'Lithium-ion and LiFePO4 energy storage solutions',
    icon: '🔋',
    productCount: 32,
  },
  {
    id: '3',
    name: 'Inverters',
    slug: 'inverters',
    description: 'Pure sine wave and hybrid inverters for every system',
    icon: '⚡',
    productCount: 27,
  },
  {
    id: '4',
    name: 'Mounting Systems',
    slug: 'mounting',
    description: 'Rooftop, ground-mount, and tracker racking systems',
    icon: '🏗️',
    productCount: 19,
  },
  {
    id: '5',
    name: 'Accessories',
    slug: 'accessories',
    description: 'Cables, connectors, monitoring, and safety gear',
    icon: '🔌',
    productCount: 65,
  },
];

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/ekkonow',
  linkedin: 'https://linkedin.com/company/ekkonow',
  instagram: 'https://instagram.com/ekkonow',
  youtube: 'https://youtube.com/@ekkonow',
};

export const CONTACT_EMAIL = 'hello@ekkonow.com';
export const CONTACT_PHONE = '+234 800 EKKONOW';
