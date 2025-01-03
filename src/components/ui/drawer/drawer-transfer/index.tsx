import { t } from 'i18next';
import { forwardRef } from 'react';
import CustomDrawer, { DrawerHandle } from 'src/components/ui/drawer';
import Content from './Content';
const DrawerTransfer = forwardRef<DrawerHandle, {}>((_, ref) => {
  return (
    <CustomDrawer
      anchor='right'
      paperClassName={{
        sx: { width: { xs: '100%', sm: 400 }, pt: 2 },
      }}
      ref={ref}
      label={t('transfer.header')}
      showTimeIcon
    >
      <Content />
    </CustomDrawer>
  );
});

export default DrawerTransfer;
