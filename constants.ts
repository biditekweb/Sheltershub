import { Property, PropertyStatus } from './types';

export const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'For Rent', href: '#' },
  { name: 'For Sale', href: '#' },
  { name: 'Agency', href: '#' },
  { name: 'Agent', href: '#' },
  { name: 'Developer', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Contact', href: '#' },
];

export const heroImages = [
  'https://picsum.photos/1200/600?random=1',
  'https://picsum.photos/1200/600?random=2',
  'https://picsum.photos/1200/600?random=3',
];

export const adSliderImages = [
    'https://picsum.photos/800/400?random=21',
    'https://picsum.photos/800/400?random=22',
];


const generateProperties = (startId: number, count: number): Property[] => {
    const properties: Property[] = [];
    for (let i = 0; i < count; i++) {
        const isForSale = Math.random() > 0.5;
        properties.push({
            id: startId + i,
            images: [`https://picsum.photos/400/300?random=${startId + i}`],
            status: isForSale ? PropertyStatus.ForSale : PropertyStatus.ForRent,
            daysAgo: Math.floor(Math.random() * 30) + 1,
            isPremium: Math.random() > 0.7,
            propertyType: 'House',
            name: i === 0 && startId === 1 ? 'Lakeside Estate' : 'Modern Family Home',
            beds: i === 0 && startId === 1 ? 3 : Math.floor(Math.random() * 3) + 2,
            baths: i === 0 && startId === 1 ? 4 : Math.floor(Math.random() * 3) + 2,
            parking: i === 0 && startId === 1 ? 4 : Math.floor(Math.random() * 2) + 1,
            priceGHS: i === 0 && startId === 1 ? 1830055 : Math.floor(Math.random() * 2000000) + 500000,
            priceUSD: i === 0 && startId === 1 ? 150000 : Math.floor(Math.random() * 150000) + 40000,
        });
    }
    // Ensure the first property matches the design reference exactly
    if (startId === 1) {
        properties[0] = {
            id: 1,
            images: ['https://picsum.photos/400/300?random=4', 'https://picsum.photos/400/300?random=5'],
            status: PropertyStatus.ForSale,
            daysAgo: 15,
            isPremium: true,
            propertyType: 'House',
            name: 'Lakeside Estate',
            beds: 3,
            baths: 4,
            parking: 4,
            priceGHS: 1830055,
            priceUSD: 150000,
        };
    }
    return properties;
}


export const featuredProperties: Property[] = generateProperties(1, 6);
export const latestProperties: Property[] = generateProperties(7, 6);


export const footerLinks = {
    'Property Type': [
        { name: 'Residential Property', href: '#' },
        { name: 'House', href: '#' },
        { name: 'Apartment / Condos', href: '#' },
        { name: 'Land', href: '#' },
        { name: 'Townhouse', href: '#' },
    ],
    'Commercial Property': [
        { name: 'Apartment / Condos', href: '#' },
        { name: 'Land', href: '#' },
        { name: 'Townhouse', href: '#' },
        { name: 'Offices', href: '#' },
        { name: 'Industrial & Warehouse', href: '#' },
    ],
    'About Us': [
        { name: 'About Sheltershub', href: '#' },
        { name: 'Terms of Use', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Cookie Policy', href: '#' },
    ],
    'Support': [
        { name: 'support@sheltershub.com', href: 'mailto:support@sheltershub.com' },
        { name: 'Safety tips', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'FAQ', href: '#' },
    ],
    'Our Socials': [
        { name: 'Facebook', href: '#' },
        { name: 'Instagram', href: '#' },
        { name: 'YouTube', href: '#' },
        { name: 'Twitter', href: '#' },
    ],
};
