import { Typography } from '@mui/material';
import clsx from 'clsx';
import { t } from 'i18next';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
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

const DATA_TIME = ['15m', '1h', '4h', '1 ngày'];


const ChartLinePrice = () => {
const [activeDateFilter, setActiveDateFilter] = useState<string>('');

  const series = [
    {
      name: 'Dữ liệu',
      data: [10, 20, 50, 150, 800],
    },
  ];
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between gap-4'>
        <div className='flex items-center gap-4'>
          <Typography className='text-[10px] leading-3' color={'#212121'} fontWeight={500}>
            {t('trade.time')}
          </Typography>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-4'>
              {DATA_TIME?.map((item) => {
                return (
                  <div
                    onClick={() => setActiveDateFilter(item)}
                    className={clsx('px-0.5 py-0.5 rounded', {
                      'bg-[#F5F5F5]': item === activeDateFilter,
                    })}
                  >
                    <Typography
                      className='text-[10px] leading-3'
                      color={'#9E9E9E'}
                      fontWeight={400}
                    >
                      {item}
                    </Typography>
                  </div>
                );
              })}
            </div>
            <div className='flex items-center gap-[2px]'>
              <Typography className='text-[10px] leading-3' color={'#9E9E9E'} fontWeight={500}>
                {t('trade.more')}
              </Typography>
              <IconCaretDown />
            </div>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <Typography className='text-[10px] leading-3' color={'#9E9E9E'} fontWeight={500}>
            {t('trade.depth')}
          </Typography>
          <IconMenuFilter />
        </div>
      </div>
      <Chart options={options} width={'100%'} series={series} type='area' height={200} />
    </div>
  );
};
export default ChartLinePrice;

const IconCaretDown = () => {
  return (
    <svg width='15' height='14' viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4.06431 4.87635C3.85132 5.05826 3.73829 5.33113 3.76027 5.61036C3.77995 5.8604 3.92386 6.0409 3.99562 6.12662C4.07606 6.2227 4.1857 6.3323 4.29724 6.44381L6.6955 8.84208C6.74462 8.89123 6.80327 8.94993 6.85919 8.9974C6.92398 9.05241 7.02233 9.12564 7.15804 9.16974C7.33378 9.22684 7.52308 9.22684 7.69882 9.16974C7.83452 9.12564 7.93287 9.05241 7.99766 8.9974C8.05358 8.94994 8.11223 8.89124 8.16134 8.84209L10.5596 6.44379C10.6712 6.33229 10.7808 6.22269 10.8612 6.12662C10.933 6.0409 11.0769 5.86039 11.0966 5.61036C11.1186 5.33113 11.0055 5.05826 10.7925 4.87635C10.6018 4.71346 10.3724 4.68759 10.2611 4.67772C10.1363 4.66666 9.98124 4.66668 9.82352 4.6667H5.03334C4.87562 4.66668 4.72059 4.66666 4.59578 4.67772C4.48442 4.68759 4.25502 4.71346 4.06431 4.87635Z'
        fill='#9E9E9E'
      />
    </svg>
  );
};

const IconMenuFilter = () => {
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1.49976 5.39992C1.49976 4.55984 1.49976 4.13981 1.66325 3.81894C1.80706 3.53669 2.03653 3.30722 2.31877 3.16341C2.63964 2.99992 3.05968 2.99992 3.89976 2.99992H5.09976C5.93983 2.99992 6.35987 2.99992 6.68074 3.16341C6.96298 3.30722 7.19246 3.53669 7.33627 3.81894C7.49976 4.13981 7.49976 4.55984 7.49976 5.39992V6.59992C7.49976 7.44 7.49976 7.86004 7.33627 8.18091C7.19246 8.46315 6.96298 8.69262 6.68074 8.83643C6.35987 8.99992 5.93983 8.99992 5.09976 8.99992H3.89976C3.05968 8.99992 2.63964 8.99992 2.31877 8.83643C2.03653 8.69262 1.80706 8.46315 1.66325 8.18091C1.49976 7.86004 1.49976 7.44 1.49976 6.59992V5.39992Z'
        fill='#9E9E9E'
      />
      <path
        d='M8.99976 5.24992C8.99976 4.83571 9.33554 4.49992 9.74975 4.49992H15.7498C16.164 4.49992 16.4998 4.83571 16.4998 5.24992C16.4998 5.66414 16.164 5.99992 15.7498 5.99992H9.74975C9.33554 5.99992 8.99976 5.66414 8.99976 5.24992Z'
        fill='#9E9E9E'
      />
      <path
        d='M8.99976 8.24992C8.99976 7.83571 9.33554 7.49992 9.74975 7.49992H15.7498C16.164 7.49992 16.4998 7.83571 16.4998 8.24992C16.4998 8.66414 16.164 8.99992 15.7498 8.99992H9.74975C9.33554 8.99992 8.99976 8.66414 8.99976 8.24992Z'
        fill='#9E9E9E'
      />
      <path
        d='M2.24976 10.4999C1.83554 10.4999 1.49976 10.8357 1.49976 11.2499C1.49976 11.6641 1.83554 11.9999 2.24976 11.9999H15.7498C16.164 11.9999 16.4998 11.6641 16.4998 11.2499C16.4998 10.8357 16.164 10.4999 15.7498 10.4999H2.24976Z'
        fill='#9E9E9E'
      />
      <path
        d='M1.49976 14.2499C1.49976 13.8357 1.83554 13.4999 2.24976 13.4999H9.74975C10.164 13.4999 10.4998 13.8357 10.4998 14.2499C10.4998 14.6641 10.164 14.9999 9.74975 14.9999H2.24976C1.83554 14.9999 1.49976 14.6641 1.49976 14.2499Z'
        fill='#9E9E9E'
      />
    </svg>
  );
};
