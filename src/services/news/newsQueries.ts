export const newsQueries = {
  list: `
    query GetNewsList($limit: Float) {
      all_news(limit: $limit) {
        id
        account {
          username
        }
        content
        tags
        publishedAt
        views
        likes
        dislikes
        comments
      }
    }
  `,
  detail: `
    query GetNewsDetail($id: ID!) {
      news(id: $id) {
        id
        account {
          username
        }
        content
        tags
        publishedAt
        views
        likes
        dislikes
        comments
      }
    }
  `,
};
