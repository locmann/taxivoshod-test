'use client';
import styles from './DetailedCard.module.css';
import { useEffect, useState } from 'react';
import { getProduct } from '@/services/services';
import { CarResponse } from '@/types/types';

type PropsType = {
  id: string;
};

const DetailedCard = ({ id }: PropsType) => {
  const [carInfo, setCarInfo] = useState<CarResponse>();

  useEffect(() => {
    getProduct(id).then((res) => {
      console.log(res);
      setCarInfo(res);
    });
  }, [id]);

  return (
    <div className={styles.card}>
      <h3>{carInfo?.item.brand}</h3>
      <h4>{carInfo?.item.model}</h4>
      <div>slider</div>
      <span>{carInfo?.item.tarif.map((tarif) => <span key={tarif}>{tarif}</span>)}</span>
      <span>{carInfo?.item.price} ₽</span>
    </div>
  );
};

export default DetailedCard;
