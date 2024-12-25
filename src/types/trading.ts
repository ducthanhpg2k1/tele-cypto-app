export type OrderType = 'LIMIT' | 'MARKET';
export type OrderSide = 'BUY' | 'SELL';
export type OrderStatus = 'open' | 'pending' | 'filled' | 'cancelled';

export interface OrderFormData {
  type: OrderType;
  side: OrderSide;
  pair: string;
  price?: number;
  amount: number;
  totalMarketValue?: number;
}

export interface CreateOrderResponse {
  id: string;
  pair: {
    id: string;
    baseToken: string;
    quoteToken: string;
  };
  amount: number;
  price: number;
  filled: number;
  isBuy: boolean;
  createdAt: Date;
  status?: OrderStatus;
}

export interface OrderBookEntry {
  price: number;
  amount: number;
  priceRange?: number;
  total?: number;
}

export interface Trade {
  id: string;
  time: number;
  price: number;
  amount: number;
  isBuyerMaker: boolean;
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
  matchedAt: Date;
}

export interface ChartStats {
  timeframe: number;
  openPrice: number;
  lowPrice: number;
  highPrice: number;
  closePrice: number;
  volQuote: number;
  volBase?: number;
}

export interface DailyStats {
  openPrice: number;
  closePrice: number;
  highPrice: number;
  lowPrice: number;
  baseVolume: number;
  quoteVolume: number;
  change_24h: number;
  change_percent_24h: number;
}

export interface Balance {
  name: string;
  amount: number;
  locked?: number;
  total?: number;
}

export interface AssetInfo {
  name: string;
  fullName: string;
  decimals: number;
  minOrderAmount: number;
  maxOrderAmount?: number;
  withdrawMinAmount?: number;
  withdrawMaxAmount?: number;
  withdrawFee?: number;
}
export interface OrderFormProps {
  baseToken: string;
  quoteToken: string;
  lastPrice: number;
  selectedPrice?: number;
  onSubmit: (order: OrderFormData) => void;
  orderBook: {
    asks: Array<{ amount: number; priceRange: number }>;
    bids: Array<{ amount: number; priceRange: number }>;
  };
  pairId: string;
}

export interface TradingChartProps {
  data: ChartStats[];
  lastPrice: number;
  timeframe: number;
  onTimeframeChange: (timeframe: number) => void;
}

export interface GraphQLRequestOptions {
  query: string;
  variables?: Record<string, unknown>;
}

export interface TimeframeOption {
  value: number;
  label: string;
}

interface BaseOrder {
  id: string;
  pair: {
    id: string;
    baseToken: string;
    quoteToken: string;
  };
  amount: number;
  price: number;
  filled: number;
  isBuy: boolean;
  createdAt: Date;
}
export interface OrderFormState {
  type: OrderType;
  side: OrderSide;
  price: number;
  amount: number;
  total: number;
  percentage: number;
}
export interface OrderBookProps {
  asks: Array<{ amount: number; priceRange: number }>;
  bids: Array<{ amount: number; priceRange: number }>;
  lastPrice: number;
  step: number;
  onStepChange?: (step: number) => void;
  onPriceSelect?: (price: number) => void;
}

export interface PriceTickerProps {
  price: string | number;
  amount: number;
  total: number;
  maxTotal: number;
  isBuy: boolean;
  onClick?: () => void;
}

export interface Order extends BaseOrder {
  user?: {
    id: string;
  };
  status: OrderStatus;
  updatedAt?: Date;
  totalMarketValue?: number;
}

export interface CreateOrderResponse extends BaseOrder {
  status?: OrderStatus;
}

export interface ITradeHistory {
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
}

export interface TradingData {
  pair: {
    id: string;
    baseToken: string;
    quoteToken: string;
    tags: string;
    minOrderAmount: number;
  };
  price: number;
  orderBook: {
    asks: Array<{ amount: number; priceRange: number }>;
    bids: Array<{ amount: number; priceRange: number }>;
  };
  trades: ITradeHistory[];
  stats: ChartStats[];
  dailyStats: {
    openPrice: number;
    highPrice: number;
    lowPrice: number;
    baseVolume: number;
    quoteVolume: number;
    closePrice: number;
  };
  balances?: {
    assets: Array<{
      name: string;
      amount: number;
    }>;
  };
}
