import { CarResponse, ContextFilter, Filters, Root } from '@/types/types';

export const getProducts = async (page: number, filter: ContextFilter): Promise<Root> => {
  let url = `https://test.taxivoshod.ru/api/test/?w=catalog-cars&page=${page}`;
  if (filter.brand.length > 0) {
    filter.brand.forEach((brand) => {
      url += `&brand[]=${brand}`;
    });
  }
  if (filter.model.length > 0) {
    filter.model.forEach((model) => {
      url += `&model[]=${model}`;
    });
  }
  if (filter.tarif.length > 0) {
    filter.tarif.forEach((tarif) => {
      url += `&tarif[]=${defineTarif(tarif)}`;
    });
  }
  const response = await fetch(url);
  if (!response.ok) throw new Error('Unable to fetch products.');

  return response.json();
};

export const getProduct = async (id: string): Promise<CarResponse> => {
  const response = await fetch(`https://test.taxivoshod.ru/api/test/?w=catalog-car&id=${id}`);
  if (!response.ok) throw new Error('Unable to fetch products.');

  return response.json();
};

export const getFilters = async (): Promise<Filters> => {
  const response = await fetch('https://test.taxivoshod.ru/api/test/?w=catalog-filter');
  if (!response.ok) throw new Error('Unable to fetch products.');

  return response.json();
};

const defineTarif = (tarif: string) => {
  switch (tarif) {
    case 'Комфорт+':
      return '13';
    case 'Комфорт':
      return '14';
    case 'Комфорт2':
      return '22';
    case 'Комфорт3':
      return '26';
  }
};
