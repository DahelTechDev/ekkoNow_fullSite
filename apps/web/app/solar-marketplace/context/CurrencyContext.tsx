'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type CurrencyCode = 'NGN' | 'USD' | 'GHS' | 'KES' | 'ZAR' | 'XOF' | 'EGP' | 'ETB';

export interface CurrencyOption {
  code: CurrencyCode;
  symbol: string;
  label: string;
  flag: string;
  /** Rate relative to USD */
  rate: number;
}

export const CURRENCIES: CurrencyOption[] = [
  { code: 'NGN', symbol: '₦', label: 'Nigerian Naira',        flag: '🇳🇬', rate: 1600 },
  { code: 'USD', symbol: '$', label: 'US Dollar',              flag: '🇺🇸', rate: 1    },
  { code: 'GHS', symbol: '₵', label: 'Ghanaian Cedi',         flag: '🇬🇭', rate: 15.5 },
  { code: 'KES', symbol: 'KSh', label: 'Kenyan Shilling',     flag: '🇰🇪', rate: 130  },
  { code: 'ZAR', symbol: 'R',  label: 'South African Rand',   flag: '🇿🇦', rate: 18.5 },
  { code: 'XOF', symbol: 'CFA', label: 'West African CFA',    flag: '🌍', rate: 620  },
  { code: 'EGP', symbol: 'E£', label: 'Egyptian Pound',       flag: '🇪🇬', rate: 48   },
  { code: 'ETB', symbol: 'Br', label: 'Ethiopian Birr',       flag: '🇪🇹', rate: 57   },
];

/** Resolve default currency from browser locale */
function getDefaultCurrency(): CurrencyCode {
  if (typeof navigator === 'undefined') return 'NGN';
  const lang = navigator.language?.toLowerCase() ?? '';
  if (lang.includes('ng') || lang.includes('hausa') || lang.includes('yoruba') || lang.includes('igbo')) return 'NGN';
  if (lang.includes('gh')) return 'GHS';
  if (lang.includes('ke') || lang.includes('tz') || lang.includes('ug')) return 'KES';
  if (lang.includes('za') || lang.includes('bw') || lang.includes('na')) return 'ZAR';
  if (lang.includes('eg')) return 'EGP';
  if (lang.includes('et')) return 'ETB';
  return 'NGN'; // default to NGN for Africa
}

interface CurrencyCtx {
  currency: CurrencyOption;
  setCurrencyCode: (code: CurrencyCode) => void;
  format: (usdPrice: number) => string;
}

const CurrencyContext = createContext<CurrencyCtx | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [code, setCode] = useState<CurrencyCode>('NGN');

  useEffect(() => {
    // Try saved preference first
    const saved = localStorage.getItem('ekkonow_currency') as CurrencyCode | null;
    if (saved && CURRENCIES.find(c => c.code === saved)) {
      setCode(saved);
    } else {
      setCode(getDefaultCurrency());
    }
  }, []);

  const currency = CURRENCIES.find(c => c.code === code) ?? CURRENCIES[0];

  const setCurrencyCode = (newCode: CurrencyCode) => {
    setCode(newCode);
    localStorage.setItem('ekkonow_currency', newCode);
  };

  const format = (usdPrice: number): string => {
    const converted = usdPrice * currency.rate;
    return `${currency.symbol}${converted.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrencyCode, format }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be used inside CurrencyProvider');
  return ctx;
}
