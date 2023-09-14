import React from 'react';
import styles from './Services3CardVol3.module.css';
import Link from 'next/link';
import { services } from './services';
import Graphic from './Graphic';
import Topper from '@/components1/Topper/Topper';

const Services3CardVol3 = () => {
    return (
        <section className={styles.services3Card}>
            <div className={styles.csContainer}>
                <div className={styles.csContent}>
                    <Topper text='Plumbing Done Right' />
                    <h2 className={styles.csTitle}>Dedicated To Excellence And Service</h2>
                    <p className={styles.csText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa ut sed odio cursus. Malesuada scelerisque eget eu, sollicitudin tellus nibh aenean enim sed. Ut vitae eget commodo consectetur felis augue.
                    </p>
                    <Link href="/" className={styles.csButtonSolid}>Get Free Quote</Link>
                </div>
                <ul className={styles.csCardGroup}>
                    {services.map((item, index) => (
                        <li className={styles.csItem} key={index}>
                            <item.icon styling={styles.csIcon} />
                            <h3 className={styles.csH3}>{item.title}</h3>
                            <p className={styles.csItemText}>{item.text}</p>
                        </li>
                    ))}
                </ul>
                <Graphic styling={styles.csWatermark} />
            </div>
        </section>
    );
};

export default Services3CardVol3;
