import { styled } from '@mui/material/styles';
import DepositIcon from 'src/assets/icons/DepositIcon';
import TransferIcon from 'src/assets/icons/TransferIcon';
import TransactionCard from './TransactionCard';

const transactionData = [
  {
    icon: <TransferIcon />,
    title: 'Chuyển',
    description: 'Tổng số có sẵn 56,324 USDT',
    altText: 'Transfer icon',
    type: 'TRANSFER',
    subDesc: 'Có thể chuyển từ ví',
  },
  {
    icon: <DepositIcon />,
    title: 'Nạp tiền',
    description: 'Gửi tiền đến tài khoản',
    altText: 'Deposit icon',
    type: 'DEPOSIT',
  },
];

export const DepositView = ({ onAction }: { onAction?: (data: string) => void }) => {
  return (
    <>
      <Container>
        <Title>Nạp tiền</Title>
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
          <AlertMessage>
            Không thể đặt lệnh vì số dư không đủ. Hãy chuyển tài sản từ ví khác sang hoặc nạp tiền
            để đặt lệnh.
          </AlertMessage>
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
