import { useState, useRef, useEffect } from 'react';
import { Box, Typography, MenuItem, ClickAwayListener, Paper } from '@mui/material';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  label?: string;
  className?: string;
  classNameValue?: string;
  classNameIcon?: string;
  classNameMenuItem?: string;
  icon?: string;
}

const CustomSelect = ({
  value,
  onChange,
  options,
  label,
  className,
  classNameValue,
  classNameIcon,
  classNameMenuItem,
  icon,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  const handleClickAway = () => {
    setIsOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative', display: 'inline-block' }}>
        <Box
          ref={selectRef}
          onClick={handleClick}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            cursor: 'pointer',
            userSelect: 'none',
          }}
          className={className}
        >
          <Typography
            variant='h6'
            fontWeight='bold'
            color='text.primary'
            className={classNameValue}
          >
            {value}
          </Typography>
          {label && (
            <Box
              sx={{
                backgroundColor: 'neutral.200',
                px: 1,
                py: 0,
                borderRadius: 1,
              }}
            >
              <Typography variant='caption' color='text.secondary' sx={{ lineHeight: 0 }}>
                {label}
              </Typography>
            </Box>
          )}
          {icon ? (
            <img src={icon} alt='' className={classNameIcon} />
          ) : (
            <ChevronDownIcon
              className={`w-5 h-5 ${classNameIcon} text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />
          )}
        </Box>
        {isOpen && (
          <Paper
            sx={{
              position: 'absolute',
              top: 'calc(100% + 4px)',
              left: 0,
              minWidth: '100%',
              maxHeight: '300px',
              overflowY: 'auto',
              zIndex: 1000,
              mt: 0.5,
            }}
            elevation={4}
            className={classNameMenuItem}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                onClick={() => handleOptionClick(option)}
                selected={option === value}
                sx={{
                  py: 1,
                  px: 2,
                }}
              >
                {option}
              </MenuItem>
            ))}
          </Paper>
        )}
      </Box>
    </ClickAwayListener>
  );
};

export default CustomSelect;
