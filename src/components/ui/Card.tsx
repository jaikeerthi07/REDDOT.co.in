import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'secondary';
  hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'default',
      hoverEffect = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseClasses = 'rounded-2xl border overflow-hidden transition-all duration-300';
    
    const variantClasses = {
      default: 'bg-white border-grey-200',
      primary: 'bg-gradient-to-r from-brown-50 to-grey-50 border-brown-100',
      secondary: 'bg-white border-brown-200',
    };
    
    const hoverClasses = hoverEffect ? 'hover:border-brown-300 hover:shadow-md' : '';
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`;
    
    return (
      <div
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;