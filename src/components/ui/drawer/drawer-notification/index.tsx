import React, { forwardRef } from 'react';
import { Box, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { t } from 'i18next';
import CustomDrawer, { DrawerHandle } from 'src/components/ui/drawer';
import { DrawerHeader } from 'src/components/navigations/home-navagation/styles';
import Content from './Content';
import SearchIcon from 'src/assets/icons/SearchIcon';
import InputSearch from 'src/components/ui/input-search/InputSearch';

const DrawerNotification = forwardRef<DrawerHandle, {}>((_, ref) => {
  return (
    <CustomDrawer
      anchor="right"
      paperClassName={{
        sx: { width: { xs: '100%', sm: 400 }, pt: 2 },
      }}
      ref={ref}
      label={t('notification.header')}
      showSearch
    >
      <Content />
    </CustomDrawer>
  );
});

export default DrawerNotification;
