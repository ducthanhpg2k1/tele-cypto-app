import { Balance, ChartStats, OrderBookEntry, Trade } from 'src/types/trading';
import { spotFee } from '../../constants';

export const transformOrderbook = (data: any[], step: number, sort: number): OrderBookEntry[] => {
  if (!data?.length) {
    return Array(7).fill({ price: 0, amount: 0, priceRange: 0 });
  }

  const startPrice = sort === 1 ? data[data.length - 1].priceRange + step * 6 : data[0].priceRange;

  return Array(7)
    .fill(null)
    .map((_, p) => {
      const currentPrice = startPrice - p * step;
      if (currentPrice < 0) {
        return { price: 0, amount: 0, priceRange: 0 };
      }
      const existing = data.find((e) => e.priceRange === currentPrice);
      return existing || { price: currentPrice, amount: 0, priceRange: currentPrice };
    });
};

export const transformTrades = (trades: any[]): Trade[] => {
  if (!trades?.length) return [];

  return trades.map((trade) => ({
    id: trade.id,
    time: new Date(trade.matchedAt).getTime(),
    price: Math.max(trade.buyPrice, trade.sellPrice),
    amount: trade.filled,
    isBuyerMaker: true,
    pair: trade.pair,
    buyer: trade.buyer,
    seller: trade.seller,
    matchedAt: new Date(trade.matchedAt),
  }));
};

export const transformBalanceData = (balanceData: any): Record<string, number> => {
  if (!balanceData?.assets) return {};

  return balanceData.assets.reduce((acc: Record<string, number>, item: Balance) => {
    acc[item.name.toLowerCase()] = item.amount;
    return acc;
  }, {});
};

export const formatPriceStep = (price: number): number[] => {
  if (price >= 1000) return [0.01, 0.1, 1, 10, 50, 100];
  if (price >= 100) return [0.01, 0.1, 1, 10];
  if (price >= 10) return [0.01, 0.1, 1];
  if (price >= 1) return [0.001, 0.01, 0.1];
  if (price >= 0.1) return [0.0001, 0.001, 0.01];
  if (price >= 0.01) return [0.00001, 0.0001, 0.001];
  if (price >= 0.001) return [0.000001, 0.00001, 0.0001];
  return [0.0000001, 0.000001, 0.00001];
};

export const transformChartData = (chartStats: ChartStats[], lastPrice: number): ChartStats[] => {
  if (!chartStats?.length) return [];

  const transformed = [...chartStats];
  if (transformed.length > 0) {
    transformed[transformed.length - 1] = {
      ...transformed[transformed.length - 1],
      closePrice: lastPrice,
    };
  }

  return transformed;
};

export const formatPrice = (price: number | null | undefined, step: number): string => {
  if (price === null || price === undefined) {
    return '0.00';
  }

  if (!step || step <= 0) {
    return price.toFixed(2);
  }

  const stepStr = step.toString();
  const decimals = stepStr.includes('0.') ? stepStr.split('.')[1].length : 0;

  return price.toFixed(decimals);
};

export const validateBalance = (
  amount: number,
  balance: number,
  fee: number = spotFee
): { isValid: boolean; required: number; shortfall: number } => {
  const totalRequired = amount * (1 + fee);
  return {
    isValid: totalRequired <= balance,
    required: totalRequired,
    shortfall: Math.max(0, totalRequired - balance),
  };
};
