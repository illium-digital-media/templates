// Reviews2Card.tsx

import React from 'react';
import styles from './Reviews2Card.module.css';

interface Review {
  starsSrc: string;
  text: string;
  profileSrc: string;
  name: string;
  job: string;
}

const reviewsData: Review[] = [
  {
    starsSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/stars3.svg',
    text:
      'Curabitur vitae nunc sed velit dignissim sodales ut. Maecenas ultricies mi eget mauris pharetra et. Et ligula ullamcorper malesuada proin pellentesque diam volutpat commodo.',
    profileSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Reviews/profile2.jpg',
    name: 'Vera Robinson',
    job: 'Psychologist',
  },
  {
    starsSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/stars3.svg',
    text:
      'Curabitur vitae nunc sed velit dignissim sodales ut. Maecenas ultricies mi eget mauris pharetra et. Et ligula ullamcorper malesuada proin pellentesque diam volutpat commodo',
    profileSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Reviews/profile2.jpg',
    name: 'Benjamin Norris',
    job: 'Business analyst',
  },
];

const Reviews2Card: React.FC = () => {
  return (
    <section id="reviews-566" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.topper}>Our Reviews</span>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.text}>
            Vitae ultricies leo integer malesuada nunc vel. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Viverra aliquet eget sit amet tellus cras adipiscing. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit
          </p>
        </div>
        <ul className={styles.cardGroup}>
          {reviewsData.map((review, index) => (
            <li key={index} className={styles.item}>
              <img className={styles.stars} aria-hidden="true" src={review.starsSrc} decoding="async" alt="quote icon" width="189" height="24" />
              <p className={styles.itemText}>{review.text}</p>
              <div className={styles.flexGroup}>
                <picture className={styles.picture}>
                  <img className={styles.profile} src={review.profileSrc} decoding="async" alt="profile" width="50" height="50" aria-hidden="true" />
                </picture>
                <span className={styles.name}>
                  {review.name}
                  <span className={styles.job}>{review.job}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Reviews2Card;
