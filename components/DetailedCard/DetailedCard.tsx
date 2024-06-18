'use client';
import styles from './DetailedCard.module.css';
import { useEffect, useState } from 'react';
import { getProduct } from '@/services/services';
import { CarResponse } from '@/types/types';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { SampleNextArrow, SamplePrevArrow } from '@/ui/ui';

type PropsType = {
  id: string;
};

const DetailedCard = ({ id }: PropsType) => {
  const [carInfo, setCarInfo] = useState<CarResponse>();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    adaptiveHeight: true,
  };
  useEffect(() => {
    getProduct(id).then((res) => {
      setCarInfo(res);
    });
  }, [id]);

  return (
    <div className={styles.card}>
      <h3>{carInfo?.item.brand}</h3>
      <h4>{carInfo?.item.model}</h4>
      <div className={styles.slider}>
        <Slider {...settings}>
          {carInfo?.item.images.map((image) => (
            <div key={image.id}>
              <Image
                width={300}
                height={300}
                src={image.image}
                alt="Car image"
                className={styles.img}
              />
            </div>
          ))}
        </Slider>
      </div>

      <span>{carInfo?.item.tarif.map((tarif) => <span key={tarif}>{tarif}</span>)}</span>
      <span>{carInfo?.item.price} ₽</span>
    </div>
  );
};

export default DetailedCard;
