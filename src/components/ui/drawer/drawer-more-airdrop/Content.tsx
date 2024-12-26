import { Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { t } from 'i18next';
import CustomCheckbox from 'src/components/ui/checkbox';
import Info from '../drawer-airdrop/card/Info';

const list = [
  {
    ul: 'moreairdrop.snap',
    li: ['moreairdrop.sub', 'moreairdrop.sub', 'moreairdrop.sub', 'moreairdrop.sub'],
  },
  {
    ul: 'moreairdrop.rate',
    li: ['moreairdrop.sub', 'moreairdrop.sub', 'moreairdrop.sub', 'moreairdrop.sub'],
  },
];
const Content = () => {
  return (
    <Stack className='gap-4'>
      <Stack className='w-full items-center'>
        <Image src='/images/pepbg.png' alt='' width={356} height={217} className='rounded-xl' />
      </Stack>
      <Stack className='gap-1'>
        <Typography variant='body1' color='#212121' className='font-semibold'>
          {t('moreairdrop.des')}
        </Typography>
        <Stack className='flex-row gap-0.5 items-center'>
          <Image src='/assets/iconly/icon-clock-grey.svg' alt='' width={20} height={20} />
          <Typography variant='body2' color='#9E9E9E' className='font-normal'>
            11/11/2024
          </Typography>
        </Stack>
      </Stack>
      <Stack className='gap-1.5'>
        <Typography variant='body1' color='#212121' className='font-semibold'>
          {t('moreairdrop.detail')}
        </Typography>
        <ol className='list-decimal font-semibold text-[14px] pl-4'>
          {list.map((e, index) => {
            return (
              <>
                <li>
                  {' '}
                  <Typography variant='body2' className='font-semibold' color='#212121'>
                    {t(e.ul)}
                  </Typography>
                </li>
                <ul className='pl-[6px] mt-1.5 mb-2'>
                  {e.li.map((e, index) => {
                    return (
                      <li className='list-disc'>
                        <Typography variant='body2' color='#424242'>
                          {t(e)}
                        </Typography>
                      </li>
                    );
                  })}
                </ul>
              </>
            );
          })}
        </ol>
      </Stack>
    </Stack>
  );
};

export default Content;

const Item = ({ title, des }: { title: string; des: string }) => {
  return (
    <Stack className='w-full p-1 rounded-xl border-[1px] border-solid border-[#EEE]'>
      <Typography variant='caption' color='#757575' className='font-normal'>
        {t(title)}
      </Typography>
      <Typography variant='caption' color='#212121' className='font-semibold'>
        {des}
      </Typography>
    </Stack>
  );
};
