import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const WidgetContainer = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  paddingLeft: 0,
  paddingRight: 0,
  marginBottom: 15,
}));

export const HeaderContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer',
});

export const TitleText = styled('span')(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: theme.typography.body2.fontSize,
  marginBottom: theme.spacing(0.5),
}));

export const BalanceContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const MainBalance = styled('div')(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 700,
  color: theme.palette.text.primary,
  lineHeight: 1.2,
}));

export const EquivalentBalance = styled('div')(({ theme }) => ({
  color: '#9e9e9e',
  marginTop: theme.spacing(0.5),
  fontSize: '12px',
  fontWeight: 400,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
}));

export const StyledIcon = styled(KeyboardArrowUpIcon)<{ $isexpanded: number }>(
  ({ $isexpanded }) => ({
    transition: 'transform 200ms',
    transform: $isexpanded ? 'rotate(0deg)' : 'rotate(180deg)',
  })
);
