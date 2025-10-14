
import React from 'react';
import ImageSlider from './ImageSlider';
import SearchForm from './SearchForm';
import { heroImages } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <ImageSlider images={heroImages} height="h-96 md:h-[450px]" />
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-4">
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
