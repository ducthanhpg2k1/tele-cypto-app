import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import clsx from 'clsx';
import { useSSR, useTranslation } from 'react-i18next';
import { t } from 'i18next';
import { shuffleArray } from 'src/utils/helpers';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Title = styled(Typography)<{ color?: string }>(({ color }) => ({
  fontSize: '10px',
  fontWeight: 500,
  lineHeight: '12px',
  color: color || '#9E9E9E',
}));

const DATA_FILTER = [
  {
    id: 1,
    label: t('wallet.oneDay'),
  },
  {
    id: 2,
    label: t('wallet.sevenDays'),
  },
  {
    id: 3,
    label: t('wallet.thirtyDays'),
  },
  {
    id: 4,
    label: t('wallet.halfAYear'),
  },
  {
    id: 5,
    label: t('wallet.oneYear'),
  },
];

const options: any = {
  chart: {
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#177DFF'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.4,
      gradientToColors: ['#FFFFFF'],
      inverseColors: false,
      opacityFrom: 0.8,
      opacityTo: 0.1,
    },
  },
  tooltip: {
    enabled: true,
  },
};

const series = [
  {
    name: t('bot.data'),
    data: [10, 20, 50, 150, 500],
  },
];

const ChartLine = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState(DATA_FILTER[2].id);
  const [dataSeries, setDataSeries] = useState(series);

  useEffect(() => {
    setDataSeries([
      {
        name: t('bot.data'),
        data: shuffleArray([10, 20, 50, 150, 500]),
      },
    ]);
  }, [filter]);
  return (
    <div className='flex flex-col '>
      <Chart options={options} width={'100%'} series={dataSeries} type='area' height={200} />
      <div className='grid grid-cols-5 items-center gap-[16px]'>
        {DATA_FILTER.map((item) => {
          return (
            <div
              className={clsx('items-center flex justify-center', {
                'bg-[#F5F5F5] p-[4px] rounded ': item?.id === filter,
              })}
              onClick={() => setFilter(item.id)}
              key={item?.id}
            >
              <Title color={item?.id === 3 ? '#212121' : '#9E9E9E'}>{item?.label}</Title>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChartLine;
