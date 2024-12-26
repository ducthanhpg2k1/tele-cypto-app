import { Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { t } from 'i18next';
type Props = {
  img: string;
  title: string;
};
const ItemChoice = (props: Props) => {
  return (
    <Stack className='gap-1.5 items-start min-w-[150px]'>
      <Image src={props.img} alt='' width={150} height={75} />
      <Typography variant='subtitle2' className='text-[12px]'>
        {t(props.title)}
      </Typography>
    </Stack>
  );
};

export default ItemChoice;
