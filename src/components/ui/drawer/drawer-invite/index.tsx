import React from 'react';
import { t } from 'i18next';
import CustomDrawer from 'src/components/ui/drawer';
import Invite from './Content';
const DrawerInvite = ({ refInvite }: any) => {
  return (
    <CustomDrawer
      anchor="right"
      paperClassName={{
        sx: { width: { xs: '100%', sm: 400 }, pt: 2 },
      }}
      ref={refInvite}
      label={t('invite.header')}
    >
      <Invite />
    </CustomDrawer>
  );
};

export default DrawerInvite;
