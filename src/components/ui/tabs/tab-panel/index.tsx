import { Box } from '@mui/material';
import React from 'react';
import { TabPanelProps } from '../types';

export const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { children, value, index, dir, ...other } = props;
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-tabpanel-${index}`}
      aria-labelledby={`scrollable-tab-${index}`}
      dir={dir}
      style={{ overflow: 'auto', height: '100%' }}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
};
