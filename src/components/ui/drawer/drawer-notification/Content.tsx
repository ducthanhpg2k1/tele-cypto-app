import { Box, Typography, Stack, TextField, InputAdornment } from '@mui/material';
import { t } from 'i18next';
import Image from 'next/image';
import React from 'react';
import SearchIcon from 'src/assets/icons/SearchIcon';
import ItemTopic from './ItemTopic';
import { mockDataArct, mockDataTopic } from 'src/constants';
import ItemArtc from './itemArtc';
import InputSearch from 'src/components/ui/input-search/InputSearch';

const Content = () => {
  return (
    <Box sx={sx.wrapper}>
      <Stack className="gap-3">
        <Typography
          variant="h6"
          className="text-[16px]"
        >
          {t('notification.topic')}
        </Typography>
        <Stack className="grid grid-cols-2 gap-1 w-full">
          {mockDataTopic.map((e, index) => {
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
          variant="body1"
          className="leading-6 font-semibold"
        >
          {t('notification.artc')}
        </Typography>
        <Stack className="w-full gap-2">
          {mockDataArct.map((e, index) => {
            return (
              <ItemArtc
                img={e.img}
                title={e.title}
                key={index}
                time={e.time}
              />
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Content;
const sx = {
  wrapper: {
    display: 'flex',
    paddingBottom: '24px',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
    height: 'calc(100dvh - 62px)',
    overflow: 'auto',
  },
};
