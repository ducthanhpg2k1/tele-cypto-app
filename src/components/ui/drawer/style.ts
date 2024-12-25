import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 34,
}));
export const DrawerWrapperContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'showSearch',
})<{ showSearch: boolean }>(({ theme, showSearch }) => ({
  display: 'flex',
  paddingBottom: '8px',
  paddingLeft: '16px',
  paddingRight: '16px',
  paddingTop: '16px',
  flexDirection: 'column',
  gap: '24px',
  height: showSearch ? 'calc(100dvh - 96px)' : 'calc(100dvh - 64px)',
  overflow: 'scroll',
}));
