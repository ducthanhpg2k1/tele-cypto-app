import { Box, Typography } from '@mui/material';
import React from 'react';
import { TypographyRegular } from '../NewTrade';
import CurrencyIcon from 'src/assets/icons/CurrencyIcon';
import { Tag } from './TagsTrade';

export default function TagsFuture() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 1,
        gap: 1,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
        <Tag value='Cross' />
        <Tag value='20' />
        <Tag value='S' />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '2px' }}>
        <TypographyRegular color='#757575'>Funding/Đếm ngược</TypographyRegular>
        <div className='flex items-center gap-[4px]'>
          <TypographyRegular className='text-[#212121] text-[12px] font-normal leading-[20px]'>
            0,0100%/ 01:51:40
          </TypographyRegular>
        </div>
      </Box>
    </Box>
  );
}
