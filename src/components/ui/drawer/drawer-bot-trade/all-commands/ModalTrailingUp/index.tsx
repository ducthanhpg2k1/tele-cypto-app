import { Dialog, DialogContent, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import Image from 'next/image';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import clsx from 'clsx';
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
    <BottomSheetCustom isOpen={open} onClose={handleClose}>
      <div className='flex flex-col gap-6 pb-6 px-4'>
        <Typography variant='body1' color={'#212121'} fontWeight={600}>
          {t('bot.trailing_up')}
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
    </BottomSheetCustom>
  );
};

export default forwardRef(ModalTrailingUp);
