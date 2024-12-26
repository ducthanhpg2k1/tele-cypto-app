import { ArrowDownIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { ReactNode } from 'react';

type Props = {
  value: string;
  onChange?: ((event: SelectChangeEvent<any>, child: ReactNode) => void) | undefined;
  data: { label: string; value: string }[];
  error?: string;
  colorIcon?: string;
  placeholder?: string;
  name?: string;
};

const CustomSelect = (props: Props) => {
  return (
    <Stack className='w-full flex-row bg-[#F5F5F5] items-center gap-[6px]'>
      <Select
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        displayEmpty
        IconComponent={() => (
          <ChevronDownIcon
            className='w-4 h-4'
            color={props.colorIcon ? props.colorIcon : '#9E9E9E'}
          />
        )}
        inputProps={{ 'aria-label': 'Without label' }}
        fullWidth
        renderValue={(value: any) => {
          if (!value) {
            return <Typography color='gray'>{props.placeholder}</Typography>;
          }
          return value;
        }}
        sx={{
          color: '#212121',
          backgroundColor: '#F5F5F5',
          lineHeight: '21px',
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '& .MuiSelect-select': {
            backgroundColor: '#F5F5F5',
            height: '21px',
            padding: 0,
          },
        }}
      >
        {props.data.map((e, index) => {
          return (
            <MenuItem value={e.value} key={'menu-from-' + index} className='w-full'>
              {e.label}
            </MenuItem>
          );
        })}
      </Select>
    </Stack>
  );
};

export default CustomSelect;
