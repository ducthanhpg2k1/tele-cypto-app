import { styled } from '@mui/material/styles';
import { Tabs as MuiTabs, Tab } from '@mui/material';

export const ScrollableTabs = styled(MuiTabs)<{ hideIndicator: boolean }>(
  ({ theme, hideIndicator }) => ({
    '& .MuiTabs-indicator': {
      display: hideIndicator ? 'none' : 'block',
      backgroundColor: '#177DFF',
      borderRadius: 1000,
      height: '4px',
      transform: 'scaleX(0.7)',
      marginBottom: '4px',
    },
    '& .Mui-selected': {
      color: `${theme.palette.primary.main} !important`,
    },
  }),
);
export const TabCustom = styled(Tab, {
  shouldForwardProp: (prop) => prop !== 'size',
})<{ size: 'medium' | 'large' }>(({ theme, size }) => ({
  rowGap: 2,
  fontSize: size == 'large' ? '16px' : '14px',
  minHeight: 'auto',
  marginLeft: '0 !important',
  marginRight: '16px',
  minWidth: '32px',
  '&.Mui-selected': {
    color: '#212121 !important',
    fontWeight: 600,
  },
  '&:not(.Mui-selected)': {
    color: '#616161',
    fontWeight: 400,
  },
}));
