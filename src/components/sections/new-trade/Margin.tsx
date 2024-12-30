import { Box, Grid, styled, Typography } from '@mui/material';
import { TabItem } from 'src/components/ui/tabs/types';
import ActionTrade from './common/ActionTrade';
import CurrencyInfo from './common/CurrencyInfo';
import { EmptySpotTrade } from './common/EmptySpotTrade';
import FooterTrade from './common/FooterTrade';
import Transactions from './common/Transactions';
import { t } from 'i18next';

export const Section = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '4px 0',
}));

export const TypographyRegular = styled(Typography)(({ theme }) => ({
  fontSize: '10px',
  lineHeight: '12.1px',
  fontWeight: 400,
  color: '#9E9E9E',
  letterSpacing: 0.2,
}));
export default function NewTrade() {
  const tabs: TabItem[] = [
    {
      key: 'crypto',
      label: t('trade.history.tabs.orders') + ' (0)',
      content: <EmptySpotTrade />,
    },
    {
      key: 'account',
      label: t('trade.history.tabs.asset'),
      content: <EmptySpotTrade />,
    },
  ];
  return (
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        px: 1,
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        bgcolor: 'background.default',
        overflow: 'hidden',
      }}
    >
      <Box>
        <CurrencyInfo />
      </Box>
      <Box sx={{ height: 'calc(100% - 94px)', overflow: 'auto' }}>
        <Grid sx={{ py: '12px', px: 1 }} container spacing={'12px'}>
          <Grid item xs={6}>
            <Transactions />
          </Grid>
          <Grid item xs={6}>
            <ActionTrade type='SPOT' />
          </Grid>
        </Grid>
        <FooterTrade tabs={tabs} />
      </Box>
    </Box>
  );
}
