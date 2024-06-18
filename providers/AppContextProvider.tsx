'use client';

import { AppContext } from '@/context/context';
import { FC, PropsWithChildren, useState } from 'react';
import { ContextFilter } from '@/types/types';

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filter, setFilter] = useState<ContextFilter>({ brand: [], model: [], tarif: [] });

  return (
    <AppContext.Provider
      value={{ currentPage, setCurrentPage, totalPages, setTotalPages, filter, setFilter }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
