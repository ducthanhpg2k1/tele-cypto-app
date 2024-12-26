import { Box, Stack, Typography } from '@mui/material';
import { borderRadius } from '@mui/system';
import { t } from 'i18next';
import Image from 'next/image';
import React from 'react';

const Info = ({
  showToken,
  token,
  imageWidth,
  imageHeight,
  des,
}: {
  imageWidth?: number;
  imageHeight?: number;
  showToken?: boolean;
  token?: string;
  des?: string;
}) => {
  return (
    <Stack className='flex-row gap-1.5 items-center'>
      <Image src='/images/pepper.png' alt=' ' width={imageWidth ?? 36} height={imageHeight ?? 36} />
      <Stack className='gap-[2px] items-start'>
        <Stack className='gap-1 flex-row items-center'>
          <Typography variant='body1' className='font-semibold text-[16px]'>
            1000PEPPER
          </Typography>
          <Box
            sx={{
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2px 8px',
              background: '#EBFAF0',
            }}
          >
            <Typography variant='body2' color={'#4AAF57'}>
              {t('airdrop.progress')}
            </Typography>
          </Box>
        </Stack>
        <Typography variant='caption' color='#757575'>
          {des ?? 'PEPPER'}
        </Typography>
        {showToken && (
          <Stack className='flex-row gap-0.5'>
            <Image src='/assets/iconly/ic-token.svg' alt='' width={16} height={16} />
            <Typography variant='body2'>{token}</Typography>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default Info;
