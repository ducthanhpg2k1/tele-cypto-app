import { Box, Stack, Typography } from '@mui/material';
import { t } from 'i18next';
import Image from 'next/image';
import React from 'react';

export default function StackBalance({ type }: { type: 'FUTURE' | 'SPOT' }) {
  return (
    <Stack className='gap-[2px] my-1'>
      {type !== 'FUTURE' && (
        <BalanceSection
          title={t('transfer.available')}
          value='0 USDT'
          icon='/assets/iconly/icon-circle-plus.svg'
        />
      )}
      <BalanceSection title={t('exchange.max')} value='0 USDT' />
      {type === 'FUTURE' && <BalanceSection title={t('trade.form.cost')} value='0 USDT' />}
      {type !== 'FUTURE' && <BalanceSection title={t('exchange.loan')} value='0 USDT' />}
    </Stack>
  );
}

const BalanceSection = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon?: string;
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography variant='caption' color={'#9e9e9e'} className='font-normal'>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Typography variant='caption' color={'#212121'} className='font-normal'>
          {value}
        </Typography>
        {icon && (
          <Image src={icon} width={16} height={16} alt='' className='w-4 h-4' quality={100} />
        )}
      </Box>
    </Box>
  );
};
