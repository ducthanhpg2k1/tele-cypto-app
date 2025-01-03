import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const PastProfits = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-4'>
      <Typography variant='body1' color={'#212121'} fontWeight={600}>
        {t('bot.past_profits')}
      </Typography>
      <div className='flex items-center justify-between'>
        <div>
          <Typography variant='caption' color={'#757575'} fontWeight={400}>
            ROI
          </Typography>
          <Typography variant='body2' color={'#4AAF57'} fontWeight={600}>
            69.464,12
          </Typography>
        </div>
        <div className='text-end'>
          <Typography variant='caption' color={'#757575'} fontWeight={400}>
            PNL (USD)
          </Typography>
          <Typography variant='body2' color={'#4AAF57'} fontWeight={600}>
            $69.464,12
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default PastProfits;
