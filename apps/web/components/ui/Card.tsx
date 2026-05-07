import { type HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'glass-light' | 'solid';
  hover?: boolean;
  glow?: boolean;
}

export default function Card({
  variant = 'glass',
  hover = false,
  glow = false,
  children,
  className = '',
  ...props
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl p-6
        ${variant === 'glass' ? 'glass' : ''}
        ${variant === 'glass-light' ? 'glass-light' : ''}
        ${variant === 'solid' ? 'bg-indigo-800 border border-blue-500/15' : ''}
        ${hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30' : ''}
        ${glow ? 'animate-glow-pulse' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
