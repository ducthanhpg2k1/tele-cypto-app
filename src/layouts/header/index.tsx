import { Avatar, Badge, Box, IconButton, InputBase, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import QrCodeIcon from 'src/assets/icons/QrCodeIcon';
import SupportIcon from 'src/assets/icons/SupportIcon';
import React, { useMemo, useRef } from 'react';
import SearchIcon from 'src/assets/icons/SearchIcon';
import NotificationIcon from 'src/assets/icons/NotificationIcon';
import ChatIcon from 'src/assets/icons/ChatIcon';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ROUTE_PATH } from 'src/constants/route';
import { DrawerHandle } from 'src/components/ui/drawer';
import DrawerNotification from 'src/components/ui/drawer/drawer-notification';
import InputSearch from 'src/components/ui/input-search/InputSearch';

const HeaderRoot = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: '64px',
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.neutral[800] : theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  zIndex: 1000,
  maxWidth: '480px',
  margin: '0 auto',
  width: '100%',
  gap: '12px',
}));

const Logo = styled('img')({
  height: '32px',
  width: 'auto',
});

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.neutral[400] : theme.palette.text.primary,
}));

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const pathname = usePathname();
  const refNoti = useRef<DrawerHandle | null>(null);
  // check path
  const isShowChat = useMemo(() => {
    return [ROUTE_PATH.WALLET, ROUTE_PATH.FUTURE, ROUTE_PATH.MARKET].includes(pathname);
  }, [pathname]);

  return (
    <HeaderRoot>
      <DrawerNotification ref={refNoti} />
      <Logo src='/logo.svg' alt='Telegrex Logo' />
      <InputSearch onSearch={onSearch} />
      <Box sx={{ padding: 0, gap: '4px' }} display='flex' alignItems='center'>
        {isShowChat ? (
          <>
            <ChatIcon className='w-6 h-6 ' />
            <Image
              src='/assets/iconly/ic-avatar.svg'
              className='w-8 h-8 rounded-full object-cover'
              width={36}
              height={36}
              alt='avatar'
              quality={100}
            />
          </>
        ) : (
          <>
            <QrCodeIcon />
            <StyledIconButton size='medium'>
              <Badge
                badgeContent=''
                color='error'
                sx={{
                  '& .MuiBadge-badge': {
                    right: 4,
                    top: 3,
                    fontSize: '0',
                    height: '7px',
                    width: '7px',
                    borderRadius: '50%',
                    minWidth: 'initial',
                    padding: 0,
                  },
                }}
                onClick={() => refNoti.current?.onOpen()}
              >
                <NotificationIcon />
              </Badge>
            </StyledIconButton>
            <SupportIcon />
          </>
        )}
      </Box>
    </HeaderRoot>
  );
};

export default Header;
