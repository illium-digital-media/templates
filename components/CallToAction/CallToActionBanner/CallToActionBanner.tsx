import React from 'react';
import styles from './CallToActionBanner.module.css';

const CallToActionBanner = () => {
  return (
    <section className={`p-section relative ${styles.section}`}>
      <div className={`w-full max-w-7xl m-auto flex flex-col items-center ${styles.container}`}>
        <div className={`text-center w-full flex flex-col items-center lg:text-left lg:flex-row lg:justify-between ${styles.content}`}>
          <h2 className={styles.title}>Have Doubts? Get Your Queries Solved by Our Experts</h2>
          <a href="" className={styles.buttonSolid}>Get In Touch</a>
        </div>
      </div>
      <img className={`w-full h-full block absolute top-0 left-0 ${styles.background}`} src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FGraphics%2Fwaves-3.svg" alt="wave graphic" width="1920" height="318" loading="lazy" decoding="async" aria-hidden="true" />
    </section>
  );
};

export default CallToActionBanner;
