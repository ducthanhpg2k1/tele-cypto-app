import { TagAction } from 'src/components/ui/drawer/drawer-bot-trade/transaction/TransactionAI/Popular';
import { useRef, useState } from 'react';
import { t } from 'i18next';

import { Button, Typography } from '@mui/material';
import clsx from 'clsx';
import ModalDirection from '../CommandHistory/ModalDirection';
import ModalTradingPair from '../CommandHistory/ModalTradingPair';
import ModalFilter from '../CommandHistory/ModalFilter';

const TransactionHistory = () => {
  const [valueTradingPair, setValueTopTradingPair] = useState<any>({
    title: '',
    id: 0,
  });
  const [valueDirection, setValueDirection] = useState<any>({
    title: '',
    id: 0,
  });
  const refModalDirection: any = useRef();

  const refModalTradingPair: any = useRef();
  const refModalFilter: any = useRef();

  return (
    <div className='mt-4 flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-1'>
          <TagAction
            handleClick={() => refModalTradingPair.current.onOpen()}
            label={valueTradingPair?.title || t('bot.bag')}
          />
          <TagAction
            handleClick={() => refModalDirection.current.onOpen()}
            label={valueDirection?.title || t('trade.direction')}
          />
        </div>
        <div onClick={() => refModalFilter.current.onOpen()}>
          <IconFilterNew />
        </div>
      </div>
      <div className='flex flex-col gap-4 border-b border-b-[#EEEEEE] pb-3'>
        <div className='flex justify-between items-start'>
          <div className='flex flex-col gap-0.5'>
            <Typography className='text-[14px] text-[#212121] leading-5' fontWeight={600}>
              TON/USDT
            </Typography>

            <Typography
              className={clsx('text-[10px] text-[#4AAF57] leading-3', {})}
              fontWeight={400}
            >
              Mua
            </Typography>
          </div>

          <Typography className='text-[12px] text-[#9E9E9E] leading-5' fontWeight={400}>
            12-12-2025
          </Typography>
        </div>
        <div className='flex flex-col gap-[6px]'>
          <div className='flex items-center justify-between'>
            <Typography className='text-[12px] text-[#9E9E9E] leading-5' fontWeight={400}>
              {t('trade.order_number')}
            </Typography>
            <div className='flex items-center gap-0.5'>
              <Typography className='text-[12px] text-[#212121] leading-5' fontWeight={500}>
                1762884
              </Typography>
              <IconCoppy />
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <Typography className='text-[12px] text-[#9E9E9E] leading-5' fontWeight={400}>
              {t('trade.price_usdt')}
            </Typography>
            <Typography className='text-[12px] text-[#212121] leading-5' fontWeight={500}>
              0/5
            </Typography>
          </div>
          <div className='flex items-center justify-between'>
            <Typography className='text-[12px] text-[#9E9E9E] leading-5' fontWeight={400}>
              {t('trade.matched_hmstr')}
            </Typography>
            <Typography className='text-[12px] text-[#212121] leading-5' fontWeight={500}>
              2382
            </Typography>
          </div>
          <div className='flex items-center justify-between'>
            <Typography className='text-[12px] text-[#9E9E9E] leading-5' fontWeight={400}>
              {t('trade.role')}
            </Typography>
            <Typography className='text-[12px] text-[#212121] leading-5' fontWeight={500}>
              Maker
            </Typography>
          </div>
          <div className='flex items-center justify-between'>
            <Typography className='text-[12px] text-[#9E9E9E] leading-5' fontWeight={400}>
              {t('trade.fee_hmstr')}
            </Typography>
            <Typography className='text-[12px] text-[#212121] leading-5' fontWeight={500}>
              2382
            </Typography>
          </div>
          <div className='flex items-center justify-between'>
            <Typography className='text-[12px] text-[#9E9E9E] leading-5' fontWeight={400}>
              {t('trade.total_usdt')}
            </Typography>
            <Typography className='text-[12px] text-[#212121] leading-5' fontWeight={500}>
              210,382
            </Typography>
          </div>
          <div className='flex items-center justify-between'>
            <Typography className='text-[12px] text-[#9E9E9E] leading-5' fontWeight={400}>
              {t('trade.total_usdt')}
            </Typography>
            <Typography className='text-[12px] text-[#212121] leading-5' fontWeight={500}>
              238,25
            </Typography>
          </div>
        </div>
      </div>
      <ModalDirection
        value={valueDirection?.id}
        handleClickTop={(title: string, id: number) =>
          setValueDirection({
            title,
            id,
          })
        }
        ref={refModalDirection}
      />
      <ModalTradingPair
        value={valueTradingPair?.id}
        handleClickTop={(title: string, id: number) =>
          setValueTopTradingPair({
            title,
            id,
          })
        }
        ref={refModalTradingPair}
      />
      <ModalFilter ref={refModalFilter} />
    </div>
  );
};
export default TransactionHistory;

