import Box from '@mui/material/Box';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import BalanceCard from '../ui/BalanceCard';
import { ClockDeskIcon } from 'src/assets/icons/ClockDeskIcon';
import { ChartMixedAltIcon } from 'src/assets/icons/ChartMixedAltIcon';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
  height: 80,
  width: '100%',
  marginBottom: '4px',
}));

export default function BalanceDisplayPanel({
  handleShowChart,
  showChart,
}: {
  showChart: boolean;
  handleShowChart?: VoidFunction;
}) {
  return (
    <Container>
      <BalanceCard />
      <Box sx={{ display: 'flex', gap: '8px' }}>
        <ChartMixedAltIcon onClick={handleShowChart} fill={showChart ? '#177DFF' : '#212121'} />
        {/* <ClockDeskIcon /> */}
      </Box>
    </Container>
  );
}
