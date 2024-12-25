import { DefaultOptions, QueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

const handleError = (error: unknown) => {
  if (error instanceof AxiosError) {
    toast.error(error.response?.data?.message || error.message);
    return;
  }
  toast.error('An unexpected error occurred');
};

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    refetchOnMount: true,
    gcTime: 10 * 60 * 1000, // 10 minutes
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: (failureCount, error) => {
      if (error instanceof AxiosError) {
        if ([401, 403, 404].includes(error.response?.status || 0)) {
          return false;
        }
      }
      return failureCount < 2;
    },
  },
  mutations: {
    onError: handleError,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
