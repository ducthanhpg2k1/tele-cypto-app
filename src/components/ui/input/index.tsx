import React from 'react';
import { Box } from '@mui/material';

type InputType = 'text' | 'number' | 'password' | 'email';

interface BaseInputProps<T> {
  label?: string;
  secondaryLabel?: string;
  value: T;
  onChange: (value: T) => void;
  placeholder?: string;
  className?: string;
  type?: InputType;
  disabled?: boolean;
  error?: string;
}

interface NumberInputProps extends BaseInputProps<number> {
  type: 'number';
  min?: number;
  max?: number;
  step?: number;
  inputMode?: 'numeric' | 'decimal';
}

interface TextInputProps extends BaseInputProps<string> {
  type?: Exclude<InputType, 'number'>;
}

type InputProps = NumberInputProps | TextInputProps;

const Input: React.FC<InputProps> = ({
  label,
  secondaryLabel,
  value,
  onChange,
  placeholder = '',
  className = '',
  type = 'text',
  disabled = false,
  error,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (type === 'number') {
      const numValue = newValue === '' ? 0 : Number(newValue);

      if (isNaN(numValue)) return;

      const { min, max } = props as NumberInputProps;
      if (min !== undefined && numValue < min) return;
      if (max !== undefined && numValue > max) return;

      onChange(numValue as never);
    } else {
      onChange(newValue as never);
    }
  };

  return (
    <Box className="w-full">
      {(label || secondaryLabel) && (
        <div className="flex justify-between items-center mb-1">
          {label && <span className="text-gray-500 text-xs">{label}</span>}
          {secondaryLabel && <span className="text-gray-400 text-xs">{secondaryLabel}</span>}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        {...(type === 'number'
          ? {
              min: (props as NumberInputProps).min,
              max: (props as NumberInputProps).max,
              step: (props as NumberInputProps).step,
              inputMode: (props as NumberInputProps).inputMode,
            }
          : {})}
        className={`
          w-full bg-gray-200 dark:bg-gray-800 
          p-1.5 rounded-lg
          text-gray-700 dark:text-gray-200
          placeholder-gray-400 dark:placeholder-gray-600
          disabled:bg-gray-100 dark:disabled:bg-gray-900
          disabled:cursor-not-allowed
          focus:outline-none focus:ring-2 focus:ring-blue-500
          ${error ? 'border border-red-500' : ''}
          ${className}
        `}
      />
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </Box>
  );
};

export default Input;
