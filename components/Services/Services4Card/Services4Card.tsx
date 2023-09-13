import React from 'react';
import styles from './Services4Card.module.css'; // Import your CSS module

const Services4Card = () => {
  return (
    <section className={styles.services4Card}>
      <div className={styles.csContainer}>
        <div className={styles.csContent}>
          <span className={styles.csTopper}>Our Services</span>
          <h2 className={styles.csTitle}>We Are Committed To Delivering Top Quality Legal Services</h2>
          <p className={styles.csText}>
            At Stitch Law, let us help you solve problems so that you can focus on your mission. We support businesses through periods of expansion, succession.
          </p>
        </div>
        <ul className={styles.csCardGroup}>
          <li className={styles.csItem}>
            <a href="" className={styles.csLink}>
              <img className={styles.csIcon} src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fcase.svg" alt="icon" width="" height="" loading="lazy" decoding="async" aria-hidden="true" />
              <h3 className={styles.csH3}>99% winning guarantee</h3>
              <p className={styles.csItemText}>
                Full range of shipping disputes such as charter party disputes, demurrage claims, purchase agreements, trade finance, carriage and claims.
              </p>
            </a>
            <picture className={styles.csImage} aria-hidden="true">
              <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg" />
              <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg" />
              <img loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg" alt="library" width="413" height="266" />
            </picture>
          </li>
          <li className={styles.csItem}>
            <a href="" className={styles.csLink}>
              <img className={styles.csIcon} src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fcase.svg" alt="icon" width="" height="" loading="lazy" decoding="async" aria-hidden="true" />
              <h3 className={styles.csH3}>Secure management</h3>
              <p className={styles.csItemText}>
                Full range of shipping disputes such as charter party disputes, demurrage claims, purchase agreements, trade finance, carriage and claims.
              </p>
            </a>
            <picture className={styles.csImage} aria-hidden="true">
              <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg" />
              <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg" />
              <img loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg" alt="library" width="413" height="266" />
            </picture>
          </li>
          <li className={styles.csItem}>
            <a href="" className={styles.csLink}>
              <img className={styles.csIcon} src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fcase.svg" alt="icon" width="" height="" loading="lazy" decoding="async" aria-hidden="true" />
              <h3 className={styles.csH3}>Full time support</h3>
              <p className={styles.csItemText}>
                Full range of shipping disputes such as charter party disputes, demurrage claims, purchase agreements, trade finance, carriage and claims.
              </p>
            </a>
            <picture className={styles.csImage} aria-hidden="true">
              <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg" />
              <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg" />
              <img loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg" alt="library" width="413" height="266" />
            </picture>
          </li>
          <li className={styles.csItem}>
            <a href="" className={styles.csLink}>
              <img className={styles.csIcon} src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fcase.svg" alt="icon" width="" height="" loading="lazy" decoding="async" aria-hidden="true" />
              <h3 className={styles.csH3}>Family Law</h3>
              <p className={styles.csItemText}>
                We’ve helped thousands of organizations transform to become relevant of helped thousands.
              </p>
            </a>
            <picture className={styles.csImage} aria-hidden="true">
              <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg" />
              <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg" />
              <img loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg" alt="library" width="413" height="266" aria-hidden="true" />
            </picture>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services4Card;
