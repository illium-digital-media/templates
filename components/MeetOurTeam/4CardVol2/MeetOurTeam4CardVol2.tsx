import React from 'react';
import styles from './MeetOurTeam4CardVol2.module.css'; // Import the module CSS
import Topper from '@/components1/Topper/Topper';

const teamMembers = [
  {
    name: 'Esther Howard',
    job: 'CEO',
    imageSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Meet-Team/cleaner1.png',
  },
  {
    name: 'Roser Fetherer',
    job: 'Project Manager',
    imageSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Meet-Team/cleaner2.png',
  },
  {
    name: 'Needse Zedd',
    job: 'Cleaner',
    imageSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Meet-Team/cleaner3.png',
  },
  {
    name: 'Kaisa Alita',
    job: 'CEO',
    imageSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Meet-Team/cleaner4.png',
  },
];

const MeetOurTeam4CardVol2 = () => {
  return (
    <section className={styles.meetOurTeam4Card}>
      <div className={styles.csContainer}>
        <div className={styles.csContent}>
          <div className={styles.csFlexGroup}>
            <Topper text='Meet Us' />
            <h2 className={styles.csTitle}>Our Team Members</h2>
          </div>
          <a href="" className={styles.csButtonSolid}>View All Members</a>
        </div>
        <ul className={styles.csCardGroup}>
          {teamMembers.map((member, index) => (
            <li key={index} className={styles.csItem}>
              <picture className={styles.csBackground}>
                {/* Mobile Image */}
                <source media="(max-width: 767px)" srcSet={member.imageSrc} />
                {/* Tablet and above Image */}
                <source media="(min-width: 768px)" srcSet={member.imageSrc} />
                <img
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src={member.imageSrc}
                  alt="cleaner"
                  width="305"
                  height="335"
                />
              </picture>
              <div className={styles.csInfo}>
                <span className={styles.csName}>{member.name}</span>
                <span className={styles.csJob}>{member.job}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className={`${styles.csBubbles} ${styles.csBubblesSmall}`} aria-hidden="true"></div>
        <div className={`${styles.csBubbles} ${styles.csBubblesBig}`} aria-hidden="true">
          <span className={styles.csBubblesBig2}></span>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam4CardVol2;
