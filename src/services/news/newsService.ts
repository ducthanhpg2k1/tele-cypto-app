import HttpClient from 'src/config/httpClient';
import { newsQueries } from './newsQueries';
import type { NewsDetailResponse, NewsListParams, NewsListResponse } from './newsTypes';

export class NewsService {
  static async getList(params: NewsListParams = {}) {
    const variables = {
      limit: params.limit || 5,
    };

    const response = await HttpClient.graphqlQuery<NewsListResponse>(newsQueries.list, variables);

    const items = response.all_news.map((item) => ({
      id: item.id,
      author: {
        id: '',
        username: item.account.username,
        avatar: '/images/white-user-avatar.svg',
      },
      content: item.content,
      tags: Array.isArray(item.tags) ? item.tags : item.tags.split(','),
      publishedAt: item.publishedAt,
      stats: {
        views: item.views,
        likes: item.likes,
        dislikes: item.dislikes,
        comments: item.comments,
        shares: 0,
      },
    }));

    const hasMore = items.length >= (params.limit || 5);

    return {
      items,
      metadata: {
        total: items.length,
        hasMore,
      },
    };
  }

  static async getDetail(id: string) {
    const response = await HttpClient.graphqlQuery<NewsDetailResponse>(newsQueries.detail, { id });

    return {
      id: response.news.id,
      author: {
        id: '',
        username: response.news.account.username,
        avatar: '/images/white-user-avatar.svg',
      },
      content: response.news.content,
      tags: Array.isArray(response.news.tags) ? response.news.tags : response.news.tags.split(','),
      publishedAt: response.news.publishedAt,
      stats: {
        views: response.news.views,
        likes: response.news.likes,
        dislikes: response.news.dislikes,
        comments: response.news.comments,
        shares: 0,
      },
    };
  }

  static async likeNews(id: string) {
    return HttpClient.patch(`/news/like/${id}`);
  }

  static async dislikeNews(id: string) {
    return HttpClient.patch(`/news/dislike/${id}`);
  }
}
