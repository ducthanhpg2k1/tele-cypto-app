import { Typography } from '@mui/material';
import clsx from 'clsx';
import { useState } from 'react';
import TotalBalance from './TotalBalance';
import Image from 'next/image';
import InProgress from './InProgress';
import SwipeableViews from 'react-swipeable-views';
import Simulation from './Simulation';
import { useTranslation } from 'react-i18next';
import Closed from './Closed';

const Coppy = () => {
  const [activeFilter, setActiveFilter] = useState(0);
  const { t } = useTranslation();

  const DATA_FILTER = [
    {
      id: 1,
      title: `${t('copyTrade.in_progress')} (0)`,
    },
    {
      id: 2,
      title: `${t('copyTrade.close')} (0)`,
    },
    {
      id: 3,
      title: `${t('copyTrade.simulationBtn')} (0)`,
    },
  ];

  const handleChangeIndex = (index: number) => {
    setActiveFilter(index);
  };
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex items-center gap-1'>
        {DATA_FILTER?.map((item, index) => {
          return (
            <div
              onClick={() => setActiveFilter(index)}
              key={item?.id}
              className={clsx('py-[2px] px-1 rounded transition-all duration-200', {
                'bg-[#F5F5F5]': index === activeFilter,
              })}
            >
              <Typography className='text-xs' color={'#9E9E9E'} fontWeight={500}>
                {item?.title}
              </Typography>
            </div>
          );
        })}
      </div>
      <SwipeableViews index={activeFilter} onChangeIndex={handleChangeIndex}>
        <InProgress />
        <Closed />
        <Simulation />
      </SwipeableViews>
    </div>
  );
};
export default Coppy;

export const NoData = ({ label, isProfile }: { label?: string; isProfile?: boolean }) => {
  const { t } = useTranslation();

  return (
    <div
      className={clsx('mt-14 flex justify-center items-center flex-col gap-1', {
        '!mt-6': isProfile,
      })}
    >
      <Image src={'/images/img-nodata-search.png'} width={85} height={64} alt='' />
      {isProfile ? (
        <Typography className='text-xs' color={'#424242'} fontWeight={400}>
          {label || t('copyTrade.view_portfolio')}
        </Typography>
      ) : (
        <div className='bg-[#F5F5F5] rounded py-0.5 px-1 flex justify-center items-center'>
          <Typography className='text-xs' color={'#212121'} fontWeight={500}>
            {label || t('copyTrade.view_portfolio')}
          </Typography>
        </div>
      )}
    </div>
  );
};
