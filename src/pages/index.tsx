import type { NextPage } from 'next';
import Box from '@mui/material/Box';
import BalanceWidget from 'src/components/widgets/balance-widget';
import TradeCTAButton from 'src/components/ui/button/TradeCTAButton';
import HomeNavigation from 'src/components/navigations/home-navagation';
import { HOME_TAB_LABELS, HOME_TABS } from 'src/constants/tabs';
import { useEffect, useMemo, useState } from 'react';
import { Tabs } from 'src/components/ui/tabs';
import NewsList from 'src/components/sections/news/news-list';
import MarketList from 'src/components/sections/market/market-list';

const HomePage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const tabs = useMemo(
    () => [
      {
        key: HOME_TABS.EXPLORE,
        label: HOME_TAB_LABELS[HOME_TABS.EXPLORE],
        content: <NewsList />,
      },
      {
        key: HOME_TABS.FOLLOW,
        label: HOME_TAB_LABELS[HOME_TABS.FOLLOW],
        content: <NewsList />,
      },
      {
        key: HOME_TABS.BUZZ,
        label: HOME_TAB_LABELS[HOME_TABS.BUZZ],
        content: <NewsList />,
      },
      {
        key: HOME_TABS.NOTIFICATIONS,
        label: HOME_TAB_LABELS[HOME_TABS.NOTIFICATIONS],
        content: <NewsList />,
      },
      {
        key: HOME_TABS.NEWS,
        label: HOME_TAB_LABELS[HOME_TABS.NEWS],
        content: <NewsList />,
      },
    ],
    [],
  );

  return (
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        py: 2,
        px: 2,
        pb: 10,
        minHeight: '100dvh',
        bgcolor: 'background.default',
      }}
    >
      <BalanceWidget
        balance={1023.5}
        onDeposit={() => {
          console.log('Deposit clicked');
        }}
      />
      <TradeCTAButton />
      <HomeNavigation />
      <MarketList />
      <Tabs tabs={tabs} />
    </Box>
  );
};

export default HomePage;
