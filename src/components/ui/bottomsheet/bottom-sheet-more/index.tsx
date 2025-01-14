import { Dialog, DialogContent, Slide, Stack, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { t } from 'i18next';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import {
  IconBotTrade,
  IconCopyTransction,
  IconDeposit,
  IconLovely,
  IconTransferMoney,
} from './Icons';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const BottomSheetMore = (_: any, ref: any) => {
  const [open, setOpen] = useState<boolean>(false);

  const DATA_MORE = [
    {
      id: 1,
      icon: <IconTransferMoney />,
      label: t('trade.transfer_money'),
    },
    {
      id: 2,
      icon: <IconDeposit />,
      label: t('trade.deposit'),
    },
    {
      id: 3,
      icon: <IconLovely />,
      label: t('trade.lovely'),
    },
    {
      id: 4,
      icon: <IconBotTrade />,
      label: t('trade.bot_trade'),
    },
    {
      id: 51,
      icon: <IconCopyTransction />,
      label: t('trade.copy_transction'),
    },
  ];

  const handleClose = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    onOpen: () => {
      setOpen(true);
    },
    onClose: () => {
      handleClose();
    },
  }));

  return (
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
      <DialogContent className='h-max'>
        <div className='flex flex-col gap-6 py-6 px-3'>
          <Typography variant='body1' color='#212121' fontWeight={600}>
            {t('trade.features')}
          </Typography>

          <div className='grid grid-cols-3 gap-6'>
            {DATA_MORE?.map((item) => {
              return (
                <div key={item?.id} className='flex flex-col items-center gap-3'>
                  <div className='bg-[#F5F5F5] rounded-lg p-1 w-10 h-10 flex justify-center items-center'>
                    {item?.icon}
                  </div>
                  <Typography className='text-[12px] leading-5' color='#212121' fontWeight={500}>
                    {item?.label}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default forwardRef(BottomSheetMore);
