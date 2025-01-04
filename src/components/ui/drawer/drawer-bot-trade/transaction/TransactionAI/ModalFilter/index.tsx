import { Dialog, DialogContent, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import clsx from 'clsx';
import Image from 'next/image';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'src/components/ui/button';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});


const dataUptime = ["Tất cả", "< 1 Ngày", "1-7 Ngày", "7-30 Ngày", "30 Ngày"];
const dataROI = ["Tất cả", ">100%", "50% -100%", "10% -50%", "0% -10%"];


const ModalFilter = (_: any, ref: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation()

  const [active, setActive] = useState(t('bot.tabs.all'));
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
          <Typography variant='body1' color={'#212121'} fontWeight={600}>
            {t('bot.filter')}
          </Typography>
          <div className='flex flex-col gap-3'>
            <Typography className='text-xs' color={'#9E9E9E'} fontWeight={600}>
              {t('bot.uptime')}
            </Typography>
            <div className="flex gap-2" style={{
              flexWrap: 'wrap'
            }}>
              {dataUptime.map((option) => (
                <div
                  key={option}
                  style={{
                    minHeight: '28px'
                  }}
                  className={clsx(
                    'px-1 py-0.5  flex justify-center items-center rounded-md bg-[#F5F5F5]',
                    {
                      'bg-[#E8F2FF]': option === active,
                    },
                  )}
                  onClick={() => setActive(option)}
                >

                  <Typography className='text-xs' color={option === active ? '#177DFF' : '#212121'} fontWeight={400}>
                    {option}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <Typography className='text-xs' color={'#9E9E9E'} fontWeight={600}>
              {t('bot.card.roi')}

            </Typography>
            <div className="flex gap-2" style={{
              flexWrap: 'wrap'
            }}>
              {dataROI.map((option) => (
                <div
                  key={option}
                  style={{
                    minHeight: '28px'
                  }}
                  className={clsx(
                    'px-1 py-0.5  flex justify-center items-center rounded-md bg-[#F5F5F5]',
                    {
                      'bg-[#E8F2FF]': option === active,
                    },
                  )}
                  onClick={() => setActive(option)}
                >

                  <Typography className='text-xs' color={option === active ? '#177DFF' : '#212121'} fontWeight={400}>
                    {option}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <Button
              onClick={handleClose}
              fullWidth
              variant='blue'
              className='h-12 font-semibold'
            >
              <Typography className='text-[14px]'>{t('bot.reset')}</Typography>
            </Button>
            <Button
              onClick={handleClose}
              fullWidth
              className='h-12 font-semibold'
            >
              <Typography className='text-[14px]'>{t('bot.save')}</Typography>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default forwardRef(ModalFilter);

