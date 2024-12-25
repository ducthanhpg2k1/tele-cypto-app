export interface NewsCard {
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
