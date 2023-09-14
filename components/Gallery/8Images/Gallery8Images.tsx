// Gallery8Images.tsx

import React from 'react';
import styles from './Gallery8Images.module.css';
import Topper from '@/components1/Topper/Topper';

// Define your image data as an array of objects
const imageData = [
  {
    mobileSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Gallery/house1-m.jpg',
    desktopSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Gallery/house1.jpg',
    alt: 'fancy house',
  },
  {
    mobileSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Gallery/house2-m.jpg',
    desktopSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Gallery/house2.jpg',
    alt: 'modern house',
  },
  {
    mobileSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Gallery/house3-m.jpg',
    desktopSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Gallery/house3.jpg',
    alt: 'modern house',
  },
  {
    mobileSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Gallery/house4-m.jpg',
    desktopSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Gallery/house4.jpg',
    alt: 'modern house',
  },
  {
    mobileSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Gallery/house5-m.jpg',
    desktopSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Gallery/house5.jpg',
    alt: 'modern house',
  },
  {
    mobileSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Gallery/house6-m.jpg',
    desktopSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Gallery/house6.jpg',
    alt: 'modern house',
  },
  {
    mobileSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Gallery/house2-m.jpg',
    desktopSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Gallery/house2.jpg',
    alt: 'modern house',
  },
  {
    mobileSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Gallery/house2-m.jpg',
    desktopSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Gallery/house2.jpg',
    alt: 'modern house',
  },
  // Add more images and data as needed
];

const Gallery8Images: React.FC = () => {
  return (
    <section className={styles.gallery8Images}>
      <div className={styles.csContainer}>
        <div className={styles.csContent}>
          <Topper text='Service' />
          <h2 className={styles.csTitle}>Landscaping Services in Sometown, USA</h2>
          <p className={styles.csText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <ul className={styles.csImageGroup}>
          {/* Add your list items for images here */}
          {imageData.map((image, index) => (
            <li key={index} className={styles.csItem}>
              <picture className={styles.csPicture}>
                <source media="(max-width: 600px)" srcSet={image.mobileSrc} />
                <source media="(min-width: 601px)" srcSet={image.desktopSrc} />
                <img
                  loading="lazy"
                  decoding="async"
                  src={image.desktopSrc}
                  alt={image.alt}
                  width="346"
                  height="346"
                />
              </picture>
            </li>
          ))}
          {/* Add more images as needed */}
        </ul>
        <a href="" className={styles.csButtonSolid}>
          View Full Gallery
        </a>
      </div>
    </section>
  );
};

export default Gallery8Images;