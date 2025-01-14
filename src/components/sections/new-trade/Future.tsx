import React, { useState, useEffect, useRef } from 'react';
import { Box, Grid, styled, Typography } from '@mui/material';
import ScrollableTabsButtonPrevent from 'src/components/ui/ScrollableTabsButtonPrevent';
import { TabItem } from 'src/components/ui/tabs/types';
import ActionTrade from './common/ActionTrade';
import CurrencyInfo from './common/CurrencyInfo';
import { EmptySpotTrade } from './common/EmptySpotTrade';
import FooterTrade from './common/FooterTrade';
import Transactions from './common/Transactions';
import { TAB_FUTURES, TAB_TRADES } from './constants';
import TagsTrade from './common/TagsTrade';
import DrawerBotTrade from 'src/components/ui/drawer/drawer-bot-trade';
import DrawerExchange from 'src/components/ui/drawer/drawer-exchange';
import { DrawerHandle } from 'src/components/ui/drawer';
import { EmptFuture } from './common/EmptFuture';
import TradeCTAButton from 'src/components/ui/button/TradeCTAButton';
import DrawerCopyTrade from 'src/components/ui/drawer/drawer-copy-trade';
import { t } from 'i18next';
import TagsFuture from './common/TagsFuture';
import BottomSheetMargin from 'src/components/ui/bottomsheet/bottom-sheet-margin';

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
  const [valueCustom, setValueCustom] = useState(0);
  const refBotTrade = useRef<DrawerHandle | null>(null);
  const refExchange = useRef<DrawerHandle | null>(null);
  const refBottomSheetMargin = useRef<DrawerHandle | null>(null);

  const refDrawerCopyTrade = useRef<DrawerHandle | null>(null);

  const tabsFuture: TabItem[] = [
    {
      key: 'crypto',
      label: t('trade.history.tabs.orders') + ' (0)',
      content: <EmptFuture />,
    },
    {
      key: 'account',
      label: t('trade.history.tabs.positions') + ' (0)',
      content: <EmptFuture />,
    },
    {
      key: 'account',
      label: t('trade.history.tabs.grid'),
      content: <EmptFuture />,
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
    if (value === 1) {
      refDrawerCopyTrade.current?.onOpen();
      return;
    }
    if (value === 2) {
      refBotTrade.current?.onOpen();
      return;
    }
    // if (![1, 2].includes(value)) {
    //   setValueCustom(value);
    // }
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
      <DrawerCopyTrade ref={refDrawerCopyTrade} />
      <DrawerExchange ref={refExchange} />
      <BottomSheetMargin ref={refBottomSheetMargin} />

      <Box
        sx={{
          px: 1,
          position: 'sticky',
          top: 0,
          background: '#ffffff',
          zIndex: 1000,
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
            tabs={TAB_FUTURES}
            isValueCustom
            handleChange={(e, v) => handleChangeTab(v)}
          />
        </Section>
        <div className='py-2'>
          <TradeCTAButton
            title={
              <Typography variant='caption' color={'#e0e0e0'} className='font-normal'>
                {t('trade.header.noCostNoLoss')}
              </Typography>
            }
            description={
              <Typography
                variant='body2'
                color={'#ffffff'}
                fontWeight={700}
                className='line-clamp-1'
              >
                {t('trade.header.placeFutureOrder')}
              </Typography>
            }
          />
        </div>
        <CurrencyInfo />
      </Box>
      <Grid sx={{ py: '12px', px: 2 }} container spacing={'12px'}>
        {valueCustom === 2 && <TagsTrade />}
        {valueCustom === 0 && <TagsFuture />}
        <Grid item xs={6}>
          <Transactions />
        </Grid>
        <Grid item xs={6}>
          <ActionTrade type='FUTURE' />
        </Grid>
      </Grid>
      <FooterTrade refBottomSheetMargin={refBottomSheetMargin} tabs={tabsFuture} type='FUTURE' />
    </Box>
  );
}
