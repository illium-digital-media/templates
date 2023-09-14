import React from 'react';
import styles from './Form.module.css';
import Topper from '@/components1/Topper/Topper';

const contactInfo = [
  { header: 'Address', link: 'PO Box 15252 Mill Creek, Washington, USA 98082' },
  { header: 'Email', link: 'info@iabuyer.com', href: 'mailto:info@iabuyer.com' },
  { header: 'Phone', link: '(425) 686-9566', href: 'tel:425-686-9566' },
];

const socialLinks = [
  { label: 'visit google profile', imgSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Social/google.svg', width: 11, height: 11 },
  { label: 'visit facebook profile', imgSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Social/Facebook.svg', width: 6, height: 11 },
  { label: 'visit instagram profile', imgSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Social/instagram.svg', width: 11, height: 11 },
];

const formInputs = [
  { label: 'Name', type: 'text', id: 'name-490', name: 'name', placeholder: 'John/Jane Doe' },
  { label: 'Email', type: 'email', id: 'email-490', name: 'email', placeholder: 'name@company.com' },
  { label: 'Phone', type: 'tel', id: 'phone-490', name: 'phone', placeholder: '+1 (206) 987-6543' },
  { label: 'How Did You Find Us', type: 'text', id: 'find-490', name: 'find-us', placeholder: 'Social Media, Family, Friend...' },
];

const Form: React.FC = () => {
  return (
    <section className={styles.csSection}>
      <div className={styles.csContainer}>
        <div className={styles.csContent}>
          <Topper text='Contact Us' />
          <h2 className={styles.csTitle}>Contact Information</h2>
          <p className={styles.csText}>
            Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Eu volutpat odio facilisis mauris sit amet massa. Sit amet est placerat in egestas
          </p>

          {contactInfo.map((item, index) => (
            <div key={index}>
              <span className={styles.csHeader}>{item.header}</span>
              <a href={item.href || ''} className={styles.csLink}>
                {item.link}
              </a>
            </div>
          ))}

          <div className={styles.csSocial}>
            {socialLinks.map((item, index) => (
              <a key={index} className={styles.csSocialLink} aria-label={item.label} href="">
                <img className={styles.csSocialImg} aria-hidden="true" loading="lazy" decoding="async" src={item.imgSrc} alt={item.label} width={item.width} height={item.height} />
              </a>
            ))}
          </div>
        </div>

        <form className={styles.csForm} name="Contact Form" method="post">
          {formInputs.map((input, index) => (
            <label key={index}>
              {input.label}
              <input required type={input.type} className={styles.csInput} name={input.name} placeholder={input.placeholder} />
            </label>
          ))}

          <label className={styles.csLabelMessage}>
            Message
            <textarea required name="Message" className={styles.csTextarea} placeholder="Hello, I’m interested in..."></textarea>
          </label>

          <button className={styles.csButtonSolid} type="submit">
            Submit Message Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
