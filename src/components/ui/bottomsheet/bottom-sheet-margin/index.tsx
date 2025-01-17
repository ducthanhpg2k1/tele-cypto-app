import { Dialog, DialogContent, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import Image from 'next/image';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import InputSearch from '../../input-search/InputSearch';
import { Tabs } from '../../tabs';
import { TabItem } from '../../tabs/types';
import { t } from 'i18next';
import OpenOrders from './OpenOrders';
import CommandHistory from './CommandHistory';
import PositionHistory from './PositionHistory';
import TransactionHistory from './TransactionHistory';
import BottomSheetCustom from '../../bottom-sheet-custom';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const BottomSheetMargin = (props: {}, ref: any) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const tabGrids: TabItem[] = [
    {
      label: t('trade.history.openOrders'),
      key: 'openOrders',
      content: <OpenOrders />,
    },
    {
      label: t('trade.history.command_history'),
      key: 'command_history',
      content: <CommandHistory />,
    },
    {
      label: t('trade.history.position_history'),
      key: 'position_history',
      content: <PositionHistory />,
    },
    {
      label: t('trade.history.transaction_history'),
      key: 'transaction_history',
      content: <TransactionHistory />,
    },
  ];

  useImperativeHandle(ref, () => ({
    onOpen: () => {
      setOpen(true);
    },
    onClose: () => {
      handleClose();
    },
  }));

  return (
    // <Dialog
    //   fullWidth
    //   open={open}
    //   onClose={handleClose}
    //   TransitionComponent={Transition}
    //   sx={{
    //     '& .MuiDialog-container': {
    //       alignItems: 'flex-end',
    //     },
    //     '& .MuiDialog-paper': {
    //       width: '100%',
    //       margin: 0,
    //       height: '90dvh',
    //       maxWidth: 'none',
    //       borderRadius: '20px 20px 0 0',
    //     },
    //     '& .MuiDialogContent-root': {
    //       padding: 0,
    //     },
    //   }}
    // >
    //   <DialogContent className='h-max'>
    <BottomSheetCustom isOpen={open} onClose={handleClose}>
      <div className='flex flex-col gap-6 py-6 px-4 h-full'>
        <InputSearch placeholder='Search' />
        <Tabs tabs={tabGrids} />
      </div>
    </BottomSheetCustom>
    //   </DialogContent>
    // </Dialog>
  );
};

export default forwardRef(BottomSheetMargin);
