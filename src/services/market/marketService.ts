import HttpClient from 'src/config/httpClient';
import { marketQueries } from './marketQueries';
import type { MarketListResponse, MarketPricesResponse } from './marketTypes';

export class MarketService {
  static async getList() {
    const response = await HttpClient.graphqlQuery<MarketListResponse>(marketQueries.list);

    const items = response.market.map((item) => ({
      pairInfo: item.pairInfo,
      stats: item.stats,
    }));

    return items;
  }

  static async getPrices() {
    const response = await HttpClient.graphqlQuery<MarketPricesResponse>(marketQueries.prices);

    const prices = response.prices.assets.reduce(
      (acc, item) => {
        acc[item.name] = item.price;
        return acc;
      },
      {} as Record<string, number>,
    );

    return prices;
  }
}
