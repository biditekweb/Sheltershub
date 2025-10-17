import React, { useState } from 'react';

const SearchPill: React.FC<{ text: string; active: boolean; onClick: () => void }> = ({ text, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 text-sm font-semibold rounded-t-lg transition-colors focus:outline-none text-white ${
      active ? 'bg-[#082956]' : 'bg-[#ff8d2a] hover:bg-[#236da8]'
    }`}
  >
    {text}
  </button>
);

const CustomSelect: React.FC<{ placeholder: string }> = ({ placeholder }) => (
    <div className="relative w-full bg-gray-100 rounded">
        <select className="w-full p-3 bg-transparent text-gray-500 appearance-none focus:outline-none">
            <option>{placeholder}</option>
            <option>Option 1</option>
            <option>Option 2</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
    </div>
);

const SearchForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState('For Rent');

  return (
    <div className="w-full">
      <div className="flex">
        <SearchPill text="FOR RENT" active={activeTab === 'For Rent'} onClick={() => setActiveTab('For Rent')} />
        <SearchPill text="FOR SALE" active={activeTab === 'For Sale'} onClick={() => setActiveTab('For Sale')} />
        <SearchPill text="LAND" active={activeTab === 'Land'} onClick={() => setActiveTab('Land')} />
      </div>
      <div className="bg-white p-6 rounded-b-lg rounded-r-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <CustomSelect placeholder="Property Type" />
            <CustomSelect placeholder="Region" />
            <CustomSelect placeholder="City" />
            <CustomSelect placeholder="No. of Bathrooms" />
            <CustomSelect placeholder="Max. Price" />
            <CustomSelect placeholder="Min. Price" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CustomSelect placeholder="No. of Bedrooms" />
            <CustomSelect placeholder="Area Size" />
            <button className="w-full bg-brand-blue text-white font-bold py-3 px-4 rounded hover:bg-brand-blue-dark transition-colors md:col-span-2 lg:col-span-1">
                Search
            </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;