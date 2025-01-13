import { Typography } from '@mui/material';
import clsx from 'clsx';
import { t } from 'i18next';

const CardFlexible = () => {
  return (
    <div className='flex items-center gap-3'>
      {[...Array(2)].map((_, index) => (
        <div
          className={clsx(
            'border h-full min-w-[120px] border-[#EEEEEE] p-1 rounded-lg flex flex-col gap-0.5',
            {
              'border-[#177DFF]': index === 1,
            },
          )}
        >
          <Typography className='font-medium text-[#212121] text-[10px] leading-3'>
            {t('earn.flexible')}
          </Typography>
          <div className='flex items-center gap-0.5'>
            <Typography variant='body2' fontWeight={600} className='text-[#4AAF57]'>
              13,75 %
            </Typography>
            <Typography className='font-normal text-[#616161] text-[10px] leading-3'>
              {t('earn.max')}
            </Typography>
          </div>
          {index === 1 && (
            <div className='bg-[#E8F2FF] w-max rounded py-0.5 px-[6px] flex justify-center items-baseline'>
              <Typography className='font-normal text-[#177DFF] text-[10px] leading-3'>
                {t('earn.special_offers')}
              </Typography>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default CardFlexible;
