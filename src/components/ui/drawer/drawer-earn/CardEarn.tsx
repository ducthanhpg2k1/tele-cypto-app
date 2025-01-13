import { Typography, Stack, Box } from '@mui/material';
import { t } from 'i18next';
import Image from 'next/image';
import React from 'react';

type Props = {
  img: string;
  name: string;
  profit: string;
  onClickCard: VoidFunction;
};
const CardEarn = (props: Props) => {
  return (
    <Stack
      onClick={props.onClickCard}
      className='min-w-[250px] flex p-3 flex-col gap-2 items-start border-[1px] border-solid rounded-lg border-gray-200 h-full'
    >
      <Stack className='w-full flex-row justify-between items-center'>
        <Typography
          variant='caption'
          className='font-normal text-[#9E9E9E] text-[10px] tracking-[0.2px]'
        >
          {t('earn.flexible')}/{t('earn.pernament')}
        </Typography>
        <Box
          sx={{ background: '#E8F2FF', padding: '1px 10px', borderRadius: '9999px' }}
          className='flex items-center justify-center'
        >
          <Typography
            variant='caption'
            className='font-normal text-[#177DFF] text-[10px] tracking-[0.2px]'
          >
            Simple Earn
          </Typography>
        </Box>
      </Stack>
      <Stack className='flex flex-row justify-center items-center gap-3'>
        <Image src={props.img} alt='' width={32} height={32} />
        <Typography variant='subtitle2' className='text-[12px]'>
          {props.name}
        </Typography>
      </Stack>
      <Stack className='flex flex-row justify-center items-center gap-3'>
        <Typography variant='subtitle2' color='#616161' className='text-[12px] font-normal'>
          APR
        </Typography>
        <Typography variant='subtitle2' className='text-[#4AAF57] text-[12px]'>
          {props.profit}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CardEarn;
