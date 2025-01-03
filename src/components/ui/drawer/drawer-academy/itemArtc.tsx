import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { t } from 'i18next';
type Props = {
  img: string;
  title: string;
  tag: string[];
};
const ItemArtc = (props: Props) => {
  return (
    <Stack className='flex-row items-center gap-3 rounded-lg py-3'>
      <Image src={props.img} alt='' width={114} height={65} />
      <Stack className='gap-[2px]'>
        <Typography variant='subtitle2' className='leading-[21px] font-semibold'>
          {t(props.title)}
        </Typography>
        <Stack className='flex-row gap-0.5'>
          {props.tag.map((e, index) => {
            return (
              <Box
                sx={{ padding: '2px 8px', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                key={index}
              >
                <Typography variant='body2' color='#9E9E9E' className='text-[12px]'>
                  {t(e)}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ItemArtc;
