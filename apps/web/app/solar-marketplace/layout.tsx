'use client';
import { CurrencyProvider } from './context/CurrencyContext';

export default function SolarMarketplaceLayout({ children }: { children: React.ReactNode }) {
  return <CurrencyProvider>{children}</CurrencyProvider>;
}
