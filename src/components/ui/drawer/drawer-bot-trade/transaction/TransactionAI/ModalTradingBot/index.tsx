import { Dialog, DialogContent, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import Image from 'next/image';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useTranslation } from 'react-i18next';
import BottomSheetCustom from 'src/components/ui/bottom-sheet-custom';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const ModalTradingBot = (_: any, ref: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const DATA_BOT_TRADING = [
    {
      id: 1,
      title: t('bot.gridSpot'),
      des: t('bot.desSpot'),
      icon: '/images/ic-spot.png',
    },
    {
      id: 2,
      title: t('bot.gridFuture'),
      des: t('bot.desFuture'),
      icon: '/images/ic-grid.png',
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
    <BottomSheetCustom isOpen={open} onClose={handleClose}>
      <div className='flex flex-col gap-6 pb-6 px-4'>
        <Typography variant='body1' color={'#212121'} fontWeight={600}>
          Danh sách bot giao dịch
        </Typography>
        <div className='flex flex-col gap-4'>
          {DATA_BOT_TRADING?.map((item) => {
            return (
              <div
                key={item?.id}
                className='flex items-center gap-3 border rounded-lg p-3 border-solid'
              >
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
            );
          })}
        </div>
      </div>
    </BottomSheetCustom>
  );
};

export default forwardRef(ModalTradingBot);
