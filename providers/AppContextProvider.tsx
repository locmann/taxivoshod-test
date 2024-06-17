'use client';

import { AppContext } from '@/context/context';
import { FC, PropsWithChildren, useState } from 'react';

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  return (
    <AppContext.Provider value={{ currentPage, setCurrentPage, totalPages, setTotalPages }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
