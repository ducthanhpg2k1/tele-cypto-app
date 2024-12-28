import React, { useState } from 'react';
import { Card, Typography, Collapse, Divider } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import CustomCheckbox from 'src/components/ui/checkbox';
import Button from 'src/components/ui/button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CardInformation = ({ handleCopy }: { handleCopy: VoidFunction }) => {
  const [expanded, setExpanded] = useState(true);
  const { t } = useTranslation();

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='flex flex-col gap-4'>
      <Card
        sx={{
          border: '1px solid #EEEEEE',
        }}
        className='p-4 shadow-none flex flex-col gap-3'
      >
        <div className='flex justify-between  items-center' onClick={handleToggle}>
          <Typography className='text-xs' color={'#212121'} fontWeight={500}>
            {t('bot.detail_information')}
          </Typography>

          {expanded ? (
            <ExpandLessIcon
              sx={{
                width: '16px',
                height: '16px',
                color: '#757575',
              }}
            />
          ) : (
            <ExpandMoreIcon
              sx={{
                width: '16px',
                height: '16px',
                color: '#757575',
              }}
            />
          )}
        </div>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <div className='flex flex-col gap-1'>
            <ItemInformation label={t('bot.usdt_price')} value='2,305 - 3,433' />
            <ItemInformation label={t('bot.total_transactions')} value='90' />
            <ItemInformation label={t('bot.regime')} value='Số học' />
            <ItemInformation label={t('bot.profit')} value='0,26% - 0,58%' />
            <Divider variant='fullWidth' className='my-1' />

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
                classNameLabel='font-normal'
                classNameWrapper='flex-row items-center text-[#212121] gap-[4px]'
              />

              <CustomCheckbox
                variantLabel='caption'
                label={t('bot.activate_grid')}
                classNameLabel='font-normal'
                classNameWrapper='flex-row items-center text-[#212121] font-normal gap-[4px]'
              />
              <CustomCheckbox
                variantLabel='caption'
                label={t('bot.activate_stop')}
                classNameLabel='font-normal'
                classNameWrapper='flex-row items-center text-[#212121] font-normal gap-[4px]'
              />
              <CustomCheckbox
                variantLabel='caption'
                label={t('bot.sellAll')}
                classNameLabel='font-normal'
                classNameWrapper='flex-row items-center text-[#212121] font-normal gap-[4px]'
              />
            </div>
          </div>
        </Collapse>
      </Card>
      <Button onClick={handleCopy} className='h-[48px]' fullWidth>
        <Typography className='text-[14px] font-semibold'>{t('bot.create')}</Typography>
      </Button>
    </div>
  );
};

export default CardInformation;

const ItemInformation = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className='flex justify-between items-center'>
      <Typography className='text-xs' color={'#9E9E9E'} fontWeight={400}>
        {label}
      </Typography>
      <div className='text-end'>
        <Typography className='text-xs' color={'#212121'} fontWeight={500}>
          {value}
        </Typography>
      </div>
    </div>
  );
};
