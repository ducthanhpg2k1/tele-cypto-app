import { Dialog, DialogContent, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import Image from 'next/image';
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import clsx from 'clsx';
import Button from 'src/components/ui/button';
import { t } from 'i18next';
import CustomPickerWheel from 'src/components/ui/picker-wheel';
import dayjs from 'dayjs';
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

const ModalFilter = (props: any, ref: any) => {
  const {} = props;
  const [open, setOpen] = useState<boolean>(false);
  const [valueFilter, setValueFilter] = useState(1);
  const [activeDate, setActiveDate] = useState(2);

  const [valueDateOne, setValueDateOne] = useState(new Date());
  const [valueDateTwo, setValueDateTwo] = useState(new Date());
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

  const handleDateChange = (newDate: Date) => {
    if (activeDate === 1) {
      setValueDateOne(newDate);
    } else {
      setValueDateTwo(newDate);
    }
  };
  return (
    <BottomSheetCustom isOpen={open} onClose={handleClose}>
      <div className='flex flex-col gap-6 pb-6 px-4'>
        <Typography variant='body1' color={'#212121'} fontWeight={600}>
          {t('bot.filter')}
        </Typography>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-3'>
            <Typography className='text-xs' color={'#9E9E9E'} fontWeight={400}>
              {t('bot.day_new')}
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
                {dayjs(valueDateOne).format('DD-MM-YYYY')}
              </Typography>
            </div>
            <Typography className='text-xs' color={'#757575'} fontWeight={400}>
              {t('bot.to')}
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
                {dayjs(valueDateTwo).format('DD-MM-YYYY')}
              </Typography>
            </div>
          </div>
          <CustomPickerWheel
            value={activeDate === 1 ? valueDateOne : valueDateTwo}
            handleDateChange={handleDateChange}
          />
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
            <Typography className='text-[14px]'>{t('bot.reset')}</Typography>
          </Button>
          <Button onClick={handleClose} fullWidth className='h-12 font-semibold'>
            <Typography className='text-[14px]'>{t('bot.save')}</Typography>
          </Button>
        </div>
      </div>
    </BottomSheetCustom>
  );
};

export default forwardRef(ModalFilter);
