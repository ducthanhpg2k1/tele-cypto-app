import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CaretDown from 'src/assets/icons/CaretDown';
import CustomCheckbox from 'src/components/ui/checkbox';
import { Tabs } from 'src/components/ui/tabs';
import { TabItem } from 'src/components/ui/tabs/types';
import CardContentTabGrid from './CardContentTabGrid';
import TabAction from '../tab-action/TabAction';

const TabGrid = () => {
  const { t } = useTranslation();
  const tabGrids: TabItem[] = [
    {
      label: 'copyTrade.tabs.public',
      key: 'copyTrade.tabs.public',
      content: <TabsContent />,
    },
    {
      label: 'copyTrade.tabs.private',
      key: 'copyTrade.tabs.private',
      content: <TabsContent />,
    },
    {
      label: 'copyTrade.tabs.favorites',
      key: 'copyTrade.tabs.favorites',
      content: <TabsContent />,
    },
  ];
  return (
    <div>
      <Tabs tabs={tabGrids} />
    </div>
  );
};

export default TabGrid;

const TabsContent = () => {
  const { t } = useTranslation();

  return (
    <Stack className="flex flex-col w-full mt-6 gap-6">
      <div className="flex items-center flex-row gap-1">
        <div className="flex items-center gap-[2px]">
          <Typography
            variant="caption"
            color="#212121"
            fontWeight={600}
            className='w-max'
          >
            90 ngày
          </Typography>
          <CaretDown color="#424242" />
        </div>
        {/* <TabAction /> */}
      </div>
      {/* {Array.from({ length: 10 }).map((_, key) => {
        return <CardContentTabGrid key={key + 'card content'} />;
      })} */}
    </Stack>
  );
};
