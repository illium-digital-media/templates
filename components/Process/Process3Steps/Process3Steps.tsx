import React from 'react';
import styles from './Process3Steps.module.css';
import Topper from '@/components1/Topper/Topper';
import stepsData from './steps';
import Link from 'next/link';
import Title from '@/components1/Title/Title';

const Arrow: React.FC = () => (
  <li className={`${styles.csItem} ${styles.csArrow}`} aria-hidden="true">
    <img className={styles.csArrowImg} src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Farrow-curve-right.svg" alt="icon" width="80" height="76" loading="lazy" decoding="async" aria-hidden="true" />
  </li>
);

const Process3Steps: React.FC = () => {
  return (
    <section className={styles.process3Steps}>
      <div className={styles.csContainer}>
        <div className={styles.csContent}>
          <Topper text='Our Process' />
          <Title title='How It Works' />
          <p className={styles.csText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <ul className={styles.csCardGroup}>
          {stepsData.map((step, index) => (
            <React.Fragment key={index}>
              <li className={styles.csItem}>
                <picture className={styles.csPicture}>
                  <img className={styles.csIcon} src={step.iconSrc} alt="icon" width="32" height="32" loading="lazy" decoding="async" aria-hidden="true" />
                </picture>
                <h3 className={styles.csH3}>{step.title}</h3>
                <p className={styles.csItemP}>{step.description}</p>
              </li>
              {index < stepsData.length - 1 && <Arrow />}
            </React.Fragment>
          ))}
        </ul>
        <Link href="" className={styles.csButtonSolid}>View All Projects</Link>
      </div>
    </section>
  );
};

export default Process3Steps;
