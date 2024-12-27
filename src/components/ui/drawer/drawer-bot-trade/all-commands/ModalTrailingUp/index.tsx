import { Dialog, DialogContent, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import Image from 'next/image';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import clsx from 'clsx';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const DATA_SURF = [
  {
    id: 1,
    title: 'Tất cả',
  },
  {
    id: 2,
    title: 'Đã bật',
  },
  {
    id: 3,
    title: 'Vô hiệu hoá',
  },
];

const ModalTrailingUp = (props: any, ref: any) => {
  const { handleClick, value } = props;
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
            Trailing Up
          </Typography>
          <div className='grid grid-cols-2 gap-y-4 gap-x-3'>
            {DATA_SURF?.map((item) => {
              return (
                <div
                  key={item?.id}
                  onClick={() => {
                    handleClick(item?.title);
                    handleClose();
                  }}
                  style={{
                    background: item?.title === value ? '#E8F2FF' : '#F5F5F5',
                  }}
                  className={clsx('w-full min-h-9 rounded-md flex justify-center items-center')}
                >
                  <Typography
                    className='text-xs'
                    color={item?.title === value ? '#177DFF' : '#212121'}
                    fontWeight={400}
                  >
                    {item?.title}
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

export default forwardRef(ModalTrailingUp);
