import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Box, Button, IconButton, Slider, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useRef, useState } from 'react';
import SwitchHorizontal from 'src/assets/icons/SwitchHorizontal';
import ButtonBottomSheet from 'src/components/ui/button-bottomsheet/ButtonBottomSheet';
import CustomCheckbox from 'src/components/ui/checkbox';
import StackBalance from './StackBalance';
import ButtonTrade from './ButtonTrade';
import SlideRanger from 'src/components/ui/slide-ranger/SlideRanger';
import BottomSheetBalanceSection from 'src/components/ui/bottomsheet/bottom-sheet-balance-section/BottomSheetBalanceSection';
function valuetext(value: number) {
  return `${value}%`;
}
const marks = [
  {
    value: 0,
    alt: 'step1',
  },
  {
    value: 20,
    activeImage: 'active2.png',
    defaultImage: 'image2.png',
    alt: 'step2',
  },
  {
    value: 40,
    activeImage: 'active3.png',
    defaultImage: 'image3.png',
    alt: 'step3',
  },
  {
    value: 60,
    activeImage: 'active4.png',
    defaultImage: 'image4.png',
    alt: 'step4',
  },
  {
    value: 80,
    activeImage: 'active4.png',
    defaultImage: 'image4.png',
    alt: 'step4',
  },
  {
    value: 100,
    activeImage: 'active4.png',
    defaultImage: 'image4.png',
    alt: 'step4',
  },
];

export default function ActionTrade({ type }: { type: 'FUTURE' | 'SPOT' }) {
  const refDrawerBalanceSection = useRef<any>();
  const [price, setPrice] = useState<number>(69464);
  const [isAction, setIsAction] = useState<'sell' | 'buy'>('buy');
  const [sliderValue, setSliderValue] = useState<number>(0);
  const handlePriceChange = (value: number) => {
    setPrice(value);
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
          <Typography
            variant="caption"
            color={'#9e9e9e'}
            className="font-normal"
          >
            Khả dụng
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Typography
              variant="caption"
              color="#212121"
              className="font-normal"
            >
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
              variant="body2"
              color={isAction === 'buy' ? '#ffffff' : '#9E9E9E'}
              fontWeight={500}
            >
              Mua
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
              variant="body2"
              color={isAction === 'sell' ? '#ffffff' : '#9E9E9E'}
              fontWeight={500}
            >
              Bán
            </Typography>
          </Box>
        </Box>
      )}

      <ButtonBottomSheet
        title="Limit"
        iconPrefix="/assets/iconly/iconly-octagon-exclamation.svg"
        variant="body2"
        sxBox={{ marginTop: 1 }}
        styleLabel={{ fontWeight: 500 }}
      />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bgcolor="action.hover"
        p={0}
        px={0.5}
        borderRadius={1}
        sx={{ mt: '12px' }}
      >
        <IconButton
          size="small"
          onClick={() => handlePriceChange(price - 0.1)}
        >
          <MinusIcon
            style={{ height: '16px', width: '16px' }}
            color="#9E9E9E"
          />
        </IconButton>
        <Box textAlign="center">
          <Typography
            variant="caption"
            color="#9E9E9E"
            className="text-[10px] text-[#9E9E9E] font-normal"
          >
            Giá (USDT)
          </Typography>
          <Typography
            variant="body2"
            className="font-semibold"
          >
            {price.toFixed(2)}
          </Typography>
        </Box>
        <IconButton
          size="small"
          onClick={() => handlePriceChange(price + 0.1)}
        >
          <PlusIcon
            style={{ height: '16px', width: '16px' }}
            color="#9E9E9E"
          />
        </IconButton>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="action.hover"
        borderRadius={1}
        sx={{ height: 42, position: 'relative', mt: 1.5 }}
      >
        <Typography
          variant="body2"
          color="#9e9e9e"
          fontWeight={500}
        >
          Số lượng (BTC)
        </Typography>
        <IconButton
          size="small"
          className="absolute right-[4px]"
        >
          <PlusIcon
            style={{ height: '16px', width: '16px' }}
            color="#9E9E9E"
          />
        </IconButton>
      </Box>
      <Box sx={{ my: 1 }}>
        <SlideRanger
          min={0}
          max={100}
          step={1}
        />
      </Box>
      {type !== 'FUTURE' && (
        <Button
          sx={{
            width: '100%',
            py: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
            background: '#F5F5F5',
            borderRadius: '6px',
            mt: 2,
          }}
        >
          <Typography
            variant="body2"
            color={'#9E9E9E'}
            fontWeight={500}
          >
            Tổng (USDT)
          </Typography>
        </Button>
      )}

      <Stack className="mt-2 gap-1">
        <CustomCheckbox
          label={'TP/SL'}
          variantLabel="caption"
          classNameWrapper="flex-row items-center gap-[4px]"
          classNameLabel="font-normal"
        />
        <CustomCheckbox
          label={'TẢNG BĂNG'}
          variantLabel="caption"
          classNameWrapper="flex-row items-center gap-[4px]"
          classNameLabel="font-normal"
        />
      </Stack>

      <StackBalance type={type} />
      <ButtonTrade
        title={type === 'FUTURE' ? 'Mua ký quỹ' : 'Mua CELR'}
        style={{
          background: isAction === 'buy' ? '#4AAF57' : '#F54336',
        }}
        onClick={() => refDrawerBalanceSection.current.onOpen()}
      />

      {type === 'FUTURE' && (
        <>
          <StackBalance type={type} />
          <ButtonTrade
            title={'Bán/Short'}
            onClick={() => refDrawerBalanceSection.current.onOpen()}
            style={{
              background: '#F54336',
            }}
          />
        </>
      )}
      <BottomSheetBalanceSection ref={refDrawerBalanceSection} />
    </Box>
  );
}
