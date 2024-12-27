import React, { useRef } from 'react';
import { t } from 'i18next';
import CustomDrawer from 'src/components/ui/drawer';
import Content from './Content';
import DrawerProfile from '../drawer-profile';
const DrawerProfileCoppy = ({ refProfileCoppy }: any) => {
  const refProfile: any = useRef()
  const handleClickIconProfile = () => {
    refProfile.current.onOpen()
  }
  return (
    <CustomDrawer
      anchor='right'
      paperClassName={{
        sx: { width: { xs: '100%', sm: 400 }, pt: 2 },
      }}
      ref={refProfileCoppy}
      label={''}
      isProfile
      handleClickIconProfile={handleClickIconProfile}
    >
      <Content />

      <DrawerProfile refProfile={refProfile} />
    </CustomDrawer>
  );
};

export default DrawerProfileCoppy;
