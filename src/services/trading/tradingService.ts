import {
  ChartStats,
  CreateOrderResponse,
  GraphQLRequestOptions,
  OrderBookEntry,
  OrderFormData,
  Trade,
  Order,
  DailyStats,
} from 'src/types/trading';
import HttpClient from 'src/config/httpClient';
import { tradingQueries } from './tradingQueries';

interface OrdersResponse {
  orders: Order[];
}

interface TradeHistoryResponse {
  trade_history: Trade[];
}

interface MarketStatsResponse {
  stats: ChartStats[];
  dailyStats: DailyStats;
}

interface OrderBookResponse {
  orderbooks: OrderBookEntry[];
}

export class TradingService {
  static async createOrder(orderData: OrderFormData): Promise<CreateOrderResponse> {
    const transformedData = {
      pair: orderData.pair,
      amount: orderData.amount,
      price: orderData.type === 'LIMIT' ? orderData.price : 0,
      totalMarketValue: orderData.type === 'MARKET' ? orderData.totalMarketValue : undefined,
      isBuy: orderData.side === 'BUY',
    };
    return await HttpClient.post<CreateOrderResponse>('/orders', transformedData);
  }

  static async cancelOrder(orderId: string): Promise<void> {
    await HttpClient.post(`/orders/cancel/${orderId}`, {});
  }

  static async getTradingData<T>(options: GraphQLRequestOptions): Promise<T> {
    return HttpClient.graphqlQuery<T>(options.query, options.variables);
  }

  static async getOpenOrders(pair: string): Promise<Order[]> {
    const response = await HttpClient.graphqlQuery<OrdersResponse>(tradingQueries.openOrders, {
      pair,
    });
    return response.orders || [];
  }

  static async getOrderHistory(pair: string): Promise<Order[]> {
    const response = await HttpClient.graphqlQuery<OrdersResponse>(tradingQueries.orderHistory, {
      id: pair,
    });
    return response.orders || [];
  }

  static async getTradeHistory(pair: string, limit: number = 20): Promise<Trade[]> {
    const response = await HttpClient.graphqlQuery<TradeHistoryResponse>(
      tradingQueries.tradeHistory,
      {
        pair,
        limit,
      }
    );
    return response.trade_history || [];
  }

  static async getMarketStats(
    pair: string,
    timeframe: number
  ): Promise<{
    stats: ChartStats[];
    dailyStats: DailyStats;
  }> {
    const response = await HttpClient.graphqlQuery<MarketStatsResponse>(
      tradingQueries.getTradingData(
        pair,
        timeframe,
        500,
        0.1,
        1 // Force stats query
      )
    );
    return {
      stats: response.stats || [],
      dailyStats: response.dailyStats || ({} as DailyStats),
    };
  }

  static async getOrderBook(
    pair: string,
    step: number = 0.1
  ): Promise<{
    asks: OrderBookEntry[];
    bids: OrderBookEntry[];
  }> {
    const response = await HttpClient.graphqlQuery<OrderBookResponse>(
      tradingQueries.getTradingData(
        pair,
        5, // Default timeframe
        500,
        step,
        0
      )
    );
    const orderbooks = response.orderbooks || [];
    const midPoint = Math.floor(orderbooks.length / 2);

    return {
      asks: orderbooks.slice(0, midPoint),
      bids: orderbooks.slice(midPoint),
    };
  }
}
