import React from 'react';
import styles from './MeetOurTeam3Card.module.css'; // Import your CSS module

const MeetOurTeam3Card = () => {
  return (
    <section className={styles.meetOurTeam3Card}>
      <div className={styles.csContainer}>
        <div className={styles.csContent}>
          <img className={styles.csGraphic} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/Ornament.svg" alt="chef" width="456" height="31" />
          <h2 className={styles.csTitle}>Meet Our Team</h2>
          <p className={styles.csText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
        <ul className={styles.csCardGroup}>
          <li className={styles.csItem}>
            <picture className={styles.csPicture}>
              <source media="(max-width: 767px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/chef1.jpg" />
              <source media="(min-width: 768px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/chef1.jpg" />
              <img aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/chef1.jpg" alt="chef" width="305" height="335" />
            </picture>
            <div className={styles.csInfo}>
              <span className={styles.csName}>Zaki Deanra</span>
              <span className={styles.csJob}>Head Chef</span>
            </div>
          </li>
          <li className={styles.csItem}>
            <picture className={styles.csPicture}>
              <source media="(max-width: 767px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/chef2.jpg" />
              <source media="(min-width: 768px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/chef2.jpg" />
              <img aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/chef2.jpg" alt="chef" width="305" height="335" />
            </picture>
            <div className={styles.csInfo}>
              <span className={styles.csName}>Zaki Deanra</span>
              <span className={styles.csJob}>Head Chef</span>
            </div>
          </li>
          <li className={styles.csItem}>
            <picture className={styles.csPicture}>
              <source media="(max-width: 767px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/chef3.jpg" />
              <source media="(min-width: 768px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/chef3.jpg" />
              <img aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/chef3.jpg" alt="chef" width="305" height="335" />
            </picture>
            <div className={styles.csInfo}>
              <span className={styles.csName}>Zaki Deanra</span>
              <span className={styles.csJob}>Head Chef</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MeetOurTeam3Card;
