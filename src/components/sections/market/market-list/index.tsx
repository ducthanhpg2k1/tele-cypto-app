import { useTranslation } from 'react-i18next';
import { MarketTicker } from '../market-ticket';
import { useMarketData } from 'src/hooks/useMarketQuery';
import { maxHomeCoinList } from 'src/constants';
import { Box, Select, MenuItem, Typography, CircularProgress } from '@mui/material';
import { Tabs } from 'src/components/ui/tabs';
import CaretDown from 'src/assets/icons/CaretDown';

interface MarketListProps {
  showmore?: boolean;
}

const TABS = [
  { id: 'trending', label: 'market.trending' },
  { id: 'newest', label: 'market.newest' },
  { id: 'gainers', label: 'market.gainers' },
  { id: 'sales', label: 'market.sales' },
  { id: 'losers', label: 'market.losers' },
] as const;

export function MarketList({ showmore = false }: MarketListProps) {
  const { t } = useTranslation();
  const { market, prices, processMarketData, isLoading } = useMarketData();

  const tabItems = TABS.map((tab) => ({
    key: tab.id,
    label: t(tab.label),
    content: (
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'text.secondary',
          }}
        >
          <Select
            labelId={`select-${tab.id}-label`}
            id={`select-${tab.id}`}
            defaultValue="spot"
            size="small"
            sx={{
              color: '#9E9E9E',
              backgroundColor: 'transparent',
              fontSize: '12px',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '& .MuiSelect-select': {
                paddingLeft: 0,
                paddingRight: '5px !important',
                fontSize: '12px',
                fontWeight: 400,
              },
            }}
            IconComponent={() => <img src="/assets/iconly/ic-ad-grey.svg" />}
          >
            <MenuItem value="spot">{t('market.spot')}</MenuItem>
          </Select>

          <Box sx={{ width: 80, textAlign: 'right' }}>
            <Typography
              variant="body2"
              color={'#9E9E9E'}
              className="text-[12px]"
            >
              {t('market.price')}
            </Typography>
          </Box>
          <Box sx={{ width: 80, textAlign: 'center' }}>
            <Typography
              variant="body2"
              color={'#9E9E9E'}
              className="text-[12px]"
            >
              {t('market.change24h')}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {processMarketData(tab.id)
            .slice(0, showmore ? maxHomeCoinList : undefined)
            .map((coinId) => {
              const coin = market.find((c) => c.pairInfo.id === coinId);
              if (!coin) return null;
              const dollarEquivalent = prices[coin.pairInfo.baseToken.toLowerCase()] || 100;
              return (
                <MarketTicker
                  key={coin.pairInfo.id}
                  data={coin}
                  dollarEquivalent={dollarEquivalent}
                />
              );
            })}
        </Box>
      </Box>
    ),
  }));

  const defaultTabIndex = TABS.findIndex((tab) => tab.id === 'trending');
  const safeDefaultTab = defaultTabIndex !== -1 ? defaultTabIndex : 0;

  return (
    <Tabs
      tabs={tabItems}
      defaultTab={safeDefaultTab}
    />
  );
}

export default MarketList;
