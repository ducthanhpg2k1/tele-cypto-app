import React, { forwardRef } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { t } from 'i18next';
import HelpInfoIcon from 'src/assets/icons/HelpInfoIcon';
import HeaderTimeIcon from 'src/assets/icons/HeaderTimeIcon';
import CustomDrawer, { DrawerHandle } from 'src/components/ui/drawer';
import { DrawerHeader } from 'src/components/navigations/home-navagation/styles';
import Content from './Content';

const DrawerDeposit = forwardRef<DrawerHandle, {}>((_, ref) => {
  return (
    <CustomDrawer
      anchor='right'
      paperClassName={{
        sx: { width: { xs: '100%', sm: 400 }, pt: 2 },
      }}
      ref={ref}
      label={t('deposit.header')}
      showHelpIcon
      showTimeIcon
    >
      <Content />
    </CustomDrawer>
  );
});

export default DrawerDeposit;
