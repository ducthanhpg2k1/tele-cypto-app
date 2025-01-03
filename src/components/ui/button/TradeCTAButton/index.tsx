import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import CoinAlt from 'src/assets/icons/CoinAlt';
import {
  Container,
  ContentContainer,
  IconContainer,
  TextContainer,
  Title,
  TradeButton,
  ArrowIcon,
} from './styles';
import { Typography } from '@mui/material';

interface TradeCTAButtonProps {
  className?: string;
  onTradeClick?: () => void;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}

const TradeCTAButton: FC<TradeCTAButtonProps> = ({
  className,
  onTradeClick,
  title,
  description,
}) => {
  const { t } = useTranslation();

  return (
    <Container className={className}>
      <ContentContainer>
        <IconContainer>
          <CoinAlt style={{ width: 40, height: 40 }} />
        </IconContainer>

        <TextContainer>
          {title ? title : <Title className='text-[14px]'>{t('trade.start')}</Title>}
          <TradeButton onClick={onTradeClick} disableRipple>
            {description ? (
              description
            ) : (
              <Typography variant='caption' color='#E0E0E0' className='font-normal'>
                {t('trade.now')}
              </Typography>
            )}
          </TradeButton>
        </TextContainer>
      </ContentContainer>

      <ArrowIcon>
        <ArrowUpRightIcon />
      </ArrowIcon>
    </Container>
  );
};

export default TradeCTAButton;
