import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Card from './card';
import Image from 'next/image';
import { t } from 'i18next';
import CustomCheckbox from 'src/components/ui/checkbox';
import Transactions from '../../../sections/new-trade/common/Transactions';
import ActionTrade from '../../../sections/new-trade/common/ActionTrade';
import CurrencyInfo from '../../../sections/new-trade/common/CurrencyInfo';
const Content = () => {
  return (
    <Box>
      <CurrencyInfo />
      <Grid
        sx={{ py: '12px', px: 1 }}
        container
        spacing={'12px'}
      >
        <Grid
          item
          xs={6}
        >
          <Transactions />
        </Grid>
        <Grid
          item
          xs={6}
        >
          <ActionTrade type="SPOT" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Content;
