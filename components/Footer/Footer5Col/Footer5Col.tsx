import React from 'react';
import styles from './Footer5Col.module.css';

const Footer5Col = () => {
  // Define the list of items for each section
  const sections = [
    {
      title: 'Services',
      links: ['Email Marketing', 'Brandings', 'Campaign', 'Offline'],
    },
    {
      title: 'About',
      links: ['Our Story', 'Benefits', 'Team', 'Career'],
    },
    {
      title: 'Contact',
      links: ['Facebook', 'Instagram', 'LinkedIn'],
    },
    {
      title: 'Help',
      links: ['FAQ', 'Contact us'],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoGroup}>
          <a aria-label="go back to home" className={styles.logo} href="/">
            <img
              className={styles.logoImg}
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.digitaloceanspaces.com/Footer/logo.svg"
              alt="logo"
              width="240"
              height="32"
            />
          </a>
          <p className={styles.text}>We plan, design, finance, and execute projects.</p>
          <a href="mailto:info@mail.com" className={styles.link}>
            <img
              className={styles.linkIcon}
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/construction-mail.svg"
              alt="icon"
              width="24"
              height="24"
            />
            hi@stitchconstruction.com
          </a>
        </div>

        {/* Navigation Sections */}
        {sections.map((section, index) => (
          <ul className={styles.nav} key={index}>
            <li className={styles.navLi}>
              <span className={styles.header}>{section.title}</span>
            </li>
            {section.links.map((link, linkIndex) => (
              <li className={styles.navLi} key={linkIndex}>
                <a className={styles.navLink} href="">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Bottom Section */}
      <div className={styles.bottom}>
        <span className={styles.copyright}>
          Copyright© 2023. <a className={styles.copyrightLink} href="/">Stitch Construction.</a> All Right Reserved.
        </span>
        <a href="" className={styles.copyrightLink}>
          Terms of Service
        </a>
        <a href="" className={styles.copyrightLink}>
          Privacy Policy
        </a>
      </div>
      <div className={styles.floater} aria-hidden="true"></div>
    </footer>
  );
};

export default Footer5Col;
