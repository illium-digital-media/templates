import React from 'react';
import styles from './FooterSimpleVol2.module.css';

const FooterSimpleVol2 = () => {
  const links = [
    { text: 'Home', href: '' },
    { text: 'About', href: '' },
    { text: 'Services', href: '' },
    { text: 'Gallery', href: '' },
    { text: 'Contact', href: '' },
  ];

  return (
    <footer id={styles.footer}>
      <div className={`w-full max-w-7xl m-auto`}>
        <ul className={styles.ul}>
          {links.map((link, index) => (
            <li key={index} className={`text-center mb-5 ${styles.li}`}>
              <a href={link.href} className={`font-bold relative ${styles.link}`}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <span className={styles.copyright}>© 2022 Copyright</span>
      </div>
    </footer>
  );
};

export default FooterSimpleVol2;
