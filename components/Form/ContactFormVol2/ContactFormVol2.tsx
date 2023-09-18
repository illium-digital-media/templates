import React from 'react';
import styles from './ContactFormVol2.module.css';

interface InputProps {
  id: string;
  name: string;
  placeholder: string;
}

const ContactFormVol2: React.FC = () => {
  const inputProps: InputProps[] = [
    { id: 'name-587-984', name: 'name', placeholder: 'Name' },
    { id: 'phone-587-984', name: 'phone', placeholder: 'Phone' },
    { id: 'email-587-984', name: 'email', placeholder: 'Email' },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <picture className={styles.picture}>
          {/* Mobile Image */}
          <source
            media="(max-width: 600px)"
            srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/friends.jpg"
          />
          {/* Tablet and above Image */}
          <source
            media="(min-width: 601px)"
            srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/friends.jpg"
          />
          <img
            loading="lazy"
            decoding="async"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/friends.jpg"
            alt="friends"
            width="904"
            height="754"
          />
        </picture>
      <div className={styles.right}>
        <div className={styles.content}>
          <span className={styles.topper}>Contact Us</span>
          <h2 className={styles.title}>Make Appointment</h2>
        </div>
        {/* Form */}
        <form
          className={styles.form}
          id="cs-form-587-984"
          name="Contact Form"
          method="post"
        >
          {inputProps.map((inputProp, index) => (
            <InputField key={index} {...inputProp} />
          ))}
          <label className={`${styles.label} ${styles.message}`}>
            Message
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              required
              name="Message"
              id="message-587-984"
              placeholder="Write message..."
            ></textarea>
          </label>
          <button
            className={`${styles.buttonSolid} ${styles.submit}`}
            type="submit"
          >
            Schedule Appointment
          </button>
        </form>
      </div>
      </div>

    </section>
  );
};

const InputField: React.FC<InputProps> = ({ id, name, placeholder }) => {
  return (
    <label className={styles.label}>
      {placeholder}
      <input
        className={styles.input}
        required
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
};

export default ContactFormVol2;
