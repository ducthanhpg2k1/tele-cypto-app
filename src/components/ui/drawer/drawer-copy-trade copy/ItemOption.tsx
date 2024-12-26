import { Box, Stack, Typography } from '@mui/material';
import { t } from 'i18next';
import Image from 'next/image';
import React from 'react';

type Props = {
  img: string;
  label: string;
};

const ItemOption = (props: Props) => {
  return (
    <Stack className='gap-1 items-center'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '22px',
          height: '22px',
          backgroundColor: '#F5F5F5',
          borderRadius: '9999px',
          justifyContent: 'center',
        }}
      >
        <Image src={props.img} alt='' width={17.626} height={19.8} />
      </Box>
      <Typography fontSize={11} textAlign={'center'}>
        {t(props.label)}
      </Typography>
    </Stack>
  );
};

export default ItemOption;
