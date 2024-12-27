import { FC, useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { styled, useTheme } from '@mui/material/styles';
import { TAB_COPPY_TRADE } from '..';
import IconInvestmentPortfolio from 'src/assets/icons/IconInvestmentPortfolio';
import IconCoppy from 'src/assets/icons/IconCoppy';

const NavPaper = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%',
  zIndex: 100,
  overflow: 'hidden',
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.neutral[800] : theme.palette.background.paper,
}));

const StyledBottomNavigation = styled(BottomNavigation)({
  backgroundColor: 'transparent',
  height: 70,
  width: '100%',
  position: 'relative',
  padding: '10px 0',
});

const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
  color: '#9E9E9E',

  '&.Mui-selected': {
    color: theme.palette.primary.main,
    fontSize: '12px !important',
  },
  minWidth: 'auto',
  padding: '6px 12px',
  '&.MuiBottomNavigationAction-label': {
    opacity: 100,
    fontSize: '12px !important',
  },
  '.MuiBottomNavigationAction-label.Mui-selected': {
    fontSize: '12px !important',
  },
  opacity: 1,
}));

const BottomNavCoppyTrade = ({
  activeTab,
  onChangeTab,
}: {
  activeTab: TAB_COPPY_TRADE;
  onChangeTab: (tab: TAB_COPPY_TRADE) => void;
}) => {
  const theme = useTheme();

  return (
    <NavPaper elevation={3}>
      <StyledBottomNavigation value={activeTab} onChange={(_, newValue) => onChangeTab(newValue)}>
        <StyledBottomNavigationAction
          label='Danh mục đầu tư'
          value={TAB_COPPY_TRADE.investmentPortfolio}
          showLabel
          icon={
            <IconInvestmentPortfolio
              color={activeTab === TAB_COPPY_TRADE.investmentPortfolio ? theme.palette.primary.main : '#9E9E9E'}
            />
          }
        />
        <StyledBottomNavigationAction
          label='Sao chép'
          value={TAB_COPPY_TRADE.coppy}
          showLabel
          icon={
            <IconCoppy
              color={
                activeTab === TAB_COPPY_TRADE.coppy ? theme.palette.primary.main : '#9E9E9E'
              }
            />
          }
        />


      </StyledBottomNavigation>
    </NavPaper>
  );
};

export default BottomNavCoppyTrade;
