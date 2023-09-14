import React from 'react';
import Image from 'next/image'; // Import the next/image package
import styles from './SideBySideStandardVol3.module.css'; // Import the CSS module

const SideBySideStandardVol3: React.FC = () => {
  return (
    <section className={`${styles.sideBySideStandard}`}>
      <div className={styles.csContainer}>
        <div className={styles.csImageGroup}>
          {/* Top left image */}
          <div className={`${styles.csPicture} ${styles.csPicture1}`}>
            {/* Mobile Image */}
            <img
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/mechanic25.jpg"
              alt="appliance"
              width={630}
              height={390}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Bottom right image */}
          <div className={`${styles.csPicture} ${styles.csPicture2}`}>
            {/* Mobile Image */}
            <img
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/mechanic26.jpg"
              alt="appliance"
              width={461}
              height={300}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Splash Graphic */}
          <div className={`${styles.csGraphic} ${styles.csGraphic1}`}>
            <Image
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/splash-4.svg"
              alt="splash"
              width={1154}
              height={505}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Tire Mark */}
          <div className={`${styles.csGraphic} ${styles.csGraphic2}`}>
            <Image
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/tire-mark.svg"
              alt="tire mark"
              width={1085}
              height={322}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.csBox}>
            <span className={styles.csNumber}>2500+</span>
            <span className={styles.csDesc}>Cars repaired this year</span>
          </div>
        </div>
        <div className={styles.csContent}>
          <span className={styles.csTopper}>About Us</span>
          <h2 className={styles.csTitle}>Quality With The Best Standards</h2>
          <p className={styles.csText}>
            Our professionals will perform diagnostic tests, fluid flush and
            fills, engine replacement, oil changes, and total vehicle overhauls.
            Busto auctor lectus vitae conubia euismod nec rhoncus parturient
            convallis parturient accumsan volutpat ligula and intege aenean
            facilisis.
          </p>
          <ul className={styles.csUl}>
            <li className={styles.csLi}>We handle all makes and models</li>
            <li className={styles.csLi}>
              We are endorsed by the local trading standards office
            </li>
            <li className={styles.csLi}>
              All our technicians are equipped with the latest portable
            </li>
            <li className={styles.csLi}>
              Proven results for setting exceptional standards
            </li>
            <li className={styles.csLi}>Same day service for most repairs</li>
          </ul>
          <a href="" className={styles.csButtonSolid}>
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default SideBySideStandardVol3;
