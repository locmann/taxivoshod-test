'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useAppContext } from '@/context/context';
import { useEffect } from 'react';
import styles from './Pagination.module.css';
const Pagination = () => {
  const { totalPages, currentPage, setCurrentPage } = useAppContext();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleClick = (i: number) => {
    console.log(currentPage);
    setCurrentPage(currentPage + i);
    console.log(currentPage);
    const params = new URLSearchParams(searchParams);
    console.log(params);
    params.set('page', currentPage.toString());
    console.log(params);
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('page', currentPage.toString());
    replace(`${pathname}?${params.toString()}`);
  }, [currentPage, pathname, replace, searchParams]);

  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage === 1}
        onClick={() => handleClick(-1)}
      >
        ←
      </button>

      <div>
        {currentPage} / {totalPages}
      </div>

      <button
        disabled={currentPage === totalPages}
        onClick={() => handleClick(1)}
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
