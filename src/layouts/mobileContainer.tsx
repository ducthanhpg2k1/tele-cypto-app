import { Box, styled } from '@mui/material';

const MobileWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100dvh',
  width: '100%',
  position: 'relative',
  backgroundColor: 'background.paper',
  maxWidth: '480px',
});

export const MobileContainer = ({ children }: { children: React.ReactNode }) => {
  return <MobileWrapper>{children}</MobileWrapper>;
};
