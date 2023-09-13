import React from 'react';
import styles from './Services4Card.module.css';
import { services } from './services';
import Image from 'next/image';
import Link from 'next/link';

const Services4Card = () => {
    return (
        <section className={styles.services4Card}>
            <div className={`w-full m-auto flex flex-col items-center ${styles.csContainer}`}>
                <div className={`text-center w-full flex flex-col items-center`}>
                    <span className={`uppercase font-bold block mb-1 ${styles.csTopper}`}>Our Services</span>
                    <h2 className={`font-black mb-4 relative ${styles.csTitle}`}>We Are Committed To Delivering Top Quality Legal Services</h2>
                    <p className={`w-full ${styles.csText}`}>
                        At Stitch Law, let us help you solve problems so that you can focus on your mission. We support businesses through periods of expansion, succession.
                    </p>
                </div>
                <ul className={`w-full flex flex-col justify-center items-center md:justify-between md:align-stretch md:flex-row md:flex-wrap xl:justify-center ${styles.csCardGroup}`}>
                    {services.map((service) => (
                        <li key={service.id} className={`text-left w-full p-8 overflow-hidden relative rounded-2xl hover:cursor-pointer md:w-1/2 ${styles.csItem}`}>
                            <Link href="" className={`${styles.csLink}`}>
                                <service.icon styling={`w-auto mb-6 block ${styles.csIcon}`} />
                                <h3 className={`mb-4 font-bold ${styles.csH3}`}>{service.title}</h3>
                                <p className={`text-base ${styles.csItemText}`}>{service.description}</p>
                            </Link>
                            <picture className={`h-full w-full absolute opacity-0 top-0 left-0 block ${styles.csImage}`} aria-hidden="true">
                                <Image src={service.image} alt='library' />
                            </picture>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Services4Card;
