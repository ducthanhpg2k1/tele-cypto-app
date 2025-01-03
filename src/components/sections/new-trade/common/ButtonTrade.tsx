import { Typography } from '@mui/material';
import React from 'react';
import { ButtonTradeStyled } from './styles';

export default function ButtonTrade({
  style,
  title,
  onClick,
  background,
}: {
  style?: React.CSSProperties;
  title: string;
  onClick?: () => void;
  background: string;
}) {
  return (
    <ButtonTradeStyled
      sx={{
        ...style,
      }}
      background={background}
      onClick={() => onClick && onClick()}
    >
      <Typography variant='body2' color={'white'} fontWeight={500}>
        {title}
      </Typography>
    </ButtonTradeStyled>
  );
}
