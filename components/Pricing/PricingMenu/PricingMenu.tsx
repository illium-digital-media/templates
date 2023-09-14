import React from 'react';
import styles from './PricingMenu.module.css'; // Import your module.css file

const PricingMenu: React.FC = () => {
  const menuItems = [
    {
      header: 'Haircut With Blow Dry',
      price: '$39',
      text: 'Creative way to paint, decorate, enhance, and embellish.',
    },
    {
      header: 'Hair Styling',
      price: '$49',
      text: 'Our expert stylists will give you the perfect look.',
    },
    {
      header: 'Coloring Services',
      price: '$59',
      text: 'Experience vibrant and long-lasting hair colors.',
    },
    {
      header: 'Hair Extensions',
      price: '$69',
      text: 'Get longer and fuller hair instantly with our extensions.',
    },
    {
      header: 'Hair Spa Treatment',
      price: '$79',
      text: 'Relax and rejuvenate with our luxurious hair spa treatment.',
    },
  ];

  return (
    <section className={styles.pricingMenu}>
      <div className={styles.csContainer}>
        <div className={styles.csContent}>
          <span className={styles.csTopper}>Pricing</span>
          <h2 className={styles.csTitle}>All Hair Services</h2>
        </div>
        <div className={styles.csMenu}>
          {/* Left Menu */}
          <ul className={styles.csMenuGroup}>
            {menuItems.map((item, index) => (
              <li className={styles.csMenuItem} key={index}>
                <h3 className={styles.csH3}>
                  <span className={styles.csHeader}>{item.header}</span>
                  <span className={styles.csPrice}>{item.price}</span>
                </h3>
                <p className={styles.csMenuText}>{item.text}</p>
              </li>
            ))}
          </ul>
          {/* Right Menu */}
          <ul className={styles.csMenuGroup}>
            {menuItems.map((item, index) => (
              <li className={styles.csMenuItem} key={index}>
                <h3 className={styles.csH3}>
                  <span className={styles.csHeader}>{item.header}</span>
                  <span className={styles.csPrice}>{item.price}</span>
                </h3>
                <p className={styles.csMenuText}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingMenu;
