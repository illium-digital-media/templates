import React from 'react';
import styles from './Services4Card.module.css'; // Import your CSS module
import servicesData from './services';
import Link from 'next/link';

const Services4Card = () => {
  return (
    <section className={`p-section`}>
      <div className={`w-full m-auto flex flex-col items-center ${styles.csContainer}`}>
        <div className={`text-center w-full flex flex-col items-center`}>
          <span className={`uppercase font-bold text-primary mb-1 relative ${styles.csTopper}`}>Our Services</span>
          <h2 className={styles.csTitle}>We Are Committed To Delivering Top Quality Legal Services</h2>
          <p className={styles.csText}>
            At Stitch Law, let us help you solve problems so that you can focus on your mission. We support businesses through periods of expansion, succession.
          </p>
        </div>
        <ul className={styles.csCardGroup}>
          {servicesData.map((service, index) => (
            <li className={styles.csItem} key={index}>
              <Link href="" className={styles.csLink}>
                <img className={styles.csIcon} src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fcase.svg" alt="icon" width="" height="" loading="lazy" decoding="async" aria-hidden="true" />
                <h3 className={styles.csH3}>{service.title}</h3>
                <p className={styles.csItemText}>
                  {service.description}
                </p>
              </Link>
              <picture className={styles.csImage} aria-hidden="true">
                <img loading="lazy" decoding="async" src={service.image.src} alt="library" width="413" height="266" />
              </picture>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services4Card;
