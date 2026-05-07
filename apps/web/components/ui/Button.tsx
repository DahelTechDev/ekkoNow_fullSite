import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'mint' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  fullWidth?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  mint: 'btn-mint',
  ghost:
    'inline-flex items-center gap-2 px-4 py-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 font-medium',
};

const sizeStyles: Record<Size, string> = {
  sm: 'text-sm py-2 px-4',
  md: 'text-sm py-2.5 px-5',
  lg: 'text-base py-3 px-7',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${fullWidth ? 'w-full justify-center' : ''}
          ${disabled || loading ? 'opacity-60 cursor-not-allowed' : ''}
          ${className}
        `}
        style={{ fontFamily: 'Outfit, sans-serif' }}
        {...props}
      >
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
