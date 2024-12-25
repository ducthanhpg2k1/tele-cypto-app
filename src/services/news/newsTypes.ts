export interface NewsListParams {
  limit?: number;
}

export interface NewsItemResponse {
  id: string;
  account: {
    username: string;
  };
  content: string;
  tags: string | string[];
  publishedAt: string;
  views: number;
  likes: number;
  dislikes: number;
  comments: number;
}

export interface NewsItem {
  id: string;
  author: {
    id: string;
    username: string;
    avatar?: string;
  };
  content: string;
  media?: string[];
  tags: string[];
  publishedAt: string;
  stats: {
    views: number;
    likes: number;
    dislikes: number;
    comments: number;
    shares: number;
  };
}

export interface NewsListResponse {
  all_news: NewsItemResponse[];
}

export interface NewsDetailResponse {
  news: NewsItemResponse;
}
