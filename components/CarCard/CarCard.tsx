import { CarProduct } from '@/types/types';
import styles from './CarCard.module.css';
import Link from 'next/link';

type PropsType = {
  car: CarProduct;
};

const CarCard = ({ car }: PropsType) => {
  return (
    <div className={styles.card}>
      <h3>{car.brand}</h3>
      <h4>{car.model}</h4>
      <div>slider</div>
      <span>
        {car.tarif.map((tarif) => (
          <span key={tarif}>{tarif}</span>
        ))}
      </span>
      <span>{car.price} ₽</span>
      <Link href={`/products/${car.id}`}>Подробнее</Link>
    </div>
  );
};

export default CarCard;
