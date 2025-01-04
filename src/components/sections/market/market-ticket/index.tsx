import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { MarketItem } from 'src/services/market/marketTypes';

interface MarketTickerProps {
  data: MarketItem;
  dollarEquivalent: number;
}

export const MarketTicker = ({ data, dollarEquivalent }: MarketTickerProps) => {
  const percentageChange = (data.stats.closePrice / data.stats.openPrice - 1) * 100 || 0;
  const isPositive = percentageChange >= 0;

  const href =
    data.pairInfo.minOrderAmount === 0
      ? `/view-only/${data.pairInfo.id}`
      : `/trade/${data.pairInfo.id}`;

  return (
    <Box
      component={Link}
      href={href}
      sx={{
        display: 'block',
        textDecoration: 'none',
        transition: 'background-color 0.2s ease-in-out',
      }}
    >
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Box display='flex' alignItems='center' minWidth={70.55} textAlign='left'>
          <Typography variant='body2' sx={{ fontWeight: 600, color: '#212121' }}>
            {data.pairInfo.baseToken}
          </Typography>
          <Typography variant='caption' sx={{ color: '#9E9E9E', ml: 0.5 }} className='font-normal'>
            /{data.pairInfo.quoteToken}
          </Typography>
        </Box>
        <Box display='flex' flexDirection='column' alignItems='flex-end'>
          <Typography variant='body2' sx={{ fontWeight: 500, color: '#212121' }}>
            {data.stats.closePrice}
          </Typography>
          <Typography
            variant='caption'
            sx={{ color: '#9E9E9E', fontWeight: 400, width: 80, textAlign: 'right' }}
          >
            ≈ {dollarEquivalent} $
          </Typography>
        </Box>
        <Box
          sx={{
            borderRadius: '4px',
            px: 1,
            py: 0.5,
            color: 'white',
            backgroundColor: isPositive ? '#4AAF57' : '#F54336',
          }}
        >
          <Typography variant='body2' fontWeight={500}>
            {isPositive ? '+' : ''}
            {percentageChange.toFixed(2)}%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
