import { Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { t } from 'i18next';
import CustomCheckbox from 'src/components/ui/checkbox';
import Info from '../drawer-airdrop/card/Info';

const step = ['myairdrop.visit', 'myairdrop.visit', 'myairdrop.visit', 'myairdrop.visit'];
const Content = () => {
  return (
    <Stack className='gap-4'>
      <Stack className='w-full p-2 rounded-xl border-[1px] border-solid border-[#EEE]'>
        <Info showToken token='CHZ Token' imageHeight={70} imageWidth={70} des={'10/2024'} />
      </Stack>
      <Stack className='flex-row gap-1 items-center'>
        <Item title='myairdrop.market' des='1,000,000 CHZ' />
        <Item title='myairdrop.price' des='100,000 CHZ' />
        <Item title='myairdrop.block' des='CHZ' />
      </Stack>
      <Typography variant='caption' color='#212121' className='font-normal'>
        {t('myairdrop.desc')}
      </Typography>
      <Stack className='gap-1.5'>
        <Typography className='text-[16px] font-semibold leading-6'>
          {t('myairdrop.step')}
        </Typography>
        <Stack className='gap-0.5'>
          {step.map((e, index) => {
            return (
              <Typography key={'text' + index} variant='caption' className='font-normal'>
                {index + 1}. {t(e)}
              </Typography>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Content;

const Item = ({ title, des }: { title: string; des: string }) => {
  return (
    <Stack className='w-full p-1 rounded-xl border-[1px] border-solid border-[#EEE]'>
      <Typography variant='caption' color='#757575' className='font-normal'>
        {t(title)}
      </Typography>
      <Typography variant='caption' color='#212121' className='font-semibold'>
        {des}
      </Typography>
    </Stack>
  );
};
