import { t } from 'i18next';
import { forwardRef, useRef } from 'react';
import CustomDrawer, { DrawerHandle } from 'src/components/ui/drawer';
import SurfSpot from './surf-spot';
import PastProfits from './past-profits';
import ChartLintPastProfits from './chart-lint-past-profits';
import ChartPreviewBot from './chart-preview-bot';
import BasicInformation from './basic-information';
import SpotGridIntroduction from './spot-grid-introduction';
import Button from '../../button';
import { Typography } from '@mui/material';
import BottomSheetInvestmentAmount from './bottom-sheet-investment-amount';

const DrawerDetailBot = forwardRef<DrawerHandle, {}>((_, ref) => {
  const refBottomSheetInvestmentAmount: any = useRef();
  return (
    <CustomDrawer
      anchor='right'
      paperClassName={{
        sx: { width: { xs: '100%', sm: 400 }, pt: 2 },
      }}
      ref={ref}
      label={t('bot.detail_header')}
    >
      <div className='flex flex-col gap-6'>
        <SurfSpot />
        <div className='flex flex-col gap-2'>
          <PastProfits />
          <ChartLintPastProfits />
          <ChartPreviewBot />
          <BasicInformation />
          <SpotGridIntroduction />
        </div>
        <div className='sticky bottom-0'>
          <Button
            onClick={() => refBottomSheetInvestmentAmount.current.onOpen()}
            fullWidth
            className='!h-[48px] p-[10px] font-semibold'
          >
            <Typography className='text-[14px] font-semibold'>{t('bot.copy')}</Typography>
          </Button>
        </div>
        <BottomSheetInvestmentAmount ref={refBottomSheetInvestmentAmount} />
      </div>
    </CustomDrawer>
  );
});

export default DrawerDetailBot;
