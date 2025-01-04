import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { t } from 'i18next';
import { useRef, useState } from 'react';
import SwitchHorizontal from 'src/assets/icons/SwitchHorizontal';
import BottomSheetBalanceSection from 'src/components/ui/bottomsheet/bottom-sheet-balance-section/BottomSheetBalanceSection';
import ButtonBottomSheet from 'src/components/ui/button-bottomsheet/ButtonBottomSheet';
import CustomCheckbox from 'src/components/ui/checkbox';
import SlideRanger from 'src/components/ui/slide-ranger/SlideRanger';
import ButtonTrade from './ButtonTrade';
import StackBalance from './StackBalance';
import { InputCustomStyled } from './styles';
import BottomSheetFilterSelection from 'src/components/ui/bottomsheet/bottom-sheet-filter-selection/BottomSheetFilterSelection';
import { DATA_LIMIT } from '../constants';
function valuetext(value: number) {
  return `${value}%`;
}
export default function ActionTrade({ type }: { type: 'FUTURE' | 'SPOT' }) {
  const refDrawerBalanceSection = useRef<any>();
  const refBottomSheetFilter = useRef<any>();
  const [filterLimit, setFilterLimit] = useState(DATA_LIMIT[0].value);
  const [price, setPrice] = useState<number>(69464);
  const [quantity, setQuantity] = useState<number>(0);
  const [totalUsdt, setTotalUsdt] = useState<number>();

  const [isAction, setIsAction] = useState<'sell' | 'buy'>('buy');
  const [sliderValue, setSliderValue] = useState<number>(0);
  const handlePriceChange = (value: number) => {
    setPrice(value);
  };
  const handleTotalUsdtChange = (value: number) => {
    setTotalUsdt(value);
  };
  const handleChange = (event: Event, value: number | number[]) => {
    setSliderValue(value as number);
  };
  return (
    <Box>
      {type === 'FUTURE' && (
        <Box
          sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'space-between' }}
        >
          <Typography variant='caption' color={'#9e9e9e'} className='font-normal'>
            {t('exchange.available')}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Typography variant='caption' color='#212121' className='font-normal'>
              0 USDT
            </Typography>
            <SwitchHorizontal />
          </Box>
        </Box>
      )}
      {type !== 'FUTURE' && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              borderRadius: '6px 0 0 6px',
              height: 28,
              width: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: isAction === 'buy' ? '#4AAF57' : 'transparent',
              border: isAction === 'sell' ? '1px solid #EEEEEE' : '',
              borderRight: 'none',
              transition: 'all 0.3s ease-in-out',
            }}
            onClick={() => setIsAction('buy')}
          >
            <Typography
              variant='body2'
              color={isAction === 'buy' ? '#ffffff' : '#9E9E9E'}
              fontWeight={500}
            >
              {t('trade.buy')}
            </Typography>
          </Box>
          <Box
            sx={{
              background: isAction === 'sell' ? '#F54336' : 'transparent',
              border: isAction === 'buy' ? '1px solid #EEEEEE' : '',
              borderRadius: '0 6px 6px 0',
              height: 28,
              width: '50%',
              borderLeft: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => setIsAction('sell')}
          >
            <Typography
              variant='body2'
              color={isAction === 'sell' ? '#ffffff' : '#9E9E9E'}
              fontWeight={500}
            >
              {t('trade.sell')}
            </Typography>
          </Box>
        </Box>
      )}
      <BottomSheetFilterSelection
        ref={refBottomSheetFilter}
        data={DATA_LIMIT}
        value={filterLimit}
        handleClickTop={setFilterLimit}
      />
      <ButtonBottomSheet
        title='Limit'
        iconPrefix='/assets/iconly/iconly-octagon-exclamation.svg'
        variant='body2'
        sxBox={{ marginTop: 1 }}
        styleLabel={{ fontWeight: 500 }}
        onClick={() => refBottomSheetFilter.current.onOpen()}
      />
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        bgcolor='action.hover'
        p={0}
        px={0.5}
        borderRadius={1}
        sx={{ mt: '12px' }}
      >
        <IconButton size='small' onClick={() => handlePriceChange(price - 0.1)}>
          <MinusIcon style={{ height: '16px', width: '16px' }} color='#9E9E9E' />
        </IconButton>
        <Box
          textAlign='center'
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'column'}
        >
          <Typography
            variant='caption'
            color='#9E9E9E'
            className='text-[10px] text-[#9E9E9E] font-normal'
          >
            {t('trade.price')} (USDT)
          </Typography>
          <InputCustomStyled
            type='number'
            value={price}
            onChange={(e) => handlePriceChange(+e.target.value)}
          />
        </Box>
        <IconButton size='small' onClick={() => handlePriceChange(price + 1)}>
          <PlusIcon style={{ height: '16px', width: '16px' }} color='#9E9E9E' />
        </IconButton>
      </Box>

      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        bgcolor='action.hover'
        borderRadius={1}
        sx={{
          height: 42,
          position: 'relative',
          mt: 1.5,
        }}
        overflow={'hidden'}
      >
        <InputCustomStyled
          type='number'
          placeholder='Số lượng (BTC)'
          value={quantity}
          onChange={(e) => setQuantity(+e.target.value)}
        />
        <IconButton
          size='small'
          className='absolute right-[4px]'
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          <PlusIcon style={{ height: '16px', width: '16px' }} color='#9E9E9E' />
        </IconButton>
      </Box>
      <Box sx={{ mb: 1, marginTop: '20px' }}>
        <SlideRanger min={0} max={100} step={1} />
      </Box>
      {type !== 'FUTURE' && (
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          bgcolor='action.hover'
          p={0}
          px={1}
          borderRadius={1}
          sx={{ mt: '12px', minHeight: '42px' }}
        >
          <Box
            textAlign='center'
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection={'column'}
          >

            <input type='number' placeholder={`${t('trade.total')} (USDT)`} className='placeholder:text-[14px] placeholder:leading-6 placeholder:font-medium placeholder:text-[#9E9E9E] bg-transparent text-center w-full outline-none' value={totalUsdt} onChange={(e) => handleTotalUsdtChange(+e.target.value)} />


          </Box>

        </Box>

      )}

      <Stack className='mt-2 gap-1'>
        <CustomCheckbox
          label={'TP/SL'}
          variantLabel='caption'
          classNameWrapper='flex-row items-center gap-[4px]'
          classNameLabel='font-normal'
        />
        <CustomCheckbox
          label={t('trade.ice')}
          variantLabel='caption'
          classNameWrapper='flex-row items-center gap-[4px]'
          classNameLabel='font-normal'
        />
      </Stack>

      <StackBalance type={type} />
      <ButtonTrade
        title={type === 'FUTURE' ? t('trade.buy') : t('trade.buy') + ' ' + 'CELR'}
        style={{
          background: isAction === 'buy' ? '#4AAF57' : '#F54336',
        }}
        onClick={() => refDrawerBalanceSection.current.onOpen()}
        background={isAction === 'buy' ? '#4AAF57' : '#F54336'}
      />

      {type === 'FUTURE' && (
        <>
          <StackBalance type={type} />
          <ButtonTrade
            title={t('trade.sell')}
            onClick={() => refDrawerBalanceSection.current.onOpen()}
            style={{
              background: '#F54336',
            }}
            background='#F54336'
          />
        </>
      )}
      <BottomSheetBalanceSection ref={refDrawerBalanceSection} />
    </Box>
  );
}
