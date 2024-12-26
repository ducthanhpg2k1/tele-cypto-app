import { Stack } from '@mui/material';
import { Tabs } from 'src/components/ui/tabs';
import { TabItem } from 'src/components/ui/tabs/types';
import { mockDataBotTradeOptions } from 'src/constants';
import ItemOption from '../ItemOption';

const TabAction = () => {
  const tabActions: TabItem[] = [
    {
      label: 'copyTrade.filter.pnl',
      key: 'copyTrade.filter.pnl',
      content: <TabsContent />,
    },
    {
      label: 'copyTrade.filter.roi',
      key: 'copyTrade.filter.roi',
      content: <TabsContent />,
    },
    {
      label: 'copyTrade.filter.mmd',
      key: 'copyTrade.filter.mmd',
      content: <TabsContent />,
    },
    {
      label: 'copyTrade.filter.aum',
      key: 'copyTrade.filter.aum',
      content: <TabsContent />,
    },
    {
      label: 'copyTrade.filter.copyTradeR',
      key: 'copyTrade.filter.copyTradeR',
      content: <TabsContent />,
    },
  ];
  return <Tabs tabs={tabActions} />;
};

export default TabAction;

const TabsContent = () => {
  return <></>;
};
