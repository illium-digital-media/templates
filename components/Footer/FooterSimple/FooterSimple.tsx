import React from 'react';
import styles from './FooterSimple.module.css'; // Import your module.css file here

const FooterSimple = () => {
  const footerLinks = [
    { label: 'Home', href: '' },
    { label: 'About', href: '' },
    { label: 'Services', href: '' },
    { label: 'Donations', href: '' },
    { label: 'Events', href: '' },
    { label: 'Blog', href: '' },
    { label: 'Contact', href: '' },
  ];

  const socialLinks = [
    { label: 'facebook', src: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/facebook-white.svg', alt: 'facebook' },
    { label: 'twitter', src: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/twitter-white.svg', alt: 'twitter' },
    { label: 'instagram', src: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram-transparent.svg', alt: 'instagram' },
    { label: 'youtube', src: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/youtube-transparent2.svg', alt: 'youtube' },
  ];

  return (
    <section className={`relative p-section ${styles.footer}`}>
      <div className={`w-full m-auto flex flex-col items-center max-w-7xl`}>
        <div className={`w-full flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between ${styles.top}`}>
          <a aria-label="go back to home" className={`h-auto block ${styles.logo}`} href="">
            <img
              className={`w-full h-auto block`}
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Logos/charity-logo.svg"
              alt="logo"
              width="168"
              height="48"
            />
          </a>
          <ul className={`flex flex-wrap items-center justify-center ${styles.ul}`}>
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={`w-full flex flex-col items-center md:flex-row md:justify-between ${styles.bottom}`}>
          <ul className={`flex justify-center items-center ${styles.social}`}>
            {socialLinks.map((link, index) => (
              <li key={index} className={styles.socialLi}>
                <a href={link.href} className={`rounded-full flex justify-center items-center h-8 w-8 ${styles.socialLink}`} aria-label={link.label} target="_blank" rel="noopener">
                  <img
                    className={`w-3 h-auto block ${styles.socialIcon} ${styles.default}`}
                    src={link.src}
                    alt={link.alt}
                    loading="lazy"
                    decoding="async"
                    width="12"
                    height="12"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
          <span className={`block text-base ${styles.copyright}`}>
            © Copyright 2023 - <a href="" className={styles.copyrightLink}>Stitch Non-profit Charity</a>
          </span>
        </div>
      </div>
      <picture className={`w-full h-full block absolute top-0 left-0 before:absolute before:block before:h-full before:w-full before:top-0 before:left-0 before:opacity-90 ${styles.background}`}>
        <img
          loading="lazy"
          decoding="async"
          src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/kids2.jpg"
          alt="kids"
          width="1280"
          height="568"
        />
      </picture>
    </section>
  );
};

export default FooterSimple;
