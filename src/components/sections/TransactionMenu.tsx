import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useMemo, useRef } from 'react';
import BuyIcon from 'src/assets/icons/BuyIcon';
import DepositIcon from 'src/assets/icons/DepositIcon';
import TransferIcon from 'src/assets/icons/TransferIcon';
import WithdrawIcon from 'src/assets/icons/WithdrawIcon';
import { DrawerHandle } from '../ui/drawer';
import DrawerDeposit from '../ui/drawer/drawer-deposit';
import DrawerTransfer from '../ui/drawer/drawer-transfer';
import BottomSheetCoinSection from '../ui/bottomsheet/bottom-sheet-coin-section/BottomSheetCoinSection';

// Styled Components
const SectionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(3),
  justifyContent: 'space-around',
}));

const TransactionItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  minWidth: 80,
  cursor: 'pointer',
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.grey[200],
  width: 40,
  height: 40,
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1.5),
}));

const LabelText = styled(Typography)(({ theme }) => ({
  lineHeight: '18px',
  fontSize: '12px',
  color: theme.palette.text.primary,
  fontWeight: 500,
}));

// Types
interface TransactionMenuProps {
  handleChange?: (key: string) => void;
}

interface TransactionItemProps {
  key: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

// Constants

const TransactionMenu: React.FC<TransactionMenuProps> = () => {
  const refTransfer = useRef<DrawerHandle | null>(null);
  const refDeposit = useRef<DrawerHandle | null>(null);
  const refCoinSection = useRef<DrawerHandle | null>(null);
  const transactionItems: TransactionItemProps[] = useMemo(
    () => [
      {
        key: 'deposit',
        label: 'Deposit',
        icon: <DepositIcon />,
        onClick: () => {
          refDeposit.current?.onOpen();
        },
      },
      { key: 'withdraw', label: 'Withdraw', icon: <WithdrawIcon />, onClick: () => {} },
      {
        key: 'buy',
        label: 'Buy',
        icon: <BuyIcon />,
        onClick: () => refCoinSection.current?.onOpen(),
      },
      {
        key: 'transfer',
        label: 'Transfer',
        icon: <TransferIcon />,
        onClick: () => {
          refTransfer.current?.onOpen();
        },
      },
    ],
    [],
  );
  return (
    <SectionContainer>
      {transactionItems.map((e, index) => (
        <TransactionItem onClick={e.onClick} key={index}>
          <IconBox>{e.icon}</IconBox>
          <LabelText>{e.label}</LabelText>
        </TransactionItem>
      ))}
      <DrawerTransfer ref={refTransfer} />
      <DrawerDeposit ref={refDeposit} />
      <BottomSheetCoinSection ref={refCoinSection} />
    </SectionContainer>
  );
};

export default TransactionMenu;
