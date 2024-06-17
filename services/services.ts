import { CarResponse, Root } from '@/types/types';

export const getProducts = async (page: number): Promise<Root> => {
  const response = await fetch(`https://test.taxivoshod.ru/api/test/?w=catalog-cars&page=${page}`);
  if (!response.ok) throw new Error('Unable to fetch products.');

  return response.json();
};

export const getProduct = async (id: string): Promise<CarResponse> => {
  const response = await fetch(`https://test.taxivoshod.ru/api/test/?w=catalog-car&id=${id}`);
  if (!response.ok) throw new Error('Unable to fetch products.');

  return response.json();
};
