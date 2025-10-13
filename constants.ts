
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


export const featuredProperties: Property[] = [
  { id: 1, image: 'https://picsum.photos/400/300?random=4', status: PropertyStatus.ForSale, name: 'Comfortable Apartment in Palace', location: 'Popular Properties', price: 'From $20k', sqft: 1200, beds: 2, baths: 2 },
  { id: 2, image: 'https://picsum.photos/400/300?random=5', status: PropertyStatus.ForRent, name: 'Comfortable Apartment in Palace', location: 'Popular Properties', price: '$563/month', sqft: 1200, beds: 2, baths: 2 },
  { id: 3, image: 'https://picsum.photos/400/300?random=6', status: PropertyStatus.ForSale, name: 'Comfortable Apartment in Palace', location: 'Popular Properties', price: 'From $20k', sqft: 1200, beds: 2, baths: 2 },
  { id: 4, image: 'https://picsum.photos/400/300?random=7', status: PropertyStatus.ForRent, name: 'Comfortable Apartment in Palace', location: 'Popular Properties', price: '$563/month', sqft: 1200, beds: 2, baths: 2 },
  { id: 5, image: 'https://picsum.photos/400/300?random=8', status: PropertyStatus.ForSale, name: 'Comfortable Apartment in Palace', location: 'Popular Properties', price: 'From $20k', sqft: 1200, beds: 2, baths: 2 },
  { id: 6, image: 'https://picsum.photos/400/300?random=9', status: PropertyStatus.ForSale, name: 'Comfortable Apartment in Palace', location: 'Popular Properties', price: 'From $20k', sqft: 1200, beds: 2, baths: 2 },
];

export const latestProperties: Property[] = [
    { id: 7, image: 'https://picsum.photos/400/300?random=10', status: PropertyStatus.ForSale, name: 'Comfortable Apartment in Palace', location: 'Popular Properties', price: 'From $20k', sqft: 1200, beds: 2, baths: 2 },
    { id: 8, image: 'https://picsum.photos/400/300?random=11', status: PropertyStatus.ForRent, name: 'Comfortable Apartment in Palace', location: 'Popular Properties', price: '$563/month', sqft: 1200, beds: 2, baths: 2 },
    { id: 9, image: 'https://picsum.photos/400/300?random=12', status: PropertyStatus.ForSale, name: 'Comfortable Apartment in Palace', location: 'Popular Properties', price: 'From $20k', sqft: 1200, beds: 2, baths: 2 },
    { id: 10, image: 'https://picsum.photos/400/300?random=13', status: PropertyStatus.ForRent, name: 'Comfortable Apartment in Palace', location: 'Popular Properties', price: '$563/month', sqft: 1200, beds: 2, baths: 2 },
    { id: 11, image: 'https://picsum.photos/400/300?random=14', status: PropertyStatus.ForSale, name: 'Comfortable Apartment in Palace', location: 'Popular Properties', price: 'From $20k', sqft: 1200, beds: 2, baths: 2 },
    { id: 12, image: 'https://picsum.photos/400/300?random=15', status: PropertyStatus.ForSale, name: 'Comfortable Apartment in Palace', location: 'Popular Properties', price: 'From $20k', sqft: 1200, beds: 2, baths: 2 },
];

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
