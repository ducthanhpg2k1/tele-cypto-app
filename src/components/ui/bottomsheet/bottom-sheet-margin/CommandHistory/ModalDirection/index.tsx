import { Dialog, DialogContent, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import Image from 'next/image';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import InputSearch from 'src/components/ui/input-search/InputSearch';
import { useTranslation } from 'react-i18next';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});


const DATA_DIRECTION = [
  {
    id: 1,
    title: 'Tất cả',

  },
  {
    id: 2,
    title: 'Mua bán',

  },
  {
    id: 3,
    title: 'Bán',

  },
 

]

const ModalDirection = (props: any, ref: any) => {
  const { handleClickTop, value } = props
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation();

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
        <div className='flex flex-col gap-4 py-6 px-4'>
          {
            DATA_DIRECTION?.map((item) => {
              return (
                <div onClick={() => {
                  handleClickTop(item?.title, item?.id)
                  handleClose()
                }} key={item?.id} className='flex justify-between items-center'>
                  <Typography variant='body2' color={'#212121'} fontWeight={500}>
                    {item?.title}
                  </Typography>

                  {
                    value === item?.id && (
                      <DoneIcon className='w-5 h-5' />
                    )
                  }

                </div>
              )
            })
          }

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default forwardRef(ModalDirection);
