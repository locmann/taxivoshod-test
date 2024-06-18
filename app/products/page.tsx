import Pagination from '@/components/Pagination/Pagination';
import Products from '@/components/Products/Products';
import Filter from '@/components/Filter/Filter';
import { Suspense } from 'react';

const ProductsPage = () => {
  return (
    <div>
      <Filter />
      <Products />
      <Suspense>
        <Pagination />
      </Suspense>
    </div>
  );
};

export default ProductsPage;
