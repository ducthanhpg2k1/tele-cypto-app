import React from 'react';
import { t } from 'i18next';
import CustomDrawer from 'src/components/ui/drawer';
import Content from './Content';
const DrawerProfile = ({ refProfile }: any) => {
  return (
    <CustomDrawer
      anchor='right'
      paperClassName={{
        sx: { width: { xs: '100%', sm: 400 }, pt: 2 },
      }}
      ref={refProfile}
      label={''}
      isMyProfile
    >
      <Content />
    </CustomDrawer>
  );
};

export default DrawerProfile;
