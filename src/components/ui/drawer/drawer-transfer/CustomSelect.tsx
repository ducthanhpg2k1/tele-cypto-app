import { ArrowDownIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import CaretDown from 'src/assets/icons/CaretDown';

type Props = {
  value: string;
  onChange?: ((event: SelectChangeEvent<any>, child: ReactNode) => void) | undefined;
  data: { label: string; value: string }[];
  prefix?: string;
  prefixIcon?: string;
  error?: string;
  colorIcon?: string;
};

const CustomSelect = (props: Props) => {
  return (
    <Stack className="w-full flex-row bg-[#F5F5F5] items-center gap-[6px]">
      {props.prefix && (
        <Typography
          variant="body2"
          className="text-[#9E9E9E] min-w-8 text-[12px]"
        >
          {props.prefix}
        </Typography>
      )}
      {props.prefixIcon && (
        <Image
          src={props.prefixIcon}
          alt=""
          width={20}
          height={20}
        />
      )}
      <Select
        value={props.value}
        onChange={props.onChange}
        displayEmpty
        IconComponent={() => (
          <ChevronDownIcon
            className="w-4 h-4"
            color={props.colorIcon ? props.colorIcon : '#9E9E9E'}
          />
        )}
        inputProps={{ 'aria-label': 'Without label' }}
        fullWidth
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
            <MenuItem
              value={e.value}
              key={'menu-from-' + index}
              className="w-full"
            >
              {e.label}
            </MenuItem>
          );
        })}
      </Select>
    </Stack>
  );
};

export default CustomSelect;
