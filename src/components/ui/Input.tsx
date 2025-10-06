import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      fullWidth = false,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'px-4 py-3 bg-grey-50 border border-brown-200 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-brown-500 text-grey-900 placeholder-grey-500 transition-colors';
    
    const errorClasses = error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '';
    
    const widthClass = fullWidth ? 'w-full' : '';
    
    const classes = `${baseClasses} ${errorClasses} ${widthClass} ${className}`;
    
    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label && (
          <label 
            htmlFor={id} 
            className="block text-grey-900 font-medium mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={classes}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;