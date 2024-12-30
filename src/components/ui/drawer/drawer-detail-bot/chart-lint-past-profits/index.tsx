import { t } from 'i18next';
import dynamic from 'next/dynamic';
import React from 'react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ChartLintPastProfits = () => {
  const rawData = [10, 20, 50, 150, 500];
  const maxValue = Math.max(...rawData);
  const percentageData = rawData.map((value) => Number(((value / maxValue) * 100).toFixed(1)));
  const options: any = {
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    colors: ['#4AAF57'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    grid: {
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
      labels: {
        style: {
          colors: '#9E9E9E',
          fontSize: '10px',
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#9E9E9E',
          fontSize: '10px',
          fontWeight: 400,
        },
        formatter: function (value: number) {
          return value + '%';
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
      data: percentageData,
    },
  ];

  return (
    <div className='flex flex-col '>
      <Chart options={options} width={'100%'} series={series} type='area' height={200} />
    </div>
  );
};

export default ChartLintPastProfits;
