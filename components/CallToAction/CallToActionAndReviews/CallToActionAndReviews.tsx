import React from 'react';
import styles from './CallToActionAndReviews.module.css';

const CallToActionAndReviews = () => {
  return (
    <>
      {/* Call To Action Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <span className={styles.topper}>Trusted Car Repair Company</span>
            <h2 className={styles.title}>The Best Service Is Our Main Goal</h2>
            <a href="" className={styles.buttonSolid}>
              Contact Now
            </a>
          </div>
          <picture className={styles.picture}>
            <source
              media="(max-width: 600px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/yellow-car.png"
            />
            <source
              media="(min-width: 601px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/yellow-car.png"
            />
            <img
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/yellow-car.png"
              alt="yellow car"
              width="779"
              height="482"
            />
          </picture>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews-1192" className={styles.reviews}>
        <div className={styles.container}>
          {/* Person */}
          <picture className={styles.personPicture}>
            <source
              media="(max-width: 600px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/suit.jpg"
            />
            <source
              media="(min-width: 601px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/suit.jpg"
            />
            <img
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/suit.jpg"
              alt="man in suit"
              width="738"
              height="493"
            />
          </picture>
          <div className={styles.reviewGroup}>
            <img
              className={styles.icon}
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/red-quotes.svg"
              alt="red quotes"
              width="97"
              height="80"
              aria-hidden="true"
            />
            <p className={styles.reviewText}>
              When you think about collecting customer feedback, it’s easy to
              get overwhelmed by the sheer volume of. With so many more customers
              and so many ways to connect with their feedback it’s hard to know
              where to start.
            </p>
            <div className={styles.info}>
              <img
                className={styles.profile}
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/mech-profile.png"
                alt="profile"
                width="50"
                height="50"
                aria-hidden="true"
              />
              <div className={styles.flex}>
                <span className={styles.name}>George Thomas</span>
                <span className={styles.desc}>Founder Of Yokoloko</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToActionAndReviews;
