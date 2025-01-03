import { Box, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import Image from 'next/image';
import React from 'react';
import CaretDown from 'src/assets/icons/CaretDown';

interface IButtonBottomSheet {
  iconPrefix?: string;
  title: string;
  iconSuffix?: string;
  variant?: Variant;
  color?: string;
  styleLabel?: React.CSSProperties;
  sxBox?: React.CSSProperties;
  onClick?: () => void;
}
export default function ButtonBottomSheet({
  iconPrefix,
  title,
  iconSuffix,
  styleLabel,
  variant,
  color,
  sxBox,
  onClick,
}: IButtonBottomSheet) {
  return (
    <Box
      sx={{
        padding: '4px 8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#F5F5F5',
        borderRadius: '8px',
        ...sxBox,
      }}
      onClick={onClick}
    >
      {iconPrefix && (
        <Image src={iconPrefix} width={20} height={20} className='w-5 h-5 object-cover' alt='' />
      )}
      {title && (
        <Typography variant={variant || 'caption'} color={color || '#9E9E9E'} style={styleLabel}>
          {title}
        </Typography>
      )}
      {iconSuffix ? (
        <Image src={iconSuffix} width={20} height={20} className='w-5 h-5 object-cover' alt='' />
      ) : (
        <CaretDown color='#9E9E9E' />
      )}
    </Box>
  );
}
