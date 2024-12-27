
import React from 'react';
import { Tabs } from 'src/components/ui/tabs';
import { TabItem } from 'src/components/ui/tabs/types';
import Following from './Following';



const Content = () => {

  const tabGrids: TabItem[] = [
    {
      label: 'Đang theo dõi',
      key: 'copyTrade.tabs.public',
      content: <Following />,
    },
    {
      label: 'Người theo dõi',
      key: 'copyTrade.tabs.private',
      content: <Following />,
    },

  ];


  return (
    <div className='flex flex-col gap-4'>
      <Tabs tabs={tabGrids} />

    </div>
  );
};

export default Content;


