import { LucideIcon } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'neon';
  icon?: LucideIcon;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  icon: Icon,
  fullWidth,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-blue-600 hover:bg-blue-50',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    neon: 'bg-blue-600 text-white border border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] hover:bg-blue-500',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </button>
  );
}