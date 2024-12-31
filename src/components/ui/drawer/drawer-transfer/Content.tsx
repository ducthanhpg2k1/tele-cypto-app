import { Box, SelectChangeEvent, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import Button from 'src/components/ui/button';
import { t } from 'i18next';
import { mockDataCoin, mockDataWaleet } from 'src/constants';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';

const Content = () => {
  const [currencyFrom, setCurrencyFrom] = useState('Funding');
  const [currencyTo, setCurrencyTo] = useState('Spot');
  const [amount, setAmount] = useState(0);
  const handleChangeFrom = (event: SelectChangeEvent) => {
    setCurrencyFrom(event.target.value);
  };
  const handleChangeTo = (event: SelectChangeEvent) => {
    setCurrencyTo(event.target.value);
  };
  const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(event.target.value));
  };
  const handleSwap = () => {
    setCurrencyFrom(currencyTo);
    setCurrencyTo(currencyFrom);
  };
  return (
    <Box sx={sx.wrap}>
      <Box sx={sx.content}>
        <Stack className='w-full p-3 bg-[#F5F5F5] flex-row gap-3 rounded-lg'>
          <Stack className='w-full gap-1.5'>
            <CustomSelect
              onChange={(value) => handleChangeFrom(value)}
              fontWeight={600}
              value={currencyFrom}
              data={mockDataWaleet}
              prefix={t('transfer.from')}
            />
            <CustomSelect
              fontWeight={600}
              onChange={(value) => handleChangeTo(value)}
              value={currencyTo}
              data={mockDataWaleet}
              prefix={t('transfer.to')}
            />
          </Stack>
          <Image
            src='/assets/iconly/icon-transfer.svg'
            width={20}
            height={20}
            alt=''
            onClick={handleSwap}
          />
        </Stack>
        <Stack className='w-full gap-0.5'>
          <Typography variant='body2' className='text-[#9E9E9E] w-8 text-[12px]'>
            Coin
          </Typography>
          <Box sx={sx.boxSelect}>
            <CustomSelect
              onChange={(value) => handleChangeTo(value)}
              value={'USDT'}
              data={mockDataCoin}
              prefixIcon='/assets/iconly/icon-usdt.svg'
              colorIcon='#212121'
            />
          </Box>
          <Typography
            variant='caption'
            className='text-[#F54336] font-normal text-[10px] tracking-[0.2px]'
          >
            {t('transfer.error')}
          </Typography>
        </Stack>
        <Stack className='w-full gap-0.5'>
          <Typography variant='body2' className='text-[#9E9E9E] text-[12px]'>
            {t('transfer.amount')}
          </Typography>
          <Box sx={sx.boxInput}>
            <CustomInput
              value={amount.toString()}
              subfixBlack='USDT'
              subfixBlue={t('transfer.max')}
              onChange={handleChangeAmount}
            />
          </Box>
          <Typography
            variant='caption'
            className='text-[#9E9E9E] font-normal text-[10px] tracking-[0.2px]'
          >
            {t('transfer.available')} 0 USDT
          </Typography>
        </Stack>
      </Box>
      <Button fullWidth className='!h-[48px] !p-[10px]'>
        <Typography className='text-[14px]'>{t('transfer.confirm')}</Typography>
      </Button>
    </Box>
  );
};

export default Content;
const sx = {
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  content: {
    display: 'flex',
    paddingBottom: '24px',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '16px',
    flex: 1,
  },
  boxSelect: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: '4px 12px',
    height: '51px',
    borderRadius: '8px',
  },
  boxInput: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: '4px 0px',
    height: '51px',
    borderRadius: '8px',
  },
};
