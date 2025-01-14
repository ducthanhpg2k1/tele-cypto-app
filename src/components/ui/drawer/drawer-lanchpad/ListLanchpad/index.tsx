import { Typography } from '@mui/material';
import clsx from 'clsx';
import { t } from 'i18next';
import Image from 'next/image';
import React, { ReactNode, useRef } from 'react';
import IconDate from 'src/assets/icons/IconDate';
import IconTime from 'src/assets/icons/IconTime';
import IconTimeMain from 'src/assets/icons/IconTimeMain';
import ProgressBar from 'src/components/ui/progress-bar';
import DrawerDetailAcademy from '../../drawer-detail-academy';

const DATA_TOTAL_TOKEN = [
  {
    id: 1,
    label: 'Total token',
    value: '1,000,000 Tele',
  },
  {
    label: 'Price',
    id: 2,
    value: '0,0001 $',
  },
  {
    id: 3,
    label: 'Mã blockchain',
    value: 'BNB',
  },
];

const DATA_TIME = [
  {
    id: 1,
    icon: <IconTimeMain />,
  },
  {
    id: 2,
    value: '00',
    label: 'DAY',
  },
  {
    id: 3,
    value: '06',
    label: 'HRS',
  },
  {
    id: 4,
    value: '01',
    label: 'MINS',
  },
  {
    id: 5,
    value: '47',
    label: 'SEC',
  },
];

const ListLanchpad = () => {
  const renderTextTag = (index: number) => {
    let text: string = '';
    if (index === 0) {
      text = t('lanchpad.going_on');
    }
    if (index === 1) {
      text = t('lanchpad.coming_soon');
    }
    if (index === 2) {
      text = t('lanchpad.ended');
    }
    return text;
  };
  const renderBgTag = (index: number) => {
    let color: string = '';
    if (index === 0) {
      color = '#06C14914';
    }
    if (index === 1) {
      color = '#FF980014';
    }
    if (index === 2) {
      color = '#EEEEEE';
    }
    return color;
  };
  const renderColorTag = (index: number) => {
    let color: string = '';
    if (index === 0) {
      color = '#4AAF57';
    }
    if (index === 1) {
      color = '#FF5726';
    }
    if (index === 2) {
      color = '#212121';
    }
    return color;
  };

  const refDetailAcademy: any = useRef();
  return (
    <div className='flex flex-col gap-4'>
      {[...Array(3)].map((_, index) => {
        return (
          <div
            onClick={() => refDetailAcademy.current.onOpen()}
            className={clsx('flex flex-col gap-4 pb-4 border-b border-b-[#EEEEEE]', {
              'border-b-0': index === 2,
            })}
          >
            <div className='flex items-center gap-3'>
              <Image
                src={'/images/img-lanchpad.png'}
                className='w-9 h-9 rounded-full'
                width={36}
                height={36}
                alt=''
              />
              <div className='flex items-start gap-1'>
                <div className='flex flex-col gap-[2px]'>
                  <Typography variant='body1' fontWeight={600} className='text-[#212121]'>
                    1000PEPPER
                  </Typography>
                  <Typography className='font-normal text-[12px] text-[#757575] leading-5'>
                    PEPPER
                  </Typography>
                </div>
                <div
                  style={{
                    background: renderBgTag(index),
                  }}
                  className={clsx('rounded py-[2px] px-1 flex justify-center items-center')}
                >
                  <Typography
                    fontWeight={400}
                    style={{
                      color: renderColorTag(index),
                    }}
                    className={clsx('text-[12px] leading-5', {})}
                  >
                    {renderTextTag(index)}
                  </Typography>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <ItemLanchpad
                icon={<IconDate />}
                label={t('lanchpad.start_date')}
                value='02/10/2024'
              />
              <ItemLanchpad icon={<IconTime />} label={t('lanchpad.end_date')} value='02/10/2025' />
            </div>
            <div className='grid grid-cols-3 gap-3'>
              {DATA_TOTAL_TOKEN?.map((item) => {
                return (
                  <div
                    key={item?.id}
                    className='border border-[#EEEEEE] p-1 rounded-md flex flex-col gap-0.5'
                  >
                    <Typography fontWeight={400} className='text-[#616161] text-[12px] leading-5'>
                      {item?.label}
                    </Typography>
                    <Typography fontWeight={600} className='text-[#177DFF] text-[12px] leading-5'>
                      {item.value}
                    </Typography>
                  </div>
                );
              })}
            </div>
            {index === 0 && (
              <div className='flex items-center gap-1'>
                <ProgressBar />
                <div className='w-[100px]'>
                  <Typography fontWeight={600} className='text-[#177DFF] text-[12px] leading-5'>
                    40% đã bán
                  </Typography>
                </div>
              </div>
            )}
            {index === 1 && (
              <div className='grid grid-cols-5 items-center gap-6'>
                {DATA_TIME?.map((item) => {
                  return (
                    <div key={item?.id}>
                      {item?.id === 1 ? (
                        <>{item?.icon}</>
                      ) : (
                        <div className='flex items-center gap-0.5'>
                          <Typography variant='body1' fontWeight={700} className='text-[#212121]'>
                            {item?.value}
                          </Typography>
                          <Typography variant='body2' fontWeight={400} className='text-[#424242]'>
                            {item?.label}
                          </Typography>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      <DrawerDetailAcademy ref={refDetailAcademy} />
    </div>
  );
};
export default ListLanchpad;

const ItemLanchpad = ({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        {icon}
        <Typography fontWeight={400} className='text-[#757575] text-[12px] leading-5'>
          {label}
        </Typography>
      </div>
      <Typography fontWeight={500} className='text-[#212121] text-[12px] leading-5'>
        {value}
      </Typography>
    </div>
  );
};
