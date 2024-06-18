'use client';
import { ChangeEvent, useEffect, useState } from 'react';
import { getFilters } from '@/services/services';
import { Filters } from '@/types/types';
import styles from './Filter.module.css';
import { useAppContext } from '@/context/context';

const Filter = () => {
  const { filter, setFilter } = useAppContext();
  const [filters, setFilters] = useState<Filters>();

  useEffect(() => {
    getFilters().then((res) => setFilters(res));
  }, []);

  const handleOnBrand = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === '-') return;
    setFilter((prevState) => {
      return { ...prevState, brand: [...prevState.brand, event.target.value] };
    });
  };

  const handleOnModel = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === '-') return;
    setFilter((prevState) => {
      return { ...prevState, model: [...prevState.model, event.target.value] };
    });
  };

  const handleOnTarif = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === '-') return;
    setFilter((prevState) => {
      return { ...prevState, tarif: [...prevState.tarif, event.target.value] };
    });
  };

  const clearUp = () => {
    setFilter(() => {
      return { brand: [], model: [], tarif: [] };
    });
  };

  return (
    <>
      <form className={styles.filter}>
        <div className={styles.section}>
          <label>{filters?.brands.name}</label>
          <select onChange={handleOnBrand}>
            <option value="-">-</option>
            {filters?.brands.values.map((val) => (
              <option
                key={val}
                value={val}
              >
                {val}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.section}>
          <label>{filters?.models.name}</label>
          <select onChange={handleOnModel}>
            <option value="-">-</option>
            {filters?.models.values
              .filter((brand) => filter?.brand.includes(brand.brand))
              .flatMap((val) => val.models)
              .map((val) => (
                <option
                  key={val}
                  value={val}
                >
                  {val}
                </option>
              ))}
          </select>
        </div>
        <div className={styles.section}>
          <label>{filters?.tarif.name}</label>
          <select onChange={handleOnTarif}>
            <option value="-">-</option>
            {Object.values(filters?.tarif.values ?? {}).map((val) => (
              <option
                key={val}
                value={val}
              >
                {val}
              </option>
            ))}
          </select>
        </div>
      </form>
      <div className={styles.added}>
        <div className={styles.tags}>
          <div className={styles.tag}>
            {filter?.brand.map((val) => <span key={val}>{val}</span>)}
          </div>
          <div className={styles.tag}>
            {filter?.model.map((val) => <span key={val}>{val}</span>)}
          </div>
          <div className={styles.tag}>
            {filter?.tarif.map((val) => <span key={val}>{val}</span>)}
          </div>
        </div>
        <button onClick={clearUp}>Очистить фильтр</button>
      </div>
    </>
  );
};

export default Filter;
