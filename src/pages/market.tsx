import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MarketList from 'src/components/sections/market/market-list';
import { useMarketData } from 'src/hooks/useMarketQuery';

const MarketScreen = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('trending');
  const { market, prices, processMarketData, isLoading } = useMarketData();

  const TABS = [
    { key: 'trending', id: 'trending', label: 'Trending' },
    { key: 'newest', id: 'newest', label: 'Newest' },
    { key: 'gainers', id: 'gainers', label: 'Gainers' },
    { key: 'sales', id: 'sales', label: 'Sales' },
    { key: 'losers', id: 'losers', label: 'Losers' },
  ];

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4 }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ px: 2 }}>
      <MarketList />
    </Box>
  );
};

export default MarketScreen;
