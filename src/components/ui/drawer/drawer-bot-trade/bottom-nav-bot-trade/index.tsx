import { FC, useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { styled, useTheme } from '@mui/material/styles';
import FutureIcon from 'src/assets/icons/FutureIcon';

import IconBotTrade from 'src/assets/icons/IconBotTrade';
import IconTransaction from 'src/assets/icons/IconTransaction';
import IconMarket from 'src/assets/icons/IconMarket';
import { TAB_BOT_TRADE } from '..';

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

const BottomNavBotTrade = ({
  activeTab,
  onChangeTab,
}: {
  activeTab: TAB_BOT_TRADE;
  onChangeTab: (tab: TAB_BOT_TRADE) => void;
}) => {
  const theme = useTheme();

  return (
    <NavPaper elevation={3}>
      <StyledBottomNavigation value={activeTab} onChange={(_, newValue) => onChangeTab(newValue)}>
        <StyledBottomNavigationAction
          label='Bot giao dịch'
          value={TAB_BOT_TRADE.BOT}
          showLabel
          icon={
            <IconBotTrade
              color={activeTab === TAB_BOT_TRADE.BOT ? theme.palette.primary.main : '#9E9E9E'}
            />
          }
        />
        <StyledBottomNavigationAction
          label='Giao dịch'
          value={TAB_BOT_TRADE.TRANSACTION}
          showLabel
          icon={
            <IconTransaction
              color={
                activeTab === TAB_BOT_TRADE.TRANSACTION ? theme.palette.primary.main : '#9E9E9E'
              }
            />
          }
        />

        <StyledBottomNavigationAction
          label='Tất cả lệnh'
          value={TAB_BOT_TRADE.ALL_COMMANDS}
          showLabel
          icon={
            <FutureIcon
              color={
                activeTab === TAB_BOT_TRADE.ALL_COMMANDS ? theme.palette.primary.main : '#9E9E9E'
              }
            />
          }
        />
        <StyledBottomNavigationAction
          label='Thị trường'
          value={TAB_BOT_TRADE.MARKET}
          showLabel
          icon={
            <IconMarket
              color={activeTab === TAB_BOT_TRADE.MARKET ? theme.palette.primary.main : '#9E9E9E'}
            />
          }
        />
      </StyledBottomNavigation>
    </NavPaper>
  );
};

export default BottomNavBotTrade;
