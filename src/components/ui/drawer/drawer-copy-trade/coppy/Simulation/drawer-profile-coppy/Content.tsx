import { Divider, Typography } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { TagAction } from 'src/components/ui/drawer/drawer-bot-trade/transaction/TransactionAI/Popular';
import ChartLineProfile from './ChartLineProfile';
import ChartPieProfile from './ChartPieProfile';
import { Tabs } from 'src/components/ui/tabs';
import { TabItem } from 'src/components/ui/tabs/types';
import { NoData } from '../..';
import Button from 'src/components/ui/button';
import { useTranslation } from 'react-i18next';


const Content = () => {
  const { t } = useTranslation()

  const DATA_PROFILE = [
    {
      id: 1,
      label: t('copyTrade.high_leverage')
    }, {
      id: 2,
      label: t('copyTrade.highest_performance')
    },
    {
      id: 3,
      label: t('copyTrade.money_maker')
    }
  ]

  const tabGrids: TabItem[] = [
    {
      label: t('copyTrade.position'),
      key: 'copyTrade.tabs.public',
      // content: <PublicContract type={type}/>,
    },
    {
      label: t('copyTrade.transaction_history'),
      key: 'copyTrade.tabs.private',
      // content: <PublicContract type={type}/>,
    },
    {
      label: t('copyTrade.position_history'),
      key: 'copyTrade.tabs.favorites',
      // content: <PublicContract type={type}/>,
    },
    {
      label: t('copyTrade.balance_history'),
      key: 'copyTrade.tabs.favorites',
      // content: <PublicContract type={type}/>,
    },

  ];

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <div className='flex justify-between'>
          <Image alt='' width={48} height={48} className='rounded-lg' src={'/images/img-avatar.png'} />
          <div className='border-2 max-h-5 border-[#EEEEEE] rounded py-0.5 px-1 flex items-center gap-1'>
            <IconStar />
            <Typography color={'#757575'} fontWeight={400} className='text-[10px] leading-3'>110</Typography>
          </div>
        </div>
        <div className='flex flex-col gap-0.5'>
          <div className='flex items-center gap-1'>
            <Typography color={'#212121'} fontWeight={600} variant='body1'>Master Chef</Typography>
            <div className='bg-[#F5F5F5] rounded py-0.5 px-1 flex items-center gap-0.5 w-max'>
              <Image src={'/assets/iconly/ic-lock.svg'} width={18} height={18} alt='' />
              <Typography color={'#212121'} fontWeight={500} className='text-[10px] leading-3'>{t('copyTrade.private')}</Typography>

            </div>
          </div>
          <Typography color={'#757575'} fontWeight={600} className='text-[10px] leading-3'>I am a trader. Thank you for watching</Typography>

        </div>
      </div>

      <div>
        <div className='bg-[#F5F5F5] w-max rounded-full text-[10px] text-[#212121] leading-3 py-[2px] px-0.5 flex justify-center items-center'>
          {t('copyTrade.private')}
        </div>

        <div className='flex flex-col gap-1 justify-center w-max items-center'>
          <Typography color={'#212121'} fontWeight={600} variant='body2'>{t('copyTrade.futures')}</Typography>
          <div className='bg-[#177DFF] w-8 h-0.5 rounded-full' />
        </div>
      </div>
      <div className='flex items-center gap-1'>
        {DATA_PROFILE?.map((item) => {
          return (
            <div
              className={clsx(
                'py-0.5 px-[6px] flex justify-center rounded items-center bg-[#F5F5F5]',
                {
                  'bg-[#FFF5F5]': item?.id === 1,
                },
              )}
              key={item?.id} >
              <Typography className='text-[10px] leading-3' color={item?.id === 1 ? '#F54336' : '#212121'} fontWeight={400}>
                {item?.label}
              </Typography>
            </div>
          )
        })}
      </div>
      <div className='grid grid-cols-4 gap-1'>
        <div className='flex flex-col gap-0.5'>
          <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
            {t('copyTrade.number_of_days')}
          </Typography>
          <Typography className='text-[12px] leading-3' color={'#212121'} fontWeight={500}>
            130
          </Typography>
        </div>
        <div className='flex flex-col gap-0.5'>
          <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
            {t('copyTrade.person_copy')}
          </Typography>
          <Typography className='text-[12px] leading-3' color={'#212121'} fontWeight={500}>
            12/100
          </Typography>
        </div>
        <div className='flex flex-col gap-0.5'>
          <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
            {t('copyTrade.total_person_copy')}
          </Typography>
          <Typography className='text-[12px] leading-3' color={'#212121'} fontWeight={500}>
            19
          </Typography>
        </div>
        <div className='flex flex-col gap-0.5'>
          <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
            {t('copyTrade.category')}
          </Typography>
          <Typography className='text-[12px] leading-3' color={'#212121'} fontWeight={500}>
            1
          </Typography>
        </div>
      </div>
      <Divider variant='fullWidth' />
      <div className='flex flex-col gap-3'>
        <div className='grid grid-cols-2'>
          <div className='flex flex-col gap-0.5'>
            <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
              {t('copyTrade.directional_margin_balance')}

            </Typography>
            <Typography className='text-[12px] leading-3' color={'#212121'} fontWeight={500}>
              220,33
            </Typography>
          </div>
          <div className='flex flex-col gap-0.5'>
            <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
              {`${t('copyTrade.aum')}(USDT)`}
            </Typography>
            <Typography className='text-[12px] leading-3' color={'#212121'} fontWeight={500}>
              220,33
            </Typography>
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <div className='flex flex-col gap-0.5'>
            <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
              {t('copyTrade.directional_margin_balance')}
            </Typography>
            <Typography className='text-[12px] leading-3' color={'#4AAF57'} fontWeight={500}>
              + 220,33
            </Typography>
          </div>
          <div className='flex flex-col gap-0.5'>
            <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
              {t('copyTrade.copy_amount')}
            </Typography>
            <Typography className='text-[12px] leading-3' color={'#212121'} fontWeight={500}>
              10/10
            </Typography>
          </div>

        </div>
        <div className='flex flex-col gap-0.5'>
          <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
            {t('copyTrade.profit_sharing')}
          </Typography>
          <Typography className='text-[12px] leading-3' color={'#212121'} fontWeight={500}>
            0.00%
          </Typography>
        </div>
      </div>

      <div className='mt-4 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-1'>
            <Typography variant='body2' color={'#212121'} fontWeight={600}>
              {t('copyTrade.efficiency')}

            </Typography>
            <IconNote />
          </div>
          <div className='flex items-center gap-0.5'>
            <Typography variant='body2' color={'#212121'} fontWeight={600}>
              30 Ngày
            </Typography>
            <ArrowDropDownIcon className='text-[#616161]' />

          </div>

        </div>
        <div className='flex flex-col gap-3'>
          <div className='grid grid-cols-2'>
            <div className='flex flex-col gap-0.5'>
              <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
                {t('copyTrade.filter.roi')}
              </Typography>
              <Typography className='text-[12px] leading-3' color={'#4AAF57'} fontWeight={500}>
                10,73%
              </Typography>
            </div>
            <div className='flex flex-col gap-0.5'>
              <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
                {`${t('copyTrade.filter.pnl')}(USDT)`}
              </Typography>
              <Typography className='text-[12px] leading-3' color={'#4AAF57'} fontWeight={500}>
                220,33
              </Typography>
            </div>
          </div>

          <div className='grid grid-cols-2'>
            <div className='flex flex-col gap-0.5'>
              <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
                {t('copyTrade.shape_factor')}
              </Typography>
              <Typography className='text-[12px] leading-3' color={'#212121'} fontWeight={500}>
                20,08
              </Typography>
            </div>
            <div className='flex flex-col gap-0.5'>
              <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
                {t('copyTrade.win_rate')}
              </Typography>
              <Typography className='text-[12px] leading-3' color={'#212121'} fontWeight={500}>
                75%
              </Typography>
            </div>
          </div>

          <div className='grid grid-cols-2'>
            <div className='flex flex-col gap-0.5'>
              <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
              {t('copyTrade.number_of_profitable')}
              </Typography>
              <Typography className='text-[12px] leading-3' color={'#212121'} fontWeight={500}>
                12
              </Typography>
            </div>
            <div className='flex flex-col gap-0.5'>
              <Typography className='text-[10px] leading-3' color={'#757575'} fontWeight={400}>
              {t('copyTrade.total_tax')}
              </Typography>
              <Typography className='text-[12px] leading-3' color={'#212121'} fontWeight={500}>
                16
              </Typography>
            </div>
          </div>
        </div>

      </div>

      <ChartLineProfile />
      <ChartPieProfile />
      <div>
        <Tabs tabs={tabGrids} />
        <NoData />
      </div>

      <div className='flex items-center gap-3 mt-4 sticky bottom-0'>
        <Button
          fullWidth
          variant='blue'
          className='h-9 font-semibold'
        >
          <Typography className='text-[14px]'>{t('copyTrade.filter.simulationBtn')}</Typography>
        </Button>
        <Button
          fullWidth
          className='h-9 font-semibold'
        >
          <Typography className='text-[14px]'>{t('copyTrade.filter.copyBtn')}</Typography>
        </Button>

      </div>
    </div>
  );
};

