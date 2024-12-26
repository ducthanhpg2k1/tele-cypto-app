import React, { useState, useEffect, useRef } from 'react';
import { Box, Grid, styled, Typography } from '@mui/material';
import ScrollableTabsButtonPrevent from 'src/components/ui/ScrollableTabsButtonPrevent';
import { TabItem } from 'src/components/ui/tabs/types';
import ActionTrade from './common/ActionTrade';
import CurrencyInfo from './common/CurrencyInfo';
import { EmptySpotTrade } from './common/EmptySpotTrade';
import FooterTrade from './common/FooterTrade';
import Transactions from './common/Transactions';
import { TAB_TRADES } from './constants';
import TagsTrade from './common/TagsTrade';
import DrawerBotTrade from 'src/components/ui/drawer/drawer-bot-trade';
import DrawerExchange from 'src/components/ui/drawer/drawer-exchange';
import { DrawerHandle } from 'src/components/ui/drawer';

export const Section = styled(Box)(({ theme }) => ({
  width: '100%',
  transition: 'transform 0.3s ease, opacity 0.3s ease',
}));

export const TypographyRegular = styled(Typography)(({ theme }) => ({
  fontSize: '10px',
  lineHeight: '12.1px',
  fontWeight: 400,
  color: '#9E9E9E',
  letterSpacing: 0.2,
}));

export default function NewTrade() {
  const [showSection, setShowSection] = useState(true);
  const [valueCustom, setValueCustom] = useState(1);
  const refBotTrade = useRef<DrawerHandle | null>(null);
  const refExchange = useRef<DrawerHandle | null>(null);
  const tabs: TabItem[] = [
    {
      key: 'crypto',
      label: 'Lệnh chờ (0)',
      content: <EmptySpotTrade />,
    },
    {
      key: 'account',
      label: 'Tài sản',
      content: <EmptySpotTrade />,
    },
  ];

  const handleScroll = (e: any) => {
    if (e.target.scrollTop === 0) {
      setShowSection(true);
    } else {
      setShowSection(false);
    }
  };

  const handleChangeTab = (value: number) => {
    if (value === 0) {
      refBotTrade.current?.onOpen();
      return;
    }
    if (value === 3) {
      refExchange.current?.onOpen();
      return;
    }
    setValueCustom(value);
  };
  return (
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        bgcolor: 'background.default',
        overflow: 'auto',
      }}
      onScroll={handleScroll}
    >
      <DrawerBotTrade ref={refBotTrade} />
      <DrawerExchange ref={refExchange} />
      <Box
        sx={{
          px: 1,
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: '#ffffff',
        }}
      >
        <Section
          sx={{
            height: showSection ? '32px' : 0,
            overflow: 'hidden',
            transition: 'height 0.3s ease',
          }}
        >
          <ScrollableTabsButtonPrevent
            valueCustom={valueCustom}
            tabs={TAB_TRADES}
            handleChange={(e, v) => handleChangeTab(v)}
          />
        </Section>
        <CurrencyInfo />
      </Box>
      <Grid sx={{ py: '12px', px: 2 }} container spacing={'12px'}>
        {valueCustom === 2 && <TagsTrade />}
        <Grid item xs={6}>
          <Transactions />
        </Grid>
        <Grid item xs={6}>
          <ActionTrade type='SPOT' />
        </Grid>
      </Grid>
      <FooterTrade tabs={tabs} />
    </Box>
  );
}
