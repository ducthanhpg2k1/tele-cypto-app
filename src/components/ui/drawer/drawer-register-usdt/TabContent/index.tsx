import { Tabs } from 'src/components/ui/tabs';
import { TabItem } from 'src/components/ui/tabs/types';
import { t } from 'i18next';
import Summary from './Summary';

const TabContent = () => {
  const tabGrids: TabItem[] = [
    {
      label: t('earn.summary'),
      key: 'summary',
      content: <Summary />,
    },
    {
      label: t('earn.product_rules'),
      key: 'product_rules',
      content: <Summary />,
    },
  ];

  return (
    <>
      <Tabs tabs={tabGrids} />
    </>
  );
};
export default TabContent;
