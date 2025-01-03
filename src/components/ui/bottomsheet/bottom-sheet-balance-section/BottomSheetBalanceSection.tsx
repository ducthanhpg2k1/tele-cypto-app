import { Dialog, DialogContent, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { DrawerHandle } from 'src/components/ui/drawer';
import DrawerDeposit from '../../drawer/drawer-deposit';
import DrawerTransfer from '../../drawer/drawer-transfer';
import DepositView from './DepositView';
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

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
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          '& .MuiDialog-container': {
            alignItems: 'flex-end',
          },
          '& .MuiDialog-paper': {
            width: '100%',
            margin: 0,
            maxWidth: 'none',
            borderRadius: '20px 20px 0 0',
          },
          '& .MuiDialogContent-root': {
            padding: 0,
          },
        }}
      >
        <DialogContent>
          <DepositView onAction={onAction} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default forwardRef(BottomSheetBalanceSection);
