import { Stack, Typography } from '@mui/material';
import React from 'react';
import Card from './card';
import Image from 'next/image';
import { t } from 'i18next';
import CustomCheckbox from 'src/components/ui/checkbox';
const Content = () => {
  return (
    <Stack className='gap-6'>
      <Stack className='flex-row items-center w-full justify-between'>
        <Stack className='flex-row px-1 items-center gap-1'>
          <Image src='/assets/iconly/ic-filter.svg' alt='' width={20} height={20} />
          <Typography variant='subtitle2'>{t('airdrop.filter')}</Typography>
        </Stack>
        <CustomCheckbox
          label={t('airdrop.onlyshow')}
          variantLabel='body2'
          classNameWrapper='flex-row px-1 items-center gap-1'
          classNameLabel='text-[12px]'
        />
      </Stack>
      <Card />
      <Card />
    </Stack>
  );
};

export default Content;
