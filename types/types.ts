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
