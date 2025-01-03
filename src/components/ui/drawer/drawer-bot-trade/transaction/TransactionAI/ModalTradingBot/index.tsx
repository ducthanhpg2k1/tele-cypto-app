import { Dialog, DialogContent, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import Image from 'next/image';
import React, { forwardRef, useImperativeHandle, useState } from 'react';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});


const DATA_BOT_TRADING = [
  {
    id: 1,
    title: 'Lưới Spot',
    des: 'Mua thấp và bán cao. Khả năng sử dụng 24/7',
    icon: '/images/ic-spot.png'
  },
  {
    id: 2,
    title: 'Lưới Hợp đồng tương lai',
    des: 'Tự động hoá lệnh long và short của bạn',
    icon: '/images/ic-grid.png'

  }
]

const ModalTradingBot = (_: any, ref: any) => {
  const [open, setOpen] = useState<boolean>(false);

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
        <div className='flex flex-col gap-6 py-6 px-4'>
          <Typography variant='body1' color={'#212121'} fontWeight={600}>
            Danh sách bot giao dịch
          </Typography>
          <div className='flex flex-col gap-4'>
            {
              DATA_BOT_TRADING?.map((item) => {
                return (
                  <div key={item?.id} className='flex items-center gap-3 border rounded-lg p-3 border-solid'>
                    <Image src={item?.icon} alt='' width={20} height={20} />
                    <div className='flex flex-col gap-0.5'>
                      <Typography variant='body2' color={'#212121'} fontWeight={600}>
                        {item?.title}
                      </Typography>
                      <Typography className='text-xs' color={'#9E9E9E'} fontWeight={400}>
                        {item?.des}
                      </Typography>
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default forwardRef(ModalTradingBot);

