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
  ArrowIcon,
} from './styles';
import { Typography } from '@mui/material';
import TwoArrowsIcon from 'src/assets/icons/TwoArrowsIcon';

interface TradeCTAButtonProps {
  className?: string;
  onClick?: () => void;
}

const EnjoyButton: FC<TradeCTAButtonProps> = ({ className, onClick }) => {
  const { t } = useTranslation();

  return (
    <Container className={className}>
      <ContentContainer>
        <TextContainer>
          <Title className="text-[14px]">{t('earn.cardHeader')}</Title>
          <Typography
            variant="body2"
            className="text-[#E0E0E0] text-[12px]"
            width={200}
          >
            {t('earn.cardSub')}
          </Typography>
        </TextContainer>
      </ContentContainer>
      <ArrowIcon>
        <TwoArrowsIcon />
      </ArrowIcon>
    </Container>
  );
};

export default EnjoyButton;
