import React from 'react';
import styles from './SideBySideReverse.module.css';
import Topper from '@/components1/Topper/Topper';
import Title from '@/components1/Title/Title';

type CustomStyle = {
  [key: string]: string | number;
};
const ProgressBar: React.FC<{ progress: string }> = ({ progress }) => {
  const progressBarStyle: CustomStyle = {
    '--progress': progress,
  };

  return (
    <div className={styles.csProgress} aria-hidden="true">
      <span className={styles.csProgressBar} style={progressBarStyle}></span>
    </div>
  );
};


const FeatureBar: React.FC<{ title: string; percentage: string }> = ({ title, percentage }) => (
  <div className={styles.csBar}>
    <h3 className={styles.csH3}>
      {title}
      <span className={styles.csPercentage}>{percentage}</span>
    </h3>
    <ProgressBar progress={percentage} />
  </div>
);

const SideBySideReverse: React.FC = () => {
  return (
    <section className={styles.sideBySideReverse}>
      <div className={styles.csContainer}>
        {/* Left Image Section */}
        <div className={styles.csImageGroup}>
          {/* Floating Box */}
          <div className={styles.csBox}>
            <img className={styles.csIcon} src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/medal.svg" alt="icon" width="521" height="60" aria-hidden="true" loading="lazy" decoding="async" />
            <span className={styles.csNumber}>12+</span>
            <span className={styles.csDesc}>Years of Experience</span>
          </div>
          {/* Big Background Image */}
          <picture className={styles.csPicture}>
            <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/meeting.jpg" />
            <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/meeting.jpg" />
            <img className={styles.csImage} src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/meeting.jpg" alt="meeting" width="522" height="560" aria-hidden="true" loading="lazy" decoding="async" />
          </picture>
          {/* Swirl */}
          <img className={styles.csGraphic} src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/swirl.svg" alt="icon" width="715" height="715" aria-hidden="true" loading="lazy" decoding="async" />
        </div>
        {/* Right Content Section */}
        <div className={styles.csContent}>
          <Topper text='Our Mission & Vision' />
          <Title title='We Are The Champion Of The Finance Industry' />
          <p className={styles.csText}>
            Highly qualified tax consultants with many years of experience in the field offer a full range of services to help you build a sound financial future. Tax advice received in time allows you to avoid many problems with the tax authorities. We will help you as efficiently as possible and in a short time.
          </p>
          <div className={styles.csContentFlair}>
            <FeatureBar title="Savings Strategies" percentage="83%" />
            <FeatureBar title="Tax Planning" percentage="72%" />
            <FeatureBar title="Trusted Company" percentage="96%" />
          </div>
          <a className={styles.csButtonSolid} aria-label="Learn more about our programs" href="">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default SideBySideReverse;
