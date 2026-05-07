export const SITE_NAME = 'EkkoNow';
export const SITE_TAGLINE = 'Power the Future. Today.';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const CONTACT_EMAIL = 'hello@ekkonow.com';
export const CONTACT_PHONE = '+234 800 EKKONOW';

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/ekkonow',
  linkedin: 'https://linkedin.com/company/ekkonow',
  instagram: 'https://instagram.com/ekkonow',
  youtube: 'https://youtube.com/@ekkonow',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Marketplace', href: '/solar-marketplace' },
  { label: 'Impact', href: '/impact' },
  { label: 'Partners', href: '/partners' },
  { label: 'Investors', href: '/investors' },
  { label: 'Contact', href: '/contact' },
];

export const BRAND_COLORS = {
  indigo: {
    950: '#06040F',
    900: '#0D0A2E',
    800: '#120E3A',
    700: '#1A1550',
  },
  electric: '#3B82F6',
  mint: '#10B981',
} as const;
