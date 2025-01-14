import { Box, IconButton, Typography } from '@mui/material';
import React, { useRef } from 'react';
import CaretDown from 'src/assets/icons/CaretDown';
import ChartIcon from 'src/assets/icons/ChartIcon';
import ThreeDotIcon from 'src/assets/icons/ThreeDotIcon';
import { TypographyRegular } from '../NewTrade';
import IconStars from 'src/assets/icons/IconStars';
import IconInfinity from 'src/assets/icons/IconInfinity';
import BottomSheetCoinSection from 'src/components/ui/bottomsheet/bottom-sheet-coin-section/BottomSheetCoinSection';
import BottomSheetMore from 'src/components/ui/bottomsheet/bottom-sheet-more';
import DrawerDetailInformation from 'src/components/ui/drawer/drawer-detail-information';

export default function CurrencyInfo({ type }: { type?: 'FUTURE' | 'SPOT' }) {
  const refDrawerCoinSection = useRef<any>();
  const refDrawerMore = useRef<any>();
  const refDrawerDetailInformation = useRef<any>();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        px: 0.5,
        pt: 1,
      }}
    >
      <Box
        sx={{ display: 'flex', alignItems: 'start', flexDirection: 'column' }}
        onClick={() => refDrawerCoinSection.current.onOpen()}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <Typography variant='body1' color={'#212121'} fontWeight={600}>
            BTC/USDT
          </Typography>
          {type === 'FUTURE' && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px 8px',
                borderRadius: '4px',
                background: '#f5f5f5',
                cursor: 'pointer',
              }}
            >
              <TypographyRegular variant='caption'>Vĩnh cửu</TypographyRegular>
            </Box>
          )}
          <CaretDown />
        </Box>

        <Typography variant='caption' color='#F54336' className='font-normal'>
          -3.8%
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {type === 'FUTURE' && <IconStars className='w-6 h-6 color-[#212121]' />}
        <div onClick={() => refDrawerDetailInformation.current.onOpen()}>
          <ChartIcon className='w-6 h-6 color-[#212121]' />
        </div>

        {type === 'FUTURE' && <IconInfinity className='w-6 h-6 color-[#212121]' />}
        <div onClick={() => refDrawerMore.current.onOpen()}>
          <ThreeDotIcon className='w-6 h-6 ' fill='#212121' />
        </div>
      </Box>

      <BottomSheetMore ref={refDrawerMore} />
      <BottomSheetCoinSection ref={refDrawerCoinSection} />
      <DrawerDetailInformation ref={refDrawerDetailInformation} />
    </Box>
  );
}
