import { Box, Button, Typography } from '@mui/material';
import { t } from 'i18next';

export const EmptySpotTrade = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 1, my: 1 }}>
      <Typography variant='caption' color={'#212121'}>
        {t('trade.history.noOrders')}
      </Typography>
      <Typography variant='caption' color={'#9E9E9E'} className='font-normal'>
        {t('trade.history.letTopTradersHelp')}
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
          {t('trade.history.copyTrade')}
        </Typography>
      </Button>
    </Box>
  );
};
