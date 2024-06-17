import { createContext, useContext } from 'react';
import { ContextType } from '@/types/types';

export const AppContext = createContext<ContextType | undefined>(undefined);

export const useAppContext = () => {
  const contextData = useContext(AppContext);
  if (contextData === undefined) {
    throw new Error('Context is undefined');
  }

  return contextData;
};
