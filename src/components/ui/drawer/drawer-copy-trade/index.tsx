import { t } from 'i18next';
import { forwardRef, useState } from 'react';
import CustomDrawer, { DrawerHandle } from 'src/components/ui/drawer';
import Content from './Content';
import CustomTab from '../../custom-tab';
import SwipeableViews from 'react-swipeable-views';
import BottomNavCoppyTrade from './bottom-nav-coppy-trade';
import DeliveredImmediately from './delivered-immediately';
import Coppy from './coppy';

const enum TYPE_TAB {
  CONTRACT = 0,
  DELIVER = 1,
}
export enum TAB_COPPY_TRADE {
  investmentPortfolio = 0,
  coppy = 1,
}
const DrawerCopyTrade = forwardRef<DrawerHandle, {}>((_, ref) => {
  const [valueTab, setValueTab] = useState<TYPE_TAB>(0);
  const [activeTab, setActiveTab] = useState<TAB_COPPY_TRADE>(TAB_COPPY_TRADE?.investmentPortfolio);

  const handleChange = (value: any) => {
    setValueTab(value)

  }
  const handleChangeIndex = (index: number) => {
    setValueTab(index)

  };
  return (
    <CustomDrawer
      anchor='right'
      paperClassName={{
        sx: { width: { xs: '100%', sm: 400 }, pt: 2 },
      }}
      ref={ref}
      label={t('copyTrade.contractTab')}
      isCopyTrade
      contentCenter={
        <CustomTab value={valueTab} options={[
          {
            key: 1,
            label: "Hợp đồng"
          },
          {
            key: 2,
            label: "Giao ngay"
          }
        ]} handleChange={handleChange} />
      }
    >
      {
        activeTab === TAB_COPPY_TRADE.investmentPortfolio ? (
          <SwipeableViews index={valueTab} onChangeIndex={handleChangeIndex}>
            <Content />
            <DeliveredImmediately />
          </SwipeableViews>
        ) : (
          <Coppy />
        )
      }

      <BottomNavCoppyTrade
        onChangeTab={(tab: TAB_COPPY_TRADE) => setActiveTab(tab)}
        activeTab={activeTab}
      />
    </CustomDrawer>
  );
});

export default DrawerCopyTrade;
