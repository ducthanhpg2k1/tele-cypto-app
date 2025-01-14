import { Typography } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';

const ListMessage = ({ item, index }: any) => {
  return (
    <div
      className={clsx('flex justify-between gap-3 items-start', {
        'pl-10': index === 1,
      })}
    >
      <Image
        src={'/images/avatar.png'}
        width={32}
        height={32}
        alt=''
        className='w-8 rounded-full h-8'
      />
      <div className='flex flex-col gap-1'>
        <div className='bg-[#F5F5F5] rounded-xl py-1 px-3 flex flex-col gap-1'>
          <Typography className='text-[12px] leading-5 text-[#616161] font-normal'>
            Axit amin
          </Typography>
          <Typography className='text-[14px] leading-5 text-[#212121] font-normal'>
            {item}
          </Typography>
        </div>
        <div className='flex items-center gap-0.5'>
          <Typography className='text-[12px] leading-5 text-[#707070] font-normal'>
            28 ngày trước
          </Typography>
          <Typography className='text-[20px] leading-4 text-[#212121] font-medium'>·</Typography>
          <Typography className='text-[12px] leading-4 text-[#212121] font-medium'>
            Trả lời
          </Typography>
        </div>
      </div>
      <div className='flex flex-col items-center gap-0.5'>
        <IconLikeDefault />
        <Typography className='text-[12px] leading-5 text-[#616161] font-medium'>10</Typography>
      </div>
    </div>
  );
};
export default ListMessage;

export const IconLikeDefault = () => {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M10.0009 3.77415C11.9584 2.01665 14.9834 2.07498 16.8693 3.96415C18.7543 5.85415 18.8193 8.86415 17.0659 10.8275L9.99925 17.9042L2.93425 10.8275C1.18092 8.86415 1.24675 5.84915 3.13092 3.96415C5.01842 2.07748 8.03759 2.01415 10.0009 3.77415Z'
        fill='#BDBDBD'
      />
    </svg>
  );
};
