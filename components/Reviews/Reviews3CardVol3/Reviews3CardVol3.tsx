import React from 'react';
import styles from './Reviews3CardVol3.module.css';
import Topper from '@/components1/Topper/Topper';
import Title from '@/components1/Title/Title';

const reviewsData = [
  {
    name: 'John Doe',
    job: 'Chief Executive',
    reviewText:
      'I have used CleanPro service for about four years. I describe myself very picky and difficult to be pleased. Exceeded my expectations.',
  },
  {
    name: 'Robert Henrich',
    job: 'CEO, HK Traders',
    reviewText:
      'I have used CleanPro service for about four years. I describe myself very picky and difficult to be pleased. Exceeded my expectations.',
  },
  {
    name: 'Robert Henrich',
    job: 'CEO, HK Traders',
    reviewText:
      'I have used CleanPro service for about four years. I describe myself very picky and difficult to be pleased. Exceeded my expectations.',
  },
];

const Reviews3CardVol3 = () => {
  const renderReviews = () => {
    return reviewsData.map((review, index) => (
      <li className={`w-full rounded-2xl border-box flex justify-center items-start flex-col relative ${styles.item}`} key={index}>
        <img
          className={`w-10 h-auto mb-8 block`}
          aria-hidden="true"
          src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/quote-blue.svg"
          decoding="async"
          alt="quote icon"
          width="40"
          height="33"
        />
        <p className={styles.review}>{review.reviewText}</p>
        <span className={`mt-auto font-bold block ${styles.name}`}>{review.name}</span>
        <span className={`block ${styles.job}`}>{review.job}</span>
      </li>
    ));
  };

  return (
    <section className='p-section'>
      <div className={`w-full m-auto flex flex-col items-center ${styles.container}`}>
        <div className={`text-center w-full flex flex-col items-center ${styles.content}`}>
          <Topper text='Testimonials' />
          <Title title='Trusted by Thousand of People & Companies' />
          <p className={styles.text}>
            At Stitch Cleaning Service, let us help you solve problems so that you can focus on your mission. We support businesses through periods of expansion, succession.
          </p>
        </div>
        <ul className={`flex justify-center items-center flex-col md:flex-row md:justify-center md:items-stretch md:flex-wrap ${styles.cardGroup}`}>{renderReviews()}</ul>
      </div>
    </section>
  );
};

export default Reviews3CardVol3;
