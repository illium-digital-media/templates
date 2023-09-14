import React from 'react';
import styles from './Services6Cards.module.css';
import { services } from './services';
import Topper from '@/components1/Topper/Topper';

const Services6Cards = () => {
    return (
        <section className={styles.services1188}>
            <div className={styles.csContainer}>
                <div className={styles.csContent}>
                    <Topper text='Other Services' />
                    <h2 className={styles.csTitle}>We Provide Quality Auto Repair Services</h2>
                    <p className={styles.csText}>
                        Facilisis condimentum viverra scelerisque ac morbi sit sed. Turpis sagittis in blandit eleifend tortor ullamcorper eu placerat. Et orci felis volutpat, etiam vitae egestas volutpat pulvinar.
                    </p>
                </div>
                <ul className={styles.csCardGroup}>
                    {services.map((service, index) => (
                        <li className={styles.csItem} key={index}>
                            <picture className={styles.csPicture}>
                                <img
                                    className={styles.csIcon}
                                    src={service.iconSrc}
                                    loading="lazy"
                                    decoding="async"
                                    alt="icon"
                                    width="33"
                                    height="38"
                                    aria-hidden="true"
                                />
                            </picture>
                            <div className={styles.csTextGroup}>
                                <h3 className={styles.csH3}>{service.title}</h3>
                                <p className={styles.csItemText}>{service.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <a href="" className={styles.csButtonSolid}>Book Appointment</a>
            </div>
        </section>
    );
}

export default Services6Cards;
