import { Stack } from '@mui/material';
import React, { useState } from 'react';
import ItemSort from './ItemSort';
import { CoinTradeSort } from 'src/constants';
import { TabItem } from 'src/components/ui/tabs/types';
import { SortOrder } from './BottomSheetCoinSection';

type Props = {
  onSort: (order: SortOrder) => void;
};
const Sort = (props: Props) => {
  const handleSort = (order: SortOrder) => {
    props.onSort(order);
  };
  return (
    <Stack className="flex-row w-full justify-between items-center">
      <Stack className="flex-row gap-[2px] items-center text-[#9E9E9E]">
        <ItemSort
          name={CoinTradeSort[0].name}
          onSort={handleSort}
        />
        /
        <ItemSort
          name={CoinTradeSort[1].name}
          onSort={handleSort}
        />
      </Stack>
      <Stack className="flex-row gap-[2px] items-center text-[#9E9E9E]">
        <ItemSort
          name={CoinTradeSort[2].name}
          onSort={handleSort}
        />
        /
        <ItemSort
          name={CoinTradeSort[3].name}
          onSort={handleSort}
        />
      </Stack>
    </Stack>
  );
};

export default Sort;
