interface StatItem {
    iconSrc: string;
    number: string;
    description: string;
}

const statsItems: StatItem[] = [
    {
        iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/person-gold.svg',
        number: '50+',
        description: 'Attorneys',
    },
    {
        iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/group-gold.svg',
        number: '850+',
        description: 'Global Customers',
    },
    {
        iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/award-gold.svg',
        number: '12',
        description: 'Winning Awards',
    },
    {
        iconSrc: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/check-gold.svg',
        number: '98%',
        description: 'Success Rate',
    },
];

export default statsItems;