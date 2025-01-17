import { Typography } from '@mui/material';
import { t } from 'i18next';
import ChartLinePrice from '../ChartLinePrice';
import StockChart from '../StockChart';
import { useState } from 'react';
import clsx from 'clsx';

const Price = () => {
  const DATA_TAB = [t('trade.order_book'), t('trade.transaction')];

  const [activeTab, setActiveTab] = useState(t('trade.order_book'));

  return (
    <div className='mt-4 flex flex-col gap-4 pb-10'>
      <div className='flex justify-between items-center gap-5'>
        <div className='flex flex-col gap-0.5'>
          <Typography className='text-[24px] leading-8' color={'#4AAF57'} fontWeight={700}>
            1.023,5
          </Typography>
          <div className='flex items-center gap-0.5'>
            <Typography className='text-[12px] leading-4' color={'#212121'} fontWeight={500}>
              ≈ 1.023,5 $
            </Typography>
            <Typography className='text-[12px] leading-4' color={'#4AAF57'} fontWeight={500}>
              +5,4%
            </Typography>
          </div>
          <div className='py-0.5 px-[6px] rounded flex items-center gap-0.5 bg-[#E8F2FF]'>
            <Typography className='text-[10px] leading-3' color={'#177DFF'} fontWeight={400}>
              POW
            </Typography>
            <div className='w-[1px] h-1 bg-[#177DFF33]' />
            <Typography className='text-[10px] leading-3' color={'#177DFF'} fontWeight={400}>
              KL
            </Typography>
            <div className='w-[1px] h-1 bg-[#177DFF33]' />
            <Typography className='text-[10px] leading-3' color={'#177DFF'} fontWeight={400}>
              Price Protection
            </Typography>
            <IconArrowRight />
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex justify-between items-center gap-4'>
            <ItemPrice label={t('trade.highest_price')} value='98,34' />
            <ItemPrice label='KL 24h(BTC)' value='198,334' />
          </div>
          <div className='flex justify-between items-center gap-4'>
            <ItemPrice label={t('trade.lowest_price')} value='92,32' />
            <ItemPrice label='KL 24h(BTC)' value='18,345' />
          </div>
        </div>
      </div>
      <ChartLinePrice />
      <StockChart />

      <div className='flex items-center gap-1'>
        {DATA_TAB?.map((item) => {
          return (
            <div
              onClick={() => setActiveTab(item)}
              className={clsx('py-0.5 px-[6px] rounded transition-all min-h-6', {
                'bg-[#F5F5F5]': item === activeTab,
              })}
            >
              <Typography
                className='text-[12px] leading-3'
                color={item === activeTab ? '#212121' : '#9E9E9E'}
                fontWeight={500}
              >
                {item}
              </Typography>
            </div>
          );
        })}
      </div>
      <div className='flex items-center justify-between gap-3'>
        <Typography className='text-[12px] leading-5' color={'#4AAF57'} fontWeight={400}>
          69.464,12
        </Typography>
        <div className='w-[260px] bg-[#4AAF57] h-0.5' />
        <div className='w-[68px] bg-[#F54336] h-0.5' />
        <Typography className='text-[12px] leading-5' color={'#F54336'} fontWeight={400}>
          69.464,12
        </Typography>
      </div>
      <div className='flex items-center justify-between gap-3'>
        <div className='flex flex-col gap-[2px]'>
          <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
            {t('trade.buy_in')}
          </Typography>
          <Typography className='text-[12px] leading-4' color={'#212121'} fontWeight={500}>
            92,32
          </Typography>
        </div>
        <div className='flex flex-col items-center gap-[2px]'>
          <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
            {t('trade.sell')}
          </Typography>
          <div className='flex item'>
            <div className='bg-[#06C14914] w-[87px] py-[2px] h-[18px] flex justify-center items-end'>
              <Typography className='text-[12px] leading-3' color={'#4AAF57'} fontWeight={400}>
                69.464,12
              </Typography>
            </div>
            <div className='bg-[#F7555514] py-[2px] w-[68px] h-[18px] flex justify-center items-center'>
              <Typography className='text-[12px] leading-3' color={'#F54336'} fontWeight={400}>
                69.464,12
              </Typography>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center gap-[2px]'>
          <div className='bg-[#F5F5F5] flex items-center gap-[2px] rounded py-[2px] px-0.5'>
            <Typography className='text-[12px] leading-3' color={'#9E9E9E'} fontWeight={400}>
              0,1
            </Typography>
            <IconArrowDown />
          </div>
          <Typography className='text-[12px] leading-4' color={'#212121'} fontWeight={500}>
            92,32
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default Price;

const IconArrowDown = () => {
  return (
    <svg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4.65525 5.57297C4.41184 5.78086 4.28266 6.09272 4.30778 6.41184C4.33027 6.6976 4.49474 6.90389 4.57675 7.00185C4.66868 7.11166 4.79398 7.23692 4.92145 7.36436L7.66233 10.1052C7.71846 10.1614 7.78549 10.2285 7.8494 10.2827C7.92345 10.3456 8.03585 10.4293 8.19094 10.4797C8.39178 10.545 8.60813 10.545 8.80897 10.4797C8.96406 10.4293 9.07646 10.3456 9.15051 10.2827C9.21441 10.2285 9.28145 10.1614 9.33757 10.1052L12.0785 7.36433C12.2059 7.2369 12.3312 7.11164 12.4232 7.00185C12.5052 6.90389 12.6696 6.69759 12.6921 6.41184C12.7172 6.09272 12.5881 5.78086 12.3447 5.57297C12.1267 5.38681 11.8645 5.35724 11.7373 5.34596C11.5946 5.33332 11.4175 5.33335 11.2372 5.33338H5.76271C5.58246 5.33335 5.40529 5.33332 5.26264 5.34596C5.13538 5.35724 4.87321 5.38681 4.65525 5.57297Z'
        fill='#616161'
      />
    </svg>
  );
};

const ItemPrice = ({ value, label }: any) => {
  return (
    <div className='flex flex-col gap-0.5'>
      <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
        {label}
      </Typography>
      <Typography className='text-[12px] leading-4' color={'#212121'} fontWeight={500}>
        {value}
      </Typography>
    </div>
  );
};

const IconArrowRight = () => {
  return (
    <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M5.25 10.5L8.75 7L5.25 3.5'
        stroke='#4597FF'
        stroke-width='1.16667'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
