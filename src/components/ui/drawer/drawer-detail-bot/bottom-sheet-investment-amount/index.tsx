import { Dialog, DialogContent, IconButton, Slide, Stack, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import Image from 'next/image';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SlideRanger from 'src/components/ui/slide-ranger/SlideRanger';
import CardInformation from './CardInformation';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const BottomSheetInvestmentAmount = (_: any, ref: any) => {
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
      <DialogContent className='min-h-[65dvh]'>
        <div className='flex flex-col gap-4 py-6 px-4'>
          <Typography variant='subtitle2' color={'#212121'} fontWeight={600}>
            {t('bot.titleAmount')}
          </Typography>
          <CardAmount value='>=5,633' />
          <div className='flex items-center gap-1'>
            <Typography className='text-xs underline' color={'#9E9E9E'} fontWeight={400}>
              {t('bot.disponible')}
            </Typography>
            <div className='flex items-center gap-[4px]'>
              <Typography className='text-xs' color={'#212121'} fontWeight={400}>
                0 USDT
              </Typography>
              <IconButton size='small'>
                <Image alt='' width={20} height={20} src={'assets/iconly/ic-add-blue.svg'} />
              </IconButton>
            </div>
          </div>
          <SlideRanger min={0} max={100} step={1} />
          <CardInformation handleCopy={() => handleClose()} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default forwardRef(BottomSheetInvestmentAmount);

const CardAmount = ({ value }: { value: string }) => {
  return (
    <div className='flex px-3 justify-between items-center bg-[#F5F5F5] rounded-lg w-full h-[48px]'>
      <Typography variant='subtitle2' color={'#757575'} fontWeight={500}>
        {value}
      </Typography>
      <Typography variant='subtitle2' color={'#212121'} fontWeight={600}>
        USDT
      </Typography>
    </div>
  );
};
