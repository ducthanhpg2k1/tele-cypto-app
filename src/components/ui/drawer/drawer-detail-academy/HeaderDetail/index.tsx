import {  Typography } from '@mui/material';
import Image from 'next/image';
import { t } from 'i18next';
import Button from 'src/components/ui/button';
import IconUserplus from 'src/assets/icons/IconUserplus';

const HeaderDetail = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-1'>
        <Image
          alt=''
          width={48}
          height={48}
          className='rounded-lg'
          src={'/images/img-avatar.png'}
        />
        <div className='flex flex-col gap-0.5'>
          <Typography fontWeight={600} variant='body1' className='text-[#212121]'>
            Telegrex Academy
          </Typography>
          <div className='flex items-center gap-0.5'>
            <IconTime />
            <Typography fontWeight={400} className='text-[#9E9E9E] text-[12px] leading-5'>
              11/11/2024
            </Typography>
          </div>
        </div>
      </div>
      <Button fullWidth className='max-h-7 w-max flex justify-center items-center font-semibold'>
        <div className='flex items-center gap-0.5'>
          <IconUserplus />
          <Typography className='text-[12px] font-semibold'>{t('lanchpad.monitor')}</Typography>
        </div>
      </Button>
    </div>
  );
};
export default HeaderDetail;

const IconTime = () => {
  return (
    <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1 7C1 10.3137 3.68629 13 7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C5.20796 1 3.59942 1.78563 2.5 3.03126C2.43696 3.10268 2.3756 3.17562 2.31597 3.25M7 4V7L8.875 8.875M2.31543 1.00293V3.25293H4.56543'
        stroke='#9E9E9E'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
