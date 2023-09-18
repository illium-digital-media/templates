import React from 'react';
import styles from './ContactFormVol3.module.css';

interface InputFieldProps {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  type: string;
  required?: boolean;
}

interface ContactInfoProps {
  iconSrc: string;
  alt: string;
  header: string;
  link: string;
  linkText: string;
  blockText?: string;
}

const ContactFormVol3: React.FC = () => {
  const inputFields: InputFieldProps[] = [
    {
      id: 'name-242',
      name: 'name',
      placeholder: 'John/Jane Doe',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      id: 'email-242',
      name: 'email',
      placeholder: 'name@company.com',
      label: 'Email',
      type: 'text',
      required: true,
    },
    {
      id: 'phone-242',
      name: 'phone',
      placeholder: '+1 (206) 987-6543',
      label: 'Phone',
      type: 'text',
      required: true,
    },
    {
      id: 'find-242',
      name: 'find-us',
      placeholder: 'Social Media, Family, Friend...',
      label: 'How Did You Find Us',
      type: 'text',
    },
  ];

  const contactInfo: ContactInfoProps[] = [
    {
      iconSrc:
        'https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/mail.svg',
      alt: 'mail icon',
      header: 'Email',
      link: 'mailto:support@yourdomain.com',
      linkText: 'support@yourdomain.com',
    },
    {
      iconSrc:
        'https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/phone.svg',
      alt: 'phone icon',
      header: 'Phone',
      link: 'tel:206-987-6543',
      linkText: '(206) 987-6543',
    },
    {
      iconSrc:
        'https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/pin.svg',
      alt: 'address icon',
      header: 'Address',
      link: '',
      linkText: '2553 Woodbridge Lane, Boston Ware 120',
      blockText: '2553 Woodbridge Lane,',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.topper}>Here To Help</span>
          <h2 className={styles.title}>Contact Us</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Scelerisque enim risus lorem diam. Viverra egestas penatibus
            feugiat vitae in dignissim.
          </p>
        </div>
        {/* Form */}
        <form
          className={styles.form}
          name="Contact Form"
          method="post"
        >
          {inputFields.map((field) => (
            <InputField key={field.id} {...field} />
          ))}
          <label className={`${styles.label} ${styles.labelMessage}`}>
            Message
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              required
              name="Message"
              id="message-242"
              placeholder="Hello, I’m interested in..."
            ></textarea>
          </label>
          <button
            className={`${styles.buttonSolid} ${styles.submit}`}
            type="submit"
          >
            Submit Message Now
          </button>
        </form>
        {/* Contact Info */}
        <div className={styles.rightSection}>
          <ul className={styles.ul}>
            {contactInfo.map((info) => (
              <ContactInfo key={info.header} {...info} />
            ))}
          </ul>
          {/* Picture */}
          <picture className={styles.picture}>
            <source
              media="(max-width: 600px)"
              srcSet="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/map-m.jpg"
            />
            <source
              media="(min-width: 601px)"
              srcSet="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/map.jpg"
            />
            <img
              className={styles.img}
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/map.jpg"
              alt="google map"
              width="462"
              height="438"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  placeholder,
  label,
  type,
  required,
}) => {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        required={required}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
};

const ContactInfo: React.FC<ContactInfoProps> = ({
  iconSrc,
  alt,
  header,
  link,
  linkText,
  blockText,
}) => {
  return (
    <li className={styles.li}>
      <picture className={styles.iconWrapper}>
        <img
          aria-hidden="true"
          src={iconSrc}
          alt={alt}
          className={styles.icon}
          width="36"
          height="36"
          decoding="async"
        />
      </picture>
      <div className={styles.flexGroup}>
        <span className={styles.header}>{header}</span>
        {blockText ? (
          <a href={link} className={styles.link}>
            <span className={styles.block}>{blockText}</span> {linkText}
          </a>
        ) : (
          <a href={link} className={styles.link}>
            {linkText}
          </a>
        )}
      </div>
    </li>
  );
};

export default ContactFormVol3;
