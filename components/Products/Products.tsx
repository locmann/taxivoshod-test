'use client';
import { getProducts } from '@/services/services';
import { useEffect, useState } from 'react';
import { Root } from '@/types/types';
import { useAppContext } from '@/context/context';
import CarCard from '@/components/CarCard/CarCard';
import styles from './Products.module.css';
const Products = () => {
  const { currentPage, setTotalPages, filter } = useAppContext();
  const [products, setProducts] = useState<Root>();
  useEffect(() => {
    getProducts(currentPage, filter).then((res) => {
      setProducts(res);
      setTotalPages(res.pages);
    });
  }, [currentPage, filter]);

  return (
    <div className={styles.wrapper}>
      {products?.list.map((product) => (
        <CarCard
          key={product.id}
          car={product}
        />
      ))}
    </div>
  );
};

export default Products;
