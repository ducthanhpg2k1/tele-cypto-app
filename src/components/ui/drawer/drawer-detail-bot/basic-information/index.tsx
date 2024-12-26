import styled from '@emotion/styled';
import { Collapse, Divider, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useState } from 'react';
const BasicInformation = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(true);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <div className='flex flex-col gap-4'>
      <Typography variant='body1' color={'#212121'} fontWeight={600}>
        {t('bot.basic_information')}
      </Typography>
      <div className='flex flex-col gap-3'>
        <ItemInformation label={t('bot.uptime')} value='3 ngày 12 giờ 10 phút' />
        <ItemInformation label={t('bot.total_transactions')} value='47/198' />
        <ItemInformation label={t('bot.usdt_price')} value='2,038 - 3,500' />
        <ItemInformation label={t('bot.number_of_meshes')} value='47/198' />
        <ItemInformation label={t('bot.regime')} value='Số học' />
        <ItemInformation label={t('bot.profit')} value='47/198' />

        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <div className='flex flex-col gap-3'>
            <Divider variant='fullWidth' />

            <ItemInformation label={t('bot.trailing_up')} value='3 ngày 12 giờ 10 phút' />
            <ItemInformation label={t('bot.activation_price')} value='Huỷ kích hoạt' />
            <ItemInformation label={t('bot.stop_loss_price')} value='--' />
            <ItemInformation label={t('bot.stop_loss_price')} value='--' />
            <ItemInformation label={t('bot.take_profit_price')} value='--' />
            <ItemInformation label={t('bot.sellAll')} value='--' />
          </div>
        </Collapse>
      </div>
      <div className='flex flex-col gap-[10px]'>
        <Text fontWeight={600} color={'#177DFF'}>
          {t('bot.customize_parameters')}
        </Text>
        <div className='flex justify-center items-center gap-[4px]' onClick={handleToggle}>
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

          <Text fontWeight={400} color={'#757575'}>
            {expanded ? t('bot.collapse') : t('bot.extend')}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;

const Text = styled(Typography)<{ color?: string; fontWeight?: number; fontSize?: string }>(
  ({ color, fontWeight, fontSize }) => ({
    fontSize: fontSize || '12px',
    fontWeight: fontWeight || 400,
    lineHeight: '20px',
    color: color || '#757575',
  }),
);

const ItemInformation = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className='flex justify-between items-center'>
      <Text color={'#9E9E9E'} fontWeight={400}>
        {label}
      </Text>
      <div className='text-end'>
        <Text color={'#212121'} fontWeight={500}>
          {value}
        </Text>
      </div>
    </div>
  );
};
