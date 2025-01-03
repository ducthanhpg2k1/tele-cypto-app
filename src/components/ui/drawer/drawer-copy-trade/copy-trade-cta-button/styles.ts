import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  padding: '18px 12px',
  borderRadius: theme.shape.borderRadius,
  // padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '20px',
  color: theme.palette.common.white,
  background: '#E8F2FF',
  cursor: 'pointer',
}));

export const ContentContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  flex: 1,
});

export const IconContainer = styled(Box)({
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const TextContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  flex: 1,
  alignItems: 'flex-start',
});

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: '21px',
  color: '#212121',
}));

export const TradeButton = styled(Button)({
  padding: 0,
  textAlign: 'left',
  minWidth: 'unset',
  color: 'inherit',
  '&:hover': {
    background: 'transparent',
  },
});

export const ArrowIcon = styled(Box)({
  width: 24,
  height: 24,
});

export const CTAButton = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  justifyContent: 'center',
  alignItems: 'center',
});
