import React, { useState } from 'react';
import { Property } from '../types';
import { BedIcon, BathIcon, ParkingIcon, HeartIcon } from './icons/PropertyIcons';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden group transition-shadow duration-300 hover:shadow-lg">
      <div className="relative">
        <img src={property.images[currentImageIndex]} alt={property.name} className="w-full h-56 object-cover" />

        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="bg-white text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-md shadow">{property.status}</span>
          <span className="bg-white text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-md shadow">{property.daysAgo} Days Ago</span>
        </div>

        <button 
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:text-red-500 hover:bg-white transition-all" 
          aria-label="Add to favorites"
        >
          <HeartIcon isFilled={isFavorited} />
        </button>

        {property.images.length > 1 && (
            <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
            {property.images.map((_, index) => (
                <button 
                    key={index} 
                    onClick={() => setCurrentImageIndex(index)}
                    className={`block h-2 w-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
                    aria-label={`Go to image ${index + 1}`}
                />
            ))}
            </div>
        )}

        {property.isPremium && (
          <span className="absolute bottom-4 right-4 bg-[#F9A826] text-white text-sm font-semibold px-4 py-1.5 rounded-md shadow">
            Premium
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-gray-500">{property.propertyType}</p>
          <a href="#" className="text-sm text-gray-800 font-medium hover:text-brand-blue">Quick look</a>
        </div>

        <h3 className="font-bold text-xl text-gray-900 truncate mb-4">{property.name}</h3>
        
        <div className="flex items-start text-center text-sm text-gray-500 mb-4">
            <div className="flex-1 text-left pr-3">
                <p>Bedrooms</p>
                <div className="flex items-center gap-2 mt-1 text-base">
                <BedIcon />
                <span className="font-bold text-gray-800">{property.beds}</span>
                </div>
            </div>
            <div className="flex-1 text-left border-l border-gray-200 px-3">
                <p>Bathrooms</p>
                <div className="flex items-center gap-2 mt-1 text-base">
                <BathIcon />
                <span className="font-bold text-gray-800">{property.baths}</span>
                </div>
            </div>
            <div className="flex-1 text-left border-l border-gray-200 pl-3">
                <p>Parking</p>
                <div className="flex items-center gap-2 mt-1 text-base">
                <ParkingIcon />
                <span className="font-bold text-gray-800">{property.parking}</span>
                </div>
            </div>
        </div>

        <hr className="my-4 border-gray-200" />

        <div>
          <p className="text-2xl font-bold text-gray-900">
            GH₵{property.priceGHS.toLocaleString('en-US')}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            USD {property.priceUSD.toLocaleString('en-US')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
