import { Box, Typography, Stack, TextField, InputAdornment } from '@mui/material';
import { t } from 'i18next';
import Image from 'next/image';
import React from 'react';
import SearchIcon from 'src/assets/icons/SearchIcon';
import ItemTopic from './ItemChoice';
import { mockDataAirdrop, mockDataArct, mockDataOptions, mockDataTrend } from 'src/constants';
import ItemArtc from './itemArtc';
import ItemOption from './ItemOption';

const Content = () => {
  return (
    <>
      <Stack className="grid grid-cols-5 w-full">
        {mockDataOptions.map((e, index) => {
          return (
            <ItemOption
              img={e.img}
              label={e.label}
              key={index}
            />
          );
        })}
      </Stack>
      <Stack
        className="gap-3"
        maxWidth={'calc(100%)'}
      >
        <Typography
          variant="h6"
          className="text-[16px]"
        >
          {t('academy.bestchoice')}
        </Typography>
        <Stack
          className="flex-row gap-1.5 overflow-auto pb-1"
          maxWidth={'calc(100% + 32px)'}
        >
          {mockDataAirdrop.map((e, index) => {
            return (
              <ItemTopic
                img={e.img}
                title={e.title}
                key={index}
              />
            );
          })}
        </Stack>
      </Stack>
      <Stack className="gap-3">
        <Typography
          variant="h6"
          className="text-[16px]"
        >
          {t('academy.trend')}
        </Typography>
        <Stack className="w-full gap-0">
          {mockDataTrend.map((e, index) => {
            return (
              <ItemArtc
                img={e.img}
                title={e.title}
                key={index}
                tag={e.tag}
              />
            );
          })}
        </Stack>
      </Stack>
    </>
  );
};

export default Content;
