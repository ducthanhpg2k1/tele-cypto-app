import { Typography } from '@mui/material';
import { t } from 'i18next';
import Timeline from '../TimeLine';

const Summary = () => {
  return (
    <div className='flex flex-col gap-3 pt-4'>
      <div className='flex flex-col gap-0.5'>
        <Typography className='font-normal text-[#212121] text-[14px] leading-5'>
          {t('earn.total_locked_rewards')}
        </Typography>
        <Typography className='font-normal text-[#757575] text-[12px] leading-5'>
          APR: 15%
        </Typography>
      </div>
      <Timeline />
      <div className='flex flex-col gap-1'>
        <Typography className='font-medium text-[#212121] text-[14px] leading-5'>
          {t('earn.flexible_product')}
        </Typography>
        <Typography className='font-normal text-[#9E9E9E] text-[12px] leading-5'>
          {t('earn.note_flexible_product_1')}
        </Typography>
        <div className='flex items-start gap-0.5'>
          <p className='font-normal text-[#9E9E9E] text-[12px] leading-5'>*</p>
          <p className='font-normal text-[#9E9E9E] text-[12px] leading-5'>
            {t('earn.note_flexible_product_2')} <span className='text-[#212121]'>72 giờ</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Summary;
