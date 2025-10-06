import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      variant = 'default',
      size = 'md',
      className = '',
      ...props
    },
    ref
  ) => {
    const baseClasses = 'inline-flex items-center rounded-full font-medium';
    
    const variantClasses = {
      default: 'bg-grey-100 text-grey-800 border border-grey-200',
      primary: 'bg-brown-100 text-brown-700 border border-brown-200',
      secondary: 'bg-grey-200 text-grey-700 border border-grey-300',
      success: 'bg-green-100 text-green-700 border border-green-200',
      warning: 'bg-yellow-100 text-yellow-700 border border-yellow-200',
      danger: 'bg-red-100 text-red-700 border border-red-200',
    };
    
    const sizeClasses = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
      lg: 'px-4 py-1.5 text-base',
    };
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    
    return (
      <span
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;