import { Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Image from 'next/image';
import { t } from 'i18next';
const TotalBalance = () => {
  return (
    <div className='flex flex-col gap-[2px]'>
      <div className='flex items-center gap-0.5'>
        <Typography className='text-xs' color={'#212121'} fontWeight={400}>
          {t('copyTrade.filter.totalBalance')}
        </Typography>
        <Image alt='' width={16} height={16} src={'/images/img-eye.png'} className='mt-0.5' />
      </div>
      <div className='flex items-end gap-0.5'>
        <Typography className='text-2xl' color={'#212121'} fontWeight={700}>
          0,0000
        </Typography>
        <Typography className='text-xs' color={'#212121'} fontWeight={400}>
          USDT
        </Typography>
      </div>
      <Typography className='text-xs' color={'#424242'} fontWeight={400}>
        {t('copyTrade.filter.totalInterest')} 0,0000
      </Typography>
    </div>
  );
};
export default TotalBalance;
