import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  options: { value: string; label: string }[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      fullWidth = false,
      className = '',
      id,
      options,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'px-4 py-3 bg-grey-50 border border-brown-200 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-brown-500 text-grey-900 transition-colors';
    
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
        <select
          ref={ref}
          id={id}
          className={classes}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;