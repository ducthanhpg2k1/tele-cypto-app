import { Tabs } from 'src/components/ui/tabs';
import { TabItem } from 'src/components/ui/tabs/types';
import PublicContract from './PublicContract';
import PopoverMenuFilter from './PopoverMenuFilter';
import { Typography } from '@mui/material';
import DrawerProfileCoppy from '../coppy/Simulation/drawer-profile-coppy';
import { useRef, useState } from 'react';
import { TagAction } from '../../drawer-bot-trade/transaction/TransactionAI/Popular';
import ModalDate from './PublicContract/ModalDate';
import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';


const TabGrid = ({ type }: { type?: string }) => {
  const { t } = useTranslation()
  const DATA_CONTRACT = [t('copyTrade.filter.pnl'), t('copyTrade.filter.roi'), t('copyTrade.filter.mmd'), t('copyTrade.filter.aum'), t('copyTrade.filter.copyTradeR')]

  const tabDeliveredImmediately: TabItem[] = [
    {
      label: t('copyTrade.investTab'),
      key: 'copyTrade.tabs.public',
      content: <PublicContract type={type} />,
    },
    {
      label: t('copyTrade.favorites'),
      key: 'copyTrade.tabs.private',
      content: <PublicContract type={type} />,
    },
  ];
  const tabGrids: TabItem[] = [
    {
      label: 'copyTrade.tabs.public',
      key: 'copyTrade.tabs.public',
      content: <PublicContract type={type} />,
    },
    {
      label: 'copyTrade.tabs.private',
      key: 'copyTrade.tabs.private',
      content: <PublicContract type={type} />,
    },
    {
      label: 'copyTrade.tabs.favorites',
      key: 'copyTrade.tabs.favorites',
      content: <PublicContract type={type} />,
    },
  ];
  const refModalDate: any = useRef()

  const [valueDate, setValueDate] = useState<string>(t('copyTrade.filter.daysFilter.day_90'))
  const [activeFilter, setActiveFilter] = useState<string>(t('copyTrade.filter.roi'))

  const handleActiveFilter = (value: string) => {
    setActiveFilter(value)
  }
  return (
    <div>
      <Tabs
        isFixedTab
        contentHeaderTab={
          <div className="flex items-center gap-1 justify-center mt-4 mb-1 h-max relative pb-3">
            <div className="sticky left-0">
              <TagAction handleClick={() => refModalDate.current.onOpen()} label={valueDate} />
            </div>
            <div className="w-full gap-3 flex items-center pl-[12px] hiddenScroll overflow-auto">
              {
                DATA_CONTRACT?.map((item) => {
                  return (
                    <div
                      onClick={() => handleActiveFilter(item)}
                      className={clsx(
                        'py-[2px] px-1 rounded',
                        {
                          'bg-[#F5F5F5]': item === activeFilter,
                        },
                      )}
                    >
                      <Typography
                        color={'#212121'}
                        className="text-xs w-max"
                        fontWeight={500}
                      >
                        {item}
                      </Typography>
                    </div>
                  )
                })
              }
            </div>
          </div>
        }
        tabs={type === "deliveredImmediately" ? tabDeliveredImmediately : tabGrids}>
        <PopoverMenuFilter />
      </Tabs >
      <ModalDate
        value={valueDate}
        handleClick={(value: string) => setValueDate(value)}
        ref={refModalDate} />

    </div>
  );
};

export default TabGrid;
