export const marketQueries = {
  list: `
    query GetMarketList {
      market {
        pairInfo {
          id
          baseToken
          quoteToken
          listedAt
          minOrderAmount
        }
        stats {
          openPrice
          closePrice
          highPrice
          lowPrice
          baseVolume
          quoteVolume
        }
      }
    }
  `,

  prices: `
    query GetPrices {
      prices {
        assets {
          name
          price
        }
      }
    }
  `,
};
