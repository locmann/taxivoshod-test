import DetailedCard from '@/components/DetailedCard/DetailedCard';
import styles from './page.module.css';
import BackButton from '@/components/BackButton/BackButton';

type PropsType = {
  params: {
    id: string;
  };
};

const CarPage = ({ params: { id } }: PropsType) => {
  return (
    <div className={styles.cardPage}>
      <BackButton>Назад</BackButton>
      <DetailedCard id={id} />
    </div>
  );
};

export default CarPage;
