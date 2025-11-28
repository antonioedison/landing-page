import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-green';
  fullWidth?: boolean;
  withIcon?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  withIcon = false,
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3.5 text-base font-bold transition-all duration-300 rounded-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md";
  
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500 hover:shadow-lg",
    secondary: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-700",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white",
    "outline-green": "bg-transparent border border-brand-600 text-brand-600 hover:bg-brand-50 focus:ring-brand-500 shadow-none hover:shadow-md"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
      {withIcon && <ArrowRight className="ml-2 w-5 h-5" />}
    </button>
  );
};