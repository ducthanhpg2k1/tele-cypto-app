import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DATA_LABEL = [
    {
        id: 1,
        title: 'AAVE',
        value: '34,22%',
        color: '#165DFF'
    },
    {
        id: 2,
        title: 'AAVE',
        value: '34,22%',
        color: '#00A9F1'

    },
    {
        id: 3,
        title: 'AAVE',
        value: '34,22%',
        color: '#14C9C9'

    },
    {
        id: 4,
        title: 'AAVE',
        value: '34,22%',
        color: '#F7BA1E'

    },
    {
        id: 5,
        title: 'AAVE',
        value: '34,22%',
        color: '#9FDB1D'

    },
]

const Text = styled(Typography)<{ color?: string, fontWeight?: number, fontSize?: string }>(({ color, fontWeight, fontSize }) => ({
    fontSize: fontSize || '10px',
    fontWeight: fontWeight || 400,
    lineHeight: '12px',
    color: color || '#757575',
}));



const ChartPie = () => {
    const { t } = useTranslation();

    const options: any = {
        chart: {
            type: 'donut'
        },
        colors: ['#177DFF', '#14C9C9', '#F7BA1E'],
        labels: ['Category A', 'Category B', 'Category C'],
        plotOptions: {
            pie: {
                donut: {
                    size: '30%'
                },
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        stroke: {
            width: 3
        }
    };

    const series = [100, 50, 40];

    return (
        <div className='flex flex-col gap-2'>
            <div className='pt-4 flex justify-between items-center h-[180px] gap-6'>
                <div className="w-full h-full flex justify-center items-center">
                    <ReactApexChart
                        options={options}
                        series={series}
                        type="donut"
                        height={180}
                    />


                </div>
                <div className='flex flex-col gap-3 w-full'>
                    {
                        DATA_LABEL?.map((item) => {
                            return (
                                <div key={item?.id} className='justify-between items-center flex'>
                                    <div className='flex items-center gap-1'>
                                        <div style={{
                                            background: item?.color
                                        }} className='w-1 h-1 rounded-[1px]' />
                                        <Text>{item?.title}</Text>
                                    </div>
                                    <Text color={'#212121'} fontWeight={500}>{item?.value}</Text>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <Text color={'#9E9E9E'} fontSize='12px'>{t('wallet.dataReloaded')}</Text>
        </div>

    );
};

export default ChartPie;