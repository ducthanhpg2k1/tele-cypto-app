import { Box, Button, Typography } from '@mui/material';
import { t } from 'i18next';

export const EmptySpotTrade = ({ isMargin }: { isMargin?: boolean }) => {
  console.log(isMargin, 'isMargin');

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 1,
        my: 1,
        justifyContent: 'center',
        px:2,
      }}
    >
      <Typography variant='caption' color={'#212121'}>
        {isMargin ? t('trade.history.noMoney') : t('trade.history.noOrders')}
      </Typography>
      <Typography
        variant='caption'
        color={'#9E9E9E'}
        className='font-normal max-w-[70%] text-center'
      >
        {isMargin ? t('trade.history.marginNote') : t('trade.history.letTopTradersHelp')}
      </Typography>
      {isMargin ? (
        <Box
          display={'flex'}
          alignItems={'center'}
          gap={1.5}
          width={'100%'}
          justifyContent={'center'}
          mt={1}
        >
          <Button
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: '10px',
              py: 0.5,
              borderRadius: 0.5,
              border: '1px solid #E0E0E0',
              width: '100%',
            }}
          >
            <Typography color={'#9e9e9e'} variant='caption'>
              {t('trade.history.transfer')}
            </Typography>
          </Button>
          <Button
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: '10px',
              py: 0.5,
              borderRadius: 0.5,
              border: '1px solid #E0E0E0',
              width: '100%',
            }}
          >
            <Typography color={'#9e9e9e'} variant='caption'>
              {t('trade.history.copyTrade')}
            </Typography>
          </Button>
          <Button
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: '10px',
              py: 0.5,
              borderRadius: 0.5,
              border: '1px solid #E0E0E0',
              width: '100%',
            }}
          >
            <Typography color={'#9e9e9e'} variant='caption'>
              {t('trade.history.learn')}
            </Typography>
          </Button>
        </Box>
      ) : (
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
      )}
    </Box>
  );
};
