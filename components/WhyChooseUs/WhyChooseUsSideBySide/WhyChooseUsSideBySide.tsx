import React from 'react';
import styles from './WhyChooseUsSideBySide.module.css'; // Import your CSS module here
import Topper from '@/components1/Topper/Topper';
import { items, images } from './data';
import Section from '@/components1/Section';
import Button from '@/components1/Button/Button';

const WhyChooseUsSideBySide = () => {
  return (
    <Section>
      <div className={`w-full m-auto flex flex-col items-center ${styles.csContainer}`}>
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
        <div className={`text-left w-full flex flex-col items-start ${styles.csContent}`}>
          <Topper text='Why Choose Us' />
          <h2 className={`font-black mb-4 relative ${styles.csTitle}`}>
            We Care About <span className={`text-primary`}>Your Health</span> And Wellness
          </h2>
          <p className={`w-full ${styles.csText}`}>
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
                <p className={`text-left  ${styles.csItemText}`}>{item.text}</p>
              </li>
            ))}
          </ul>
          <Button link='' text='Book Appointment' />
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUsSideBySide;
