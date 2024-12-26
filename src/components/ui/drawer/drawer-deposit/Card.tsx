import { Box, Divider, Stack, Typography } from '@mui/material';
import { t } from 'i18next';
import Image from 'next/image';
import React from 'react';
const Card = () => {
  return (
    <Stack
      className='w-full p-5 gap-4 items-start border-solid rounded-xl border-[#EEE]'
      border={1}
    >
      <Stack gap={0.5}>
        <Typography variant='caption' color={'#9E9E9E'} className='font-normal'>
          {t('deposit.network')}
        </Typography>
        <Typography variant='body1' className='font-semibold' color={'#212121'}>
          TON
        </Typography>
        <Typography
          variant='caption'
          color={'#9E9E9E'}
          className='text-[10px] font-normal tracking-[0.2px]'
        >
          *{t('deposit.cinfo')} ***nwNYB
        </Typography>
      </Stack>
      <Divider color='#000000' className='w-full' />
      <Stack
        flexDirection={'row'}
        justifyContent={'space-between'}
        width={'100%'}
        alignItems={'center'}
      >
        <Stack gap={1}>
          <Box display={'flex'} flexDirection={'row'} gap={1} alignItems={'center'}>
            <Typography variant='body2' color={'#9E9E9E'}>
              {t('deposit.address')}
            </Typography>
            <Image
              src='/assets/iconly/icon-arrow-right-grey.svg'
              alt=''
              width={16}
              height={16}
              className='mt-[5px]'
            />
          </Box>
          <Typography
            variant='body1'
            className='font-semibold max-w-[270px] whitespace-normal break-words'
            color={'#212121'}
          >
            2d37hdhjsjsdfhhakkdhdhwwsskksfshhsbsg27hd
          </Typography>
        </Stack>
        <Image src='/assets/iconly/icon-copy-grey.svg' alt='' width={20} height={20} />
      </Stack>
    </Stack>
  );
};

export default Card;
