import { t } from 'i18next';
import { forwardRef, useState } from 'react';
import CustomDrawer, { DrawerHandle } from 'src/components/ui/drawer';
import Content from './Content';
import BottomNavBotTrade from './bottom-nav-bot-trade';
import Transaction from './transaction';
import AllCommands from './all-commands';
import Market from './market';

export enum TAB_BOT_TRADE {
  BOT = 'bot',
  TRANSACTION = 'transaction',
  ALL_COMMANDS = 'all-commands',
  MARKET = 'market',
}
const DrawerBotTrade = forwardRef<DrawerHandle, {}>((_, ref) => {
  const [activeTab, setActiveTab] = useState<TAB_BOT_TRADE>(TAB_BOT_TRADE?.BOT);

  console.log(activeTab, 'activeTab');

  const renderTitleBotTrade = () => {
    let text: string = '';

    switch (activeTab) {
      case TAB_BOT_TRADE.BOT:
        text = 'Bot giao dịch';
        break;
      case TAB_BOT_TRADE.ALL_COMMANDS:
        text = 'Tất cả các lệnh';
        break;
      case TAB_BOT_TRADE.MARKET:
        text = 'Thị trường';
        break;
      case TAB_BOT_TRADE.TRANSACTION:
        text = 'Giao dịch';
        break;
    }
    return text;
  };

  return (
    <CustomDrawer
      anchor='right'
      paperClassName={{
        sx: { width: { xs: '100%', sm: 400 }, pt: 2 },
      }}
      ref={ref}
      label={renderTitleBotTrade()}
    >
      <div>
        {activeTab === TAB_BOT_TRADE.BOT && <Content />}
        {activeTab === TAB_BOT_TRADE.TRANSACTION && <Transaction />}
        {activeTab === TAB_BOT_TRADE.ALL_COMMANDS && <AllCommands />}
        {activeTab === TAB_BOT_TRADE.MARKET && <Market />}



        <BottomNavBotTrade
          onChangeTab={(tab: TAB_BOT_TRADE) => setActiveTab(tab)}
          activeTab={activeTab}
        />
      </div>
    </CustomDrawer>
  );
});

export default DrawerBotTrade;
