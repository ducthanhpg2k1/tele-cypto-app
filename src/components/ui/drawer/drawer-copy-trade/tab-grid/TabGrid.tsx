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

const DATA_CONTRACT = ['PnL', 'ROI', 'MMD', 'AUM', 'Copy Trader']

const TabGrid = ({ type }: { type?: string }) => {

  const tabDeliveredImmediately: TabItem[] = [
    {
      label: 'Danh mục đầu tư',
      key: 'copyTrade.tabs.public',
      content: <PublicContract type={type} />,
    },
    {
      label: 'Yêu thích',
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

  const [valueDate, setValueDate] = useState<string>('90 ngày')
  const [activeFilter, setActiveFilter] = useState<string>('ROI')

  const handleActiveFilter = (value: string) => {
    setActiveFilter(value)
  }
  return (
    <div>
      <Tabs
        isFixedTab
        contentHeaderTab={
          <div className="flex items-center gap-1 justify-center mt-4 mb-1 h-max relative">
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
