import React, { forwardRef } from 'react';

import { t } from 'i18next';

import CustomDrawer, { DrawerHandle } from 'src/components/ui/drawer';
import Image from 'next/image';
import { Typography } from '@mui/material';
import Content from './Content';


const DrawerRegisterUsdt = forwardRef<DrawerHandle, {}>((_, ref) => {
  return (
    <CustomDrawer
      anchor='right'
      paperClassName={{
        sx: { width: { xs: '100%', sm: 400 }, pt: 2 },
      }}
      ref={ref}
      contentCenter={<div className='flex items-center gap-1'>
        <Image src={'/images/img-usdt.png'} width={20} height={20} alt='' className='w-5 h-5'/>
        <Typography
          className='font-bold text-[#212121] text-[14px] leading-5'
        >
          {t('earn.register_usdt')}
        </Typography>
      </div>}
      showHelpIcon
    >
      <Content />
    </CustomDrawer>
  );
});

export default DrawerRegisterUsdt;
