import { useCallback, useState } from 'react';
import { Box, Tab } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import { TabPanel } from './tab-panel';
import { ScrollableTabs, TabCustom } from './styles';
import type { TabsProps } from './types';
import { useTranslation } from 'react-i18next';

interface ITabProps extends TabsProps {
  hideIndicator?: boolean;
  size?: 'medium' | 'large';
}
export const Tabs = ({ tabs, defaultTab = 0, children, hideIndicator, size }: ITabProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [value, setValue] = useState(defaultTab);
  const [loadedTabs, setLoadedTabs] = useState<Set<number>>(new Set([defaultTab]));

  const handleChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setLoadedTabs((prev: Set<number>) => new Set([...prev, newValue]));
  }, []);

  const handleChangeIndex = (index: number) => {
    setValue(index);
    setLoadedTabs((prev: Set<number>) => new Set([...prev, index]));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          width: '100%',
        }}
      >
        <ScrollableTabs
          hideIndicator={hideIndicator || false}
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons='auto'
          aria-label='scrollable tabs'
        >
          {tabs.map((tab, index) => (
            <TabCustom
              key={tab.key}
              label={t(tab.label)}
              id={`scrollable-tab-${index}`}
              aria-controls={`scrollable-tabpanel-${index}`}
              size={size || 'medium'}
            />
          ))}
        </ScrollableTabs>
        <div>{children}</div>
      </Box>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
        containerStyle={{
          transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
        }}
        resistance
      >
        {tabs.map((tab, index) => (
          <TabPanel key={tab.key} value={value} index={index} dir={theme.direction}>
            {loadedTabs.has(index) && tab.content}
          </TabPanel>
        ))}
      </SwipeableViews>
    </Box>
  );
};
