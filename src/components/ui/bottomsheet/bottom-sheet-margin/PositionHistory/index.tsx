import { TagAction } from 'src/components/ui/drawer/drawer-bot-trade/transaction/TransactionAI/Popular';
import { t } from 'i18next';
import { Button, Typography } from '@mui/material';
import clsx from 'clsx';

const PositionHistory = () => {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      <TagAction label={t('trade.opening_hours')} />
      {[...Array(2)].map((_, index) => (
        <div className='flex flex-col gap-6 border-b border-b-[#EEEEEE] pb-3'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-0.5'>
              <Typography className='text-[14px] text-[#212121] leading-5' fontWeight={600}>
                1000WHYUSDT
              </Typography>
              <div className='rounded-sm bg-[#F5F5F5] py-[2px] px-[4px] flex justify-center items-center'>
                <Typography className='text-[8px] text-[#757575] leading-3' fontWeight={400}>
                  {t('trade.ageless')}
                </Typography>
              </div>
            </div>
            {index === 0 ? (
              <Typography className='text-[12px] text-[#212121] leading-4' fontWeight={500}>
                {t('trade.closed')}
              </Typography>
            ) : (
              <Button className='w-max bg-[#177DFF] py-[10px] px-[10px] rounded-md max-h-[21px]'>
                <Typography className='text-[12px] text-white leading-5' fontWeight={600}>
                  {t('trade.close_position')}
                </Typography>
              </Button>
            )}
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col gap-[6px]'>
                <Typography className='text-[10px] text-[#757575] leading-3' fontWeight={400}>
                  PnL đóng
                </Typography>
                <Typography className='text-[14px] text-[#F54336] leading-3' fontWeight={600}>
                  220,33
                </Typography>
              </div>
              <div className='flex flex-col items-end gap-[6px]'>
                <Typography className='text-[10px] text-[#757575] leading-3' fontWeight={400}>
                  {t('trade.closed_volume')}
                </Typography>
                <Typography className='text-[14px] text-[#212121] leading-3' fontWeight={600}>
                  19,003 POPCAT
                </Typography>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col gap-[6px]'>
                <Typography className='text-[10px] text-[#757575] leading-3' fontWeight={400}>
                  {t('trade.entry_price')}
                </Typography>
                <Typography className='text-[12px] text-[#212121] leading-3' fontWeight={500}>
                  1,333
                </Typography>
              </div>
              <div className='flex flex-col items-end gap-[6px]'>
                <Typography className='text-[10px] text-[#757575] leading-3' fontWeight={400}>
                  {t('trade.closing_price')}
                </Typography>
                <Typography className='text-[12px] text-[#212121] leading-3' fontWeight={500}>
                  0,48333
                </Typography>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <Typography className='text-[10px] text-[#9E9E9E] leading-3' fontWeight={400}>
                {t('trade.maximum_open')}
              </Typography>
              <Typography className='text-[10px] text-[#212121] leading-3' fontWeight={500}>
                19,003 POPCAT
              </Typography>
            </div>
            <div className='flex justify-between items-center'>
              <Typography className='text-[10px] text-[#9E9E9E] leading-3' fontWeight={400}>
                {t('trade.closed')}
              </Typography>
              <Typography className='text-[10px] text-[#212121] leading-3' fontWeight={500}>
                24 - 12-2023
              </Typography>
            </div>
            <div className='flex justify-between items-center'>
              <Typography className='text-[10px] text-[#9E9E9E] leading-3' fontWeight={400}>
                {t('trade.open')}
              </Typography>
              <Typography className='text-[10px] text-[#212121] leading-3' fontWeight={500}>
                24 - 12-2023
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PositionHistory;
