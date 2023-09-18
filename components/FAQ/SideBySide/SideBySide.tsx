import React from 'react';
import styles from './SideBySide.module.css'; // Assuming you have a CSS module for styling

const FAQSideBySide = () => {
    // Define an array of FAQ items
    const faqItems = [
        {
            question: 'What are your prices for brake replacement?',
            answer:
                'Some cleaning plans require a minimum commitment term. Cancelling your plan before the minimum term is complete will result in a $99 fee. If you want to learn more information about how to cancel, please inbox us.',
        },
        {
            question: 'What is your plan cancellation policy?',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim ipsum porta enim, magna urna, quam.',
        },
        // Add more FAQ items as needed
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageGroup}>
                    <picture className={`${styles.picture} ${styles.picture1}`}>
                        <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/body-shop.jpg" />
                        <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/body-shop.jpg" />
                        <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/body-shop.jpg" alt="body shop" width="522" height="609" aria-hidden="true" />
                    </picture>
                    <picture className={`${styles.picture} ${styles.picture2}`}>
                        <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/mechanic-cutout.png" />
                        <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/mechanic-cutout.png" />
                        <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/mechanic-cutout.png" alt="mechanic" width="263" height="650" aria-hidden="true" />
                    </picture>
                </div>
                <div className={styles.content}>
                    <span className={styles.topper}>Asked questions</span>
                    <h2 className={styles.title}>Frequently Asked Questions</h2>
                    {/* FAQ List */}
                    <ul className={styles.faqList}>
                        {faqItems.map((item, index) => (
                            <li
                                key={index}
                                className={`${styles.faqItem} ${index === 0 ? styles.active : ''
                                    }`}
                            >
                                <button className={styles.button}>
                                    <span className={styles.buttonText}>{item.question}</span>
                                </button>
                                <p className={styles.itemP}>{item.answer}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FAQSideBySide;
