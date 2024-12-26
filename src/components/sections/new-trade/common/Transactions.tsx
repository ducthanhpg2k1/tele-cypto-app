import { Box, Grid, Typography } from '@mui/material';
import { DOWN_TRADES, mockDataRate } from '../constants';
import { TypographyRegular } from '../NewTrade';
import ListTransactions from './ListPrice';
import CustomSelect from '../../../ui/drawer/drawer-transfer/CustomSelect';
import { mockDataCoin } from 'src/constants';
import MenuRateIcon from 'src/assets/icons/MenuRateIcon';
import ButtonBottomSheet from 'src/components/ui/button-bottomsheet/ButtonBottomSheet';

export default function Transactions() {
  return (
    <Box>
      <Grid container className='mb-1'>
        <Grid item xs={6}>
          <TypographyRegular>Giá</TypographyRegular>
          <TypographyRegular>(USDT)</TypographyRegular>
        </Grid>
        <Grid item xs={6} className='text-right'>
          <TypographyRegular>Số lượng</TypographyRegular>
          <TypographyRegular>(BTC)</TypographyRegular>
        </Grid>
      </Grid>
      <ListTransactions data={DOWN_TRADES} background='#F7555514' colorText='#F54336' />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 1,
          flexDirection: 'column',
        }}
      >
        <Typography variant='body1' color={'#F54336'} fontWeight={600}>
          69.464,12
        </Typography>
        <Typography variant='caption' color={'#9E9E9E'}>
          ≈ 577,5 $
        </Typography>
      </Box>
      <ListTransactions data={DOWN_TRADES} background='#06C14914' colorText='#4AAF57' />
      <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
        <ButtonBottomSheet title='0.01' sxBox={{ width: '100%' }} />
        <MenuRateIcon className='w-4 h-4 ' />
      </Box>
    </Box>
  );
}
