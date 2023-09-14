import React from 'react';
import styles from './Pricing3Card.module.css'; // Import your CSS module
import packages from './packages';
import Link from 'next/link';
import Topper from '@/components1/Topper/Topper';

const Pricing3Card: React.FC = () => {
  return (
    <section className={`relative ${styles.pricing3Card}`}>
      <div className={`w-full m-auto flex flex-col items-center relative ${styles.csContainer}`}>
        <div className={`text-center w-full flex flex-col items-center relative z-10`}>
          <Topper text='Pricing' />
          <h2 className={`font-black mb-4 relative ${styles.csTitle}`}>Simple & Transparent Pricing</h2>
          <p className={`w-full m-0 ${styles.csText}`}>
            We are one of the leading auto repair shops serving customers in Tucson. All mechanic services are performed by highly qualified mechanics. We handle all makes and models in more than 40 car brands.
          </p>
        </div>
        <ul className={`w-full flex flex-col items-center relative z-10 ${styles.csCardGroup}`}>
          {packages.map((card, index) => (
            <li className={`${styles.csItem} ${index === 1 ? styles.csItemPopular : ''}`} key={index}>
              <span className={styles.csPackage}>{card.package}</span>
              <span className={styles.csPrice}>{card.price}</span>
              <p className={styles.csItemP}>{card.itemP}</p>
              <Link href="" className={`${styles.csButtonSolid} ${styles.csPriceButton}`}>Book Appointment</Link>
              <ul className={styles.csUl}>
                {card.features.map((feature, featureIndex) => (
                  <li className={`${styles.csLi} ${feature.disabled ? styles.csLiDisabled : ''}`} key={featureIndex}>
                    {feature.text}
                    <img className={styles.csIcon} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-check.svg" alt="checkmark" width="18" height="18" />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      {/* Left chevron */}
      <img className={`${styles.csFloater} ${styles.csFloater1}`} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/left-chevron.svg" alt="checkmark" width="121" height="272" />
      {/* Right chevron */}
      <img className={`${styles.csFloater} ${styles.csFloater2}`} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/right-chevron.svg" alt="checkmark" width="121" height="272" />
    </section>
  );
};

export default Pricing3Card;
