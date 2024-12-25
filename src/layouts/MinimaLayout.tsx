import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { MobileContainer } from 'src/layouts/mobileContainer';
import { Toaster } from 'src/components/ui/toast/toaster';
import { BottomNav } from 'src/components/navigations/bottom-navigation';
import GoBackIcon from 'src/assets/icons/GoBackIcon';
import { ChartMixedAltIcon } from 'src/assets/icons/ChartMixedAltIcon';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const MinimaLayout = ({ children, title }: LayoutProps) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // Goes to the previous page
  };

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
        <Box
          component="header"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '5px 16px',
          }}
        >
          <Box sx={{ display: 'flex', gap: '8px', minWidth: '56px' }}>
            <GoBackIcon handleClick={handleGoBack} />
          </Box>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 700,
              lineHeight: '21px',
              textAlign: 'center',
              flexGrow: 1,
            }}
          >
            {title}
          </Typography>
          <Box sx={{ display: 'flex', gap: '8px', minWidth: '56px', justifyContent: 'end' }}>
            <ChartMixedAltIcon />
          </Box>
        </Box>
        {/* <Header /> */}
        <Box sx={{ pb: '70px' }}>{children}</Box>
        <Toaster />
        <BottomNav />
      </MobileContainer>
    </Box>
  );
};

export default MinimaLayout;
