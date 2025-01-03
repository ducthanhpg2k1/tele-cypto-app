import { Box } from '@mui/material';
import { useMemo, type ReactNode } from 'react';
import { MobileContainer } from 'src/layouts/mobileContainer';
import { BottomNav } from 'src/components/navigations/bottom-navigation';
import Header from 'src/layouts/header';
import { Toaster } from 'sonner';
import { usePathname } from 'next/navigation';
import { ROUTE_PATH } from 'src/constants/route';

interface LayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: LayoutProps) => {
  const pathName = usePathname();
  const isDisplayHeader = useMemo(() => {
    return ![ROUTE_PATH.TRADE, ROUTE_PATH.FUTURE].includes(pathName);
  }, [pathName]);
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100dvh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <MobileContainer>
        {isDisplayHeader && <Header />}
        <Box
          sx={{
            pt: isDisplayHeader ? '64px' : 0,
            pb: '70px',
            height: '100dvh',
            overflow: 'auto',
          }}
        >
          {children}
        </Box>
        <Toaster position='top-center' duration={1000} />
        <BottomNav />
      </MobileContainer>
    </Box>
  );
};

export default DefaultLayout;
