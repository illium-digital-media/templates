import Image from 'next/image';
import styles from './SideBySide.module.css';
import peopleImage from './people.jpg';
import { services } from './services';
import Cube from './Cube';
import Link from 'next/link';
import Topper from '@/components1/Topper/Topper';

const SideBySide = () => {
    return (
        <section className={`relative overflow-hidden ml-0 mr-0 ${styles.sideBySide}`}>
            <div className={`w-full m-auto flex flex-col justify-center items-start relative z-10 ${styles.csContainer}`}>
                <div className={`w-full`}>
                    <Topper text='Service' color='text-white' />
                    <h2 className={`font-black relative mb-4 ${styles.csTitle}`}>Laboratory Testing Services</h2>
                </div>
                <ul className={`w-full p-0 m-0 flex flex-col justify-center items-center ${styles.csCardGroup}`}>
                    {services.map((service, index) => (
                        <li className={`w-full flex flex-col justify-center items-start ${styles.csItem}`} key={index}>
                            <Cube styling={`h-auto block ${styles.csIcon}`} />
                            <div className={styles.csFlexGroup}>
                                <h3 className={`font-bold uppercase mb-5 ${styles.csH3}`}>{service.title}</h3>
                                <p className={`text-left m-0 ${styles.csItemText}`}>
                                    {service.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
                <button className={`relative font-bold text-center m-0 text-base inline-block rounded text-black ${styles.csButtonSolid}`}>
                    <Link href="" >
                        <span className='block h-full w-full'>
                            Learn More
                        </span>
                    </Link>
                </button>

            </div>
            <picture className={`w-full h-auto block absolute top-0 left-0 md:h-auto md:absolute md:bottom-0 ${styles.csBackground}`}>
                <Image src={peopleImage} alt="people" />
            </picture>
        </section>
    );
};

export default SideBySide;
