import React from 'react';
import styles from './CallToAction.module.css';
import Button from '@/components1/Button/Button';
import Topper from '@/components1/Topper/Topper';

const CallToAction = () => {
  return (
    <section className={`relative p-section`}>
      <div className={`w-full max-w-7xl m-auto flex flex-col items-center ${styles.container}`}>
        <div className={`text-center w-full flex flex-col items-center`}>
          <Topper text='Contact Us' />
          <h2 className={styles.title}>Get It Done With Us Today</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis at sit pellentesque molestie.  Diam, adipiscing ultrices eu turpis gravida.
          </p>
          <Button link='' text='Get A Free Quote' />
        </div>
      </div>
      {/* Background Image */}
      <picture className={`h-full w-full block absolute top-0 left-0 before:absolute before:block before:h-full before:w-full ${styles.picture}`}>
        <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/CTA/cabinets-m.jpg" />
        <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/CTA/cabinets.jpg" />
        <img
          loading="lazy"
          decoding="async"
          src="https://csimg.nyc3.digitaloceanspaces.com/CTA/cabinets.jpg"
          alt="cabinets"
          width="1920"
          height="1280"
          aria-hidden="true"
        />
      </picture>
    </section>
  );
};

export default CallToAction;
