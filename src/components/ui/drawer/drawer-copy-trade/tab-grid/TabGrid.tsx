import { Tabs } from 'src/components/ui/tabs';
import { TabItem } from 'src/components/ui/tabs/types';
import Image from 'next/image';
import PublicContract from './PublicContract';
import PopoverMenuFilter from './PopoverMenuFilter';
import { useState } from 'react';

const TabGrid = ({ type }: { type?: string }) => {

  const tabDeliveredImmediately: TabItem[] = [
    {
      label: 'Danh mục đầu tư',
      key: 'copyTrade.tabs.public',
      content: <PublicContract type={type}/>,
    },
    {
      label: 'Yêu thích',
      key: 'copyTrade.tabs.private',
      content: <PublicContract type={type}/>,
    },
  ];
  const tabGrids: TabItem[] = [
    {
      label: 'copyTrade.tabs.public',
      key: 'copyTrade.tabs.public',
      content: <PublicContract type={type}/>,
    },
    {
      label: 'copyTrade.tabs.private',
      key: 'copyTrade.tabs.private',
      content: <PublicContract type={type}/>,
    },
    {
      label: 'copyTrade.tabs.favorites',
      key: 'copyTrade.tabs.favorites',
      content: <PublicContract type={type}/>,
    },
  ];
  return (
    <div>
      <Tabs tabs={type === "deliveredImmediately" ? tabDeliveredImmediately : tabGrids}>
        <PopoverMenuFilter />
      </Tabs >
    </div>
  );
};

export default TabGrid;
