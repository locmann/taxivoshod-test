import Pagination from '@/components/Pagination/Pagination';
import Products from '@/components/Products/Products';
import Filter from '@/components/Filter/Filter';

const ProductsPage = () => {
  return (
    <div>
      <Filter />
      <Products />
      <Pagination />
    </div>
  );
};

export default ProductsPage;
