import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroContentRight.module.css';
import heroImage from './herocontentright.jpg'
import Topper from '@/components1/Topper/Topper';

function Hero() {
    return (
        <section className={`relative overflow-hidden lg:text-left bg-gray-200 ${styles.hero856}`}>
            <div className={`w-full flex flex-col space-y-12 mx-auto flex justify-center items-center lg:flex-row lg:justify-between ${styles.csContainer}`}>
                <div className={`flex justify-center items-center flex-col lg:flex-none lg:items-start lg:order-2 ${styles.csContent}`}>
                    <Topper text={"Modern and Professional"} />
                    <h1 className={`relative text-center font-extrabold lg:text-left ${styles.csTitle}`}>Physical Therapy & Health and Wellness</h1>
                    <p className={`text-center w-full lg:text-left ${styles.csText}`}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus unde id saepe quo. Est, ea! Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Id, provident? Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                    <Link href="/appointment">
                        <div className={`text-white font-bold text-center no-underline inline-block relative rounded box-border text-base px-6 ${styles.csButtonSolid}`}>Schedule An Appointment</div>
                    </Link>
                </div>

                <div className={`overflow-hidden block relative w-full ${styles.csPicture}`}>
                    <Image
                        src={heroImage}
                        alt="therapy"
                        width={570}
                        height={701}
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="top"
                    />
                </div>
            </div>

            <svg className={`absolute block left-1/2 bottom-0 h-auto transform -translate-x-1/2 ${styles.csWave}`} width="1920" height="179" viewBox="0 0 1920 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1920 179V91.3463C1835.33 91.3463 1715.47 76.615 1549.2 32.9521C1299.48 -32.3214 1132.77 12.1006 947.32 61.5167C810.762 97.9044 664.042 137 466.533 137C331.607 137 256.468 123.447 188.082 111.113C130.974 100.812 78.5746 91.3609 0 91.3609V179H1920Z" fill="white" />
            </svg>
        </section>
    );
}

export default Hero;
