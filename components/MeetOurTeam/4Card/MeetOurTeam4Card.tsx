import React from 'react';
import styles from './MeetOurTeam4Card.module.css'; // Import the module CSS

const teamMembers = [
  {
    name: 'Esther Howard',
    job: 'Hair Expert',
    imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/stylist1.jpg',
    socialLinks: [
      { label: 'LinkedIn', iconUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/linkedin-gold.svg', link: '' },
      { label: 'Twitter', iconUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/twitter-gold.svg', link: '' },
      { label: 'Instagram', iconUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram-gold.svg', link: '' },
      { label: 'YouTube', iconUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/youtube-gold.svg', link: '' },
    ],
  },
  {
    name: 'Jenny Wilson',
    job: 'Hair Expert',
    imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/stylist2.jpg',
    socialLinks: [
      { label: 'LinkedIn', iconUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/linkedin-gold.svg', link: '' },
      { label: 'Twitter', iconUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/twitter-gold.svg', link: '' },
      { label: 'Instagram', iconUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram-gold.svg', link: '' },
      { label: 'YouTube', iconUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/youtube-gold.svg', link: '' },
    ],
  },
  {
    name: 'Leslie Alexander',
    job: 'Hair Expert',
    imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/stylist3.jpg',
    socialLinks: [
      { label: 'LinkedIn', iconUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/linkedin-gold.svg', link: '' },
      { label: 'Twitter', iconUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/twitter-gold.svg', link: '' },
      { label: 'Instagram', iconUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram-gold.svg', link: '' },
      { label: 'YouTube', iconUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/youtube-gold.svg', link: '' },
    ],
  },
  {
    name: 'Jane Cooper',
    job: 'Hair Expert',
    imageUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/stylist4.jpg',
    socialLinks: [
      { label: 'LinkedIn', iconUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/linkedin-gold.svg', link: '' },
      { label: 'Twitter', iconUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/twitter-gold.svg', link: '' },
      { label: 'Instagram', iconUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram-gold.svg', link: '' },
      { label: 'YouTube', iconUrl: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/youtube-gold.svg', link: '' },
    ],
  },
  // Add more team members here...
];

function MeetOurTeam4Card() {
  return (
    <section className={styles.meetOurTeam4Card}>
      <div className={styles.csContainer}>
        <div className={styles.csContent}>
          <span className={styles.csTopper}>Our Team</span>
          <h2 className={styles.csTitle}>Our Expert Team Members</h2>
          <p className={styles.csText}>
            At Stitch Salon Service, we strive to give the best experience and service to every client that walks in the door. Meet the team members that make it all possible.
          </p>
        </div>
        <ul className={styles.csCardGroup}>
          {teamMembers.map((member, index) => (
            <li className={styles.csItem} key={index}>
              <picture className={styles.csPicture}>
                {/* Mobile Image */}
                <source media="(max-width: 600px)" srcSet={member.imageUrl} />
                {/* Tablet and above Image */}
                <source media="(min-width: 601px)" srcSet={member.imageUrl} />
                <img loading="lazy" decoding="async" src={member.imageUrl} alt="stylist" width="320" height="400" />
              </picture>
              <div className={styles.csInfo}>
                <span className={styles.csName}>{member.name}</span>
                <span className={styles.csJob}>{member.job}</span>
                <div className={styles.csSocialGroup}>
                  {member.socialLinks.map((link, linkIndex) => (
                    <a href={link.link} className={styles.csLink} aria-label={`visit ${link.label}`} key={linkIndex}>
                      <img className={styles.csIcon} loading="lazy" decoding="async" src={link.iconUrl} alt={link.label} width="12" height="12" />
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MeetOurTeam4Card;
