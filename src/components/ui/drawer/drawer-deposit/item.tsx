import { Stack, Typography } from '@mui/material';
import { t } from 'i18next';
import React from 'react';

type Props = {
  label: string;
  value: React.ReactNode;
};

const Item = (props: Props) => {
  return (
    <Stack className='flex-row justify-between items-center w-full'>
      <Typography variant='caption' color={'#9E9E9E'} className='font-normal text-[10px]'>
        {t(props.label)}
      </Typography>
      {props.value}
    </Stack>
  );
};

export default Item;
