import { Box, Typography, Stack, TextField, InputAdornment } from '@mui/material';
import { t } from 'i18next';
import Image from 'next/image';
import React from 'react';
import CardEarn from './CardEarn';
import SearchIcon from 'src/assets/icons/SearchIcon';
import EnjoyButton from './enjoy-button';
import { mockDataCardEarn } from 'src/constants';
import ListCoin from './ListCoin';
import InputSearch from 'src/components/ui/input-search/InputSearch';

const Invite = () => {
  return (
    <>
      <EnjoyButton className='w-full' />
      <Stack className='flex-row overflow-auto w-full gap-3 pb-0 min-h-[125px]'>
        {mockDataCardEarn.map((e, index) => {
          return <CardEarn name={e.name} img={e.img} profit={e.profit} key={index} />;
        })}
      </Stack>
      <ListCoin />
    </>
  );
};

export default Invite;
