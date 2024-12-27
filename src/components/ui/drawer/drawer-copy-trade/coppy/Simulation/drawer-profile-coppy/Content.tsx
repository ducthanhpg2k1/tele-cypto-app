import { Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
const Content = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <div className='flex justify-between'>
          <Image alt='' width={48} height={48} className='rounded-lg' src={'/images/img-avatar.png'} />
          <div className='border-2 max-h-5 border-[#EEEEEE] rounded py-0.5 px-1 flex items-center gap-1'>
            <IconStar />
            <Typography color={'#757575'} fontWeight={400} className='text-[10px] leading-3'>110</Typography>
          </div>
        </div>
        <div className='flex flex-col gap-0.5'>
          <div className='flex items-center gap-1'>
            <Typography color={'#212121'} fontWeight={600} variant='body1'>Master Chef</Typography>
            <div className='bg-[#F5F5F5] rounded py-0.5 px-1 flex items-center gap-0.5 w-max'>
              <Image src={'/assets/iconly/ic-lock.svg'} width={18} height={18} alt='' />
              <Typography color={'#212121'} fontWeight={500} className='text-[10px] leading-3'>Riêng tư</Typography>

            </div>
          </div>
          <Typography color={'#757575'} fontWeight={600} className='text-[10px] leading-3'>I am a trader. Thank you for watching</Typography>

        </div>
      </div>

      <div>
        <div className='bg-[#F5F5F5] w-max rounded-full text-[10px] text-[#212121] leading-3 py-[2px] px-0.5 flex justify-center items-center'>
          Riêng tư
        </div>

        <div className='flex flex-col gap-1 justify-center w-max items-center'>
          <Typography color={'#212121'} fontWeight={600} variant='body2'>Futures</Typography>
          <div className='bg-[#177DFF] w-8 h-0.5 rounded-full' />
        </div>
      </div>

    </div>
  );
};

export default Content;

const IconStar = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.55572 1.7712C7.83576 1.63226 8.16465 1.63226 8.44468 1.7712C8.69173 1.89378 8.82058 2.10918 8.88244 2.22006C8.94935 2.33998 9.01789 2.4938 9.08637 2.64752C9.08966 2.6549 9.09295 2.66229 9.09625 2.66967L10.2943 5.35738L13.2448 5.66879C13.4122 5.68643 13.5796 5.70407 13.7143 5.73065C13.8389 5.75522 14.0836 5.8112 14.2765 6.00828C14.4952 6.23166 14.5968 6.54446 14.5512 6.85373C14.511 7.12656 14.3459 7.31567 14.2596 7.40877C14.1662 7.50945 14.0411 7.62216 13.9161 7.73479L11.7121 9.721L12.3277 12.6234C12.3627 12.788 12.3976 12.9527 12.414 13.089C12.4291 13.2151 12.4515 13.4651 12.3237 13.7095C12.1788 13.9865 11.9127 14.1798 11.6045 14.232C11.3326 14.278 11.1017 14.1795 10.9865 14.1261C10.8619 14.0685 10.716 13.9843 10.5703 13.9002L8.0002 12.4179L5.43011 13.9002C5.28437 13.9843 5.13853 14.0685 5.01392 14.1261C4.8987 14.1795 4.66785 14.278 4.39593 14.232C4.08771 14.1798 3.82163 13.9865 3.67675 13.7095C3.54894 13.4651 3.57131 13.2151 3.58643 13.089C3.60278 12.9527 3.63775 12.788 3.67269 12.6233L4.28829 9.721L2.10234 7.75104C2.09633 7.74563 2.09032 7.74021 2.08431 7.7348C1.95928 7.62217 1.83418 7.50946 1.7408 7.40877C1.65447 7.31566 1.48943 7.12656 1.44919 6.85373C1.40358 6.54446 1.50521 6.23167 1.72389 6.00828C1.91682 5.8112 2.16149 5.75522 2.28606 5.73065C2.42078 5.70407 2.58824 5.68643 2.75559 5.66879C2.76364 5.66794 2.77168 5.6671 2.77973 5.66625L5.70611 5.35738L6.90416 2.66967C6.90745 2.66228 6.91075 2.65489 6.91404 2.6475C6.98253 2.49379 7.05106 2.33998 7.11797 2.22006C7.17983 2.10918 7.30868 1.89378 7.55572 1.7712Z" fill="#FACC15" />
    </svg>

  )
}
