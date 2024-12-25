import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(3.5),
  color: theme.palette.common.white,
  background:
    'linear-gradient(126deg, #0866D7 24.99%, #00AFFB 103.87%), linear-gradient(126deg, #00AFFB 24.99%, #0866D7 103.87%)',
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
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: '21px',
}));

export const ArrowIcon = styled(Box)({
  width: 24,
  height: 24,
});
