import React from 'react';
import styles from './ReviewsSingleVol2.module.css';
import Button from '@/components1/Button/Button';

const ReviewsSingleVol2 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <picture className={styles.picture}>
          <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Reviews/man-smiling-m.jpg" />
          <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Reviews/man-smiling.jpg" />
          <img
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/man-smiling.jpg"
            alt="man smiling"
            width="320"
            height="340"
          />
        </picture>
        <div className={styles.content}>
          <span className={styles.topper}>Building Relationships</span>
          <h2 className={styles.title}>
            Why our Clients <span>Love Us</span>
          </h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus at incidunt dignissimos repellendus? Officiis quo architecto eligendi? Cum, recusandae.
          </p>
          <p className={styles.review}>
            Lorem ipsum dolor sit amet, consectetur adipiscing. Orci odio morbi vel ut lectus risus dis. Euismod dui etiam sed posuere odio tortor vitae ultrices. Ultrices sem et at egestas turpis scelerisque.
            <span className={styles.name}>Marie-Claire</span>
          </p>
          <Button link='' text='Read Reviews' />
        </div>
      </div>
    </section>
  );
};

export default ReviewsSingleVol2;
