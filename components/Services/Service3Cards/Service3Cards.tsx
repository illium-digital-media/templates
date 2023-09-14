import React from 'react';
import styles from './Service3Cards.module.css';
import { serviceData } from './services';
import Link from 'next/link';
import Topper from '@/components1/Topper/Topper';

const Service3Cards = () => {
  return (
    <section className={styles.service3Cards}>
      <div className={`w-full m-auto flex flex-col items-center ${styles.csContainer}`}>
        <div className={`text-left w-full flex flex-col items-start md:flex-row md:justify-between md:items-center ${styles.csContent}`}>
          <div className={`flex-none md:w-1/2 ${styles.csFlexGroup}`}>
            <Topper text='Our Services' />
            <h2 className={`font-black relative mb-4 ${styles.csTitle}`}>
              We Provide Other Helps to <span className={styles.csColor}>Enhance Your Beauty</span>
            </h2>
          </div>
          <p className={`w-full m-0 ${styles.csText}`}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <ul className={`w-full m-0 p-0 flex justify-center items-center flex-wrap flex-col md:mb-10 md:flex-wrap md:justify-center md:flex-row ${styles.csCardGroup}`}>
          {serviceData.map((service) => (
            <li key={service.id} className={`w-full ${styles.csItem}`}>
              <Link href="" className={`flex flex-col justify-center items-center ${styles.csLink}`}>
                <picture className={styles.csPicture}>
                  <service.icon styling={styles.csIcon} />
                </picture>
                <h3 className={`font-bold text-center m-0 mb-3 text-xl ${styles.csH3}`}>{service.title}</h3>
                <p className={`text-center m-0 ${styles.csItemText}`}>{service.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service3Cards;

