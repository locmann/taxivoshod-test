import { Dispatch, SetStateAction } from 'react';

export interface Root {
  result: number;
  page: number;
  pages: number;
  per_page: number;
  list: CarProduct[];
}
export interface CarProduct {
  id: number;
  brand: string;
  model: string;
  number: string;
  price: number;
  image?: string;
  tarif: string[];
}

export interface CarResponse {
  result: number;
  item: Car;
}

export interface Car {
  id: number;
  brand: string;
  model: string;
  price: number;
  images: { id: string; image: string }[];
  tarif: string[];
}

export interface ContextType {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
  setTotalPages: Dispatch<SetStateAction<number>>;
}

export interface Filters {
  result: number;
  brands: Brands;
  models: Models;
  tarif: Tarif;
}

export interface Brands {
  name: string;
  code: string;
  values: string[];
}

export interface Models {
  name: string;
  type: string;
  values: Value[];
}

export interface Value {
  brand: string;
  models: string[];
}

export interface Tarif {
  name: string;
  type: string;
  values: Values;
}

export interface Values {
  '13': string;
  '14': string;
  '22': string;
  '26': string;
}
