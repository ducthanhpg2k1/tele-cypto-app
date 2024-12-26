import { Typography } from '@mui/material';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import BotCTAIcon from 'src/assets/icons/BotCTAIcon';
import {
  ArrowIcon,
  Container,
  ContentContainer,
  TextContainer,
  Title,
  TradeButton,
} from './styles';

interface TradeCTAButtonProps {
  className?: string;
  onTradeClick?: () => void;
}

const BotTradeCTAButton: FC<TradeCTAButtonProps> = ({ className, onTradeClick }) => {
  const { t } = useTranslation();

  return (
    <Container className={className}>
      <ContentContainer>
        <TextContainer>
          <Title className='text-[14px]'>{t('bot.cta.title')}</Title>
          <TradeButton onClick={onTradeClick} disableRipple>
            <Typography variant='caption' color='#E0E0E0' className='font-normal'>
              {t('bot.cta.description')}
            </Typography>
          </TradeButton>
        </TextContainer>
      </ContentContainer>

      <ArrowIcon>
        <BotCTAIcon />
      </ArrowIcon>
    </Container>
  );
};

export default BotTradeCTAButton;
