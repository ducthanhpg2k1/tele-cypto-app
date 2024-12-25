import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabsProps } from './tabs/types';
import { styled } from '@mui/material/styles';
import { fontWeight } from '@mui/system';

interface ScrollableTabs extends TabsProps {
  hasIndicator?: boolean;
  handleChange?: (event: React.SyntheticEvent, value: any) => void;
  valueCustom?: number;
}

const TabsCustom = styled(Tabs, {
  shouldForwardProp: (prop) => prop !== 'hasIndicator',
})<{ hasIndicator: boolean }>(({ theme, hasIndicator }) => ({
  minHeight: 'auto',
  '& .MuiTabs-indicator': {
    display: hasIndicator ? 'block' : 'none', // Hiển thị hoặc ẩn indicator
    backgroundColor: hasIndicator ? '#177DFF' : 'transparent',
    borderRadius: 1000,
    height: '4px',
    transform: 'scaleX(0.5)',
  },
}));

const TabCustom = styled(Tab, {
  shouldForwardProp: (prop) => prop !== 'size',
})<{ size: 'medium' | 'large' }>(({ theme, size }) => ({
  rowGap: 2,
  lineHeight: '32px',
  fontSize: size == 'large' ? '16px' : '14px',
  padding: 0,
  minHeight: 'auto',
  '&.Mui-selected': {
    color: '#212121',
    fontWeight: 600,
  },
  '&:not(.Mui-selected)': {
    color: '#616161',
    fontWeight: 400,
  },
  '&.MuiButtonBase-root:not(:first-child)': {
    marginLeft: 12,
  },
}));

export default function ScrollableTabsButtonPrevent({
  tabs,
  defaultTab = 0,
  hasIndicator = false,
  handleChange = () => {},
  valueCustom,
}: ScrollableTabs) {
  const [value, setValue] = React.useState(defaultTab);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (handleChange) handleChange(event, newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TabsCustom
        hasIndicator={hasIndicator}
        value={valueCustom || value}
        onChange={handleChangeTab}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs"
      >
        {tabs.map((tab, index) => (
          <TabCustom
            key={tab.key}
            label={tab.label}
            size={hasIndicator ? 'medium' : 'large'}
            id={`scrollable-tab-${index}`}
            aria-controls={`scrollable-tabpanel-${index}`}
          />
        ))}
      </TabsCustom>
    </Box>
  );
}
