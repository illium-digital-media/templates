import Link from 'next/link';
import Image from 'next/image';
import styles from './LandingCenter.module.css';
import playSvg from './Play.svg';
import backgroundM from './BackgroundM.jpg';
import background from './Background.jpg';
import Topper from '@/components1/Topper/Topper';

const LandingCenter: React.FC = () => {
    return (
        <section className={styles.hero229}>
            <div className={styles.csContainer}>
                <div className={styles.csFlexGroup}>
                    <Topper text='Mountain Hiking Society' />
                    <h1 className={styles.csTitle}>Explore the World with Exciting People</h1>
                    <p className={styles.csText}>
                        Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Nibh tortor id aliquet lectus proin nibh condimentum.
                    </p>
                    <Link href="/explore">
                        <div className={styles.csButtonSolid}>Explore More</div>
                    </Link>
                    <Link href="/learn-more">
                        <div className={styles.csButtonTransparent}>
                            <Image
                                className={styles.csImg}
                                src={playSvg}
                                alt="play icon"
                                width={17}
                                height={17}
                                loading="lazy"
                                decoding="async"
                            />
                            Learn More
                        </div>
                    </Link>
                </div>
            </div>

            {/* Background Image */}
            <picture className={styles.csPicture}>
                <source media="(max-width: 600px)" srcSet={backgroundM.src} />
                <source media="(min-width: 601px)" srcSet={background.src} />
                <Image
                    loading="lazy"
                    decoding="async"
                    src={background}
                    alt="mountains"
                    width={2250}
                    height={1500}
                    aria-hidden="true"
                />
            </picture>
        </section>
    );
};

export default LandingCenter;
