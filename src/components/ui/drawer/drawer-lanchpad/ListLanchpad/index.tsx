import { Typography } from '@mui/material';
import { t } from 'i18next';
import Image from 'next/image';

const ListLanchpad = () => {
  return (
    <div className='flex flex-col gap-4'>
      {[...Array(3)].map((_, index) => (
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3'>
            <Image
              src={'/images/img-lanchpad.png'}
              className='w-9 h-9 rounded-full'
              width={36}
              height={36}
              alt=''
            />
            <div className='flex items-center gap-1'>
              <div className='flex flex-col gap-[2px]'>
                <Typography variant='body1' fontWeight={600} className='text-[#212121]'>
                  1000PEPPER
                </Typography>
                <Typography className='font-normal text-[12px] text-[#757575] leading-5'>
                  PEPPER
                </Typography>
              </div>
              {/* <div className='bg-[#06C14914] rounded py-[2px] px-1 flex justify-center items-center'>
                <Typography variant='body1' fontWeight={600} className='text-[#212121]'>
                  1000PEPPER
                </Typography>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ListLanchpad;
