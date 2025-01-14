import React from 'react';
import dynamic from 'next/dynamic';
import { Typography } from '@mui/material';
import clsx from 'clsx';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { t } from 'i18next';

const StockChart = () => {
  // Sample data - replace with your actual data
  const options: any = {
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      },
      parentHeightOffset: 0,
    },
    plotOptions: {
      bar: {
        columnWidth: '70%',
        distributed: true,
      },
    },
    colors: ['#4AAF57', '#F54336'],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`),
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
    legend: {
      show: false,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: -6,
        right: 0,
      },
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
  };

  const series = [
    {
      name: 'Positive',
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 50) + 10),
    },
    {
      name: 'Negative',
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 50) + 10),
    },
  ];

  const DATA_FILTER = ['MA', 'EMA', 'BOLL', 'SAR', 'AVL', 'VOL', 'MACD', 'RSI'];

  const DATA_DATE = [
    {
      id: 1,
      label: t('trade.today'),
      value: '- 0,22%',
      red: true,
    },
    {
      id: 2,
      label: t('trade.sevenDays'),
      value: '- 0,22%',
      red: true,
    },
    {
      id: 3,
      label: t('trade.thirtyDays'),
      value: '- 0,22%',
    },
    {
      id: 4,
      label: t('trade.ninetyDays'),
      value: '1,78%',
    },
    {
      id: 5,
      label: t('trade.halfAYear'),
      value: '1,78%',
    },
    {
      id: 6,
      label: t('trade.oneYear'),
      value: '1,78%',
    },
  ];

  return (
    <div className='w-full'>
      <div className='flex items-center gap-3'>
        <Typography className='text-[10px] leading-3' fontWeight={400} color={'#757575'}>
          Vol: 103,909
        </Typography>
        <Typography className='text-[10px] leading-3' fontWeight={400} color={'#177DFF'}>
          MA(5): 39,55
        </Typography>
        <Typography className='text-[10px] leading-3' fontWeight={400} color={'#673AB3'}>
          MA(5): 39,55
        </Typography>
      </div>
      <ReactApexChart options={options} series={series} type='bar' height={200} />

      <div className='flex justify-between border-b border-b-[#EEEEEE] border-t border-t-[#EEEEEE] py-3 items-center gap-3'>
        {DATA_FILTER?.map((item) => {
          return (
            <Typography
              className={clsx('text-[12px] text-[#9E9E9E] leading-3', {
                '!text-[#212121] font-medium': item === 'MA' || item === 'VOL',
              })}
            >
              {item}
            </Typography>
          );
        })}
        <div className='w-[1px] h-[14px] bg-[#E0E0E0]' />
        <IconChart />
      </div>
      <div className='flex justify-between border-b border-b-[#EEEEEE] py-3 items-center gap-3'>
        {DATA_DATE?.map((item) => {
          return (
            <div className='flex flex-col gap-0.5'>
              <Typography className={clsx('text-[10px] text-[#757575] leading-3 font-normal', {})}>
                {item.label}
              </Typography>
              <Typography
                className={clsx('text-[10px] text-[#4AAF57] leading-3 font-medium', {
                  'text-[#F54336]': item?.red,
                })}
              >
                {item.value}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StockChart;

const IconChart = () => {
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M2.25 1.5C2.66421 1.5 3 1.83579 3 2.25V12.15C3 12.7924 3.00058 13.2292 3.02816 13.5667C3.05503 13.8955 3.10372 14.0637 3.16349 14.181C3.3073 14.4632 3.53677 14.6927 3.81902 14.8365C3.93631 14.8963 4.10447 14.945 4.43328 14.9718C4.77085 14.9994 5.20757 15 5.85 15H15.75C16.1642 15 16.5 15.3358 16.5 15.75C16.5 16.1642 16.1642 16.5 15.75 16.5H5.81901C5.21529 16.5 4.71702 16.5 4.31113 16.4669C3.88956 16.4324 3.50203 16.3585 3.13803 16.173C2.57354 15.8854 2.1146 15.4265 1.82698 14.862C1.64151 14.498 1.56759 14.1104 1.53315 13.6889C1.49998 13.283 1.49999 12.7847 1.5 12.181L1.5 2.25C1.5 1.83579 1.83579 1.5 2.25 1.5ZM8.24754 4.93265C8.56171 4.8254 8.90258 4.8254 9.21674 4.93265C9.44501 5.01057 9.61685 5.14309 9.75035 5.26463C9.87277 5.37609 10.0061 5.51967 10.144 5.66828L11.371 6.98966C11.4474 7.07186 11.4908 7.11815 11.5179 7.14478C11.545 7.11815 11.5884 7.07186 11.6647 6.98966C11.6744 6.97925 11.6843 6.96854 11.6944 6.9576C11.7964 6.84714 11.9206 6.7127 12.0604 6.61649C12.5725 6.26411 13.2489 6.26412 13.761 6.61649C13.9008 6.7127 14.025 6.84714 14.1271 6.9576C14.1372 6.96854 14.1471 6.97925 14.1567 6.98966L15.2289 8.14435C15.237 8.15299 15.2452 8.16184 15.2537 8.17091C15.3461 8.26987 15.4624 8.39449 15.5488 8.54417C15.6238 8.67402 15.679 8.81437 15.7124 8.96057C15.7508 9.1291 15.7504 9.29956 15.7501 9.43491C15.75 9.44732 15.75 9.45944 15.75 9.47123L15.75 11.5739C15.75 11.7632 15.75 11.9476 15.7373 12.1037C15.7233 12.2751 15.6902 12.4774 15.5865 12.681C15.4427 12.9632 15.2132 13.1927 14.931 13.3365C14.7274 13.4402 14.5251 13.4733 14.3537 13.4873C14.1975 13.5 14.0132 13.5 13.8239 13.5H6.42609C6.2368 13.5 6.05245 13.5 5.89633 13.4873C5.72488 13.4733 5.52258 13.4402 5.31901 13.3365C5.03677 13.1927 4.8073 12.9632 4.66349 12.681C4.55977 12.4774 4.52672 12.2751 4.51271 12.1037C4.49995 11.9476 4.49998 11.7632 4.5 11.5739L4.5 9.47123C4.5 9.45944 4.49997 9.44733 4.49994 9.43492C4.49959 9.29956 4.49916 9.1291 4.53765 8.96057C4.57103 8.81438 4.62615 8.67402 4.70116 8.54417C4.78764 8.39449 4.90394 8.26987 4.9963 8.17091C5.00477 8.16184 5.01303 8.15299 5.02105 8.14435L7.32026 5.66828C7.45822 5.51967 7.59152 5.37609 7.71394 5.26463C7.84743 5.14309 8.01927 5.01057 8.24754 4.93265Z'
        fill='#BDBDBD'
      />
    </svg>
  );
};
