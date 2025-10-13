
export enum PropertyStatus {
  ForSale = 'For Sale',
  ForRent = 'For Rent',
  Land = 'Land',
}

export interface Property {
  id: number;
  image: string;
  status: PropertyStatus;
  name: string;
  location: string;
  price: string;
  sqft: number;
  beds: number;
  baths: number;
}
