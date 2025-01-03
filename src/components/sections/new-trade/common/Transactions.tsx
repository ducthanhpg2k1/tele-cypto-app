import { Box, Grid, Typography } from '@mui/material';
import { t } from 'i18next';
import { useRef, useState } from 'react';
import MenuRateIcon from 'src/assets/icons/MenuRateIcon';
import BottomSheetFilterSelection from 'src/components/ui/bottomsheet/bottom-sheet-filter-selection/BottomSheetFilterSelection';
import ButtonBottomSheet from 'src/components/ui/button-bottomsheet/ButtonBottomSheet';
import { DATA_RATE, DOWN_TRADES } from '../constants';
import { TypographyRegular } from '../NewTrade';
import ListTransactions from './ListPrice';

export default function Transactions() {
  const refBottomSheetFilter = useRef<any>();
  const [filterRate, setFilterRate] = useState(DATA_RATE[0].value);
  return (
    <Box>
      <Grid container className='mb-1'>
        <Grid item xs={6}>
          <TypographyRegular>{t('trade.price')}</TypographyRegular>
          <TypographyRegular>(USDT)</TypographyRegular>
        </Grid>
        <Grid item xs={6} className='text-right'>
          <TypographyRegular>{t('trade.amount')}</TypographyRegular>
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
        <BottomSheetFilterSelection
          ref={refBottomSheetFilter}
          data={DATA_RATE}
          value={filterRate}
          handleClickTop={setFilterRate}
        />
        <ButtonBottomSheet
          title={filterRate.toString()}
          sxBox={{ width: '100%' }}
          onClick={() => refBottomSheetFilter.current.onOpen()}
        />
        <MenuRateIcon className='w-4 h-4 ' />
      </Box>
    </Box>
  );
}
