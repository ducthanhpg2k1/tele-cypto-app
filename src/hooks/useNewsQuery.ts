import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { NewsService } from 'src/services/news/newsService';
import type { NewsListParams } from 'src/services/news/newsTypes';

export const newsQueryKeys = {
  all: ['news'] as const,
  list: (params: NewsListParams) => [...newsQueryKeys.all, 'list', params] as const,
  detail: (id: string) => [...newsQueryKeys.all, 'detail', id] as const,
};

export const useNewsList = (params: NewsListParams = {}) => {
  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: newsQueryKeys.list(params),
    queryFn: () => NewsService.getList(params),
  });

  const items = data?.items ?? [];
  const hasMore = data?.metadata.hasMore ?? false;

  return {
    items,
    isLoading,
    isFetching,
    error,
    hasMore,
    refetch,
  };
};

export const useNewsLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: NewsService.likeNews,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: newsQueryKeys.all });
    },
  });
};

export const useNewsDislike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: NewsService.dislikeNews,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: newsQueryKeys.all });
    },
  });
};

export const useNewsShare = () => {
  return {
    shareNews: async (id: string) => {
      console.log('Sharing news:', id);
    },
  };
};
