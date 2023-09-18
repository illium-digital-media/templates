import React from 'react';
import styles from './Form.module.css';
import Topper from '@/components1/Topper/Topper';
import { contactInfo, socialLinks, formInputs } from './formdata';
import Section from '@/components1/Section';
import Title from '@/components1/Title/Title';

const Form: React.FC = () => {
  return (
    <Section>
      <div className={`w-full m-auto flex flex-col justify-center items-start gap-12 md:flex-row md:justify-between ${styles.csContainer}`}>
        <div className={`text-left ${styles.csContent}`}>
          <Topper text='Contact Us' />
          <Title title='Contact Information' />
          <p className={`w-full ${styles.csText}`}>
            Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Eu volutpat odio facilisis mauris sit amet massa. Sit amet est placerat in egestas
          </p>

          {contactInfo.map((item, index) => (
            <div key={index}>
              <span className={`block uppercase font-bold mb-4 ${styles.csHeader}`}>{item.header}</span>
              <a href={item.href || ''} className={`font-bold hover:underline ${styles.csLink}`}>
                {item.link}
              </a>
            </div>
          ))}

          <div className={`inline-flex justify-start gap-3 ${styles.csSocial}`}>
            {socialLinks.map((item, index) => (
              <a key={index} className={`rounded-full flex justify-center items-center relative ${styles.csSocialLink}`} aria-label={item.label} href="">
                <img className={`w-auto block ${styles.csSocialImg}`} aria-hidden="true" loading="lazy" decoding="async" src={item.imgSrc} alt={item.label} width={item.width} height={item.height} />
              </a>
            ))}
          </div>
        </div>

        <form className={`w-full border-box rounded-2xl md:m-0 ${styles.csForm}`} name="Contact Form" method="post">
          {formInputs.map((input, index) => (
            <label className={'flex justify-center items-start flex-col'} key={index}>
              {input.label}
              <input required type={input.type} className={styles.csInput} name={input.name} placeholder={input.placeholder} />
            </label>
          ))}

          <label className={styles.csLabelMessage}>
            Message
            <textarea required name="Message" className={styles.csTextarea} placeholder="Hello, I’m interested in..."></textarea>
          </label>

          <button className={`w-full font-bold rounded-lg text-base text-white inline-block relative hover:before:w-full before:h-full before:absolute before:rounded-lg before:bg-black before:left-0 ${styles.csButtonSolid}`} type="submit">
            Submit Message Now
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Form;
