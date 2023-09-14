import React from 'react';
import styles from './Form.module.css';
import Topper from '@/components1/Topper/Topper';
import { contactInfo, socialLinks, formInputs } from './formdata';
import Section from '@/components1/Section';
import Title from '@/components1/Title/Title';

const Form: React.FC = () => {
  return (
    <Section>
      <div className={`w-full m-auto flex flex-col justify-center items-start gap-12 ${styles.csContainer}`}>
        <div className={`text-left ${styles.csContent}`}>
          <Topper text='Contact Us' />
          <Title title='Contact Information' />
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
    </Section>
  );
};

export default Form;
