import { Stack, Typography } from '@mui/material';
import { t } from 'i18next';
import Image from 'next/image';
import React, { useState } from 'react';
import CaretDown from 'src/assets/icons/CaretDown';

type Props = {
  name: string;
  onSort: (order: 'asc' | 'desc' | 'none') => void;
};
const ItemSort = (props: Props) => {
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);
  const onClick = () => {
    let sortOrder: 'asc' | 'desc' | 'none' = 'none';
    if (!up && !down) {
      setUp(true);
      sortOrder = 'asc';
    }
    if (up && !down) {
      setUp(false);
      setDown(true);
      sortOrder = 'desc';
    }
    if (!up && down) {
      setDown(false);
      sortOrder = 'none';
    }
    props.onSort(sortOrder);
  };

  return (
    <Stack
      className="flex-row gap-[2px]"
      onClick={onClick}
    >
      <Typography
        variant="body2"
        color="#9E9E9E"
      >
        {t(props.name)}
      </Typography>
      <Stack className="relative gap-[0px] w-[10px]">
        <CaretDown
          width={10}
          height={10}
          className="rotate-180 absolute top-[5px]"
          color={up ? '#212121' : '#BDBDBD'}
        />
        <CaretDown
          width={10}
          height={10}
          color={down ? '#212121' : '#BDBDBD'}
          className="absolute top-[10px]"
        />
      </Stack>
    </Stack>
  );
};

export default ItemSort;
