import { Box, Stack, styled, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CaretDown from 'src/assets/icons/CaretDown';
import CustomCheckbox from 'src/components/ui/checkbox';
import { Tabs } from 'src/components/ui/tabs';
import { TabItem } from 'src/components/ui/tabs/types';
import CardContentTabGrid from './CardContentTabGrid';
import DrawerDetailBot from '../../drawer-detail-bot';
import { useRef } from 'react';

export const Section = styled(Box)(({ theme }) => ({
  width: '100%',
  transition: 'transform 0.3s ease, opacity 0.3s ease',
}));
const TabGrid = ({ showSection }: { showSection: boolean }) => {
  const { t } = useTranslation();

  const tabGrids: TabItem[] = [
    {
      label: 'bot.gridSpot',
      key: 'bot.gridSpot',
      content: <TabsContent />,
    },
    {
      label: 'bot.gridFuture',
      key: 'bot.gridFuture',
      content: <TabsContent />,
    },
  ];
  return (
    <div>
      <Section
        sx={{
          height: showSection ? '32px' : 0,
          overflow: 'hidden',
          transition: 'height 0.3s ease',
        }}
      >
        <Typography variant='body1' color={'#212121'} fontWeight={600}>
          {t('bot.marketBot')}
        </Typography>
      </Section>
      <Tabs contentHeaderTab={
        <div className='flex items-center justify-between mt-1'>
          <div className='flex items-center gap-[2px]'>
            <Typography variant='caption' color='#212121' fontWeight={600}>
              Top PNL
            </Typography>
            <CaretDown color='#424242' />
          </div>
          <CustomCheckbox
            label={t('bot.trailing')}
            variantLabel='caption'
            classNameLabel='font-normal'
            classNameWrapper='flex-row items-center gap-1'
          />
        </div>
      } isFixedTab tabs={tabGrids} />
    </div>
  );
};

export default TabGrid;

const TabsContent = () => {
  const { t } = useTranslation();
  const refDrawerDetailBot: any = useRef();

  return (
    <>
      <div className='flex flex-col w-full gap-4 mt-3'>
        {Array.from({ length: 10 }).map((_, key) => {
          return (
            <CardContentTabGrid
              onClick={() => refDrawerDetailBot.current.onOpen()}
              key={key + 'card content'}
            />
          );
        })}
      </div>
      <DrawerDetailBot ref={refDrawerDetailBot} />
    </>
  );
};
