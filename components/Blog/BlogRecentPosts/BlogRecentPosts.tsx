import React from 'react';
import styles from './BlogRecentPosts.module.css';
import Topper from '@/components1/Topper/Topper';

const posts = [
    {
      id: 1,
      imageSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/salon10.jpg',
      date: '07 Sep, 2022',
      title: 'Healthy hair tips: How to keep your locks looking luscious',
      description: 'How to style without causing damage, and tips on maintaining a healthy diet for healt...',
      link: '#',
    },
    {
      id: 2,
      imageSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/salon11.jpg',
      date: '15 Aug, 2022',
      title: 'The art of hairstyling: Top trends for the upcoming season',
      description: 'Explore the latest hairstyling trends and discover how to achieve a fresh look for any occasion.',
      link: '#',
    },
    {
      id: 3,
      imageSrc: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/salon12.jpg',
      date: '02 Aug, 2022',
      title: 'Haircare essentials: Products and routines for healthy hair',
      description: 'Learn about the must-have haircare products and daily routines to maintain strong and beautiful hair.',
      link: '#',
    },
  ];
  

const BlogPostItem: React.FC<{
  imageSrc: string;
  date: string;
  title: string;
  description: string;
  link: string;
}> = ({ imageSrc, date, title, description, link }) => (
  <li className={`w-full flex flex-col justify-end items-center relative hover:cursor-pointer ${styles.item}`}>
    <picture className={`w-full overflow-hidden block relative ${styles.picture}`}>
      <img loading="lazy" decoding="async" src={imageSrc} alt="stylist" width="413" height="480" />
    </picture>
    <div className={`flex flex-col items-start absolute bottom-0 right-0 z-10 border-box before:w-full before:h-full before:absolute before:block before:top-0 before:left-0 ${styles.info}`}>
      <span className={`text-base font-bold mb-5 flex justify-start items-center gap-2 ${styles.date}`}>
        <img className={`w-5 h-auto ${styles.icon}`} loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/calendar.svg" alt="stylist" width="20" height="20" />
        {date}
      </span>
      <h3 className={`font-bold mb-3 text-white block ${styles.h3}`}>{title}</h3>
      <span className={`mb-5 block ${styles.desc}`}>{description}</span>
      <a href={link} className={`text-base font-bold w-auto inline-block relative hover:text-white ${styles.link}`}>Read More</a>
    </div>
  </li>
);

const BlogRecentPosts: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={`w-full m-auto flex flex-col items-center md:max-w-7xl ${styles.container}`}>
        <div className={`text-center w-full flex flex-col items-center md:text-left md:flex-row md:justify-between md:items-end md:gap-12 ${styles.content}`}>
          <div className={styles.flex}>
            <Topper text='News & Articles' />
            <h2 className={styles.title}>Directly from The Latest News and Articles</h2>
          </div>
          <a href="" className={styles.buttonSolid}>View All</a>
        </div>
        <ul className={`w-full flex flex-col relative lg:flex-row ${styles.cardGroup}`}>
          {posts.map((post) => (
            <BlogPostItem
              key={post.id}
              imageSrc={post.imageSrc}
              date={post.date}
              title={post.title}
              description={post.description}
              link={post.link}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogRecentPosts;
