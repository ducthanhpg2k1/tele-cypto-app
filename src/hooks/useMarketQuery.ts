import { useQuery } from '@tanstack/react-query';
import { MarketService } from 'src/services/market/marketService';

export const marketQueryKeys = {
  all: ['market'] as const,
  list: () => [...marketQueryKeys.all, 'list'] as const,
  prices: () => [...marketQueryKeys.all, 'prices'] as const,
};

export const useMarketList = () => {
  return useQuery({
    queryKey: marketQueryKeys.list(),
    queryFn: () => MarketService.getList(),
  });
};

export const useMarketPrices = () => {
  return useQuery({
    queryKey: marketQueryKeys.prices(),
    queryFn: () => MarketService.getPrices(),
  });
};

export const useMarketData = () => {
  const { data: market = [], isLoading: marketLoading } = useMarketList();
  const { data: prices = {}, isLoading: pricesLoading } = useMarketPrices();

  const processMarketData = (tab: string) => {
    return [...market]
      .sort((a, b) => {
        switch (tab) {
          case 'trending':
            return b.stats.quoteVolume - a.stats.quoteVolume;

          case 'newest':
            return (
              new Date(b.pairInfo.listedAt).getTime() - new Date(a.pairInfo.listedAt).getTime()
            );

          case 'gainers': {
            const aChange = a.stats.closePrice / a.stats.openPrice - 1 || 0;
            const bChange = b.stats.closePrice / b.stats.openPrice - 1 || 0;
            return bChange - aChange;
          }

          case 'losers': {
            const aChange = a.stats.closePrice / a.stats.openPrice - 1 || 0;
            const bChange = b.stats.closePrice / b.stats.openPrice - 1 || 0;
            return aChange - bChange;
          }

          default:
            return 0;
        }
      })
      .map((coin) => coin.pairInfo.id);
  };

  return {
    market,
    prices,
    processMarketData,
    isLoading: marketLoading || pricesLoading,
  };
};
