import CustomCheckbox from 'src/components/ui/checkbox';
import { t } from 'i18next';
import { Button, Typography } from '@mui/material';
import clsx from 'clsx';

const OpenOrders = () => {
  return (
    <div className='flex flex-col gap-4 mt-4'>
      <div className='flex items-center justify-between border-b pb-4 border-b-[#EEEEEE]'>
        <CustomCheckbox
          label={t('trade.hide_other_currency')}
          variantLabel='caption'
          classNameWrapper='flex-row items-center gap-[4px]'
          classNameLabel='font-normal'
        />
        <Button className='bg-[#F5F5F5] py-0.5 px-3 rounded max-h-6'>
          <Typography className='text-[12px] text-[#212121] leading-5' fontWeight={500}>
            {t('trade.cancel_all')}
          </Typography>
        </Button>
      </div>
      {[...Array(2)].map((_, index) => (
        <div className='flex flex-col gap-4 border-b border-b-[#EEEEEE] pb-3'>
          <div className='flex justify-between items-start'>
            <div className='flex flex-col gap-0.5'>
              <Typography className='text-[14px] text-[#212121] leading-5' fontWeight={600}>
                TON/USDT
              </Typography>
              <div className='flex items-center gap-0.5'>
                <Typography
                  className={clsx('text-[10px] text-[#4AAF57] leading-3', {
                    'text-[#F54336]': index === 1,
                  })}
                  fontWeight={400}
                >
                  Limit/ Mua
                </Typography>
                <Typography className='text-[10px] text-[#9E9E9E] leading-3' fontWeight={400}>
                  12-12-2025
                </Typography>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div>
                <Typography className='text-[12px] text-[#757575] leading-4' fontWeight={600}>
                  0%
                </Typography>
                <div className='w-5 h-0.5 bg-[#D9D9D9] rounded-full' />
              </div>
              <Button className='bg-[#F5F5F5] py-0.5 px-3 rounded max-h-6'>
                <Typography className='text-[12px] text-[#212121] leading-5' fontWeight={500}>
                  {t('trade.cancel_order')}
                </Typography>
              </Button>
            </div>
          </div>
          <div className='flex flex-col gap-[6px]'>
            <div className='flex items-center justify-between'>
              <Typography className='text-[12px] text-[#9E9E9E] leading-5' fontWeight={400}>
                {t('trade.matched_amount')}
              </Typography>
              <Typography className='text-[12px] text-[#212121] leading-5' fontWeight={500}>
                0,00/27,22
              </Typography>
            </div>
            <div className='flex items-center justify-between'>
              <Typography className='text-[12px] text-[#9E9E9E] leading-5' fontWeight={400}>
                {t('trade.price')}
              </Typography>
              <div className='flex items-center gap-1'>
                <Typography className='text-[12px] text-[#212121] leading-5' fontWeight={500}>
                  0,23002
                </Typography>
                <IconPen />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default OpenOrders;

const IconPen = () => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.2831 1.92695C12.8715 1.3386 13.8254 1.3386 14.4137 1.92695C15.0021 2.51529 15.0021 3.46919 14.4137 4.05753L10.9577 7.51351C10.6394 7.83193 10.4494 8.02196 10.2306 8.17431C10.0366 8.3094 9.82734 8.42109 9.60713 8.50706C9.3588 8.60401 9.09518 8.65609 8.65343 8.74336L7.74403 8.92307C7.63289 8.94504 7.51819 8.90904 7.43953 8.82751C7.36086 8.74598 7.32899 8.63007 7.35492 8.51978L7.57412 7.58736C7.67067 7.17656 7.7283 6.93139 7.82515 6.70054C7.91105 6.4958 8.01941 6.30123 8.14824 6.12041C8.29351 5.91652 8.47161 5.73844 8.77002 5.44006L12.2831 1.92695Z'
        fill='#616161'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8.00255 10.2311L8.97828 10.0383C9.35916 9.96331 9.73085 9.8901 10.092 9.7491C10.4101 9.62493 10.7124 9.46359 10.9926 9.26846C11.3108 9.04688 11.5785 8.77883 11.8528 8.50416L14.2482 6.10872C14.3244 6.20715 14.3916 6.31297 14.4487 6.42504C14.6667 6.85286 14.6667 7.41291 14.6667 8.53302V11.4664C14.6667 12.5865 14.6667 13.1465 14.4487 13.5743C14.257 13.9507 13.951 14.2566 13.5747 14.4484C13.1469 14.6664 12.5868 14.6664 11.4667 14.6664H4.53337C3.41327 14.6664 2.85322 14.6664 2.42539 14.4484C2.04907 14.2566 1.74311 13.9507 1.55136 13.5743C1.33337 13.1465 1.33337 12.5865 1.33337 11.4664V8.53302C1.33337 7.41291 1.33337 6.85286 1.55136 6.42504C1.74311 6.04871 2.04907 5.74275 2.42539 5.55101C2.85322 5.33302 3.41327 5.33302 4.53337 5.33302H7.07218L7.06236 5.34673C6.87627 5.60792 6.71974 5.88896 6.59567 6.1847C6.4548 6.52044 6.37373 6.86626 6.29066 7.22061L6.057 8.21464C5.92736 8.76609 6.08669 9.34563 6.48002 9.75329C6.87335 10.161 7.44682 10.3409 8.00255 10.2311ZM4.66671 9.99969C4.66671 10.3679 4.36823 10.6664 4.00004 10.6664C3.63185 10.6664 3.33337 10.3679 3.33337 9.99969C3.33337 9.63149 3.63185 9.33302 4.00004 9.33302C4.36823 9.33302 4.66671 9.63149 4.66671 9.99969Z'
        fill='#616161'
      />
    </svg>
  );
};
