import { t } from 'i18next';
import { forwardRef, useRef, useState } from 'react';
import CustomDrawer, { DrawerHandle } from 'src/components/ui/drawer';
import Content from './Content';
import BottomNavBotTrade from './bottom-nav-bot-trade';
import Transaction from './transaction';
import AllCommands from './all-commands';
import Market from './market';
import ModalFilter from './all-commands/ModalFilter';
import { useTranslation } from 'react-i18next';

export enum TAB_BOT_TRADE {
  BOT = 'bot',
  TRANSACTION = 'transaction',
  ALL_COMMANDS = 'all-commands',
  MARKET = 'market',
}
const DrawerBotTrade = forwardRef<DrawerHandle, {}>((_, ref) => {
  const [activeTab, setActiveTab] = useState<TAB_BOT_TRADE>(TAB_BOT_TRADE?.BOT);
  const [showSection, setShowSection] = useState(true)
  const refModalFilter: any = useRef()
  const { t } = useTranslation();

  const renderTitleBotTrade = () => {

    let text: string = '';

    switch (activeTab) {
      case TAB_BOT_TRADE.BOT:
        text = t('bot.trading_bot');
        break;
      case TAB_BOT_TRADE.ALL_COMMANDS:
        text =  t('bot.all_commands');
        break;
      case TAB_BOT_TRADE.MARKET:
        text = t('bot.market');
        break;
      case TAB_BOT_TRADE.TRANSACTION:
        text = t('bot.transaction');
        break;
    }
    return text;
  };
  const handleClickMarketBot = () => {
    setActiveTab(TAB_BOT_TRADE.MARKET)
  }
  const handleScroll = (e: any) => {
    if (e.target.scrollTop <= 0) {
      setShowSection(true);
    } else {
      setShowSection(false);
    }
  };
  const handleClickFilter = () => {
    refModalFilter.current.onOpen()
  }
  return (
    <CustomDrawer
      anchor='right'
      paperClassName={{
        sx: { width: { xs: '100%', sm: 400 }, pt: 2 },
      }}
      ref={ref}
      label={renderTitleBotTrade()}
      onScrollContent={handleScroll}
      isFilter={activeTab === TAB_BOT_TRADE.ALL_COMMANDS ? true : false}
      handleClickFilter={handleClickFilter}
    >
      <div>
        {activeTab === TAB_BOT_TRADE.BOT && <Content showSection={showSection} />}
        {activeTab === TAB_BOT_TRADE.TRANSACTION && <Transaction />}
        {activeTab === TAB_BOT_TRADE.ALL_COMMANDS && <AllCommands handleClickMarketBot={handleClickMarketBot} />}
        {activeTab === TAB_BOT_TRADE.MARKET && <Market />}



        <BottomNavBotTrade
          onChangeTab={(tab: TAB_BOT_TRADE) => setActiveTab(tab)}
          activeTab={activeTab}
        />
        <ModalFilter ref={refModalFilter} />
      </div>
    </CustomDrawer>
  );
});

export default DrawerBotTrade;
