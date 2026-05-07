import { type HTMLAttributes } from 'react';

type BadgeVariant = 'blue' | 'mint' | 'gold' | 'red' | 'gray';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  blue: 'bg-blue-500/15 text-blue-400 border-blue-500/25',
  mint: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
  gold: 'bg-amber-500/15 text-amber-400 border-amber-500/25',
  red: 'bg-red-500/15 text-red-400 border-red-500/25',
  gray: 'bg-slate-500/15 text-slate-400 border-slate-500/25',
};

const dotColors: Record<BadgeVariant, string> = {
  blue: 'bg-blue-400',
  mint: 'bg-emerald-400',
  gold: 'bg-amber-400',
  red: 'bg-red-400',
  gray: 'bg-slate-400',
};

export default function Badge({
  variant = 'blue',
  size = 'sm',
  dot = false,
  children,
  className = '',
  ...props
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 font-medium rounded-full border
        ${variantStyles[variant]}
        ${size === 'sm' ? 'text-xs px-2.5 py-0.5' : 'text-sm px-3 py-1'}
        ${className}
      `}
      {...props}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`} />
      )}
      {children}
    </span>
  );
}
