import React from 'react';
import Image from 'next/image';
import styles from './Services3Card.module.css';
import { services } from './services';
import charityWaves from './charity-waves.svg';

const GreyShape = () => {
    return (
        <svg className={`w-full h-auto ${styles.csGraphic}`} width="100" height="104" viewBox="0 0 100 104" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.862 94.7359C18.9012 97.8335 22.4079 100.605 26.4322 102.3C29.9974 103.795 33.9633 104.187 37.6203 102.785C42.0287 101.09 45.1346 97.1071 47.2637 93.0493C48.7749 90.1605 49.9689 87.113 51.3799 84.174C52.8911 81.0347 54.5443 77.9371 56.6316 75.1317C58.6271 72.4516 61.0902 70.0386 64.1293 68.5859C67.0933 67.1581 70.4748 66.8409 73.6892 67.417C76.3276 67.8845 78.8575 68.8614 81.5293 69.1035C83.8838 69.3122 86.2382 68.8363 88.384 67.8762C89.0854 67.6841 89.7784 67.417 90.4463 67.0579C92.8926 65.722 94.7545 63.4677 96.1322 61.0798C99.1379 55.8615 100.349 49.7332 99.9144 43.7634C98.8874 29.6865 90.3545 17.1709 78.7907 9.44777C68.4793 2.56795 55.6631 -0.846915 43.3145 0.88139C37.1026 1.74972 31.0661 4.02073 25.8812 7.56918C20.8048 11.0508 16.2878 15.4676 12.4555 20.2768C5.25839 29.3024 0.808235 40.3569 0.106894 51.904C-0.5527 62.6746 1.84355 73.7875 7.2038 83.1721C9.5917 87.3467 12.4889 91.296 15.862 94.7359Z" fill="#484848" />
        </svg>
    )
}

const Services3Card = () => {
    return (
        <section className={`relative ${styles.services3Card}`}>
            <div className={`mx-auto w-full items-center flex flex-col ${styles.csContainer}`}>
                <ul className={`w-full flex flex-col items-center m-0 p-0 md:flex-row md:justify-between md:align-stretch ${styles.csCardGroup}`}>
                    {services.map((item, index) => (
                        <li className={`text-center w-full flex flex-col items-center justify-center lg:text-left lg:flex-row lg:items-center lg:justify-between ${styles.csItem}`} key={index}>
                            <div className={`flex h-auto relative flex-none items-center justify-center ${styles.csImageGroup}`}>
                                <item.iconSrc styling={`absolute h-auto top-1/2 left-1/2 ${styles.csIcon}`} />
                                <GreyShape />
                            </div>
                            <div>
                                <h2 className={`font-bold mb-3 ${styles.csH2}`}>{item.title}</h2>
                                <p className={`m-0 text-base ${styles.csItemText}`}>{item.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <Image
                className={`h-full w-full top-0 left-0 absolute object-cover ${styles.csWaves}`}
                src={charityWaves}
                alt="waves"
                aria-hidden="true"
                width={1920}
                height={616}
                loading="lazy"
                decoding="async"
            />
        </section>
    );
}

export default Services3Card;
