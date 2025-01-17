import { Dialog, DialogContent, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import InputSearch from '../../input-search/InputSearch';
import { Tabs } from '../../tabs';
import { TabItem } from '../../tabs/types';
import { t } from 'i18next';
import OpenOrders from './OpenOrders';
import CommandHistory from './CommandHistory';
import PositionHistory from './PositionHistory';
import TransactionHistory from './TransactionHistory';
import BottomSheetCustom from '../../bottom-sheet-custom';

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
    <BottomSheetCustom className='min-h-[90dvh]' isOpen={open} onClose={handleClose}>
      <div className='flex flex-col gap-1 pb-6 px-4 h-[calc(90dvh-30px)]'>
        <div>
          <InputSearch className='max-h-[34px]' placeholder='Search' />
        </div>
        <Tabs tabs={tabGrids} />
      </div>
    </BottomSheetCustom>
  );
};

export default forwardRef(BottomSheetMargin);
