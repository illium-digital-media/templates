// Reviews3CardVol2.tsx

import React from 'react';
import styles from './Reviews3CardVol2.module.css';
import Topper from '@/components1/Topper/Topper';

const Reviews3CardVol2: React.FC = () => {
  const reviewData = [
    {
      name: 'Martha Darby',
      desc: 'Senior Executive',
      cardNumber: 1,
    },
    {
      name: 'Brayan Grilcist',
      desc: 'Senior Executive',
      cardNumber: 2,
    },
    {
      name: 'Brucei Elowed',
      desc: 'Senior Executive',
      cardNumber: 3,
    },
  ];

  return (
    <section className={`p-section ${styles.section}`}>
      <div className={`w-full m-auto flex flex-col items-center md:max-w-7xl ${styles.container}`}>
        <div className={`text-left w-full mr-auto flex flex-col items-start ${styles.content}`}>
          <Topper text='Testimonials' />
          <h2 className={`w-full grid items-stretch ${styles.title}`}>Happy Customer Feedback About Our Service</h2>
        </div>
        <ul className={styles.cardGroup}>
          {reviewData.map((review) => (
            <li className={`flex flex-col items-start relative ${styles.item}`} key={review.cardNumber}>
              <img
                className={`h-auto rounded-full block ${styles.image}`}
                src={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/review${review.cardNumber}.png`}
                alt="profile"
                width="112"
                height="112"
                aria-hidden={true}
                decoding="async"
                loading="lazy"
              />
              <img
                className={`h-auto block absolute ${styles.icon}`}
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/quotes-2.svg"
                alt="icon"
                width="52"
                height="36"
                aria-hidden="true"
                decoding="async"
                loading="lazy"
              />
              <p className={`text-left border-box ${styles.itemText}`}>
                Nulla ultricies justo sit amet ante efficitur, eget pharetra augue efficitur. Vestibulum viverra, dolor sit amet ultricies.
              </p>
              <div className={`text-center p-6 border-box w-full mt-auto flex flex-col items-center gap-1 ${styles.flex}`}>
                <span className={`font-bold ${styles.name}`}>{review.name}</span>
                <span className={styles.desc}>{review.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Reviews3CardVol2;
