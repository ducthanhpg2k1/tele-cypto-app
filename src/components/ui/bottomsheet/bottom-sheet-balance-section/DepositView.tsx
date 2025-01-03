import { styled } from '@mui/material/styles';
import DepositIcon from 'src/assets/icons/DepositIcon';
import TransferIcon from 'src/assets/icons/TransferIcon';
import TransactionCard from './TransactionCard';
import { t } from 'i18next';

const transactionData = [
  {
    icon: <TransferIcon />,
    title: t('depositView.transfer'),
    description: t('depositView.total') + ' 56,324 USDT',
    altText: 'Transfer icon',
    type: 'TRANSFER',
    subDesc: t('depositView.wallet'),
  },
  {
    icon: <DepositIcon />,
    title: t('depositView.header'),
    description: t('depositView.to'),
    altText: 'Deposit icon',
    type: 'DEPOSIT',
  },
];

export const DepositView = ({ onAction }: { onAction?: (data: string) => void }) => {
  return (
    <>
      <Container>
        <Title> {t('depositView.header')}</Title>
        <CardsContainer>
          {transactionData.map((transaction, index) => (
            <TransactionCard
              key={index}
              {...transaction}
              onClick={() => {
                onAction && onAction(transaction.type as string);
              }}
            />
          ))}
        </CardsContainer>
        <AlertContainer>
          <AlertSymbol>* </AlertSymbol>
          <AlertMessage>{t('depositView.no')}</AlertMessage>
        </AlertContainer>
      </Container>
    </>
  );
};

const Container = styled('div')(({ theme }) => ({
  borderRadius: '20px 20px 0 0',
  background: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column',
  padding: 24,
  paddingLeft: 16,
  paddingRight: 16,
  justifyContent: 'center',
  alignItems: 'center',
}));

const Title = styled('h1')(({ theme }) => ({
  color: theme.palette.grey[900],
  fontSize: 16,
  fontWeight: 600,
  margin: 0,
}));

const CardsContainer = styled('div')({
  display: 'flex',
  marginTop: 16,
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

const AlertContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  marginTop: 16,
  width: '100%',
  alignItems: 'flex-start',
  gap: 4,
  fontSize: 12,
  color: theme.palette.grey[500],
  fontWeight: 400,
}));

const AlertSymbol = styled('span')({
  lineHeight: 2,
});

const AlertMessage = styled('p')({
  lineHeight: '20px',
  flex: '1 1 0%',
  margin: 0,
});

export default DepositView;
