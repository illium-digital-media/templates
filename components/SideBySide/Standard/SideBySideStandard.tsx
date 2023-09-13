import React from 'react';
import styles from './SideBySideStandard.module.css'; // Import the module CSS
import Link from 'next/link';
import features from './features';

const SideBySideStandard = () => {
  return (
    <section className={styles.sideBySideStandard}>
      <div className={styles.csContainer}>
        {/* Left Image Section */}
        <div className={styles.csImageGroup}>
          {/* Floating Box */}
          <div className={styles.csBox}>
            <span className={styles.csDesc}>Accounting & support of your business</span>
          </div>
          {/* Image */}
          <picture className={styles.csPicture}>
            {/* Mobile Image */}
            <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/tax1.jpg" />
            {/* Tablet and above Image */}
            <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/tax1.jpg" />
            <img
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/tax1.jpg"
              alt="meeting"
              width="630"
              height="630"
              aria-hidden="true"
            />
          </picture>
        </div>
        {/* Right Content Section */}
        <div className={styles.csContent}>
          <span className={styles.csTopper}>About Us</span>
          <h2 className={styles.csTitle}>Get Help on Finance</h2>
          <p className={styles.csText}>
            In the new era of technology, we look into the future with certainty and pride for our company and business.
            Considering all the drivers of change gives you the blocks & pride for our components you need to change to create a truly professional website in the new era.
          </p>
          <Link className={styles.csButtonSolid} aria-label="learn more about our programs" href="">
            Learn More
          </Link>
          <ul className={styles.csUl}>
            {features.map((feature, index) => (
              <li key={index} className={styles.csItem}>
                <span className={styles.csNumber}>{feature.number}</span>
                <h3 className={styles.csH3}>{feature.text}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SideBySideStandard;
