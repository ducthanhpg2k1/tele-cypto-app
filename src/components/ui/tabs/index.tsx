import { ReactNode, useCallback, useState } from 'react';
import { Box, Tab } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import { TabPanel } from './tab-panel';
import { ScrollableTabs, TabCustom } from './styles';
import type { TabsProps } from './types';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

interface ITabProps extends TabsProps {
  hideIndicator?: boolean;
  size?: 'medium' | 'large';
  onChaneTab?: any;
  contentHeaderTab?: ReactNode;
  isFixedTab?: boolean;
  onSwipeTab?: (index: number) => void;
  isNoScroll?:boolean
}
export const Tabs = ({
  contentHeaderTab,
  isFixedTab,
  tabs,
  defaultTab = 0,
  onChaneTab,
  children,
  onSwipeTab,
  isNoScroll,
  hideIndicator,
  size,
}: ITabProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [value, setValue] = useState(defaultTab);
  const [loadedTabs, setLoadedTabs] = useState<Set<number>>(new Set([defaultTab]));

  const handleChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setLoadedTabs((prev: Set<number>) => new Set([...prev, newValue]));
    onChaneTab && onChaneTab(newValue);
  }, []);

  const handleChangeIndex = (index: number) => {
    setValue(index);
    setLoadedTabs((prev: Set<number>) => new Set([...prev, index]));
    onSwipeTab && onSwipeTab(index);
  };

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <div
        className={clsx('transition-all duration-300', {
          'sticky z-[9999] bg-white pb-1 top-[-18px]': isFixedTab,
          'pb-0': !isFixedTab,
        })}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            width: '100%',
            height: '100%',
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
        <>{contentHeaderTab && contentHeaderTab}</>
      </div>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
        containerStyle={{
          transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
        }}
        resistance
        style={{  height: '100%' }}
      >
        {tabs.map((tab, index) => (
          <TabPanel isNoScroll={isNoScroll} key={tab.key} value={value} index={index} dir={theme.direction}>
            {loadedTabs.has(index) && tab.content}
          </TabPanel>
        ))}
      </SwipeableViews>
    </Box>
  );
};
