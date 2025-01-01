import { Dialog, DialogContent, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import Image from 'next/image';
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import clsx from 'clsx';
import Button from 'src/components/ui/button';
import { t } from 'i18next';
import CustomPickerWheel from 'src/components/ui/picker-wheel';

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
    title: '1 Tháng',
  },
  {
    id: 2,
    title: '1 Tuần',
  },
  {
    id: 3,
    title: '1 Tháng',
  },
  {
    id: 4,
    title: '3 Tháng',
  },
];



const CustomScrollDatePicker = () => {
  const [day, setDay] = useState('5');
  const [month, setMonth] = useState('Tháng 5');
  const [year, setYear] = useState('2024');

  const days = Array.from({ length: 31 }, (_, i) => `${i + 1}`);
  const months = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ];
  const years = Array.from({ length: 50 }, (_, i) => `${2020 + i}`);

  return (
    <div className='flex justify-center items-center'>
      <CustomPickerWheel />
      {/* <CustomPickerWheel items={months} selectedItem={month} onSelect={setMonth} />
      <CustomPickerWheel items={years} selectedItem={year} onSelect={setYear} /> */}
    </div>
  );
};

const ModalFilter = (props: any, ref: any) => {
  const {} = props;
  const [open, setOpen] = useState<boolean>(false);
  const [valueFilter, setValueFilter] = useState(1);
  const [activeDate, setActiveDate] = useState(2);

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
            Bộ lọc
          </Typography>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
              <Typography className='text-xs' color={'#9E9E9E'} fontWeight={400}>
                Ngày
              </Typography>
              <div className='grid grid-cols-4 gap-3'>
                {DATA_SURF?.map((item) => {
                  return (
                    <div
                      key={item?.id}
                      onClick={() => {
                        setValueFilter(item?.id);
                      }}
                      style={{
                        background: item?.id === valueFilter ? '#E8F2FF' : '#F5F5F5',
                      }}
                      className={clsx('w-full min-h-9 rounded-md flex justify-center items-center')}
                    >
                      <Typography
                        className='text-xs'
                        color={item?.id === valueFilter ? '#177DFF' : '#212121'}
                        fontWeight={400}
                      >
                        {item?.title}
                      </Typography>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='flex justify-between items-center gap-3'>
              <div
                onClick={() => {
                  setActiveDate(1);
                }}
                style={{
                  background: activeDate === 1 ? '#E8F2FF' : '#F5F5F5',
                }}
                className={clsx('w-full min-h-9 rounded-md flex justify-center items-center')}
              >
                <Typography
                  className='text-xs'
                  color={activeDate === 1 ? '#177DFF' : '#212121'}
                  fontWeight={400}
                >
                  28-12-2024
                </Typography>
              </div>
              <Typography className='text-xs' color={'#757575'} fontWeight={400}>
                đến
              </Typography>
              <div
                onClick={() => {
                  setActiveDate(2);
                }}
                style={{
                  background: activeDate === 2 ? '#E8F2FF' : '#F5F5F5',
                }}
                className={clsx('w-full min-h-9 rounded-md flex justify-center items-center')}
              >
                <Typography
                  className='text-xs'
                  color={activeDate === 2 ? '#177DFF' : '#212121'}
                  fontWeight={400}
                >
                  20-2-2025
                </Typography>
              </div>
            </div>
            <CustomScrollDatePicker />
          </div>

          <div className='flex gap-0.5'>
            <Typography className='text-xs' color={'#9E9E9E'} fontWeight={400}>
              *
            </Typography>
            <Typography className='text-xs' color={'#9E9E9E'} fontWeight={400}>
              {t('bot.no_sup')}
            </Typography>
          </div>

          <div className='flex items-center gap-4'>
            <Button onClick={handleClose} fullWidth variant='blue' className='h-12 font-semibold'>
              <Typography className='text-[14px]'>Đặt lại</Typography>
            </Button>
            <Button onClick={handleClose} fullWidth className='h-12 font-semibold'>
              <Typography className='text-[14px]'>Xác nhận</Typography>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default forwardRef(ModalFilter);
