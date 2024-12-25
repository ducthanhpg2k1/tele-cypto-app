import { Box, Stack, Typography } from '@mui/material';
import { t } from 'i18next';
import Image from 'next/image';
import React from 'react';
import { mockDataInviteList } from 'src/constants';

const ItemsList = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '16px',
        alignItems: 'start',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Typography
        variant="subtitle1"
        className="font-semibold text-[14px]"
      >
        {t('invite.list')}
      </Typography>
      <Stack className="gap-4 items-start w-full">
        {mockDataInviteList.map((e, index) => {
          return (
            <Item
              avt={e.avatar}
              name={e.name}
              profit={e.profit}
              key={'item-invite' + index}
            />
          );
        })}
      </Stack>
    </Box>
  );
};
const Item = ({ avt, name, profit }: { avt: string; name: string; profit: string }) => {
  return (
    <Stack className="flex justify-between items-center flex-row w-full">
      <Stack className="flex items-center gap-1 flex-row">
        <Image
          src={avt}
          alt=""
          width={34}
          height={34}
        />
        <Typography
          variant="subtitle1"
          className="text-[14px]"
        >
          {name}
        </Typography>
      </Stack>
      <Typography
        variant="subtitle1"
        className="text-[#0ABE75]  text-[14px]"
      >
        {profit}
      </Typography>
    </Stack>
  );
};
export default ItemsList;
