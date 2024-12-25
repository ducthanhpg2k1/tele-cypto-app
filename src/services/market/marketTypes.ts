export interface MarketPairInfo {
  id: string;
  baseToken: string;
  quoteToken: string;
  listedAt: string;
  minOrderAmount: number;
}

export interface MarketStats {
  openPrice: number;
  closePrice: number;
  highPrice: number;
  lowPrice: number;
  baseVolume: number;
  quoteVolume: number;
}

export interface MarketItem {
  pairInfo: MarketPairInfo;
  stats: MarketStats;
}

export interface MarketListResponse {
  market: MarketItem[];
}

export interface PriceAsset {
  name: string;
  price: number;
}

export interface MarketPricesResponse {
  prices: {
    assets: PriceAsset[];
  };
}
