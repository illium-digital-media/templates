import React from 'react';
import styles from './Gallery5Images.module.css';
import Topper from '@/components1/Topper/Topper';
import imagesData from './images';

const Gallery5Images: React.FC = () => {
  return (
    <section className={styles.gallery5Images}>
      <div className={styles.csContainer}>
        <div className={styles.csContent}>
          <Topper text='Our Portfolio' />
          <h2 className={styles.csTitle}>Our Photo Gallery</h2>
        </div>
        <div className={styles.csGallery}>
          {imagesData.map((image, index) => (
            <picture className={styles.csImage}>
              <img
                loading="lazy"
                decoding="async"
                src={image.imgSrc}
                alt={image.imgAlt}
                width="272"
                height="320"
              />
            </picture>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery5Images;
