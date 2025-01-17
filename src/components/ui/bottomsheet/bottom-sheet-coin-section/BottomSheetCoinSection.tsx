import { Dialog, DialogContent, Slide, Stack } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { t } from 'i18next';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import InputSearch from 'src/components/ui/input-search/InputSearch';
import { Tabs } from 'src/components/ui/tabs';
import {
  CoinTrade,
  mockDataListCoinFav,
  mockDataListCoinTON,
  mockDataListCoinUSDT,
} from 'src/constants';
import Item from './Item';
import Sort from './Sort';
import BottomSheetCustom from '../../bottom-sheet-custom';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

interface TabItem {
  key: string;
  label: string;
  content?: React.ReactNode;
  data: CoinTrade[];
}

export type SortOrder = 'asc' | 'desc' | 'none';

const tabs: TabItem[] = [
  { key: 'fav', label: t('sheetTrade.fav'), data: mockDataListCoinFav },
  { key: 'usdt', label: 'USDT', data: mockDataListCoinUSDT },
  { key: 'ton', label: 'TON', data: mockDataListCoinTON },
];

const BottomSheetBalanceSection = (_: any, ref: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const [sortedTabs, setSortedTabs] = useState<TabItem[]>(tabs);

  const handleSortTabs = (order: SortOrder) => {
    const updatedTabs = tabs.map((tab) => ({
      ...tab,
      data:
        order === 'none'
          ? tab.data
          : [...tab.data].sort((a, b) =>
              order === 'asc' ? a.from.localeCompare(b.from) : b.from.localeCompare(a.from),
            ),
    }));
    setSortedTabs(updatedTabs);
  };

  const tabItems = sortedTabs.map((tab) => ({
    key: tab.key,
    label: tab.label,
    content: (
      <Stack className='gap-1.5 items-center h-[70dvh] pt-2 pr-1'>
        <Sort onSort={handleSortTabs} />
        <Stack className='w-full overflow-auto'>
          {tab.data.map((e, index) => (
            <Item
              cross={e.cross}
              img={e.img}
              from={e.from}
              to={e.to}
              price={e.price}
              profit={e.profit}
              kl={e.kl}
              key={index}
              showProtect={e.showProtect}
            />
          ))}
        </Stack>
      </Stack>
    ),
  }));

  const handleClose = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    onOpen: () => {
      setOpen(true);
    },
    onClose: () => {
      handleClose();
    },
  }));

  return (
    <BottomSheetCustom className='min-h-[85dvh]' isOpen={open} onClose={handleClose}>
      <Stack className='px-2 pb-3 gap-2'>
        <InputSearch placeholder='Search' />
        <Tabs tabs={tabItems} defaultTab={0} />
      </Stack>
    </BottomSheetCustom>
  );
};

export default forwardRef(BottomSheetBalanceSection);
