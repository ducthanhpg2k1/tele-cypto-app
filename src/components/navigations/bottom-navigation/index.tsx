import { FC } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CenterIcon from 'src/assets/icons/CenterIcon';
import MarketIcon from 'src/assets/icons/MarketIcon';
import HomeIcon from 'src/assets/icons/HomeIcon';
import WalletIcon from 'src/assets/icons/WalletIcon';
import { ROUTE_PATH } from 'src/constants/route';
import { FutureMenuIcon } from 'src/assets/icons/FutureMenuIcon';

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
  height: 80,
  width: '100%',
  position: 'relative',
  padding: '10px 0',
});

const CenterButton = styled(Box)(({ theme }) => ({
  marginTop: '8px',
  position: 'absolute',
  top: '0px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '64px',
  height: '64px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  zIndex: 100,
}));

const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
  color: '#9E9E9E', // Default color from theme
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
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

export const BottomNav: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();

  const getCurrentValue = () => {
    if (pathname === ROUTE_PATH.HOME) return 'home';
    if (pathname === ROUTE_PATH.MARKET) return 'market';
    if (pathname === ROUTE_PATH.TRADE) return 'trade';
    if (pathname === ROUTE_PATH.FUTURE) return 'future';
    if (pathname === ROUTE_PATH.WALLET) return 'wallet';
    return 'home';
  };

  const handleProfileClick = () => {
    router.push(ROUTE_PATH.TRADE);
  };

  const currentValue = getCurrentValue();

  return (
    <NavPaper elevation={3}>
      <StyledBottomNavigation
        value={currentValue}
        onChange={(_, newValue) => {
          router.push(newValue === 'home' ? ROUTE_PATH.HOME : `/${newValue}`);
        }}
      >
        <StyledBottomNavigationAction
          label='Home'
          value='home'
          showLabel
          icon={
            <HomeIcon color={currentValue === 'home' ? theme.palette.primary.main : '#9E9E9E'} />
          }
        />
        <StyledBottomNavigationAction
          label='Market'
          value='market'
          showLabel
          icon={
            <MarketIcon
              color={currentValue === 'market' ? theme.palette.primary.main : '#9E9E9E'}
            />
          }
        />
        <StyledBottomNavigationAction
          value='trade'
          icon={<Box sx={{ width: 64 }} />}
          sx={{ opacity: 0, pointerEvents: 'none' }}
        />
        <StyledBottomNavigationAction
          label='Futures'
          value='future'
          showLabel
          icon={
            <FutureMenuIcon
              color={currentValue === 'future' ? theme.palette.primary.main : '#9E9E9E'}
            />
          }
        />
        <StyledBottomNavigationAction
          label='Wallet'
          value='wallet'
          showLabel
          icon={
            <WalletIcon
              color={currentValue === 'wallet' ? theme.palette.primary.main : '#9E9E9E'}
            />
          }
        />
      </StyledBottomNavigation>
      <CenterButton onClick={handleProfileClick}>
        <CenterIcon color={currentValue === 'trade' ? theme.palette.primary.main : '#757575'} />
      </CenterButton>
    </NavPaper>
  );
};
