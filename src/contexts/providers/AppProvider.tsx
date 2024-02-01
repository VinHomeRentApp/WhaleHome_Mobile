import rootReducer from '@contexts/reducers/root.reducer';
import { RootAction, RootState, initialState } from '@contexts/types/root.types';
import { Dispatch, ReactNode, createContext, useReducer } from 'react';

export const RootContext = createContext<{
  state: RootState;
  dispatch: Dispatch<RootAction>;
}>({ state: initialState, dispatch: () => {} });

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return <RootContext.Provider value={{ state, dispatch }}>{children}</RootContext.Provider>;
};

export default AppProvider;
