import { Box } from '@mui/material';
import CopyTradeCTAButton from './copy-trade-cta-button';
import NotificationCopyTrade from './notification';
import TabGrid from './tab-grid/TabGrid';
import { padding } from '@mui/system';

const Content = ({ type }: { type?: string }) => {
  return (
    <Box sx={sx.wrap}>
      <CopyTradeCTAButton />
      <NotificationCopyTrade />
      <TabGrid type={type}/>
    </Box>
  );
};

const sx = {
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    height: '100%',
    paddingRight: '1px',
    marginBottom:'24px',
  },
};

export default Content;
