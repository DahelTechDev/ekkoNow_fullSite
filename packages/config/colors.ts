// ─────────────────────────────────────────────
// EkkoNow Design Tokens — Colors
// ─────────────────────────────────────────────

export const colors = {
  // Primary Background Palette
  indigo: {
    950: '#06040F',
    900: '#0D0A2E',
    800: '#120E3A',
    700: '#1A1550',
    600: '#241E6E',
  },

  // Accent — Electric Blue
  electric: {
    DEFAULT: '#3B82F6',
    light: '#60A5FA',
    dark: '#2563EB',
    glow: 'rgba(59, 130, 246, 0.4)',
  },

  // Accent — Mint Green
  mint: {
    DEFAULT: '#10B981',
    light: '#34D399',
    dark: '#059669',
    glow: 'rgba(16, 185, 129, 0.35)',
  },

  // Neutrals
  text: {
    primary: '#F8FAFC',
    secondary: '#CBD5E1',
    muted: '#94A3B8',
    disabled: '#475569',
  },

  // Surfaces
  surface: {
    DEFAULT: '#120E3A',
    elevated: '#1A1550',
    glass: 'rgba(18, 14, 58, 0.6)',
    border: 'rgba(59, 130, 246, 0.2)',
  },
} as const;

export type ColorToken = typeof colors;
