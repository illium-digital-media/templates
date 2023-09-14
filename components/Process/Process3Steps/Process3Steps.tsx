import React from 'react';
import styles from './Process3Steps.module.css';
import Topper from '@/components1/Topper/Topper';

type StepProps = {
  iconSrc: string;
  title: string;
  description: string;
};

const steps: StepProps[] = [
    {
      iconSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Ficon-orange.svg',
      title: 'Contact Us',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nemo voluptate.',
    },
    {
      iconSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Ficon-orange.svg',
      title: 'Initial Evaluation',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nemo voluptate.',
    },
    {
      iconSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Ficon-orange.svg',
      title: 'Develop a Plan',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nemo voluptate.',
    },
  ];

const Step: React.FC<StepProps> = ({ iconSrc, title, description }) => (
  <li className={styles.csItem}>
    <picture className={styles.csPicture}>
      <img className={styles.csIcon} src={iconSrc} alt="icon" width="32" height="32" loading="lazy" decoding="async" aria-hidden="true" />
    </picture>
    <h3 className={styles.csH3}>{title}</h3>
    <p className={styles.csItemP}>{description}</p>
  </li>
);

const Arrow: React.FC = () => (
  <li className={`${styles.csItem} ${styles.csArrow}`} aria-hidden="true">
    <img className={styles.csArrowImg} src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Farrow-curve-right.svg" alt="icon" width="80" height="76" loading="lazy" decoding="async" aria-hidden="true" />
  </li>
);

const Process3Steps: React.FC = () => {
  return (
    <section id="process3Steps" className={styles.process3Steps}>
      <div className={styles.csContainer}>
        <div className={styles.csContent}>
          <Topper text='Our Process' />
          <h2 className={styles.csTitle}>How It Works</h2>
          <p className={styles.csText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <ul className={styles.csCardGroup}>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <Step iconSrc={step.iconSrc} title={step.title} description={step.description} />
              {index < steps.length - 1 && <Arrow />}
            </React.Fragment>
          ))}
        </ul>
        <a href="" className={styles.csButtonSolid}>View All Projects</a>
      </div>
    </section>
  );
};

export default Process3Steps;
