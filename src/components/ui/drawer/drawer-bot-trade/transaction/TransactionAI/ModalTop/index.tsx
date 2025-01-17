import { Dialog, DialogContent, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import Image from 'next/image';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
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

const ModalTop = (props: any, ref: any) => {
  const { handleClickTop, value } = props;
  const [open, setOpen] = useState<boolean>(false);

  const { t } = useTranslation();

  const DATA_TOP = [
    {
      id: 1,
      title: t('bot.topToi'),
    },
    {
      id: 2,
      title: t('bot.topPNL'),
    },
    {
      id: 3,
      title: t('bot.top_coppy'),
    },
    {
      id: 4,
      title: t('bot.most_matched'),
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
        {DATA_TOP?.map((item) => {
          return (
            <div
              onClick={() => {
                handleClickTop(item?.title);
                handleClose();
              }}
              key={item?.id}
              className='flex justify-between items-center'
            >
              <Typography variant='body2' color={'#212121'} fontWeight={500}>
                {item?.title}
              </Typography>

              {value === item?.title && <DoneIcon className='w-5 h-5' />}
            </div>
          );
        })}
      </div>
    </BottomSheetCustom>
  );
};

export default forwardRef(ModalTop);
