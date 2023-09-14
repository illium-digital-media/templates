import React from 'react';
import styles from './WCUSideBySideVol2.module.css'; // Replace 'YourComponent' with your actual component name
import Topper from '@/components1/Topper/Topper';
import checkmarkData from './checkmarkdata';

const WCUSideBySideVol2: React.FC = () => {
  return (
    <section className={styles.csSection}>
      <div className={styles.csContainer}>
        {/* Right Image */}
        <picture className={styles.csPicture}>
          <source
            media="(max-width: 600px)"
            srcSet="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/lightbulb-m.jpg"
          />
          <source
            media="(min-width: 601px)"
            srcSet="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/lightbulb.jpg"
          />
          <img
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            src="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/lightbulb.jpg"
            alt="lightbulbs on a wire"
            width="858"
            height="781"
          />
        </picture>
        <div className={styles.csContent}>
          <Topper text='Why Choose Us' />
          <h2 className={styles.csTitle}>
            Et orci volutpat, back up generator installations
          </h2>
          <p className={styles.csText}>
            Facilisis condimentum viverra scelerisque ac morbi sit sed. Turpis
            sagittis in blandit eleifend tortor ullamcorper eu placerat. Et
            orci felis volutpat, etiam vitae egestas volutpat pulvinar.
          </p>
          <ul className={styles.csUl}>
            {checkmarkData.map((item, index) => (
              <li key={index} className={styles.csLi}>
                <img
                  className={styles.csIcon}
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/yellow-check.svg"
                  alt="checkmark"
                  width="27"
                  height="27"
                />
                {item}
              </li>
            ))}
          </ul>
          <a href="" className={styles.csButtonSolid}>
            Request A Quote Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default WCUSideBySideVol2;
