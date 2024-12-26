import { Button, Typography } from '@mui/material';
import React from 'react';

export default function ButtonTrade({
  style,
  title,
  onClick,
}: {
  style?: React.CSSProperties;
  title: string;
  onClick?: () => void;
}) {
  return (
    <Button
      sx={{
        width: '100%',
        py: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
        background: '#4AAF57',
        borderRadius: '6px',
        mt: 1,
        height: 40,
        ...style,
      }}
      onClick={() => onClick && onClick()}
    >
      <Typography variant='body2' color={'white'} fontWeight={500}>
        {title}
      </Typography>
    </Button>
  );
}
