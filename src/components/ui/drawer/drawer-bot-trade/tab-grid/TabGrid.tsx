import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CaretDown from 'src/assets/icons/CaretDown';
import CustomCheckbox from 'src/components/ui/checkbox';
import { Tabs } from 'src/components/ui/tabs';
import { TabItem } from 'src/components/ui/tabs/types';
import CardContentTabGrid from './CardContentTabGrid';
import DrawerDetailBot from '../../drawer-detail-bot';
import { useRef } from 'react';

const TabGrid = () => {
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
      <Typography variant='body1' color={'#212121'} fontWeight={700}>
        {t('bot.marketBot')}
      </Typography>
      <Tabs tabs={tabGrids} />
    </div>
  );
};

export default TabGrid;

const TabsContent = () => {
  const { t } = useTranslation();
  const refDrawerDetailBot: any = useRef();

  return (
    <>
      <Stack className='flex flex-col w-full mt-6 gap-6'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-[2px]'>
            <Typography variant='caption' color='#212121' fontWeight={600}>
              Top PNL
            </Typography>
            <CaretDown color='#424242' />
          </div>
          <CustomCheckbox
            label={t('bot.trailing')}
            variantLabel='caption'
            classNameWrapper='flex-row items-center gap-1'
          />
        </div>
        {Array.from({ length: 10 }).map((_, key) => {
          return (
            <CardContentTabGrid
              onClick={() => refDrawerDetailBot.current.onOpen()}
              key={key + 'card content'}
            />
          );
        })}
      </Stack>
      <DrawerDetailBot ref={refDrawerDetailBot} />
    </>
  );
};
