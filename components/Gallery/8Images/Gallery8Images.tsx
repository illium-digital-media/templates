import React from 'react';
import styles from './Gallery8Images.module.css';
import Topper from '@/components1/Topper/Topper';
import imageData from './images';
import Title from '@/components1/Title/Title';
import Button from '@/components1/Button/Button';

const Gallery8Images: React.FC = () => {
  return (
    <section className={styles.gallery8Images}>
      <div className={styles.csContainer}>
        <div className={styles.csContent}>
          <Topper text='Service' />
          <Title title='Landscaping Services in Sometown, USA' />
          <p className={styles.csText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <ul className={styles.csImageGroup}>
          {/* Add your list items for images here */}
          {imageData.map((image, index) => (
            <li key={index} className={styles.csItem}>
              <picture className={styles.csPicture}>
                <source media="(max-width: 600px)" srcSet={image.mobileSrc} />
                <source media="(min-width: 601px)" srcSet={image.desktopSrc} />
                <img
                  loading="lazy"
                  decoding="async"
                  src={image.desktopSrc}
                  alt={image.alt}
                  width="346"
                  height="346"
                />
              </picture>
            </li>
          ))}
          {/* Add more images as needed */}
        </ul>
        <Button link='' text='View Full Gallery' />
      </div>
    </section>
  );
};

export default Gallery8Images;