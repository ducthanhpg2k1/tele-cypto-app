import { Box, Typography } from '@mui/material';
import React from 'react';
import { TypographyRegular } from '../NewTrade';
import CurrencyIcon from 'src/assets/icons/CurrencyIcon';
import { t } from 'i18next';

export const Tag = ({ value }: { value: string }) => {
  return (
    <Box
      sx={{
        padding: '4px 16px',
        borderRadius: '6px',
        border: '1px solid #EEEEEE',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 52,
      }}
    >
      <Typography variant='caption' color={'textSecondary'} className='font-normal'>
        {value}
      </Typography>
    </Box>
  );
};

export default function TagsTrade() {
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
        <Tag value='--' />
        <Tag value='T..ng' />
        <Tag value='B/R' />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <TypographyRegular>{t('wallet.mar_lev')}</TypographyRegular>
        <div className='flex items-center gap-[4px]'>
          <CurrencyIcon />
          <TypographyRegular>999,000</TypographyRegular>
        </div>
      </Box>
    </Box>
  );
}
