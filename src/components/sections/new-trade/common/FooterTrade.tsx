import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import { t } from 'i18next';
import CaretDown from 'src/assets/icons/CaretDown';
import SecurityTime from 'src/assets/icons/SecurityTime';
import { Tabs } from 'src/components/ui/tabs';
import { TabItem } from 'src/components/ui/tabs/types';

const SectionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0px 8px',
}));

export default function FooterTrade({ tabs, type }: { tabs: TabItem[]; type?: 'FUTURE' | 'SPOT' }) {
  return (
    <SectionContainer flex={1}>
      {/* Tabs Section */}
      <Box
        sx={{
          marginBottom: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <Tabs tabs={tabs}>
          <SecurityTime />
        </Tabs>
      </Box>

      {type !== 'FUTURE' && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            my: 1,
            marginBottom: '24px',
          }}
        >
          <Typography variant='caption' color={'#212121'}>
            {t('trade.header.chart')} BTC/USDT
          </Typography>
          <CaretDown style={{ rotate: '180deg' }} />
        </Box>
      )}
    </SectionContainer>
  );
}
