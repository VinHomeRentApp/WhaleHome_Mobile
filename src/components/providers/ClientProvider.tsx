// AppProvider.jsx

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react';

type ClientProviderProps = {
  children: ReactNode;
};

const ClientProvider = ({ children }: ClientProviderProps) => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ClientProvider;
