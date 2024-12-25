import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { OrderFormData } from 'src/types/trading';
import { TradingService } from 'src/services/trading/tradingService';
import { tradingQueries } from 'src/services/trading/tradingQueries';

const POLL_INTERVAL = 1000;
const STATS_POLL_INTERVAL = 10000;

interface TradingDataResponse {
  pair: {
    id: string;
    baseToken: string;
    quoteToken: string;
    tags: string;
    minOrderAmount: number;
  };
  price: number;
  orderbooks: [
    Array<{ amount: number; priceRange: number }>,
    Array<{ amount: number; priceRange: number }>,
  ];
  trade_history: Array<{
    id: string;
    pair: {
      baseToken: string;
      quoteToken: string;
    };
    buyer: {
      id: string;
    };
    seller: {
      id: string;
    };
    filled: number;
    buyPrice: number;
    sellPrice: number;
    matchedAt: Date;
  }>;
  stats?: Array<{
    timeframe: number;
    openPrice: number;
    lowPrice: number;
    highPrice: number;
    closePrice: number;
    volQuote: number;
  }>;
  dailyStats?: {
    openPrice: number;
    highPrice: number;
    lowPrice: number;
    baseVolume: number;
    quoteVolume: number;
    closePrice: number;
  };
  balance?: {
    assets: Array<{
      name: string;
      amount: number;
    }>;
  };
}

// Transform function to convert response to desired format
function transformTradingData(response: TradingDataResponse) {
  const [askOrders, bidOrders] = response.orderbooks;

  return {
    pair: response.pair,
    price: response.price,
    orderBook: {
      asks: askOrders || [],
      bids: bidOrders || [],
    },
    trades: response.trade_history,
    stats: response.stats || [],
    dailyStats: response.dailyStats || {
      openPrice: 0,
      highPrice: 0,
      lowPrice: 0,
      baseVolume: 0,
      quoteVolume: 0,
      closePrice: 0,
    },
    balances: response.balance,
  };
}

type QueryKeys = {
  all: ['trading'];
  pair: (id: string) => ['trading', string];
  pairData: (id: string) => ['trading', string, 'data'];
  openOrders: (id: string) => ['trading', string, 'openOrders'];
  orderHistory: (id: string) => ['trading', string, 'history'];
  tradeHistory: (id: string) => ['trading', string, 'trades'];
  orderBook: (id: string, step: number) => ['trading', string, 'orderbook', number];
  marketStats: (id: string, timeframe: number) => ['trading', string, 'stats', number];
};

export const tradingQueryKeys: QueryKeys = {
  all: ['trading'],
  pair: (id: string) => ['trading', id],
  pairData: (id: string) => ['trading', id, 'data'],
  openOrders: (id: string) => ['trading', id, 'openOrders'],
  orderHistory: (id: string) => ['trading', id, 'history'],
  tradeHistory: (id: string) => ['trading', id, 'trades'],
  orderBook: (id: string, step: number) => ['trading', id, 'orderbook', step],
  marketStats: (id: string, timeframe: number) => ['trading', id, 'stats', timeframe],
};

export function useTradingData(pair: string, timeframe: number = 5) {
  return useQuery({
    queryKey: tradingQueryKeys.pairData(pair),
    queryFn: async () => {
      const response = await TradingService.getTradingData({
        query: tradingQueries.getTradingData(pair, timeframe, 500, 0.1, 1),
      });
      return transformTradingData(response as TradingDataResponse);
    },
    refetchInterval: POLL_INTERVAL,
    staleTime: 500,
  });
}

// Rest of the hooks remain unchanged...

export function useOrderBook(pair: string, step: number = 0.1) {
  return useQuery({
    queryKey: tradingQueryKeys.orderBook(pair, step),
    queryFn: () => TradingService.getOrderBook(pair, step),
    refetchInterval: POLL_INTERVAL,
  });
}

export function useMarketStats(pair: string, timeframe: number) {
  return useQuery({
    queryKey: tradingQueryKeys.marketStats(pair, timeframe),
    queryFn: () => TradingService.getMarketStats(pair, timeframe),
    refetchInterval: STATS_POLL_INTERVAL,
  });
}

export function useOpenOrders(pair?: string) {
  return useQuery({
    queryKey: tradingQueryKeys.openOrders(pair || ''),
    queryFn: () => {
      if (!pair) return [];
      return TradingService.getOpenOrders(pair);
    },
    refetchInterval: POLL_INTERVAL,
    enabled: Boolean(pair),
  });
}

export function useOrderHistory(pair?: string) {
  return useQuery({
    queryKey: tradingQueryKeys.orderHistory(pair || ''),
    queryFn: () => {
      if (!pair) return [];
      return TradingService.getOrderHistory(pair);
    },
    enabled: Boolean(pair),
  });
}

export function useTradeHistory(pair: string, limit: number = 20) {
  return useQuery({
    queryKey: tradingQueryKeys.tradeHistory(pair),
    queryFn: () => TradingService.getTradeHistory(pair, limit),
    refetchInterval: POLL_INTERVAL,
  });
}

export function useCreateOrder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (orderData: OrderFormData) => TradingService.createOrder(orderData),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: tradingQueryKeys.openOrders(variables.pair),
      });
      queryClient.invalidateQueries({
        queryKey: tradingQueryKeys.orderHistory(variables.pair),
      });
    },
  });
}

export function useCancelOrder() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: (orderId: string) => TradingService.cancelOrder(orderId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: tradingQueryKeys.all,
        predicate: (query) => {
          const key = query.queryKey as string[];
          return key.includes('openOrders') || key.includes('history');
        },
      });
    },
  });
}
