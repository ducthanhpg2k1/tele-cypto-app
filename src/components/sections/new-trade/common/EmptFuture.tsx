import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import EmptyFuture from 'src/assets/icons/EmptyFuture';
import IconOctagonExclamation from 'src/assets/icons/IconOctagonExclamation';

const CustomBox = styled(Box)<{ active: boolean }>(({ theme, active }) => ({
  padding: '3px 12px',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: active ? '#F5F5F5' : 'transparent',
}));

export const EmptFuture = () => {
  const [action, setAction] = useState<'basic' | 'condition'>('basic');

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CustomBox
            active={action === 'basic'}
            onClick={() => setAction('basic')}
          >
            <Typography
              variant="caption"
              color={action === 'basic' ? '#212121' : '#9e9e9e'}
              fontWeight={action === 'basic' ? 500 : 400}
            >
              Cơ bản(0)
            </Typography>
          </CustomBox>
          <CustomBox
            active={action === 'condition'}
            onClick={() => setAction('condition')}
          >
            <Typography
              variant="caption"
              color={action === 'condition' ? '#212121' : '#9e9e9e'}
              fontWeight={action === 'condition' ? 500 : 400}
            >
              Có điều kiện(0)
            </Typography>
          </CustomBox>
        </Box>
        <IconOctagonExclamation />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 1, my: 1 }}>
        <EmptyFuture />
        <Typography
          variant="caption"
          color={'#212121'}
        >
          Không đủ tiền
        </Typography>
      </Box>
    </>
  );
};
