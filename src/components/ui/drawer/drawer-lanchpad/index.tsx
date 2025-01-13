import React, { forwardRef } from 'react';

import { t } from 'i18next';

import CustomDrawer, { DrawerHandle } from 'src/components/ui/drawer';
import Content from './Content';

const DrawerLanchpad = forwardRef<DrawerHandle, {}>((_, ref) => {
  return (
    <CustomDrawer
      anchor='right'
      paperClassName={{
        sx: { width: { xs: '100%', sm: 400 }, pt: 2 },
      }}
      ref={ref}
      label={t('lanchpad.lanchpad')}
      showNotification
      showFilterNew
    >
      <Content />
    </CustomDrawer>
  );
});

export default DrawerLanchpad;
