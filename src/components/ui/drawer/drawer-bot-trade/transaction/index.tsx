import { Tabs } from 'src/components/ui/tabs';
import { TabItem } from 'src/components/ui/tabs/types';
import TransactionAI from './TransactionAI';
import Popular from './TransactionAI/Popular';
import HandMade from './HandMade';

export enum TYPE_TAB_TRANSACTION {
  AI = 'ai',
  POPULAR = 'popular',
  HANDMADE = 'handmade'

}

const Transaction = () => {

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

  return (
    <div className="flex flex-col gap-0">
      <Tabs tabs={tabGrids} />
    </div>
  )
}
export default Transaction