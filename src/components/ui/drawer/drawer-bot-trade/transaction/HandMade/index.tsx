import { IconButton, Typography } from '@mui/material';
import { ArrowDropDownIcon } from '@mui/x-date-pickers';
import ChartCandlestick from '../TransactionAI/ChartCandlestick';
import CustomCheckbox from 'src/components/ui/checkbox';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import SettingPrice from './SettingPrice';
import SlideRanger from 'src/components/ui/slide-ranger/SlideRanger';
import Button from 'src/components/ui/button';

const HandMade = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-4 relative'>
      <div>
        <div className='flex items-center gap-[2px] mt-1'>
          <Typography variant='body1' color={'#212121'} fontWeight={600}>
            ADA/ BNB
          </Typography>
          <IconButton size='small'>
            <ArrowDropDownIcon />
          </IconButton>
        </div>
        <div className='flex items-center gap-[2px]'>
          <Typography className='text-xs font-normal' color={'#9E9E9E'} fontWeight={600}>
            -3,8%
          </Typography>
          <Typography className='text-xs font-normal' color={'#F54336'} fontWeight={600}>
            -3,8%
          </Typography>
        </div>
      </div>
      <ChartCandlestick />
      <SettingPrice />
      <SlideRanger min={0} max={100} step={1} />
      <div className='flex justify-between items-center'>
        <Typography className='text-xs' color={'#9E9E9E'} fontWeight={400}>
          {t('bot.available')}
        </Typography>
        <div className='flex items-center gap-[4px]'>
          <Typography className='text-xs' color={'#212121'} fontWeight={400}>
            0,00000 BNB
          </Typography>
          <IconButton size='small'>
            <Image alt='' width={20} height={20} src={'assets/iconly/ic-add-blue.svg'} />
          </IconButton>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex justify-between items-center'>
          <Typography className='text-xs' color={'#212121'} fontWeight={500}>
            {t('bot.advanced')}
          </Typography>
          <Image src={'/images/img-note-new.png'} alt='' width={18} height={18} />
        </div>
        <div className='flex flex-col gap-1'>
          <CustomCheckbox
            variantLabel='caption'
            label={t('bot.trailing_up')}
            classNameWrapper='flex-row items-center text-[#212121] font-normal gap-[4px]'
          />

          <CustomCheckbox
            variantLabel='caption'
            label={t('bot.activate_grid')}
            classNameWrapper='flex-row items-center text-[#212121] font-normal gap-[4px]'
          />
          <CustomCheckbox
            variantLabel='caption'
            label={t('bot.activate_stop')}
            classNameWrapper='flex-row items-center text-[#212121] font-normal gap-[4px]'
          />
          <CustomCheckbox
            variantLabel='caption'
            label={t('bot.sellAll')}
            classNameWrapper='flex-row items-center text-[#212121] font-normal gap-[4px]'
          />
        </div>
      </div>
      <div className='p t-4'>
        <Button
          fullWidth
          className='h-10 font-semibold'
        >
          <Typography className='text-[14px]'>{t('bot.create')}</Typography>
        </Button>
      </div>
    </div>
  );
};
export default HandMade;
