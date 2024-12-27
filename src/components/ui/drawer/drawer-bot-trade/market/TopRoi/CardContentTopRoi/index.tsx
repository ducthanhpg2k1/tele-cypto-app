import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Button from 'src/components/ui/button';
import IconGroupUser from 'src/assets/icons/IconGroupUser';
import styled from '@emotion/styled';
import clsx from 'clsx';

export const TypographyRegular = styled(Typography)(({ theme }) => ({
  fontSize: '10px',
  lineHeight: '12.1px',
  fontWeight: 400,
  color: '#9E9E9E',
  letterSpacing: 0.2,
}));

const DATA_OPTIONS = ['Vĩnh cửu', 'Long 10x', 'Traling Up']
const CardContentTopRoi = ({ onClick }: { onClick?: VoidFunction }) => {
  const { t } = useTranslation();
  return (
    <div onClick={onClick}>
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
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-[10px]'>
            <Typography variant='body1' color={'#212121'} fontWeight={600}>
              1000PEPPER
            </Typography>
            <div className='flex items-center gap-0.5'>
              {
                DATA_OPTIONS?.map((item) => {
                  return (
                    <div key={item}
                      className={clsx(
                        'py-[2px] px-[6px] bg-[#F5F5F5] rounded',
                        {
                          'bg-[#06C14914]': item === 'Long 10x',
                        },
                      )}
                    >
                      <Typography className='text-[10px] leading-3' color={item === 'Long 10x' ? '#4AAF57' : '#212121'} fontWeight={400}>
                        {item}
                      </Typography>
                    </div>
                  )
                })
              }
            </div>
          </div>

          <div className='flex items-center gap-[2px]'>
            <IconGroupUser className='w-4 h-4' />
            <TypographyRegular sx={{ color: '#757575' }}>3.246</TypographyRegular>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div>
            <Typography variant='caption' color={'#757575'} fontWeight={400}>
              PNL (USD)
            </Typography>
            <Typography variant='body1' color={'#4AAF57'} fontWeight={600}>
              69.464,12
            </Typography>
          </div>
          <Image
            src={'/assets/chart_line.png'}
            width={114}
            height={57}
            alt='chart'
            objectFit='cover'
            className='w-auto h-auto'
          />
        </div>
        <div className='flex items-center justify-between'>
          <Information label={t('bot.card.roi')} value='42,66%' />
          <Information label={t('bot.card.activateDate')} value='3 ngày 17 giờ 56ph' />
          <Information label={t('bot.card.minTrade')} value='193,64719 USDT' />
        </div>
        <div className='flex items-center justify-between'>
          <Information label={t('bot.card.addTraded')} value='146/625' />
          <Button className='h-8 !p-0 text-xs font-bold'>Sao Chép</Button>
        </div>
      </Box>
    </div>
  );
};
export default CardContentTopRoi;

const Information = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className='flex flex-col gap-[2px]'>
      <TypographyRegular style={{ color: '#757575' }}>{label}</TypographyRegular>
      <Typography variant='caption' color={'#212121'}>
        {value}
      </Typography>
    </div>
  );
};
