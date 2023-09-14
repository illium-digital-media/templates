import React from 'react';
import styles from './WhyChooseUs.module.css'; // Import your CSS Modules file for styling
import Topper from '@/components1/Topper/Topper';
import items from './wcuitems';

const WhyChooseUs: React.FC = () => {
  return (
    <section className={styles.csSection}>
      <div className={styles.csContainer}>
        <div className={styles.csContent}>
          <div className={styles.csFlex}>
            <Topper text='Our Process' />
            <h2 className={styles.csTitle}>Why You Need the Top Lawyers in O’Connor</h2>
          </div>
          <p className={styles.csText}>
            We’re a financial and consulting business company of professional thinkers, strategists, digital innovators, designers, and problem solvers (everyone gets a mention). Our sense of curiosity brings brands to life, gets them talking, and makes sure they’re heard above.
          </p>
        </div>
        <ul className={styles.csCardGroup}>
          {items.map((item, index) => (
            <li className={styles.csItem} key={index}>
              <img className={styles.csIcon} aria-hidden="true" loading="lazy" decoding="async" src={item.icon} alt="icon" width="48" height="48" />
              <h3 className={styles.csH3}>{item.title}</h3>
              <p className={styles.csItemText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
