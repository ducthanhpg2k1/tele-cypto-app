import { Input, Stack, TextField, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

type Props = {
  subfixBlack?: string;
  subfixBlue?: string;
  value?: string;
  placeholder?: string;
  endContent?: ReactNode;
  type?:string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined;
};
const CustomInput = (props: Props) => {
  return (
    <Stack className='flex-row w-full bg-[#F5F5F5] gap-1 items-center rounded-lg'>
      <TextField
        fullWidth
        onChange={props.onChange}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        variant='outlined'
        sx={{
          color: 'text.secondary',
          backgroundColor: '#F5F5F5',
          borderRadius: '8px',
          '& .MuiInputBase-input::placeholder': {
            color: '#9E9E9E',
            fontWeight: 500,
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
        }}
      />
      {props.endContent && (
        <div className='min-w-[100px] items-end flex justify-end mr-2'>{props.endContent}</div>
      )}
      {props.subfixBlack && (
        <Typography variant='body1' className='font-semibold text-[14px]'>
          {props.subfixBlack}
        </Typography>
      )}
      {props.subfixBlue && (
        <Typography variant='body1' className='font-semibold text-[#177DFF] w-[100px] text-[14px]'>
          {props.subfixBlue}
        </Typography>
      )}
    </Stack>
  );
};

export default CustomInput;
