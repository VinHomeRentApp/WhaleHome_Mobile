import { RootContext } from '@contexts/providers/AppProvider';
import { useContext } from 'react';

const useRootContext = () => {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error('useRootContext must be used within a RootProvider');
  }
  return context;
};

export default useRootContext;
