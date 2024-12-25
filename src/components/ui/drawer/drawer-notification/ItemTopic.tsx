import { Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { t } from 'i18next';
type Props = {
  img: string;
  title: string;
};
const ItemTopic = (props: Props) => {
  return (
    <Stack className="flex-row items-center gap-3 rounded-lg bg-[#F5F5F5] h-[70px] p-3">
      <Image
        src={props.img}
        alt=""
        width={24}
        height={24}
      />
      <Typography
        variant="subtitle2"
        className="text-[12px]"
      >
        {t(props.title)}
      </Typography>
    </Stack>
  );
};

export default ItemTopic;
