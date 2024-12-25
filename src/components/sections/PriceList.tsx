import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import GoBackIcon from 'src/assets/icons/ArrowIcon';

// Styled components using MUI's styled utility
const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const ListContainer = styled(Container)(({ theme }) => ({
  gap: '16px',
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '32px',
  marginBottom: '12px',
}));

const FilterHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
}));

const Dropdown = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  fontWeight: 500,
  cursor: 'pointer',
  flexGrow: '1',
  color: theme.palette.text.secondary,
}));

const HeaderItem = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  fontWeight: 500,
  color: theme.palette.text.secondary,
  flexGrow: '1',
  textAlign: 'right',
}));

const HeaderItemPercent = styled(HeaderItem)(({ theme }) => ({
  flexShrink: 0,
  width: '72px',
  flexGrow: 'unset',
}));

const Row = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '8px',
}));

const Pair = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '4px',
  flexGrow: '1',
  alignItems: 'center',
}));

const PairName = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  fontWeight: 400,
  color: theme.palette.text.primary,
  lineHeight: '20px',
}));

const PairDetail = styled(Typography)(({ theme }) => ({
  fontSize: '8px',
  color: theme.palette.text.secondary,
  backgroundColor: '#F5F5F5',
  borderRadius: '2px',
  padding: '1px 2px',
}));

const Price = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: '1',
  alignItems: 'flex-end',
  gap: '4px',
}));

const PriceValue = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

const PriceDetail = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  color: theme.palette.text.secondary,
}));

const Percentage = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isPositive',
})<{ isPositive: boolean }>(({ isPositive, theme }) => ({
  flexShrink: 0,
  width: '72px',
  fontSize: '14px',
  fontWeight: 500,
  padding: '3.5px 10px',
  borderRadius: '6px',
  lineHeight: '21px',
  color: theme.palette.common.white,
  backgroundColor: isPositive ? '#4AAF57' : '#F54336',
}));

// Sample Data
const pairs = [
  {
    name: 'BNB /USDT',
    detail: '10x',
    price: '577,5',
    usdValue: '≈ 577,5 $',
    change: '-3,63%',
    isPositive: false,
  },
  {
    name: 'BNB /USDT',
    detail: '10x',
    price: '577,5',
    usdValue: '≈ 577,5 $',
    change: '+3,63%',
    isPositive: true,
  },
  {
    name: 'BNB /USDT',
    detail: '10x',
    price: '577,5',
    usdValue: '≈ 577,5 $',
    change: '-3,63%',
    isPositive: false,
  },
];

// Main Component
const PriceList: React.FC = () => {
  return (
    <Container>
      <Header>
        <FilterHeader>
          <Dropdown>Spot</Dropdown>
          <GoBackIcon />
        </FilterHeader>
        <HeaderItem>Price</HeaderItem>
        <HeaderItemPercent>≈ 24h</HeaderItemPercent>
      </Header>
      <ListContainer>
        {pairs.map((pair, index) => (
          <Row
            key={index}
            style={{
              gap: '32px',
            }}
          >
            <Pair>
              <PairName>{pair.name}</PairName>
              <PairDetail>{pair.detail}</PairDetail>
            </Pair>
            <Price>
              <PriceValue>{pair.price}</PriceValue>
              <PriceDetail>{pair.usdValue}</PriceDetail>
            </Price>
            <Percentage isPositive={pair.isPositive}>{pair.change}</Percentage>
          </Row>
        ))}
      </ListContainer>
    </Container>
  );
};

export default PriceList;