export default Content;

const IconStar = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.55572 1.7712C7.83576 1.63226 8.16465 1.63226 8.44468 1.7712C8.69173 1.89378 8.82058 2.10918 8.88244 2.22006C8.94935 2.33998 9.01789 2.4938 9.08637 2.64752C9.08966 2.6549 9.09295 2.66229 9.09625 2.66967L10.2943 5.35738L13.2448 5.66879C13.4122 5.68643 13.5796 5.70407 13.7143 5.73065C13.8389 5.75522 14.0836 5.8112 14.2765 6.00828C14.4952 6.23166 14.5968 6.54446 14.5512 6.85373C14.511 7.12656 14.3459 7.31567 14.2596 7.40877C14.1662 7.50945 14.0411 7.62216 13.9161 7.73479L11.7121 9.721L12.3277 12.6234C12.3627 12.788 12.3976 12.9527 12.414 13.089C12.4291 13.2151 12.4515 13.4651 12.3237 13.7095C12.1788 13.9865 11.9127 14.1798 11.6045 14.232C11.3326 14.278 11.1017 14.1795 10.9865 14.1261C10.8619 14.0685 10.716 13.9843 10.5703 13.9002L8.0002 12.4179L5.43011 13.9002C5.28437 13.9843 5.13853 14.0685 5.01392 14.1261C4.8987 14.1795 4.66785 14.278 4.39593 14.232C4.08771 14.1798 3.82163 13.9865 3.67675 13.7095C3.54894 13.4651 3.57131 13.2151 3.58643 13.089C3.60278 12.9527 3.63775 12.788 3.67269 12.6233L4.28829 9.721L2.10234 7.75104C2.09633 7.74563 2.09032 7.74021 2.08431 7.7348C1.95928 7.62217 1.83418 7.50946 1.7408 7.40877C1.65447 7.31566 1.48943 7.12656 1.44919 6.85373C1.40358 6.54446 1.50521 6.23167 1.72389 6.00828C1.91682 5.8112 2.16149 5.75522 2.28606 5.73065C2.42078 5.70407 2.58824 5.68643 2.75559 5.66879C2.76364 5.66794 2.77168 5.6671 2.77973 5.66625L5.70611 5.35738L6.90416 2.66967C6.90745 2.66228 6.91075 2.65489 6.91404 2.6475C6.98253 2.49379 7.05106 2.33998 7.11797 2.22006C7.17983 2.10918 7.30868 1.89378 7.55572 1.7712Z" fill="#FACC15" />
    </svg>

  )
}

