import { Stack, Typography } from '@mui/material';
import React, { useRef } from 'react';
import Info from './Info';
import { t } from 'i18next';
import Image from 'next/image';
import DrawerMyAirdrop from '../../drawer-my-airdrop';
import { DrawerHandle } from 'src/components/ui/drawer';
import DrawerMoreAirdrop from '../../drawer-more-airdrop';

const Card = () => {
  const refMyAirdrop = useRef<DrawerHandle | null>(null);
  const refMoreAirdrop = useRef<DrawerHandle | null>(null);
  return (
    <Stack className="p-2 items-start gap-2 rounded-xl border-[1px] border-solid border-[#EEE] w-full">
      <Info />
      <Stack className="w-max gap-1 items-start">
        <Stack className="gap-[2px] items-start">
          <Typography
            variant="caption"
            color="#757575"
            className="font-normal"
          >
            {t('airdrop.time')}
          </Typography>
          <Typography variant="subtitle2">{t('airdrop.timevalue')}</Typography>
        </Stack>
        <Stack className="gap-[2px] items-start">
          <Typography
            variant="caption"
            color="#757575"
            className="font-normal"
          >
            {t('airdrop.sum')}
          </Typography>
          <Typography variant="subtitle2">{t('airdrop.timevalue')}</Typography>
        </Stack>
        <Stack className="gap-[2px] items-start">
          <Typography
            variant="caption"
            color="#757575"
            className="font-normal"
          >
            {t('airdrop.snap')}
          </Typography>
          <Stack className="flex-row gap-0.5">
            <Image
              src="/assets/iconly/ic-token.svg"
              alt=""
              width={16}
              height={16}
            />
            <Typography variant="body2">CHZ</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack className="flex-row gap-1.5 items-center">
        <Typography
          variant="body2"
          color="#177DFF"
          onClick={() => refMyAirdrop.current?.onOpen()}
        >
          {t('airdrop.my')}
        </Typography>
        <Typography
          variant="body2"
          color="#177DFF"
        >
          {t('airdrop.trade')}
        </Typography>
        <Typography
          variant="body2"
          color="#177DFF"
          onClick={() => refMoreAirdrop.current?.onOpen()}
        >
          {t('airdrop.more')}
        </Typography>
      </Stack>
      <DrawerMyAirdrop refMyAirdrop={refMyAirdrop} />
      <DrawerMoreAirdrop refMoreAirdrop={refMoreAirdrop} />
    </Stack>
  );
};

export default Card;
