import { Typography } from '@mui/material';
import Image from 'next/image';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import clsx from 'clsx';
import Button from 'src/components/ui/button';
import DrawerProfileCoppy from './drawer-profile-coppy';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
const Simulation = () => {
  const refDrawerProfileCoppy: any = useRef();
  const { t } = useTranslation();

  return (
    <>
      <div
        onClick={() => refDrawerProfileCoppy.current.onOpen()}
        className='border border-[#EEEEEE] p-4 flex flex-col gap-4 rounded-xl'
      >
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <Image
              alt=''
              width={36}
              height={36}
              className='rounded-lg'
              src={'/images/img-avatar.png'}
            />
            <div className='flex flex-col gap-[2px]'>
              <div className='flex items-center gap-1'>
                <Typography variant='body2' color={'#212121'} fontWeight={600}>
                  Master Chef
                </Typography>
                <div className='bg-[#E8F2FF] rounded py-0.5 px-1 flex justify-center items-center'>
                  <Typography className='text-[10px] leading-3' color={'#177DFF'} fontWeight={400}>
                    {t('copyTrade.copy_simulation')}
                  </Typography>
                </div>
              </div>
              <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
                {`${t('copyTrade.copy_date')}: 24/10/2024`}
              </Typography>
            </div>
          </div>
          <ChevronRightIcon className='text-[#757575]' />
        </div>
        <div className='flex flex-col gap-1'>
          <ItemCard label={t('copyTrade.filter.amountCopy')} value='10,000,000' />
          <ItemCard textUnderline label={t('copyTrade.filter.roi')} value='0%' />
          <ItemCard
            textUnderline
            label={t('copyTrade.filter.unrealizedProfitAndLoss')}
            value='0,000'
          />
        </div>
        <div className='flex items-center gap-3'>
          <Button fullWidth variant='blue' className='h-9 font-semibold'>
            <Typography className='text-[12px] font-semibold'>
              {t('copyTrade.stop_copy')}
            </Typography>
          </Button>
          <Button
            fullWidth
            onClick={() => refDrawerProfileCoppy.current.onOpen()}
            className='h-9 font-semibold'
          >
            <Typography className='text-[12px] font-semibold'>
              {t('copyTrade.filter.copyBtn')}
            </Typography>
          </Button>
        </div>
      </div>
      <DrawerProfileCoppy refProfileCoppy={refDrawerProfileCoppy} />
    </>
  );
};
export default Simulation;

const ItemCard = ({
  label,
  textUnderline = false,
  value,
}: {
  value: string;
  label: string;
  textUnderline?: boolean;
}) => {
  return (
    <div className='flex justify-between items-center'>
      <Typography
        className={clsx('text-[10px] leading-3', {
          underline: textUnderline,
        })}
        color={'#757575'}
        fontWeight={400}
      >
        {label}
      </Typography>
      <Typography className={clsx('text-xs leading-4')} color={'#212121'} fontWeight={500}>
        {value}
      </Typography>
    </div>
  );
};
