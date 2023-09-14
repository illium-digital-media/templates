import React from 'react';
import styles from './PricingMenu.module.css'; // Import your module.css file
import menuItems from './menuitems';

const PricingMenu: React.FC = () => {
  return (
    <section className={`p-section ${styles.pricingMenu}`}>
      <div className={`w-full m-auto flex flex-col items-center ${styles.csContainer}`}>
        <div className={`text-left w-full flex flex-col items-center`}>
          <span className={`uppercase font-bold mb-1 text-primary text-topperFontSize ${styles.csTopper}`}>Pricing</span>
          <h2 className={`font-black mb-4 text-headerColor ${styles.csTitle}`}>All Hair Services</h2>
        </div>
        <div className={`w-full flex flex-col items-center justify-center md:flex-row md:justify-between ${styles.csMenu}`}>
          {menuItems.map((_, index) => (
            <ul key={index} className={`flex flex-col md:w-full ${styles.csMenuGroup}`}>
              {menuItems[index].map((item, itemIndex) => (
                <li className={`flex flex-col items-start justify-content gap-2 ${styles.csMenuItem}`} key={itemIndex}>
                  <h3 className={`w-full relative flex justify-between items-start gap-6 before:bg-gray-200 before:h-0.5 before:absolute before:block before:w-full ${styles.csH3}`}>
                    <span className={`pr-2 bg-white font-bold text-headerColor ${styles.csHeader}`}>{item.header}</span>
                    <span className={`text-base pl-2 bg-white text-headerColor ${styles.csPrice}`}>{item.price}</span>
                  </h3>
                  <p className={`text-base ${styles.csMenuText}`}>{item.text}</p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingMenu;
