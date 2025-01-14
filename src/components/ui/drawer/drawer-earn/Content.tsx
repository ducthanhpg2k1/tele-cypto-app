import { Box, Typography, Stack, TextField, InputAdornment } from '@mui/material';
import React, { useRef } from 'react';
import CardEarn from './CardEarn';
import EnjoyButton from './enjoy-button';
import { mockDataCardEarn } from 'src/constants';
import ListCoin from './ListCoin';
import DrawerRegisterUsdt from '../drawer-register-usdt';

const Invite = () => {
  const refRegisterUsdt: any = useRef();
  return (
    <>
      <EnjoyButton className='w-full' />
      <Stack className='flex-row overflow-auto w-full gap-3 pb-0 min-h-[125px]'>
        {mockDataCardEarn.map((e, index) => {
          return (
            <CardEarn
              onClickCard={() => refRegisterUsdt.current.onOpen()}
              name={e.name}
              img={e.img}
              profit={e.profit}
              key={index}
            />
          );
        })}
      </Stack>
      <ListCoin onClickRow={() => refRegisterUsdt.current.onOpen()} />

      <DrawerRegisterUsdt ref={refRegisterUsdt} />
    </>
  );
};

export default Invite;