export const IconNote = () => {
  return (
    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.35241 2.15172C9.11921 2.11479 8.88166 2.11479 8.64846 2.15172C8.38301 2.19377 8.13452 2.29696 7.85269 2.41401L4.80115 3.678C4.51911 3.79452 4.27043 3.89725 4.053 4.05523C3.86198 4.19401 3.69401 4.36198 3.55523 4.553C3.39725 4.77043 3.29452 5.0191 3.178 5.30115L1.91401 8.35269C1.79696 8.63452 1.69377 8.88301 1.65172 9.14846C1.61479 9.38166 1.61479 9.61921 1.65172 9.85241C1.69377 10.1179 1.79697 10.3663 1.91401 10.6482L3.178 13.6997C3.29452 13.9818 3.39725 14.2304 3.55523 14.4479C3.69401 14.6389 3.86198 14.8069 4.053 14.9456C4.27042 15.1036 4.51909 15.2063 4.80112 15.3229L7.8527 16.5869C8.13452 16.7039 8.38302 16.8071 8.64846 16.8491C8.88166 16.8861 9.11921 16.8861 9.35241 16.8491C9.61787 16.8071 9.86636 16.7039 10.1482 16.5869L13.1997 15.3229C13.4818 15.2064 13.7304 15.1036 13.9479 14.9456C14.1389 14.8069 14.3069 14.6389 14.4456 14.4479C14.6036 14.2304 14.7063 13.9818 14.8229 13.6997L16.0869 10.6482C16.2039 10.3663 16.3071 10.1179 16.3491 9.85241C16.3861 9.61921 16.3861 9.38166 16.3491 9.14846C16.3071 8.883 16.2039 8.63451 16.0869 8.35268L14.8229 5.30115C14.7064 5.01911 14.6036 4.77042 14.4456 4.553C14.3069 4.36198 14.1389 4.19401 13.9479 4.05523C13.7304 3.89725 13.4818 3.79452 13.1997 3.678L10.1482 2.41401C9.86635 2.29696 9.61786 2.19377 9.35241 2.15172ZM9.00024 5.75043C9.41446 5.75043 9.75024 6.08621 9.75024 6.50043V10.2504C9.75024 10.6646 9.41446 11.0004 9.00024 11.0004C8.58603 11.0004 8.25024 10.6646 8.25024 10.2504V6.50043C8.25024 6.08621 8.58603 5.75043 9.00024 5.75043ZM9.75024 12.5004C9.75024 12.9146 9.41446 13.2504 9.00024 13.2504C8.58603 13.2504 8.25024 12.9146 8.25024 12.5004C8.25024 12.0862 8.58603 11.7504 9.00024 11.7504C9.41446 11.7504 9.75024 12.0862 9.75024 12.5004Z" fill="#9E9E9E" />
    </svg>

  )
}
