import { cn } from '@/lib/utils';
import React, { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'focus-visible:ring-ring ring-offset-background inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
          'h-10 bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700',
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
