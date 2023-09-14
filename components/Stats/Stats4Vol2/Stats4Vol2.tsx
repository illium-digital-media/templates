import React from 'react';
import styles from './Stats4Vol2.module.css'; // Import your CSS Modules file for styling
import statsItems from './stats';

const Stats4Vol2: React.FC = () => {
  return (
    <div className={styles.stats4}>
      <ul className={styles.csCardGroup}>
        {statsItems.map((item, index) => (
          <li key={index} className={styles.csItem}>
            <picture className={styles.csPicture}>
              <img
                className={styles.csIcon}
                src={item.iconSrc}
                alt="icon"
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
                aria-hidden="true"
              />
            </picture>
            <div className={styles.csFlexGroup}>
              <span className={styles.csNumber}>{item.number}</span>
              <span className={styles.csDesc}>{item.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stats4Vol2;
