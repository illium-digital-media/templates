import React from 'react';
import styles from './Service3CardVol2.module.css';
import { services } from './services';
import Image from 'next/image';
import Link from 'next/link';

const Service3CardVol2 = () => {
  return (
    <section className={styles.service3Card}>
      <div className={`w-full m-auto flex flex-col items-center ${styles.csContainer}`}>
        <div className={`text-center w-full flex flex-col items-center`}>
          <span className={`uppercase font-bold mb-1 block ${styles.csTopper}`}>Services</span>
          <h2 className={`font-black relative mb-4 ${styles.csTitle}`}>Landscaping Services in Sometown, USA</h2>
          <p className={`w-full m-0 ${styles.csText}`}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <ul className={`w-full p-0 m-0 flex flex-col justify-center items-center md:flex-row lg:flex-nowrap ${styles.csCardGroup}`}>
          {services.map((service) => (
            <li key={service.id} className={`w-full relative flex flex-col items-center justify-center lg:w-full ${styles.csItem}`}>
              <div className={`text-center p-6 pt-0 rounded-xl bg-white flex flex-col justify-center items-center relative ${styles.csFlex}`}>
                <picture className={`rounded-full bg-white flex justify-center items-center relative z-10 ${styles.csWrapper}`}>
                  <service.icon styling={`h-auto block`} />
                </picture>
                <h3 className={`font-bold mb-2 ${styles.csH3}`}>{service.title}</h3>
                <p className={styles.csItemText}>{service.description}</p>
                <Link href="" className={`font-bold uppercase m-0 relative inline-block ${styles.csLink}`}>Read More</Link>
              </div>
              <picture className={`w-full block absolute top-0 left-0 rounded-lg overflow-hidden ${styles.csPicture}`}>
                <Image src={service.imageUrl} alt='service-image' width={345} height={428} />
              </picture>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service3CardVol2;
