import React from 'react';
import styles from './SideBySideStandardVol2.module.css'; // Import the CSS module

const SideBySideStandardVol2: React.FC = () => {
  return (
    <section className={styles.sideBySideStandard}>
      <div className={styles.csContainer}>
        {/* Left Image Section */}
        <div className={styles.csImageGroup}>
          {/* Main Image */}
          <picture className={styles.csPicture}>
            <source
              media="(max-width: 600px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/accountant2.png"
            />
            <source
              media="(min-width: 601px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/accountant2.png"
            />
            <img
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/accountant2.png"
              alt="person with box"
              width="522"
              height="793"
              aria-hidden="true"
            />
          </picture>
          {/* Small Image */}
          <div className={styles.csBox}>
            <img
              className={styles.csBoxIcon}
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/growth.svg"
              alt="icon"
              width="40"
              height="40"
              aria-hidden="true"
            />
            <span className={styles.csBoxHeader}>Business Growth</span>
            <ul className={styles.csBoxUl}>
              <li className={styles.csBoxLi}>Global Industry</li>
              <li className={styles.csBoxLi}>Smart Solution</li>
              <li className={styles.csBoxLi}>Fast Process</li>
            </ul>
          </div>
          <div className={styles.csStat}>
            <div className={styles.csRingWrapper}>
              <span className={styles.csNumber}>90%</span>
              {/* Change the --ratio to the decimal percentage of this circle */}
              <svg
                className={styles.csRing}
                style={{ '--ratio': '0.90' } as React.CSSProperties} // Type assertion
              >
                <circle cx="50%" cy="50%" r="50%" />
                <circle cx="50%" cy="50%" r="50%" />
              </svg>
            </div>
            <span className={styles.csHeader}>Project Success</span>
            <span className={styles.csDesc}>by assisted startup</span>
          </div>
          {/* Circle Graphic */}
          <img
            className={styles.csGraphic}
            loading="lazy"
            decoding="async"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/swirl.svg"
            alt="graphic"
            width="950"
            height="950"
            aria-hidden="true"
          />
        </div>
        {/* Right Content Section */}
        <div className={styles.csContent}>
          <span className={styles.csTopper}>About Us</span>
          <h2 className={styles.csTitle}>
            Always Ready to Invest in Any Business
          </h2>
          <h3 className={styles.csH3}>
            We consider all the drivers of change gives you the blocks pride
            for our components you need to change to create.
          </h3>
          <p className={styles.csText}>
            In the new era of technology we look in the future with certainty
            and pride for our company and business. consider all the drivers of
            change gives you the blocks & pride for our components you need to
            change to create a truly professional website In the new era.
          </p>
          <div className={styles.csContentFlair}>
            <ul className={styles.csUl}>
              <li className={styles.csLi}>Stage-focused investing.</li>
              <li className={styles.csLi}>Sector specialization.</li>
              <li className={styles.csLi}>Active involvement.</li>
              <li className={styles.csLi}>Portfolio diversification.</li>
              <li className={styles.csLi}>Achieving a return.</li>
            </ul>
            <a
              href=""
              className={styles.csVideoLink}
              aria-label="learn more about our programs"
            >
              {/* BG Image */}
              <img
                className={styles.csVideoBg}
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/video-bg.jpg"
                alt="people"
                width="280"
                height="160"
                aria-hidden="true"
              />
              {/* Play Icon */}
              <picture className={styles.csWrapper}>
                <img
                  className={styles.csLinkIcon}
                  loading="lazy"
                  decoding="async"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/play-sharp2.svg"
                  alt="graphic"
                  width="24"
                  height="24"
                  aria-hidden="true"
                />
              </picture>
            </a>
          </div>
          <a
            href=""
            className={styles.csButtonSolid}
            aria-label="learn more about our programs"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default SideBySideStandardVol2;
