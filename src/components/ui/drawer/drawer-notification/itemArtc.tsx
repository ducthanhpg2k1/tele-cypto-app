import { Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { t } from 'i18next';
type Props = {
  img: string;
  title: string;
  time: string;
};
const ItemArtc = (props: Props) => {
  return (
    <Stack className='flex-row items-center gap-3 rounded-lg'>
      <Image src={props.img} alt='' width={60} height={60} className='rounded-xl' />
      <Stack className='gap-[2px]'>
        <Typography variant='subtitle2' className='leading-[21px] font-medium'>
          {t(props.title)}
        </Typography>
        <Stack className='flex-row gap-0.5'>
          <Image src={'/assets/iconly/icon-clock-grey.svg'} alt={''} width={18} height={18} />
          <Typography variant='body2' color='#9E9E9E' className='text-[12px]'>
            {props.time}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ItemArtc;
