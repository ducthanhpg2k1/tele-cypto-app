import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'blue';
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth = false,
  className = '',
  children,
  disabled,
  ...props
}) => {
  const baseStyles = 'py-1 px-3 rounded-lg transition-colors duration-200';
  const widthStyles = fullWidth ? 'w-full' : '';

  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    blue: 'bg-[#E8F2FF] text-[#177DFF]',
    secondary: 'bg-green-500 hover:bg-green-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    outline: 'border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
  };

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed bg-gray-400 hover:bg-gray-400 text-gray-600 border-gray-300'
    : '';

  return (
    <button
      className={`
        ${baseStyles}
        ${widthStyles}
        ${variantStyles[variant]}
        ${disabledStyles}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
