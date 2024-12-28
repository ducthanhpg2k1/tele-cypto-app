import { useRef, useState } from 'react';
import { TagAction } from '../../transaction/TransactionAI/Popular';
import ModalSurfSpot from '../Running/ModalSurfSpot';
import ModalTradingPair from '../../transaction/TransactionAI/ModalTradingPair';
import ModalStatus from '../ModalStatus';
import ModalTrailingUp from '../ModalTrailingUp';
import Image from 'next/image';
import { Typography } from '@mui/material';

const History = () => {

  return (
    <div className='pt-4 flex flex-col'>
      <NoData />
    </div>
  );
};
export default History;

const NoData = () => {
  return (
    <div className='pt-16 flex flex-col gap-1 justify-center items-center'>
      <Image src={'/images/img-noData.png'} width={85} height={65} alt='' />
      <Typography className='text-xs' color={'#424242'} fontWeight={400}>
        Không tìm thấy bản ghi nào
      </Typography>
    </div>
  );
};
