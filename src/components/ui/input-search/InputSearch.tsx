import { Box, InputBase, InputProps, styled } from '@mui/material';
import React from 'react';
import SearchIcon from 'src/assets/icons/SearchIcon';
const SearchWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  flex: 1,
  borderRadius: theme.shape.borderRadius,
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.neutral[700] : theme.palette.neutral[100],
  '&:hover': {
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.neutral[600] : theme.palette.neutral[200],
  },
  display: 'flex',
  alignItems: 'center',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.mode === 'dark' ? theme.palette.neutral[400] : theme.palette.neutral[500],
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary,
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1),
    width: '100%',
    fontSize: '0.875rem',
    paddingLeft: 0,
  },
  '& input': {
    color: '#212121',
  },
  '& input::placeholder': {
    color: '#9E9E9E',
  },
}));

interface InputSearchProps extends InputProps {
  onSearch?: any;
}
export default function InputSearch({ onSearch, placeholder, sx, ...rest }: InputSearchProps) {
  return (
    <SearchWrapper>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={placeholder || 'Search'}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => onSearch && onSearch?.(e.target.value)}
        sx={{ m: 0 }}
        {...rest}
      />
    </SearchWrapper>
  );
}
