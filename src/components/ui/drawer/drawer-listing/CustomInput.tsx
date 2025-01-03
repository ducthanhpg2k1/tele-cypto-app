import { Input, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

type Props = {
  rows?: number;
  name?: string;
  placeholder?: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined;
};
const CustomInput = (props: Props) => {
  return (
    <Stack className='flex-row w-full bg-[#F5F5F5] gap-1 items-start rounded-lg h-full'>
      <TextField
        name={props.name}
        fullWidth
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        variant='outlined'
        rows={props.rows}
        sx={{
          color: 'text.secondary',
          backgroundColor: '#F5F5F5',
          borderRadius: '8px',
          '& .MuiInputBase-input': {
            padding: 0,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '& .MuiInputBase-input::placeholder': {
            color: '#9E9E9E',
            fontWeight: 400,
          },
        }}
      />
    </Stack>
  );
};

export default CustomInput;
