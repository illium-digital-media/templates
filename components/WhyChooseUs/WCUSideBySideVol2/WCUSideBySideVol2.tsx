import React from 'react';
import styles from './WCUSideBySideVol2.module.css'; // Replace 'YourComponent' with your actual component name
import Topper from '@/components1/Topper/Topper';
import checkmarkData from './checkmarkdata';
import Title from '@/components1/Title/Title';
import Link from 'next/link';

const WCUSideBySideVol2: React.FC = () => {
  return (
    <section className={`relative overflow-hidden ${styles.csSection}`}>
      <div className={`w-full m-auto flex flex-col items-center ${styles.csContainer}`}>
        {/* Right Image */}
        <picture className={`block relative w-full ${styles.csPicture}`}>
          <source
            media="(max-width: 600px)"
            srcSet="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/lightbulb-m.jpg"
          />
          <source
            media="(min-width: 601px)"
            srcSet="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/lightbulb.jpg"
          />
          <img
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            src="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/lightbulb.jpg"
            alt="lightbulbs on a wire"
            width="858"
            height="781"
          />
        </picture>
        <div className={`text-left w-full mr-auto pt-0 border-box flex flex-col items-start p-section md:p-0 ${styles.csContent}`}>
          <Topper text='Why Choose Us' />
          <Title title='Et orci volutpat, back up generator installations' />
          <p className={`w-full mb-4 ${styles.csText}`}>
            Facilisis condimentum viverra scelerisque ac morbi sit sed. Turpis
            sagittis in blandit eleifend tortor ullamcorper eu placerat. Et
            orci felis volutpat, etiam vitae egestas volutpat pulvinar.
          </p>
          <ul className={styles.csUl}>
            {checkmarkData.map((item, index) => (
              <li key={index} className={`font-bold flex justify-start items-center mb-2 ${styles.csLi}`}>
                <img
                  className={`mr-4 ${styles.csIcon}`}
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/yellow-check.svg"
                  alt="checkmark"
                  width="27"
                  height="27"
                />
                {item}
              </li>
            ))}
          </ul>
          <Link href="" className={`text-base text-center font-bold text-white px-6 border-box relative inline-block rounded mt-8 before:absolute before:h-full before:w-0 before:left-0 before:rounded before:bg-black hover:before:w-full ${styles.csButtonSolid}`}>
            Request A Quote Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WCUSideBySideVol2;
