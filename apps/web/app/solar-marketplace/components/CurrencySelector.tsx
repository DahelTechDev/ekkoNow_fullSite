'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useCurrency, CURRENCIES, type CurrencyCode } from '../context/CurrencyContext';

export default function CurrencySelector() {
  const { currency, setCurrencyCode } = useCurrency();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 border border-[#1F8BFF]/20 text-sm text-white hover:border-[#1F8BFF]/50 transition-all duration-200"
        aria-label="Select currency"
      >
        <span>{currency.flag}</span>
        <span className="font-semibold">{currency.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-[#12093A] border border-[#1F8BFF]/20 rounded-xl shadow-2xl shadow-black/60 z-50 overflow-hidden">
          {CURRENCIES.map(c => (
            <button
              key={c.code}
              onClick={() => { setCurrencyCode(c.code as CurrencyCode); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all hover:bg-[#1F8BFF]/10 ${
                c.code === currency.code ? 'text-[#2EE6A6] bg-[#1F8BFF]/10 font-semibold' : 'text-white'
              }`}
            >
              <span className="text-base">{c.flag}</span>
              <span className="font-medium">{c.code}</span>
              <span className="text-xs text-slate-400 ml-auto">{c.symbol} {c.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
