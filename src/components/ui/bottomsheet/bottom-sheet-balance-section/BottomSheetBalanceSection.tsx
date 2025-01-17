import { Dialog, DialogContent, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { DrawerHandle } from 'src/components/ui/drawer';
import DrawerDeposit from '../../drawer/drawer-deposit';
import DrawerTransfer from '../../drawer/drawer-transfer';
import DepositView from './DepositView';
import BottomSheetCustom from '../../bottom-sheet-custom';


const BottomSheetBalanceSection = (_: any, ref: any) => {
  const refTransfer = React.useRef<DrawerHandle | null>(null);
  const refDeposit = React.useRef<DrawerHandle | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => {
    return {
      onOpen: () => {
        setOpen(true);
      },
      onClose: () => {
        handleClose();
      },
    };
  });

  const onAction = (type: string) => {
    setOpen(false);
    if (type === 'DEPOSIT') {
      refDeposit.current?.onOpen();
      return;
    }
    refTransfer.current?.onOpen();
  };
  return (
    <>
      <DrawerDeposit ref={refDeposit} />
      <DrawerTransfer ref={refTransfer} />
      <BottomSheetCustom isOpen={open} onClose={handleClose}>
        <DepositView onAction={onAction} />
      </BottomSheetCustom>
    </>
  );
};

export default forwardRef(BottomSheetBalanceSection);
