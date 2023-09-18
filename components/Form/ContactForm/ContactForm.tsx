import React from 'react';
import styles from './ContactForm.module.css';

interface ContactInfoProps {
  icon: string;
  header: string;
  text: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, header, text }) => (
  <li className={styles.li}>
    <picture className={styles.iconWrapper}>
      <img aria-hidden="true" src={icon} alt={`${header} icon`} className={styles.icon} width="40" height="40" decoding="async" />
    </picture>
    <div className={styles.flexGroup}>
      <span className={styles.header}>{header}</span>
      <a href="" className={styles.link}>{text}</a>
    </div>
  </li>
);

const ContactForm: React.FC = () => {
  return (
    <section id={styles.contact1150}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.topper}>Contact Us</span>
          <h2 className={styles.title}>We Love to Hear from Our Happy Customers</h2>
        </div>
        <div className={styles.contactGroup}>
          <picture className={styles.picture}>
            {/* Mobile Image */}
            <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/group.jpg" />
            {/* Tablet and above Image */}
            <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/group.jpg" />
            <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/group.jpg" alt="people" width="630" height="300" />
          </picture>
          <p className={styles.contactText}>
            There are many variations of passages of available but the majority have suffered alteration in some form, by injected randomized words even slightly believable.
          </p>
          <ul className={styles.ul}>
            <ContactInfo
              icon="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-phone.svg"
              header="Phone"
              text="+1 (888) 4565 789"
            />
            <ContactInfo
              icon="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-pin.svg"
              header="Address"
              text="2553 Woodbridge Lane, Boston Ware 120"
            />
          </ul>
        </div>
        {/* Form */}
        <form className={styles.form} id={styles.csForm1150} name="Contact Form" method="post">
          <label className={styles.label}>
            Name
            <input className={styles.input} required type="text" id={styles.name1150} name="name" placeholder="Name" />
          </label>
          <label className={`${styles.label} ${styles.email}`}>
            Email
            <input className={styles.input} required type="email" id={styles.email1150} name="email" placeholder="Email" />
          </label>
          <label className={`${styles.label} ${styles.phone}`}>
            Phone
            <input className={styles.input} required type="number" id={styles.phone1150} name="phone" placeholder="Phone" />
          </label>
          <label className={styles.label}>
            Message
            <textarea className={`${styles.input} ${styles.textarea}`} required name="Message" id={styles.message1150} placeholder="Write message..."></textarea>
          </label>
          <button className={`${styles.buttonSolid} ${styles.submit}`} type="submit">Make an Appointment</button>
        </form>
        {/* Bounce Graphic */}
        <img className={`${styles.graphic} ${styles.graphic1}`} loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/bounce.svg" alt="bounce" width="208" height="124" />
        {/* Coin Graphic */}
        <img className={`${styles.graphic} ${styles.graphic2}`} loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/coin.svg" alt="bounce" width="205" height="161" />
      </div>
    </section>
  );
};

export default ContactForm;
