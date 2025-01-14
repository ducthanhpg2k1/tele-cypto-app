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
  width: '100%',
}));

export default function FooterTrade({
  tabs,
  type,
  refBottomSheetMargin,
}: {
  refBottomSheetMargin: any;
  tabs: TabItem[];
  type?: 'FUTURE' | 'SPOT';
}) {
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
          <div onClick={() => refBottomSheetMargin.current.onOpen()}>
            <SecurityTime />
          </div>
        </Tabs>
      </Box>

      {type !== 'FUTURE' && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            my: 1,
            position: 'fixed',
            borderLeftWidth: '0px !important',
            borderRightWidth: '0px !important',
            background: 'white',
            bottom: '56px',
            marginBottom: '24px',
            left: 0,
            padding: '16px',
            width: '100%',
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
