import React from 'react';
import styles from './Stats4.module.css';
import statsItems from './stats';

const Stats4: React.FC = () => {
  return (
    <section className={`p-section relative ${styles.stats4}`}>
      <div className={styles.csContainer}>
        {/* Stats */}
        <ul className={styles.csCardGroup}>
          {/* Map over the items array to generate list items */}
          {statsItems.map((item, index) => (
            <li key={index} className={styles.csItem}>
              <span className={styles.csNumber}>{item.number}</span>
              <span className={styles.csDesc}>{item.desc}</span>
            </li>
          ))}
        </ul>

        {/* Main Image */}
        <picture className={styles.csPicture}>
          <source
            media="(max-width: 600px)"
            srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/salon3-m.jpg"
          />
          <source
            media="(min-width: 601px)"
            srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/salon3.jpg"
          />
          <img
            loading="lazy"
            decoding="async"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/salon3.jpg"
            alt="brick Wall"
            width="1920"
            height="1282"
            aria-hidden="true"
          />
        </picture>
      </div>

      {/* Background Image */}
      <picture className={styles.csBackground}>
        <source
          media="(max-width: 600px)"
          srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/marble-m.jpg"
        />
        <source
          media="(min-width: 601px)"
          srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/marble.jpg"
        />
        <img
          loading="lazy"
          decoding="async"
          src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/marble.jpg"
          alt="brick Wall"
          width="1920"
          height="1282"
          aria-hidden="true"
        />
      </picture>
    </section>
  );
};

export default Stats4;
