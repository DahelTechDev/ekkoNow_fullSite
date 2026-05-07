import { ShieldCheck, AlertCircle } from 'lucide-react';
import type { Vendor } from '../data/products';

interface VendorBadgeProps {
  vendor: Pick<Vendor, 'name' | 'verified' | 'country' | 'logoEmoji'>;
  size?: 'sm' | 'md';
  showCountry?: boolean;
}

export default function VendorBadge({
  vendor,
  size = 'sm',
  showCountry = false,
}: VendorBadgeProps) {
  if (size === 'md') {
    return (
      <div className="inline-flex items-center gap-3 glass px-4 py-2.5 rounded-xl">
        {/* Logo */}
        <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-lg flex-shrink-0">
          {vendor.logoEmoji}
        </div>
        {/* Info */}
        <div>
          <div className="flex items-center gap-1.5">
            <span
              style={{ fontFamily: 'Outfit, sans-serif' }}
              className="text-sm font-semibold text-white"
            >
              {vendor.name}
            </span>
            {vendor.verified ? (
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-label="Verified vendor" />
            ) : (
              <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0" aria-label="Unverified vendor" />
            )}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
            {vendor.verified && (
              <span className="text-emerald-400 font-medium">Verified Seller</span>
            )}
            {showCountry && vendor.country && (
              <>
                {vendor.verified && <span className="text-slate-600">·</span>}
                <span>{vendor.country}</span>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // size === 'sm'
  return (
    <div className="inline-flex items-center gap-1.5">
      <span className="text-xs text-slate-400">
        Sold by{' '}
        <span className="text-white font-medium">{vendor.name}</span>
      </span>
      {vendor.verified && (
        <ShieldCheck
          className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0"
          aria-label="Verified vendor"
        />
      )}
    </div>
  );
}
