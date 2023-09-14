import React from 'react';
import styles from './Gallery5Images.module.css';
import Topper from '@/components1/Topper/Topper';

interface ImageData {
  imgSrc: string;
  imgAlt: string;
}

const GalleryImage: React.FC<ImageData> = ({ imgSrc, imgAlt }) => (
  <picture className={styles.csImage}>
    <source
      media="(max-width: 600px)"
      srcSet={imgSrc}
    />
    <source
      media="(min-width: 601px)"
      srcSet={imgSrc}
    />
    <img
      loading="lazy"
      decoding="async"
      src={imgSrc}
      alt={imgAlt}
      width="272"
      height="320"
    />
  </picture>
);

const Gallery5Images: React.FC = () => {
  const imagesData: ImageData[] = [
    {
      imgSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char1.jpg',
      imgAlt: 'Gallery 1',
    },
    {
      imgSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char2.jpg',
      imgAlt: 'Gallery 2',
    },
    {
      imgSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char3.jpg',
      imgAlt: 'Gallery 3',
    },
    {
      imgSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char4.jpg',
      imgAlt: 'Gallery 4',
    },
    {
      imgSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char5.jpg',
      imgAlt: 'Gallery 5',
    },
  ];

  return (
    <section className={styles.gallery5Images}>
      <div className={styles.csContainer}>
        <div className={styles.csContent}>
          <Topper text='Our Portfolio' />
          <h2 className={styles.csTitle}>Our Photo Gallery</h2>
        </div>
        <div className={styles.csGallery}>
          {imagesData.map((image, index) => (
            <GalleryImage
              key={index}
              imgSrc={image.imgSrc}
              imgAlt={image.imgAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery5Images;