const IconFilterNew = () => {
  return (
    <svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M2.80719 0.500002C5.26936 0.500306 7.73152 0.500003 10.1937 0.500002C10.404 0.499977 10.6088 0.499953 10.7823 0.514125C10.9728 0.529689 11.1976 0.566412 11.4238 0.68166C11.7374 0.841449 11.9923 1.09642 12.1521 1.41002C12.2674 1.63621 12.3041 1.86099 12.3197 2.05148C12.3338 2.22495 12.3338 2.42978 12.3338 2.6401L12.3338 4.19896C12.3338 4.33893 12.3377 4.52446 12.2997 4.70942C12.2696 4.85653 12.2196 4.99888 12.1513 5.13261C12.0726 5.28668 11.9661 5.41916 11.8816 5.52434C10.9182 6.72284 9.93633 7.90724 9.00192 9.12864C9.00192 9.12864 9.00044 11.1564 9.00044 12.1667C9.00044 12.429 8.87695 12.676 8.66711 12.8333L5.33377 15.3333C5.08126 15.5227 4.74342 15.5532 4.4611 15.412C4.17878 15.2709 4.00044 14.9823 4.00044 14.6667C4.00044 12.8253 3.99897 9.12864 3.99897 9.12864C3.03932 7.92704 2.08271 6.72293 1.11931 5.52433C1.03477 5.41915 0.928293 5.28668 0.849582 5.13261C0.781261 4.99888 0.731328 4.85653 0.701137 4.70942C0.666354 4.53995 0.666743 4.36998 0.667052 4.23504C0.668269 3.70339 0.667171 3.1707 0.667106 2.64009C0.667081 2.42977 0.667056 2.22494 0.681229 2.05148C0.696793 1.86099 0.733516 1.63621 0.848764 1.41002C1.00855 1.09642 1.26352 0.841449 1.57712 0.68166C1.80331 0.566412 2.02809 0.529689 2.21858 0.514125C2.39205 0.499953 2.59687 0.499977 2.80719 0.500002ZM14.0004 3C14.0004 2.53977 14.3735 2.16667 14.8338 2.16667H16.5004C16.9607 2.16667 17.3338 2.53977 17.3338 3C17.3338 3.46024 16.9607 3.83334 16.5004 3.83334H14.8338C14.3735 3.83334 14.0004 3.46024 14.0004 3ZM11.5004 8C11.5004 7.53977 11.8735 7.16667 12.3338 7.16667H16.5004C16.9607 7.16667 17.3338 7.53977 17.3338 8C17.3338 8.46024 16.9607 8.83334 16.5004 8.83334H12.3338C11.8735 8.83334 11.5004 8.46024 11.5004 8ZM11.5004 13C11.5004 12.5398 11.8735 12.1667 12.3338 12.1667H16.5004C16.9607 12.1667 17.3338 12.5398 17.3338 13C17.3338 13.4602 16.9607 13.8333 16.5004 13.8333H12.3338C11.8735 13.8333 11.5004 13.4602 11.5004 13Z'
        fill='#424242'
      />
    </svg>
  );
};

const IconCoppy = () => {
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M11.625 1.5H9.975C8.71488 1.5 8.08482 1.5 7.60352 1.74524C7.18016 1.96095 6.83595 2.30516 6.62024 2.72852C6.375 3.20982 6.375 3.83988 6.375 5.1V9.15C6.375 10.4101 6.375 11.0402 6.62024 11.5215C6.83595 11.9448 7.18016 12.2891 7.60352 12.5048C8.08482 12.75 8.71488 12.75 9.975 12.75H11.775C13.0351 12.75 13.6652 12.75 14.1465 12.5048C14.5698 12.2891 14.914 11.9448 15.1298 11.5215C15.375 11.0402 15.375 10.4101 15.375 9.15V5.25L11.625 1.5ZM11.475 6C11.265 6 11.16 6 11.0798 5.95913C11.0092 5.92317 10.9518 5.86581 10.9159 5.79525C10.875 5.71503 10.875 5.61002 10.875 5.4V2.625L14.25 6H11.475Z'
        fill='#177DFF'
      />
      <path
        d='M5.625 5.25H4.875C3.63236 5.25 2.625 6.25736 2.625 7.5V14.25C2.625 15.4926 3.63236 16.5 4.875 16.5H9.375C10.6176 16.5 11.625 15.4926 11.625 14.25V13.5H10.425C8.74484 13.5 7.90476 13.5 7.26303 13.173C6.69854 12.8854 6.2396 12.4265 5.95198 11.862C5.625 11.2202 5.625 10.3802 5.625 8.7V5.25Z'
        fill='#177DFF'
      />
    </svg>
  );
};