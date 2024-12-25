import { useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from 'src/config/reactQuery';

interface QueryProviderProps {
  children: React.ReactNode;
}

export const QueryProvider = ({ children }: QueryProviderProps) => {
  const [client] = useState(() => queryClient);

  return (
    <QueryClientProvider client={client}>
      {children}
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
};
