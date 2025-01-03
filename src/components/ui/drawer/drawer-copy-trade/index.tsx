import { t } from 'i18next';
import { forwardRef, useState } from 'react';
import CustomDrawer, { DrawerHandle } from 'src/components/ui/drawer';
import Content from './Content';
import CustomTab from '../../custom-tab';
import SwipeableViews from 'react-swipeable-views';
import BottomNavCoppyTrade from './bottom-nav-coppy-trade';
import DeliveredImmediately from './delivered-immediately';
import Coppy from './coppy';
import CopyTradeCTAButton from './copy-trade-cta-button';
import { useTranslation } from 'react-i18next';

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
  const [showSection, setShowSection] = useState(true)
  const handleChange = (value: any) => {
    setValueTab(value)

  }

  const { t } = useTranslation()

  const handleScroll = (e: any) => {
    console.log(e.target.scrollTop, 'e.target.scrollTop');

    if (e.target.scrollTop <= 0) {
      setShowSection(true);
    } else {
      setShowSection(false);
    }
  };

  return (
    <CustomDrawer
      anchor='right'
      paperClassName={{
        sx: { width: { xs: '100%', sm: 400 }, pt: 2 },
      }}
      onScrollContent={handleScroll}
      ref={ref}
      label={t('copyTrade.contractTab')}
      isCopyTrade
      contentCenter={
        <CustomTab value={valueTab} options={[
          {
            key: 1,
            label: t('copyTrade.contractTab')
          },
          {
            key: 2,
            label: t('copyTrade.spotTab')
          }
        ]} handleChange={handleChange} />
      }
    >

      <div>
        {
          activeTab === TAB_COPPY_TRADE.investmentPortfolio && (
            <>
              {
                valueTab === TYPE_TAB.CONTRACT && (
                  <Content showSection={showSection} />
                )
              }
              {
                valueTab === TYPE_TAB.DELIVER && (
                  <DeliveredImmediately />


                )
              }
            </>
          )
        }
        {
          activeTab === TAB_COPPY_TRADE.coppy && (
            <Coppy />

          )
        }


        <BottomNavCoppyTrade
          onChangeTab={(tab: TAB_COPPY_TRADE) => setActiveTab(tab)}
          activeTab={activeTab}
        />

      </div>


    </CustomDrawer>
  );
});

export default DrawerCopyTrade;
