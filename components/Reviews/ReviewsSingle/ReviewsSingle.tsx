import React from 'react';
import styles from './ReviewsSingle.module.css';

const ReviewsSingle = () => {
  return (
    <section className={styles.section}>
      <picture className={styles.image}>
        <source
          media="(max-width: 600px)"
          srcSet="https://csimg.nyc3.digitaloceanspaces.com/Reviews/old-building-m.jpg"
        />
        <source
          media="(min-width: 601px)"
          srcSet="https://csimg.nyc3.digitaloceanspaces.com/Reviews/old-building.jpg"
        />
        <img
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/old-building.jpg"
          alt="building"
          width="842"
          height="548"
        />
      </picture>
      <div className={styles.content}>
        <img
          className={styles.quote}
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/top-quote.svg"
          alt="quote"
          width="40"
          height="33"
        />
        <p className={styles.review}>
          Their knowledge, expertise, advice and confidence gave me courage,
          belief and strength needed to help me go through my divorce.
        </p>
        <div className={styles.info}>
          <img
            className={styles.profile}
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/profile2.jpg"
            alt="profile"
            width="50"
            height="50"
          />
          <div className={styles.flex}>
            <span className={styles.name}>Sarah</span>
            <span className={styles.job}>CEO, HK Traders</span>
          </div>
        </div>
        {/* Bottom watermark quote */}
        <img
          className={styles.watermark}
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/top-quote.svg"
          alt="quote"
          width="136"
          height="120"
        />
      </div>
    </section>
  );
};

export default ReviewsSingle;
