import React from 'react';
import styles from './WhyChooseUsSideBySide.module.css'; // Import your CSS module here
import Topper from '@/components1/Topper/Topper';

const items = [
  {
    iconSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fsquares.svg',
    title: 'Experienced and Qualified staff',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis saepe eos inventore asperiores a, iste cum voluptates laboriosam illum dicta culpa repudiandae doloribus!',
  },
  {
    iconSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fsquares.svg',
    title: 'Experienced and Qualified staff',
    text: 'To provide a high level of care to our patients in addition to our clinic\'s commitment to creating personalized treatment plans that are tailored to each individual\'s unique needs and goals.',
  },
  {
    iconSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fsquares.svg',
    title: 'Experienced and Qualified staff',
    text: 'To provide a high level of care to our patients in addition to our clinic\'s commitment to creating personalized treatment plans that are tailored to each individual\'s unique needs and goals.',
  },
];

const images = [
  'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FMISC%2Fhealth1.jpg',
  'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Fhealth2.jpg',
  'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Fhealth3.jpg',
  'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FPeople%2Fhealth4.jpg',
];

const WhyChooseUsSideBySide = () => {
  return (
    <section className={styles.csSection}>
      <div className={styles.csContainer}>
        {/* Left Section */}
        <div className={styles.csImageGroup}>
          {images.map((imageUrl, index) => (
            <picture key={index} className={`${styles.csPicture} ${styles[`csPicture${index + 1}`]}`}>
              <source media="(max-width: 600px)" srcSet={imageUrl} />
              <source media="(min-width: 601px)" srcSet={imageUrl} />
              <img
                loading="lazy"
                decoding="async"
                src={imageUrl}
                alt="people outside"
                width="306"
                height="360"
              />
            </picture>
          ))}
          {/* Zig Zag Graphic */}
          <img
            className={styles.csGraphic}
            aria-hidden="true"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FGraphics%2Fzigzag.svg"
            loading="lazy"
            decoding="async"
            alt="zigzag"
            width="983"
            height="416"
          />
        </div>
        <div className={styles.csContent}>
          <Topper text='Why Choose Us' />
          <h2 className={styles.csTitle}>
            We Care About <span className={styles.csColor}>Your Health</span> And Wellness
          </h2>
          <p className={styles.csText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, pariatur:
          </p>
          <ul className={styles.csUl}>
            {items.map((item, index) => (
              <li key={index} className={styles.csLi}>
                <h3 className={styles.csH3}>
                  <img
                    className={styles.csIcon}
                    aria-hidden="true"
                    src={item.iconSrc}
                    loading="lazy"
                    decoding="async"
                    alt="squares"
                    width="17"
                    height="18"
                  />
                  {item.title}
                </h3>
                <p className={styles.csItemText}>{item.text}</p>
              </li>
            ))}
          </ul>
          <a className={styles.csButtonSolid} href="">
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSideBySide;
