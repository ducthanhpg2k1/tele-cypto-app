import { Stack } from '@mui/material';
import { Tabs } from 'src/components/ui/tabs';
import { TabItem } from 'src/components/ui/tabs/types';
import { mockDataBotTradeOptions } from 'src/constants';
import ItemOption from '../ItemOption';

const TabAction = () => {
  const tabActions: TabItem[] = [
    {
      label: 'bot.tabs.all',
      key: 'bot.tabs.all',
      content: <TabsContent />,
    },
    {
      label: 'bot.tabs.autoTrade',
      key: 'bot.tabs.autoTrade',
      content: <TabsContent />,
    },
    {
      label: 'bot.tabs.sideway',
      key: 'bot.tabs.sideway',
      content: <TabsContent />,
    },
    {
      label: 'bot.tabs.increment',
      key: 'bot.tabs.increment',
      content: <TabsContent />,
    },
    {
      label: 'bot.tabs.decrement',
      key: 'bot.tabs.decrement',
      content: <TabsContent />,
    },
    {
      label: 'bot.gridSpot',
      key: 'bot.gridSpot',
      content: <TabsContent />,
    },
  ];
  return <Tabs tabs={tabActions} />;
};

export default TabAction;

const TabsContent = () => {
  return (
    <Stack className="grid grid-cols-4 w-full mt-6">
      {mockDataBotTradeOptions.map((e, index) => {
        return (
          <ItemOption
            img={e.img}
            label={e.label}
            key={index}
          />
        );
      })}
    </Stack>
  );
};
