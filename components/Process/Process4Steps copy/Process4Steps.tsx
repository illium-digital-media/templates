import React from 'react';
import styles from './Process4Steps.module.css';
import Topper from '@/components1/Topper/Topper';

const Process4Steps: React.FC = () => {
  return (
    <section className={styles.process4Steps}>
      <div className={styles.csContainer}>
        {/* Left Section */}
        <div className={styles.csContent}>
          <Topper text='Steps' />
          <h2 className={styles.csTitle}>Our Process from Start to Finish</h2>
          <p className={styles.csText}>
            strong amet, consectetur adipiscing elit. At tortor facilisis non, rutrum sagittis, libero. Iaculis egestas enim lacinia est phasellus odio laoreet nisl amet.
          </p>
          <a href="" className={styles.csButtonSolid}>Read More</a>
        </div>
        {/* Right Section */}
        <ul className={styles.csRightSection}>
          <li className={styles.csItem}>
            <span className={styles.csNumber}>01</span>
            <p className={styles.csItemText}>
              <strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit. At tortor facilisis non.
            </p>
          </li>
          <li className={styles.csItem}>
            <span className={styles.csNumber}>02</span>
            <p className={styles.csItemText}>
              <strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit. At tortor facilisis non.
            </p>
          </li>
          <li className={styles.csItem}>
            <span className={styles.csNumber}>03</span>
            <p className={styles.csItemText}>
              <strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit. At tortor facilisis non.
            </p>
          </li>
          <li className={styles.csItem}>
            <span className={styles.csNumber}>04</span>
            <p className={styles.csItemText}>
              <strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit. At tortor facilisis non.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Process4Steps;
