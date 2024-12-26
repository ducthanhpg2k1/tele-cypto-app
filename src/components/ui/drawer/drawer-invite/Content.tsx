import { Box, Typography, Stack } from '@mui/material';
import { t } from 'i18next';
import Image from 'next/image';
import React from 'react';
import CardInvite from './CardInvite';
import ItemsList from './ItemsList';

const Invite = () => {
  return (
    <>
      <Stack className='flex flex-col items-center justify-center gap-4 text-sm'>
        <Image src='/images/invite.png' width={72} height={72} alt='invite-image' />
        <Typography variant='body1' className='text-center font-semibold' width={210}>
          {t('invite.desc')}
        </Typography>
      </Stack>
      <CardInvite />
      <ItemsList />
    </>
  );
};

export default Invite;
