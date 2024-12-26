import { Box, Button, Typography } from '@mui/material';

export const EmptySpotTrade = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 1, my: 1 }}>
      <Typography variant='caption' color={'#212121'}>
        Không có lệnh
      </Typography>
      <Typography variant='caption' color={'#9E9E9E'} className='font-normal'>
        Hãy để các nhà giao dịch hàng đầu giúp bạn
      </Typography>
      <Button
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: '10px',
          py: 0.5,
          borderRadius: 0.5,
          border: '1px solid #E0E0E0',
        }}
      >
        <Typography color={'#9e9e9e'} variant='caption'>
          Sao chép giao dịch
        </Typography>
      </Button>
    </Box>
  );
};
