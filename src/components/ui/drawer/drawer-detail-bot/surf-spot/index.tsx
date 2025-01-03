import { Divider, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import IconGroupUser from 'src/assets/icons/IconGroupUser';
import { TypographyRegular } from 'src/components/sections/new-trade/NewTrade';

const SurfSpot = () => {
  const { t } = useTranslation();
  return (
    <div className='flex justify-between items-center'>
      <div>
        <Typography variant='body1' color={'#212121'} fontWeight={600}>
          LDO/ USDT
        </Typography>
        <div className='flex items-center gap-[6px]'>
          <Typography variant='caption' color={'#757575'} fontWeight={400}>
            {t('bot.surf_spot')}
          </Typography>

          <div className='w-[1px] h-3 bg-[#757575]' />

          <div className='flex items-center gap-[2px]'>
            <IconGroupUser className='w-4 h-4' />
            <Typography variant='caption' color={'#757575'} fontWeight={400}>
              3.246
            </Typography>
          </div>
        </div>
      </div>
      <div className='text-end'>
        <Typography variant='body1' color={'#4AAF57'} fontWeight={600}>
          69.464,12
        </Typography>
        <Typography variant='caption' color={'#4AAF57'} fontWeight={400}>
          + 3,532
        </Typography>
      </div>
    </div>
  );
};
export default SurfSpot;
