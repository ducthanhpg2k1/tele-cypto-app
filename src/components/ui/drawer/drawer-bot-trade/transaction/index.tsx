import { Tabs } from 'src/components/ui/tabs';
import { TabItem } from 'src/components/ui/tabs/types';
import TransactionAI from './TransactionAI';
import Popular, { TagAction } from './TransactionAI/Popular';
import HandMade from './HandMade';
import Image from 'next/image';
import { log } from 'node:console';
import { useRef, useState } from 'react';
import { Typography } from '@mui/material';
import ModalTradingBot from './TransactionAI/ModalTradingBot';
import ModalFilter from './TransactionAI/ModalFilter';
import ModalTop from './TransactionAI/ModalTop';
import ModalTradingPair from './TransactionAI/ModalTradingPair';
import { useTranslation } from 'react-i18next';

export enum TYPE_TAB_TRANSACTION {
  AI = 0,
  POPULAR = 1,
  HANDMADE = 2,
}



const Transaction = () => {
  const [activeTab, setActiveTab] = useState<TYPE_TAB_TRANSACTION>(0)
  const refModalTradingBot: any = useRef()
  const refModalFilter: any = useRef()
  const refModalTop: any = useRef()
  const refModalTradingPair: any = useRef()
  const { t } = useTranslation();


  const [valueTop, setValueTop] = useState<string>('Top PNL')
  const [valueTradingPair, setValueTopTradingPair] = useState<any>({
    title: '',
    id: 0
  })


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
        className='flex justify-between items-center'>

        <div onClick={() => refModalTradingBot.current.onOpen()} className='flex items-center gap-3'>
          <Typography variant='body2' color={'#212121'} fontWeight={700}>
           {t('bot.transaction')}
          </Typography>


          <div className='w-5 h-5 flex justify-center items-center border border-[#F5F5F5] rounded'>
            <Image src={'/images/img-down.png'} width={8} height={8} alt='' />
          </div>
        </div>
        {activeTab === TYPE_TAB_TRANSACTION.POPULAR && (
          <Image onClick={() => refModalFilter.current.onOpen()} src={'/images/ic-filter-list.png'} width={24} height={24} alt='' />

        )}
      </div>
      <Tabs contentHeaderTab={
        <>
          {
            activeTab === TYPE_TAB_TRANSACTION.POPULAR && (
              <div className='flex items-center gap-3 mt-4'>
                <TagAction handleClick={() => refModalTop.current.onOpen()} label={valueTop} />
                <TagAction handleClick={() => refModalTradingPair.current.onOpen()} label={valueTradingPair?.title ? valueTradingPair?.title : t('bot.code')} />
              </div>
            )
          }
        </>
      } isFixedTab onChaneTab={onChaneTab} tabs={tabGrids}>
        {activeTab === TYPE_TAB_TRANSACTION.AI && (
          <Image src={'/images/img-note-new.png'} alt='' width={18} height={18} />
        )}
      </Tabs >
      <ModalTradingBot ref={refModalTradingBot} />
      <ModalFilter ref={refModalFilter} />
      <ModalTop value={valueTop} handleClickTop={(value: string) => setValueTop(value)} ref={refModalTop} />
      <ModalTradingPair value={valueTradingPair?.id} handleClickTop={(title: string, id: number) => setValueTopTradingPair({
        title,
        id

      })} ref={refModalTradingPair} />
    </div>
  );
};
export default Transaction;
