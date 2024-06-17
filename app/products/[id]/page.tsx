import DetailedCard from '@/components/DetailedCard/DetailedCard';
import styles from './page.module.css';

type PropsType = {
  params: {
    id: string;
  };
};

const CarPage = ({ params: { id } }: PropsType) => {
  return (
    <div className={styles.cardPage}>
      <DetailedCard id={id} />
    </div>
  );
};

export default CarPage;
