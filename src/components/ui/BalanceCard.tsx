import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ArrowIcon from 'src/assets/icons/ArrowIcon';
import EyeIcon from 'src/assets/icons/EyeIcon';
import { t } from 'i18next';

// Styled components
const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  maxWidth: 146,
  gap: '2px',
});

const CardHeader = styled(Typography)({
  fontSize: '12px',
  fontWeight: 400,
  color: '#212121',
  height: 20,
  lineHight: '20px',
});

const TotalBalance = styled(Typography)({
  fontSize: '24px',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'end',
  color: '#212121',
});

const Subtitle = styled(Typography)({
  fontSize: '12px',
  fontWeight: 400,
  color: '#9e9e9e',
  lineHeight: '20px',
});

const BalanceText = styled('span')({
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '36px',
  marginRight: '4px',
});

const USDTText = styled('span')({
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '20px',
});

const DropdownIcon = styled('span')({
  fontSize: '14px',
  marginLeft: '4px',
  cursor: 'pointer',
});

// Main Component
const BalanceCard = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <CardHeader variant='body2'>{t('wallet.totalBalance')}</CardHeader>
        <EyeIcon size={16} color='#9E9E9E' />
      </Box>
      <TotalBalance>
        <BalanceText>1.023,5</BalanceText>
        <USDTText>USDT</USDTText>
        <ArrowIcon />
      </TotalBalance>
      <Subtitle>≈ 1.023,5 $</Subtitle>
    </Container>
  );
};

export default BalanceCard;
