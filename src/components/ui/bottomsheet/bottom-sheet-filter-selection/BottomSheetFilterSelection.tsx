import { Dialog, DialogContent, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import Image from 'next/image';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import BottomSheetCustom from '../../bottom-sheet-custom';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const BottomSheetFilterSelection = (
  props: {
    data: { id: number; title: string; value: number }[];
    handleClickTop?: (value: number) => void;
    value: number;
  },
  ref: any,
) => {
  const { handleClickTop, value, data = [] } = props;
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
    <BottomSheetCustom isOpen={open} onClose={handleClose}>
        <div className='flex flex-col gap-6 pb-6 px-4'>
          {data?.map((item: { title: string; id: number; value: number }) => {
            return (
              <div
                onClick={() => {
                  handleClickTop && handleClickTop(item?.value);
                  handleClose();
                }}
                key={item?.id}
                className='flex justify-between items-center'
              >
                <Typography variant='body2' color={'#212121'} fontWeight={500}>
                  {item?.title}
                </Typography>

                {value === item?.value && <DoneIcon className='w-5 h-5' />}
              </div>
            );
          })}
        </div>
    </BottomSheetCustom>
  );
};

export default forwardRef(BottomSheetFilterSelection);
