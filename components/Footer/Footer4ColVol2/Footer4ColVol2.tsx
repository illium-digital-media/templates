import React from 'react';
import styles from './Footer4ColVol2.module.css';

interface NavItemProps {
  header: string;
  items: string[];
}

const NavItem: React.FC<NavItemProps> = ({ header, items }) => (
  <>
    <li className={styles.navLi}>
      <span className={styles.header}>{header}</span>
    </li>
    {items.map((item, index) => (
      <li key={index} className={styles.navLi}>
        {item}
      </li>
    ))}
  </>
);

const Footer4ColVol2: React.FC = () => {
  const socialLinks = [
    {
      label: 'google',
      src: 'https://csimg.nyc3.digitaloceanspaces.com/Social/google.svg',
      width: '11',
      height: '11',
    },
    {
      label: 'facebook',
      src: 'https://csimg.nyc3.digitaloceanspaces.com/Social/Facebook.svg',
      width: '6',
      height: '11',
    },
    {
      label: 'instagram',
      src: 'https://csimg.nyc3.digitaloceanspaces.com/Social/instagram.svg',
      width: '11',
      height: '11',
    },
  ];

  const contactInfo = [
    {
      header: 'Contact',
      items: [
        <a key="phone" href="tel:123-456-7890">(123) 456 7890</a>,
        <a key="email" href="mailto:info@codestitch.com">info@codestitch.com</a>,
      ],
    },
    {
      header: 'Address',
      items: [
        '123 Avenue Street',
        'Oak Harbor, WA 98101',
      ],
    },
    {
      header: 'Opening Hours',
      items: [
        'Tuesday, Thursday, Friday: 9am-6pm',
        '(closed for lunch 12pm-2pm)',
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoGroup}>
          <a aria-label="go back to home" className={styles.logo} href="">
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
          <div className={styles.social}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                className={styles.socialLink}
                aria-label={`visit ${link.label} profile`}
                href=""
              >
                <img
                  className={styles.socialImg}
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src={link.src}
                  alt={link.label}
                  width={link.width}
                  height={link.height}
                />
              </a>
            ))}
          </div>
        </div>
        {/* Links */}
        {contactInfo.map((info, index) => (
          <ul className={styles.nav}>
            <NavItem key={index} header={info.header} items={info.items} />
          </ul>
        ))}
      </div>
    </footer>
  );
};

export default Footer4ColVol2;
