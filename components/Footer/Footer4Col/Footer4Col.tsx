import React from 'react';
import styles from './Footer4Col.module.css';

// Define the data for link groups and contact info
const linkGroups: {
  header: string;
  links: string[];
}[] = [
  {
    header: 'Sitemap',
    links: ['About', 'Services', 'Portfolio', 'Contact'],
  },
  {
    header: 'Categories',
    links: ['Business Law', 'Education Law', 'Insurance Defense', 'Family Law'],
  },
];

const contactInfo: {
  header: string;
  items: {
    icon: string;
    text: string;
    link: string;
    target?: string;
    rel?: string;
  }[];
}[] = [
  {
    header: 'Contact',
    items: [
      { icon: 'phone-stroke.svg', text: '(123) 456-7890', link: 'tel:123-456-7890' },
      { icon: 'email-stroke.svg', text: 'info@codestitch.com', link: 'mailto:info@codestitch.com' },
      { icon: 'pin-stroke.svg', text: '123 Avenue Street\nOak Harbor, WA 98101', link: '', target: '_blank', rel: 'noopener' },
    ],
  },
];

const Footer4Col: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoGroup}>
          <a aria-label="go back to home" className={styles.logo} href="/">
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
            Aenean tincidunt id mauris idology auctor. Donec at ligula lacus.
            Nulla dig nissimmi quis neque interdum. An Ohio man allegedly
            punched.
          </p>
        </div>
        {/* Links */}
        {linkGroups.map((group, index) => (
          <ul className={styles.nav} key={index}>
            <LinkGroup {...group} />
          </ul>
        ))}
        {/* Contact Info */}
        <ul className={styles.nav}>
          {contactInfo.map((info, index) => (
            <ContactInfo key={index} {...info} />
          ))}
        </ul>
      </div>
      <div className={styles.bottom}>
        <span className={styles.copyright}>
          © Copyright 2022 -{' '}
          <a className={styles.copyrightLink} href="/">
            Stitch Law Design
          </a>
        </span>
      </div>
    </footer>
  );
};

interface LinkGroupProps {
  header: string;
  links: string[];
}

const LinkGroup: React.FC<LinkGroupProps> = ({ header, links }) => (
  <>
    <li className={styles.navLi}>
      <span className={styles.header}>{header}</span>
    </li>
    {links.map((link, index) => (
      <li key={index} className={styles.navLi}>
        <a className={styles.navLink} href="">
          {link}
        </a>
      </li>
    ))}
  </>
);

interface ContactInfoProps {
  header: string;
  items: {
    icon: string;
    text: string;
    link: string;
    target?: string;
    rel?: string;
  }[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({ header, items }) => (
  <>
    <li className={styles.navLi}>
      <span className={styles.header}>{header}</span>
    </li>
    {items.map((item, index) => (
      <li key={index} className={styles.navLi}>
        <img
          className={styles.icon}
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          src={`https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/${item.icon}`}
          alt={item.text}
          width="24"
          height="24"
        />
        <a className={styles.navLink} href={item.link} target={item.target} rel={item.rel}>
          {item.text}
        </a>
      </li>
    ))}
  </>
);

export default Footer4Col;
