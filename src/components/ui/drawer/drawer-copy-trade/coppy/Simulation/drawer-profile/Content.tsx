import { Divider, Typography } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useRef } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from 'src/components/ui/button';
import { NoData } from '../..';
import DrawerMyFollowers from '../drawer-my-followers';
import { useTranslation } from 'react-i18next';

const Content = () => {
  const refMyFollowers: any = useRef();
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <div className='flex justify-between'>
          <Image
            alt=''
            width={48}
            height={48}
            className='rounded-lg'
            src={'/images/img-avatar.png'}
          />
          <div className='flex items-center gap-1'>
            <div className='h-7 min-w-7 max-w-7 flex justify-center bg-[#EEEEEE] rounded items-center'>
              <MoreHorizIcon className='text-[#212121] w-4 h-4' />
            </div>
            <Button fullWidth className='max-h-7 flex justify-center items-center font-semibold'>
              <div className='flex items-center gap-0.5'>
                <IconUser />
                <Typography className='text-[12px] font-semibold'>
                  {t('copyTrade.monitor')}
                </Typography>
              </div>
            </Button>
          </div>
        </div>
        <div className='flex flex-col gap-0.5'>
          <div className='flex items-center gap-1'>
            <Typography color={'#212121'} fontWeight={600} variant='body1'>
              Master Chef
            </Typography>
          </div>
          <Typography color={'#757575'} fontWeight={600} className='text-[10px] leading-3'>
            I am a trader. Thank you for watching
          </Typography>
        </div>
      </div>

      <div className='flex items-center gap-6'>
        <ItemProfile
          onClick={() => refMyFollowers.current.onOpen()}
          label={t('copyTrade.following')}
          value='1'
        />
        <ItemProfile
          onClick={() => refMyFollowers.current.onOpen()}
          label={t('copyTrade.followers')}
          value='1'
        />
        <ItemProfile label={t('copyTrade.liked')} value='0' />
        <ItemProfile label={t('copyTrade.shared')} value='0' />
      </div>

      <Button
        fullWidth
        variant='blue'
        className='w-max font-semibold max-h-7 flex justify-center items-center'
      >
        <div className='flex items-center gap-0.5'>
          <IconCoppy />
          <Typography className='text-[14px]'>{t('copyTrade.copy_trading')}</Typography>
        </div>
      </Button>
      <Divider variant='fullWidth' />

      <NoData isProfile label={t('copyTrade.no_data_found')} />

      <DrawerMyFollowers refMyFollowers={refMyFollowers} />
    </div>
  );
};

export default Content;

const ItemProfile = ({ label, value, onClick }: any) => {
  return (
    <div className='flex flex-col gap-[2px]' onClick={onClick}>
      <Typography color={'#212121'} fontWeight={500} className='text-xs'>
        {value}
      </Typography>
      <Typography color={'#757575'} fontWeight={500} className='text-[10px] leading-3'>
        {label}
      </Typography>
    </div>
  );
};

const IconUser = () => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M7.68123 1.33301C5.84028 1.33301 4.3479 2.82539 4.3479 4.66634C4.3479 6.50729 5.84028 7.99967 7.68123 7.99967C9.52218 7.99967 11.0146 6.50729 11.0146 4.66634C11.0146 2.82539 9.52218 1.33301 7.68123 1.33301Z'
        fill='white'
      />
      <path
        d='M7.68123 8.66634C8.35615 8.66634 9.00504 8.77778 9.6105 8.98325C9.4344 9.28111 9.33333 9.62859 9.33333 9.99967C8.22876 9.99967 7.33333 10.8951 7.33333 11.9997C7.33333 13.1042 8.22876 13.9997 9.33333 13.9997C9.33333 14.2334 9.37344 14.4578 9.44714 14.6663H4.3479C3.55175 14.6663 3.15368 14.6663 2.72598 14.3707C2.43644 14.1706 2.08409 13.6121 2.02814 13.2646C1.94548 12.7513 2.05125 12.5296 2.2628 12.0861C3.22756 10.0638 5.2912 8.66634 7.68123 8.66634Z'
        fill='white'
      />
      <path
        d='M10.6667 9.99967C10.6667 9.63148 10.9651 9.33301 11.3333 9.33301C11.7015 9.33301 12 9.63148 12 9.99967V11.333H13.3333C13.7015 11.333 14 11.6315 14 11.9997C14 12.3679 13.7015 12.6663 13.3333 12.6663H12V13.9997C12 14.3679 11.7015 14.6663 11.3333 14.6663C10.9651 14.6663 10.6667 14.3679 10.6667 13.9997V12.6663H9.33333C8.96514 12.6663 8.66667 12.3679 8.66667 11.9997C8.66667 11.6315 8.96514 11.333 9.33333 11.333H10.6667V9.99967Z'
        fill='white'
      />
    </svg>
  );
};

const IconCoppy = () => {
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M5.25 4.65C5.25 3.80992 5.25 3.38988 5.41349 3.06901C5.5573 2.78677 5.78677 2.5573 6.06901 2.41349C6.38988 2.25 6.80992 2.25 7.65 2.25H13.35C14.1901 2.25 14.6101 2.25 14.931 2.41349C15.2132 2.5573 15.4427 2.78677 15.5865 3.06901C15.75 3.38988 15.75 3.80992 15.75 4.65V10.35C15.75 11.1901 15.75 11.6101 15.5865 11.931C15.4427 12.2132 15.2132 12.4427 14.931 12.5865C14.6101 12.75 14.1901 12.75 13.35 12.75H7.65C6.80992 12.75 6.38988 12.75 6.06901 12.5865C5.78677 12.4427 5.5573 12.2132 5.41349 11.931C5.25 11.6101 5.25 11.1901 5.25 10.35V4.65ZM3.75 5.25C2.92157 5.25 2.25 5.92157 2.25 6.75V14.25C2.25 15.0784 2.92157 15.75 3.75 15.75H11.25C12.0784 15.75 12.75 15.0784 12.75 14.25H4.125C3.91789 14.25 3.75 14.0821 3.75 13.875V5.25ZM6.75 4.87471C6.75 4.46049 7.08579 4.12471 7.5 4.12471H9C9.41421 4.12471 9.75 4.46049 9.75 4.87471C9.75 5.28892 9.41421 5.62471 9 5.62471H7.5C7.08579 5.62471 6.75 5.28892 6.75 4.87471ZM12.9697 6.59438C13.2626 6.30148 13.7374 6.30148 14.0303 6.59438C14.3232 6.88727 14.3232 7.36214 14.0303 7.65504L11.7803 9.90504C11.4874 10.1979 11.0126 10.1979 10.7197 9.90504L9.75 8.93537L8.03033 10.655C7.73744 10.9479 7.26256 10.9479 6.96967 10.655C6.67678 10.3621 6.67678 9.88727 6.96967 9.59438L9.21967 7.34438C9.51256 7.05148 9.98744 7.05148 10.2803 7.34438L11.25 8.31405L12.9697 6.59438Z'
        fill='#177DFF'
      />
    </svg>
  );
};
