import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import IconDone from 'src/assets/icons/IconDone';
import { t } from 'i18next';
import { margin } from '@mui/system';

const SubmitsionResult = () => {
  return (
    <Box sx={sx.wrap}>
      <Box sx={sx.content}>
        <IconDone />
        <Typography sx={sx.title}>{t('listing.submitsionResult.title')}</Typography>
        <Typography sx={sx.desc}>{t('listing.submitsionResult.desc')}</Typography>
      </Box>
    </Box>
  );
};

export default SubmitsionResult;
const sx = {
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    marginTop: '8px',
  },
  content: {
    display: 'flex',
    paddingBottom: '24px',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '12px',
    flex: 1,
  },
  title: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
    textAlign: 'center',
  },
  desc: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '21px',
    textAlign: 'center',
    color: '#9E9E9E',
    maxWidth: '80%',
  },
};
