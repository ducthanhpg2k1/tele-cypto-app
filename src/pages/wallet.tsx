import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { t } from 'i18next';
import type { NextPage } from 'next';
import { log } from 'node:console';
import { useState } from 'react';
import GoBackIcon from 'src/assets/icons/ArrowIcon';
import BalanceDisplayPanel from 'src/components/sections/BalanceDisplayPanel';
import FinancialOverview from 'src/components/sections/FinancialOverview';
import TransactionMenu from 'src/components/sections/TransactionMenu';
import ScrollableTabsButtonPrevent from 'src/components/ui/ScrollableTabsButtonPrevent';
import { TabItem } from 'src/components/ui/tabs/types';
import ViewChart from 'src/components/view-chart';

const Section = styled(Box)(({ theme }) => ({
  width: '100%',
  marginBottom: '24px',
}));

const WalletPage: NextPage = () => {
  const [showChart, setShowChart] = useState<boolean>(false);
  const tabs: TabItem[] = [
    { key: 'account-overview', label: t('wallet.overview'), content: '' },
    { key: 'spot-trading', label: t('navigation.quickActions.spot'), content: '' },
    { key: 'funding', label: 'Funding', content: '' },
    { key: 'earn', label: 'Earn', content: '' },
    { key: 'copy-trading', label: t('navigation.quickActions.copytrade'), content: '' },
    { key: 'buy-crypto', label: t('trade.buy'), content: '' },
  ];

  const handleShowChart = () => {
    setShowChart(!showChart);
  };

  console.log(showChart, 'showChart');

  return (
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        pt: 2,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        minHeight: '100dvh',
        bgcolor: 'background.default',
      }}
    >
      <Section>
        <ScrollableTabsButtonPrevent tabs={tabs} handleChange={(e, v) => console.log(v)} />
      </Section>
      <BalanceDisplayPanel showChart={showChart} handleShowChart={handleShowChart} />
      <Section
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '20px',
          }}
        >
          PNL {t('wallet.today')} +0 USDT(+0,00%)
        </Typography>
        <GoBackIcon fill='#212121' width={16} height={16} isFilled={false} />
      </Section>
      {showChart && <ViewChart />}
      <TransactionMenu />
      <FinancialOverview />
    </Box>
  );
};

export default WalletPage;
