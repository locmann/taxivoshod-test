'use client';
import { ChangeEvent, useEffect, useState } from 'react';
import { getFilters } from '@/services/services';
import { Filters } from '@/types/types';
import styles from './Filter.module.css';

const Filter = () => {
  const [filters, setFilters] = useState<Filters>();
  const [filteredBrand, setFilteredBrand] = useState('');

  useEffect(() => {
    getFilters().then((res) => setFilters(res));
  }, []);

  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilteredBrand(event.target.value);
  };

  return (
    <form className={styles.filter}>
      <div className={styles.section}>
        <label>{filters?.brands.name}</label>
        <select onChange={handleOnChange}>
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
        <select>
          <option value="-">-</option>
          {filters?.models.values
            .find((brand) => brand.brand === filteredBrand)
            ?.models.map((val) => (
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
        <select>
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
  );
};

export default Filter;
