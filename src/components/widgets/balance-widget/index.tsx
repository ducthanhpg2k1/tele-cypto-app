import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import {
  WidgetContainer,
  HeaderContainer,
  TitleText,
  BalanceContainer,
  MainBalance,
  EquivalentBalance,
  StyledButton,
  StyledIcon,
} from './styles';

interface BalanceWidgetProps {
  balance: number;
  currency?: string;
  onDeposit?: () => void;
}

const BalanceWidget: FC<BalanceWidgetProps> = ({ balance, currency = 'USDT', onDeposit }) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <WidgetContainer>
      <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
        <BalanceContainer>
          <HeaderContainer onClick={handleToggle}>
            <TitleText className='text-[12px]'>
              {t('balance.title')} ({currency})
            </TitleText>
            <StyledIcon $isexpanded={isExpanded ? 1 : 0} className='w-4 h-4' />
          </HeaderContainer>

          {isExpanded ? (
            <Box>
              <MainBalance>
                {balance.toLocaleString(undefined, {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                })}
              </MainBalance>
              <EquivalentBalance>
                ≈{' '}
                {balance.toLocaleString(undefined, {
                  style: 'currency',
                  currency: 'USD',
                })}
              </EquivalentBalance>
            </Box>
          ) : (
            <MainBalance>••••</MainBalance>
          )}
        </BalanceContainer>

        <StyledButton variant='contained' color='primary' onClick={onDeposit}>
          {t('balance.deposit')}
        </StyledButton>
      </Box>
    </WidgetContainer>
  );
};

export default BalanceWidget;
