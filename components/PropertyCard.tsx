
import React from 'react';
import { Property, PropertyStatus } from '../types';
import { BedIcon, BathIcon, SqftIcon } from './icons/PropertyIcons';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const getStatusClass = (status: PropertyStatus) => {
    switch (status) {
      case PropertyStatus.ForSale:
        return 'bg-orange-500';
      case PropertyStatus.ForRent:
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getPriceClass = (status: PropertyStatus) => {
    return status === PropertyStatus.ForSale ? 'bg-green-600' : 'bg-green-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      <div className="relative">
        <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
        <span className={`absolute top-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-full ${getStatusClass(property.status)}`}>
          {property.status}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 truncate">{property.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{property.location}</p>
        <div className={`inline-block text-white font-bold text-sm px-4 py-1 rounded-md ${getPriceClass(property.status)} mb-4`}>
          {property.price}
        </div>
        <div className="flex items-center text-gray-600 text-sm space-x-4 border-t pt-3">
          <div className="flex items-center space-x-1">
            <SqftIcon />
            <span>{property.sqft} Sqft</span>
          </div>
          <div className="flex items-center space-x-1">
            <BedIcon />
            <span>{property.beds} Bed</span>
          </div>
          <div className="flex items-center space-x-1">
            <BathIcon />
            <span>{property.baths} Bath</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
