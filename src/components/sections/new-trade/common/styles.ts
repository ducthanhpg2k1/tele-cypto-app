import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const InputCustomStyled = styled('input')(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 500,
  color: '#212121',
  border: 'none',
  outline: 'none',
  background: 'transparent',
  textAlign: 'center',
  width: '100%',
}));

export const ButtonTradeStyled = styled(Button)<{ background: string }>(
  ({ theme, background }) => ({
    width: '100%',
    py: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    background: '#4AAF57',
    borderRadius: '6px',
    mt: 1,
    height: 40,
    '&:hover': {
      backgroundColor: background,
    },
  }),
);
