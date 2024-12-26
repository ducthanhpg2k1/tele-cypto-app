import { Box } from '@mui/material';
import CopyTradeCTAButton from './copy-trade-cta-button';
import NotificationCopyTrade from './notification';
import TabGrid from './tab-grid/TabGrid';

const Content = () => {
  return (
    <Box sx={sx.wrap}>
      <CopyTradeCTAButton />
      <NotificationCopyTrade />
      <TabGrid />
    </Box>
  );
};

const sx = {
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    height: '100%',
  },
};

export default Content;
