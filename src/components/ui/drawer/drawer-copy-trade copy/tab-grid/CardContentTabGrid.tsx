import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { TypographyRegular } from '../../../../sections/new-trade/NewTrade';
import Button from 'src/components/ui/button';
import IconGroupUser from 'src/assets/icons/IconGroupUser';

const CardContentTabGrid = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        border: '1px solid #EEEEEE',
        borderRadius: '12px',
      }}
    >
      <div className="flex items-center justify-between">
        <Typography
          variant="body1"
          color={'#212121'}
          fontWeight={600}
        >
          1000PEPPER
        </Typography>
        <div className="flex items-center gap-[2px]">
          <IconGroupUser className="w-4 h-4" />
          <TypographyRegular sx={{ color: '#757575' }}>3.246</TypographyRegular>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <Typography
            variant="caption"
            color={'#757575'}
          >
            PNL (USD)
          </Typography>
          <Typography
            variant="body1"
            color={'#4AAF57'}
            fontWeight={700}
          >
            69.464,12
          </Typography>
        </div>
        <Image
          src={'/assets/iconly/ic-chart.svg'}
          width={114}
          height={57}
          alt="chart"
          objectFit="cover"
        />
      </div>
      <div className="flex items-center justify-between">
        <Information
          label={t('bot.card.roi')}
          value="42,66%"
        />
        <Information
          label={t('bot.card.activateDate')}
          value="3 ngày 17 giờ 56ph"
        />
        <Information
          label={t('bot.card.minTrade')}
          value="193,64719 USDT"
        />
      </div>
      <div className="flex items-center justify-between">
        <Information
          label={t('bot.card.addTraded')}
          value="146/625"
        />
        <Button>Sao Chép</Button>
      </div>
    </Box>
  );
};
export default CardContentTabGrid;

const Information = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex flex-col gap-[2px]">
      <TypographyRegular color={'#757575'}>{label}</TypographyRegular>
      <Typography
        variant="caption"
        color={'#212121'}
      >
        {value}
      </Typography>
    </div>
  );
};
