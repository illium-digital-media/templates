import React from 'react';
import styles from './Footer3Col.module.css';

const Footer3Col = () => {
  // Define the list of navigation items
  const navigationItems = [
    {
      title: 'Home',
      link: '',
    },
    {
      title: 'About',
      link: '',
    },
    {
      title: 'Services',
      link: '',
    },
    {
      title: 'Portfolio',
      link: '',
    },
    {
      title: 'Contact',
      link: '',
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo Group */}
        <div className={styles.logoGroup}>
          <a aria-label="go back to home" className={styles.logo} href="">
            <img
              className={`${styles.logoImg} ${styles.light}`}
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.digitaloceanspaces.com/Footer/logo-light.svg"
              alt="logo"
              width="240"
              height="32"
            />
          </a>
          <p className={styles.text}>
            Etiam nulla ultrices consequat, posuere nulla. Ac iaculis lorem
            phasellus ultrices adipiscing viverra sit ut quam. In diam mattis
            elementum diam at sed ultricies.
          </p>
        </div>
        {/* Navigation Links */}
        <ul className={styles.nav}>
          <li className={styles.navLi}>
            <span className={styles.header}>Sitemap</span>
          </li>
          {navigationItems.map((item, index) => (
            <li className={styles.navLi} key={index}>
              <a className={styles.navLink} href={item.link}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        {/* Contact Info */}
        <ul className={styles.contact}>
          <li className={styles.navLi}>
            <span className={styles.header}>Contact</span>
          </li>
          <li className={styles.contactLi}>
            <a className={styles.contactLink} href="tel: 123-456-7890">
              (123) 456-7890
            </a>
          </li>
          <li className={styles.contactLi}>
            <a className={styles.contactLink} href="mailto:info@codestitch.com">
              info@codestitch.com
            </a>
          </li>
          {/* Social Media */}
          <li className={`${styles.contactLi} ${styles.socialGroup}`}>
            <div className={styles.social}>
              <a
                className={styles.socialLink}
                aria-label="visit google profile"
                href=""
              >
                <img
                  className={styles.socialImg}
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="https://csimg.nyc3.digitaloceanspaces.com/Social/google.svg"
                  alt="google"
                  width="11"
                  height="11"
                />
              </a>
              <a
                className={styles.socialLink}
                aria-label="visit facebook profile"
                href=""
              >
                <img
                  className={styles.socialImg}
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="https://csimg.nyc3.digitaloceanspaces.com/Social/Facebook.svg"
                  alt="facebook"
                  width="6"
                  height="11"
                />
              </a>
              <a
                className={styles.socialLink}
                aria-label="visit instagram profile"
                href=""
              >
                <img
                  className={styles.socialImg}
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="https://csimg.nyc3.digitaloceanspaces.com/Social/instagram.svg"
                  alt="instagram"
                  width="11"
                  height="11"
                />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer3Col;
