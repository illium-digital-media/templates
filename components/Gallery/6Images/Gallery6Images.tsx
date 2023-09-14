import React from 'react';
import styles from './Gallery6Images.module.css'; // Import your CSS module
import Topper from '@/components1/Topper/Topper';
import imageData from './images';

const Gallery6Images: React.FC = () => {
  const renderImages = () => {
    return imageData.map((image, index) => (
      <a href="" className={styles.csItem} key={index}>
        <picture className={styles.csPicture}>
          <source media="(max-width: 600px)" srcSet={`${image.imageSrc}-m.jpg`} />
          <source media="(min-width: 601px)" srcSet={image.imageSrc} />
          <img loading="lazy" decoding="async" src={image.imageSrc} alt="fancy house" width="346" height="346" />
        </picture>
        {/* Hover Box */}
        <div className={styles.csHoverBox}>
          <picture className={styles.csIcon}>
            <img loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Gallery/orange-arrow-right.svg" alt="fancy house" width="20" height="20" aria-hidden="true" />
          </picture>
          <h3 className={styles.csH3}>{image.title}</h3>
          <p className={styles.csHoverBoxText}>{image.text}</p>
        </div>
      </a>
    ));
  };

  return (
    <section className={styles.gallery6Images}>
      <div className={styles.csContainer}>
        <div className={styles.csContent}>
          <Topper text='Service' />
          <h2 className={styles.csTitle}>Landscaping Services in Sometown, USA</h2>
          <p className={styles.csText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className={styles.csImageGroup}>
          {renderImages()}
        </div>
      </div>
    </section>
  );
};

export default Gallery6Images;
