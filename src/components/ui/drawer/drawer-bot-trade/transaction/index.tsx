import { Tabs } from 'src/components/ui/tabs';
import { TabItem } from 'src/components/ui/tabs/types';
import TransactionAI from './TransactionAI';
import Popular from './TransactionAI/Popular';
import HandMade from './HandMade';
import Image from 'next/image';
import { log } from 'node:console';
import { useRef, useState } from 'react';
import { Typography } from '@mui/material';
import ModalTradingBot from './TransactionAI/ModalTradingBot';
import ModalFilter from './TransactionAI/ModalFilter';

export enum TYPE_TAB_TRANSACTION {
  AI = 0,
  POPULAR = 1,
  HANDMADE = 2,
}



const Transaction = () => {
  const [activeTab, setActiveTab] = useState<TYPE_TAB_TRANSACTION>(0)
  const refModalTradingBot: any = useRef()
  const refModalFilter: any = useRef()


  const tabGrids: TabItem[] = [
    {
      label: 'AI',
      key: TYPE_TAB_TRANSACTION.AI,
      content: <TransactionAI />,
    },
    {
      label: 'Phổ biến',
      key: TYPE_TAB_TRANSACTION.POPULAR,
      content: <Popular />,
    },
    {
      label: 'Thủ công',
      key: TYPE_TAB_TRANSACTION.HANDMADE,
      content: <HandMade />,
    },
  ];

  const onChaneTab = (tab: any) => {
    setActiveTab(tab)
  }

  return (
    <div className='flex flex-col pb-20'>
      <div
        style={{
          marginBottom: '22px'
        }}
        className='flex justify-between items-center'>

        <div onClick={() => refModalTradingBot.current.onOpen()} className='flex items-center gap-3'>
          <Typography variant='body2' color={'#212121'} fontWeight={700}>
            Giao dịch
          </Typography>


          <div className='w-5 h-5 flex justify-center items-center'>
            <Image src={'/images/img-arrow-down.png'} width={20} height={20} alt='' />
          </div>
        </div>
        {activeTab === TYPE_TAB_TRANSACTION.POPULAR && (
          <Image onClick={() => refModalFilter.current.onOpen()} src={'/images/ic-filter-list.png'} width={24} height={24} alt='' />

        )}
      </div>
      <Tabs onChaneTab={onChaneTab} tabs={tabGrids}>
        {activeTab === TYPE_TAB_TRANSACTION.AI && (
          <Image src={'/images/image-note.png'} alt='' width={18} height={18} />
        )}
      </Tabs >
      <ModalTradingBot ref={refModalTradingBot} />
      <ModalFilter ref={refModalFilter} />
    </div>
  );
};
export default Transaction;
