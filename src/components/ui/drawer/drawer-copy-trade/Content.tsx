import { Box, styled } from '@mui/material';
import CopyTradeCTAButton from './copy-trade-cta-button';
import NotificationCopyTrade from './notification';
import TabGrid from './tab-grid/TabGrid';

export const Section = styled(Box)(({ theme }) => ({
  width: '100%',
  transition: 'transform 0.3s ease, opacity 0.3s ease',
}));

const Content = ({ type, showSection }: { type?: string; showSection?: boolean }) => {
  return (
    <div className='pb-14'>
      <Section
        sx={{
          height: showSection ? '135px' : 0,
          overflow: 'hidden',
          transition: 'height 0.2s ease',
          animationDuration: 100,
        }}
      >
        <>
          <CopyTradeCTAButton />
          <NotificationCopyTrade />
        </>
      </Section>
      <TabGrid type={type} />
    </div>
  );
};

const sx = {
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    overflow: 'auto',
    height: '100%',
    paddingRight: '1px',
    marginBottom: '24px',
  },
};

export default Content;
