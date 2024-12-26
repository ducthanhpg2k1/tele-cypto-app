import { IconButton, Typography } from '@mui/material';
import { ArrowDropDownIcon } from '@mui/x-date-pickers';
import ListCardPopular from './ListCardPopular';
import ModalTop from '../ModalTop';
import { useRef, useState } from 'react';
import ModalTradingPair from '../ModalTradingPair';

const Popular = () => {
  const refModalTop: any = useRef()
  const refModalTradingPair: any = useRef()


  const [valueTop, setValueTop] = useState<string>('Top PNL')
  const [valueTradingPair, setValueTopTradingPair] = useState<any>({
    title: '',
    id: 0
  })


  return (
    <div className='flex flex-col gap-4 mt-2'>
      <div className='flex items-center gap-3'>
        <TagAction handleClick={() => refModalTop.current.onOpen()} label={valueTop} />
        <TagAction handleClick={() => refModalTradingPair.current.onOpen()} label={valueTradingPair?.title ? valueTradingPair?.title : 'Mã'} />
      </div>
      <ListCardPopular />

      <ModalTop value={valueTop} handleClickTop={(value: string) => setValueTop(value)} ref={refModalTop} />
      <ModalTradingPair value={valueTradingPair?.id} handleClickTop={(title: string, id: number) => setValueTopTradingPair({
        title,
        id

      })} ref={refModalTradingPair} />
    </div>
  );
};
export default Popular;

export const TagAction = ({ label, handleClick }: { label: string; handleClick?: VoidFunction }) => {
  return (
    <div
      onClick={handleClick}
      className='rounded-md max-h-6 w-max py-[2px] pl-[6px] bg-[#F5F5F5] flex gap-[4px] items-center'
    >
      <Typography className='text-xs' color={'#212121'} fontWeight={400}>
        {label}
      </Typography>

      <ArrowDropDownIcon className='text-[#9E9E9E]' />
    </div>
  );
};
