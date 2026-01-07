import React from 'react';
import { cn } from '../utils/cn'; // Assuming utility exists, but defining inline class concatenation for simplicity here if separate utils not desired.

// Simple utility to merge classes
function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform active:scale-95";
  
  const variants = {
    // Primary: Gold BG, Dark Green Text (High Visibility)
    primary: "bg-brand-gold text-brand-green hover:bg-[#E5B800] hover:shadow-xl hover:shadow-brand-gold/30 border border-transparent",
    // Secondary: Dark Green BG, White Text
    secondary: "bg-brand-green text-white hover:bg-[#002A16] shadow-lg shadow-brand-green/20",
    // Outline: Dark Green Border
    outline: "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white",
    ghost: "text-brand-green hover:bg-brand-green/10",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-12 px-6 py-2", // Increased height for easier mobile tapping
    lg: "h-14 px-8 text-lg",
    xl: "h-16 px-10 text-xl w-full sm:w-auto",
  };

  return (
    <button 
      className={classNames(baseStyles, variants[variant], sizes[size], className)} 
      {...props} 
    />
  );
};

// Card Components
export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={classNames("rounded-xl border bg-white text-slate-950 shadow-sm", className)} {...props} />
);

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={classNames("flex flex-col space-y-1.5 p-6", className)} {...props} />
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className, ...props }) => (
  <h3 className={classNames("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={classNames("p-6 pt-0", className)} {...props} />
);

// Form Components
export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => (
  <input
    className={classNames(
      "flex h-14 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-shadow",
      className
    )}
    {...props}
  />
);

export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({ className, ...props }) => (
  <label
    className={classNames(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-300",
      className
    )}
    {...props}
  />
);

export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({ className, children, ...props }) => (
  <div className="relative">
    <select
      className={classNames(
        "flex h-14 w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-2 text-base ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-shadow",
        className
      )}
      {...props}
    >
      {children}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
      <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
);