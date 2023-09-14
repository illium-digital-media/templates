// SideBySideAnimated.js
import React from 'react';
import styles from './SideBySideAnimated.module.css';
import Topper from '@/components1/Topper/Topper';
import Title from '@/components1/Title/Title';

const SideBySideAnimated = () => {
  return (
    <section className={styles.sideBySideAnimated}>
      <div className={styles.csContainer}>
        <div className={styles.csContent}>
          <Topper text='Why Choose Us' />
          <Title title='Expert House Cleaning Service Can Trust' />
          <p className={styles.csText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc lobortis mattis aliquam faucibus purus in. Diam ut venenatis tellus in metus vulputate eu. Massa vitae tortor condimentum lacinia quis vel eros donec ac.
          </p>
          <p className={styles.csText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc lobortis mattis aliquam faucibus purus in. Diam ut venenatis tellus in metus vulputate eu. Massa vitae tortor condimentum lacinia quis vel eros donec ac.
          </p>
          <a href="" className={styles.csButtonSolid}>Contact Us</a>
        </div>
        <div className={styles.csImageGroup}>
          <img className={styles.csSplash} src="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/blue-splash.svg" aria-hidden="true" loading="lazy" decoding="async" alt="splash icon" width="570" height="586" />
          <img className={styles.csBlob} src="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/blob.svg" aria-hidden="true" loading="lazy" decoding="async" alt="blob icon" width="392" height="497" />
          <img className={styles.csLightning} src="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/lightning.svg" aria-hidden="true" loading="lazy" decoding="async" alt="lightning icon" width="392" height="497" />
          <picture className={styles.csLeftImage}>
            <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/cleaning2-m.jpg" />
            <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/cleaning2.jpg" />
            <img loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/cleaning2.jpg" alt="cleaning" width="211" height="211" aria-hidden="true" />
          </picture>
          <picture className={styles.csBottomImage}>
            <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/cleaning4.jpg" />
            <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/cleaning4.jpg" />
            <img loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/cleaning4.jpg" alt="cleaning" width="180" height="180" aria-hidden="true" />
          </picture>
          <picture className={styles.csPerson}>
            <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/cleaner3.png" />
            <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/cleaner3.png" />
            <img loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/cleaner3.png" alt="cleaning" width="386" height="521" aria-hidden="true" />
          </picture>
          <svg className={styles.csMask} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 383 173">
            <path d="M0 131.021c0-29.542.317-41.863 1.067-41.4.587.363.983.052.881-.69-.502-3.66.132-4.85 2.583-4.85 2.264 0 2.507.363 2.3 3.447-.183 2.714.343 3.902 2.474 5.577 1.488 1.17 3.346 2.77 4.129 3.552.783.783 1.85 1.423 2.372 1.423.522 0 1.51.675 2.194 1.5.685.825 2.262 1.5 3.506 1.5 1.447 0 2.456.747 2.803 2.074.298 1.141 1.476 2.319 2.617 2.617 1.14.298 2.074.868 2.074 1.265 0 1.176 4.868 3.044 7.93 3.044 2.055 0 3.042.62 3.58 2.25l.744 2.25.442-2.25c.314-1.595 1.15-2.25 2.874-2.25 2.095 0 2.43.467 2.43 3.384 0 3.984 1.935 4.861 8.687 3.936 3.861-.53 4.313-.38 4.313 1.437 0 2.581 2.158 3.402 6.935 2.638 3.15-.504 3.859-.292 4.269 1.277.405 1.55 2.677 2.273 12.894 4.103 18.887 3.384 38.907 4.572 54.402 3.23 7.15-.62 15.475-1.296 18.5-1.503 13.731-.938 35.155-5.125 36.708-7.175.867-1.145 2.091-1.417 4.343-.967 2.97.594 20.732-3.208 24.769-5.301.924-.48 3.572-1.376 5.885-1.992 2.313-.616 4.869-1.783 5.679-2.594.81-.81 3.08-1.473 5.045-1.473 2.36 0 3.571-.465 3.571-1.372 0-.828 1.587-1.626 4-2.012 2.588-.414 4-1.165 4-2.128 0-1.034 1.068-1.488 3.5-1.488 1.925 0 3.5-.45 3.5-1s.879-1 1.953-1c2.39 0 7.047-2.038 7.047-3.083 0-.419 1.688-1.27 3.75-1.89 7.21-2.17 13.218-5.473 13.234-7.277.012-1.33.855-1.75 3.516-1.75 1.925 0 3.5-.450 3.5-1s.469-1 1.042-1c.573 0 1.586-.454 2.25-1.01.664-.555 4.583-3.598 8.708-6.76 10.945-8.394 18.178-16.216 25.328-27.393 3.004-4.696 3.488-6.198 2.988-9.277-.506-3.116-.29-3.754 1.422-4.202 2.287-.598 4.262-4.26 4.262-7.905 0-1.349.4-2.453.888-2.453.999 0 5.23-20.999 4.478-22.217-.266-.43.244-.783 1.134-.783.89 0 1.34-.45 1-1-.404-.653 6.156-1 18.941-1H383v173H0Zm18-35.44c0-2 .5-2.5 2.5-2.5s2.5.5 2.5 2.5-.5 2.5-2.5 2.5-2.5-.5-2.5-2.5z" fill="#fff" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default SideBySideAnimated;
