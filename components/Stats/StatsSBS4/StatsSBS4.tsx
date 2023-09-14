import React from 'react';
import styles from './StatsSBS4.module.css';

// Define the list of items
const items = [
  {
    iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Services/two-people.svg',
    title: 'Workers',
    number: '500+',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, ex in commodo euismod, justo nisi bibendum libero,',
  },
  {
    iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Services/line-graph.svg',
    title: 'Experience',
    number: '12 Years',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, ex in commodo euismod, justo nisi bibendum libero,',
  },
  {
    iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Services/briefcase2.svg',
    title: 'Current Projects',
    number: '100+',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, ex in commodo euismod, justo nisi bibendum libero,',
  },
  {
    iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Services/three-bars.svg',
    title: 'Awards Winner',
    number: '200+',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, ex in commodo euismod, justo nisi bibendum libero,',
  },
];

const StatsSBS4: React.FC = () => {
  return (
    <section className={styles.statsSBS4}>
      <div className={styles.csContainer}>
        <div className={styles.csContent}>
          <span className={styles.csTopper}>Our services</span>
          <h2 className={styles.csTitle}>We offer project management services</h2>
          <p className={styles.csText}>
            We can help you design your project and develop a comprehensive plan to ensure that it meets your specific needs and requirements. Our team of architects and engineers will work closely with you to create a design that is both functional and aesthetically pleasing.
          </p>
          <a href="" className={styles.csButtonSolid} aria-label="learn more about us">
            Learn More
          </a>
        </div>
        <div className={styles.csWrapper}>
          <ul className={styles.csCardGroup}>
            {items.map((item, index) => (
              <li key={index} className={styles.csItem}>
                <h3 className={styles.csH3}>
                  <picture className={styles.csPicture}>
                    <img
                      className={styles.csIcon}
                      aria-hidden="true"
                      src={item.iconSrc}
                      alt="svg icon"
                      width="37"
                      height="29"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  {item.title}
                </h3>
                <span className={styles.csNumber}>{item.number}</span>
                <p className={styles.csItemText}>{item.text}</p>
              </li>
            ))}
          </ul>
          <picture className={styles.csBackground}>
            <img src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Services/orange-waves.png" alt="waves" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default StatsSBS4;
