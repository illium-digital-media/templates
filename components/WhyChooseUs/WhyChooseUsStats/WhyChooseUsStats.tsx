import React from 'react';
import styles from './WhyChooseUsStats.module.css';

const statItems = [
  { iconSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/transparency.svg', title: 'Transparency' },
  { iconSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/empowerment.svg', title: 'Empowerment' },
  { iconSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/growth.svg', title: 'Growth' },
  { iconSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/partnership.svg', title: 'Partnership' },
];

const statInfoItems = [
  { description: 'Individual Offices', value: '15+' },
  { description: 'Years of Experience', value: '12+' },
  { description: 'Professional Team', value: '350' },
  { description: 'Projects Completed', value: '375' },
  { description: 'Happy Clients', value: '2.5k+' },
];

const WhyChooseUsStats = () => {
  return (
    <section className={styles.csSection}>
      <div className={styles.csContainer}>
        <div className={styles.csContent}>
          <span className={styles.csTopper}>YOU'RE IN GOOD COMPANY</span>
          <h2 className={styles.csTitle}>2,000+ Companies Taking Investment from Us</h2>
          <p className={styles.csText}>
            In the new era of technology, we look to the future with certainty and pride for our company and business. Consider all the drivers of change that give you the blocks and pride for our components you need to change to create a truly professional website era.
          </p>
        </div>
        <ul className={styles.csCardGroup}>
          {statItems.map((item, index) => (
            <li key={index} className={styles.csItem}>
              <img src={item.iconSrc} alt="icon" className={styles.csIcon} aria-hidden="true" decoding="async" width="60" height="60" />
              <h3 className={styles.csH3}>{item.title}</h3>
            </li>
          ))}
        </ul>
      </div>

      <ul className={styles.csStatGroup}>
        {statInfoItems.map((item, index) => (
          <li key={index} className={styles.csStat}>
            <span className={styles.csDesc}>{item.description}</span>
            <span className={styles.csNumber}>{item.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyChooseUsStats;