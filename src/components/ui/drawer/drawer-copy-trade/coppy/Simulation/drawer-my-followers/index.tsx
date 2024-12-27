import React from 'react';
import { t } from 'i18next';
import CustomDrawer from 'src/components/ui/drawer';
import Content from './Content';
const DrawerMyFollowers= ({ refMyFollowers }: any) => {
  return (
    <CustomDrawer
      anchor='right'
      paperClassName={{
        sx: { width: { xs: '100%', sm: 400 }, pt: 2 },
      }}
      ref={refMyFollowers}
      label={'Master Chef'}
    >
      <Content />
    </CustomDrawer>
  );
};

export default DrawerMyFollowers;
