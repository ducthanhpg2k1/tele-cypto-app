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


const DATA_TRADING = [
  {
    id: 1,
    title: '1000CAT/BNB',

  },
  {
    id: 2,
    title: '1000CAT/TRY',

  },
  {
    id: 3,
    title: '1000CAT/TRY',

  },
  {
    id: 4,
    title: '1000CAT/TRY',
  },
  {
    id: 5,
    title: '1000CAT/TRY',
  },
  {
    id: 6,
    title: '1000CAT/TRY',
  },
  {
    id: 7,
    title: '1000CAT/TRY',
  },
  {
    id: 8,
    title: '1000CAT/TRY',
  },
  {
    id: 9,
    title: '1000CAT/TRY',
  },
  {
    id: 10,
    title: '1000CAT/TRY',
  },

]

const ModalTradingPair = (props: any, ref: any) => {
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
          <div className='flex justify-between items-center gap-4'>
            <InputSearch placeholder='Search' />
            <Typography className='text-xs' color={'#177DFF'} fontWeight={500}>
              {t('bot.cancel_new')}
            </Typography>
          </div>
          <Typography className='text-xs' color={'#9E9E9E'} fontWeight={400}>
            {t('bot.list_transaction')}
          </Typography>
          <Typography variant='body2' color={'#212121'} fontWeight={500}>
            {t('bot.tabs.all')}

          </Typography>
          {
            DATA_TRADING?.map((item) => {
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

export default forwardRef(ModalTradingPair);

