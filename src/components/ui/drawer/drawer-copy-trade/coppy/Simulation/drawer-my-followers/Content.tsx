
import React from 'react';
import { Tabs } from 'src/components/ui/tabs';
import { TabItem } from 'src/components/ui/tabs/types';
import Following from './Following';
import { useTranslation } from 'react-i18next';



const Content = () => {
  const { t } = useTranslation()

  const tabGrids: TabItem[] = [
    {
      label: t('copyTrade.following'),
      key: 'copyTrade.tabs.public',
      content: <Following />,
    },
    {
      label: t('copyTrade.followers'),
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


