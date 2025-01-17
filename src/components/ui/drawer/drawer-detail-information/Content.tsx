import React, { useState } from 'react';

import { t } from 'i18next';
import { Tabs } from '../../tabs';
import { TabItem } from '../../tabs/types';
import Price from './Price';
import { Button, Typography } from '@mui/material';
import clsx from 'clsx';

const Content = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabGrids: TabItem[] = [
    {
      label: t('trade.price'),
      key: 'price',
      content: <Price />,
    },
    {
      label: t('trade.information'),
      key: 'information',
      content: <></>,
    },
    {
      label: t('trade.transaction_data'),
      key: 'transaction_data',
      content: <></>,
    },
    {
      label: t('trade.community'),
      key: 'community',
      content: <></>,
    },
  ];
  const onChaneTab = (value: any) => {
    setActiveTab(value);
  };
  return (
    <div className='flex flex-col gap-6 h-full'>
      <div
        className={clsx('', {
          'min-h-[calc(100dvh-160px)]': activeTab !==0,
        })}
      >
        <Tabs onChaneTab={onChaneTab} tabs={tabGrids} />
      </div>

      <div className='bg-white sticky z-50 pt-3 left-0 right-0 bottom-[-8px] flex items-center justify-between gap-4'>
        <div className='flex flex-col gap-0.5'>
          <div className='bg-[#212121] w-6 h-6 flex justify-center items-center rounded-full'>
            <IconMore />
          </div>
          <Typography className='text-[10px] leading-3 text-[#212121] font-normal'>
            {t('trade.more_new')}
          </Typography>
        </div>
        <div className='w-full flex items-center gap-4'>
          <Button fullWidth className='min-h-10 bg-[#4AAF57] rounded-md'>
            <Typography color={'#FFFFFF'} className='text-[14px]' fontWeight={500}>
              {t('trade.buy')}
            </Typography>
          </Button>
          <Button fullWidth className='min-h-10 bg-[#F54336]  rounded-md'>
            <Typography color={'#FFFFFF'} className='text-[14px]' fontWeight={500}>
              {t('trade.sell')}
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Content;

const IconMore = () => {
  return (
    <svg width='16' height='4' viewBox='0 0 16 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M14 2H14.01M8 2H8.01M2 2H2.01M9 2C9 2.55228 8.55228 3 8 3C7.44772 3 7 2.55228 7 2C7 1.44772 7.44772 1 8 1C8.55228 1 9 1.44772 9 2ZM15 2C15 2.55228 14.5523 3 14 3C13.4477 3 13 2.55228 13 2C13 1.44772 13.4477 1 14 1C14.5523 1 15 1.44772 15 2ZM3 2C3 2.55228 2.55228 3 2 3C1.44772 3 1 2.55228 1 2C1 1.44772 1.44772 1 2 1C2.55228 1 3 1.44772 3 2Z'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
