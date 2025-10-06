import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
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
    const baseClasses = 'px-4 py-3 bg-grey-50 border border-brown-200 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-brown-500 text-grey-900 placeholder-grey-500 transition-colors resize-none';
    
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
        <textarea
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

Textarea.displayName = 'Textarea';

export default Textarea;