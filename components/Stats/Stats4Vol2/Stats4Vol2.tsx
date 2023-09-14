import React from 'react';
import styles from './Stats4Vol2.module.css'; // Import your CSS Modules file for styling

interface StatItem {
  iconSrc: string;
  number: string;
  description: string;
}

const statsItems: StatItem[] = [
  {
    iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/person-gold.svg',
    number: '50+',
    description: 'Attorneys',
  },
  {
    iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/group-gold.svg',
    number: '850+',
    description: 'Global Customers',
  },
  {
    iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/award-gold.svg',
    number: '12',
    description: 'Winning Awards',
  },
  {
    iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/check-gold.svg',
    number: '98%',
    description: 'Success Rate',
  },
];

const Stats4Vol2: React.FC = () => {
  return (
    <div id="stats-316" className={styles.stats4}>
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
