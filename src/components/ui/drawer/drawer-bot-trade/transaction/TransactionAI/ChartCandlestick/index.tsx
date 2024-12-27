import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import clsx from 'clsx';
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { shuffleArray } from 'src/utils/helpers';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DATA_FILTER = [
  {
    id: 2,
    text: '1 giây',
  },
  {
    id: 3,
    text: '1m',
  },
  {
    id: 4,
    text: '5m',
  },
  {
    id: 5,
    text: '15m',
  },
  {
    id: 6,
    text: '30m',
  },
];

const Text = styled(Typography)<{ color?: string; fontWeight?: number; fontSize?: string }>(
  ({ color, fontWeight, fontSize }) => ({
    fontSize: fontSize || '10px',
    fontWeight: fontWeight || 400,
    lineHeight: '12px',
    color: color || '#757575',
  }),
);

const ChartCandlestick = () => {
  const [activeFilter, setActiveFilter] = useState(2);
  const { t } = useTranslation();

  const series = [
    {
      data: [
        {
          x: new Date('2024-01-01').getTime(),
          y: [100.0, 105.0, 98.0, 102.0],
        },
        {
          x: new Date('2024-01-02').getTime(),
          y: [102.0, 107.0, 100.0, 105.0],
        },
        {
          x: new Date('2024-01-03').getTime(),
          y: [105.0, 108.0, 102.0, 103.0],
        },
        {
          x: new Date('2024-01-04').getTime(),
          y: [103.0, 106.0, 101.0, 104.0],
        },
        {
          x: new Date('2024-01-05').getTime(),
          y: [104.0, 109.0, 103.0, 108.0],
        },
        {
          x: new Date('2024-01-06').getTime(),
          y: [108.0, 110.0, 105.0, 106.0],
        },
        {
          x: new Date('2024-01-07').getTime(),
          y: [106.0, 112.0, 105.0, 111.0],
        },
        {
          x: new Date('2024-01-08').getTime(),
          y: [111.0, 115.0, 110.0, 112.0],
        },
        {
          x: new Date('2024-01-09').getTime(),
          y: [112.0, 113.0, 108.0, 109.0],
        },
        {
          x: new Date('2024-01-10').getTime(),
          y: [109.0, 114.0, 108.0, 113.0],
        },
        {
          x: new Date('2024-01-11').getTime(),
          y: [113.0, 116.0, 111.0, 114.0],
        },
        {
          x: new Date('2024-01-12').getTime(),
          y: [114.0, 117.0, 113.0, 115.0],
        },
        {
          x: new Date('2024-01-13').getTime(),
          y: [115.0, 118.0, 114.0, 116.0],
        },
        {
          x: new Date('2024-01-14').getTime(),
          y: [116.0, 119.0, 115.0, 117.0],
        },
        {
          x: new Date('2024-01-15').getTime(),
          y: [117.0, 120.0, 116.0, 118.0],
        },
      ],
    },
  ];

  const options: any = {
    dataLabels: {
      enabled: false,
    },
    chart: {
      type: 'candlestick',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    title: {
      text: '',
      show: false,
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#00B42A',
          downward: '#F53F3F',
        },
        barWidth: '10%',
        wick: {
          useFillColor: true,
          width: 1,
        },
      },
    },

    grid: {
      padding: {
        left: 0,
      },
      show: true,
      borderColor: '#E5E6EB',
      strokeDashArray: 5,
      position: 'back',
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      tickAmount: 5,
      type: 'datetime',
      labels: {
        formatter: function (val: any) {
          return dayjs(val).format('YYYY-MM-DD');
        },
        style: {
          colors: '#9E9E9E',
          fontSize: '10px',
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      title: {
        text: undefined,
      },
    },
  };

  const [dataSeries, setDataSeries] = useState(series);

  useEffect(() => {
    setDataSeries([
      {
        data: shuffleArray([
          {
            x: new Date('2024-01-01').getTime(),
            y: [100.0, 105.0, 98.0, 102.0],
          },
          {
            x: new Date('2024-01-02').getTime(),
            y: [102.0, 107.0, 100.0, 105.0],
          },
          {
            x: new Date('2024-01-03').getTime(),
            y: [105.0, 108.0, 102.0, 103.0],
          },
          {
            x: new Date('2024-01-04').getTime(),
            y: [103.0, 106.0, 101.0, 104.0],
          },
          {
            x: new Date('2024-01-05').getTime(),
            y: [104.0, 109.0, 103.0, 108.0],
          },
          {
            x: new Date('2024-01-06').getTime(),
            y: [108.0, 110.0, 105.0, 106.0],
          },
          {
            x: new Date('2024-01-07').getTime(),
            y: [106.0, 112.0, 105.0, 111.0],
          },
          {
            x: new Date('2024-01-08').getTime(),
            y: [111.0, 115.0, 110.0, 112.0],
          },
          {
            x: new Date('2024-01-09').getTime(),
            y: [112.0, 113.0, 108.0, 109.0],
          },
          {
            x: new Date('2024-01-10').getTime(),
            y: [109.0, 114.0, 108.0, 113.0],
          },
          {
            x: new Date('2024-01-11').getTime(),
            y: [113.0, 116.0, 111.0, 114.0],
          },
          {
            x: new Date('2024-01-12').getTime(),
            y: [114.0, 117.0, 113.0, 115.0],
          },
          {
            x: new Date('2024-01-13').getTime(),
            y: [115.0, 118.0, 114.0, 116.0],
          },
          {
            x: new Date('2024-01-14').getTime(),
            y: [116.0, 119.0, 115.0, 117.0],
          },
          {
            x: new Date('2024-01-15').getTime(),
            y: [117.0, 120.0, 116.0, 118.0],
          },
        ]),
      },
    ]);
  }, [activeFilter]);
  return (
    <div>
      <div className='flex items-center gap-6 w-full'>
        <div className='w-[60px]'>
          <Text color={'#9E9E9E'} fontWeight={400}>
            Thời gian
          </Text>
        </div>

        <div className='grid grid-cols-5 w-full'>
          {DATA_FILTER?.map((item) => {
            return (
              <div
                key={item?.id}
                onClick={() => {
                  setActiveFilter(item?.id);
                }}
                className={clsx(
                  'justify-center flex transition-all rounded-sm items-center py-[2px] px-[8px] w-max',
                  {
                    'bg-[#E8F2FF]': item?.id === activeFilter,
                  },
                )}
              >
                <Text
                  color={item?.id === activeFilter ? '#177DFF' : '#9E9E9E'}
                  fontWeight={item?.id === activeFilter ? 500 : 400}
                >
                  {item?.text}
                </Text>
              </div>
            );
          })}
        </div>
      </div>

      <ReactApexChart options={options} series={dataSeries} type='candlestick' height={300} />
    </div>
  );
};
export default ChartCandlestick;
