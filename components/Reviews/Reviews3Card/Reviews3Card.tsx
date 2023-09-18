import React from 'react';
import styles from './Reviews3Card.module.css'; // Import your CSS module
import Button from '@/components1/Button/Button';
import Topper from '@/components1/Topper/Topper';
import Title from '@/components1/Title/Title';

const reviewsData = [
  {
    name: 'John Doe',
    location: 'Texas',
    text: 'Proin massa eros, quis fringilla sagittis. Euismod scelerisque varius sed nec consequat, turpis.',
    imgSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Reviews/profile1.png',
  },
  {
    name: 'Jane Smith',
    location: 'California',
    text: 'Proin massa eros, quis fringilla sagittis. Euismod scelerisque varius sed nec consequat, turpis.',
    imgSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Reviews/profile2.png',
  },
  {
    name: 'Thomas Madden',
    location: 'Texas',
    text: 'Proin massa eros, quis fringilla sagittis. Euismod scelerisque varius sed nec consequat, turpis.',
    imgSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Reviews/profile3.png',
  },
];

const Reviews3Card: React.FC = () => {
  return (
    <section className={`p-section`}>
      <div className={`w-full max-w-7xl m-auto flex flex-col items-center ${styles.container}`}>
        <div className={`text-center w-full flex flex-col items-center`}>
          <Topper text='Our Reviews' />
          <Title title='Words From Our Customers' />
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dolor volutpat porttitor sagittis nunc nisl. Sagittis sit pellentesque gravida viverra. Leo ut sed euismod tortor risus et. Ornare non neque, leo, ornare. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <ul className={`w-full flex justify-center items-center flex-col gap-5 md:flex-row md:justify-center md:items-stretch md:flex-wrap ${styles.cardGroup}`}>
          {reviewsData.map((review, index) => (
            <li key={index} className={`w-full ${styles.item}`}>
              <img className={`rounded-full block ${styles.img}`} aria-hidden="true" loading="lazy" decoding="async" src={review.imgSrc} alt="profile" width="68" height="68" />
              <span className={`text-center font-bold block ${styles.name}`}>{review.name}</span>
              <span className={`text-base text-center block ${styles.desc}`}>{review.location}</span>
              <p className={`text-center m-auto ${styles.itemText}`}>
                {review.text}
              </p>
            </li>
          ))}
        </ul>
        <Button link='' text='Read More' />
      </div>
    </section>
  );
};

export default Reviews3Card;
