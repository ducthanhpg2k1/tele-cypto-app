import { Box, IconButton, SelectChangeEvent, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CaretDown from 'src/assets/icons/CaretDown';
import HeaderTimeIcon from 'src/assets/icons/HeaderTimeIcon';
import Button from 'src/components/ui/button';

interface CardTrade {
  icon: string;
  currency: string;
  value: string;
  maxValue?: string;
}
const Content = () => {
  const { t } = useTranslation();

  const [data, setData] = useState<{
    form: CardTrade;
    to: CardTrade;
  }>({
    form: {
      icon: '/assets/iconly/icon-usdt.svg',
      value: '1000',
      currency: 'USDT',
      maxValue: '1000',
    },
    to: {
      icon: '/assets/iconly/icon-usdc.svg',
      value: '2673.3883822',
      currency: 'USDC',
      maxValue: '2673.3883822',
    },
  });

  const exChangeValue = () => {
    const newData = {
      form: data.to,
      to: data.form,
    };
    setData(() => newData);
  };
  const onMaxValue = () => {
    // to do logic set max and change value from
  };
  return (
    <Box sx={sx.wrap}>
      <Box>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-[2px]">
            <Typography
              variant="caption"
              color="#424242"
              fontWeight={400}
            >
              {t('exchange.market')}
            </Typography>
            <CaretDown color="#424242" />
          </div>
          <IconButton
            onClick={() => {
              //  to do prop action
              console.log('clock clicked');
            }}
          >
            <HeaderTimeIcon />
          </IconButton>
        </div>
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              top: 96,
              left: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconButton
              sx={{ background: '#fff' }}
              onClick={() => exChangeValue()}
            >
              <Image
                src={'/assets/iconly/icon-transfer.svg'}
                width={20}
                height={20}
                alt=""
              />
            </IconButton>
          </Box>
          <CardExchange
            type="FORM"
            currency={data?.form.currency}
            value={data?.form.value}
            icon={data?.form.icon}
            maxValue={data.form.maxValue}
            onMaxValue={onMaxValue}
          />
          <CardExchange
            type="TO"
            currency={data?.to.currency}
            value={data?.to.value}
            icon={data?.to.icon}
            onMaxValue={onMaxValue}
          />
        </Box>
      </Box>
      <Button fullWidth>{t('exchange.trade')}</Button>
    </Box>
  );
};

export default Content;

const CardExchange = ({
  type,
  icon = '',
  currency = '',
  value = '',
  maxValue = '',
  onMaxValue,
}: {
  type: 'FORM' | 'TO';
  icon: string;
  currency: string;
  value: string;
  maxValue?: string;
  onMaxValue?: () => void;
}) => {
  const { t } = useTranslation();
  return (
    <Box sx={sx.card}>
      <Box sx={sx.cardHeader}>
        <Typography
          variant="caption"
          color={'#9E9E9E'}
          className="font-normal"
        >
          {type === 'FORM' ? t('exchange.to') : t('exchange.end')}
        </Typography>
        {type === 'FORM' && (
          <div className="flex items-center gap-[4px]">
            <Typography
              variant="caption"
              color="#9e9e9e"
              fontWeight={400}
            >
              {t('exchange.available')}
              &nbsp;
              {maxValue}
              &nbsp;
              {currency}
            </Typography>
            <CaretDown
              color="#757575"
              width={14}
              height={14}
            />
          </div>
        )}
      </Box>
      <Box sx={sx.cardContent}>
        <div className="flex items-center gap-[4px]">
          <Image
            src={icon}
            width={20}
            height={20}
            alt=""
            objectFit="cover"
          />
          <Typography
            variant="body2"
            color="#212121"
            fontWeight={500}
          >
            {currency}
          </Typography>
          <CaretDown color="#424242" />
        </div>
        <Typography
          variant="h5"
          fontWeight={600}
          color={'#212121'}
        >
          {value}
        </Typography>
      </Box>
      {type === 'FORM' && (
        <div
          className="w-full flex items-center justify-end"
          onClick={() => onMaxValue && onMaxValue()}
        >
          <Typography
            color="#177DFF"
            variant="caption"
            textAlign="right"
          >
            {t('exchange.max')}
          </Typography>
        </div>
      )}
    </Box>
  );
};
const sx = {
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  card: {
    px: '12px',
    py: '17.5px',
    background: '#F5F5F5',
    borderRadius: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    my: 2,
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};
