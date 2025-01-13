import { Typography } from '@mui/material';
import React from 'react';
import { t } from 'i18next';

const Timeline = () => {
  const items = [
    { label: t('earn.first_allocation_date'), date: '24-10-2024' },
    { label: t('earn.interest_calculation_ending_date'), date: '24-10-2024' },
    { label: t('earn.change_to'), date: '24-10-2024' },
  ];

  return (
    <div className='max-w-md '>
      {items.map((item, index) => (
        <div key={index} className='flex items-center mb-4'>
          <div className='flex flex-col items-center mr-4 relative opacity-60'>
            <span className={`mark active`} />
            {index !== items.length - 1 && (
              <div className='w-[1px] h-7 bg-[#177dff] absolute top-1'></div>
            )}
          </div>
          <div className='flex justify-between w-full'>
            <Typography className='font-normal text-[#757575] text-[12px] leading-[18px]'>
              {item.label}
            </Typography>
            <Typography className='font-medium text-[#212121] text-[12px] leading-[18px]'>
              {item.date}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
