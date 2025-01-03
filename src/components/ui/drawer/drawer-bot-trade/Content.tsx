import BotTradeCTAButton from './bot-trade-cta-button';
import TabAction from './tab-action/TabAction';
import TabGrid from './tab-grid/TabGrid';

const Content = ({ showSection }: { showSection: boolean }) => {
  return (
    <div className='pb-20'>
      {/* <BotTradeCTAButton /> */}
      {/* <TabAction /> */}
      <TabGrid  showSection={showSection}/>
    </div>
  );
};

export default Content;
