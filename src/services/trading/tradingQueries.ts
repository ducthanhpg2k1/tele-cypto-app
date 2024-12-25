export const tradingQueries = {
  getTradingData: (
    pair: string,
    timeframe: number,
    limit: number,
    step: number,
    requestCount: number
  ) => `
    query {
      pair(id: "${pair}") {
        id
        baseToken
        quoteToken
        tags
      }
      price(pair: "${pair}")
      orderbooks(pair: "${pair}", step: ${step}) {
        amount
        priceRange
      }
      balance {
        assets {
          name
          amount
        }
      }
      orders {
        id
        pair {
          id
          baseToken
          quoteToken
        }
        isBuy
        amount
        price
        filled
        createdAt
      }
      trade_history(limit: 20) {
        id
        pair {
          baseToken
          quoteToken
        }
        buyer {
          id
        }
        seller {
          id
        }
        filled
        buyPrice
        sellPrice
        matchedAt
      }
      ${
        requestCount % 10 === 1
          ? `
        stats(pair: "${pair}", timeframe: ${timeframe}, limit: ${limit}) {
          timeframe
          openPrice
          lowPrice
          highPrice
          closePrice
          volQuote
        }
        dailyStats(pair: "${pair}") {
          openPrice
          closePrice
          highPrice
          lowPrice
          baseVolume
          quoteVolume
        }
      `
          : ''
      }
    }
  `,
  orderHistory: `
    query OrderHistory {
      orders {
        id
        pair {
          id
          baseToken 
          quoteToken
        }
        isBuy
        amount
        price
        filled
        createdAt
        status
      }
    }
  `,
  openOrders: `
    query OpenOrders {
      orders {
        id
        pair {
          id
          baseToken
          quoteToken  
        }
        isBuy
        amount
        price
        filled
        createdAt
      }
    }
  `,
  tradeHistory: `
    query TradeHistory {
      trade_history(limit: 20) {
        id
        pair {
          baseToken
          quoteToken
        }
        buyer {
          id
        }
        seller {
          id
        }
        filled
        buyPrice
        sellPrice
        matchedAt
      }
    }
  `,
};
