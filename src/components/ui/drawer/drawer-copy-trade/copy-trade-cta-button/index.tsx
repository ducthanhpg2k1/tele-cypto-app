import { Typography } from '@mui/material';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import BotCTAIcon from 'src/assets/icons/BotCTAIcon';
import {
  ArrowIcon,
  CTAButton,
  Container,
  ContentContainer,
  TextContainer,
  Title,
  TradeButton,
} from './styles';
import Button from 'src/components/ui/button';

interface TradeCTAButtonProps {
  className?: string;
  onTradeClick?: () => void;
}

const CopyTradeCTAButton: FC<TradeCTAButtonProps> = ({ className, onTradeClick }) => {
  const { t } = useTranslation();

  return (
    <Container className={className}>
      <ContentContainer>
        <TextContainer>
          <Title className='text-[14px]'>{t('copyTrade.cta.title')}</Title>
          <TradeButton onClick={onTradeClick} disableRipple>
            <Typography variant='caption' color='#177DFF' className='font-normal'>
              {t('copyTrade.cta.description')}
            </Typography>
          </TradeButton>
        </TextContainer>
      </ContentContainer>
      <CTAButton>
        <Typography variant='caption' color='#212121' className='font-bold text-sm'>
          {t('copyTrade.cta.amount')}
        </Typography>
        <Button className='text-xs h-7 flex justify-center items-center'>
          {t('copyTrade.cta.button')}
        </Button>
      </CTAButton>
    </Container>
  );
};

export default CopyTradeCTAButton;
